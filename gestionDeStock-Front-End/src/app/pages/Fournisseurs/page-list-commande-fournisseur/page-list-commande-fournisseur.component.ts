import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PageDetailsCommandesFounisseurComponent} from '../page-details-commandes-founisseur/page-details-commandes-founisseur.component';

@Component({
  selector: 'app-page-list-commande-fournisseur',
  templateUrl: './page-list-commande-fournisseur.component.html',
  styleUrls: ['./page-list-commande-fournisseur.component.scss']
})
export class PageListCommandeFournisseurComponent implements OnInit {
  showv: boolean[] ;
  nombre: number[] = [1, 2, 3] ;
  infoclients = {
    nom : 'NOM',
    icon : '../assets/img/theme/bootstrap.jpg',
    prenom : 'PRENOM' ,
    numtelephone :  'NUMERO DE TELEPHONE' ,
    adress : 'ADRESS @' ,
    ville : 'code de postal VILLE',
    pays : 'PAYS',
  };
  animal: string;
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
      this.animal = result;
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
  noveaux() {
    this.router.navigate(['noveaucommandefournisseur']);
  }
  afficher(id: number) {
    (this.showv[id] === true) ? this.showv[id]  = false : this.showv[id]  = true;
  }
}
