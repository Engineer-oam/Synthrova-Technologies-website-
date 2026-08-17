import re

with open('src/pages/Contact.tsx', 'r') as f:
    content = f.read()

# Make sure we have useState imported
if 'import { useState }' not in content:
    content = content.replace('import { SEO } from "../components/SEO";', 'import { SEO } from "../components/SEO";\nimport { useState } from "react";')

form_section_regex = r'(<form\s*className="mt-12 space-y-10">.*?</form>)'

new_form_logic = """
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const inputClass = "w-full bg-transparent border-b border-synthrova-lightgrey/20 pb-4 text-synthrova-white placeholder-synthrova-white/30 focus:outline-none focus:border-synthrova-blue transition-colors rounded-none appearance-none";
  const labelClass = "block text-[10px] font-mono tracking-widest uppercase text-synthrova-white/50 mb-3";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!res.ok) throw new Error('Submission failed');
      
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-12 p-12 bg-synthrova-blue/10 border border-synthrova-blue/20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-synthrova-blue flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-synthrova-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-light tracking-tight mb-4 text-synthrova-white">Message Received</h3>
        <p className="text-synthrova-white/70 font-light max-w-md mx-auto">
          Your inquiry has been successfully transmitted to our secure infrastructure. Our team will review the details and respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-12 space-y-10" onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-mono tracking-wide">
          ERROR: SECURE TRANSMISSION FAILED. PLEASE TRY AGAIN.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        <div className="relative">
          <label htmlFor="firstName" className={labelClass}>First Name *</label>
          <input type="text" id="firstName" name="firstName" required className={inputClass} placeholder="Enter your first name" />
        </div>
        <div className="relative">
          <label htmlFor="lastName" className={labelClass}>Last Name *</label>
          <input type="text" id="lastName" name="lastName" required className={inputClass} placeholder="Enter your last name" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        <div className="relative">
          <label htmlFor="email" className={labelClass}>Corporate Email *</label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="name@company.com" />
        </div>
        <div className="relative">
          <label htmlFor="company" className={labelClass}>Company / Organization *</label>
          <input type="text" id="company" name="company" required className={inputClass} placeholder="Organization name" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
        <div className="relative">
          <label htmlFor="industry" className={labelClass}>Industry</label>
          <select id="industry" name="industry" required className={inputClass} defaultValue="">
            <option value="" disabled>Select an industry</option>
            <option value="pharmaceuticals">Pharmaceuticals</option>
            <option value="government">Government</option>
            <option value="energy">Energy</option>
            <option value="defence">Defence & Security</option>
            <option value="finance">Financial Services</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="relative">
          <label htmlFor="interest" className={labelClass}>Interest</label>
          <select id="interest" name="interest" required className={inputClass} defaultValue="">
            <option value="" disabled>Select area of interest</option>
            <option value="eledger">E-Ledger</option>
            <option value="enterprise-infrastructure">Enterprise Infrastructure</option>
            <option value="ai">AI</option>
            <option value="research">Research Partnerships</option>
            <option value="careers">Careers</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="relative">
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea id="message" name="message" required rows={4} className={inputClass} placeholder="How can we help you?"></textarea>
      </div>
      
      <button type="submit" disabled={status === "submitting"} className="inline-flex items-center px-10 py-5 bg-synthrova-blue text-synthrova-black font-medium hover:bg-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "submitting" ? "Transmitting..." : "Send Secure Message"}
      </button>
    </form>
  )
}
"""

content = re.sub(form_section_regex, '<ContactForm />', content, flags=re.DOTALL)

# Add the new ContactForm component to the file
content += "\n\n" + new_form_logic

# Also remove the hardcoded inputClass / labelClass constants from inside FormSection
# since they are now used locally in ContactForm.
content = re.sub(r'const inputClass = ".*?";', '', content)
content = re.sub(r'const labelClass = ".*?";', '', content)

with open('src/pages/Contact.tsx', 'w') as f:
    f.write(content)

