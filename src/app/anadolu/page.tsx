'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import CountUp from '@/components/CountUp';
import { monuments } from '@/data';
import { istanbulStops, istanbulRouteCoords } from '@/data/istanbul-route';

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

/* ─── Period color map ─── */
const periodColor = (period: string): string => {
  const p = period.toLowerCase();
  if (p.includes('neolitik') || p.includes('m.ö') || p.includes('antik')) return '#4a90d9';
  if (p.includes('helenistik') || p.includes('roma') || p.includes('bizans')) return '#e8c547';
  if (p.includes('selçuklu') || p.includes('mengücek') || p.includes('candar')) return '#2ecc71';
  if (p.includes('osmanlı') || p.includes('ermeni') || p.includes('fars')) return '#c9a84c';
  if (p.includes('cumhuriyet') || p.includes('neo')) return '#e74c3c';
  return '#b8953a';
};

/* ─── Filter periods ─── */
const filterPeriods = [
  { key: 'all', label: 'Tümü' },
  { key: 'antik', label: 'Antik & M.Ö.' },
  { key: 'bizans', label: 'Bizans' },
  { key: 'selcuklu', label: 'Selçuklu' },
  { key: 'osmanli', label: 'Osmanlı' },
  { key: 'cumhuriyet', label: 'Cumhuriyet' },
];

const matchesFilter = (period: string, filter: string): boolean => {
  if (filter === 'all') return true;
  const p = period.toLowerCase();
  if (filter === 'antik') return p.includes('m.ö') || p.includes('neolitik') || p.includes('antik');
  if (filter === 'bizans') return p.includes('bizans') || p.includes('helenistik') || p.includes('roma') || p.includes('ermeni');
  if (filter === 'selcuklu') return p.includes('selçuklu') || p.includes('mengücek') || p.includes('candar');
  if (filter === 'osmanli') return p.includes('osmanlı') || p.includes('fars');
  if (filter === 'cumhuriyet') return p.includes('cumhuriyet') || p.includes('neo');
  return true;
};

/* ─── Orta Anadolu Route ─── */
const routeSteps = [
  { num: 1, title: 'Ankara Kalesi & Ahilik İzleri', desc: 'Hitit güneş kursundan Selçuklu ticaret ahlakına, başkentin kalbindeki katmanlar.' },
  { num: 2, title: 'ODTÜ, DTCF & Anadolu Medeniyetleri Müzesi', desc: 'Bruno Taut\'un Cumhuriyet binası ve 10.000 yıllık eser koleksiyonu.' },
  { num: 3, title: 'Çorum: Alacahöyük & Hattuşa', desc: 'M.Ö. 1600 Hitit başkenti. Dünyanın ilk yazılı antlaşmasının coğrafı.' },
  { num: 4, title: 'Kapadokya: Göreme, Uçhisar, Ortahisar', desc: 'Peri bacaları, yeraltı şehirleri ve Bizans fresk sanatının kayalık tuvalleri.' },
  { num: 5, title: 'Konya: Mevlana & Karatay Medresesi', desc: 'Selçuklu\'nun entelektüel başkenti. Çini sanatı ve tasavvuf geleneğinin merkezi.' },
  { num: 6, title: 'Niğde & Kayseri üzerinden dönüş', desc: 'Eski Gümüşler Manastırı ve Selçuklu kümbet mimarisinin son durakları.' },
];

