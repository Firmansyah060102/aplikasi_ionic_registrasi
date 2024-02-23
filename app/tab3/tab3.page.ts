import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  relawanList: any = [];
  limit: number = 10;
  start: number = 0;
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.relawanList = [];
    this.start = 0;
    this.loadRelawan();
  }


  doRefresh(event: any) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
    this.loadRelawan().then(() => {
    event.target.complete();
    });
    }, 500);
  }

  loadRelawan() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'action.php').subscribe(data => {
        for (let relawan of data.result) {
          this.relawanList.push(relawan);
        }
        resolve(true);
      });
    });
  }

}