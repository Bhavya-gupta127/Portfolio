import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "TechBell",
    img: "techbell.png",
    desc: "A cutting-edge web application to optimise the interview process for interviewers and drive coordinators. Providing robust real-time features such as chat functionality and drink ordering to facilitate efficient communication.",
    url: "https://techbell.web.app/"
  },
  {
    id: 2,
    title: "Vivacity Website",
    img: "vivacity.png",
    desc: " Crafted an interactive website for Vivacity, LNMIIT's leading cultural fest, merging captivating design with seamless functionality. The platform facilitated event exploration, ticket sales, and participant registrations, enhancing user engagement and spotlighting the festival's vibrancy.",
    url: "https://bhavya-gupta127.github.io/Vivacity-2023/"
  },
  {
    id: 3,
    title: "Padh.Le App",
    img: "padhle.png",
    desc: "Padh.Le is an App that assists students in setting realistic goals and represents their learning status by giving them real-time analytics.",
    url:"https://bhavya-gupta127.github.io/Padhle-landingpage/"
  },
  {
    id: 4,
    title: "Pooja Scheduler App",
    img: "poojascheduler.png",
    desc: "This app aims to provide a convenient and organized way for individuals to plan and manage their pooja rituals. By integrating YouTube video links and offering tracking features, the app assists users in staying focused and ensuring they complete their pooja rituals according to their schedules without missing out any video/ritual.",
    url:"https://github.com/Bhavya-gupta127/Pooja-Tracker-App"
  },
  {
    id: 5,
    title: "Resume Builder Api & Website",
    img: "resumeBuilder.png",
    desc: " Resume Builder API made using react and Java Spring Boot integrated with Adobe Document Generation API for creating professional resumes efficiently. Implemented data validation, template management, and rigorous testing for reliability. Accompanied by a user-friendly website, offering the same streamlined resume creation process.",
    url: "https://github.com/Bhavya-gupta127/ResumeBuilder/tree/main"
  },
 
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container" id="Projects">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt=""  style={{objectFit: 'contain'}}/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank">
            <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        {/* <h1>Featured Works</h1> */}
        {/* <motion.div style={{ scaleX }} className="progressBar"></motion.div> */}
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
