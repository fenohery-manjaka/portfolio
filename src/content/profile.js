/*
 * Tout le contenu du portfolio est ici.
 * Modifier un texte, un lien ou une image = modifier ce fichier.
 *
 * Images : les chemins sont relatifs au dossier `public/`.
 * Pour remplacer une capture temporaire, déposez votre fichier dans
 * `public/images/projects/` puis changez la valeur `cover` du projet.
 */

export const person = {
  firstNames: 'Fenohery Manjaka',
  lastName: 'Rakotoniaina',
  fullName: 'Rakotoniaina Fenohery Manjaka',
  role: 'Développeur Full-Stack & superviseur technique',
  photo: 'images/fenohery.webp',
  photoAlt: 'Portrait de Fenohery Manjaka, souriant, lunettes, t-shirt rouge.',
  photoCaption: 'Fenohery Manjaka',
}

export const contact = {
  github: 'https://github.com/fenohery-manjaka',
  githubLabel: 'github.com/fenohery-manjaka',
  // À compléter : laissez vide pour masquer la ligne.
  email: '',
  linkedin: '',
}

export const hero = {
  kicker: 'Développeur Full-Stack · Superviseur technique',
  statement: 'Du besoin au produit, et tout ce qui vient après.',
  intro: [
    "Ingénieur en télécommunications de formation, je travaille aujourd’hui dans le développement web Full-Stack chez SymbioTek, où j’ai aussi un rôle de superviseur technique.",
    "J’analyse des besoins, je construis des fonctionnalités de bout en bout, je débogue, je relis des implémentations et je fais évoluer des produits dans la durée. Sur une codebase existante comme sur une page blanche.",
  ],
  facts: [
    { label: 'Actuellement', value: 'SymbioTek, depuis mai 2025' },
    { label: 'Au quotidien', value: 'Laravel, Vue.js, Inertia.js, Tailwind CSS' },
    { label: 'Formation', value: 'Ingénieur télécoms, Université d’Antananarivo' },
  ],
}

export const work = {
  label: 'Travail',
  title: 'Ce sur quoi je travaille chez SymbioTek',
  intro:
    "Depuis mai 2025, j’interviens sur plusieurs produits professionnels. Selon le produit, je développe, je fais évoluer, ou je supervise le travail technique.",

  featured: {
    id: 'symbiomail',
    name: 'SymbioMail',
    kind: 'Application SaaS · gestion et traitement intelligent des e-mails',
    role: 'Développement & évolution',
    cover: 'images/projects/symbiomail.svg',
    coverAlt: 'Capture de SymbioMail (image temporaire)',
    summary: [
      "SymbioMail est une application SaaS autour de la gestion et du traitement intelligent des e-mails. C’est le produit sur lequel je suis le plus impliqué.",
      "J’y travaille à la fois sur le code et en amont : une partie de mon rôle consiste à analyser des besoins fonctionnels et à réfléchir à leur traduction technique, pas seulement à les implémenter.",
    ],
    stack: ['Laravel', 'Vue.js'],
    streams: [
      {
        title: 'Faire entrer les e-mails',
        items: ["Synchronisation d’e-mails", 'Gmail et IMAP', 'Jobs Laravel', 'Traitements asynchrones'],
      },
      {
        title: 'Les comprendre',
        items: ['Analyse et classification', 'Systèmes de scoring', 'Règles et algorithmes métier'],
      },
      {
        title: 'Agir dessus',
        items: ['Génération et gestion de brouillons', 'Workflows', 'Intégrations avec des services externes'],
      },
      {
        title: 'Les rendre lisibles',
        items: ['Onboarding', 'Dashboard', 'Back-office', 'UX'],
      },
    ],
    footnote: 'Et, en continu : debugging, maintenance et évolution des fonctionnalités.',
  },

  projects: [
    {
      id: 'symbiobooking',
      name: 'SymbioBooking',
      kind: 'Réservation',
      role: 'Développement · supervision technique',
      cover: 'images/projects/symbiobooking.svg',
      coverAlt: 'Capture de SymbioBooking (image temporaire)',
      summary:
        "Un produit autour de la réservation. J’ai été impliqué dans le projet côté frontend comme backend, et je participe aujourd’hui à sa supervision technique.",
      points: [
        'Logique de réservation',
        'Personnalisations autour de Booknetic',
        'Intégration WhatsApp via Evolution API',
        'Workflows et automatisations',
        'Maintenance, debugging, évolution du produit',
      ],
    },
    {
      id: 'symbioproject',
      name: 'SymbioProject',
      kind: 'Organisation et pilotage de projets',
      role: 'Développement · évolution · supervision',
      cover: 'images/projects/symbioproject.svg',
      coverAlt: 'Capture de SymbioProject (image temporaire)',
      summary:
        "Un produit pour organiser et piloter des projets. J’ai participé à son développement, à son évolution et à sa supervision.",
      points: [
        'Connexion des projets à leurs repositories Git',
        'Récupération et exploitation des commits',
        'Suivi des projets',
      ],
    },
  ],

  others: [
    {
      name: 'Omaileo',
      note: "J’ai également travaillé sur Omaileo, dans le cadre de mon activité chez SymbioTek.",
    },
  ],
}

