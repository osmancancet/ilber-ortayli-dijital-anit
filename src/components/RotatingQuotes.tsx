'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  'Tarih bir nostalji konusu değildir.',
  'Cehaletin eyleme geçmiş hali çok tehlikelidir.',
  'Dünyayı görmeden hiçbir şey ifade edemezsiniz.',
  'Korkuyu bilmeyen kişi cesur da olamaz.',
  'İşe yaramayan müttefik, düşmandan beterdir.',
  'Yarı cahillik bir toplumu içeriden çürütmenin en sinsi yoludur.',
  'Üçüncü Dünya yarını düşünmeyen toplumlardan oluşur.',
  'Yunan, Roma ve Avrupa tarihini kendimizi bilmek için öğrenmeliyiz.',
  'Her nefis ölümü tadacaktır ayeti bankalara ve makam koltuklarına yazılmalıdır.',
  'Kendinizden farklı düşünenleri mutlaka dinleyin.',
];

export default function RotatingQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-24 md:h-20 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute font-['Noto_Serif'] italic text-gold/60 text-sm md:text-base text-center px-6 max-w-2xl leading-relaxed"
        >
          &ldquo;{quotes[index]}&rdquo;
        </motion.p>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-0 flex gap-1.5">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1 h-1 rounded-full transition-all duration-500 ${
              i === index ? 'bg-gold/70 w-4' : 'bg-text-muted/20 hover:bg-text-muted/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
