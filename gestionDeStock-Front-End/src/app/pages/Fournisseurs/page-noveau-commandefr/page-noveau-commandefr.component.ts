import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PageDetailsCommandesFounisseurComponent} from '../page-details-commandes-founisseur/page-details-commandes-founisseur.component';

@Component({
  selector: 'app-page-noveau-commandefr',
  templateUrl: './page-noveau-commandefr.component.html',
  styleUrls: ['./page-noveau-commandefr.component.scss']
})
export class PageNoveauCommandefrComponent implements OnInit {
  infoclients = {
    nom : 'NOM',
    icon : '../assets/img/theme/bootstrap.jpg',
    prenom : 'PRENOM' ,
    numtelephone :  'NUMERO DE TELEPHONE' ,
    adress : 'ADRESS @' ,
    ville : 'code de postal VILLE',
    pays : 'PAYS',
  };
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
  constructor(private router: Router, public dialog: MatDialog) {
    this.getScreenSize();
  }
  openDialog(nmb ?: number): void {
    const dialogRef = this.dialog.open(PageDetailsCommandesFounisseurComponent, {
      width: '80%', height: '80%',
      data: nmb,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  ngOnInit(): void {
  }
}
