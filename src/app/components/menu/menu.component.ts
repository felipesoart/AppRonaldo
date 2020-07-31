import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }

}
