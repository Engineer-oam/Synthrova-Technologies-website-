interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}




export function SynthrovaLogo({ className = "", isDarkTheme = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-[7px] md:gap-[8px] shrink-0 ${className}`}>
      <div className="relative shrink-0 flex items-center h-[41px] md:h-[48px] lg:h-[55px] -translate-y-[2px] md:-translate-y-[3px]">
        {/* Light Theme Logo (Transparent/Light Background variant) */}
        <img 
          src={`${import.meta.env.BASE_URL}images/logo-transparent.png`} 
          alt="" 
          className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out motion-reduce:transition-none absolute left-0 top-0" 
          style={{ opacity: isDarkTheme ? 0 : 1 }}
        />
        {/* Dark Theme Logo (Dark Background variant) */}
        <img 
          src={`${import.meta.env.BASE_URL}images/logo-dark.png`} 
          alt="Synthrova Technologies" 
          className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out motion-reduce:transition-none relative z-10" 
          style={{ opacity: isDarkTheme ? 1 : 0 }}
        />
      </div>
      
      {/* Wordmark */}
      <span className={`text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ease-in-out ${isDarkTheme ? 'text-synthrova-white' : 'text-synthrova-black'}`}>
        Synthrova
      </span>
    </div>
  );
}
