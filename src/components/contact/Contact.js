import React from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Know More About Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <div className="text-gray-400 text-base space-y-4">
              <p><span className="text-white font-semibold">Full Name:</span> H M Atiqur Rahman Bappy</p>
              <p><span className="text-white font-semibold">Email:</span> atiqurrahman2586@gmail.com</p>
              <p><span className="text-white font-semibold">Phone:</span> +8801742942755</p>
              <p><span className="text-white font-semibold">Present Address:</span> [Badda, Dhaka, Bangladesh]</p>
              <p><span className="text-white font-semibold">Permanent Address:</span> [Gournadi_8230, Barishal, Bangladesh]</p>
              <p><span className="text-white font-semibold">Profession:</span> Full Stack Web Developer at HerNet Foundation</p>
              <p><span className="text-white font-semibold">Education:</span> BSc in Computer Science and Engineering from Bangladesh Army University of Engineering and Technology (BAUET)</p>
              <p><span className="text-white font-semibold">IELTS Preparation:</span> Ongoing</p>
              <p><span className="text-white font-semibold">MSc Offer:</span> MSc in Artificial Intelligence, University of East London</p>
              <p><span className="text-white font-semibold">Hobbies:</span> Traveling, trying new foods, making travel vlogs</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
