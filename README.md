# Projet multimédia (Leon App)
- Hugo COLLIN
- Aimé LIM HOUN TCHEN

## Lancer le projet
- Installer `npm` (https://nodejs.org/) puis vérifier sa bonne installation avec la commande `npm -v`.
- Exécuter à la racine du projet la commande `npm install` pour installer ses dépendances.
- Exécuter la commande `npm run start` pour lancer le serveur de développement et ouvrir le projet dans le navigateur.

## Capture d'écran du jeu avec les cartes
![img.png](img.png)

## Fonctionnalités
- Choisir parmi plusieurs séries de vocabulaire
- Ecouter la prononciation du mot correspondant à l'image
- Jouer à un jeu avec la série de vocabulaire choisie
- Réécouter la prononciation du mot en cliquant sur le bouton "Réécouter"
- Afficher un message et le score à la fin du jeu
- Afficher un signal visuel (changement de couleur des cases) et lancer un message audio lors de l'interaction avec la grille de jeu

## Structure du projet

### Structure des fichiers
- Le répertoire assets contient les fichiers multimédias (images) utilisés dans le projet.
- Le répertoire css contient les fichiers CSS utilisés dans le projet.
- Le répertoire js contient les fichiers JavaScript utilisés dans le projet.

### Structure de l'application
- L'application est une SPA (Single Page Application). Un seul fichier ``index.html`` contient toutes les pages de l'application, mais seule la page active s'affiche. On détermine la page active en fonction du hash dans l'url du navigateur (`url#page`).

### Structure de l'interface
- La classe Page est liée à une page que l'utilisateur peut voir.
- La classe PageGame et PageLearning héritent de Page et représentent respectivement les pages apprentissage et jeu.

### Structure de données
- La classe Grid représente une grille d'images.
- Les classes GridLearning et GridGame sont des classes héritant de Grid et correspondant respectivement aux grilles d'apprentissage et de jeu. En particulier, GridGame gère également la logique du jeu.
- La classe Cell représente une cellule de grille sur laquelle l'utilisateur peut cliquer.
- La classe Picture est chargée de créer l'image d'une cellule d'après l'emplacement et le nom de l'image.


