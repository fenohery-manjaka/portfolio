/*
 * Tout le contenu du portfolio est ici.
 * Modifier un texte, un lien ou une image = modifier ce fichier.
 *
 * Images : chemins relatifs au dossier `public/`.
 * Pour remplacer une capture temporaire, déposez votre fichier dans
 * `public/images/projects/` puis changez la valeur `cover` du projet.
 */

export const person = {
  firstName: 'Fenohery',
  middleName: 'Manjaka',
  fullName: 'Rakotoniaina Fenohery Manjaka',
  sticker: 'images/fenohery-sticker.webp',
  stickerAlt: 'Fenohery Manjaka, souriant, lunettes et t-shirt rouge, découpé comme un sticker.',
}

export const contact = {
  github: 'https://github.com/fenohery-manjaka',
  githubLabel: 'fenohery-manjaka',
  // À compléter : laissez vide pour masquer le bouton.
  email: '',
  linkedin: '',
}

export const hero = {
  hello: 'Salut, moi c’est',
  lead:
    'Développeur Full-Stack et superviseur technique chez SymbioTek. Je transforme des besoins en applications web qui marchent. Et quand ça casse, je débogue.',
  tags: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'Ingénieur télécoms'],
  stickerNote: 'c’est moi !',
  dragHint: '(on peut me déplacer)',
  bugHint: 'psst… un bug traîne quelque part sur ce site.',
}

export const work = {
  title: 'Ce sur quoi je bosse',
  note: 'chez SymbioTek, depuis mai 2025',

  featured: {
    id: 'symbiomail',
    name: 'SymbioMail',
    kind: 'SaaS · gestion et traitement intelligent des e-mails',
    role: 'Développement & évolution',
    cover: 'images/projects/symbiomail.svg',
    coverAlt: 'Capture de SymbioMail (image temporaire)',
    summary: [
      'Le produit sur lequel je suis le plus impliqué. Une application SaaS autour de la gestion et du traitement intelligent des e-mails.',
      'Je n’y écris pas seulement du code : j’analyse aussi des besoins fonctionnels et je réfléchis à leur traduction technique.',
    ],
    stack: ['Laravel', 'Vue.js'],
    streams: [
      { title: 'Faire entrer les e-mails', items: ['Synchronisation', 'Gmail et IMAP', 'Jobs Laravel', 'Traitements asynchrones'] },
      { title: 'Les comprendre', items: ['Analyse et classification', 'Scoring', 'Règles et algorithmes métier'] },
      { title: 'Agir dessus', items: ['Brouillons', 'Workflows', 'Intégrations externes'] },
      { title: 'Les rendre lisibles', items: ['Onboarding', 'Dashboard', 'Back-office', 'UX'] },
    ],
    footnote: 'Et tout le temps : debugging, maintenance, nouvelles fonctionnalités.',
  },

  projects: [
    {
      id: 'symbiobooking',
      name: 'SymbioBooking',
      kind: 'Réservation',
      role: 'Développement · supervision technique',
      color: 'sun',
      cover: 'images/projects/symbiobooking.svg',
      coverAlt: 'Capture de SymbioBooking (image temporaire)',
      summary:
        'Un produit autour de la réservation. J’ai travaillé côté frontend comme backend, et je participe aujourd’hui à sa supervision technique.',
      points: [
        'Logique de réservation',
        'Personnalisations autour de Booknetic',
        'WhatsApp via Evolution API',
        'Workflows et automatisations',
        'Maintenance et évolution',
      ],
    },
    {
      id: 'symbioproject',
      name: 'SymbioProject',
      kind: 'Pilotage de projets',
      role: 'Développement · évolution · supervision',
      color: 'azur',
      cover: 'images/projects/symbioproject.svg',
      coverAlt: 'Capture de SymbioProject (image temporaire)',
      summary:
        'Un produit pour organiser et piloter des projets. J’ai participé à son développement, à son évolution et à sa supervision.',
      points: ['Projets connectés à leurs repositories Git', 'Récupération et exploitation des commits', 'Suivi des projets'],
    },
  ],

  postIt: {
    name: 'Omaileo',
    text: 'J’ai aussi travaillé dessus, dans le cadre de SymbioTek.',
  },
}

