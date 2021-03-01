import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project';
import {Global} from './global';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class ProjectService{
    public url :String;

    constructor(
        private _http: HttpClient
    ){
        this.url= Global.url;
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    saveProject(project :Project): Observable<any>{
        let params =JSON.stringify(project);
        let hearders = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save-project',params,{headers:hearders});
    }

    getProjects():Observable<any>{
        let headers= new HttpHeaders().set('Content-type','application/json');

        return this._http.get(this.url+'projects',{headers:headers});
    }


    getProject(id) : Observable<any>{
        let hearders = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'project/'+id , {headers: hearders});
    }

    deleteProject(id): Observable<any>{
        let hearders = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'project/'+id,{headers:hearders})
    }

    updateProject(project): Observable<any>{
        let params = JSON.stringify(project);
        let hearders = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'project/'+ project._id,params,{headers:hearders});
    }
}