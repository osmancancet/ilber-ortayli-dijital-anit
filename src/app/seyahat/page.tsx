'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import CountUp from '@/components/CountUp';
import { travelPrinciples } from '@/data';

const travelQuotes = [
  { text: 'Yürüyeceksiniz. Bir şehirde gönlünüzce yürümüyorsanız orayı gezdiğinizi söylemeyiniz.', topic: 'Yürümek' },
  { text: 'Müzeleri sendromsuz, sindirerek gezebilmek için 20-30 günlük planlamalar yapın.', topic: 'Planlama' },
  { text: 'Gece gezmeden bir şehri tanıyamazsınız. Tarihi yapıların asıl heybeti gece ortaya çıkar.', topic: 'Gece' },
  { text: 'Bir ülkeye gitmeden önce en az üç kitap okuyun. Bilmeden bakmak, görmek değildir.', topic: 'Okuma' },
];

const dosDonts = [
  { do: 'Sabahın ilk ışığında müzeye gidin', dont: 'Grup turlarıyla sürüklenmeyin' },
  { do: 'Yerel halkla sohbet edin, çarşılara karışın', dont: 'Sadece turistik noktaları görüp dönmeyin' },
  { do: 'Mutlaka gece yürüyüşü yapın', dont: 'Otelde vakit harcamayın' },
  { do: 'Gitmeden önce o coğrafyanın tarihini okuyun', dont: 'Selfie çekip geçmeyin' },
  { do: 'Harita okuyun, not tutun, fotoğraf çekin', dont: 'Seyahati alışveriş turuna çevirmeyin' },
  { do: 'Sivil mimariyi, sokak dokusunu inceleyin', dont: 'Sadece 5 yıldızlı otellere sıkışmayın' },
];

const mustVisitMuseums = [
  { name: 'Prado', city: 'Madrid', specialty: 'Velázquez, Goya, El Greco' },
  { name: 'Arkeoloji Müzesi', city: 'Napoli', specialty: 'Pompeii eserleri, Roma mozaikleri' },
  { name: 'Ulusal Sanat Galerisi', city: 'Washington', specialty: 'Avrupa ve Amerikan resimleri' },
  { name: 'Pinakothek', city: 'Münih', specialty: 'Dürer, Rubens, Rembrandt' },
  { name: 'Uffizi', city: 'Floransa', specialty: 'Botticelli, Leonardo, Michelangelo' },
  { name: 'Hermitage', city: 'St. Petersburg', specialty: '3 milyon eser, Dünya mirası' },
  { name: 'British Museum', city: 'Londra', specialty: 'Antik uygarlıklar, Rosetta Taşı' },
  { name: 'Louvre', city: 'Paris', specialty: '380.000 eser, Mona Lisa' },
];

