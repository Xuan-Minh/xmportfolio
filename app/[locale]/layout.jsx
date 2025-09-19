import "../../styles/global.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import ClientProvider from "../../components/ClientProvider";
import messagesFr from "../../messages/fr.json";
import messagesEn from "../../messages/en.json";

export default function LocaleLayout({ children, params }) {
  const messages = params.locale === "fr" ? messagesFr : messagesEn;
  return (
    <html lang={params.locale}>
      <body>
        <ClientProvider messages={messages} locale={params.locale}>
          <Navbar />
          <LanguageSwitcher />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
