'use client';

import { useState, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import CountUp from '@/components/CountUp';
import { worldCities, travelPrinciples } from '@/data';

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

type RouteFilter = 'all' | 'europe' | 'east';

const ROUTE_COLORS = { europe: '#c9a84c', east: '#8b3a3a' } as const;

const filterTabs: { key: RouteFilter; label: string; icon: string }[] = [
  { key: 'all', label: 'Tüm Şehirler', icon: '◆' },
  { key: 'europe', label: 'Avrupa Halkası', icon: '◯' },
  { key: 'east', label: 'Doğu Halkası', icon: '◯' },
];

export default function RotalarPage() {
  const [routeFilter, setRouteFilter] = useState<RouteFilter>('all');
  const [selectedCity, setSelectedCity] = useState<typeof worldCities[0] | null>(null);

  const philosophyRef = useRef(null);
  const philosophyInView = useInView(philosophyRef, { once: true, margin: '-100px' });

  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, margin: '-80px' });

  const europeCities = useMemo(() => worldCities.filter(c => c.route === 'europe'), []);
  const eastCities = useMemo(() => worldCities.filter(c => c.route === 'east'), []);

  const europeRoute: [number, number][] = useMemo(
    () => worldCities.filter(c => c.route === 'europe').map(c => [c.lat, c.lng] as [number, number]),
    []
  );
  const eastRoute: [number, number][] = useMemo(
    () => worldCities.filter(c => c.route === 'east').map(c => [c.lat, c.lng] as [number, number]),
    []
  );

  const filteredCities = routeFilter === 'all'
    ? worldCities
    : worldCities.filter(c => c.route === routeFilter);

  const mapMarkers = useMemo(() => filteredCities.map((c, i) => ({
    lat: c.lat,
    lng: c.lng,
    name: c.name,
    color: c.color,
    label: String(i + 1).padStart(2, '0'),
    popupContent: `
      <div style="font-family:'Playfair Display',serif;min-width:200px;">
        <h4 style="margin:0 0 4px;font-size:1.05rem;color:#dfddd8;">${c.name}</h4>
        <div style="display:flex;gap:6px;margin-bottom:6px;">
          <span style="font-size:0.7rem;padding:2px 8px;border-radius:999px;background:${c.color}22;color:${c.color};border:1px solid ${c.color}44;">${c.route === 'europe' ? 'Avrupa' : 'Doğu'}</span>
          <span style="font-size:0.7rem;padding:2px 8px;border-radius:999px;background:#b8953a15;color:#b8953a;border:1px solid #b8953a33;">${c.season}</span>
        </div>
        <p style="color:#8e8b83;font-size:0.8rem;line-height:1.5;margin:0;">${c.layer}</p>
      </div>`,
    onClick: () => setSelectedCity(c),
  })), [filteredCities]);

  const polylines = useMemo(() => {
    if (routeFilter === 'europe') return [{ coords: europeRoute, color: ROUTE_COLORS.europe, weight: 2, dashArray: '8 6', opacity: 0.7 }];
    if (routeFilter === 'east') return [{ coords: eastRoute, color: ROUTE_COLORS.east, weight: 2, dashArray: '8 6', opacity: 0.7 }];
    return [
      { coords: europeRoute, color: ROUTE_COLORS.europe, weight: 2, dashArray: '8 6', opacity: 0.6 },
      { coords: eastRoute, color: ROUTE_COLORS.east, weight: 2, dashArray: '8 6', opacity: 0.6 },
    ];
  }, [routeFilter, europeRoute, eastRoute]);

  return (
    <div className="page-transition">
      {/* ── Hero Header ── */}
      <PageHeader
        title="Medeniyetlerin Haritası"
        quote="Dünyayı görmeden hiçbir şey ifade edemezsiniz."
      />

      {/* ── Stats Bar ── */}
      <section className="relative py-16 bg-dark-section overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(184,149,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,149,58,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <CountUp end={16} label="Başkent" />
            <CountUp end={2} label="Rota Halkası" />
            <CountUp end={40} suffix="+" label="Müze & Anıt" />
            <CountUp end={7} label="Dil" />
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* ── Route Filter + Map Section ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[0.65rem] tracking-[4px] uppercase text-gold-dim block mb-3">
              Interaktif Harita
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-text-primary">
              Rotaları Keşfedin
            </h2>
          </motion.div>

          {/* Route filter tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-dark-card border border-border rounded-full p-1.5 gap-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => { setRouteFilter(tab.key); setSelectedCity(null); }}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-400 ${
                    routeFilter === tab.key
                      ? 'text-dark'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {routeFilter === tab.key && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-[0.5rem]">{tab.icon}</span>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Route info badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center gap-6 mb-8"
          >
            {(routeFilter === 'all' || routeFilter === 'europe') && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 text-xs text-text-muted"
              >
                <span className="w-6 h-px bg-gold/60" />
                <span>Avrupa Halkası</span>
                <span className="text-gold-dim">{europeCities.length} durak</span>
              </motion.span>
            )}
            {(routeFilter === 'all' || routeFilter === 'east') && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 text-xs text-text-muted"
              >
                <span className="w-6 h-px" style={{ background: `${ROUTE_COLORS.east}99` }} />
                <span>Doğu Halkası</span>
                <span className="text-gold-dim">{eastCities.length} durak</span>
              </motion.span>
            )}
          </motion.div>

          {/* Map container with styled wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-black/40"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/20 rounded-tl-2xl z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/20 rounded-tr-2xl z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/20 rounded-bl-2xl z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/20 rounded-br-2xl z-10 pointer-events-none" />

            <MapComponent
              key={routeFilter}
              center={routeFilter === 'east' ? [42, 40] : routeFilter === 'europe' ? [44, 15] : [42, 25]}
              zoom={routeFilter === 'all' ? 3 : 4}
              markers={mapMarkers}
              polylines={polylines}
              height="560px"
            />
          </motion.div>

          {/* ── Selected City Detail Panel ── */}
          <AnimatePresence>
            {selectedCity && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 relative"
              >
                <div className="bg-dark-card border border-border rounded-2xl overflow-hidden">
                  {/* Top color accent bar */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${selectedCity.color}, ${selectedCity.color}44, transparent)` }} />

                  <div className="p-8 md:p-10 relative">
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedCity(null)}
                      className="absolute top-4 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-border text-text-muted hover:text-text-primary hover:border-gold-dim transition-all duration-300"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 1l10 10M11 1L1 11" />
                      </svg>
                    </button>

                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left: City info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <div
                            className="w-3 h-3 rounded-full ring-4 ring-opacity-20"
                            style={{ background: selectedCity.color, boxShadow: `0 0 20px ${selectedCity.color}40` }}
                          />
                          <span className="text-[0.65rem] font-semibold tracking-[3px] uppercase" style={{ color: selectedCity.color }}>
                            {selectedCity.route === 'europe' ? 'Avrupa Halkası' : 'Doğu Halkası'}
                          </span>
                        </div>

                        <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-2">
                          {selectedCity.name}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-5">
                          <span className="text-xs px-3 py-1 rounded-full bg-gold/8 border border-gold/20 text-gold-light">
                            {selectedCity.layer}
                          </span>
                          <span className="text-xs px-3 py-1 rounded-full bg-dark border border-border text-text-muted">
                            {selectedCity.season}
                          </span>
                        </div>

                        <p className="font-['Noto_Serif'] text-text-secondary leading-[2] text-[0.93rem]">
                          {selectedCity.desc}
                        </p>
                      </div>

                      {/* Right: Highlights */}
                      <div className="md:w-72 flex-shrink-0">
                        <span className="text-[0.6rem] tracking-[3px] uppercase text-text-muted block mb-4">
                          Mutlaka Gezilmeli
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedCity.highlights.map((h, idx) => (
                            <motion.span
                              key={h}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.06 }}
                              className="text-xs px-4 py-2 rounded-full border border-gold-dim/30 text-gold-light bg-gold/5 hover:bg-gold/10 hover:border-gold/40 transition-all duration-300 cursor-default"
                            >
                              {h}
                            </motion.span>
                          ))}
                        </div>

                        {/* Coordinates */}
                        <div className="mt-6 pt-4 border-t border-border">
                          <span className="text-[0.6rem] tracking-[2px] uppercase text-text-muted block mb-2">Koordinatlar</span>
                          <span className="font-mono text-xs text-text-secondary">
                            {selectedCity.lat.toFixed(4)}°N, {selectedCity.lng.toFixed(4)}°E
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── City Cards Grid ── */}
      <section className="py-24 bg-dark-section relative overflow-hidden">
        {/* Background subtle accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, #b8953a, transparent 70%)' }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <span className="text-[0.65rem] tracking-[4px] uppercase text-gold-dim block mb-3">
              {routeFilter === 'europe' ? 'Avrupa Halkası' : routeFilter === 'east' ? 'Doğu Halkası' : 'Tüm Rotalar'}
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary">
              {filteredCities.length} Medeniyet Başkenti
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-14"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCities.map((city, i) => (
                <motion.div
                  key={city.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    onClick={() => {
                      setSelectedCity(city);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-dark-card border border-border rounded-2xl cursor-pointer hover:border-gold-dim/50 transition-all duration-500 group relative overflow-hidden h-full"
                  >
                    {/* Left accent bar - grows on hover */}
                    <div className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-1.5" style={{
                      background: `linear-gradient(to bottom, ${city.color}, ${city.color}33)`,
                      opacity: 0.5,
                    }} />
                    <div className="absolute top-0 left-0 w-1 transition-all duration-500 group-hover:w-1.5 group-hover:h-full h-0" style={{
                      background: city.color,
                    }} />

                    {/* Hover glow effect */}
                    <div
                      className="absolute top-0 left-0 w-32 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `linear-gradient(90deg, ${city.color}08, transparent)` }}
                    />

                    <div className="p-7 pl-8 relative">
                      {/* Top row: index + route badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {/* Animated number index */}
                          <span className="font-['Playfair_Display'] text-2xl font-black text-border group-hover:text-gold-dim/40 transition-colors duration-500 select-none">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className="w-px h-5 bg-border" />
                          <span
                            className="text-[0.6rem] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full border"
                            style={{
                              color: ROUTE_COLORS[city.route],
                              borderColor: `${ROUTE_COLORS[city.route]}33`,
                              background: `${ROUTE_COLORS[city.route]}08`,
                            }}
                          >
                            {city.route === 'europe' ? 'Avrupa' : 'Doğu'}
                          </span>
                        </div>

                        {/* Season badge */}
                        <span className="text-[0.6rem] text-text-muted hidden md:block">
                          {city.season}
                        </span>
                      </div>

                      {/* City name */}
                      <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-text-primary mb-1 group-hover:text-gold transition-colors duration-400">
                        {city.name}
                      </h3>

                      {/* Layer / subtitle */}
                      <p className="text-gold-dim text-sm mb-3 font-medium">{city.layer}</p>

                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-[1.8] line-clamp-3 mb-5">
                        {city.desc}
                      </p>

                      {/* Highlight pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {city.highlights.slice(0, 4).map(h => (
                          <span
                            key={h}
                            className="text-[0.63rem] px-3 py-1.5 rounded-full border border-border text-text-muted group-hover:border-gold-dim/30 group-hover:text-text-secondary transition-all duration-400"
                          >
                            {h}
                          </span>
                        ))}
                        {city.highlights.length > 4 && (
                          <span className="text-[0.63rem] px-3 py-1.5 rounded-full border border-border text-text-muted">
                            +{city.highlights.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Arrow icon on hover */}
                      <div className="absolute bottom-7 right-7 w-8 h-8 flex items-center justify-center rounded-full border border-border opacity-0 group-hover:opacity-100 group-hover:border-gold-dim/40 transition-all duration-400 translate-x-2 group-hover:translate-x-0">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gold-dim">
                          <path d="M1 7h12M8 2l5 5-5 5" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Seyahat Felsefesi Section ── */}
      <section ref={philosophyRef} className="py-28 bg-dark relative overflow-hidden">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #b8953a 0, #b8953a 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[0.65rem] tracking-[4px] uppercase text-gold-dim block mb-3">
              Yol Bilgeliği
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-text-primary">
              Seyahat Felsefesi
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {travelPrinciples.slice(0, 3).map((principle, idx) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 40 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
                className="group relative"
              >
                <div className="bg-dark-card border border-border rounded-2xl p-8 h-full hover:border-gold-dim/30 transition-all duration-500 relative overflow-hidden">
                  {/* Top glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/40 to-transparent transition-all duration-700" />

                  {/* Number */}
                  <span className="font-['Playfair_Display'] text-5xl font-black text-gold/8 group-hover:text-gold/15 transition-colors duration-500 block mb-4 select-none">
                    {principle.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-text-primary mb-3 group-hover:text-gold transition-colors duration-400">
                    {principle.title}
                  </h3>

                  {/* Quote */}
                  <blockquote className="font-['Noto_Serif'] italic text-gold-dim/80 text-sm leading-[1.8] mb-4 border-l-2 border-gold/20 pl-4">
                    {principle.quote}
                  </blockquote>

                  {/* Detail */}
                  <p className="text-text-secondary text-sm leading-[1.8]">
                    {principle.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional principles as a horizontal scroll hint */}
          {travelPrinciples.length > 3 && (
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {travelPrinciples.slice(3).map((principle, idx) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 + idx * 0.15 }}
                  className="group"
                >
                  <div className="bg-dark-card border border-border rounded-xl p-6 hover:border-gold-dim/30 transition-all duration-500 flex gap-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/30 to-transparent transition-all duration-700" />
                    <span className="font-['Playfair_Display'] text-3xl font-black text-gold/8 group-hover:text-gold/15 transition-colors duration-500 flex-shrink-0 select-none">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="font-['Playfair_Display'] text-base font-bold text-text-primary mb-1.5 group-hover:text-gold transition-colors duration-400">
                        {principle.title}
                      </h3>
                      <p className="font-['Noto_Serif'] italic text-gold-dim/70 text-sm leading-[1.7] mb-2">
                        {principle.quote}
                      </p>
                      <p className="text-text-secondary text-sm leading-[1.7]">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Closing Quote Section ── */}
      <section ref={closingRef} className="relative py-32 bg-dark-section overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #b8953a, transparent 60%)' }}
        />

        {/* Decorative lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={closingInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-[20%] top-[10%] w-px h-[80%] bg-gradient-to-b from-transparent via-gold/8 to-transparent origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={closingInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="absolute right-[20%] top-[10%] w-px h-[80%] bg-gradient-to-b from-transparent via-gold/8 to-transparent origin-top"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Large decorative quote mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={closingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-['Playfair_Display'] text-7xl md:text-8xl text-gold/10 block mb-6 select-none leading-none"
          >
            &ldquo;
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={closingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Playfair_Display'] text-xl md:text-3xl font-bold text-text-primary leading-[1.6] mb-8"
          >
            Mektebi bitirir bitirmez evlenip de mobilyacı dükkânı gezeceğinize, dünyayı gezin derim.
            <br />
            <span className="text-gold">Dünyayı görmeden hiçbir şey ifade edemezsiniz.</span>
          </motion.blockquote>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={closingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-12 h-px bg-gold/40 mx-auto mb-5"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={closingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-['Noto_Serif'] text-text-muted text-sm tracking-wide"
          >
            Prof. Dr. İlber Ortaylı
          </motion.p>
        </div>
      </section>
    </div>
  );
}
