import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, ArrowRight } from 'lucide-react';

const Hire = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        star.x += star.speed;
        
        if (star.x > canvas.width) {
          star.x = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="relative h-screen w-full border-b border-gray-800 overflow-hidden">
      <div className="relative w-full h-full">
        <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
          {/* Gradient Effect */}
          <div className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px]"
               style={{
                 maskImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
               }}>
            <div className="flex flex-col w-full h-full blur">
              <div className="grow" 
                   style={{
                     background: 'conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(255, 208, 134) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)'
                   }}></div>
              <div className="grow" 
                   style={{
                     background: 'conic-gradient(from 0deg at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(255, 208, 134) 324deg, rgb(255, 255, 255) 342deg)'
                   }}></div>
            </div>
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full"></canvas>
          </div>

          {/* Content */}
          <div className="relative w-full flex grow items-center justify-center z-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center space-y-12"
            >
              <motion.div
                variants={textVariants}
                className="flex items-center justify-center space-x-4"
              >
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                <h2 className="text-2xl font-light text-gray-300">Ready to create something amazing?</h2>
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </motion.div>

              <motion.h1
                variants={textVariants}
                className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 pb-4"
                style={{
                  WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                  maskImage: 'linear-gradient(30deg, rgba(255,255,255,0) 15%, rgba(255,255,255, 1), rgba(255,255,255, 1))'
                }}
              >
                HIRE ME
              </motion.h1>

              <motion.div
                variants={textVariants}
                className="max-w-2xl mx-auto space-y-6"
              >
                <p className="text-xl text-blue-400 font-light">Let's transform your ideas into reality</p>
                <p className="text-gray-400">
                  With expertise in full-stack development and a passion for creating exceptional user experiences,
                  I'm ready to help bring your next project to life.
                </p>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="flex justify-center space-x-6"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:deepankargautam@1998.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-3 bg-gray-800 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <Rocket className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;