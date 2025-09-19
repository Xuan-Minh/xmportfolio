export const generateMetadata = ({ params }) => ({
  title: params.locale === "fr" ? "Accueil - Portfolio" : "Home - Portfolio",
  description:
    params.locale === "fr"
      ? "Portfolio de Xuan-Minh TRAN, développeur et artiste web."
      : "Portfolio of Xuan-Minh TRAN, web developer and artist.",
});
export default function Home() {
  return <div>Home Page</div>;
}
