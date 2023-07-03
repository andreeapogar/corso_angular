import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immagini',
  templateUrl: './immagini.component.html',
  styleUrls: ['./immagini.component.css']
})
export class ImmaginiComponent implements OnInit{
  isDisabled = true
  immagine=''
  immagine1='https://th.bing.com/th?id=ORMS.8c72e57f4eaca3bae7c07e2dc255af37&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0'
  immagine2='https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor(){
    console.log("costruttore")
   }

  ngOnInit(): void {
    console.log("ngOnInit")
    let counter=0
    setInterval(()=>{
      if(counter%2== 0){
        this.immagine= this.immagine1
      }else{
        this.immagine= this.immagine2
      }
      counter ++
    
    },1000)
  
  }

}
