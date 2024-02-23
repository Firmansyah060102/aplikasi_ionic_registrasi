import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage{

  constructor(private navCtrl: NavController) { }
  goToDetailPage() {
    this.navCtrl.navigateForward('../detail');
 

}
}
