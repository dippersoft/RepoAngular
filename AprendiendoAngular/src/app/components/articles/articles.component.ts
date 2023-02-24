import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/aticle';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  public url :string | undefined;

  @Input() articles:Article[] | undefined;
  
  constructor(){

    this.url=Global.url;

  }
  
  ngOnInit() {
    console.log(this.articles);
  }

}
