import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit'
import { ProduitService } from '../../services/produit.service'

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  list: Produit[]

  constructor(private produitServ: ProduitService) { }

  ngOnInit() {

    this.list = this.produitServ.getListProduit()
  }

}
