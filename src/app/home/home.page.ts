import { MenuComponent } from './../components/menu/menu.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-provider';
import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dadosLogin : any;
  usuario : string;

  op: any = {
    op1: true,
    op2: false,
    op3: false
  };

  /* ativar: boolean = false; */

  constructor(
    private router:Router,
    private provider:PostProvider,
    private storage:NativeStorage,
    public toast:ToastController,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter(){
   this.storage.getItem('session_storage').then((res)=>{
  this.dadosLogin = res;
  this.usuario = this.dadosLogin.usuario;
  console.log(res);
  });
  }

/*   doToggle(){
    console.log('do');
    if(this.ativar){
      this.ativar = false;
    }
    else{
      this.ativar = true;
    }
    
    console.log('ativar; ' + this.ativar);
  } */

  fn_btn(op) {
    if (op == 1) {
      if (this.op.op1 == true) {
        this.op.op1 = false;
      } else {
        this.op.op1 = true;
        this.op.op2 = false;
        this.op.op3 = false;
      }
    } else if (op == 2) {
      if (this.op.op2 == true) {
        this.op.op2 = false;
      } else {
        this.op.op2 = true;
        this.op.op1 = false;
        this.op.op3 =false;
      }
    } else if (op == 3) {
      if (this.op.op3 == true) {
        this.op.op3 = false;
      } else {
        this.op.op3 = true;
        this.op.op1 = false;
        this.op.op2 = false;
      }
    }
  }

  
  agendarPasseio(){
    this.router.navigate(['/add-cliente'])
  }
  teste(){

  }  
  
  async logout(){
   
    this.router.navigate(['/login']);
  }

}