export const hats = {
  title: 'Deux casquettes',
  intro: 'Mon poste ne se résume pas à coder. Selon les projets, je porte l’une, l’autre, ou les deux.',
  options: [
    {
      id: 'dev',
      label: 'Développeur',
      items: [
        { verb: 'Je comprends', text: 'Analyse du besoin fonctionnel et réflexion sur sa traduction technique.' },
        { verb: 'Je construis', text: 'Frontend, backend, logique métier, intégrations avec des services externes.' },
        { verb: 'Je répare', text: 'Debugging, tests, maintenance de ce qui tourne déjà.' },
        { verb: 'Je fais grandir', text: 'Faire évoluer un produit existant, ou en créer un depuis zéro.' },
      ],
    },
    {
      id: 'lead',
      label: 'Superviseur',
      items: [
        { verb: 'Je relis', text: 'Revue de code et d’implémentations.' },
        { verb: 'Je suis', text: 'Le suivi du travail technique. (Oui, « je suis » dans les deux sens.)' },
        { verb: 'Je supervise', text: 'D’autres développements, notamment sur SymbioBooking et SymbioProject.' },
        { verb: 'Je réfléchis', text: 'Architecture applicative et choix techniques.' },
      ],
    },
  ],
}

export const workshop = {
  title: 'Mon atelier perso',
  project: {
    name: 'MJTools',
    kind: 'Projet personnel · en chantier',
    cover: 'images/projects/mjtools.svg',
    coverAlt: 'Capture de MJTools (image temporaire)',
    summary: [
      'Plusieurs outils dans un même ensemble, avec une architecture assez modulaire pour en ajouter de nouveaux au fil du temps.',
      'Premier outil en chantier : rapprocher le relevé d’un fournisseur avec ses propres données comptables. Import CSV ou XLSX, normalisation, rapprochement automatique, et seuls les cas douteux sont soumis à l’humain.',
    ],
    quote: 'Une absence de correspondance est préférable à une mauvaise correspondance présentée comme certaine.',
    quoteSource: 'mon cahier des charges',
    stack: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS'],
    repo: 'https://github.com/fenohery-manjaka/mjtools',
  },
}

export const toolbox = {
  title: 'Ma boîte à outils',
  hint: 'décollez les stickers !',
  daily: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL / PostgreSQL'],
  // shape : pill | round | square | tag · color : cherry | azur | sun | mint | white | ink
  stickers: [
    { label: 'Laravel', shape: 'pill', color: 'cherry', x: 6, y: 10, r: -8 },
    { label: 'Vue.js', shape: 'round', color: 'mint', x: 38, y: 6, r: 6 },
    { label: 'Inertia.js', shape: 'tag', color: 'white', x: 64, y: 14, r: -4 },
    { label: 'Tailwind CSS', shape: 'pill', color: 'azur', x: 12, y: 42, r: 5 },
    { label: 'MySQL', shape: 'square', color: 'sun', x: 50, y: 40, r: -10 },
    { label: 'PostgreSQL', shape: 'pill', color: 'white', x: 66, y: 58, r: 7 },
    { label: 'PHP', shape: 'round', color: 'azur', x: 82, y: 32, r: -6 },
    { label: 'JavaScript', shape: 'tag', color: 'sun', x: 4, y: 70, r: 3 },
    { label: 'Git', shape: 'round', color: 'cherry', x: 36, y: 68, r: 12 },
    { label: 'REST API', shape: 'square', color: 'white', x: 52, y: 76, r: -3 },
    { label: 'HTML / CSS', shape: 'pill', color: 'mint', x: 26, y: 26, r: -2 },
    { label: 'React', shape: 'tag', color: 'white', x: 78, y: 78, r: 8, note: 'déjà pratiqué' },
  ],
  familiar: [
    'Applications SaaS',
    'APIs externes',
    'Jobs et queues Laravel',
    'Traitements asynchrones',
    'Synchronisation de données',
    'Workflows et automatisations',
    'Intégration frontend / backend',
    'UX de produits web',
    'L’IA, quand elle est pertinente',
  ],
}

export const path = {
  title: 'Mon parcours',
  note: 'des télécoms au web',
  stops: [
    { when: '2018', what: 'Université d’Antananarivo', detail: 'Début des études en télécommunications.' },
    { when: '2023', what: 'Ingénieur en télécommunications', detail: 'Fin des études.' },
    { when: 'Mai 2025', what: 'SymbioTek', detail: 'Développeur Full-Stack & superviseur technique.' },
    { when: 'Aujourd’hui', what: 'Plusieurs produits en parallèle', detail: 'SymbioMail, SymbioBooking, SymbioProject, Omaileo. Et MJTools à côté.' },
  ],
}

export const closing = {
  title: 'On en parle ?',
  text: 'Un produit à construire, une app à faire évoluer, ou juste une question sur mon travail.',
}
