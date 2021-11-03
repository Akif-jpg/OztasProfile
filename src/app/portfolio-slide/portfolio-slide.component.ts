import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio-slide',
  templateUrl: './portfolio-slide.component.html',
  styleUrls: ['./portfolio-slide.component.scss']
})
export class PortfolioSlideComponent implements OnInit {

  readonly containerPadding:string = "p-lg-3";
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
