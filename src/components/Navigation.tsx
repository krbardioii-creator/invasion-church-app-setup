
import { Link } from 'react-router-dom';
import logo from '../assets/logo_1757671741668.jpg';

export default function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Invasion Church Command Center" className="h-12 w-12 object-contain" />
            <span className="font-bold text-xl">Command Center</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/events" className="hover:text-accent transition-colors">Events</Link>
            <Link to="/sermons" className="hover:text-accent transition-colors">Sermons</Link>
            <Link to="/give" className="hover:text-accent transition-colors">Give</Link>
            <Link to="/connect" className="hover:text-accent transition-colors">Connect</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          </div>
          
          <button className="md:hidden text-primary-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}