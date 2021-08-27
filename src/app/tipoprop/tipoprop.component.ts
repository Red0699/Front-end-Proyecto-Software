//Importación de las librerias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

//se importa el servicio
import { ServicioSTService } from '../servicio-st.service';

//Archivos del actual componente
@Component({
  selector: 'app-tipoprop',
  templateUrl: './tipoprop.component.html',
  styleUrls: ['./tipoprop.component.css']
})

export class TipopropComponent implements OnInit {

  title = "PROYECTO DE TIPOS DE PROPIEDAD";

  //Variables para los titulos de las secciones
  tituloTipoProps = "";
  tituloTipoProp = "";
  tituloTipoPropEditar = "";

  //variables arreglos para mostrar los registros
  TipoProps: any = [];
  MiTipoProp: any = [];
  MiTipoPropE: any = [];


  filtrarTipoProp: FormGroup;
  InsertarGTipoProp: FormGroup;
  ActualizarATipoProp: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioSTService,
    Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

  consultaTipoProps() {
    //console.log("22");

    this.servi.getTipoProps().subscribe((data: { TipoProp: [] }) => { this.TipoProps = data; },
      error => { console.error(error + " ") });

    this.tituloTipoProps = "LISTA DE TIPOS DE PROPIEDAD";

    // console.log("23");
  }

  //--------------------------------------------------------------

  public buscarTipoProps() {

    var filtovalor = this.filtrarTipoProp.getRawValue()['textfiltro'];

    this.servi.getTipoProp('/' + filtovalor).subscribe((data: {}) => { this.MiTipoProp = data; },
      error => { console.log(error) });

    this.tituloTipoProp = "TipoProp SELECIONADO";
  }

  //--------------------------------------------------------------

  public InsertarTipoProp() {
    //console.log("31  Inserta");

    var datosvalo2 = this.InsertarGTipoProp.getRawValue()['textDescTipoProp'];
    
    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = {

      "desc_tipoProp": datosvalo2

    };

    //console.log(" 39 " + cadena);

    this.servi.insertTipoProp(cadena).then(res => { console.log(res) }).catch(err => { console.log(err) });
  }


  //--------------------------------------------------------------

  buscarEditarTipoProp() {


    var filtoEvalor = this.ActualizarATipoProp.getRawValue()['ActualizarIdTipoProp'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getTipoProp('/' + filtoEvalor).subscribe((data: {}) => {

      this.MiTipoPropE = data;

      //console.log(" 44" + this.MiTipoPropE[0].color)

    }, error => { console.log(error) });
    this.tituloTipoPropEditar = "TIPO DE PROPIEDAD A EDITAR";

  }

  //--------------------------------------------------------------

  public ActualizarTipoProp() {


    console.log("Actualiza TipoProp")
    var textIdTipoProp = this.ActualizarATipoProp.getRawValue()['ActualizarIdTipoProp'];
    //console.log("  45 " + textIdTipoProp);
    var nuevoDescTipoProp = this.ActualizarATipoProp.getRawValue()['nuevoDescTipoProp'];
    //console.log("   la 46 " + nuevoTipoProp);



    var cadena = {

      "id_tipoProp": textIdTipoProp,
      "desc_tipoProp": nuevoDescTipoProp

    };
    //console.log("tales 48  " + cadena.id_tip_doc + " - " + cadena.tipo_documento + " - " +  cadena.iniciales_tip_doc)

    this.servi.updateTipoProp(cadena).then
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

    this.filtrarTipoProp = this.formBuilder.group(
      {
        textfiltro: []
      });
    this.formBuilder.group

    this.InsertarGTipoProp = this.formBuilder.group(
      {
        textDescTipoProp: []
        
      });
    this.formBuilder.group

    this.ActualizarATipoProp = this.formBuilder.group(
      {
        ActualizarIdTipoProp: [],
        nuevoDescTipoProp: []

      });
    this.formBuilder.group
  }

}
