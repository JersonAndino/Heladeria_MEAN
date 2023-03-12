import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CargarService } from 'src/app/services/cargar.service';
import { Helado } from 'src/app/models/helado';
import { HeladoService } from 'src/app/services/helado.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css'],
  providers:[HeladoService,CargarService]
})
export class HeladosComponent implements OnInit{
  public titulo:string;
  public helado:Helado;
  public url:string;
  public helados:Helado[];
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;
  constructor(
    private _heladoService:HeladoService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="HELADOS";
    this.url=Global.url;
    this.helado=new Helado('','','Mora',0,'','');
    this.archivosParaCargar=[];
    this.helados=[];
  }
  ngOnInit(): void {
    this.obtenerHelados();
  }
  guardarHelado(form:NgForm){
    this._heladoService.postHelado(this.helado).subscribe(
      response=>{
        //console.log(response);
        if(response.result){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(this.url+'subir-imagen/'+response.result._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              console.log(result);
              //this.libroGuardar=result.response;
              //this.status='success';
              //console.log(result.response.result._id);
              //this.idGuardado=result.result._id;
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            console.log("No hay archivos para cargar");
          }
        }else{
          //
        }
      },error=>{
        console.log(<any>error);
      }
    );
  }
  obtenerHelados(){
    this._heladoService.getHelados().subscribe(
      response=>{
        this.helados=response.result;
      },error=>{
        console.log(<any>error);
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
  obtenerPastelesPorNombre(tipo:String){
      this._heladoService.getHeladosPorTipo(tipo).subscribe(
        response=>{
          this.helados=response.result;
        },error=>{
          console.log(<any>error);
        }
      );
  }
  obtenerHeladoPorId(id:String){
    this._heladoService.getHeladoPorId(id).subscribe(
      response=>{
        this.helado=response.result;
      },error=>{
        console.log(<any>error);
      }
    );
  }
  actualizarHeladoPorId(){
    this._heladoService.putHeladoPorId(this.helado).subscribe(
      response=>{
        // this.helado=response.result;
        if (response.result) this._router.navigate(['/helados']);
      },error=>{
        console.log(<any>error);
      }
    );
  }
  eliminarHeladoPorId(id:String){
    this._heladoService.deleteHeladoPorId(id).subscribe(
      response=>{
        // this.helado=response.result;
        if (response.result) this._router.navigate(['/helados']);
      },error=>{
        console.log(<any>error);
      }
    );
  }
}
