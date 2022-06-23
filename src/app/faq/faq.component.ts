import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq : any = [
    { "question" : "Comment trouver la lsite des canditat(e)s ?", "answer" : "Pour retrouver la liste complète des candidat(e)s, veuillez cliquer sur le menu 'Liste'. Vous pouvez aussi cliquer sur le bouton 'voter maintenant' de la page d'accueil."},
    { "question" : "Comment retrouver mon/ma canditate ?", "answer" : "pour trouver rapidement le nom de votre candidat(e), veuillez saisir son nom dans la barre de recherche située en haut de la page des candidat(e)s."},
    { "question" : "Comment voter ?", "answer" : "Pour voter, cliquez sur le bouton 'voter' qui se trouve juste en bas du profil de votre candidat(e). Veuillez choisir le mode de paiement qui vous convient et valider."},
    { "question" : "Quels sont les modes de paiement autorisés ?", "answer" : "Les modes de paiement autorisés sont : Orange Money, MTN Mobile Money, et les cartes bancaires pour les internationnaux."},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
