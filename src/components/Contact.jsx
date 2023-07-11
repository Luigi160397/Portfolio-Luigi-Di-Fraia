import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "service_hebzn78", // paste your ServiceID here (you'll get one when your service is created).
        "template_f909pne", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "Luigi Di Fraia", // put your name here.
          from_email: form.email,
          to_email: "luigi.difraia.97@gmail.com", //put your email here.
          message: form.message
        },
        "nyhrF12a0w7ckSyC-" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert("Grazie, vi contatterò il prima possibile");

          setForm({
            name: "",
            email: "",
            message: ""
          });
        },
        error => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText} style={{ display: "flex" }}>
          Contattami{" "}
          <span style={{ display: "flex" }}>
            <a
              href="https://www.linkedin.com/in/luigi-di-fraia-full-stack-developer/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <FaLinkedin size={20} className="text-taupe" />
            </a>
            <a
              href="https://github.com/Luigi160397"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <FaGithub size={20} className="text-taupe" />
            </a>
          </span>
        </p>

        <h3 className={styles.sectionHeadTextLight}>Contatti.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Il tuo nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Come ti chiami?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">La tua email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual'è la tua email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Il tuo messaggio</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Qual'è il tuo messaggio?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document.querySelector(".contact-btn").setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Inviando" : "Invia"}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
