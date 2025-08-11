import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        {/* Pflichtlinks */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a href="/datenschutz" className="hover:text-[#004b87]">Datenschutz</a>
          <a href="/nutzungsbedingungen" className="hover:text-[#004b87]">Nutzungsbedingungen</a>
          <a href="/quellen" className="hover:text-[#004b87]">Quellen</a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#004b87]">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} SV München-Laim Handball – Alle Rechte vorbehalten
      </div>
    </footer>
  );
}
