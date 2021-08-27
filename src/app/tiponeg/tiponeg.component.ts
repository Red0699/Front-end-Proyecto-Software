//Importación de las librerias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

//se importa el servicio
import { ServicioSTService } from '../servicio-st.service';

//Archivos del actual componente
@Component({
  selector: 'app-tiponeg',
  templateUrl: './tiponeg.component.html',
  styleUrls: ['./tiponeg.component.css']
})

export class TiponegComponent implements OnInit {

  title = "PROYECTO DE TIPOS DE NEGOCIO";

  //Variables para los titulos de las secciones
  tituloTipoNegs = "";
  tituloTipoNeg = "";
  tituloTipoNegEditar = "";

  //variables arreglos para mostrar los registros
  TipoNegs: any = [];
  MiTipoNeg: any = [];
  MiTipoNegE: any = [];


  filtrarTipoNeg: FormGroup;
  InsertarGTipoNeg: FormGroup;
  ActualizarATipoNeg: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioSTService,
    Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

  consultaTipoNegs() {
    //console.log("22");

    this.servi.getTipoNegs().subscribe((data: { TipoNeg: [] }) => { this.TipoNegs = data; },
      error => { console.error(error + " ") });

    this.tituloTipoNegs = "LISTA DE TIPOS DE NEGOCIO";

    // console.log("23");
  }

  //--------------------------------------------------------------

  public buscarTipoNegs() {

    var filtovalor = this.filtrarTipoNeg.getRawValue()['textfiltro'];

    this.servi.getTipoNeg('/' + filtovalor).subscribe((data: {}) => { this.MiTipoNeg = data; },
      error => { console.log(error) });

    this.tituloTipoNeg = "TIPO DE NEGOCIO SELECIONADO";
  }

  //--------------------------------------------------------------

  public InsertarTipoNeg() {
    //console.log("31  Inserta");

    var datosvalo2 = this.InsertarGTipoNeg.getRawValue()['textDescNeg'];
    
    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = {

      "desc_Neg": datosvalo2

    };

    //console.log(" 39 " + cadena);

    this.servi.insertTipoNeg(cadena).then(res => { console.log(res) }).catch(err => { console.log(err) });
  }


  //--------------------------------------------------------------

  buscarEditarTipoNeg() {


    var filtoEvalor = this.ActualizarATipoNeg.getRawValue()['ActualizarIdTipoNeg'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getTipoNeg('/' + filtoEvalor).subscribe((data: {}) => {

      this.MiTipoNegE = data;

      //console.log(" 44" + this.MiTipoNegE[0].color)

    }, error => { console.log(error) });
    this.tituloTipoNegEditar = "TIPO DE NEGOCIO A EDITAR";

  }

  //--------------------------------------------------------------

  public ActualizarTipoNeg() {


    console.log("Actualiza TipoNeg")
    var textIdTipoNeg = this.ActualizarATipoNeg.getRawValue()['ActualizarIdTipoNeg'];
    //console.log("  45 " + textIdTipoNeg);
    var nuevoDescNeg = this.ActualizarATipoNeg.getRawValue()['nuevoDescNeg'];
    //console.log("   la 46 " + nuevoTipoNeg);



    var cadena = {

      "id_tipoNeg": textIdTipoNeg,
      "desc_Neg": nuevoDescNeg

    };
    //console.log("tales 48  " + cadena.id_tip_doc + " - " + cadena.tipo_documento + " - " +  cadena.iniciales_tip_doc)

    this.servi.updateTipoNeg(cadena).then
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

    this.filtrarTipoNeg = this.formBuilder.group(
      {
        textfiltro: []
      });
    this.formBuilder.group

    this.InsertarGTipoNeg = this.formBuilder.group(
      {
        textDescNeg: []
        
      });
    this.formBuilder.group

    this.ActualizarATipoNeg = this.formBuilder.group(
      {
        ActualizarIdTipoNeg: [],
        nuevoDescNeg: []

      });
    this.formBuilder.group
  }

}
