import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  trueElement:boolean=false

  onClick(data:boolean){

    this.trueElement=!data


  }

}
