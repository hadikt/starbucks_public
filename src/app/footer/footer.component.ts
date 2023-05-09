import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
ishow=false;
 toggle(){
  this.ishow=!this.ishow
 }
 moggle(){
  this.ishow=!this.ishow
 }
}
