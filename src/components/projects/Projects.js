import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="HerNet Fine Art_E-commerce Website"
          des="A complete e-commerce platform for buying and selling fine arts, featuring product listings, cart functionality, secure checkout, and admin panel."
          src={projectTwo}
        />

        <ProjectsCard
          title="Social Media Clone"
          des="A fully responsive social media web app with features like user profiles, posts, likes, comments, and real-time updates to simulate popular platforms."
          src={projectOne}
        />
        
        <ProjectsCard
          title="Chatting App"
          des="A real-time messaging application built with modern tech stack, enabling users to chat instantly with features like notifications and live typing."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects;
