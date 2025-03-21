import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy, DoCheck {
  ngOnDestroy(): void {
    console.log("Destruiu")

  }
  ngDoCheck(): void {
    console.log('uma mudanca foi feita')
  }

}
