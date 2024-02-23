import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController,NavController,LoadingController} from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { FilePath } from '@ionic-native/file-path';
//import { File,FileEntry } from '@ionic-native/file';

import { PostProvider } from '../../providers/post-provider';
@Component({
selector: 'app-tab2',
templateUrl: 'tab2.page.html',
styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
nama: string = '';
nohp: string = '';
nik: string = '';
umur: string = '';
alamat: string = '';
kelamin: string = '';
lahir: string = '';
agama: string = '';
status: string = '';
darah: string = '';

constructor(
public navCtrl: NavController, 
public toastCtrl: ToastController,
public actionSheetCtrl: ActionSheetController, 

//private transfer: FileTransfer,
//private camera: Camera,
//private filePath: FilePath,
//private file: File,

    
private router: Router,
public toastController: ToastController,
private postPvdr: PostProvider,
) {
}
ngOnInit() {
}

async addRegister() {
if (this.nama == '') {
const toast = await this.toastController.create({
message: 'Nama lengkap harus di isi',
duration: 2000
});
toast.present();
} else if (this.nohp == '') {
const toast = await this.toastController.create({
message: 'No HP/WA harus di isi',
duration: 2000
});
toast.present();
} else if (this.nik == '') {
const toast = await this.toastController.create({
message: 'jabatan harus di isi',
duration: 2000
});
toast.present();
} else if (this.umur == '') {
const toast = await this.toastController.create({
message: 'umur harus di isi',
duration: 2000
});
toast.present();
} else if (this.alamat == '') {
const toast = await this.toastController.create({
message: 'alamat harus di isi',
duration: 2000
});
toast.present();
} else if (this.kelamin == '') {
const toast = await this.toastController.create({
message: 'jenis kelamin harus di isi',
duration: 2000
});
toast.present();
} else if (this.lahir == '') {
const toast = await this.toastController.create({
message: 'tempat tinggal lahir harus di isi',
duration: 2000


});
toast.present();
} else if (this.agama == '') {
const toast = await this.toastController.create({
message: 'agama harus di isi',
duration: 2000
});
toast.present();
} else if (this.status == '') {
const toast = await this.toastController.create({
message: 'status harus di isi',
duration: 2000
});
toast.present();
} else if (this.darah == '') {
const toast = await this.toastController.create({
message: 'golongan darah harus di isi',
duration: 2000
});


    
  
toast.present();
} else {
let body = {
nama: this.nama,
nohp: this.nohp,
nik: this.nik,
umur: this.umur,
alamat: this.alamat,
kelamin: this.kelamin,
lahir: this.lahir,
agama: this.agama,
status: this.status,
darah: this.darah,
aksi: 'add_register'
};

this.postPvdr.postData(body, 'action.php').subscribe(async data => {
var alertpesan = data.msg;
if (data.success) {
this.router.navigate(['/tab3']);
const toast = await this.toastController.create({
message: 'Selamat! Registrasi relawan sukses.',
duration: 2000
});
toast.present();
} else {
const toast = await this.toastController.create({
message: alertpesan,
duration: 2000
});
}
});
}
}
}