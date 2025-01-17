import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-teal-500 py-4">
    <div className="container mx-auto flex items-center justify-between">
      <NavLink to="/" className="text-lg font-bold text-white">
        Home
      </NavLink>
      <ul className="flex">
        <li>
          <NavLink
            to="/NASA_APOD"
            className="ml-6 text-lg text-white transition duration-300 hover:text-black"
          >
            NASA APOD
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Weather"
            className="ml-6 text-lg text-white transition duration-300 hover:text-black"
          >
            Weather
          </NavLink>
        </li>
        {/* Repeat for any new pages */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
