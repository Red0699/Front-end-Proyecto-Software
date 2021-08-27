
//Importación de las librerias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

//se importa el servicio
import { ServicioSTService } from '../servicio-st.service';

//Archivos del actual componente
@Component({
  selector: 'app-tipdoc',
  templateUrl: './tipdoc.component.html',
  styleUrls: ['./tipdoc.component.css']
})

export class TipdocComponent implements OnInit {



  title = "PROYECTO DE TIPOS DE DOCUMENTOS";

  //Variables para los titulos de las secciones
  tituloTipDocs = "";
  titloTipDoc = "";
  titloTipDocEditar = "";

  //variables arreglos para mostrar los registros
  TipDocs: any = [];
  MiTipDoc: any = [];
  MiTipDocE: any = [];


  filtrarTipDoc: FormGroup;
  InsertarGTipDoc: FormGroup;
  ActualizarATipDoc: FormGroup;



  constructor(
      private formBuilder: FormBuilder,
      private servi: ServicioSTService,
      Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

   consultaTipDocs() {
    //console.log("22");
    
    this.servi.getTipDocs().subscribe((data: {tipdoc: []}) => {this.TipDocs = data;},
                   error => {console.error(error + " ")});

    this.tituloTipDocs = "LISTA DE TIPOS DE DOCUMENTOS"; 
    
   // console.log("23");
  }

  //--------------------------------------------------------------

  public buscarTipDocs() {

    var filtovalor = this.filtrarTipDoc.getRawValue()['textfiltro'];
    
    this.servi.getTipDoc('/' + filtovalor).subscribe((data: {}) => {this.MiTipDoc = data;},
                              error => {console.log(error)});

    this.titloTipDoc = "TIPO DE DOCUMENTO SELECIONADO";
  }

  //--------------------------------------------------------------

  public InsertarTipDoc() {
    //console.log("31  Inserta");

    var datosvalo2 = this.InsertarGTipDoc.getRawValue()['textTipDoc'];
    var datosvalo3 = this.InsertarGTipDoc.getRawValue()['textiniTipDoc'];
    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = {"desc_tipodoc":datosvalo2,"iniciales_tipdoc":datosvalo3};
    
    //console.log(" 39 " + cadena);

    this.servi.insertTipDoc(cadena).then(res => {console.log(res)}).catch(err => 
      {console.log(err)});
  }


  //--------------------------------------------------------------

  buscarEditarTipDoc() {
    

    var filtoEvalor = this.ActualizarATipDoc.getRawValue()['ActualizarIdipDoc'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getTipDoc('/' + filtoEvalor).subscribe((data: {}) => {

      this.MiTipDocE = data;

      //console.log(" 44" + this.MiTipDocE[0].color)

    }, error => { console.log(error) });
    this.titloTipDocEditar = "TIPO DOCUMENDO A EDITAR";

  }
  
  //--------------------------------------------------------------

  public ActualizarTipDoc() {


    console.log("Actualiza tipdoc asdsadasdsa")
    var textIdTipDoc = this.ActualizarATipDoc.getRawValue()['ActualizarIdipDoc'];
    //console.log("  45 " + textIdTipDoc);
    var nuevoTipDoc = this.ActualizarATipDoc.getRawValue()['nuevoTipDoc'];
    //console.log("   la 46 " + nuevoTipDoc);
    var nuevoIniTipDoc = this.ActualizarATipDoc.getRawValue()['nuevoIniTipDoc'];
    //console.log("   la 47 " + nuevoIniTipDoc);

    var cadena = { "id_tipodoc": textIdTipDoc,"desc_tipodoc":nuevoTipDoc, "iniciales_tipdoc" : nuevoIniTipDoc};
    //console.log("tales 48  " + cadena.id_tipodoc + " - " + cadena.desc_tipodoc + " - " +  cadena.iniciales_tipdoc)

    this.servi.updateTipDoc(cadena).then
      (
        res => {
          console.log("res",res)
        }
      ).catch(err => {
        console.log(err)
      })
  } 




 
  //=============================================================
  //LAS FUNCIONES PARA LLAMARLAS DESDE EL HTML
  //=============================================================  
  ngOnInit() {

    this.filtrarTipDoc = this.formBuilder.group(
    {
      textfiltro: []
    }); 
    this.formBuilder.group

    this.InsertarGTipDoc = this.formBuilder.group(
    {
      textTipDoc: [],
      textiniTipDoc: []
    });
    this.formBuilder.group

    this.ActualizarATipDoc = this.formBuilder.group(
    {
      ActualizarIdipDoc: [], 
      nuevoTipDoc: [], 
      nuevoIniTipDoc: [], 
 
    });
    this.formBuilder.group
  }


}