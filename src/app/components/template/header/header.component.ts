import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  checked: boolean = false;

  constructor() { }

  change(){
    if(this.checked){
      document.body.classList.toggle('clear');
    }else{
      document.body.classList.remove('clear');
    }
  }

}