/* ─── Ege Kıyı Rotası ─── */
const egeStops = [
  { num: 1, name: 'Efes', desc: 'M.Ö. 10. yüzyıldan Roma İmparatorluğu\'na, Akdeniz ticaretinin ve Artemis kültürünün merkezi. Celsus Kütüphanesi uygarlığı özetler.', period: 'Helenistik-Roma' },
  { num: 2, name: 'Bergama', desc: 'Helenistik dünyanın entelektüel başkenti. 200.000 ruloluk kütüphanesi ile İskenderiye\'ye rakip, tıpta Asklepion\'un şifa merkezi.', period: 'Helenistik' },
  { num: 3, name: 'Sardis', desc: 'Lidya Krallığı\'nın başkenti, sikke paranın icat edildiği yer. Altın işleme teknolojisi ile dünyanın ilk finans merkezi.', period: 'Lidya-Roma' },
  { num: 4, name: 'Hierapolis', desc: 'Pamukkale travertenleri üzerinde kurulan sağlık kenti. Roma hamam kültürü ve Nekropol alanı ile ölüm-yaşam diyalektiği.', period: 'Helenistik-Roma' },
  { num: 5, name: 'Afrodisias', desc: 'Afrodit\'e adanmış kent. Heykeltıraşları Roma\'ya ihraç eden sanat okulu ve dünyanın en iyi korunmuş stadyumu.', period: 'Roma' },
  { num: 6, name: 'Priene', desc: 'Hippodamos planının uygulandığı ideal şehir. Grid planlama ile modern kentçiliğe 2300 yıl önce ilham veren Ionia incisi.', period: 'Helenistik' },
];

/* ─── Doğu Anadolu ─── */
const doguHighlights = [
  { name: 'İshakpaşa Sarayı', location: 'Ağrı / Doğubeyazıt', desc: 'Ağrı Dağı eteklerinde 116 odalı, kalorifer sistemine sahip, Osmanlı-Fars-Selçuklu sentezinin masalsı sınır sarayı.', color: '#c9a84c' },
  { name: 'Akdamar Kilisesi', location: 'Van / Akdamar Adası', desc: 'Van Gölü\'ndeki adada 10. yüzyıl Ermeni mimarisinin en görkemli örneği. İncil ve Tevrat tasvirli dışarıya bakan rölyefler.', color: '#4a90d9' },
  { name: 'Van Kalesi', location: 'Van', desc: 'Urartu Kralı I. Sarduri\'nin M.Ö. 9. yüzyılda inşa ettirdiği devasa kale. Anadolu\'nun en eski yazıtlarından biri burada.', color: '#e8c547' },
  { name: 'Ani Harabeleri', location: 'Kars', desc: '1001 Kilise Şehri. Bagratlı Ermeni Krallığı\'nın görüntüsü ile Ortaçağ\'ın en parlak şehirlerinden birinin iskelet mirası.', color: '#2ecc71' },
  { name: 'Nemrut Dağı', location: 'Adıyaman', desc: 'Kommagene Kralı Antiochos\'un M.Ö. 1. yüzyılda diktirdiği dev tanrı heykelleri. Gün doğumu ve batımında benzersiz silüetiyle UNESCO mirası.', color: '#e74c3c' },
];

