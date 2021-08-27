//Librerias a importar
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


//para el manejo y estilo de los Json
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {
    providedIn: 'root'
  })

//exporta el servicio 
export class ServicioSTService {

  //dirección del servicio en el Back-End BE
  private Url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  //Método para extraer los datos del servicio BE
  private extractData(res: Response) {
    //console.log("12", res);

    let body = res;

    //console.log("13")
    return body || {};
    ;
  }


  //manejador de los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)

    };
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // TODOS LOS CRUL DE TODAS LAS CLASES DEL PROYECTO 
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //=============================================================
  // SERVICIO CRUL DE TIPOS DE DOCUMENTO
  //=============================================================

  // Método Listar de los Tipos de documento
  //Mismos nombres de los metodos en la clase rutas del BE 
  getTipDocs(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipdoc", httpOptions).pipe(
      map(this.extractData)
    );
  }

  //-------------------------------------------------------------
  // Método mostrar un solo Tipo de documento 

  getTipDoc(id): Observable<any> {

    return this.http.get(this.Url + "/tipdoc" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
  // Método para insertar un nuevo Tipo de documento 

  async insertTipDoc(TipoDocumento): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/tipdoc", TipoDocumento, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
  // Método para modificar un  Tipo de documento

  async updateTipDoc(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/tipdoc", cadena, httpOptions).toPromise()
    });
  }


  //=============================================================
  // SERVICIO CRUL DE CLIENTES
  //=============================================================

  // Método Listar de los CLIENTES
  //Mismos nombres de los metodos en la clase rutas del BE 
  getClientes(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/cliente", httpOptions).pipe(
      map(this.extractData)
    );
  }

  //-------------------------------------------------------------
  // Método mostrar un solo Cliente 

  getCliente(id): Observable<any> {

    return this.http.get(this.Url + "/cliente" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
  // Método para insertar un nuevo Cliente 

  async insertCliente(Cliente): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/cliente", Cliente, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
  // Método para modificar un Cliente

  async updateCliente(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/cliente", cadena, httpOptions).toPromise()
    });
  }

  //=============================================================
  // SERVICIO CRUL DE VENDEDORES
  //=============================================================

  // Método Listar de los VENDEDORES
  //Mismos nombres de los metodos en la clase rutas del BE 
  getVendedores(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/vendedor", httpOptions).pipe(
      map(this.extractData)
    );
  }

  //-------------------------------------------------------------
  // Método mostrar un solo vendedor 

  getVendedor(id): Observable<any> {

    return this.http.get(this.Url + "/vendedor" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
  // Método para insertar un nuevo vendedor 

  async insertVendedor(Vendedor): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/vendedor", Vendedor, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
  // Método para modificar un vendedor

  async updateVendedor(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/vendedor", cadena, httpOptions).toPromise()
    });
  }

  //=============================================================
  // SERVICIO CRUL DE PROPIEDADES
  //=============================================================

  // Método Listar de los PROPIEDADES
  //Mismos nombres de los metodos en la clase rutas del BE 
  getPropiedades(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/propiedad", httpOptions).pipe(
      map(this.extractData)
    );
  }

  //-------------------------------------------------------------
  // Método mostrar una sola propiedad 

  getPropiedad(id): Observable<any> {

    return this.http.get(this.Url + "/propiedad" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
  // Método para insertar una nueva propiedad 

  async insertPropiedad(Propiedad): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/propiedad", Propiedad, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
  // Método para modificar una propiedad

  async updatePropiedad(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/propiedad", cadena, httpOptions).toPromise()
    });
  }

  //=============================================================
  // SERVICIO CRUL DE AGENDAS
  //=============================================================

  // Método Listar de los AGENDAS
  //Mismos nombres de los metodos en la clase rutas del BE 
  getAgendas(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/agenda", httpOptions).pipe(
      map(this.extractData)
    );
  }

  //-------------------------------------------------------------
  // Método mostrar una sola agenda

  getAgenda(id): Observable<any> {

    return this.http.get(this.Url + "/agenda" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
  // Método para insertar una nueva agenda 

  async insertAgenda(Agenda): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/agenda", Agenda, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
  // Método para modificar una agenda

  async updateAgenda(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/agenda", cadena, httpOptions).toPromise()
    });
  }

  // Método mostrar el informe de propiedad por periodo de tiempo

  getInformeProp(tit, a1, a2): Observable<any> {

    return this.http.get(this.Url + "/agenda/" + tit + "/" + a1 + "/" + a2, httpOptions).pipe(
      map(this.extractData));
  }

  // Método mostrar el informe de propiedad por periodo de tiempo

  getInformeVend(vend, f1, f2): Observable<any> {

    return this.http.get(this.Url + "/agenda/d/" + vend + "/" + f1 + "/" + f2, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------



  //=============================================================
  // SERVICIO CRUL DE TIPO DE PROPIEDAD
  //=============================================================

  // Método Listar de los tipos de propiedad
  //Mismos nombres de los metodos en la clase rutas del BE 
  getTipoProps(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipoprop", httpOptions).pipe(
      map(this.extractData)
    );
  }

  //-------------------------------------------------------------
  // Método mostrar un solo tipo de propiedad

  getTipoProp(id): Observable<any> {

    return this.http.get(this.Url + "/tipoprop" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
  // Método para insertar un nuevo tipo de propiedad 

  async insertTipoProp(TipoProp): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/tipoprop", TipoProp, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
  // Método para modificar un nuevo tipo de propiedad

  async updateTipoProp(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/tipoprop", cadena, httpOptions).toPromise()
    });
  }

  //=============================================================
  // SERVICIO CRUL DE TIPO DE NEGOCIO
  //=============================================================

  // Método Listar de los tipos de negocio
  //Mismos nombres de los metodos en la clase rutas del BE 
  getTipoNegs(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tiponeg", httpOptions).pipe(
      map(this.extractData)
    );
  }

  //-------------------------------------------------------------
  // Método mostrar un solo tipo de propiedad

  getTipoNeg(id): Observable<any> {

    return this.http.get(this.Url + "/tiponeg" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
  // Método para insertar un nuevo tipo de propiedad 

  async insertTipoNeg(TipoNeg): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/tiponeg", TipoNeg, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
  // Método para modificar un nuevo tipo de propiedad

  async updateTipoNeg(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/tiponeg", cadena, httpOptions).toPromise()
    });
  }


}

