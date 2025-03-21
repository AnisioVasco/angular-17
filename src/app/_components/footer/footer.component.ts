import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  ngOnInit(): void { // dispara logo assim que o componente se inicializa
    console.log ("footer inicializou");
  }


}
