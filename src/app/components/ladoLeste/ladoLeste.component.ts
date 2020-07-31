import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-ladoLeste',
  templateUrl: './ladoLeste.component.html',
  styleUrls: ['./ladoLeste.component.scss'],
})
export class LadoLesteComponent implements OnInit {

  closeResult: string;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private provider: PostProvider,
    public toastController: ToastController,
    private actRoute: ActivatedRoute,
    private dataService: DataService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    
  }
  agendarPasseio(){
    this.router.navigate(['/add-cliente'])
  }

  open(content) {
    this.modalService.open(content).result.then(
        (result) => {
            this.closeResult = `Closed with: ${result}`;            
        },
        (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
    );
   
}

btFechar(){
  this.modalService.dismissAll();
  /* console.log(this.extratoFinanLancamentos); */
}

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
}

}
