# <center><img src="https://cdn.discordapp.com/attachments/468472388431118346/920264406909198366/pusheen-sushi-unscreen.gif" style="zoom: 33%;" /><img src="https://media.discordapp.net/attachments/917717231801098260/920265411877011546/sushifast-logo-github.png" style="zoom: 67%;" />

## <center> *SushiFast* </center>

### *Présentation*

Développement d'une application Web à l'aide du framework Angular qui utilise une API Node SushiShop.

Ce projet comprend deux parties, la première est à rendre pour le vendredi 10 décembre et la seconde partie  18 février.

Niveau : Deuxième année de BTS SIO SLAM

Projet effectué du lundi 29 novembre 2021, au vendredi 18 février 2022.

### *Groupe*

Brancodeurs 2 : Yannick Midey et Bryan Guillot

Etroite collaboration avec l’équipe Brancodeurs 1 composé de Lucas et Alexandre.

### *Objectif*

L’application Web aura pour résultat essentiel **le calcul d’une commande de plateaux** de Sushi. 

Mais elle comportera aussi : 

- l’affichage de la liste des plateaux de Sushi,


- la possibilité de voir le détail d’un plateau, 


- l’achat d’un ou plusieurs plateaux sous la forme d’un panier, 	


- la visualisation des commandes sauvegardées localement,


- une page spécifique concernant la mise en place du RGPD


Les **attendus techniques** demandés : 

- Interrogation d’une API existante via la saisie d’informations dans un formulaire,

- Définition d’une entité objet pour la représentation des données, 

- Affichage de la liste des objets, accès au détail, calcul de commande, 

- Sauvegarde locale côté client (LocalStorage), 

- Prise en compte d’au moins 2 Evil User Stories, 

- Test unitaire (au moins 3).

### *Liens dépôts*

Présentation du projet : https://slam-vinci-melun.github.io/sio22/phase2/SP2-Angular-2021_22.pdf

Dépôts GitHub : https://github.com/BGuiIlot/SushiFast

<div style="page-break-after: always"></div>

### *Prérequis*

- Environnement de travail opérationnel
- Savoir créer un projet Angular avec des composants.
- Avoir compris les modes d’échanges entre Parent et Enfant d’élément du DOM
  Voir : https://angular.io/guide/inputs-outputs
- Avoir une bonne connaissance de base des langage de programmation (Javascript,Typescript)
- Et comprendre l'utilisation du framework Angular.
- Avoir une bonne connaissance de MongoDB

### *Matériels utilisés :*

- OS : Windows 10
- Version NodeJS : v16.13.0
- Version Angular CLI : 13.0.2
- Version Visual Studio Code : 1.62.2
- Version MongoDB : 5.0.4

<div style="page-break-after: always"></div>

## <center>*Première partie*

### *Diagramme de cas d’utilisation*

<img src="https://media.discordapp.net/attachments/901086910083108927/917448206001008680/unknown.png" alt="img" style="zoom:80%;" />

### *Diagramme séquentiel : passer une commande*

 

<img src="https://media.discordapp.net/attachments/901086910083108927/917701431325257748/image.png" alt="img" style="zoom:80%;" />

### *Requête pour tous les plateaux*

<img src="https://media.discordapp.net/attachments/901086910083108927/917431932462170213/EnormePenisOversize.PNG" alt="img" style="zoom:67%;" />

### *Structure JSON des commandes enregistrées dans le LocalStorage*

![Une image contenant texte  Description générée automatiquement](https://cdn.discordapp.com/attachments/901086910083108927/917729209537945610/unknown.png)

### *RGPD*

<img src="https://cdn.discordapp.com/attachments/468472388431118346/920255888361672724/RGPD.PNG" alt="Une image contenant texte  Description générée automatiquement" style="zoom:150%;" />
