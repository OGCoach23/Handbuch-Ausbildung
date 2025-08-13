import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function HoverFooter() {
  return (
    <footer
      className="
        fixed left-0 w-full
        bg-[#f2f2f2] border-t border-white/70 
        transition-all duration-500 ease-in-out
        z-50
        md:bottom-[-80px] bottom-0
        md:hover:bottom-0
        h-[120px] md:h-[80px]
      "
    >


      {/* Inhalt */}
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        {/* Linke Seite */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span className="font-semibold">SV München-Laim</span>
          <span className="hidden md:inline">|</span>
          <span className="font-medium">
            Das Laimer Handbuch zur Ausbildung
          </span>
        </div>

        {/* Mittlere Sektion */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a
            href="mailto:oliver.goetsch@sv-laim-handball.de"
            className="hover:underline text-gray-600"
          >
            oliver.goetsch@sv-laim-handball.de
          </a>
          <a
            href="https://instagram.com/sv-laim-handball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Rechte Seite */}
        <div className="text-xs text-gray-500 mt-2 md:mt-0 text-center md:text-right">
          © {new Date().getFullYear()} SV München-Laim. Alle Rechte vorbehalten.{" "}
          <a href="/impressum" className="hover:underline">
            Impressum
          </a>{" "}
          |{" "}
          <a href="/datenschutz" className="hover:underline">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
