import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/aticle';
import { ArticleService } from 'src/app/services/article.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers:[ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public titleTmp: string;
  public contentTmp: string;

  public fuoloadTmp: File | undefined;

  public status: string | undefined;



  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article(0, '', '', "", null);
    this.titleTmp = '';
    this.contentTmp = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // var articleTmp = new Article(0, this.titleTmp, this.contentTmp, "", null);
    // console.log(articleTmp);
    // this._articleService.create(articleTmp).subscribe(
    //   response =>{
    //     if(response.status=='success'){
    //       this.status='success';
    //       this.article=response.article;
    //       this._router.navigate(['/blog']);
    //     }else{
    //       this.status='error';
    //     }
    //   }
    // );

    console.log('Subir la imagen  '+this.fuoloadTmp);

  }

  uploadImage(){
    console.log('Subir la imagen  '+this.fuoloadTmp);
    
  }

}
