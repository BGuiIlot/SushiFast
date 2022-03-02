import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from "src/app/services/crud.service";
@Component({
  selector: 'app-boxs',
  templateUrl: './boxs.component.html',
  styleUrls: ['./boxs.component.css']
})

export class BoxsComponent implements OnInit {
  //variable qui stocke tous les menus
  Boxes: any = [];
  //variable qui stocke la commande
  box: any = [];
  //variable qui stocke le menu dont on veut le détails
  boxmodal: any = [];
  //variable pour savoir si on affiche ou non le détails d'un menu  
  showModal: boolean = false;
  //prix total de la commande en cours
  grandTotal: number = 0;

  //on récupère le crudService
  constructor(public crudService: CrudService) { }
  //a l'initialisation on récupère toutes les menu avec fetchBoxes
  ngOnInit(): void {
    this.fetchBoxes();
    //parcours la commande et on récupère les menus présent dans la commande
    for (var i = 0; i < this.box.length; i++) {
      this.fetchBox(this.box[i].id);
    }
  }


  //récupère un menu en fonction de son  id et l'ajoute a notre commande
  fetchBox(id: number) {
    return this.crudService.getBox(id.toString())
      .subscribe(res => {
        if (res != null) {
          this.box = this.box.concat(res);

        }
      })
  }

  //récupère tous les menus depuis le crudService
  fetchBoxes() {
    return this.crudService.getBoxes().subscribe((data: {}) => {
      this.Boxes = data;
    })
  }
  //fonction d'affichage de la fenêtre de détails
  affModal(i: number) {
    if (this.showModal) {
      this.showModal = false;
    } else {
      this.boxmodal = this.Boxes[i];
      this.showModal = true;
    }
  }

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
  //ajout d'un menu a la commande
  addtocart(boxe: any) {
    this.crudService.addtoCart(boxe);
    this.box = []
    for (var i = 0; i < this.crudService.getpanierItemList().length; i++) {
      this.fetchBox(this.crudService.getpanierItemList()[i].id);
    }
    this.grandTotal = this.crudService.getTotalPrice();
  }

  //retirer un menu de la commande
  removeitem(boxe: any) {
    this.crudService.removeCartItem(boxe);
    this.box = []
    for (var i = 0; i < this.crudService.getpanierItemList().length; i++) {
      this.fetchBox(this.crudService.getpanierItemList()[i].id);
    }

    this.grandTotal = this.crudService.getTotalPrice(); console.log("prix total = " + this.grandTotal)
  }
  emptycart() {
    this.crudService.removeAllCart();
    this.box = [];
    this.grandTotal = this.crudService.getTotalPrice(); console.log("prix total = " + this.grandTotal)
  }
}