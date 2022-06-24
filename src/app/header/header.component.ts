import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobile : any = false ;
  web : any = false ;
  display : any = false ;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = true;
      console.log(this.mobile);
    }
    else{
      this.web = true ;
    }
  }


  click(){
    this.display = !this.display;
  }


  

}
