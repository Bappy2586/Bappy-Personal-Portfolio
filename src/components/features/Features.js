import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Strategy"
          des="Crafting effective business strategies to drive growth, enhance operations, and ensure long-term success."
        />
        <Card
          title="Website Development"
          des="Building responsive, fast, and modern websites that deliver seamless user experiences across all devices."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Improving website visibility on search engines through effective SEO techniques to attract organic traffic."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile App Development"
          des="Designing and developing mobile applications that offer high performance and great user engagement."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Creating intuitive and user-friendly interfaces to ensure a smooth and enjoyable user experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Providing secure and reliable hosting solutions to keep your websites live and always accessible."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;
