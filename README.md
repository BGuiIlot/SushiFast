# <center><img src="https://cdn.discordapp.com/attachments/468472388431118346/920264406909198366/pusheen-sushi-unscreen.gif" style="zoom: 33%;" /><img src="https://media.discordapp.net/attachments/917717231801098260/920265411877011546/sushifast-logo-github.png" style="zoom: 67%;" />

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

Dépôts GitHub : https://github.com/ymidey/SushiBackup

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

## *Première partie*

### *Diagramme de cas d’utilisation*

![img](https://media.discordapp.net/attachments/901086910083108927/917448206001008680/unknown.png)

### *Diagramme séquentiel : passer une commande*

![img](https://media.discordapp.net/attachments/901086910083108927/917701431325257748/image.png)

### *Requête pour tous les plateaux*

![img](https://cdn.discordapp.com/attachments/391192279253254166/944288812383744020/Requete.PNG)

### *Structure JSON*

![img](https://cdn.discordapp.com/attachments/901086910083108927/917729209537945610/unknown.png)

### *RGPD*

![img](https://cdn.discordapp.com/attachments/468472388431118346/920255888361672724/RGPD.PNG)

## Seconde partie 

### Installation du projet et de ses librairies

Ouvrez un terminal git bash puis placez-vous dans le dossier dans lequel vous voulez importer le projet.

Ensuite, effectuez la commande : 

<code>
git clone https://github.com/ymidey/SushiBackup.git
</code>

Ensuite, pour récupérer toutes les librairies, effectuez la commande :

<code>npm install</code>

## Page d'acceuil

L'opérateur arrive d'abord sur la page d'accueil du site, le "home.component". Cette page mise à part le header qui permet d'accéder aux autres pages et le footer qui permet d'accéder au RGPD permet de présenter l'application.
![img](https://media.discordapp.net/attachments/415449138747146250/940899196419059722/unknown.png)

## Page des boxes et du panier

### Affichage des plateaux

Pour afficher les plateaux, nous devons relier tout d'abord, notre application SushiFast à notre api SushiShop donné en cours.

Pour les relier, nous allons utiliser un service, <code>crud.service.ts</code>.

```typescript
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

// Interface de la box
export interface boxes {
  id: number;
  name: string;
  pieces: number;
  composition: [
    {
      nom: string,
      quantite: number,
    }
  ];
  saveurs: [];
  prix: number;
  image: string
}

// Url de l'api
const urlrest = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  constructor(private http: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //fonction pour récupérer toutes les boxes de l'api SushiShop
  getBoxes(): Observable<any> {
    return this.http.get<boxes>(urlrest + '/boxes').pipe(
      catchError(this.handleError)
    );
  }
  //fonction pour récupérer une box de l'api en fonction de son id
  getBox(id: string): Observable<any> {
    return this.http.get<boxes>(urlrest + '/boxes/' + id).pipe(
      catchError(this.handleError)
    );
  }

  }
private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }

  ```
Pour appeler notre api, nous allons donc utiliser deux fonctions :
<code>getBoxes()</code> :
```typescript
//fonction pour récupérer toutes les boxes de l'api SushiShop
getBoxes(): Observable<any> {
    return this.http.get<boxes>(urlrest + '/boxes').pipe(
      catchError(this.handleError)
    );
  }
  ```
  et <code>getBox(id: string)</code> :
  ```typescript
//fonction pour récupérer une box de l'api en fonction de son id
  getBox(id: string): Observable<any> {
    return this.http.get<boxes>(urlrest + '/boxes/' + id).pipe(
      catchError(this.handleError)
    );
  }
  ```
Suite à l'appel de notre api, nous pouvons mettre en forme les réponses reçues. Pour ce faire, à l'aide de cette fonction dans le fichier <code>boxs.component.ts</code>
```typescript
//récupère tous les menus depuis le crudService
  fetchBoxes() {
    return this.crudService.getBoxes().subscribe((data: {}) => {
      this.Boxes = data;
    })
  }
  ```
Ainsi que notre fichier HTML <code>boxs.component.html</code>, nous allons pouvoir afficher grâce à une boucle ngFor dans une div chacune de nos boxes avec son nom, son prix, le nombre de pièce ainsi que son image. 
```typescript
<div class="main">
        <div class="frame" *ngFor="let box of Boxes">
            <div class="card">
                <figure class="card-thumb">
                    <img src="./assets/pictures/{{box.image}}.jpg" class="card__image">
                    <figcaption class="card-caption">
                        <h2 class="card-title">{{box.nom}}</h2>
                        <p>{{box.prix}} €<br /> {{box.pieces}} pièces
                        </p>
                        <button class="card-button" (click)="affModal(box.id -1)">Voir plus</button>&nbsp;
                        <a class="bouton-cart"><img
                                src="https://cdn.discordapp.com/attachments/917717231801098260/920374279097430046/basket_icon-icons.com_67985.png"
                                (click)=addtocart(box) class="cart-frame-image"></a>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
```

L'interface de nos commandes ressemble donc à ceci : 
![img](https://cdn.discordapp.com/attachments/391192279253254166/944251058149007370/dfghjkl.PNG)

### Affichage du modal

Si l'opérateur veut avoir plus de détails sur une boxe spécifique, il peut cliquer sur le bouton "voir plus" qui appellera la fonction <code>affModal()</code>, qui comme son nom l'indique affiche le modal propre au plateau sélectionné.

<code>fonction affModal() du fichier boxs.component.ts</code>
```typescript
  //variable pour savoir si on affiche ou non le détail d'un menu  
  showModal: boolean = false;

  //fonction d'affichage de la fenêtre de détails
  affModal(i: number) {
    if (this.showModal) {
      this.showModal = false;
    } else {
      this.boxmodal = this.Boxes[i];
      this.showModal = true;
    }
  }

```
Suite au passage de la variable <code>showModal</code> à true, ce code dans le fichier <code>boxs.component.html</code> au départ non lu, sera lu.
```html
<div class="modal is-active" *ngIf="showModal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="modal-head" style="text-align: center;">
                <h1 class="modal-title" style="color: gold;">{{boxmodal.nom}}</h1>
                <img class="presentation" src="./assets/pictures/{{boxmodal.image}}.jpg" />
                <p>Prix : {{boxmodal.prix}} €</p>
            </div>
            <div class="modal-body">
                <p style="color: gold;">{{boxmodal.pieces}} PIÈCES, COMPOSITIONS :</p>
                <div *ngFor="let composition of boxmodal.composition">
                    <p class="compo">{{composition.quantite}} {{composition.nom}}</p>
                </div>
                <p>SAVEURS :</p>
                <p> {{boxmodal.saveurs}}</p>
            </div>

            <a class="bouton-cart"><img
                    src="https://cdn.discordapp.com/attachments/917717231801098260/920374279097430046/basket_icon-icons.com_67985.png"
                    (click)=addtocart(boxmodal) class="cart-frame-image"></a>
            <button class="card-button" (click)="affModal(0)">Fermer</button>
        </div>
    </div>

```
Une modale contenant le nom, le prix, l'image, la composition en détails de la boxes ainsi qu'un bouton ajouter au panier et un bouton fermer apparaitra sur le navigateur de l'opérateur.Si le bouton "fermer" est cliquer, la fonction <code>affModal()</code> est appelé, et comme la variable <code>showModal</code> est à True, la fonction fait passer la variable à false donc le code devenu lisible, redeviens non lisible.

![img](https://cdn.discordapp.com/attachments/391192279253254166/944243468509806612/aModalPNG.PNG)


 ### Affichage du panier et achat/suppression d'un ou plusieurs plateaux

Concernant le panier affiché sur la gauche de la page, à l'aide de la fonction <code>getPanierItemList</code>, ainsi
qu'une boucle ngFor, on affiche l'image, le nom et le prix des plateaux ajoutés.

<code>getPanierItemList :</code>
```typescript
  //Fonction pour récuperer le panier
  getpanierItemList() {
    return this.panierItemList
  }
  ```

<code>boxs.component.html :</code>
```typescript
<table class="tablepanier">
    <h2 style="text-align: center;">panier</h2>
    <thead>
        <tr style="color: white;">
            <th></th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let boxe of box let i = index">
            <td><img src="./assets/pictures/{{boxe.image}}.jpg" style="width: 58px;"></td>
            <th style="max-width: 150px;">{{boxe.nom}}</th>
            <th>{{boxe.prix}} €</th>
            <td>
                <button class="cart-button" (click)=removeitem(boxe)>Supprimer</button>
            </td>
        </tr>
    </tbody>
    <h3 style="text-align: center;" class="total-panier">Total : {{grandTotal}} €<button class="cart-button"
            (click)=addToHistorique()>Payer</button></h3>
</table>
``` 
### Ajout d'une box de sushi dans le panier
Pour ajouter une box dans le panier, l'opérateur pourra cliquer directement sur le bouton qui a pour class <code>bouton-cart</code>, ce qui appellera la fonction <code>addToCart</code>. Cette fonction ajoutera la box choisie par l'opérateur grâce à son id dans un tableau puis initialisera à la variable this.grandTotal la valeur reçu de la fonction this.crudService.getTotalPrice.Le prix totale est alors calculé.

<code>function addToCart :</code>
````typescript
//ajout d'un menu a la commande
  addtocart(boxe: any) {
    this.crudService.addtoCart(boxe);
    this.box = []
    for (var i = 0; i < this.crudService.getpanierItemList().length; i++) {
      this.fetchBox(this.crudService.getpanierItemList()[i].id);
    }
    this.grandTotal = this.crudService.getTotalPrice();
  }
````
<code>function getTotalPrice :</code>
````typescript
  //Function pour avoir le prix total de la commande 
  getTotalPrice(): number {
    let grandTotal = 0;
    this.panierItemList.map((a: any) => {
      grandTotal += a.prix;
    })
    return Math.round(grandTotal * 100) / 100;
  }
  ````

Voici un extrait vidéo d'un ajout d'une boxe dans le panier : [https://youtu.be/kZBphup-U3U](https://youtu.be/kZBphup-U3U).

### Suppression d'une box dans le panier

  Un bouton "supprimer" apparaît à droite de chaque box du panier, quand-on clique sur ce bouton, la fonction <code>removeItem</code> est appelée avec en paramètre, les informations de la box.

  ![img](https://cdn.discordapp.com/attachments/391192279253254166/944264221808541766/Panier.PNG)

  <code>Function removeItem :</code>
  ```typescript
  //retirer un menu de la commande
  removeitem(boxe: any) {
    this.crudService.removeCartItem(boxe);
    this.box = []
    for (var i = 0; i < this.crudService.getpanierItemList().length; i++) {
      this.fetchBox(this.crudService.getpanierItemList()[i].id);
    }
  // On change la valeur de this.grandTotal car le panier a été modifié, le prix doit donc être mis à jour
    this.grandTotal = this.crudService.getTotalPrice(); console.log("prix total = " + this.grandTotal)
  }
  ````

  ### Suppression de toutes les boxes du panier

Un bouton "supprimer le panier" apparait au plus bas de notre panier. Quand ce bouton est cliqué, la fonction <code>emptyCart</code> est appelé. Cette fonction va appeler la fonction <code>removeAllCart</code> situé dans le service <code>crudService</code> puis va mettre à jour la valeur de la variable <code>grandTotal</code> en lui donnant comme valeur, le retour de la fonction <code>getTotalPrice</code> situé dans le service <code>crudService</code>.

<code>Fonction emptyCart :</code>
````typescript
emptycart() {
    this.crudService.removeAllCart();
    this.box = [];
    this.grandTotal = this.crudService.getTotalPrice(); console.log("prix total = " + this.grandTotal)
  }
  ````

Voici un extrait vidéo montrant l'utilisation du bouton "supprimer le panier" : [https://youtu.be/2XWQDO1yPD8](https://youtu.be/2XWQDO1yPD8).

### Valider une commande

A droite du totale de notre commande, se situe un bouton nommé "payer". Suite, à un clique sur ce bouton, la fonction <code>addToHistorique</code> va être appelé.  Cette fonction aura pour but de vérifier tout d'abord, si la commande n'est pas vide, en vérifiant si la variable <code>grandTotal</code> n'est pas égale à 0, puis d'ajouter une date avec <code>new Date()</code> puis d'envoyer dans la variable de type Array <code>histoData</code> situé dans le service <code>crudService</code> avec un push, notre date (<code>format(date)</code>), le prix de la commande(<code>getTotalPrice</code>) ainsi que notre Array <code>box</code> contenant toutes les boxes de la commande.
Pour finir, cette fonction va d'abord vider l'Array <code>box</code>, l'Array <code>panierItemList</code> ainsi que redonner à la variable <code>grandTotal</code> une valeur de 0. Puis suite cela afin d'enregistrer chaque commande dans le local-storage, avec l'aide de <code>JSON.stringify</code>on va donner comme valeur à la variable <code>tabItems</code>, la valeur de la variable <code>histoData</code> puis ajouter au tableau <code>Historique</code> de notre stockage local, la valeur de la variable <code>tabItems</code>.

![img](https://cdn.discordapp.com/attachments/391192279253254166/944277663038726204/dregyfrhgjk.PNG)

<code>Fonction addToHistorique</code>
````typescript
//ajout de la commande a l'historique
  addToHistorique() {
    if (this.grandTotal != 0) {
      var date = new Date();
      const formatDate = (current_datetime: any) => {
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + " " + current_datetime.getHours() + "h" + current_datetime.getMinutes() + "m" + current_datetime.getSeconds() + "s";
        return formatted_date
      }
      this.crudService.histoData.push([this.crudService.getTotalPrice(), formatDate(date), this.box]);
      //   console.log(this.crudService.histoData);
      this.box = []
      this.crudService.panierItemList = []
      this.grandTotal = 0
      /* alert("Achat effectué avec succès") */
      let tabItems = JSON.stringify(this.crudService.histoData)
      localStorage.setItem('Historique', tabItems);
      alert("Payement effectué avec succès, bonne appétit 🍽")
    } else {
      alert("Veuillez choissir un plat avant de commander !!! ")
    }
  }
````

## Historique des commandes 

Maintenant dans "historique-commande.component". Ce component a pour but de répertorier les commandes effectuées par l'opérateur. En effet, une fois la commande passée, l'opérateur peut consulter l'historique qui affiche l'ID de la commande, la date exacte à la seconde près à laquelle la commande à été passée, le prix total ainsi que son statut (si oui ou non la commande fût bien payée).

Voici la vue de notre historique :
![img](https://cdn.discordapp.com/attachments/391192279253254166/944281319855226911/ztgyerhujgtkh.PNG)

Pour avoir cette vue, nous allons tout d'abord à l'initialisation de notre fichier <code>historique-commande.component.ts</code> récupérer nos données stockées dans le local storage, grâce à ce code :
````typescript
ngOnInit(): void {
    //on récupère l'historique (prix des commandes ainsi que leurs dates de payement) depuis le localstorage
    this.histo = JSON.parse(localStorage.getItem('Historique') || '[]').map((hist: any, index: Number) => {
      hist[2] = hist[2].reduce((prev: any, current: any, count: Number) => count ? prev + " " + this.transform(current.prix) + " - " + current.nom : current.prix + " € - " + current.nom, ""); return hist
    });
````

Puis, dans notre code HTML, nous allons faire une boucle <code>*ngFor</code> afin de lire chaque donnée du tableau <code>this.histo</code>.

````html
<body>
  <div class="historique">
    <h1>Historique des commandes</h1>
  </div>
  <table id="historique">
    <tr>
      <th width="10%">Order ID</th>
      <th width="15%">Date</th>
      <th width="25%">price</th>
      <th width="25%">Status </th>
      <th width="25%">Détails</th>
    </tr>
    <tr *ngFor="let hist of histo let i = index">
      <td>{{i + 1}}</td>
      <th>{{hist[1]}}</th>
      <th>{{hist[0]}} €</th>
      <th>Paid</th>
      <th>{{hist[2]}}</th>
    </tr>
  </table>
````

Si, l'opérateur souhaite supprimer l'historique des commandes, nous avons mis en place, un bouton qui, quand-il est cliqué, appelle une fonction nommé <code>deleteHistorique()</code>. Cette fonction, a pour but de supprimer le tableau "Historique" de notre local storage.

<code>Fonction deleteHistorique :</code>
````typescript
// fonction permettant de supprimer le tableau "Historique" de notre local storage
  deleteHistorique() {
    if (confirm("Etes-vous sûr de vouloir supprimer l'historique ?")) {
      localStorage.removeItem('Historique')
      location.reload();
    }
  }
  ````

Notre historique étant enregistré dans le local storage, ne sera donc pas supprimé suite à un rechargement de page.

### Page RGPD

Cette page a pour but de présenter l'entreprise, de montrer les finalités des données client récupéré, et les droits que peuvent demander les clients.

![img](https://cdn.discordapp.com/attachments/468472388431118346/920255888361672724/RGPD.PNG)

# Tests unitaires

Test unitaire de la variable <code>showModal</code>

Test unitaire :
  
![img](https://cdn.discordapp.com/attachments/901086910083108927/943067993053736980/TestUnitaireShowModal.PNG)

Fonction affModal pour appeler showModal :
  
![img](https://cdn.discordapp.com/attachments/901086910083108927/943068046921183232/ShowModal.PNG)

Test unitaire de la fonction <code>transform</code>

Test unitaire : 
  
![img](https://cdn.discordapp.com/attachments/901086910083108927/943077263283470356/Transform.PNG)

Fonction transform :
  
![img](https://cdn.discordapp.com/attachments/901086910083108927/943077208694595594/TestUnitaireTransform.PNG)

Test unitaire pour vérifier si mon titre s'affiche sur ma page <code>RGPD</code>.

Test unitaire :
  
![img](https://cdn.discordapp.com/attachments/391192279253254166/944300075021119588/TestUnitTitle.PNG)

Code de ma page html rgpd :
  
![img](https://cdn.discordapp.com/attachments/391192279253254166/944299811304251432/RGPD.PNG)

Test unitaire pour vérifier si je recupère les réponses que j'attend de mon appel api.

![img](https://cdn.discordapp.com/attachments/901086910083108927/943077991183970354/TestUnitAPI.PNG)

Voici le résultat de chacun de mes tests :
![img](https://cdn.discordapp.com/attachments/901086910083108927/944231052841476126/unknown.png)

# Evil-User Story

## Opérateur malveillant

Lors d'un achat, l'opérateur ne fait pas tout payer à un client. Ce qui résulte en une perte de revenu pour l'entreprise.
En tant qu'opérateur malveillant, un client achète 1 box de sushis et je lui en donne 2.

En tant que développeur, je peux mettre en place un système d'identification. Ainsi chaque commande est retrouveable et peut etre utiliser pour remonter jusqu'a l'opérateur malveillant.

identification d'employé (Code d'identification d'employée) dans le localstorage.

## Opérateur malveillant

A l'inverse, lors d'un achat, l'opérateur peut faire payer plus que nécessaire. Ce qui résultet à une mauvaise confiance entre l'entreprise et ses clients.
En tant qu'opérateur malveillant, un client achète 1 box de sushi mais je lui en fait payer le prix de 2.

En tant que développeur, je peux mettre en place un système d'identification. Ainsi chaque commande est retrouveable et peut etre utiliser pour remonter jusqu'a l'opérateur malveillant.

identification d'employé (Code d'identification d'employée) dans le localstorage.

## Utilisateur malveillant

En tant qu'utilisateur malveillant, je souhaite rendre le site inaccessible en commandant par exemple de nombreuses commandes grâce à un code malveillant.

En tant que développeur, je peut mettre en place, une restriction de commande effectué par minutes, ainsi seulement 10 commandes pourront être faite chaque minutes.

## Client malveillant

En tant que client malveillant, j'accède à la borne/application qui est normalement uniquement accessible par l'opérateur afin de passer sa propre commande et ne pas payer.

En tant que développeur, je met un place un système d'identification avec un mot de passe, code ou badge qui dévérouille la borde ou l'application est acessible.

# Conclusion

Pour conclure, ce projet nous à permis, le groupe brancodeurs 1 ainsi que le groupe brancodeurs 2, à revoir tout ce que nous avons vu en cours sur Angular. Telle que l'appelle à une API, les boucles ngFor, l'enregistrement de valeur dans le localStorage ainsi que la récupération de ces valeurs. Mais aussi, à travailler en distanciel pendant notre stage. Le seul reproche que l'ont pourraient faire à notre projet est que si l'on ajoute , des boxes du même nom, les boxes ne s'indentent pas, donc nous, nous retrouvons avec 3 boxes du même nom dans notre panier par exemple. Mais quant-on voit, notre premère version du projet, nous somme content du résultat finale.

Première version :
![img](https://cdn.discordapp.com/attachments/901086910083108927/915299360529588285/Captuszdfergthyghre.PNG)
