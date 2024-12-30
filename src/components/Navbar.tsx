import React from 'react';
import { Waves, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Waves className="h-8 w-8 text-cyan-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              SPA Arquitetura e Piscinas
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#inicio">Início</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#produtos">Produtos</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#inicio">Início</MobileNavLink>
            <MobileNavLink href="#sobre">Sobre</MobileNavLink>
            <MobileNavLink href="#produtos">Produtos</MobileNavLink>
            <MobileNavLink href="#servicos">Serviços</MobileNavLink>
            <MobileNavLink href="#portfolio">Portfólio</MobileNavLink>
            <MobileNavLink href="#contato">Contato</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);