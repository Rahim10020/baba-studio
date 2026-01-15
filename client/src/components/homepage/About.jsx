import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 20%",
      // markers: true,
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    <section ref={aboutSection} aria-label="about me">
      <Heading title="Le problème" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="Illustration représentant les problèmes business non résolus"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              Votre site est joli. Mais il ne travaille pas pour vous.
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              Chaque jour, des clients potentiels visitent votre site.
              <br></br>
              <br></br>
              Et chaque jour, 95% d'entre eux partent sans laisser de trace. Pas de contact. Pas de vente. Pas de rendez-vous.
              <br></br>
              <br></br>
              Pendant ce temps, vos concurrents avec des systèmes bien conçus convertissent ces mêmes visiteurs en clients payants.
              <br></br>
              <br></br>
              Le problème n'est pas votre produit. C'est votre système d'acquisition.
              <br></br>
              <br></br>
              <strong>Sans système, vous ne contrôlez rien.</strong> Vous attendez que le téléphone sonne. Vous espérez que quelqu'un vous contacte.
              <br></br>
              <br></br>
              C'est exactement ce que nous réparons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
