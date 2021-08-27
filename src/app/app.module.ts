import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpModule, } from '@angular/http';
import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { AppComponent } from './appcomponent/app.component';
import { MenuinicioComponent } from './menuinicio/menuinicio.component';
import { TipdocComponent } from './tipdoc/tipdoc.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { AgendaComponent } from './agenda/agenda.component';
import { TipopropComponent } from './tipoprop/tipoprop.component';
import { TiponegComponent } from './tiponeg/tiponeg.component';

import { ServicioSTService } from './servicio-st.service';

const appRoutes: Routes = 
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Inicio',
  },
  {
    path: 'Inicio',
    component:MenuinicioComponent,
  },
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// se incluye esto y la coma despues del corchete anterior
  {
    path: 'Tipdoc',
    component: TipdocComponent,
       
  },

  {
    path: 'cliente',
    component: ClienteComponent,   
  },
  
  {
    path: 'vendedor',
    component: VendedorComponent,   
  },

  {
    path: 'propiedad',
    component: PropiedadComponent,   
  },

  {
    path: 'agenda',
    component: AgendaComponent,   
  },

  {
    path: 'tipoprop',
    component: TipopropComponent,   
  },

  {
    path: 'tiponeg',
    component: TiponegComponent,   
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MenuinicioComponent,
    TipdocComponent,
    ClienteComponent,
    VendedorComponent,
    PropiedadComponent,
    AgendaComponent,
    TipopropComponent,
    TiponegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), // se agregan estos 
    BrowserModule,
    HttpClientModule  // <- Agregar la clase
  ],
  providers: [ServicioSTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
