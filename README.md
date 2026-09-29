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
| Photo (sticker détouré) | `public/images/fenohery-sticker.webp` |
| SymbioMail | `public/images/projects/symbiomail.svg` |
| SymbioBooking | `public/images/projects/symbiobooking.svg` |
| SymbioProject | `public/images/projects/symbioproject.svg` |
| MJTools | `public/images/projects/mjtools.svg` |

Les images de projets sont **temporaires**. Pour mettre une vraie capture :

1. déposez-la dans `public/images/projects/` (par exemple `symbiomail.webp`) ;
2. changez la valeur `cover` du projet dans `src/content/profile.js`
   (`'images/projects/symbiomail.webp'`).

Format conseillé : 1600 × 1000 px (16:10) pour toutes les captures. Pensez à flouter toute donnée client ou utilisateur avant publication.

Pour transformer une nouvelle photo (fond blanc ou transparent) en sticker :
`node scripts/make-sticker.mjs chemin/vers/photo.png`.
Pour regénérer les images temporaires : `node scripts/placeholders.mjs`.

## Structure

```
src/
  content/profile.js       tout le contenu éditable (y compris la position des stickers)
  components/              une section = un composant
    BugHunt.vue            la coccinelle à attraper
    HatsSection.vue        l'interrupteur « deux casquettes »
    ToolboxSection.vue     le laptop couvert de stickers
  directives/drag.js       v-drag : rend un élément déplaçable
  style.css                palette et typographies
public/images/             sticker et captures
```

Typographies : Bagel Fat One (titres), Kalam (annotations manuscrites),
Atkinson Hyperlegible Next (texte).

## Publication

Chaque push sur `main` construit le site et le publie sur GitHub Pages
(`.github/workflows/deploy.yml`). Le build utilise des chemins relatifs : `dist/` fonctionne
tel quel sur n'importe quel hébergement statique (GitHub Pages, Netlify, un serveur Apache/Nginx…).

Première mise en ligne : dans le dépôt GitHub, **Settings → Pages → Build and deployment → Source :
GitHub Actions**, puis relancer le workflow « Deploy to GitHub Pages » (onglet Actions).
