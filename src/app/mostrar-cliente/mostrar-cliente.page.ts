import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { ToastController } from '@ionic/angular';
import { logging } from 'protractor';




@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.page.html',
  styleUrls: ['./mostrar-cliente.page.scss'],
})
export class MostrarClientePage implements OnInit {

  nome: string = "";
  telefone: string = "";
  email: string = "";
  datapasseio: string = "";
  horario : string = "";
  pontoembarque: string = "";
  destino: String = "";
  qntpassageiros: number;
  valor : number;
  descricao: String = "";
  id: number;

  constructor(
    
    private router: Router,
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRoute: ActivatedRoute 
    ) { }

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

}
