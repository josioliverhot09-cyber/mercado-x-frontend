import { ShoppingCart } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="header-premium">
      <div className="header-glassmorphism" />
      <div className="header-glow-line" />
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-90 transition-opacity group">
            <div className="logo-icon-wrapper">
              <img src="/logo-icon.png" alt="Mercado X" className="w-10 h-10" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm text-foreground">Mercado</span>
              <span className="font-bold text-lg text-primary leading-none">X</span>
            </div>
          </a>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/">
            <a className="nav-link-premium">Home</a>
          </Link>
          <a href="#produtos" className="nav-link-premium">
            Produtos
          </a>
          <a href="#" className="nav-link-premium">
            Sobre
          </a>
        </nav>

        {/* Cart Button */}
        <button className="header-cart-btn">
          <ShoppingCart size={20} strokeWidth={2.5} />
          <span className="hidden sm:inline">Carrinho</span>
        </button>
      </div>
    </header>
  );
}