/* ─── Animation variants ─── */
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: easeOut },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function AnadoluPage() {
  const [selectedMonument, setSelectedMonument] = useState<typeof monuments[0] | null>(null);
  const [selectedStop, setSelectedStop] = useState<typeof istanbulStops[0] | null>(null);
  const [activePeriod, setActivePeriod] = useState('all');

  const filteredMonuments = useMemo(
    () => monuments.filter(m => matchesFilter(m.period, activePeriod)),
    [activePeriod]
  );

  const mapMarkers = monuments.map(m => ({
    lat: m.lat,
    lng: m.lng,
    name: m.name,
    color: periodColor(m.period),
    popupContent: `<h4 style="font-family:'Playfair Display',serif;color:#d4b055;margin-bottom:4px;">${m.name}</h4><p style="color:#b8953a;font-size:0.7rem;margin:2px 0 6px;letter-spacing:1px;text-transform:uppercase;">${m.location} &middot; ${m.period}</p><p style="color:#dfddd8;font-size:0.82rem;line-height:1.7;">${m.desc}</p>`,
    onClick: () => setSelectedMonument(m),
  }));

  const istanbulMapMarkers = istanbulStops.map(s => ({
    lat: s.lat,
    lng: s.lng,
    name: s.name,
    color: '#c0392b',
    label: String(s.num),
    popupContent: `<h4 style="font-family:'Playfair Display',serif;color:#e8c547;">${s.num}. ${s.name}</h4><p style="color:#dfddd8;font-size:0.82rem;line-height:1.7;margin-top:6px;">${s.desc}</p>`,
    onClick: () => setSelectedStop(s),
  }));

  return (
    <div className="page-transition">
      {/* ════════ HEADER ════════ */}
      <PageHeader
        title="Anadolu Mirası"
        quote="Anadolu bir açık hava müzesidir; her metrekaresinde bir medeniyet uyur."
      />

      {/* ════════ MONUMENT MAP ════════ */}
      <section className="py-24 bg-dark relative overflow-hidden">
        {/* Floating glow orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/[0.015] blur-[80px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#4a90d9]/[0.02] blur-[60px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[0.6rem] font-semibold tracking-[5px] uppercase text-gold-dim/60 block mb-4">
              Interaktif Harita
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {monuments.length} Anıtsal Eser
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-5"
            />
            <p className="text-text-secondary text-sm max-w-lg mx-auto leading-relaxed">
              Haritada her işaret bir medeniyet katmanını temsil eder. Üzerine tıklayarak hikayesini keşfedebilirsiniz.
            </p>
          </motion.div>

          {/* Period filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {filterPeriods.map((fp) => (
              <button
                key={fp.key}
                onClick={() => setActivePeriod(fp.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                  activePeriod === fp.key
                    ? 'bg-gold/15 border-gold/40 text-gold shadow-[0_0_20px_rgba(184,149,58,0.1)]'
                    : 'bg-dark-card border-border text-text-muted hover:border-gold/20 hover:text-text-secondary'
                }`}
              >
                {fp.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <MapComponent
              center={[39.5, 33]}
              zoom={6}
              markers={mapMarkers}
              height="560px"
            />
          </motion.div>

          {/* Selected monument detail */}
          <AnimatePresence mode="wait">
            {selectedMonument && (
              <motion.div
                key={selectedMonument.name}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 bg-dark-card border rounded-2xl p-8 md:p-10 relative overflow-hidden"
                style={{ borderColor: `${periodColor(selectedMonument.period)}30` }}
              >
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-10 pointer-events-none"
                  style={{ background: periodColor(selectedMonument.period) }}
                />
                <button
                  onClick={() => setSelectedMonument(null)}
                  className="absolute top-4 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-muted hover:text-text-primary text-lg transition-all duration-300"
                >
                  &times;
                </button>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: periodColor(selectedMonument.period), boxShadow: `0 0 12px ${periodColor(selectedMonument.period)}60` }}
                    />
                    <span className="text-[0.6rem] font-semibold tracking-[2px] uppercase text-gold-dim">
                      {selectedMonument.location}
                    </span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-gold mt-1 mb-2">
                    {selectedMonument.name}
                  </h3>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[0.65rem] font-medium mb-5"
                    style={{
                      background: `${periodColor(selectedMonument.period)}15`,
                      color: periodColor(selectedMonument.period),
                      border: `1px solid ${periodColor(selectedMonument.period)}30`,
                    }}
                  >
                    {selectedMonument.period}
                  </span>
                  <p className="font-['Noto_Serif'] text-text-secondary leading-[2] text-[0.95rem]">
                    {selectedMonument.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════ MONUMENT GRID ════════ */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Eser Kataloğu
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-12 h-px bg-gold/40 mx-auto"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredMonuments.map((m, i) => (
                <motion.div
                  key={m.name}
                  layout
                  variants={fadeUp}
                  custom={i % 3}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    onClick={() => {
                      setSelectedMonument(m);
                      window.scrollTo({ top: 500, behavior: 'smooth' });
                    }}
                    className="bg-dark-card border border-border rounded-2xl p-7 h-full cursor-pointer transition-all duration-500 group overflow-hidden relative"
                    style={{
                      ['--card-accent' as string]: periodColor(m.period),
                    }}
                  >
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${periodColor(m.period)}08 0%, transparent 70%)`,
                      }}
                    />
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${periodColor(m.period)}60, transparent)`,
                      }}
                    />
                    {/* Border glow on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${periodColor(m.period)}25, 0 0 30px ${periodColor(m.period)}08`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[0.58rem] font-semibold tracking-[2px] uppercase text-gold-dim">
                          {m.location}
                        </span>
                        <div
                          className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: periodColor(m.period),
                            boxShadow: `0 0 8px ${periodColor(m.period)}50`,
                          }}
                        />
                      </div>
                      <h4 className="font-['Playfair_Display'] text-lg font-bold text-text-primary mt-1 mb-2 group-hover:text-gold transition-colors duration-300">
                        {m.name}
                      </h4>
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-full text-[0.6rem] font-medium mb-4"
                        style={{
                          background: `${periodColor(m.period)}12`,
                          color: periodColor(m.period),
                          border: `1px solid ${periodColor(m.period)}20`,
                        }}
                      >
                        {m.period}
                      </span>
                      <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                        {m.desc}
                      </p>
                      {/* Read more arrow */}
                      <div className="mt-4 flex items-center gap-1.5 text-gold/0 group-hover:text-gold/70 transition-all duration-500 text-xs">
                        <span>Detay</span>
                        <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ════════ ISTANBUL ROTASI ════════ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c0392b]/20 to-transparent" />
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-[#c0392b]/[0.015] blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="text-[0.6rem] font-semibold tracking-[5px] uppercase text-[#c0392b]/50 block mb-4">
              Yaya Keşif Rotası
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-text-primary mb-4">
              İstanbul Rotası
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-[#c0392b]/50 to-transparent mx-auto mb-5"
            />
            <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
              Prof. Dr. İlber Ortaylı&apos;nın önerdiği 13 duraklık tarihi yürüyüş güzergahı.
              Eminönü&apos;nden Sultanahmet&apos;e, Osmanlı ve Bizans katmanlarını adım adım keşfedin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <MapComponent
              key="istanbul-map"
              center={[41.018, 28.955]}
              zoom={14}
              markers={istanbulMapMarkers}
              polylines={[{
                coords: istanbulRouteCoords,
                color: '#c0392b',
                weight: 3.5,
                dashArray: '',
                opacity: 0.7,
              }]}
              height="580px"
            />
          </motion.div>

          {/* Selected stop detail */}
          <AnimatePresence mode="wait">
            {selectedStop && (
              <motion.div
                key={selectedStop.num}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 bg-dark-card border border-[#c0392b]/25 rounded-2xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#c0392b]/5 blur-[60px] pointer-events-none" />
                <button
                  onClick={() => setSelectedStop(null)}
                  className="absolute top-4 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-muted hover:text-text-primary text-lg transition-all duration-300"
                >
                  &times;
                </button>
                <div className="flex items-center gap-5 mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#c0392b] text-white font-bold flex items-center justify-center text-base flex-shrink-0 shadow-[0_0_25px_rgba(192,57,43,0.3)]">
                    {selectedStop.num}
                  </div>
                  <div>
                    <span className="text-[0.6rem] font-medium tracking-[2px] uppercase text-[#c0392b]/60 block mb-0.5">
                      Durak {selectedStop.num} / 13
                    </span>
                    <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-text-primary">
                      {selectedStop.name}
                    </h3>
                  </div>
                </div>
                <p className="font-['Noto_Serif'] text-text-secondary leading-[2] text-[0.95rem] relative z-10">
                  {selectedStop.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Timeline stops list */}
          <div className="mt-14">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[14px] top-4 bottom-4 w-px bg-gradient-to-b from-[#c0392b]/40 via-[#c0392b]/20 to-[#c0392b]/40 hidden sm:block" />

              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3">
                {istanbulStops.map((stop, i) => (
                  <motion.div
                    key={stop.num}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.button
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      onClick={() => setSelectedStop(stop)}
                      className={`w-full text-left bg-dark-card border rounded-xl p-4 transition-all duration-300 group relative overflow-hidden ${
                        selectedStop?.num === stop.num
                          ? 'border-[#c0392b]/50 bg-[#c0392b]/[0.06] shadow-[0_0_30px_rgba(192,57,43,0.08)]'
                          : 'border-border hover:border-[#c0392b]/30'
                      }`}
                    >
                      {/* Hover shimmer */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#c0392b]/[0.02] to-transparent" />

                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${
                          selectedStop?.num === stop.num
                            ? 'bg-[#c0392b] text-white shadow-[0_0_15px_rgba(192,57,43,0.4)]'
                            : 'bg-[#c0392b]/15 text-[#c0392b] group-hover:bg-[#c0392b]/25 group-hover:shadow-[0_0_10px_rgba(192,57,43,0.15)]'
                        }`}>
                          {stop.num}
                        </div>
                        <div className="min-w-0">
                          <span className="text-text-primary text-sm font-semibold group-hover:text-gold transition-colors duration-300 block truncate">
                            {stop.name}
                          </span>
                          <span className="text-text-muted text-xs line-clamp-1 mt-0.5 block">
                            {stop.desc}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ EGE KIYI ROTASI ════════ */}
      <section className="py-28 bg-dark-section relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a90d9]/20 to-transparent" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#4a90d9]/[0.02] blur-[80px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] font-semibold tracking-[5px] uppercase text-[#4a90d9]/50 block mb-4">
              Batı Anadolu Güzergahı
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-text-primary mb-4">
              Ege Kıyı Rotası
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-[#4a90d9]/50 to-transparent mx-auto mb-5"
            />
            <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
              Ionia&apos;dan Lidya&apos;ya, Helenistik dünyanın Anadolu kıyılarındaki altın çağı.
              Efes&apos;ten Priene&apos;ye uzanan antik medeniyet hattı.
            </p>
          </motion.div>

          {/* Ege stops - horizontal timeline style */}
          <div className="relative">
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute top-[22px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a90d9]/30 to-transparent hidden lg:block origin-left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {egeStops.map((stop, i) => (
                <motion.div
                  key={stop.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="bg-dark-card border border-border rounded-2xl p-7 h-full hover:border-[#4a90d9]/30 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Top glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-[#4a90d9]/[0.04] to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#4a90d9]/50 to-transparent" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#4a90d9]/15 text-[#4a90d9] font-bold flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-[#4a90d9]/25 group-hover:shadow-[0_0_20px_rgba(74,144,217,0.15)] transition-all duration-300">
                          {stop.num}
                        </div>
                        <div>
                          <h4 className="font-['Playfair_Display'] text-lg font-bold text-text-primary group-hover:text-[#4a90d9] transition-colors duration-300">
                            {stop.name}
                          </h4>
                          <span className="text-[0.6rem] font-medium tracking-[1px] uppercase text-[#4a90d9]/60">
                            {stop.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {stop.desc}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ ORTA ANADOLU ROTASI ════════ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.015] blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] font-semibold tracking-[5px] uppercase text-gold-dim/60 block mb-4">
              Kültür Güzergahı
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-gold mb-4">
              Orta Anadolu Rotası
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-5"
            />
            <p className="text-text-secondary text-sm max-w-lg mx-auto leading-relaxed">
              Ankara&apos;dan başlayıp Hitit, Kapadokya ve Selçuklu izleriyle dolaşan altı duraklık rota
            </p>
          </motion.div>

          {/* Timeline style route */}
          <div className="relative max-w-3xl mx-auto">
            {/* Central line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40 origin-top"
            />

            <div className="space-y-8">
              {routeSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Node dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-12 h-12 rounded-full bg-dark border-2 border-gold/40 flex items-center justify-center"
                    >
                      <span className="text-gold font-bold text-sm">{step.num}</span>
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-dark-card border border-border rounded-xl p-6 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/[0.03] to-transparent" />
                      <div className="relative z-10">
                        <h4 className="font-['Playfair_Display'] text-base font-bold text-text-primary group-hover:text-gold transition-colors duration-300 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ AKDENIZ DERINLIKLERI ════════ */}
      <section className="py-28 bg-dark-section relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2ecc71]/20 to-transparent" />
        <div className="absolute bottom-0 right-20 w-64 h-64 rounded-full bg-[#2ecc71]/[0.02] blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[0.6rem] font-semibold tracking-[5px] uppercase text-[#2ecc71]/50 block mb-4">
              Güney Anadolu
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Akdeniz Derinlikleri
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-[#2ecc71]/50 to-transparent mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-card border border-[#2ecc71]/15 rounded-2xl p-10 md:p-14 relative overflow-hidden"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-[#2ecc71]/[0.03] blur-[60px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2ecc71]/30 to-transparent" />

            <div className="relative z-10 text-center">
              <p className="font-['Noto_Serif'] text-text-secondary text-[0.95rem] leading-[2.2] max-w-2xl mx-auto">
                Seyahat sadece sahildeki 5 yıldızlı otellere sıkışmamalı.
                Elmalı&apos;nın sivil mimarisi, Korkuteli yaylaları, Burdur&apos;un
                muazzam <strong className="text-[#2ecc71]">Sagalassos</strong> antik kenti
                ve Büyük İskender&apos;e bile teslim olmayan <strong className="text-[#2ecc71]">Termessos</strong> dağ
                kentine mutlaka tırmanılmalı.
              </p>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Sagalassos', 'Termessos', 'Aspendos', 'Perge'].map((place, i) => (
                  <motion.div
                    key={place}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-dark/60 border border-border rounded-xl px-4 py-5 hover:border-[#2ecc71]/30 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#2ecc71]/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-[#2ecc71]/20 group-hover:shadow-[0_0_15px_rgba(46,204,113,0.1)] transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#2ecc71]/60" />
                    </div>
                    <span className="text-text-primary text-sm font-medium group-hover:text-[#2ecc71] transition-colors duration-300">
                      {place}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ DOGU ANADOLU ════════ */}
      <section className="py-28 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e74c3c]/20 to-transparent" />
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#e74c3c]/[0.015] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[#e8c547]/[0.015] blur-[80px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] font-semibold tracking-[5px] uppercase text-[#e74c3c]/50 block mb-4">
              Sınır Boylarının Mirası
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-text-primary mb-4">
              Doğu Anadolu
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-[#e74c3c]/50 to-transparent mx-auto mb-5"
            />
            <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
              Urartu&apos;dan Bagratlı Krallığı&apos;na, Kommagene&apos;den Osmanlı&apos;ya -
              Anadolu&apos;nun en sarp coğrafyasında saklanan en derin tarih.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {doguHighlights.map((place, i) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-dark-card border border-border rounded-2xl p-7 h-full hover:border-opacity-40 transition-all duration-500 group relative overflow-hidden"
                  style={{ ['--accent' as string]: place.color }}
                >
                  {/* Glow effects */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${place.color}08 0%, transparent 70%)` }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${place.color}60, transparent)` }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${place.color}25, 0 0 30px ${place.color}08` }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: place.color, boxShadow: `0 0 12px ${place.color}40` }}
                      />
                      <span className="text-[0.58rem] font-semibold tracking-[2px] uppercase text-text-muted">
                        {place.location}
                      </span>
                    </div>
                    <h4 className="font-['Playfair_Display'] text-xl font-bold text-text-primary group-hover:text-gold transition-colors duration-300 mb-3">
                      {place.name}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {place.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CLOSING QUOTE ════════ */}
      <section className="py-32 bg-dark-section relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.02] blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.08, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-['Playfair_Display'] text-[120px] md:text-[180px] text-gold leading-none mb-[-60px] md:mb-[-90px] select-none"
            >
              &ldquo;
            </motion.div>

            <blockquote className="font-['Playfair_Display'] text-xl md:text-2xl lg:text-3xl font-bold text-text-primary leading-[1.6] mb-8">
              Anadolu&apos;yu tanımayan, dünya tarihinin yarısını bilmiyordur.
              Bu topraklar her metrekaresinde başka bir medeniyetin izini taşır.
            </blockquote>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-12 h-px bg-gold/40 mx-auto mb-5"
            />

            <p className="text-gold-dim text-sm font-medium tracking-[3px] uppercase">
              Prof. Dr. İlber Ortaylı
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
