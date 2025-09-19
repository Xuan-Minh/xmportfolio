import "../../styles/global.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher";

import { NextIntlProvider } from "next-intl";
import messagesFr from "../../messages/fr.json";
import messagesEn from "../../messages/en.json";

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
