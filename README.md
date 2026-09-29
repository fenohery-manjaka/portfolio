# Portfolio · Fenohery Manjaka

Portfolio de Rakotoniaina Fenohery Manjaka, développeur Full-Stack et superviseur technique.

Construit avec **Vue 3**, **Vite** et **Tailwind CSS 4**. Aucune autre dépendance d'exécution.

## Démarrer

```bash
npm install
npm run dev       # serveur de développement
npm run build     # version de production dans dist/
npm run preview   # sert dist/ en local pour vérifier le build
```

## Modifier le contenu

Tout le texte du site se trouve dans un seul fichier :

```
src/content/profile.js
```

Nom, accroche, projets, compétences, parcours, liens de contact : on modifie ce fichier, rien d'autre.
Pour afficher un e-mail ou un profil LinkedIn, remplissez `contact.email` et `contact.linkedin`
(une valeur vide masque la ligne).

## Remplacer les images

| Image | Fichier |
| --- | --- |
| Photo de profil | `public/images/fenohery.webp` |
| SymbioMail | `public/images/projects/symbiomail.svg` |
| SymbioBooking | `public/images/projects/symbiobooking.svg` |
| SymbioProject | `public/images/projects/symbioproject.svg` |
| MJTools | `public/images/projects/mjtools.svg` |

Les images de projets sont **temporaires**. Pour mettre une vraie capture :

1. déposez-la dans `public/images/projects/` (par exemple `symbiomail.webp`) ;
2. changez la valeur `cover` du projet dans `src/content/profile.js`
   (`'images/projects/symbiomail.webp'`).

Formats conseillés : 1600 × 1100 px pour SymbioMail, 1600 × 1000 px pour SymbioBooking et SymbioProject,
1200 × 900 px pour MJTools. Pensez à flouter toute donnée client ou utilisateur avant publication.

Pour recadrer une nouvelle photo de profil : `node scripts/prepare-photo.mjs chemin/vers/photo.jpg`.
Pour regénérer les images temporaires : `node scripts/placeholders.mjs`.

## Structure

```
src/
  content/profile.js       tout le contenu éditable
  components/              une section = un composant
    PluckString.vue        les filets « cordes pincées »
  directives/reveal.js     apparition douce au scroll
  style.css                palette, typographie, thème sombre
public/images/             photo et captures
```

## Publication

Chaque push sur `main` construit le site et le publie sur GitHub Pages
(`.github/workflows/deploy.yml`). Le build utilise des chemins relatifs : `dist/` fonctionne
tel quel sur n'importe quel hébergement statique (GitHub Pages, Netlify, un serveur Apache/Nginx…).

Première mise en ligne : dans le dépôt GitHub, **Settings → Pages → Build and deployment → Source :
GitHub Actions**, puis relancer le workflow « Deploy to GitHub Pages » (onglet Actions).
