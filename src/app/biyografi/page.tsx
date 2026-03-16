'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import CountUp from '@/components/CountUp';
import { timelineData, languages, universities } from '@/data';

export default function BiyografiPage() {
  return (
    <div className="page-transition">
      <PageHeader
        title="Bir Ömrün Kronolojisi"
      />

      {/* Timeline */}
      <section className="py-20 bg-dark-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Animated center line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent md:-translate-x-px origin-top"
            />

            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative flex items-start mb-12 ${
                  i % 2 === 0
                    ? 'md:flex-row md:text-right md:pr-[calc(50%+2rem)] pl-14 md:pl-0'
                    : 'md:flex-row-reverse md:text-left md:pl-[calc(50%+2rem)] pl-14 md:pr-0'
                }`}
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-6 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2 ring-4 ring-dark-section z-10"
                />

                <div className="max-w-md">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-card border border-border rounded-xl p-6 hover:border-gold-dim transition-all duration-300"
                  >
                    <span className="font-['Playfair_Display'] text-xl font-bold text-gold block mb-2">
                      {item.year}
                    </span>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-gold mb-4"
          >
            Konuştuğu Diller
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {languages.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="px-5 py-2.5 rounded-full border border-gold/20 bg-gold/5 text-gold-light text-sm font-['Playfair_Display'] hover:border-gold/40 hover:bg-gold/10 transition-all duration-300 cursor-default"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Akademik Yolculuk */}
      <section className="py-24 bg-dark-section">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-gold mb-4 text-center"
          >
            Akademik Yolculuk
          </motion.h2>
          <h3 className="text-sm tracking-[3px] uppercase text-gold-dim/70 mb-6">Kadrolu Görevler</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {universities.fullTime.map((uni, i) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-dark-card/60 border border-border/60 rounded-xl p-5 hover:border-gold/30 transition-all duration-300"
              >
                <h4 className="font-['Playfair_Display'] text-base font-bold text-text-primary group-hover:text-gold transition-colors">
                  {uni.name}
                  {uni.aka && (
                    <span className="text-text-muted font-normal text-sm"> ({uni.aka})</span>
                  )}
                </h4>
              </motion.div>
            ))}
          </div>

          <h3 className="text-sm tracking-[3px] uppercase text-gold-dim/70 mb-6">Misafir Öğretim Üyelikleri (1982-89)</h3>
          <div className="flex flex-wrap gap-3">
            {universities.visiting.map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold-light text-sm hover:border-gold/40 hover:bg-gold/10 transition-all duration-300 cursor-default"
              >
                {city}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-border/40 relative overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent"
        />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={17} label="Kronoloji Dönemi" duration={1.5} />
            <CountUp end={15} label="Üniversite" duration={1.5} />
            <CountUp end={4} label="Büyük Ödül" duration={1} />
            <CountUp end={7} label="Yıl Topkapı" duration={1.5} />
          </div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-20 bg-dark-section">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[0.6rem] font-semibold tracking-[4px] uppercase text-gold-dim/60 block mb-3">Detaylar</span>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-text-primary">
              Hayatından Kesitler
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '◇',
                title: 'Ailevi Kökler',
                text: 'Annesi Şefika Ortaylı - Kırım Şirinski ailesinden, Stalingrad\'da Rus dili eğitimi almış, Ankara Üniversitesi DTCF\'de Rusça öğretim görevlisi. Babası Kemal Ortaylı - Kırım doğumlu uçak mühendisi ve Kırım tarihi uzmanı.'
              },
              {
                icon: '◆',
                title: 'Akademik Hocaları',
                text: 'Halil İnalcık (Osmanlı kurumlar tarihi), Şerif Mardin (Türk siyasal sosyolojisi), Mümtaz Soysal (anayasa hukuku). Viyana ve Chicago üniversitelerinde uluslararası eğitim.'
              },
              {
                icon: '✦',
                title: 'Ödüller',
                text: 'Aydın Doğan Ödülü (2001), Lazio Ödülü (2006), Puşkin Madalyası (2007, Putin\'den), Cumhurbaşkanlığı Kültür ve Sanat Büyük Ödülü (2017).'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, rotateY: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-dark-card border border-border rounded-2xl p-8 hover:border-gold-dim transition-all duration-300 group overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/[0.04] to-transparent" />
                <div className="relative z-10">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                    className="text-2xl mb-4 block"
                  >
                    {card.icon}
                  </motion.span>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
