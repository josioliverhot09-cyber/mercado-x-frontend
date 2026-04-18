import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";

interface Slide {
  id: number;
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "⚡ LANÇAMENTO",
    title: "SMARTPHONES",
    titleHighlight: "PREMIUM",
    subtitle: "OFERTAS IMPERDÍVEIS",
    description: "Até 20% OFF no Pix + entrega rápida",
    buttonText: "COMPRAR AGORA",
    buttonHref: "#produtos",
    image: "/slide1-smartphone.png",
    imageAlt: "Smartphone premium com efeito neon verde",
    accentColor: "#C6FF00",
    gradientFrom: "#0B0F14",
    gradientTo: "#0d1a0d",
  },
  {
    id: 2,
    badge: "🔥 OFERTA DO DIA",
    title: "ATÉ 20% DE",
    titleHighlight: "DESCONTO NO PIX",
    subtitle: "",
    description: "Preços abaixo do mercado por tempo limitado",
    buttonText: "APROVEITAR OFERTA",
    buttonHref: "#produtos",
    image: "/slide2-vitrine.png",
    imageAlt: "Vitrine de celulares com badges de desconto",
    accentColor: "#C6FF00",
    gradientFrom: "#0B0F14",
    gradientTo: "#0f1a08",
  },
  {
    id: 3,
    badge: "🚚 FRETE GRÁTIS",
    title: "ENTREGA RÁPIDA",
    titleHighlight: "E SEGURA",
    subtitle: "",
    description: "Receba no conforto da sua casa",
    buttonText: "VER PRODUTOS",
    buttonHref: "#produtos",
    image: "/slide3-entrega.png",
    imageAlt: "Entregador profissional entregando caixa para cliente",
    accentColor: "#C6FF00",
    gradientFrom: "#0B0F14",
    gradientTo: "#0a1510",
  },
];

const AUTOPLAY_INTERVAL = 4500;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [, setLocation] = useLocation();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSlide) return;
      setIsAnimating(true);
      setProgress(0);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating, currentSlide]
  );

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }, [currentSlide, goToSlide]);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const startTime = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      setProgress(pct);
    }, 50);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoplay();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPaused, startAutoplay, currentSlide]);

  const handleButtonClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation(href);
    }
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="hero-slides-wrapper">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`hero-slide ${index === currentSlide ? "active" : "inactive"}`}
            style={{
              background: `linear-gradient(135deg, ${s.gradientFrom} 0%, ${s.gradientTo} 100%)`,
            }}
          >
            {/* Background Image */}
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${s.image})` }}
            />
            {/* Overlay gradient */}
            <div className="hero-slide-overlay" />
          </div>
        ))}

        {/* Content Layer */}
        <div className="hero-content-layer">
          <div className="hero-container">
            {/* Left: Text Content */}
            <div className="hero-text-col">
              {/* Badge */}
              {slide.badge && (
                <div className="hero-badge animate-slide-in-left" key={`badge-${currentSlide}`}>
                  {slide.badge}
                </div>
              )}

              {/* Title */}
              <h1 className="hero-title animate-slide-in-left-delay1" key={`title-${currentSlide}`}>
                {slide.title}{" "}
                {slide.titleHighlight && (
                  <span className="hero-title-highlight">{slide.titleHighlight}</span>
                )}
              </h1>

              {/* Subtitle */}
              {slide.subtitle && (
                <p className="hero-subtitle animate-slide-in-left-delay2" key={`sub-${currentSlide}`}>
                  {slide.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="hero-description animate-slide-in-left-delay2" key={`desc-${currentSlide}`}>
                {slide.description}
              </p>

              {/* CTA Button */}
              <button
                className="hero-cta-btn animate-slide-in-left-delay3"
                key={`btn-${currentSlide}`}
                onClick={() => handleButtonClick(slide.buttonHref)}
              >
                {slide.buttonText}
                <span className="hero-cta-arrow">→</span>
              </button>

              {/* Trust Badges */}
              <div className="hero-trust-badges animate-fade-in-delay4" key={`trust-${currentSlide}`}>
                <span className="trust-badge">✔ Compra segura</span>
                <span className="trust-badge">✔ Entrega rápida</span>
                <span className="trust-badge">✔ Garantia</span>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hero-image-col animate-zoom-in" key={`img-${currentSlide}`}>
              <div className="hero-image-wrapper">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="hero-image"
                />
                <div className="hero-image-glow" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="hero-nav-btn hero-nav-prev"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="hero-nav-btn hero-nav-next"
          onClick={nextSlide}
          aria-label="Próximo slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots Indicators */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            >
              {index === currentSlide && (
                <span
                  className="hero-dot-progress"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="hero-counter">
          <span className="hero-counter-current">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="hero-counter-sep">/</span>
          <span className="hero-counter-total">{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
