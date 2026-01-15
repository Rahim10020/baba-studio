import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";
import { skills } from "../../data";

export default function Services() {
  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="la solution" />
      <div className="space-y-14">
        <ServiceUi
          title="Ce que nous construisons."
          description="Pas des sites jolis. Des systèmes qui génèrent des clients qualifiés automatiquement."
          items={skills.expertise}
        />
        <ServiceUi
          title="Comment on le fait."
          description="Notre stack technique éprouvée pour créer des systèmes d'acquisition fiables, rapides et scalables qui fonctionnent 24/7."
          items={skills.tools}
        />
      </div>
    </section>
  );
}
