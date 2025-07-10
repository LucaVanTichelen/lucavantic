import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
    <Link to="/" className="text-xl font-bold text-blue-600">lucavantic</Link>
    <div className="flex gap-6">
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>Home</NavLink>
      <NavLink to="/games" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>Games</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>Projects</NavLink>
      <a href="mailto:lucavantic@gmail.com" className="text-gray-700 hover:text-blue-600">Contact</a>
    </div>
  </nav>
);

export default Navbar; 