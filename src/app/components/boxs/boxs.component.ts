import { Component, OnInit } from '@angular/core';
import { CrudService } from "src/app/services/crud.service";
@Component({
  selector: 'app-boxs',
  templateUrl: './boxs.component.html',
  styleUrls: ['./boxs.component.css']
})

export class BoxsComponent implements OnInit {
  Boxes: any = [];
  cheminImage:string = "src\assets\pictures\amateur-mix.jpg";
  constructor(public crudService: CrudService) { }
  ngOnInit() {
    this.fetchBoxes()
  }
  fetchBoxes() {
    return this.crudService.getBoxes().subscribe((data: {}) => {
      this.Boxes = data;
    })
  }
}
