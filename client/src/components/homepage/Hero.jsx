import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "/src/assets/images/heroimg.webp";
import { siteConfig } from "../../data";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ScrollTl = gsap.timeline({ repeat: -1 });
      ScrollTl.fromTo(
        scrollLine.current,
        { translateX: -40 },
        { translateX: 40, duration: 1.5, ease: "power4.inOut" }
      );

      const mainTl = gsap.timeline();

      gsap.set(imgContainer.current, { scale: 0.9 });
      gsap.set(img.current, { scale: 1.5 });

      mainTl.to(imgContainer.current, {
        scale: 1,
        duration: 3.25,
        ease: "power3.inOut"
      })
      .to(
        img.current,
        { scale: 1, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(
        titles.current,
        { y: 0, duration: 2, ease: "power4.inOut" },
        "-=2.5"
      )
      .fromTo(
        scroll.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "out" },
        "-=2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero relative flex w-full h-screen select-none items-center justify-center" aria-label="hero">
      <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold  uppercase text-accent-300">
        <div className="title 2xl:py-16">
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-visible">
            Vous perdez des clients
          </h1>
        </div>
        <div className=" title 2xl:py-16">
        <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96 font-outline-3 md:font-outline-4 text-transparent overflow-visible">
            Pendant que vous dormez
          </h1>
        </div>
        <div className=" title 2xl:py-16">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
            Nous allons corriger ça
          </h1>
        </div>
        
        {/* CTA WhatsApp - Apparaît après l'animation */}
        <div className="mt-12 flex flex-col items-center gap-4 z-20">
          <p className="text-body-1 md:text-body-2 normal-case font-normal text-accent-100 text-center max-w-2xl px-4">
            Pour les coachs, e-commerce et business locaux qui veulent transformer leur site en machine à clients
          </p>
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Bonjour, je veux un audit gratuit de mon site")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#25D366] text-white font-bold text-body-2 rounded-full hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Audit Gratuit - Réponse en 1h</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </a>
          <span className="text-body-3 text-accent-100/70 normal-case">
            💬 Réponse garantie sous 1 heure
          </span>
        </div>
      </div>
      <div
        ref={imgContainer}
        className="absolute mx-auto  w-[55%] overflow-hidden rounded-md"
      >
        <img
          ref={img}
          className=" scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
      <div ref={scroll} className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
