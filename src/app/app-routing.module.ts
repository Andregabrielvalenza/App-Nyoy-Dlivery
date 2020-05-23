import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'sing-up',
    loadChildren: () => import('./sing-up/sing-up.module').then( m => m.SingUpPageModule)
  },
  {
    path: 'escoger-local',
    loadChildren: () => import('./escoger-local/escoger-local.module').then( m => m.EscogerLocalPageModule)
  },
  {
    path: 'escoger-menu',
    loadChildren: () => import('./escoger-menu/escoger-menu.module').then( m => m.EscogerMenuPageModule)
  },
  {
    path: 'descripcion-plato',
    loadChildren: () => import('./descripcion-plato/descripcion-plato.module').then( m => m.DescripcionPlatoPageModule)
  },
  {
    path: 'resumen-pedido',
    loadChildren: () => import('./resumen-pedido/resumen-pedido.module').then( m => m.ResumenPedidoPageModule)
  },
  {
    path: 'datos-envio',
    loadChildren: () => import('./datos-envio/datos-envio.module').then( m => m.DatosEnvioPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'operecion-exitosa',
    loadChildren: () => import('./operecion-exitosa/operecion-exitosa.module').then( m => m.OperecionExitosaPageModule)
  },
  {
    path: 'datos-recojo',
    loadChildren: () => import('./datos-recojo/datos-recojo.module').then( m => m.DatosRecojoPageModule)
  },
  {
    path: 'galeria-productos',
    loadChildren: () => import('./galeria-productos/galeria-productos.module').then( m => m.GaleriaProductosPageModule)
  },
  {
    path: 'escoge-donas',
    loadChildren: () => import('./escoge-donas/escoge-donas.module').then( m => m.EscogeDonasPageModule)
  },
  {
    path: 'carrito-mercado',
    loadChildren: () => import('./carrito-mercado/carrito-mercado.module').then( m => m.CarritoMercadoPageModule)
  },
  {
    path: 'mis-favoritos',
    loadChildren: () => import('./mis-favoritos/mis-favoritos.module').then( m => m.MisFavoritosPageModule)
  },
  {
    path: 'historial-de-pedido',
    loadChildren: () => import('./historial-de-pedido/historial-de-pedido.module').then( m => m.HistorialDePedidoPageModule)
  },
  {
    path: 'preferencia',
    loadChildren: () => import('./preferencia/preferencia.module').then( m => m.PreferenciaPageModule)
  },
  {
    path: 'especial-dia',
    loadChildren: () => import('./especial-dia/especial-dia.module').then( m => m.EspecialDiaPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
