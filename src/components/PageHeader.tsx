'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  quote?: string;
}

export default function PageHeader({ title, subtitle, quote }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070c]" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(184,149,58,0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 50%, rgba(40,50,90,0.04) 0%, transparent 60%)`
      }} />

      {/* Animated accent lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="absolute left-[15%] top-[15%] w-px h-[70%] bg-gradient-to-b from-transparent via-gold/10 to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        className="absolute right-[15%] top-[15%] w-px h-[70%] bg-gradient-to-b from-transparent via-gold/10 to-transparent origin-top"
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-section to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mb-6"
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Noto_Serif'] text-text-secondary text-sm md:text-base leading-[1.9] max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {quote && (
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 font-['Noto_Serif'] italic text-gold-dim/80 text-sm max-w-md mx-auto"
          >
            &ldquo;{quote}&rdquo;
          </motion.blockquote>
        )}
      </div>
    </section>
  );
}
