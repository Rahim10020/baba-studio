import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import { siteConfig } from "../../data";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [buttonText, setButtonText] = useState("Send Message");

  const heading = useRef(null)
  const body = useRef(null)
  const contactSection = useRef(null)
  const apiURL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",
      // markers: true,
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [contactSection])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${apiURL}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setButtonText("Message Sent! ^_^");
        e.target.reset();
      } else {
        const errorData = await res.json();
        console.error("Server Error:", errorData);
        setButtonText("Failed to send :(");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setButtonText("Network Error :(");
    }

    setTimeout(() => {
      setButtonText("Send Message");
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="appelez-nous"
    >
      <Heading title="Audit gratuit" />
      <div ref={contactSection} className="mt-20 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
        <div className="col-span-4">
          <h3 ref={heading} className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0">
            Vous perdez de l&apos;argent chaque jour. Découvrez combien en 30 minutes.
          </h3>

          <form
            name="contact"
            action="/contact"
            autoComplete="off"
            onSubmit={sendEmail}
            className="mt-10 font-grotesk"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Votre nom
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Votre email professionnel
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="website"
                  id="website"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="website"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  URL de votre site (si vous en avez un)
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="revenue"
                  id="revenue"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="revenue"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  CA mensuel actuel (approximatif)
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Quel est votre problème principal aujourd&apos;hui ?
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
            >
              <span className="relative">
                <span className="absolute top-4 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-inOut group-hover:w-full"></span>
                <span className="group-hover:text-accent-400">
                  {buttonText === "Send Message" ? "Réserver mon audit gratuit" : buttonText}
                </span>
              </span>
            </button>
          </form>
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="flex flex-col gap-9">
            <h4 className="text-body-1 2xl:text-4xl font-semibold">Appelez-nous.</h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href={siteConfig.whatsapp}
                className="group relative w-fit cursor-pointer flex items-center gap-2 text-[#25D366] font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                <span>{siteConfig.whatsappNumber}</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-[#25D366] duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <p className="text-body-2 text-accent-200 max-w-xl">
                Discutez avec nous maintenant sur WhatsApp.
              </p>
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Bonjour, je veux un audit gratuit de mon site 🚀")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-[#25D366] text-white font-bold text-body-1 rounded-full hover:bg-[#20BA5A] transition-all duration-300 flex items-center gap-4"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>{siteConfig.email}</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Disponibilité</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Partout dans le monde <br></br>
                Réponse sous 24h <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
