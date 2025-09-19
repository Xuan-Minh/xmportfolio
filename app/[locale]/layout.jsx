import "../app/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function LocaleLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <LanguageSwitcher />
        {children}
        <Footer />
      </body>
    </html>
  );
}
