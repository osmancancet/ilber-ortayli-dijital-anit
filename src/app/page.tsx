'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from '@/components/CountUp';
import MemoryGallery from '@/components/MemoryGallery';

const sections = [
  { href: '/biyografi', title: 'Biyografi', icon: '§' },
  { href: '/kitaplar', title: 'Eserleri', icon: '◇' },
  { href: '/sozler', title: 'Sözleri', icon: '◆' },
  { href: '/seyahat', title: 'Seyahat', icon: '✦' },
  { href: '/rotalar', title: 'Dünya Rotaları', icon: '◎' },
  { href: '/anadolu', title: 'Anadolu', icon: '▲' },
  { href: '/okuma', title: 'Okuma Listesi', icon: '◈' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#07070c]" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(ellipse at 25% 40%, rgba(184,149,58,0.07) 0%, transparent 60%),
              radial-gradient(ellipse at 75% 60%, rgba(40,50,90,0.08) 0%, transparent 60%)`
          }} />
          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
            style={{ border: '1px solid rgba(184,149,58,0.04)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 300, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ border: '1px solid rgba(184,149,58,0.025)' }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 500, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
            style={{ border: '1px solid rgba(184,149,58,0.012)' }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4 + i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
              className="absolute w-1 h-1 rounded-full bg-gold/30"
              style={{
                left: `${15 + i * 14}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
            />
          ))}

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07070c] to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[450px]">
                {/* Gold frame */}
                <div className="absolute -inset-3 border border-gold/20 rounded-2xl" />
                <div className="absolute -inset-1.5 border border-gold/10 rounded-xl" />
                {/* Corner accents */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg z-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-lg z-10" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-lg z-10" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg z-10" />

                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/ilber-ortayli-portre.png"
                    alt="Prof. Dr. İlber Ortaylı"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070c]/60 via-transparent to-[#07070c]/20" />
                  {/* Film grain */}
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Subtle glow behind photo */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-8 bg-gold/[0.03] blur-3xl rounded-full -z-10"
                />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="text-center md:text-left flex-1">
              <motion.div
                {...fadeUp}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-border/60 bg-dark-card/40 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-text-muted text-[0.65rem] tracking-[4px] uppercase">Dijital Anıt</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-black text-text-primary leading-[1.05] tracking-tight"
              >
                <span className="block text-gold/60 text-lg md:text-xl font-normal tracking-[6px] mb-2">Prof. Dr.</span>
                İlber Ortaylı
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-5 text-text-muted text-sm tracking-[3px]"
              >
                1947 &mdash; 2026
              </motion.p>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border border-text-muted/40 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-1.5 bg-gold/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Veda */}
      <section className="py-28 bg-dark-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(184,149,58,0.04) 0%, transparent 70%)`
        }} />
        {/* Animated side lines */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '60%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-[10%] top-[20%] w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '60%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          className="absolute right-[10%] top-[20%] w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px]">
                {/* Circular gold border */}
                <div className="absolute -inset-2 rounded-full border border-gold/20" />
                <div className="absolute -inset-4 rounded-full border border-gold/10" />

                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/ilber-ortayli.png"
                    alt="Prof. Dr. İlber Ortaylı"
                    fill
                    className="object-cover"
                  />
                  {/* Vignette */}
                  <div className="absolute inset-0 rounded-full" style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(7,7,12,0.5) 100%)'
                  }} />
                </div>

                {/* Glow */}
                <motion.div
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-8 bg-gold/[0.03] blur-3xl rounded-full -z-10"
                />
              </div>
            </motion.div>

            {/* Farewell message */}
            <div className="text-center md:text-left flex-1">
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-['Noto_Serif'] italic text-gold/70 text-lg md:text-xl leading-[2] mb-8"
              >
                &ldquo;Zamanın kaybolmuşu yoktur. Yaşanan her şey, müspet, menfi, bizi inşa eder. Yalnız bizi değil, bizden sonraki kuşakları da&hellip;&rdquo;
              </motion.blockquote>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-12 h-px bg-gold/30 mx-auto md:mx-0 mb-6 origin-left"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-['Noto_Serif'] text-text-secondary text-sm md:text-base leading-[2] space-y-4"
              >
                <p>&ldquo;Yaşadıklarımızı anında belki en iyi şekilde inşa edemeyiz. Ama, onları değerlendirdiğimiz vakit; gelecek daha emin olur.&rdquo;</p>
                <p>&ldquo;Hayat &lsquo;gemi&rsquo; mi bilmiyorum; &lsquo;gemicilik&rsquo; olduğu gerçektir. Yaşandıkça ve akılda tutuldukça daha iyi seyrüsefer ederiz.&rdquo;</p>
                <p>&ldquo;Herkes kendi talihinin mimarıdır.&rdquo;</p>
                <p>&ldquo;Yaşadıkları, an be an insanı oluşturur ve arkasında bıraktıkları, farkına varmadan önüne geçer.&rdquo;</p>
                <p>&ldquo;Kader, gaipten yazılmaz. İnsan, kaderini kendi yazar.&rdquo;</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 border-y border-border/40 relative overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent"
        />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={40} suffix="+" label="Kitap" />
            <CountUp end={78} label="Yaşam Yılı" duration={1.5} />
            <CountUp end={7} label="Dil" duration={1} />
            <CountUp end={4} label="Büyük Ödül" duration={1.5} />
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[0.6rem] font-semibold tracking-[4px] uppercase text-gold-dim/60 block mb-3">Keşfet</span>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-text-primary">
              Entelektüel Mirası
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sections.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 100 }}
              >
                <Link href={s.href} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative bg-dark-card border border-border rounded-xl p-6 h-full transition-all duration-500 hover:border-gold/30 overflow-hidden"
                  >
                    {/* Animated top line */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-700" />
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/[0.03] to-transparent" />

                    <div className="relative z-10">
                      <motion.span
                        whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                        className="text-2xl mb-3 block opacity-80 group-hover:opacity-100 transition-opacity"
                      >
                        {s.icon}
                      </motion.span>
                      <h3 className="font-['Playfair_Display'] text-base font-bold text-text-primary group-hover:text-gold transition-colors duration-300">
                        {s.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anı Köşesi */}
      <section className="py-28 bg-dark-section relative overflow-hidden">
        {/* Background ambient glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(184,149,58,0.04) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] font-semibold tracking-[4px] uppercase text-gold-dim/60 block mb-3">Zamanda Yolculuk</span>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Anı Köşesi
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto"
            />
          </motion.div>

          <MemoryGallery />
        </div>
      </section>

      {/* Memorial */}
      <section className="py-36 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-[#090806] to-dark" />
        {/* Pulsing glow */}
        <motion.div
          animate={{ opacity: [0.02, 0.06, 0.02], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]"
        />
        <div className="relative max-w-3xl mx-auto px-6">
          {/* Decorative top element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <span className="text-gold/40 text-lg">&#10022;</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </motion.div>

          {/* Years */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-gold/50"
              >
                1947
              </motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="w-16 h-px bg-gold/30"
              />
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-gold/50"
              >
                2026
              </motion.span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-text-muted/50 text-[0.6rem] tracking-[5px] uppercase"
            >
              Bregenz &middot; Ankara &middot; Viyana &middot; Chicago &middot; İstanbul
            </motion.p>
          </motion.div>

          {/* Farewell message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <p className="font-['Noto_Serif'] text-text-secondary/70 text-sm md:text-base leading-[2.2] max-w-xl mx-auto mb-8">
              Yarım asrı aşkın akademik hayatıyla tarihi yalnızca yazmakla kalmayıp onu yaşatan,
              yedi dilde konuşan, dört kıtada ders veren, geniş kitlelere sevdiren ve
              gelecek nesillere aktaran eşsiz bir aydındı.
            </p>
            <p className="font-['Noto_Serif'] text-text-secondary/70 text-sm md:text-base leading-[2.2] max-w-xl mx-auto">
              13 Mart 2026&apos;da İstanbul&apos;da aramızdan ayrıldı.
              Bıraktığı eserler, yetiştirdiği öğrenciler ve açtığı ufuklar yaşamaya devam ediyor.
            </p>
          </motion.div>

          {/* Signature farewell */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.5 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-gold/20" />
              <span className="text-gold/30 text-xs">&#10022;</span>
              <div className="w-8 h-px bg-gold/20" />
            </div>
            <p className="font-['Playfair_Display'] italic text-gold/40 text-lg md:text-xl">
              Nur içinde yat, İlber Hoca.
            </p>
            <p className="text-text-muted/30 text-[0.55rem] tracking-[4px] uppercase">
              Seni unutmayacağız
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
