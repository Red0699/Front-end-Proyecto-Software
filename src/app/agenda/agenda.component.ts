//Importación de las librerias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

//se importa el servicio
import { ServicioSTService } from '../servicio-st.service';

//Archivos del actual componente
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {

  title = "PROYECTO DE AGENDAS";

  //Variables para los titulos de las secciones
  tituloAgendas = "";
  tituloAgenda = "";
  tituloAgendaEditar = "";
  tituloInformeProp = "";
  tituloInformeVend = "";

  //variables arreglos para mostrar los registros
  Agendas: any = [];
  MiAgenda: any = [];
  MiAgendaE: any = [];
  InformeProp: any = [];
  InformeVend: any = [];


  filtrarAgenda: FormGroup;
  InsertarGAgenda: FormGroup;
  ActualizarAAgenda: FormGroup;
  InformePropG: FormGroup;
  InformeVendG: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioSTService,
    Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

  consultaAgendas() {
    //console.log("22");

    this.servi.getAgendas().subscribe((data: { Agenda: [] }) => { this.Agendas = data; },
      error => { console.error(error + " ") });

    this.tituloAgendas = "LISTA DE AGENDAS";

    // console.log("23");
  }

  //--------------------------------------------------------------

  public buscarAgendas() {

    var filtovalor = this.filtrarAgenda.getRawValue()['textfiltro'];

    this.servi.getAgenda('/' + filtovalor).subscribe((data: {}) => { this.MiAgenda = data; },
      error => { console.log(error) });

    this.tituloAgenda = "AGENDA SELECIONADO";
  }

  //--------------------------------------------------------------

  public InsertarAgenda() {
    //console.log("31  Inserta");

    var datosvalo2 = this.InsertarGAgenda.getRawValue()['textIdCliente'];
    var datosvalo3 = this.InsertarGAgenda.getRawValue()['textIdVendedor'];
    var datosvalo4 = this.InsertarGAgenda.getRawValue()['textComentarios'];
    var datosvalo5 = this.InsertarGAgenda.getRawValue()['textFechaHora'];
    var datosvalo6 = this.InsertarGAgenda.getRawValue()['textIdPropiedad'];
    
    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = {

      "id_cliente": datosvalo2,
      "id_vendedor": datosvalo3,
      "comentarios": datosvalo4,
      "fecha_hora": datosvalo5,
      "id_propiedad": datosvalo6

    };

    //console.log(" 39 " + cadena);

    this.servi.insertAgenda(cadena).then(res => { console.log(res) }).catch(err => { console.log(err) });
  }


  //--------------------------------------------------------------

  buscarEditarAgenda() {


    var filtoEvalor = this.ActualizarAAgenda.getRawValue()['ActualizarIdAgenda'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getAgenda('/' + filtoEvalor).subscribe((data: {}) => {

      this.MiAgendaE = data;

      //console.log(" 44" + this.MiAgendaE[0].color)

    }, error => { console.log(error) });
    this.tituloAgendaEditar = "AGENDA A EDITAR";

  }

  //--------------------------------------------------------------

  public ActualizarAgenda() {


    console.log("Actualiza Agenda")
    var textIdAgenda = this.ActualizarAAgenda.getRawValue()['ActualizarIdAgenda'];
    //console.log("  45 " + textIdAgenda);
    var nuevoIdCliente = this.ActualizarAAgenda.getRawValue()['nuevoIdCliente'];
    //console.log("   la 46 " + nuevoAgenda);
    var nuevoIdVendedor = this.ActualizarAAgenda.getRawValue()['nuevoIdVendedor'];
    //console.log("   la 46 " + nuevoAgenda);
    var nuevoComentarios = this.ActualizarAAgenda.getRawValue()['nuevoComentarios'];
    //console.log("   la 46 " + nuevoAgenda);
    var nuevoFechaHora = this.ActualizarAAgenda.getRawValue()['nuevoFechaHora'];
    //console.log("   la 46 " + nuevoAgenda);
    var nuevoIdPropiedad = this.ActualizarAAgenda.getRawValue()['nuevoIdPropiedad'];
    //console.log("   la 46 " + nuevoAgenda);



    var cadena = {

      "id_agenda": textIdAgenda,
      "id_cliente": nuevoIdCliente,
      "id_vendedor": nuevoIdVendedor,
      "comentarios": nuevoComentarios,
      "fecha_hora": nuevoFechaHora,
      "id_propiedad": nuevoIdPropiedad

    };
    //console.log("tales 48  " + cadena.id_tip_doc + " - " + cadena.tipo_documento + " - " +  cadena.iniciales_tip_doc)

    this.servi.updateAgenda(cadena).then
      (
        res => {
          console.log("res", res)
        }
      ).catch(err => {
        console.log(err)
      })
  }


  //--------------------------------------------------------------

  informePropiedad() {


    var filtroVenID = this.InformePropG.getRawValue()['textIdInfoProp'];
    var filtroVenFI = this.InformePropG.getRawValue()['textFiInfoProp'];
    var filtroFF = this.InformePropG.getRawValue()['textFfInfoProp'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getInformeProp(filtroVenID, filtroVenFI,filtroFF).subscribe((data: {}) => {

      this.InformeProp = data;

      //console.log(" 44" + this.MiAgendaE[0].color)

    }, error => { console.log(error) });
    this.tituloInformeProp = "INFORME POR PROPIEDAD Y PERIODO DE TIEMPO";

  }

  //--------------------------------------------------------------

  informeVendedor() {


    var filtroVenID = this.InformeVendG.getRawValue()['textIdInfoVend'];
    var filtroVenFI = this.InformeVendG.getRawValue()['textFiInfoVend'];
    var filtroVenFF = this.InformeVendG.getRawValue()['textFfInfoVend'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getInformeVend(filtroVenID, filtroVenFI,filtroVenFF).subscribe((data: {}) => {

      this.InformeVend = data;

      //console.log(" 44" + this.MiAgendaE[0].color)

    }, error => { console.log(error) });
    this.tituloInformeVend = "INFORME POR VENDEDOR Y PERIODO DE TIEMPO";

  }



  //=============================================================
  //LAS FUNCIONES PARA LLAMARLAS DESDE EL HTML
  //=============================================================  
  ngOnInit() {

    this.filtrarAgenda = this.formBuilder.group(
      {
        textfiltro: []
      });
    this.formBuilder.group

    this.InsertarGAgenda = this.formBuilder.group(
      {
        textIdCliente: [],
        textIdVendedor: [],
        textComentarios: [],
        textFechaHora: [],
        textIdPropiedad: []
        
      });
    this.formBuilder.group

    this.ActualizarAAgenda = this.formBuilder.group(
      {
        ActualizarIdAgenda: [],
        nuevoIdCliente: [],
        nuevoIdVendedor: [],
        nuevoComentarios: [],
        nuevoFechaHora: [],
        nuevoIdPropiedad: []

      });
    this.formBuilder.group

    this.InformePropG = this.formBuilder.group(
      {
        textIdInfoProp: [],
        textFiInfoProp: [],
        textFfInfoProp: []

      });
    this.formBuilder.group

    this.InformeVendG = this.formBuilder.group(
      {
        textIdInfoVend: [],
        textFiInfoVend: [],
        textFfInfoVend: []

      });
    this.formBuilder.group

  }

}

