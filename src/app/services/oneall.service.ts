import { Injectable } from '@angular/core';
declare var CinetPay: any;
@Injectable({
  providedIn: 'root'
})
export class OneallService {

  candidats : any = [
    {
      "name" : "Tagne Hergi Frank",
      "ville" : "Douala",
      "image" : "hergi.png",
      "id" : "1"
    },
    {
      "name" : "Moyopo Ange Victoire",
      "ville" : "Douala",
      "image" : "ange.png",
      "id" : "2"
    },
    {
      "name" : "TUEDEM TAMO SILVANIE",
      "ville" : "Douala",
      "image" : "tamo.png",
      "id" : "3"
    },
    {
      "name" : "TCHAMBA LAETICIA",
      "ville" : "Douala",
      "image" : "laeticia.png",
      "id" : "4"
    },
    {
      "name" : "Nzouami Nkohane Claude Loïc",
      "ville" : "Douala",
      "image" : "loic.png",
      "id" : "5"
    },
    {
      "name" : "Amewe fotsing Linda blonde",
      "ville" : "Bagangté",
      "image" : "linda.png",
      "id" : "6"
    },
    {
      "name" : "Nguessou NONO Julie Vanessa",
      "ville" : "Douala",
      "image" : "julie.png",
      "id" : "7"
    },
    {
      "name" : "Yvette Tantoh",
      "ville" : "Bamenda",
      "image" : "yvette.png",
      "id" : "8"
    },
    {
      "name" : "Massoma Nyacke Charlotte Stéphanie",
      "ville" : "Bamenda",
      "image" : "charlotte.png",
      "id" : "9"
    },
    {
      "name" : "Abomo palle Bryan Junior",
      "ville" : "Bamenda",
      "image" : "junior.png",
      "id" : "10"
    }
  ]

  constructor() {

   }

   getCandidats(){
     return this.candidats;
   }

   pay(id){
    CinetPay.setConfig({
      apikey: '17143088862973981cc5ad6.22031662',
      site_id: 589285,
      mode: 'PRODUCTION',
      notify_url: 'https://cintepay.theprintplus-cm.com/notify.php'
});
    CinetPay.getCheckout({
      transaction_id: Math.floor(Math.random() * 100000000).toString(),
      amount: 100,
      currency: 'XAF',
      channels: 'ALL',
      description: 'Paiement de vote',   
      //Fournir ces variables pour le paiements par carte bancaire
      customer_name: "SaveYoung",//Le nom du client
      customer_surname: "HOpe & Help",//Le prenom du client
      customer_email: "contact@saveyoung.org",//l'email du client
      customer_phone_number: "088767611",//l'email du client
      customer_address : "BP 0024",//addresse du client
      customer_city: "Douala",// La ville du client
      customer_country : "CM",// le code ISO du pays
      customer_state : "CM",// le code ISO l'état
      customer_zip_code : "06510", // code postal

        });
        CinetPay.waitResponse(function(data) {
          if (data.status == "REFUSED") {
           
            //window.location.href = "/redirect";

          } else if (data.status == "ACCEPTED") {

          }
        });
        CinetPay.onError(function(data) {
          console.log(data);
        });
   }

   vote(){

   }
}
