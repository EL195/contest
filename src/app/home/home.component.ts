import { Component, OnInit } from '@angular/core';
import { OneallService } from '../services/oneall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  infos: any;

  constructor(
    private serviceCanditats : OneallService,
  ) { }

  ngOnInit(): void {
      this.infos = this.serviceCanditats.getCandidats();
  }


  pay(id){
    this.serviceCanditats.pay(id);
  }

}
