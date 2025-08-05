import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const menuItems = [
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Проекты", href: "#projects" },
    { label: "Материалы", href: "#materials" },
    { label: "Контакты", href: "#contacts" }
  ];

  const handleMenuItemClick = (href: string) => {
    onToggle();
    // Scroll to section with smooth animation
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onToggle}
      />
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={24} className="text-primary" />
            <span className="text-xl font-bold font-roboto text-foreground">Покров</span>
          </div>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Закрыть меню"
          >
            <Icon name="X" size={24} className="text-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMenuItemClick(item.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-slate-50 hover:text-primary transition-all duration-200 font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="p-6 border-t mt-auto">
          <Button 
            className="w-full" 
            size="lg"
            onClick={onToggle}
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться с нами
          </Button>
        </div>

        {/* Contact Info */}
        <div className="p-6 bg-slate-50 text-center">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Контакты</p>
            <p>+7 (423) 123-45-67</p>
            <p>info@pokrov-vl.ru</p>
            <p>г. Владивосток, ул. Светланская, 123</p>
          </div>
        </div>
      </div>
    </>
  );
}