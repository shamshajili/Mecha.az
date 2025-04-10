import React from 'react';
import { Twitter, Github, Linkedin } from "lucide-react"; 

const Footer: React.FC = () => {
  return (
    <footer className="p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col ml-10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
            MECHA.az
          </h2>
          <p className="mt-2 text-gray-400">
            Building the machine layer of tomorrow with cutting-edge robotics, IoT solutions, and smart manufacturing software.
          </p>
          <div className="flex space-x-4 mt-8">
            {[
              { icon: <Twitter size={16} />, link: "#" },
              { icon: <Github size={16} />, link: "#" },
              { icon: <Linkedin size={16} />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-6 h-6 flex items-center justify-center text-white rounded-full transition duration-300 hover:bg-cyan-400 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col ml-40 min-w-[180px] whitespace-nowrap">
          <h2 className="text-xl font-bold">Solutions</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-cyan-400">IoT Integrations</a></li>
            <li><a href="#" className="hover:text-cyan-400">Robotics OS</a></li>
            <li><a href="#" className="hover:text-cyan-400">Manufacturing Automation</a></li>
            <li><a href="#" className="hover:text-cyan-400">Additive Manufacturing</a></li>
            <li><a href="#" className="hover:text-cyan-400">DAO Contribution</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div className="flex flex-col ml-10">
          <h2 className="text-xl font-bold">Company</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Careers</a></li>
            <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col ml-40 min-w-[180px] whitespace-nowrap">
          <h2 className="text-xl font-bold">Stay Updated</h2>
          <p className="mt-2 text-gray-400">
            Subscribe to our newsletter for the latest updates on robotics and <br /> IoT solutions.
          </p>
          <div className="flex items-center mt-4 text-xs">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
            />
            <button 
              className="bg-cyan-400 text-white rounded-r px-4 py-2 ml-1 transition duration-300 hover:bg-cyan-600"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 MECHA.az. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0 text-gray-400">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
