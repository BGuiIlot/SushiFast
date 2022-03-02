import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

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

const urlrest = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  constructor(private http: HttpClient) { }

  //contient tout ce que le client ajoute a son panier de la commande
  public panierItemList: any = [];
  public boxList = new BehaviorSubject<any>([]);

  //historique des commandes, a chaque commande passer on ajoute sont prix dans l'historique
  histoData: any = JSON.parse(localStorage.getItem('Historique') || '[]')

  bol_to_remove_one = false

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //getteurs pour avoir tous les menus 
  getBoxes(): Observable<any> {
    return this.http.get<boxes>(urlrest + '/boxes').pipe(
      catchError(this.handleError)
    );
  }
  //getteur pour avoir un menu menu en particulier en fonction de son id
  getBox(id: string): Observable<any> {
    return this.http.get<boxes>(urlrest + '/boxes/' + id).pipe(
      catchError(this.handleError)
    );
  }
  //Fonction pour récuperer le panier
  getpanierItemList() {
    return this.panierItemList
  }
  //ajout au menu
  addtoCart(box: any) {
    this.panierItemList.push(box);
    this.boxList.next(this.panierItemList);
  }
  //Function pour avoir le prix total de la commande 
  getTotalPrice(): number {
    let grandTotal = 0;
    this.panierItemList.map((a: any) => {
      grandTotal += a.prix;
    })
    return Math.round(grandTotal * 100) / 100;
  }
  //fonction pour retirer un menu de la commande en cours
  removeCartItem(boxe: any) {
    this.bol_to_remove_one = false
    this.panierItemList.map((a: any, index: any) => {
      if (boxe.id === a.id && this.bol_to_remove_one == false) {
        this.panierItemList.splice(index, 1); this.bol_to_remove_one = true
      }
    })

  }

  removeAllCart() {
    this.panierItemList = []
    this.boxList.next(this.panierItemList);
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
}