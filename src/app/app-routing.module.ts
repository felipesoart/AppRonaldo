import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 

  },

  { path: 'home', 
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},

  {
    path: 'add-cliente',
    loadChildren: () => import('./add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'mostrar-cliente',
    loadChildren: () => import('./mostrar-cliente/mostrar-cliente.module').then( m => m.MostrarClientePageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {path: 'add-cliente', loadChildren: () => import('./add-cliente/add-cliente.module').then(m => m.AddClientePageModule) },
  {path: 'mostrar-cliente', loadChildren: () => import('./mostrar-cliente/mostrar-cliente.module').then(m => m.MostrarClientePageModule) },
  {path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesPageModule) },
  
  {path: 'add-cliente/:id/:nome/:telefone/:email/:datapasseio/:horario/:pontoembarque/:destino/:qntpassageiros/:valor/:descricao', 
  loadChildren: () => import('./add-cliente/add-cliente.module').then(m => m.AddClientePageModule) },

  {path: 'mostrar-cliente/:id/:nome/:telefone/:email/:datapasseio/:horario/:pontoembarque/:destino/:qntpassageiros/:valor/:descricao', 
  loadChildren: () => import('./mostrar-cliente/mostrar-cliente.module').then(m => m.MostrarClientePageModule) },

  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
