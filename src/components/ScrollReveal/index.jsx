import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import React from 'react';


const ScrollRevealContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal({
      // Opções do ScrollReveal
      // Consulte a documentação do ScrollReveal para mais opções: https://scrollrevealjs.org/guide/options.html
      delay: 200,
      distance: '20px',
      duration: 500,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
      scale: 1,
      viewFactor: 0.2,
    });

    scrollReveal.reveal(containerRef.current.childNodes);

    return () => {
      scrollReveal.destroy();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollRevealContainer;