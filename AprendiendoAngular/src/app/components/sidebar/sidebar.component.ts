import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchString: string | undefined;


  constructor(

    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit(): void {
  }

  goSearch() {
    this._router.navigate(['/buscar', this.searchString]);
    
  }

}
