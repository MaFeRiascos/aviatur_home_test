import { Component, OnInit } from '@angular/core';
import { Service } from './service/service.service';
import { contentData } from './data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cities: any;
  content: any;

  content1: any;

  constructor(
    public service: Service
  ){}

  ngOnInit(): void {
    this.service.getCities().subscribe((data) => {
      this.cities = data;
    });

    this.service.getContent().subscribe((data) => {
      this.content = data;
    });

    this.content1 = contentData;
  }

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false
  };
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
    
  breakpoint(e:any) {
    console.log('breakpoint');
  }
    
  afterChange(e:any) {
    console.log('afterChange');
  }
    
  beforeChange(e:any) {
    console.log('beforeChange');
  }
}
