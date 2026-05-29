import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
        <h2 className="text-3xl md:text-4xl font-bold">Extra-Curricular Roles</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="General Member"
          subTitle="IEEE BAUET Student Branch"
          result="Volunteer"
          des="Actively participated in seminars, workshops, and tech talks related to electrical and electronic advancements organized by IEEE."
        />
        <ResumeCard
          title="General Member"
          subTitle="BAUET Automation & Robotics Club"
          result="Volunteer"
          des="Contributed to robotics projects and helped organize competitions to promote automation and innovation among students."
        />
        <ResumeCard
          title="General Member"
          subTitle="BAUET Computer Society"
          result="Volunteer"
          des="Engaged in tech events, coding competitions, and collaborative projects that enriched technical and programming skills."
        />
        <ResumeCard
          title="Deputy Head of Event & Hospitality Management"
          subTitle="Hult Prize at BAUET"
          result="Team Lead"
          des="Led the hospitality and event team during Hult Prize regional programs, ensuring seamless logistics, guest management, and coordination."
        />
      </div>
    </motion.div>
  );
};

export default Achievement;
