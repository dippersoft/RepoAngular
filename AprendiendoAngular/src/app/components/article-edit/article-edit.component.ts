import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/aticle';
import { ArticleService } from 'src/app/services/article.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article-edit',
  // templateUrl: '../article-new/article-new.component.html',
  templateUrl: './article-edit.component.html',
  styleUrls: ['../article-new/article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article | undefined;

  public status: string | undefined;

  public isEdit: boolean | undefined;



  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
this.isEdit=true;
  }

  ngOnInit(): void {
  }



}
