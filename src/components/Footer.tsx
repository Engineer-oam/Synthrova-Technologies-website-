import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-synthrova-black text-synthrova-white py-20 px-6 lg:px-8 border-t border-synthrova-blue/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block mb-6 group shrink-0">
            <span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-70 text-synthrova-white">Synthrova</span>
          </Link>
          <p className="text-sm text-synthrova-lightgrey mb-6 max-w-sm text-balance">
            Technology for the systems that matter.
          </p>
          <p className="text-xs text-synthrova-white/50">
            Synthrova Technologies Pvt. Ltd.<br />
            India
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-mono tracking-widest uppercase mb-6 text-synthrova-white/40">Synthrova</h4>
          <ul className="space-y-4 text-sm text-synthrova-lightgrey">
            <li><Link to="/technology" className="hover:text-synthrova-white transition-colors">Technology</Link></li>
            <li><Link to="/eledger" className="hover:text-synthrova-white transition-colors">E-Ledger</Link></li>
            <li><Link to="/industries" className="hover:text-synthrova-white transition-colors">Industries</Link></li>
            <li><Link to="/programs" className="hover:text-synthrova-white transition-colors">Programs</Link></li>
            <li><Link to="/company" className="hover:text-synthrova-white transition-colors">Company</Link></li>
            <li><Link to="/insights" className="hover:text-synthrova-white transition-colors">Insights</Link></li>
            <li><Link to="/careers" className="hover:text-synthrova-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-mono tracking-widest uppercase mb-6 text-synthrova-white/40">Resources</h4>
          <ul className="space-y-4 text-sm text-synthrova-lightgrey">
            <li><Link to="/platform" className="hover:text-synthrova-white transition-colors">Documentation</Link></li>
            <li><Link to="/security" className="hover:text-synthrova-white transition-colors">Security</Link></li>
            <li><Link to="/privacy" className="hover:text-synthrova-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-synthrova-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/contact" className="hover:text-synthrova-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase mb-6 text-synthrova-white/40">Programs</h4>
            <ul className="space-y-4 text-sm text-synthrova-lightgrey">
              <li><Link to="/programs#ai" className="hover:text-synthrova-white transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/programs#energy" className="hover:text-synthrova-white transition-colors">Energy Infrastructure</Link></li>
              <li><Link to="/programs#defence" className="hover:text-synthrova-white transition-colors">Defence & Security</Link></li>
              <li><Link to="/programs" className="hover:text-synthrova-white transition-colors">Emerging Tech</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-mono tracking-widest uppercase mb-6 text-synthrova-white/40">Social</h4>
            <ul className="space-y-4 text-sm text-synthrova-lightgrey">
              <li><a href="https://www.linkedin.com/company/synthrova/" target="_blank" rel="noopener noreferrer" className="hover:text-synthrova-white transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com/Synthrova" target="_blank" rel="noopener noreferrer" className="hover:text-synthrova-white transition-colors">X</a></li>
              <li><a href="https://www.instagram.com/synthrova?igsh=MTVheXA5NmRydWdjcw==" target="_blank" rel="noopener noreferrer" className="hover:text-synthrova-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-synthrova-white/10 text-[10px] tracking-wider uppercase font-mono text-synthrova-white/40 flex flex-col md:flex-row justify-between items-start md:items-center">
        <p>© {new Date().getFullYear()} Synthrova Technologies Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
