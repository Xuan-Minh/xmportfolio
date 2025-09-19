export const generateMetadata = ({ params }) => ({
  title: params.locale === "fr" ? "Contact - Portfolio" : "Contact - Portfolio",
  description:
    params.locale === "fr"
      ? "Contactez-moi pour vos projets web et artistiques."
      : "Contact me for your web and artistic projects.",
});
export default function Contact() {
  return <div>Contact Page</div>;
}
