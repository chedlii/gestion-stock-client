import { Injectable } from '@angular/core';
import { Produit } from '../models/produit'

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  private listProduit: Produit[] = [{ ref: "jhgf1hg", quantite: 4, prixUnitaire: 455 }, { ref: "jhgf1hg", quantite: 4, prixUnitaire: 455 }]

  constructor() { }



  getListProduit(): Produit[] {

    return this.listProduit

  }
}
