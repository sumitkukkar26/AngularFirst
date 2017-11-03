import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  template: `
  <span [class] = "className" (click) = "starClick()">
  `
})
export class StarComponent implements OnInit {

  className = "glyphicon glyphicon-star-empty";
  isFavourite = false;
  starClick() {
    if(this.isFavourite) { 
      this.className = "glyphicon glyphicon-star-empty";
    } else {
      this.className = "glyphicon glyphicon-star";
    }
    this.isFavourite = !this.isFavourite;
  }
  

  ngOnInit() {
  }

}
