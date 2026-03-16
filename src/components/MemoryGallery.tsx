'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Memory {
  year: string;
  title: string;
  location: string;
  desc: string;
  gradient: string;
  icon: string;
}

const memories: Memory[] = [
  {
    year: '1947',
    title: 'Bregenz\'te Doğum',
    location: 'Bregenz, Avusturya',
    desc: 'Kafkasyalı Karaçay kökenli bir göçmen ailenin çocuğu olarak dünyaya geldi. Evde Türkçe, Almanca ve Rusça konuşulurdu.',
    gradient: 'from-[#2c1810] via-[#3d2415] to-[#1a0f08]',
    icon: '◇',
  },
  {
    year: '1965',
    title: 'Ankara Atatürk Lisesi',
    location: 'Ankara, Türkiye',
    desc: 'İstanbul Avusturya Lisesi\'nde başlayan eğitimini Ankara Atatürk Lisesi\'nde tamamladı. Çok dilli bir gençlik dönemi.',
    gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    icon: '▲',
  },
  {
    year: '1970\'ler',
    title: 'Viyana Üniversitesi Yılları',
    location: 'Viyana, Avusturya',
    desc: 'Viyana\'da Slav dilleri ve oryantalistik okudu. Avrupa\'nın entelektüel başkentinde akademik temellerini attı.',
    gradient: 'from-[#1b2838] via-[#243447] to-[#0d1b2a]',
    icon: '◆',
  },
  {
    year: '1970\'ler',
    title: 'Chicago\'da Halil İnalcık ile',
    location: 'Chicago, ABD',
    desc: 'Osmanlı tarihçiliğinin dev ismi Halil İnalcık gözetiminde yüksek lisansını tamamladı. Akademik vizyonunun şekillendiği kritik dönem.',
    gradient: 'from-[#2d132c] via-[#1a1a2e] to-[#16213e]',
    icon: '◈',
  },
  {
    year: '1982',
    title: 'İstifa ve Dünya Yolculuğu',
    location: 'Ankara, Türkiye',
    desc: 'Askeri darbe sonrası üniversitedeki baskılara tepki göstererek istifa etti. Bu onurlu duruş, Avrupa ve Amerika kapılarını sonuna kadar açtı.',
    gradient: 'from-[#1a1a0e] via-[#2d2d1a] to-[#0f0f06]',
    icon: '✦',
  },
  {
    year: '1982-89',
    title: 'Dünya Üniversitelerinde',
    location: 'Viyana, Berlin, Paris, Princeton, Moskova',
    desc: 'Yedi yıl boyunca dünyanın en prestijli üniversitelerinde misafir öğretim üyeliği yaptı. Oxford\'dan Cambridge\'e, Roma\'dan Tunus\'a.',
    gradient: 'from-[#0d1b2a] via-[#1b2838] to-[#2d132c]',
    icon: '◎',
  },
  {
    year: '2001',
    title: 'Aydın Doğan Ödülü',
    location: 'İstanbul, Türkiye',
    desc: 'Tarih bilimini geniş kitlelere sevdirme çabaları Aydın Doğan Ödülü ile taçlandırıldı. "Halkın tarihçisi" unvanının başlangıcı.',
    gradient: 'from-[#2c1810] via-[#1a0f08] to-[#3d2415]',
    icon: '⊕',
  },
  {
    year: '2005-12',
    title: 'Topkapı Sarayı Başkanlığı',
    location: 'İstanbul, Türkiye',
    desc: 'Topkapı Sarayı Müzesi Başkanı olarak müzenin uluslararası standartlara kavuşması için devrim niteliğinde adımlar attı.',
    gradient: 'from-[#1a0f08] via-[#2c1810] to-[#16213e]',
    icon: '◇',
  },
  {
    year: '2007',
    title: 'Puşkin Madalyası',
    location: 'Moskova, Rusya',
    desc: 'Rus dili ve kültürüne katkılarından dolayı Vladimir Putin tarafından takdim edilen Puşkin Madalyası\'nı aldı.',
    gradient: 'from-[#1b2838] via-[#0d1b2a] to-[#1a1a2e]',
    icon: '§',
  },
  {
    year: '2019',
    title: '"Bir Ömür Nasıl Yaşanır?"',
    location: 'İstanbul, Türkiye',
    desc: 'En çok satan eseri yayımlandı. Gençlere yaşam, seyahat, okuma ve kendini geliştirme üzerine tavsiyelerin toplandığı manifesto.',
    gradient: 'from-[#16213e] via-[#1a1a2e] to-[#2d132c]',
    icon: '—',
  },
  {
    year: '2026',
    title: 'Son Veda',
    location: 'İstanbul, Türkiye',
    desc: '13 Mart 2026\'da Koç Üniversitesi Hastanesi\'nde hayata veda etti. Yeri doldurulamaz bir boşluk bıraktı.',
    gradient: 'from-[#0a0a0a] via-[#111119] to-[#0a0a0a]',
    icon: '✧',
  },
];

export default function MemoryGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % memories.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + memories.length) % memories.length);
  }, []);

  // Auto-cycle every 20 seconds
  useEffect(() => {
    const timer = setInterval(next, 20000);
    return () => clearInterval(timer);
  }, [next]);

  const m = memories[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? -15 : 15,
    }),
  };

  return (
    <div className="relative">
      {/* Main Card */}
      <div className="relative max-w-3xl mx-auto" style={{ perspective: '1200px' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Photo frame */}
            <div className={`relative bg-gradient-to-br ${m.gradient} rounded-2xl overflow-hidden border border-gold/10 shadow-2xl shadow-black/60`}>
              {/* Film grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none z-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Vignette */}
              <div className="absolute inset-0 pointer-events-none z-10" style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
              }} />

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/20 z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/20 z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/20 z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/20 z-20 pointer-events-none" />

              <div className="relative z-10 p-10 md:p-14 min-h-[320px] flex flex-col justify-between">
                {/* Top: Year and icon */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <motion.span
                      key={`year-${current}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-['Playfair_Display'] text-5xl md:text-6xl font-black text-gold/30 block leading-none"
                    >
                      {m.year}
                    </motion.span>
                    <motion.span
                      key={`loc-${current}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-[0.6rem] tracking-[3px] uppercase text-gold-dim/60 mt-2 block"
                    >
                      {m.location}
                    </motion.span>
                  </div>
                </div>

                {/* Bottom: Title and description */}
                <div>
                  <motion.h3
                    key={`title-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-text-primary mb-3"
                  >
                    {m.title}
                  </motion.h3>
                  <motion.div
                    key={`line-${current}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="w-12 h-px bg-gold/30 mb-4 origin-left"
                  />
                  <motion.p
                    key={`desc-${current}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-['Noto_Serif'] text-text-secondary text-sm md:text-base leading-[1.9] max-w-lg"
                  >
                    {m.desc}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border bg-dark-card/80 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all duration-300 z-30"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 2L4 7L9 12" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border bg-dark-card/80 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all duration-300 z-30"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 2L10 7L5 12" />
          </svg>
        </button>
      </div>

      {/* Timeline dots */}
      <div className="mt-10 flex items-center justify-center gap-1.5">
        {memories.map((mem, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? 'bg-gold w-8 rounded-full'
                  : 'bg-gold/20 hover:bg-gold/40'
              }`}
            />
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-[0.55rem] text-gold whitespace-nowrap bg-dark-card border border-gold/20 px-2 py-1 rounded">
                {mem.year}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="mt-4 text-center">
        <span className="text-[0.6rem] tracking-[2px] uppercase text-text-muted">
          {String(current + 1).padStart(2, '0')} / {String(memories.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
