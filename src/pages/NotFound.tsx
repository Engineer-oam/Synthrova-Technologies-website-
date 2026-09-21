import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-synthrova-white text-synthrova-black px-6">
      <SEO 
        title="Page Not Found | Synthrova Technologies"
        description="The page you are looking for does not exist or has been moved."
      />
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">404 - Page Not Found</h1>
        <p className="text-xl text-synthrova-black/70 font-light mb-12">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-flex items-center text-sm font-medium uppercase tracking-widest hover:text-synthrova-blue transition-colors group">
          Return to Homepage <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
