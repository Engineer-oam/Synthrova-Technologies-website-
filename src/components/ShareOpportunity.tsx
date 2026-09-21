import { useState } from "react";
import { Copy, Check, Mail, MessageCircle, Share2, Linkedin } from "lucide-react";

export interface ShareOpportunityProps {
  roleTitle: string;
  slug: string;
  shareDescription?: string;
  isDarkTheme?: boolean;
  className?: string;
}

export function ShareOpportunity({
  roleTitle,
  slug,
  shareDescription,
  isDarkTheme = false,
  className = ""
}: ShareOpportunityProps) {
  const [copied, setCopied] = useState(false);

  // Canonical role URL
  const cleanPath = slug.startsWith("#") 
    ? `/careers${slug}` 
    : slug.startsWith("careers#") 
      ? `/${slug}` 
      : `/careers/${slug}`;
  const canonicalUrl = `https://synthrova.in${cleanPath}`;

  // Check if Web Share API is available on the current device
  const canNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  // LinkedIn share URL
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    canonicalUrl
  )}`;

  // WhatsApp share text & URL
  const defaultWhatsAppDesc =
    slug === "coo-president-pharma"
      ? "Synthrova Technologies is looking for a senior pharmaceutical industry executive to help build the market for E-Ledger."
      : `Synthrova Technologies is looking for a ${roleTitle} to help build E-Ledger for regulated supply chains.`;

  const whatsappMessage = `${roleTitle}\n\n${shareDescription || defaultWhatsAppDesc}\n\nView the opportunity:\n${canonicalUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

  // Email share URL
  const emailSubject = `Opportunity at Synthrova Technologies — ${roleTitle}`;
  const emailBody = `I thought this opportunity at Synthrova Technologies might be relevant to you.\n\nRole:\n${roleTitle}\n\nView the opportunity:\n${canonicalUrl}`;
  const mailtoShareUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Copy Link Handler
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(canonicalUrl);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = canonicalUrl;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Native Share Handler
  const handleNativeShare = async () => {
    if (canNativeShare) {
      try {
        await navigator.share({
          title: `${roleTitle} — Synthrova Technologies`,
          text: shareDescription || `Explore this opportunity at Synthrova Technologies: ${roleTitle}`,
          url: canonicalUrl
        });
      } catch {
        // User cancelled or aborted native share, ignore silently
      }
    }
  };

  const borderClass = isDarkTheme ? "border-synthrova-white/10" : "border-synthrova-lightgrey/20";
  const titleClass = isDarkTheme ? "text-synthrova-white/70" : "text-synthrova-black/60";
  const descClass = isDarkTheme ? "text-synthrova-white/60" : "text-synthrova-black/70";
  const btnClass = isDarkTheme
    ? "bg-synthrova-white/5 border border-synthrova-white/15 text-synthrova-white hover:border-synthrova-blue hover:text-synthrova-blue"
    : "bg-synthrova-white border border-synthrova-lightgrey/40 text-synthrova-black hover:border-synthrova-blue hover:text-synthrova-blue";

  return (
    <div className={`pt-6 border-t ${borderClass} ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
        <span className={`font-mono text-[11px] tracking-widest uppercase font-semibold ${titleClass}`}>
          SHARE THIS OPPORTUNITY
        </span>
        <span className="font-mono text-[10px] text-synthrova-blue hidden sm:inline-block">
          synthrova.in{cleanPath}
        </span>
      </div>
      <p className={`text-xs font-light mb-4 leading-relaxed ${descClass}`}>
        Know someone who could be a strong fit? Share this opportunity with them.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Native mobile share if supported */}
        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-synthrova-blue text-synthrova-black hover:bg-synthrova-white text-xs font-mono uppercase tracking-wider transition-colors duration-200"
            title="Share via device options"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        )}

        {/* LinkedIn */}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3 py-2 ${btnClass} text-xs font-mono uppercase tracking-wider transition-colors duration-200`}
          title="Share on LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3 py-2 ${btnClass} hover:border-emerald-500 hover:text-emerald-500 text-xs font-mono uppercase tracking-wider transition-colors duration-200`}
          title="Share via WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href={mailtoShareUrl}
          className={`inline-flex items-center gap-1.5 px-3 py-2 ${btnClass} text-xs font-mono uppercase tracking-wider transition-colors duration-200`}
          title="Share via Email"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email</span>
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 px-3 py-2 border text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
            copied
              ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-medium"
              : isDarkTheme
                ? "bg-synthrova-white/5 border-synthrova-white/15 text-synthrova-white hover:border-synthrova-white"
                : "bg-synthrova-white border-synthrova-lightgrey/40 hover:border-synthrova-black text-synthrova-black"
          }`}
          title="Copy canonical link to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Copied ✓</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
