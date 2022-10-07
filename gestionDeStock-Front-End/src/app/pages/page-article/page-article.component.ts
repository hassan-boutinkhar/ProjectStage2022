import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './page-article.component.html',
  selector: 'app-page-article',
  styleUrls: ['./page-article.component.scss']
})

// tslint:disable-next-line:class-name component-class-suffix

export class PageArticleComponent implements OnInit {

  articleshow = {
   icon : '../assets/img/theme/bootstrap.jpg',
     codearticle : 'code article' ,
     description :  'description' ,
     prixnt : 1000 ,
     prixttc : 2000,
     codecategorie : 'code de categorie' ,
     descriptioncategorie : 'description de categorie'
   };
  screenHeight: number;
  screenWidth: number;

  constructor(private router: Router) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  ngOnInit(): void {
  }
  noveaux() {
    this.router.navigate(['ajouterarticle']);
  }
//585 756
}
