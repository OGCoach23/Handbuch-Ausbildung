import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Navbar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
                    <nav className="glass-card sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="text-2xl font-bold text-primary">
            SV Laim
          </Link>
          <div className="space-x-6 text-lg">
            <Link to="/" className="text-dark hover:text-primary">Start</Link>
            <Link to="/leitbild" className="text-dark hover:text-primary">Leitbild</Link>
            <Link to="/kontakt" className="text-dark hover:text-primary">Kontakt</Link>
          </div>
        </div>
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition transform hover:scale-105 z-50"
          aria-label="Zurück nach oben"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}
