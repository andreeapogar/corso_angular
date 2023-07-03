import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit{

  isDisabled=true

  constructor(){
   console.log("costruttore")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
    setInterval(()=>{
      this.isDisabled=!this.isDisabled

    },2000)
  }

}
