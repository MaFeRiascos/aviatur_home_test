import { Component, OnInit, ViewChild } from '@angular/core';

import { properties, finder, agent, pager } from './home.model';
import { propertiesData, finderData, agentData, pagerData } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  propertiesData!: properties[];
  finderData!: finder[];
  agentData!: agent[];
  pagerData!: pager[];


  ngOnInit(): void {}

  // Chat Data Fetch
  private _fetchData() {
    this.propertiesData = propertiesData;
    this.finderData = finderData;
    this.agentData = agentData;
    this.pagerData = pagerData;
  }

  /**
   * Swiper setting
  */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true
  };

  /**
   * Top properties on Finder
  */
  Finder = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 2,
      }
    }
  };

  /**
   * Open modal
   * @param content modal content
  */
  openModal(content: any) {
    console.log("open");
  }
}
