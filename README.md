# Sources des présentations des ATI Live Coding de Iorga

## Installation
Installer [NodeJS sur son poste](http://nodejs.org/)
Se mettre dans le dossier des sources, et exécuter la commande : `npm install`

## Lancer l'application
Pour lancer le serveur : `node app.js`

Dès lors, on peut accéder à l'application à l'adresse http://localhost:3000/

## Développer ou déboguer
`nodemon --debug app.js` : permet de lancer le serveur, mais va en plus le killer et le relancer dès que l'on modifie un fichier dans les sources.

Attention, il faut avoir installé `nodemon` au préalable de cette manière : `npm install -g nodemon`.

Autre "couteau suisse" des applis node : [Node Inspector](http://nodejs.org/).

Pour l'installer : `npm install -g node-inspector`.

Ensuite, après avoir lancé le serveur, lancer Node Inspector de cette manière : `node-inspector`. Et pour déboguer le serveur : http://localhost:8080/debug/port=5858