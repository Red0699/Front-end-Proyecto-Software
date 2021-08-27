
//Importación de las librerias
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

//se importa el servicio
import { ServicioSTService } from '../servicio-st.service';

//Archivos del actual componente
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {


  title = "PROYECTO DE CLIENTES";

  //Variables para los titulos de las secciones
  tituloClientes = "";
  tituloCliente = "";
  tituloClienteEditar = "";

  //variables arreglos para mostrar los registros
  Clientes: any = [];
  MiCliente: any = [];
  MiClienteE: any = [];


  filtrarCliente: FormGroup;
  InsertarGCliente: FormGroup;
  ActualizarACliente: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioSTService,
    Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

  consultaClientes() {
    //console.log("22");

    this.servi.getClientes().subscribe((data: { Cliente: [] }) => { this.Clientes = data; },
      error => { console.error(error + " ") });

    this.tituloClientes = "LISTA DE CLIENTES";

    // console.log("23");
  }

  //--------------------------------------------------------------

  public buscarClientes() {

    var filtovalor = this.filtrarCliente.getRawValue()['textfiltro'];

    this.servi.getCliente('/' + filtovalor).subscribe((data: {}) => { this.MiCliente = data; },
      error => { console.log(error) });

    this.tituloCliente = "CLIENTE SELECIONADO";
  }

  //--------------------------------------------------------------

  public InsertarCliente() {
    //console.log("31  Inserta");

    var datosvalo2 = this.InsertarGCliente.getRawValue()['textNom1Cliente'];
    var datosvalo3 = this.InsertarGCliente.getRawValue()['textNom2Cliente'];
    var datosvalo4 = this.InsertarGCliente.getRawValue()['textApe1Cliente'];
    var datosvalo5 = this.InsertarGCliente.getRawValue()['textApe2Cliente'];
    var datosvalo6 = this.InsertarGCliente.getRawValue()['textIdTipoDocCliente'];
    var datosvalo7 = this.InsertarGCliente.getRawValue()['textNoDocCliente'];

    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = {
      "nom1_cliente": datosvalo2,
      "nom2_cliente": datosvalo3,
      "ape1_cliente": datosvalo4,
      "ape2_cliente": datosvalo5,
      "id_tipodoc": datosvalo6,
      "No_doc": datosvalo7

    };

    //console.log(" 39 " + cadena);

    this.servi.insertCliente(cadena).then(res => { console.log(res) }).catch(err => { console.log(err) });
  }


  //--------------------------------------------------------------

  buscarEditarCliente() {


    var filtoEvalor = this.ActualizarACliente.getRawValue()['ActualizarIdCliente'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );

    this.servi.getCliente('/' + filtoEvalor).subscribe((data: {}) => {

      this.MiClienteE = data;

      //console.log(" 44" + this.MiClienteE[0].color)

    }, error => { console.log(error) });
    this.tituloClienteEditar = "CLIENTE A EDITAR";

  }

  //--------------------------------------------------------------

  public ActualizarCliente() {


    console.log("Actualiza Cliente")
    var textIdCliente = this.ActualizarACliente.getRawValue()['ActualizarIdCliente'];
    //console.log("  45 " + textIdCliente);
    var nuevoNom1Cliente = this.ActualizarACliente.getRawValue()['nuevoNom1Cliente'];
    //console.log("   la 46 " + nuevoCliente);
    var nuevoNom2Cliente = this.ActualizarACliente.getRawValue()['nuevoNom2Cliente'];
    //console.log("   la 46 " + nuevoCliente);
    var nuevoApe1Cliente = this.ActualizarACliente.getRawValue()['nuevoApe1Cliente'];
    //console.log("   la 46 " + nuevoCliente);
    var nuevoApe2Cliente = this.ActualizarACliente.getRawValue()['nuevoApe2Cliente'];
    //console.log("   la 46 " + nuevoCliente);
    var nuevoIdTipoDocCliente = this.ActualizarACliente.getRawValue()['nuevoIdTipoDocCliente'];
    //console.log("   la 46 " + nuevoCliente);
    var nuevoNoDocCliente = this.ActualizarACliente.getRawValue()['nuevoNoDocCliente'];
    //console.log("   la 46 " + nuevoCliente);


    var cadena = { 
      "id_cliente": textIdCliente, 
      "nom1_cliente": nuevoNom1Cliente, 
      "nom2_cliente": nuevoNom2Cliente,
      "ape1_cliente": nuevoApe1Cliente, 
      "ape2_cliente": nuevoApe2Cliente,
      "id_tipodoc": nuevoIdTipoDocCliente,
      "No_doc": nuevoNoDocCliente,
    };
    //console.log("tales 48  " + cadena.id_tip_doc + " - " + cadena.tipo_documento + " - " +  cadena.iniciales_tip_doc)

    this.servi.updateCliente(cadena).then
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

    this.filtrarCliente = this.formBuilder.group(
      {
        textfiltro: []
      });
    this.formBuilder.group

    this.InsertarGCliente = this.formBuilder.group(
      {
        textNom1Cliente: [],
        textNom2Cliente: [],
        textApe1Cliente: [],
        textApe2Cliente: [],
        textIdTipoDocCliente: [],
        textNoDocCliente: [],
      });
    this.formBuilder.group

    this.ActualizarACliente = this.formBuilder.group(
      {
        ActualizarIdCliente: [],
        nuevoNom1Cliente: [],
        nuevoNom2Cliente: [],
        nuevoApe1Cliente: [],
        nuevoApe2Cliente: [],
        nuevoIdTipoDocCliente: [],
        nuevoNoDocCliente: []

      });
    this.formBuilder.group
  }


}
