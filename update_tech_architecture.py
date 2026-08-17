import re

with open('src/pages/Technology.tsx', 'r') as f:
    content = f.read()

# Replace the ArchitectureSection
pattern = re.compile(r'function ArchitectureSection\(\) \{.*?function DomainsSection\(\)', re.DOTALL)

new_arch = """function ArchitectureSection() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { id: "DATA", desc: "Raw ingestion from ERP, WMS, APIs." },
    { id: "SYSTEMS", desc: "Cryptographic verification and ledger anchoring." },
    { id: "INTELLIGENCE", desc: "Pattern recognition and predictive modeling." },
    { id: "DECISION", desc: "Automated logic and smart contracts." },
    { id: "ACTION", desc: "Actuation, alerts, and downstream integration." }
  ];

  return (
    <section className="py-32 bg-synthrova-black text-synthrova-white border-b border-synthrova-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Systems Architecture</h2>
          <p className="text-lg text-synthrova-white/60 font-light max-w-2xl mx-auto text-balance">
            A continuous stack transforming fragmented organizational data into intelligent, verified action.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative flex flex-col items-center space-y-12">
          {nodes.map((node, i) => (
            <div key={node.id} className="w-full flex flex-col items-center relative z-10 group">
              <button 
                onClick={() => setActiveNode(i)}
                className={`w-full max-w-md p-6 border text-center transition-all duration-500 relative overflow-hidden ${activeNode === i ? 'border-synthrova-blue bg-synthrova-blue/5' : 'border-synthrova-white/20 hover:border-synthrova-white/40 bg-synthrova-black'}`}
              >
                {/* Active Indicator Glow */}
                <div className={`absolute top-0 left-0 w-1 h-full transition-all duration-500 ${activeNode === i ? 'bg-synthrova-blue' : 'bg-transparent'}`} />
                
                <h3 className={`font-mono tracking-widest text-lg uppercase transition-colors duration-500 ${activeNode === i ? 'text-synthrova-white' : 'text-synthrova-white/60 group-hover:text-synthrova-white'}`}>
                  {node.id}
                </h3>
                <p className={`mt-4 text-sm font-light transition-colors duration-500 ${activeNode === i ? 'text-synthrova-blue' : 'text-synthrova-white/40'}`}>
                  {node.desc}
                </p>
              </button>
              
              {/* Connector */}
              {i < nodes.length - 1 && (
                <div className="h-12 w-px bg-synthrova-white/10 my-4 relative">
                  {/* Signal traveling down */}
                  {activeNode === i && (
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-synthrova-blue -translate-x-1/2 animate-[verticalFlow_4s_linear_infinite]" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DomainsSection()"""

content = pattern.sub(new_arch, content)

with open('src/pages/Technology.tsx', 'w') as f:
    f.write(content)

