interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}




export function SynthrovaLogo({ className = "", isDarkTheme = false }: LogoProps) {
  // Logo for dark background vs logo for white background
  const darkBgLogo = "https://res.cloudinary.com/ocra7s5x/image/upload/v1792299156/1000287125-removebg-preview.png";
  const whiteBgLogo = "https://res.cloudinary.com/ocra7s5x/image/upload/v1792299433/1000287127-removebg-preview.png";

  return (
    <div className={`flex items-center gap-[8px] md:gap-[10px] shrink-0 ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center h-[36px] md:h-[42px] lg:h-[48px] w-[36px] md:w-[42px] lg:w-[48px]">
        {/* White Background Logo (visible on light backgrounds) */}
        <img 
          src={whiteBgLogo} 
          alt="Synthrova Technologies" 
          referrerPolicy="no-referrer"
          className="h-full w-full object-contain transition-opacity duration-300 ease-in-out absolute inset-0" 
          style={{ opacity: isDarkTheme ? 0 : 1 }}
        />
        {/* Dark Background Logo (visible on dark backgrounds) */}
        <img 
          src={darkBgLogo} 
          alt="Synthrova Technologies" 
          referrerPolicy="no-referrer"
          className="h-full w-full object-contain transition-opacity duration-300 ease-in-out absolute inset-0 z-10 origin-center" 
          style={{ 
            opacity: isDarkTheme ? 1 : 0,
            transform: 'scale(1.307)',
          }}
        />
      </div>
      
      {/* Wordmark */}
      <span className={`text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ease-in-out ${isDarkTheme ? 'text-synthrova-white' : 'text-synthrova-black'}`}>
        Synthrova
      </span>
    </div>
  );
}
