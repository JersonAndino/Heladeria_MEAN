import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

import { Helado } from '../models/helado';
@Injectable()
export class HeladoService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    postHelado(helado:Helado):Observable<any>{
        let params=JSON.stringify(helado);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'helado',params,{headers:headers});
    }
    getHeladosPorTipo(tipo:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'helados/'+tipo,{headers:headers});
    }
    getHelados():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'helado',{headers:headers});
    }
    deleteHeladoPorId(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'helado/'+id,{headers:headers});
    }
    putHeladoPorId(helado:Helado):Observable<any>{
        let params=JSON.stringify(helado);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'helado',params,{headers:headers});
    }
    getHeladoPorId(id:String):Observable<any>{
        //let params=JSON.stringify(id);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'helado/'+id,{headers:headers});
    }
}