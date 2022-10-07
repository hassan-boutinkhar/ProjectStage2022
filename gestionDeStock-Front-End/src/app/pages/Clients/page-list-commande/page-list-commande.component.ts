import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PageDetailsClientsComponent} from '../page-details-clients/page-details-clients.component';

@Component({
  selector: 'app-page-list-commande',
  templateUrl: './page-list-commande.component.html',
  styleUrls: ['./page-list-commande.component.scss']
})
export class PageListCommandeComponent implements OnInit {
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
    const dialogRef = this.dialog.open(PageDetailsClientsComponent, {
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
    this.router.navigate(['nvcommandeclients']);
  }
  afficher(id: number) {
    (this.showv[id] === true) ? this.showv[id]  = false : this.showv[id]  = true;
  }

}
