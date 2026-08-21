interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}




export function SynthrovaLogo({ className = "", isDarkTheme = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-[7px] md:gap-[8px] shrink-0 ${className}`}>
      {/* Wordmark Only */}
      <span className={`text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ease-in-out ${isDarkTheme ? 'text-synthrova-white' : 'text-synthrova-black'}`}>
        Synthrova
      </span>
    </div>
  );
}
