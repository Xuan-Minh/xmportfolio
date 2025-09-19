export const generateMetadata = ({ params }) => ({
  title: params.locale === "fr" ? "Galerie - Portfolio" : "Gallery - Portfolio",
  description:
    params.locale === "fr"
      ? "Découvrez mes projets web et artistiques dans la galerie."
      : "Discover my web and artistic projects in the gallery.",
});

export default function Gallery() {
  return <div>Gallery Page</div>;
}
