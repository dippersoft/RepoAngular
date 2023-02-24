import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Article } from "../models/aticle";
import { Global } from "./global";

@Injectable()
export class ArticleService {


    public url: string | undefined;

    constructor(
        private _http: HttpClient
    ) {

        this.url = Global.url;

    }

    pruebas() {
        return "Soy el servicio de articulos";
    }

    getArticles(last: any = null): Observable<any> {
        console.log("LLEGA AL getArticles");
        console.log(this.url + 'articles');

        var articles = 'articles';

        if (last != null) {
            articles = 'articles/' + last;

        }
        return this._http.get(this.url + articles);

    }
    getArticle(articleId: number): Observable<any> {

        return this._http.get(this.url + 'article/' + articleId);

    }

    search(searchString: any): Observable<any> {
        return this._http.get(this.url + 'search/' + searchString);

    }

    create(article: any):Observable<any>{

        let params= JSON.stringify(article);
        let headers= new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save',params,{headers:headers});
    }

    update(id: number, article: any):Observable<any>{
        let params= JSON.stringify(article);
        let headers= new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'articleUpdate/'+id,params,{headers:headers});
    }

    delete(id:number):Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'articleDelete/'+id,{headers:headers});
    }
}
