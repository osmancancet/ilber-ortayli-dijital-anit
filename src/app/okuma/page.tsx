'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import CountUp from '@/components/CountUp';
import { readingList } from '@/data';

const readingPrinciples = [
  {
    icon: '◆',
    title: 'Coğrafyanın Tarihini Okuyun',
    desc: 'Seyahat öncesi o toprağın tarihini mutlaka okuyun. Bakılan her taş, bilgi olmadan dilsizdir.',
  },
  {
    icon: '◇',
    title: 'Günlük Okuma Disiplini',
    desc: 'Günde en az 2 saat okumaya ayırın. Okuma alışkanlığı, yalnızlıkla barışık olmayı gerektirir.',
  },
  {
    icon: '✦',
    title: 'Orijinal Dilde Okuyun',
    desc: 'Klasikleri orijinal dilinde okumaya çalışın. Çeviri kaçınılmaz olarak ruhunu seyreltir.',
  },
  {
    icon: '◈',
    title: 'Not Tutun, Tekrar Okuyun',
    desc: 'Not tutun, altını çizin, tekrar okuyun. Kitap bir kez okunan değil, yaşam boyu dönülen bir dosttur.',
  },
];

const ortayliBooks = [
  {
    title: 'Bir Ömür Nasıl Yaşanır?',
    year: '2019',
    desc: 'Gençlere hayatın her alanında rehber niteliğinde tavsiyelerin toplandığı, Ortaylı felsefesinin özeti niteliğinde eser.',
  },
  {
    title: 'İmparatorluğun En Uzun Yüzyılı',
    year: '1983',
    desc: 'Osmanlı modernleşme sürecinin en kapsamlı ve en çok atıf alan akademik çalışması. Tanzimat\'tan Cumhuriyet\'e uzanan yüzyılın anatomisi.',
  },
  {
    title: 'Osmanlı\'yı Yeniden Keşfetmek',
    year: '2006',
    desc: 'Osmanlı\'nın klişelerden arındırılmış, gerçekçi ve bilimsel bir perspektifle yeniden değerlendirilmesi.',
  },
  {
    title: 'Türklerin Tarihi',
    year: '2015',
    desc: 'Orta Asya steplerinden Anadolu\'ya, Balkanlara ve dünyaya yayılan Türk tarihinin panoramik bir anlatımı.',
  },
];

