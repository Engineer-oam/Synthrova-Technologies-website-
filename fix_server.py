import re

with open('server.ts', 'r') as f:
    content = f.read()

# Replace the module setup
old_setup = """import { fileURLToPath } from 'url';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);"""

new_setup = """import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

// __dirname fallback for ESM/CJS compatibility
const _dirname = process.cwd();"""

content = content.replace(old_setup, new_setup)
content = content.replace('__dirname', '_dirname')

with open('server.ts', 'w') as f:
    f.write(content)

