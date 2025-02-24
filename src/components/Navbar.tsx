import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Joe Serafin
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-300">About</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/skills" className="hover:text-gray-300">Skills</Link>
            <Link to="/experience" className="hover:text-gray-300">Experience</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
