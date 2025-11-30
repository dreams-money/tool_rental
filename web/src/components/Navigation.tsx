import { Link, useLocation } from 'react-router-dom';
import logo from 'logo-plain.png';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Carson City Rentals" className="h-20" />
          </Link>
          <div className="flex gap-8">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-[#0076A8] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tools"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/tools') 
                  ? 'bg-[#0076A8] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
