import express from 'express';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

// _dirname fallback for ESM/CJS compatibility
const _dirname = process.cwd();

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === 'production';

  // 1. Basic Middleware (Observability, Security, Performance)
  // Disable x-powered-by
  app.disable('x-powered-by');
  
  // Security headers
  app.use(helmet({
    contentSecurityPolicy: false, // Too restrictive for this demo unless explicitly tailored
    crossOriginEmbedderPolicy: false
  }));

  // Compression for text/JSON responses
  app.use(compression());
  app.use(cors());
  app.use(express.json({ limit: '1mb' })); // Limit payload size to protect against large payloads

  // 2. Structured Logging middleware
  app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      if (
        !req.url.includes('hmr') && 
        !req.url.match(/\.(css|js|ts|tsx|json|ico|png|jpg|svg|woff2?)$/) &&
        !req.url.startsWith('/@') &&
        !req.url.startsWith('/src/') &&
        !req.url.startsWith('/node_modules/')
      ) {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
      }
    });
    next();
  });

  // 3. API Endpoints
  const apiRouter = express.Router();

  // Health check - separates app running from app ready
  apiRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
  });

  // Contact API with rate limiting
  const contactRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 contact requests per windowMs
    message: { error: 'Too many requests from this IP, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
  });

  apiRouter.post('/contact', contactRateLimiter, async (req, res) => {
    const { firstName, lastName, email, company, industry, interest, message } = req.body;

    // Server-side validation
    if (!email || !firstName || !lastName || !company) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Input sanitization (basic simulation)
    const sanitizedEmail = email.toLowerCase().trim();

    // Simulate async database/queue processing without blocking the user
    // The requirement states: "store submission -> return success immediately -> asynchronous notification"
    setTimeout(() => {
      console.log(`[BACKGROUND TASK] Contact submission saved for ${sanitizedEmail}`);
      // Simulate email notification queue here
    }, 100); // simulate some small delay

    // Return success immediately
    res.status(200).json({ success: true, message: 'Your message has been received.' });
  });

  app.use('/api', apiRouter);

  // 4. Static Serving & SSR Fallback
  if (isProd) {
    // Production: serve static files via express with aggressive caching for assets
    const distPath = path.join(process.cwd(), 'dist');
    const assetsPath = path.join(distPath, 'assets');
    
    // Immutable caching for hashed assets
    app.use('/assets', express.static(assetsPath, {
      maxAge: '1y',
      immutable: true
    }));

    // Standard caching for other public files
    app.use(express.static(distPath, {
      maxAge: '1d'
    }));

    // Fallback to index.html for SPA (do not cache index.html)
    app.get('*', (req, res) => {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // Development: Use Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  // 5. Global Error Handler
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${err.stack}`);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Production-grade server running on http://0.0.0.0:${PORT}`);
    console.log(`Environment: ${isProd ? 'Production' : 'Development'}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
