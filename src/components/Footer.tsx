'use client';

export default function Footer() {
  const email = 'osmancancetlenbik@gmail.com';

  const handleClick = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent('İlber Ortaylı Dijital Anıt - Katkı')}`,
      '_blank'
    );
  };

  return (
    <footer className="border-t border-border/40 py-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(184,149,58,0.03) 0%, transparent 60%)`
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-text-muted text-xs tracking-[3px] uppercase">
          Prof. Dr. İlber Ortaylı &middot; 1947 &mdash; 2026
        </p>
        <p className="text-text-muted/40 text-[0.65rem] mt-3">
          Entelektüel mirasını gelecek nesillere aktarmak amacıyla hazırlanmıştır.
        </p>
        <p className="text-text-muted/30 text-[0.6rem] mt-4">
          Katkıda bulunmak için iletişim:{' '}
          <button
            onClick={handleClick}
            className="text-gold/40 hover:text-gold/70 transition-colors duration-300 underline underline-offset-2 cursor-pointer"
          >
            {email}
          </button>
        </p>
      </div>
    </footer>
  );
}
