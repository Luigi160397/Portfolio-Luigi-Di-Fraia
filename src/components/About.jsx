import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduzione</p>
        <h2 className={styles.sectionHeadText}>Profilo personale.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Sono un junior web developer full stack con una solida conoscenza di HTML, CSS, JavaScript e Sass. Ho esperienza
        nello sviluppo di applicazioni web utilizzando il framework React e posso lavorare con Java e Spring Boot per il
        back-end. Possiedo competenze nel design e nell'implementazione di database utilizzando PostgreSQL. Sono
        appassionato della creazione di esperienze utente intuitive e di alta qualità. Sono in grado di lavorare in modo
        autonomo e in team, dimostrando un'ottima capacità di problem-solving e di apprendimento rapido.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10" style={{ justifyContent: "center" }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
