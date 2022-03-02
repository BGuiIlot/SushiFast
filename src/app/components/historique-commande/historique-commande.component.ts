import { Component, OnInit } from '@angular/core';
import { CrudService } from "src/app/services/crud.service";

@Component({
  selector: 'app-historique-commande',
  templateUrl: './historique-commande.component.html',
  styleUrls: ['./historique-commande.component.css']
})
export class HistoriqueCommandeComponent implements OnInit {
  //variablec qui stocke l'historique
  histo: any = [];

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
    //on récupère l'historique (prix des commandes ainsi que leurs dates de payement) depuis le localstorage
    this.histo = JSON.parse(localStorage.getItem('Historique') || '[]').map((hist: any, index: Number) => {
      hist[2] = hist[2].reduce((prev: any, current: any, count: Number) => count ? prev + " " + this.transform(current.prix) + " - " + current.nom : current.prix + " € - " + current.nom, ""); return hist
    });

  }

  // fonction permettant de supprimer le tableau "Historique" de notre local storage
  deleteHistorique() {
    if (confirm("Etes-vous sur de vouloir supprimer l'historique ?")) {
      localStorage.removeItem('Historique')
      location.reload();
    }
  }

  // fonction permettant d'arrondir à deux nombres après la virgule
  transform(value: number): string {
    return `${value.toFixed(2)} €`;
  }

}
