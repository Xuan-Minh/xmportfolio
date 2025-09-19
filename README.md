# Portfolio de Xuan-Minh TRAN

Bienvenue sur le dépôt du portfolio personnel de Xuan-Minh TRAN.

## 🚀 Présentation

Ce projet est un site vitrine Jamstack, conçu pour présenter mes réalisations web et artistiques avec un accent sur le design, l’animation et la performance.

## 🛠️ Stack technique

- **Framework** : Next.js 14+ (App Router)
- **Langage** : JavaScript (.jsx)
- **Styling** : Tailwind CSS
- **Animation** : Framer Motion
- **Internationalisation** : next-intl (fr/en)
- **Formulaires** : react-hook-form
- **Galerie** : yet-another-react-lightbox
- **CMS** : Sanity.io (multilingue)
- **Déploiement** : Vercel

## 📁 Structure du projet

- `app/[locale]/...` : Routage dynamique par langue
- `messages/` : Fichiers de traduction JSON
- `sanity/` : Schémas et configuration du CMS

## 🌍 Internationalisation

- Langues gérées : français (`fr`), anglais (`en`)
- Routage par sous-chemin : `/fr/...`, `/en/...`

## 🖼️ Galerie

- Les projets sont gérés dans Sanity avec des champs multilingues
- Affichage des images en plein écran avec lightbox

## ⚡ Performance & Accessibilité

- Optimisation des images avec `<Image>` de Next.js
- Utilisation de balises sémantiques et bonnes pratiques a11y

## 📦 Installation

1. Clone le repo :
   ```bash
   git clone https://github.com/Xuan-Minh/xmportfolio.git
   ```
2. Installe les dépendances :
   ```bash
   npm install
   ```
3. Configure les fichiers `.env.local` pour Next.js et Sanity
4. Lance le serveur de dev :
   ```bash
   npm run dev
   ```

## 📝 Conseils pour débutants

- Le projet utilise des Server Components par défaut
- Les Client Components sont utilisés pour l’interactivité et les animations
- Le code est commenté pour faciliter la compréhension

## 📄 Licence

Ce projet est open-source, sous licence MIT.

---

Pour toute question ou suggestion, n’hésite pas à ouvrir une issue ou à me contacter !
