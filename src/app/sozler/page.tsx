'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { quotesData, categoryLabels } from '@/data';

const categories = ['all', 'tarih', 'egitim', 'yasam', 'jeopolitik'] as const;
const categoryNames: Record<string, string> = {
  all: 'Tümü',
  ...categoryLabels
};

export default function SozlerPage() {
  const [active, setActive] = useState<string>('all');

  const filtered = active === 'all'
    ? quotesData
    : quotesData.filter(q => q.category === active);

  return (
    <div className="page-transition">
      <PageHeader
        title="Sözleri ve Felsefesi"
      />

      <section className="py-20 bg-dark-section">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === cat
                    ? 'border-gold text-gold bg-gold/10'
                    : 'border-border text-text-secondary hover:border-gold-dim hover:text-gold'
                }`}
              >
                {categoryNames[cat]}
              </motion.button>
            ))}
          </div>

          {/* Quotes Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((q, i) => (
                <motion.div
                  key={q.text}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative bg-dark-card/40 border border-border/50 rounded-2xl p-10 md:p-12 h-full hover:border-gold/20 transition-all duration-500 overflow-hidden group"
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/[0.02] to-transparent" />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <p className="font-['Noto_Serif'] italic text-text-primary text-lg md:text-xl leading-[2] mb-8">
                        {q.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-px bg-gold/20" />
                        <span className="text-[0.6rem] tracking-[3px] uppercase text-gold-dim/60">
                          {categoryLabels[q.category]}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