export default function OkumaPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const totalBooks = readingList.reduce((acc, cat) => acc + cat.books.length, 0);
  const uniqueAuthors = new Set(readingList.flatMap((cat) => cat.books.map((b) => b.author))).size;

  return (
    <div className="page-transition">
      <PageHeader
        title="Seyyahın Başucu Kütüphanesi"
        quote="20 saat geziyorsanız, 2 saat de okuyacaksınız."
      />

      {/* ───────── Stats Bar ───────── */}
      <section className="py-16 bg-dark-section border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={readingList.length} label="Kategori" />
            <CountUp end={totalBooks} suffix="+" label="Eser" />
            <CountUp end={uniqueAuthors} suffix="+" label="Yazar" />
            <CountUp end={3000} suffix="+" label="Sayfa" />
          </div>
        </div>
      </section>

      {/* ───────── Opening Quote with Shimmer ───────── */}
      <section className="py-20 bg-dark relative overflow-hidden">
        {/* Shimmer background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(184,149,58,0.06) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-block text-4xl mb-6 text-gold/60"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              ◈
            </motion.span>
            <blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl text-text-primary leading-relaxed italic">
              &ldquo;Bir coğrafyaya gitmeden o toprağın ruhunu okumak şarttır.&rdquo;
            </blockquote>
            <motion.div
              className="mt-6 w-24 h-px mx-auto"
              style={{
                background: 'linear-gradient(90deg, transparent, #b8953a, transparent)',
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="mt-4 text-text-muted text-sm font-['Noto_Serif'] tracking-wide">
              — Prof. Dr. İlber Ortaylı
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───────── Category Accordion ───────── */}
      <section className="py-24 bg-dark-section">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary">
              Okuma Listesi
            </h2>
          </motion.div>

          <div className="space-y-4">
            {readingList.map((cat, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`
                    bg-dark-card border rounded-2xl overflow-hidden transition-all duration-500
                    ${isOpen ? 'border-gold/30 shadow-[0_0_40px_rgba(184,149,58,0.06)]' : 'border-border hover:border-gold-dim/40'}
                  `}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group hover:bg-gold/[0.02] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <motion.span
                        className="text-2xl"
                        animate={isOpen ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        {cat.icon}
                      </motion.span>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-lg font-bold text-gold group-hover:text-gold-light transition-colors">
                          {cat.category}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-text-muted bg-gold/[0.08] border border-gold/10 px-3 py-1 rounded-full">
                        {cat.books.length} eser
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-border group-hover:border-gold/30 transition-colors"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="text-text-muted group-hover:text-gold transition-colors"
                        >
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 space-y-3">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />
                          {cat.books.map((book, bi) => (
                            <motion.div
                              key={book.title}
                              initial={{ opacity: 0, x: -16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: bi * 0.08, ease: 'easeOut' }}
                              className="flex gap-5 p-5 rounded-xl bg-dark/60 border-l-2 border-l-gold/30 border border-l-0 border-border/50 hover:border-gold/20 hover:bg-gold/[0.02] transition-all duration-300 group/book"
                            >
                              {/* Number Index */}
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/[0.06] border border-gold/10 flex items-center justify-center">
                                <span className="font-['Playfair_Display'] text-gold-dim text-sm font-bold">
                                  {String(bi + 1).padStart(2, '0')}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-['Noto_Serif'] text-text-primary font-bold mb-1 group-hover/book:text-gold-light transition-colors">
                                  {book.title}
                                </h4>
                                <p className="text-gold text-sm mb-2 font-medium">{book.author}</p>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                  {book.desc}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Okuma Prensipleri ───────── */}
      <section className="py-24 bg-dark relative">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(184,149,58,0.04) 0%, transparent 60%)',
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-dim text-xs tracking-[4px] uppercase font-medium">Disiplin</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary mt-4">
              Okuma Prensipleri
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {readingPrinciples.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-dark-card border border-border rounded-2xl p-8 hover:border-gold/20 transition-all duration-500 group"
              >
                <div className="flex items-start gap-5">
                  <motion.span
                    className="text-3xl flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {p.icon}
                  </motion.span>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-lg font-bold text-gold group-hover:text-gold-light transition-colors mb-3">
                      {p.title}
                    </h3>
                    <p className="font-['Noto_Serif'] text-text-secondary text-sm leading-[1.9]">
                      {p.desc}
                    </p>
                  </div>
                </div>
                {/* Bottom accent line */}
                <motion.div
                  className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/40 to-transparent transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Ortaylı'nın Kendi Kaleminden ───────── */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(184,149,58,0.03) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-dim text-xs tracking-[4px] uppercase font-medium">Miras</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary mt-4">
              Ortaylı&apos;nın Kendi Kaleminden
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {ortayliBooks.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="relative bg-dark-card border border-border rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 group overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-medium text-gold bg-gold/[0.08] border border-gold/15 px-3 py-1 rounded-full">
                      {book.year}
                    </span>
                    <motion.div
                      className="w-8 h-8 rounded-full border border-gold/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-gold text-sm">✦</span>
                    </motion.div>
                  </div>

                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-gold group-hover:text-gold-light transition-colors mb-3">
                    {book.title}
                  </h3>
                  <p className="font-['Noto_Serif'] text-text-secondary text-sm leading-[1.9]">
                    {book.desc}
                  </p>

                  {/* Author line */}
                  <div className="mt-5 pt-4 border-t border-border/50 flex items-center gap-2">
                    <span className="text-xs text-text-muted">Yazar:</span>
                    <span className="text-xs text-gold font-medium">İlber Ortaylı</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Ortadoğu - Halep Section ───────── */}
      <section className="py-28 bg-dark relative overflow-hidden">
        {/* Pulsing glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(184,149,58,0.05) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Side accent lines */}
        <motion.div
          className="absolute left-[10%] top-[20%] w-px h-[60%] bg-gradient-to-b from-transparent via-gold/10 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute right-[10%] top-[20%] w-px h-[60%] bg-gradient-to-b from-transparent via-gold/10 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-card border border-gold/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 30%, rgba(184,149,58,0.04) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <motion.span
                className="inline-block text-4xl mb-6 text-gold/60"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ◆
              </motion.span>

              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-gold mb-8">
                Ortadoğu&apos;nun Yitirilen Ruhları
              </h3>

              <p className="font-['Noto_Serif'] text-text-secondary leading-[2] mb-8 max-w-xl mx-auto">
                Halep&apos;i, taş çarşısına, zengin mutfağından çok kültürlü insan dokusuna kadar
                &ldquo;Türk&rdquo; bir şehir olarak tanımlardı. Savaşın ardından kentin silinip gitmesi karşısında
                derin bir hüzünle söyledi:
              </p>

              <motion.div
                className="w-16 h-px mx-auto mb-8"
                style={{ background: 'linear-gradient(90deg, transparent, #b8953a, transparent)' }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <blockquote className="font-['Playfair_Display'] italic text-gold text-xl md:text-2xl leading-relaxed">
                &ldquo;O Halep artık yok, hiçbir zaman da olmayacak.&rdquo;
              </blockquote>

              <p className="mt-6 text-text-muted text-xs tracking-wider uppercase">
                Kaybedilen bir medeniyetin ağıdı
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── Closing Quote with Animated Divider ───────── */}
      <section className="py-24 bg-dark-section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated divider */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <motion.div
                className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.span
                className="text-gold/40"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                ✦
              </motion.span>
              <motion.div
                className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>

            <blockquote className="font-['Playfair_Display'] text-xl md:text-2xl text-text-primary italic leading-relaxed mb-6">
              &ldquo;İyi bir altyapı eğitiminin yanı sıra, bireyin yalnızlıkla barışık olması
              okuma eyleminin en temel şartıdır.&rdquo;
            </blockquote>

            <p className="text-text-muted text-sm font-['Noto_Serif']">
              — Prof. Dr. İlber Ortaylı
            </p>

            {/* Bottom ornament */}
            <div className="flex items-center justify-center gap-2 mt-12">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gold/30"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
