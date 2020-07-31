import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

import { IonInfiniteScroll, MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes : any = [];
  limit : number = 15;
  start: number = 0;
  nome: string = "";

/*   componentes: Observable<Componente[]>; */

  constructor(private menu: MenuController, private router: Router, private provider: PostProvider, private dataService: DataService ) {

   }


ionViewCanEnter(){
  this.clientes = [];
  this.start= 0;
  this.carregar();
}

//Refresh
doRefresh(event) {
  
  setTimeout(() => {
    this.ionViewCanEnter();
    event.target.complete();
  }, 500);
}

  //barra de rolagem (verificar depois esse erro no php carregar)
loadData(event) {
    
    this.start += this.limit;

  setTimeout(() => {
      this.carregar().then(() => {
        event.target.complete();
        
      });

  }, 500);
}


ngOnInit() {
  /* this.carregar(); */
  /* this.componentes = this.dataService.getMenu(); */
  
 }
 toggleMenu(){
  this.menu.toggle();
 }

addCliente(){
    this.router.navigate(['/add-cliente'])
  }
editar(id, nome, telefone, email, datapasseio, horario, pontoembarque, destino, qntpassageiros, valor, descricao){
    this.router.navigate(['/add-cliente/' + id + '/' + nome + '/' + telefone + '/' + email + '/' + datapasseio + '/' + horario + '/' + pontoembarque + '/' + destino + '/' + qntpassageiros + '/' + valor + '/' + descricao]);
  }

mostrar(id, nome, telefone, email, datapasseio, horario, pontoembarque, destino, qntpassageiros, valor, descricao){

    this.router.navigate(['/mostrar-cliente/' + id + '/' + nome + '/' + telefone + '/' + email + '/' + datapasseio + '/' + horario + '/' + pontoembarque + '/' + destino + '/' + qntpassageiros + '/' + valor + '/' + descricao]);
  }

carregar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'getdata',
        limit : this.limit,
        start : this.start
        
     
      };
      this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
        for(let cliente of data['result']){
          this.clientes.push(cliente);
          err => console.log(err)
        }
        resolve(true);
      });

    });

  }

excluir(id){
  let dados = {
    requisicao : 'excluir',
    id : id
  };

  this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
    this.ionViewCanEnter();
     
    });
  } 

 buscar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'buscar',
        nome : this.nome,
        
        
     
      };
      this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
        this.clientes = [];
        for(let cliente of data['result']){
          this.clientes.push(cliente);
          err => console.log(err)
        }
        resolve(true);
      });

    });

  }



}
