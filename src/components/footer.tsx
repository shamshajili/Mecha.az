import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-cyan-400">MECHA.az</h2>
          <p className="mt-2 text-gray-400">
            Building the machine layer of tomorrow with cutting-edge robotics, IoT solutions, and smart manufacturing software.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Solutions</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-cyan-400">IoT Integrations</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Robotics OS</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Manufacturing Automation</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Additive Manufacturing</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">DAO Contribution</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Company</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-cyan-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Stay Updated</h2>
          <p className="mt-2 text-gray-400">
            Subscribe to our newsletter for the latest updates on robotics and IoT solutions.
          </p>
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
