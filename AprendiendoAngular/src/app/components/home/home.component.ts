import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/aticle';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit{

  public title: string;
  public articles: Article[] | undefined;

  constructor(
    private _articleService:ArticleService
  ){
    this.title='Ultimos Articulos';
  }
  ngOnInit(): void {
    
    this._articleService.getArticles(2).subscribe(
      response => {
        if(response.articles){
          
          this.articles=response.articles;
        }else{

        }
        console.log(response);
        console.log(response.articles);
        console.log(this.articles);
        console.log('Tamaño de articles '+this.articles?.length);
      }
    );
  }

}
