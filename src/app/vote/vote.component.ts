import { Component, OnInit } from '@angular/core';
import { OneallService } from '../services/oneall.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

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
