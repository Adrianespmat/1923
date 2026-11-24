import { useState } from "react";
import { ArrowUpRight, CalendarDays, ChevronDown, Clock3, Instagram, MapPin, Menu, Phone, Scissors, Star, X } from "lucide-react";

const BOOKSY_URL = "https://booksy.com/es-es/112423_1923-barbershop_barberia_44760_salamanca#ba_s=seo";

const gallery = [
  { src: "/assets/1923-logo.jpg", alt: "Escaparate 1923 BarberShop", label: "La casa" },
  { src: "/assets/1923-work-01.jpg", alt: "Trabajo de barbería en 1923", label: "El oficio" },
  { src: "/assets/1923-work-02.jpg", alt: "Trabajo de color en 1923", label: "El detalle" },
  { src: "/assets/1923-interior.jpg", alt: "Interior de la barbería", label: "El espacio" },
  { src: "/assets/1923-team.jpg", alt: "Equipo de barberos trabajando", label: "El equipo" },
  { src: "/assets/1923-detail.jpg", alt: "Detalle de trabajo de barbería", label: "La actitud" },
];

const featuredServices = [
  ["Corte caballero", "30 min", "16 €"],
  ["Corte + barba", "40 min", "25 €"],
  ["Corte + asesoría con Hugo", "40 min", "20 €"],
];

const allServices = [
  ["Corte caballero", "30 min", "16 €", "El clásico 1923: precisión, textura y acabado."],
  ["Corte Caballero + Barba", "40 min", "25 €", "Corte completo más arreglo y definición de barba."],
  ["Corte Solo Degradado", "20 min", "14 €", "Solo máquina, sin tijera."],
  ["Solo degradado + Barba", "30 min", "24 €", "Solo máquina, sin tijera, más barba."],
  ["Afeitado Cabeza + Barba", "20 min", "19 €", "Ritual limpio, rápido y detallista."],
  ["Arreglo de barba", "15 min", "10 €", "Perfilado y acabado natural."],
  ["Corte+Diseño Grande", "35 min", "20 €", "Diseño de gran tamaño en un lateral o similar."],
  ["Mechas Reflejos", "1 h", "30 €", "Luz y dimensión con acabado personalizado."],
  ["Corte pelo Premium", "45 min", "25 €", "Lavado, masaje capilar, cejas y sesión fotográfica."],
  ["Afeitado Cabeza", "15 min", "8 €", "Afeitado limpio y cómodo."],
  ["Melena", "40 min", "20 €", "Corte y forma para melenas."],
  ["Afeitado Facial", "10 min", "8 €", "Afeitado clásico de rostro."],
];