export const method = {
  label: 'Méthode',
  title: 'Coder, oui. Mais pas seulement.',
  intro:
    "Selon les projets et les besoins, j’interviens à différents moments de la vie d’une fonctionnalité. Parfois sur toute la chaîne, parfois sur un seul maillon.",
  stages: [
    {
      name: 'Comprendre',
      text: 'Analyser le besoin et réfléchir à sa traduction technique.',
      tags: ['Analyse du besoin', 'Réflexion technique', 'Architecture applicative'],
    },
    {
      name: 'Construire',
      text: "Implémenter de bout en bout : l’interface, le serveur, la logique métier.",
      tags: ['Frontend', 'Backend', 'Logique métier', 'Intégrations externes'],
    },
    {
      name: 'Fiabiliser',
      text: 'Déboguer, tester, maintenir ce qui tourne déjà.',
      tags: ['Debugging', 'Tests', 'Maintenance'],
    },
    {
      name: 'Faire évoluer',
      text: 'Faire grandir un produit existant, ou en concevoir un depuis zéro.',
      tags: ['Évolution produit', 'Codebases existantes', 'Nouveaux produits'],
    },
    {
      name: 'Superviser',
      text: 'Relire des implémentations, suivre le travail technique, superviser d’autres développements.',
      tags: ['Revue de code', 'Suivi technique', 'Supervision'],
    },
  ],
  note:
    'Ce dernier maillon fait partie de mon poste : je participe à la supervision technique de SymbioBooking et de SymbioProject.',
}

export const personal = {
  label: 'À côté',
  title: 'À côté, je construis mes propres outils.',
  projects: [
    {
      id: 'mjtools',
      name: 'MJTools',
      kind: 'Projet personnel · en cours',
      cover: 'images/projects/mjtools.svg',
      coverAlt: 'Capture de MJTools (image temporaire)',
      summary: [
        "Plusieurs outils réunis dans un même ensemble, avec une architecture assez modulaire pour accueillir progressivement de nouvelles fonctionnalités et de nouveaux outils.",
        "Le premier outil en chantier aide à rapprocher le relevé envoyé par un fournisseur avec ses propres données comptables : import CSV ou XLSX, identification des colonnes, normalisation, rapprochement automatique, puis seuls les cas incertains sont soumis à l’utilisateur.",
      ],
      quote: 'Une absence de correspondance est préférable à une mauvaise correspondance présentée comme certaine.',
      quoteSource: 'Extrait du cahier des charges fonctionnel',
      stack: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS'],
      repo: 'https://github.com/fenohery-manjaka/mjtools',
    },
  ],
}

export const tools = {
  label: 'Outils',
  title: 'Mon quotidien tient en une ligne.',
  formula: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL / PostgreSQL'],
  groups: [
    {
      title: 'Langages et fondations',
      items: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'PostgreSQL', 'Git', 'APIs REST'],
    },
    {
      title: 'Terrains familiers',
      items: [
        'Applications SaaS',
        'APIs externes',
        'Jobs et queues Laravel',
        'Traitements asynchrones',
        'Synchronisation de données',
        'Workflows et automatisations',
        'Intégration frontend / backend',
        'UX de produits web',
        "L’IA, quand elle est pertinente",
      ],
    },
    {
      title: 'Déjà pratiqué',
      items: ['React'],
    },
  ],
}

export const path = {
  label: 'Parcours',
  title: 'Des télécoms au web.',
  entries: [
    {
      when: 'Depuis mai 2025',
      where: 'SymbioTek',
      what: 'Développeur Full-Stack & superviseur technique',
      detail: 'SymbioMail, SymbioBooking, SymbioProject, Omaileo.',
    },
    {
      when: '2018 – 2023',
      where: 'Université d’Antananarivo',
      what: 'Ingénieur en télécommunications',
      detail: '',
    },
  ],
}

export const closing = {
  label: 'Contact',
  title: 'Un produit à construire, ou à faire évoluer ?',
  text: 'Je serai content d’en parler.',
}
