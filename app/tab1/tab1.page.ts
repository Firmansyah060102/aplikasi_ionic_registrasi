import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
//mport { PageOneComponent } from './tab1.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

navigateToSectionBawah1122() {
  //this.navCtrl.navigateForward('/tabs/tab1#sectionBawah1122');
  this.router.navigate(['/tab1'], { fragment: 'sectionBawah1122' });
  }
}
