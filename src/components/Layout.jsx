import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import logoSmall from '../assets/logo-small.png';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Audífonos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img src={logoSmall} alt="Escucha+" className="h-10 w-auto" />
            <span className="font-bold text-2xl text-gray-800">escucha<span className="text-[#0093d0]">+</span></span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-gray-700 font-medium no-underline relative pb-1 transition-colors hover:text-[#0093d0] ${isActive(item.path) ? 'text-[#0093d0] border-b-2 border-[#0093d0]' : ''
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col p-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-3 px-4 border-b border-gray-100 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 mt-12">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div>
            <p className="font-bold text-xl mb-2">escucha<span className="text-[#0093d0]">+</span></p>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Centro Auditivo. Todos los derechos reservados.</p>
          </div>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center justify-center md:justify-end gap-2">
              <span className="font-medium text-white">{CONTACT_INFO.address}</span>
            </p>
            <p className="flex items-center justify-center md:justify-end gap-3 font-bold text-[#0093d0]">
              <a href={`tel:${CONTACT_INFO.phoneSecondary.replace(/\s/g, '')}`} className="hover:underline">{CONTACT_INFO.phoneSecondary}</a>
              <span>|</span>
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp: {CONTACT_INFO.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
