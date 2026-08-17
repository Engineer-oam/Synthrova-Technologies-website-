import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-synthrova-black text-synthrova-white py-20 px-6 lg:px-8 border-t border-synthrova-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-6 bg-white/90 p-2 rounded-sm w-fit">
            <img src="https://drive.google.com/uc?export=view&id=1dJjbXPsCrYKbQIxkZUM3TsQqvdp_X27S" alt="Synthrova" className="h-8 object-contain" />
          </Link>
          <p className="text-sm text-synthrova-grey mb-6 text-balance">
            Technology for the systems that matter.
          </p>
          <p className="text-xs text-synthrova-white/50">
            Synthrova Technologies Pvt. Ltd.<br />
            India
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-synthrova-grey">
            <li><Link to="/platform" className="hover:text-synthrova-white transition-colors">Platform</Link></li>
            <li><Link to="/platform" className="hover:text-synthrova-white transition-colors">E-Ledger</Link></li>
            <li><Link to="/industries" className="hover:text-synthrova-white transition-colors">Industries</Link></li>
            <li><Link to="/technology" className="hover:text-synthrova-white transition-colors">Technology</Link></li>
            <li><Link to="/programs" className="hover:text-synthrova-white transition-colors">Programs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-synthrova-grey">
            <li><Link to="/insights" className="hover:text-synthrova-white transition-colors">Insights</Link></li>
            <li><Link to="/company" className="hover:text-synthrova-white transition-colors">About Us</Link></li>
            <li><Link to="/company#careers" className="hover:text-synthrova-white transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-synthrova-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-synthrova-grey">
            <li><a href="#" className="hover:text-synthrova-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-synthrova-white transition-colors">X</a></li>
            <li><a href="#" className="hover:text-synthrova-white transition-colors">GitHub</a></li>
          </ul>
          
          <div className="mt-12 space-y-4 text-xs text-synthrova-white/40 flex flex-col">
            <Link to="#" className="hover:text-synthrova-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-synthrova-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-synthrova-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-synthrova-white/10 text-xs text-synthrova-white/40 flex flex-col md:flex-row justify-between items-start md:items-center">
        <p>© {new Date().getFullYear()} Synthrova Technologies Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
