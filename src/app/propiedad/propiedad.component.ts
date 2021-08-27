//Importación de las librerias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

//se importa el servicio
import { ServicioSTService } from '../servicio-st.service';

//Archivos del actual componente
@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})

export class PropiedadComponent implements OnInit {

  title = "PROYECTO DE Propiedades";

  //Variables para los titulos de las secciones
  tituloPropiedades = "";
  tituloPropiedad = "";
  tituloPropiedadEditar = "";

  //variables arreglos para mostrar los registros
  Propiedades: any = [];
  MiPropiedad: any = [];
  MiPropiedadE: any = [];


  filtrarPropiedad: FormGroup;
  InsertarGPropiedad: FormGroup;
  ActualizarAPropiedad: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioSTService,
    Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

  consultaPropiedades() {
    //console.log("22");

    this.servi.getPropiedades().subscribe((data: { Propiedad: [] }) => { this.Propiedades = data; },
      error => { console.error(error + " ") });

    this.tituloPropiedades = "LISTA DE PROPIEDADES";

    // console.log("23");
  }

  //--------------------------------------------------------------

  public buscarPropiedades() {

    var filtovalor = this.filtrarPropiedad.getRawValue()['textfiltro'];

    this.servi.getPropiedad('/' + filtovalor).subscribe((data: {}) => { this.MiPropiedad = data; },
      error => { console.log(error) });

    this.tituloPropiedad = "PROPIEDAD SELECIONADO";
  }

  //--------------------------------------------------------------

  public InsertarPropiedad() {
    //console.log("31  Inserta");

    var datosvalo2 = this.InsertarGPropiedad.getRawValue()['textIdTipoNeg'];
    var datosvalo3 = this.InsertarGPropiedad.getRawValue()['textTitulo'];
    var datosvalo4 = this.InsertarGPropiedad.getRawValue()['textCiudad'];
    var datosvalo5 = this.InsertarGPropiedad.getRawValue()['textDireccion'];
    var datosvalo6 = this.InsertarGPropiedad.getRawValue()['textPrecio'];
    var datosvalo7 = this.InsertarGPropiedad.getRawValue()['textNoHabitaciones'];
    var datosvalo8 = this.InsertarGPropiedad.getRawValue()['textNoBanos'];
    var datosvalo9 = this.InsertarGPropiedad.getRawValue()['textDescProp'];
    var datosvalo10 = this.InsertarGPropiedad.getRawValue()['textIdTipoProp'];
    var datosvalo11 = this.InsertarGPropiedad.getRawValue()['textAreaConstruida'];

    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = {

      "id_tipoNeg": datosvalo2,
      "titulo": datosvalo3,
      "ciudad": datosvalo4,
      "direccion": datosvalo5,
      "precio": datosvalo6,
      "No_habitaciones": datosvalo7,
      "No_banos": datosvalo8,
      "desc_prop": datosvalo9,
      "id_tipoProp": datosvalo10,
      "area_construida": datosvalo11,

    };

    //console.log(" 39 " + cadena);

    this.servi.insertPropiedad(cadena).then(res => { console.log(res) }).catch(err => { console.log(err) });
  }


  //--------------------------------------------------------------

  buscarEditarPropiedad() {


    var filtoEvalor = this.ActualizarAPropiedad.getRawValue()['ActualizarIdPropiedad'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getPropiedad('/' + filtoEvalor).subscribe((data: {}) => {

      this.MiPropiedadE = data;

      //console.log(" 44" + this.MiPropiedadE[0].color)

    }, error => { console.log(error) });
    this.tituloPropiedadEditar = "PROPIEDAD A EDITAR";

  }

  //--------------------------------------------------------------

  public ActualizarPropiedad() {


    console.log("Actualiza Propiedad")
    var textIdPropiedad = this.ActualizarAPropiedad.getRawValue()['ActualizarIdPropiedad'];
    //console.log("  45 " + textIdPropiedad);
    var nuevoIdTipoNeg = this.ActualizarAPropiedad.getRawValue()['nuevoIdTipoNeg'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoTitulo = this.ActualizarAPropiedad.getRawValue()['nuevoTitulo'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoCiudad = this.ActualizarAPropiedad.getRawValue()['nuevoCiudad'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoDireccion = this.ActualizarAPropiedad.getRawValue()['nuevoDireccion'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoPrecio = this.ActualizarAPropiedad.getRawValue()['nuevoPrecio'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoNoHabitaciones = this.ActualizarAPropiedad.getRawValue()['nuevoNoHabitaciones'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoNoBanos = this.ActualizarAPropiedad.getRawValue()['nuevoNoBanos'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoDescProp = this.ActualizarAPropiedad.getRawValue()['nuevoDescProp'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoIdTipoProp = this.ActualizarAPropiedad.getRawValue()['nuevoIdTipoProp'];
    //console.log("   la 46 " + nuevoPropiedad);
    var nuevoAreaConstruida = this.ActualizarAPropiedad.getRawValue()['nuevoAreaConstruida'];
    //console.log("   la 46 " + nuevoPropiedad);



    var cadena = {
      
      "id_propiedad": textIdPropiedad,
      "id_tipoNeg" : nuevoIdTipoNeg,
      "titulo": nuevoTitulo,
      "ciudad": nuevoCiudad,
      "direccion": nuevoDireccion,
      "precio": nuevoPrecio,
      "No_habitaciones": nuevoNoHabitaciones,
      "No_banos": nuevoNoBanos,
      "desc_prop": nuevoDescProp,
      "id_tipoProp": nuevoIdTipoProp,
      "area_construida": nuevoAreaConstruida

    };
    //console.log("tales 48  " + cadena.id_tip_doc + " - " + cadena.tipo_documento + " - " +  cadena.iniciales_tip_doc)

    this.servi.updatePropiedad(cadena).then
      (
        res => {
          console.log("res", res)
        }
      ).catch(err => {
        console.log(err)
      })
  }





  //=============================================================
  //LAS FUNCIONES PARA LLAMARLAS DESDE EL HTML
  //=============================================================  
  ngOnInit() {

    this.filtrarPropiedad = this.formBuilder.group(
      {
        textfiltro: []
      });
    this.formBuilder.group

    this.InsertarGPropiedad = this.formBuilder.group(
      {
        textIdTipoNeg: [],
        textTitulo: [],
        textCiudad: [],
        textDireccion: [],
        textPrecio: [],
        textNoHabitaciones: [],
        textNoBanos: [],
        textDescProp: [],
        textIdTipoProp: [],
        textAreaConstruida: []
      });
    this.formBuilder.group

    this.ActualizarAPropiedad = this.formBuilder.group(
      {
        ActualizarIdPropiedad: [],
        nuevoIdTipoNeg: [],
        nuevoTitulo: [],
        nuevoCiudad: [],
        nuevoDireccion: [],
        nuevoPrecio: [],
        nuevoNoHabitaciones: [],
        nuevoNoBanos: [],
        nuevoDescProp: [],
        nuevoIdTipoProp: [],
        nuevoAreaConstruida: []

      });
    this.formBuilder.group
  }


}
