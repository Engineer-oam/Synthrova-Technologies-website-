with open('src/pages/Updates.tsx', 'r') as f:
    content = f.read()

import re

old_section = re.search(r'function FeaturedStorySection\(\) \{.*?(?=function ArticlesGridSection)', content, re.DOTALL).group(0)

new_section = """function FeaturedStorySection() {
  return (
    <section className="py-20 md:py-32 bg-synthrova-white text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link to="/updates/design-partners-audit-ca" className="flex flex-col lg:flex-row gap-0 border border-synthrova-lightgrey/10 group cursor-pointer hover:border-synthrova-lightgrey/30 transition-colors">
          
          <div className="lg:w-3/5 bg-synthrova-black/5 relative overflow-hidden min-h-[400px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-synthrova-lightgrey/10">
            {/* Technical visual pattern */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"> 
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                
                <circle cx="30" cy="40" r="15" fill="none" stroke="rgba(0,188,212,0.2)" strokeWidth="0.5" />
                <circle cx="30" cy="40" r="10" fill="none" stroke="rgba(0,188,212,0.4)" strokeWidth="0.5" />
                <circle cx="30" cy="40" r="2" fill="#00BCD4" />
                
                <circle cx="70" cy="60" r="20" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                <circle cx="70" cy="60" r="2" fill="currentColor" />
                
                <line x1="30" y1="40" x2="70" y2="60" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>
            <div className="absolute top-6 left-6 bg-synthrova-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase border border-synthrova-lightgrey/10">
              Design Partners
            </div>
          </div>
          
          <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center bg-synthrova-white relative">
            <div className="font-mono text-[10px] tracking-widest text-synthrova-black/60 uppercase mb-6">
              Announcement
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-tight group-hover:text-synthrova-blue transition-colors">
              Calling Audit & CA Firms: Become an E-Ledger Design Partner
            </h2>
            <p className="text-lg font-light text-synthrova-black/70 leading-relaxed mb-12">
              Synthrova is opening a limited Design Partner cohort for audit and CA firms working with pharmaceutical and regulated manufacturing companies.
            </p>
            <div className="flex items-center justify-between mt-auto border-t border-synthrova-lightgrey/10 pt-6">
              <span className="text-sm font-mono tracking-widest text-synthrova-black/40">AUG 23, 2026</span>
              <span className="flex items-center text-sm font-medium">Read Announcement <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </div>
        
        </Link>
      </div>
    </section>
  )
}
"""

content = content.replace(old_section, new_section)

with open('src/pages/Updates.tsx', 'w') as f:
    f.write(content)