export default function SeyahatPage() {
  return (
    <div className="page-transition">
      <PageHeader
        title="Seyahat Felsefesi"
        quote="Mektebi bitirir bitirmez evlenip de mobilyacı dükkânı gezeceğinize, dünyayı gezin derim."
      />

      {/* Stats Counter Section */}
      <section className="py-16 border-b border-border bg-dark-section relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"
        />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={40} suffix="+" label="Ülke Gezdi" />
            <CountUp end={7} label="Dil Biliyor" duration={1.5} />
            <CountUp end={50} suffix="+" label="Yıl Akademik Kariyer" />
            <CountUp end={8} label="Üniversite Misafir Hocalık" />
          </div>
        </div>
      </section>

      {/* Travel Quotes Marquee */}
      <section className="py-10 bg-dark-section border-b border-border/40 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-section to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-section to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16"
        >
          {[...travelQuotes, ...travelQuotes, ...travelQuotes, ...travelQuotes].map((q, i) => (
            <p key={i} className="flex-shrink-0 font-['Noto_Serif'] italic text-text-muted/60 text-sm whitespace-nowrap">
              {q.text}
            </p>
          ))}
        </motion.div>
      </section>

      {/* 5 Principles */}
      <section className="py-24 bg-dark-section">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] font-semibold tracking-[4px] uppercase text-gold-dim/60 block mb-3">Metodoloji</span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Seyahatin Beş Şartı
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto"
            />
          </motion.div>

          <div className="space-y-8">
            {travelPrinciples.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  className="relative bg-dark-card border border-border rounded-2xl p-10 overflow-hidden group hover:border-gold-dim transition-all duration-500"
                >
                  {/* Animated left accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-700 group-hover:h-full" />

                  {/* Number watermark */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute -top-4 -right-2 font-['Playfair_Display'] text-[8rem] font-black text-gold/[0.04] leading-none select-none group-hover:text-gold/[0.08] transition-colors duration-500"
                  >
                    {p.number}
                  </motion.span>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center"
                      >
                        <span className="font-['Playfair_Display'] text-2xl font-black text-gold">
                          {p.number}
                        </span>
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-text-primary mb-4 group-hover:text-gold transition-colors">
                        {p.title}
                      </h3>
                      <blockquote className="font-['Noto_Serif'] italic text-gold-dim text-base leading-relaxed mb-4 pl-4 border-l-2 border-gold/30">
                        {p.quote}
                      </blockquote>
                      <p className="text-text-secondary leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/[0.02] to-transparent pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] font-semibold tracking-[4px] uppercase text-gold-dim/60 block mb-3">Rehber</span>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-text-primary mb-3">
              Yapın & Yapmayın
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mb-4"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {dosDonts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-dark-card border border-border rounded-xl p-6 hover:border-gold-dim/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <span className="text-green-400 text-xs">✓</span>
                  </motion.div>
                  <p className="text-text-primary text-sm font-medium group-hover:text-gold transition-colors">{item.do}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs">✕</span>
                  </div>
                  <p className="text-text-muted text-sm">{item.dont}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Night cities */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        {/* Animated stars background */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            className="absolute w-0.5 h-0.5 rounded-full bg-gold/40"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
          />
        ))}

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[0.6rem] font-semibold tracking-[4px] uppercase text-gold-dim/60 block mb-3">Gece Gezisi</span>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-text-primary mb-4">
              Gece Gezilmesi Gereken Şehirler
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mb-6"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Toledo', desc: 'İspanya\'nın ruhani kalbi' },
              { name: 'Semerkant', desc: 'Timur\'un masal şehri' },
              { name: 'Barselona', desc: 'Gaudí\'nin ışıklı dünyası' },
              { name: 'Yezd', desc: 'Zerdüştlerin ateş şehri' },
            ].map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.08 }}
                className="relative bg-dark-card border border-border rounded-2xl p-6 hover:border-gold-dim transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.08)] overflow-hidden group"
              >
                <motion.div
                  animate={{ opacity: [0, 0.08, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"
                />
                <span className="text-2xl mb-3 block relative z-10 text-gold/60">✧</span>
                <span className="font-['Playfair_Display'] text-lg font-bold text-gold relative z-10 block">{city.name}</span>
                <span className="text-text-muted text-xs relative z-10 mt-1 block">{city.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-Visit Museums */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] font-semibold tracking-[4px] uppercase text-gold-dim/60 block mb-3">Müze Rotası</span>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gold mb-3">
              Mutlaka Gezilmesi Gereken 8 Müze
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mb-4"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mustVisitMuseums.map((museum, i) => (
              <motion.div
                key={museum.name}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative bg-dark-card border border-border rounded-xl p-5 hover:border-gold-dim/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/[0.04] to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <motion.span
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="text-lg"
                    >
                      ▲
                    </motion.span>
                    <span className="text-gold-dim text-[0.6rem] tracking-[2px] uppercase font-semibold">{museum.city}</span>
                  </div>
                  <h4 className="font-['Playfair_Display'] text-base font-bold text-text-primary mb-2 group-hover:text-gold transition-colors">
                    {museum.name}
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">{museum.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Museum Literacy Feature */}
      <section className="py-24 bg-dark-section">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-dark-card border border-gold/15 rounded-3xl p-12 text-center overflow-hidden"
          >
            {/* Animated border glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-[1px] rounded-3xl opacity-20"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(184,149,58,0.3), transparent, transparent)',
              }}
            />

            <div className="relative z-10">
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-4xl mb-6 block"
              >
                ✦
              </motion.span>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gold mb-6">
                Müze Okuryazarlığı
              </h3>
              <p className="font-['Noto_Serif'] text-text-secondary leading-[2] mb-4 max-w-xl mx-auto">
                &ldquo;Müzeler, insanlığın biriktirdiği hafıza depolarıdır. Bir turistin aceleciliğiyle değil,
                bir araştırmacının tecessüsüyle eserleri okuyun.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.01, 0.04, 0.01] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]"
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-['Noto_Serif'] italic text-gold/70 text-lg md:text-xl leading-[2.2]"
          >
            &ldquo;Dünyayı görmeden hiçbir şey ifade edemezsiniz.
            Ama dünyayı görmek, yalnızca bakmak değildir — anlamak, hissetmek ve okumaktır.&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-text-muted text-sm tracking-wide"
          >
            — Prof. Dr. İlber Ortaylı
          </motion.p>
        </div>
      </section>
    </div>
  );
}
