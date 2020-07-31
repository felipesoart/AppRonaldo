import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';
import { promise } from 'protractor';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  /* colocar as variaveis para atribuir os valores */

  nome: string = "";
  telefone: string = "";
  email: string = "";
  datapasseio: string = "";
  horario: string = "";
  pontoembarque: string = "";
  destino: string = "";
  qntpassageiros: number;
  valor: number;
  descricao: string = "";
  id: number;

  constructor(
    private router: Router,
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRoute: ActivatedRoute 
    ) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Dados Salvos',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }


  ngOnInit() {
    this.actRoute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.email = data.email;
      this.datapasseio = data.datapasseio;
      this.horario = data.horario;
      this.pontoembarque = data.pontoembarque;
      this.destino = data.destino;
      this.qntpassageiros = data.qntpassageiros;
      this.valor = data.valor;
      this.descricao = data.descricao;
      console.log(data);

    });
  }

  Cliente() {
    this.router.navigate(['/clientes'])
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'add',
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        datapasseio: this.datapasseio,
        horario: this.horario,
        pontoembarque: this.pontoembarque,
        destino: this.destino,
        qntpassageiros: this.qntpassageiros,
        valor: this.valor,
        descricao: this.descricao
      };
      this.provider.inserirApi(dados, 'inserirCliente.php')
      .subscribe(data => { 
        this.router.navigate(['/home']);
        this.presentToast();
        
      });

    });
  }

  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar',
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        datapasseio: this.datapasseio,
        horario: this.horario,
        pontoembarque: this.pontoembarque,
        destino: this.destino,
        qntpassageiros: this.qntpassageiros,
        valor: this.valor,
        descricao: this.descricao,
        id: this.id
      };
      this.provider.inserirApi(dados, 'inserirCliente.php')
      .subscribe(data => { 

        this.router.navigate(['/clientes']);
        this.presentToast();
        
      });
    });  
  }
}
