
//Importación de las librerias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

//se importa el servicio
import { ServicioSTService } from '../servicio-st.service';

//Archivos del actual componente
@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})

export class VendedorComponent implements OnInit {

  title = "PROYECTO DE VENDEDORES";

  //Variables para los titulos de las secciones
  tituloVendedores = "";
  tituloVendedor = "";
  tituloVendedorEditar = "";

  //variables arreglos para mostrar los registros
  Vendedores: any = [];
  MiVendedor: any = [];
  MiVendedorE: any = [];


  filtrarVendedor: FormGroup;
  InsertarGVendedor: FormGroup;
  ActualizarAVendedor: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioSTService,
    Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

  consultaVendedores() {
    //console.log("22");

    this.servi.getVendedores().subscribe((data: { Vendedor: [] }) => { this.Vendedores = data; },
      error => { console.error(error + " ") });

    this.tituloVendedores = "LISTA DE VENDEDORES";

    // console.log("23");
  }

  //--------------------------------------------------------------

  public buscarVendedores() {

    var filtovalor = this.filtrarVendedor.getRawValue()['textfiltro'];

    this.servi.getVendedor('/' + filtovalor).subscribe((data: {}) => { this.MiVendedor = data; },
      error => { console.log(error) });

    this.tituloVendedor = "VENDEDOR SELECIONADO";
  }

  //--------------------------------------------------------------

  public InsertarVendedor() {
    //console.log("31  Inserta");

    var datosvalo2 = this.InsertarGVendedor.getRawValue()['textNom1Vendedor'];
    var datosvalo3 = this.InsertarGVendedor.getRawValue()['textNom2Vendedor'];
    var datosvalo4 = this.InsertarGVendedor.getRawValue()['textApe1Vendedor'];
    var datosvalo5 = this.InsertarGVendedor.getRawValue()['textApe2Vendedor'];
    var datosvalo6 = this.InsertarGVendedor.getRawValue()['textDescVendedor'];

    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = {
      "nom1_vendedor": datosvalo2,
      "nom2_vendedor": datosvalo3,
      "ape1_vendedor": datosvalo4,
      "ape2_vendedor": datosvalo5,
      "desc_vendedor": datosvalo6

    };

    //console.log(" 39 " + cadena);

    this.servi.insertVendedor(cadena).then(res => { console.log(res) }).catch(err => { console.log(err) });
  }


  //--------------------------------------------------------------

  buscarEditarVendedor() {


    var filtoEvalor = this.ActualizarAVendedor.getRawValue()['ActualizarIdVendedor'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getVendedor('/' + filtoEvalor).subscribe((data: {}) => {

      this.MiVendedorE = data;

      //console.log(" 44" + this.MiVendedorE[0].color)

    }, error => { console.log(error) });
    this.tituloVendedorEditar = "VENDEDOR A EDITAR";

  }

  //--------------------------------------------------------------

  public ActualizarVendedor() {


    console.log("Actualiza Vendedor")
    var textIdVendedor = this.ActualizarAVendedor.getRawValue()['ActualizarIdVendedor'];
    //console.log("  45 " + textIdVendedor);
    var nuevoNom1Vendedor = this.ActualizarAVendedor.getRawValue()['nuevoNom1Vendedor'];
    //console.log("   la 46 " + nuevoVendedor);
    var nuevoNom2Vendedor = this.ActualizarAVendedor.getRawValue()['nuevoNom2Vendedor'];
    //console.log("   la 46 " + nuevoVendedor);
    var nuevoApe1Vendedor = this.ActualizarAVendedor.getRawValue()['nuevoApe1Vendedor'];
    //console.log("   la 46 " + nuevoVendedor);
    var nuevoApe2Vendedor = this.ActualizarAVendedor.getRawValue()['nuevoApe2Vendedor'];
    //console.log("   la 46 " + nuevoVendedor);
    var nuevoDescVendedor = this.ActualizarAVendedor.getRawValue()['nuevoDescVendedor'];
    //console.log("   la 46 " + nuevoVendedor);
  


    var cadena = { 
      "id_vendedor": textIdVendedor, 
      "nom1_vendedor": nuevoNom1Vendedor, 
      "nom2_vendedor": nuevoNom2Vendedor,
      "ape1_vendedor": nuevoApe1Vendedor, 
      "ape2_vendedor": nuevoApe2Vendedor,
      "desc_vendedor": nuevoDescVendedor,
    };
    //console.log("tales 48  " + cadena.id_tip_doc + " - " + cadena.tipo_documento + " - " +  cadena.iniciales_tip_doc)

    this.servi.updateVendedor(cadena).then
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

    this.filtrarVendedor = this.formBuilder.group(
      {
        textfiltro: []
      });
    this.formBuilder.group

    this.InsertarGVendedor = this.formBuilder.group(
      {
        textNom1Vendedor: [],
        textNom2Vendedor: [],
        textApe1Vendedor: [],
        textApe2Vendedor: [],
        textDescVendedor: []
      });
    this.formBuilder.group

    this.ActualizarAVendedor = this.formBuilder.group(
      {
        ActualizarIdVendedor: [],
        nuevoNom1Vendedor: [],
        nuevoNom2Vendedor: [],
        nuevoApe1Vendedor: [],
        nuevoApe2Vendedor: [],
        nuevoDescVendedor: []

      });
    this.formBuilder.group
  }


}
