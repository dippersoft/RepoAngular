//importar los modulos de router de angular
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//importar componentes a los que quiero hacer una pagina exclusiva

import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from "./components/article/article.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";

//Array de rutas

export const appRoutes: Routes=[
    {path:'', component : HomeComponent},
    {path:'home', component : HomeComponent},
    {path:'blog', component : BlogComponent},
    {path:'buscar/:search', component : SearchComponent},
    {path:'blog/articulo/:id', component : ArticleComponent},
    {path:'blog/crear', component : ArticleNewComponent},
    {path:'blog/editar/:id', component : ArticleEditComponent},
    {path:'formulario', component : FormularioComponent},
    {path:'peliculas', component : PeliculasComponent},
    {path:'pagina-de-pruebas', component : PaginaComponent},
    {path:'pagina-de-pruebas/:nombre/:apellidos', component : PaginaComponent},
    {path:'**', component : ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing= RouterModule.forRoot(appRoutes);