const team = ["Hugo Garcia Bernalt Carballo", "Liberto Garcia", "Chambe Guille", "Juanro Benito Valle", "Albert Domínguez Peñaranda", "Arkaitz Garcia", "Sergio González"];
const reviews = [
  ["Carlos Alberto", "Genial repetiré", "Afeitado Facial"],
  ["Diego Gomez", "Arkaitz un máquina, súper majo y muy educado", "Corte caballero"],
  ["Marco", "Siempre es una buena elección cortarse el pelo con el Chambe :) ", "Corte caballero"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#inicio" onClick={() => scrollTo("inicio")}><span>19</span><b>23</b><small>BARBERSHOP</small></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <button onClick={() => scrollTo("servicios")}>Servicios</button>
          <button onClick={() => scrollTo("galeria")}>Galería</button>
          <button onClick={() => scrollTo("nosotros")}>Nosotros</button>
          <button onClick={() => scrollTo("contacto")}>Contacto</button>
        </nav>
        <div className="top-actions"><a className="mini-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a className="book-button" href={BOOKSY_URL} target="_blank" rel="noreferrer">Reservar cita <ArrowUpRight size={16} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      <main>
        <section id="inicio" className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">SALAMANCA · DESDE 1923</p>
            <h1>Una barbería<br /><em>con carácter.</em></h1>
            <p className="hero-text">Cortes honestos, barbas precisas y una forma de hacer las cosas que se nota desde que entras.</p>
            <div className="hero-actions"><a className="primary-cta" href={BOOKSY_URL} target="_blank" rel="noreferrer"><CalendarDays size={18} /> Reserva tu cita</a><button className="text-cta" onClick={() => scrollTo("nosotros")}>Conócenos <ArrowUpRight size={16} /></button></div>
            <div className="hero-proof"><div className="rating"><Star size={14} fill="currentColor" /> <b>5.0</b> <span>967 reseñas</span></div><span className="proof-divider" /><span>Solo con cita previa</span></div>
          </div>
          <div className="hero-visual"><div className="hero-frame"><img src="/assets/1923-work-01.jpg" alt="Barbero trabajando en 1923" /></div><div className="hero-stamp">19<br /><span>23</span><small>EST. SALAMANCA</small></div><div className="hero-caption">A CONFIDENT BARBERSHOP<br />SALAMANCA [37007]</div></div>
        </section>

        <section className="marquee"><span>BUEN CORTE · BUENA CHARLA · BUEN RATO</span><span>1923 BARBERSHOP</span><span>BUEN CORTE · BUENA CHARLA · BUEN RATO</span></section>

        <section id="servicios" className="services section-pad">
          <div className="section-heading"><div><p className="eyebrow">EL MENÚ</p><h2>Lo que hacemos<br /><em>mejor.</em></h2></div><p className="section-intro">Ven por el corte. Quédate por el ritual. Cada servicio está pensado para que salgas como tú, pero con un punto más.</p></div>
          <div className="featured-grid">{featuredServices.map(([name, time, price], i) => <a key={name} className={i === 1 ? "service-card featured" : "service-card"} href={BOOKSY_URL} target="_blank" rel="noreferrer"><span className="service-num">0{i + 1}</span><Scissors size={20} strokeWidth={1.5} /><h3>{name}</h3><div className="service-meta"><span>{time}</span><strong>{price}</strong></div><span className="card-arrow"><ArrowUpRight size={18} /></span></a>)}</div>
          <div className="service-list">{(showAll ? allServices : allServices.slice(0, 6)).map(([name, time, price, desc]) => <div className="service-row" key={name}><div><h3>{name}</h3><p>{desc}</p></div><span className="service-time"><Clock3 size={14} />{time}</span><strong className="service-price">{price}</strong><a className="row-link" href={BOOKSY_URL} target="_blank" rel="noreferrer">Agendar <ArrowUpRight size={14} /></a></div>)}</div>
          <button className="outline-button" onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos" : "Ver todos los servicios"}<ChevronDown className={showAll ? "rotate" : ""} size={16} /></button>
        </section>

        <section id="galeria" className="gallery-section section-pad dark-section"><div className="section-heading light"><div><p className="eyebrow">DENTRO DE 1923</p><h2>El espacio.<br /><em>El oficio.</em></h2></div><p className="section-intro">Un lugar para venir a lo tuyo. Música, conversación y el sonido de la máquina haciendo su trabajo.</p></div><div className="gallery-grid">{gallery.map((item, i) => <button className={`gallery-tile tile-${i + 1}`} key={item.src} onClick={() => setGalleryOpen(i)}><img src={item.src} alt={item.alt} /><span>{item.label} <ArrowUpRight size={15} /></span></button>)}</div></section>

        <section id="nosotros" className="about section-pad"><div className="about-image"><img src="/assets/1923-interior.jpg" alt="Interior de 1923 BarberShop" /><div className="vertical-label">1923 · SALAMANCA</div></div><div className="about-copy"><p className="eyebrow">QUIÉNES SOMOS</p><h2>Ven a visitarnos.<br /><em>Seguro que volverás.</em></h2><p>Nos encuentras cerca de la estación de autobuses de Salamanca, a cinco minutos del centro. Somos un equipo de barberos que entiende el corte como oficio y la barbería como punto de encuentro.</p><div className="about-details"><div><strong>7</strong><span>barberos</span></div><div><strong>5.0</strong><span>valoración</span></div><div><strong>2019</strong><span>en Salamanca</span></div></div><a className="text-cta" href="https://maps.google.com/?q=Avenida+de+Filiberto+Villalobos+55+Salamanca" target="_blank" rel="noreferrer">Cómo llegar <ArrowUpRight size={16} /></a></div></section>

        <section className="team section-pad"><div className="section-heading"><div><p className="eyebrow">LAS MANOS</p><h2>El equipo<br /><em>1923.</em></h2></div><p className="section-intro">Distintas manos, una misma forma de entender el detalle.</p></div><div className="team-grid">{team.map((person, i) => <div className="team-card" key={person}><div className="team-number">0{i + 1}</div><div className="team-avatar">{person.split(" ").map(n => n[0]).slice(0, 2).join("")}</div><h3>{person}</h3><p>Barbero 1923</p></div>)}</div></section>

        <section className="reviews dark-section section-pad"><div className="review-score"><p className="eyebrow">LO QUE DICEN</p><div className="big-score">5.0<span>/5</span></div><div className="stars">★★★★★</div><p>Basado en 967 reseñas</p><a className="outline-button light-button" href={BOOKSY_URL} target="_blank" rel="noreferrer">Ver todas las reseñas <ArrowUpRight size={15} /></a></div><div className="review-list">{reviews.map(([person, text, service]) => <article className="review" key={person}><div className="review-top"><span className="stars">★★★★★</span><span>Cliente verificado</span></div><p>“{text}”</p><div className="review-bottom"><b>{person}</b><small>{service}</small></div></article>)}</div></section>

        <section id="contacto" className="contact section-pad"><div className="contact-top"><div><p className="eyebrow">ENCUÉNTRANOS</p><h2>A cinco minutos<br /><em>del centro.</em></h2></div><a className="primary-cta" href={BOOKSY_URL} target="_blank" rel="noreferrer"><CalendarDays size={18} /> Reservar cita</a></div><div className="contact-grid"><div className="map-card"><div className="map-grid" /><div className="map-pin"><MapPin size={20} fill="currentColor" /></div><div className="map-label"><strong>1923 BarberShop</strong><span>Avenida de Filiberto Villalobos, 55</span><a href="https://maps.google.com/?q=Avenida+de+Filiberto+Villalobos+55+Salamanca" target="_blank" rel="noreferrer">Abrir en mapas <ArrowUpRight size={13} /></a></div></div><div className="contact-info"><div><span>HORARIO</span><strong>Lun — Sáb · 09:30 — 22:00</strong><small>Domingo · Cerrado</small></div><div><span>RESERVAS</span><strong>Solo con cita previa</strong><small>Reserva online en Booksy</small></div><div><span>CONTACTO</span><strong><Phone size={14} /> 623 117 389</strong><small><Instagram size={14} /> @1923barbershop</small></div></div></div></section>
      </main>

      <footer><a className="wordmark footer-mark" href="#inicio"><span>19</span><b>23</b><small>BARBERSHOP</small></a><p>Una barbería con carácter.<br />Salamanca, 37007.</p><div className="footer-links"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href={BOOKSY_URL} target="_blank" rel="noreferrer">Booksy <ArrowUpRight size={13} /></a></div><div className="footer-bottom"><span>© 1923 BARBERSHOP</span><span>PROTOTIPO WEB · 2026</span></div></footer>

      {galleryOpen !== null && <div className="gallery-modal" onClick={() => setGalleryOpen(null)}><button className="modal-close" onClick={() => setGalleryOpen(null)} aria-label="Cerrar"><X /></button><img src={gallery[galleryOpen].src} alt={gallery[galleryOpen].alt} onClick={e => e.stopPropagation()} /><div className="modal-caption">{gallery[galleryOpen].label} <span>{galleryOpen + 1} / {gallery.length}</span></div></div>}
    </div>
  );
}
