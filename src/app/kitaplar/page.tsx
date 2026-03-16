'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import CountUp from '@/components/CountUp';
import { books, bookCategories } from '@/data/books';

const allCategories = ['all', ...Object.keys(bookCategories)] as const;

export default function KitaplarPage() {
  const [active, setActive] = useState<string>('all');
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);

  const filtered = active === 'all' ? books : books.filter(b => b.category === active);
  const sorted = [...filtered].sort((a, b) => {
    const ya = typeof a.year === 'number' ? a.year : parseInt(a.year);
    const yb = typeof b.year === 'number' ? b.year : parseInt(b.year);
    return yb - ya;
  });

  const totalBooks = books.length;
  const categoryCounts = Object.keys(bookCategories).reduce((acc, key) => {
    acc[key] = books.filter(b => b.category === key).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="page-transition">
      <PageHeader
        title="Prof. Dr. İlber Ortaylı'nın Eserleri"
      />

      {/* Stats bar */}
      <section className="border-b border-border bg-dark-section relative overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={totalBooks} suffix="+" label="Eser" />
            <CountUp end={1974} label="İlk Eser" duration={2.5} />
            <CountUp end={50} suffix="+" label="Yıl" />
            <CountUp end={7} label="Dilde" duration={1} />
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {allCategories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === cat
                    ? 'border-gold text-gold bg-gold/10'
                    : 'border-border text-text-secondary hover:border-gold-dim hover:text-gold'
                }`}
              >
                {cat === 'all' ? 'Tümü' : bookCategories[cat]}
                <span className="ml-1.5 text-xs opacity-50">
                  {cat === 'all' ? totalBooks : categoryCounts[cat]}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Books Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {sorted.map((book, i) => (
                <motion.div
                  key={book.title}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  onHoverStart={() => setHoveredBook(book.title)}
                  onHoverEnd={() => setHoveredBook(null)}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative bg-dark-card border border-border rounded-2xl overflow-hidden group hover:border-gold-dim/60 transition-all duration-500 h-full"
                  >
                    {/* Top color accent */}
                    <div className="h-1 w-full bg-gradient-to-r from-gold/40 via-gold to-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-7">
                      {/* Year badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-['Playfair_Display'] text-2xl font-black text-gold/30 group-hover:text-gold/60 transition-colors">
                          {book.year}
                        </span>
                        <span className="text-[0.6rem] font-semibold tracking-[2px] uppercase text-text-muted px-3 py-1 rounded-full border border-border group-hover:border-gold-dim/40 group-hover:text-gold-dim transition-all">
                          {bookCategories[book.category]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-['Playfair_Display'] text-lg font-bold text-text-primary mb-2 group-hover:text-gold transition-colors duration-300 leading-snug">
                        {book.title}
                      </h3>

                      {book.coAuthor && (
                        <p className="text-gold-dim text-xs mb-2">
                          ile {book.coAuthor}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {book.desc}
                      </p>
                    </div>

                    {/* Hover glow */}
                    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                      hoveredBook === book.title ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-gold/[0.02]" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Highlight book */}
      <section className="py-24 bg-dark-section">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-dark-card border border-gold/20 rounded-3xl p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent" />
            <div className="relative z-10">
              <span className="text-5xl mb-6 block text-gold/60">◇</span>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gold mb-3">
                Bir Ömür Nasıl Yaşanır?
              </h3>
              <p className="text-gold-dim text-sm mb-6">2019 &middot; En Çok Satan</p>
              <p className="font-['Noto_Serif'] text-text-secondary leading-[2] max-w-lg mx-auto">
                Prof. Dr. İlber Ortaylı&apos;nın yaşam felsefesini, seyahat prensiplerini, okuma disiplinini,
                gençlere tavsiyelerini ve &ldquo;uğruna seyahat edilecek 17 eser&rdquo; listesini
                bir araya getiren, onun dünya görüşünün özeti niteliğindeki başyapıt.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
