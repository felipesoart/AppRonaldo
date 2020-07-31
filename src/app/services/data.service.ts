import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/compiler/src/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get<Componente[]>('assets/data/menu.json');
  }
  
}
