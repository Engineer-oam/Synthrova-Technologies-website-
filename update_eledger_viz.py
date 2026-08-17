import re

with open('src/pages/ELedger.tsx', 'r') as f:
    content = f.read()

# I will replace the ProblemSection and SolutionSection with a new, combined visualization

pattern = re.compile(r'function ProblemSection\(\) \{.*?function ProvenanceSection\(\)', re.DOTALL)

new_viz = """function ArchitectureSection() {
  const nodes = ["Manufacturer", "Distributor", "Warehouse", "Hospital", "Auditor", "Regulator"];
  return (
    <section className="py-32 bg-synthrova-offwhite text-synthrova-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center font-mono text-xs tracking-widest text-synthrova-lightgrey mb-16 uppercase">
          E-Ledger Network Topology
        </div>
        
        {/* Mobile Vertical View */}
        <div className="lg:hidden flex flex-col items-center space-y-4 relative">
          <div className="absolute inset-y-0 left-1/2 w-px bg-synthrova-lightgrey -translate-x-1/2">
            <div className="w-full bg-synthrova-blue absolute top-0 animate-[verticalFlow_4s_ease-in-out_infinite]" style={{ height: '40px' }} />
          </div>
          {nodes.map((node, i) => (
            <div key={node} className="relative z-10 w-48 bg-synthrova-white border border-synthrova-lightgrey p-4 text-center group">
              <span className="font-mono text-sm uppercase tracking-widest">{node}</span>
              <div className="absolute inset-0 bg-synthrova-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Desktop Horizontal View */}
        <div className="hidden lg:flex items-center justify-between relative py-12">
          {/* Base Connection Line */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-synthrova-lightgrey -translate-y-1/2 z-0" />
          
          {/* Animated Blue Signal */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2 z-0 overflow-hidden">
            <div className="w-32 h-full bg-synthrova-blue animate-[horizontalFlow_6s_linear_infinite]" />
          </div>

          {nodes.map((node, i) => (
            <div key={node} className="relative z-10 bg-synthrova-white border border-synthrova-lightgrey p-4 w-40 text-center group hover:border-synthrova-blue transition-colors duration-500">
              <div className="absolute -top-2 left-1/2 w-2 h-2 rounded-full bg-synthrova-black/10 -translate-x-1/2 group-hover:bg-synthrova-blue transition-colors duration-500" />
              <span className="font-mono text-xs uppercase tracking-widest block text-synthrova-black">{node}</span>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-balance">
            Trusted Infrastructure Layer
          </h2>
          <p className="text-xl font-light text-synthrova-black/70 text-balance leading-relaxed">
            Organizations retain control over their internal systems. E-Ledger creates cryptographic assurance that shared transactional data is identical, immutable, and verified across the entire supply chain.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes verticalFlow {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes horizontalFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(800%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}

function ProvenanceSection()"""

content = pattern.sub(new_viz, content)

with open('src/pages/ELedger.tsx', 'w') as f:
    f.write(content)
