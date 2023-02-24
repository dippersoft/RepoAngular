import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/aticle';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {


  public articles: Article[] | undefined;
  public url: string | undefined;

  constructor(

    private _articleService: ArticleService

  ) { 

    this.url=Global.url;

  }
  ngOnInit() {
    console.log('LLLLLOOOOOOOOOOOOGGGGG');
    
    this._articleService.getArticles().subscribe(
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
