import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {


partners : any = [
  { "item" : "acf.png", "url" : "https://www.actioncontrelafaim.org/"},
  { "item" : "carrefour.png", "url" : "https://www.carrefour.fr/"},
  { "item" : "clubt.png", "url" : "https://www.facebook.com/sembiotech.cm"},
  { "item" : "cr.png", "url" : "https://croix-rouge.cm/"},
  { "item" : "guce.png", "url" : "https://www.guichetunique.cm/"},
  { "item" : "ipfja.png", "url" : "https://www.facebook.com/Institut-de-Formation-Professionnelle-Jardin-dAfrique-lIFPJA-139665268258982/"},
  { "item" : "nacka.png", "url" : "https://nackaboss-fr.myshopify.com/?_ab=0&_fd=0&_sc=1"},
  { "item" : "ophelia.png", "url" : "https://www.oppelia.fr/"},
  { "item" : "pam.png", "url" : "https://fr.wfp.org/"},
  { "item" : "panzani.png", "url" : "https://www.panzani.fr/"},
  { "item" : "unesco.png", "url" : "https://fr.unesco.org/"},
  { "item" : "unicef.png", "url" : "https://www.unicef.org/fr"}
]


  constructor() { }

  ngOnInit(): void {
    console.log(this.partners)
  }

}
