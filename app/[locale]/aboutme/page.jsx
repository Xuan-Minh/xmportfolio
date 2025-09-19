export const generateMetadata = ({ params }) => ({
  title:
    params.locale === "fr" ? "À propos - Portfolio" : "About Me - Portfolio",
  description:
    params.locale === "fr"
      ? "En savoir plus sur Xuan-Minh TRAN, développeur et artiste web."
      : "Learn more about Xuan-Minh TRAN, web developer and artist.",
});

export default function AboutMe() {
  return <div>About Me Page</div>;
}
