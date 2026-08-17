const fs = require('fs');
let content = fs.readFileSync('src/pages/ELedger.tsx', 'utf8');

const mainComponent = `
export function ELedger() {
  return (
    <div className="w-full bg-synthrova-white selection:bg-synthrova-cyan/30 selection:text-synthrova-black">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StakeholdersSection />
      <WorkflowSection />
      <TraceabilitySection />
      <ReconciliationSection />
      <ArchitectureSection />
      <SecuritySection />
      <FutureSection />
      <FinalCTASection />
    </div>
  );
}

`;

content = content.replace('function HeroSection() {', mainComponent + 'function HeroSection() {');
content = content.replace('export { ELedger };', '');
fs.writeFileSync('src/pages/ELedger.tsx', content);
