import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DetailsComponent} from './details/details.component';


@Component({
  selector: 'app-mvstocks',
  templateUrl: './mvstocks.component.html',
  styleUrls: ['./mvstocks.component.scss']
})
export class MvstocksComponent implements OnInit {
  // @ts-ignore
  showv: boolean[] ;
  a = false;
  articleshow = [{
    id: 1,
    icon : '../assets/img/theme/bootstrap.jpg',
    codearticle : 'code article' ,
    description :  'description' ,
    prixnt : 1000 ,
    prixttc : 2000,
    stockactuel : 'Stock actuel' ,
    Quantite : 300
  } , {
    id: 2,
    icon : '../assets/img/theme/bootstrap.jpg',
    codearticle : 'code article' ,
    description :  'description' ,
    prixnt : 1000 ,
    prixttc : 2000,
    stockactuel : 'Stock actuel' ,
    Quantite : 300
  } , {
    id: 3,
    icon : '../assets/img/theme/bootstrap.jpg',
    codearticle : 'code article' ,
    description :  'description' ,
    prixnt : 1000 ,
    prixttc : 2000,
    stockactuel : 'Stock actuel' ,
    Quantite : 300
  }];
  screenHeight: number;
  screenWidth: number;
  animal: string;
  display = 'none';
  name: string;
  nombre: number[] = [1, 2, 3] ;
  constructor(private router: Router, public dialog: MatDialog) {
    this.getScreenSize();
  }
  openDialog(nmb ?: number): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
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
    this.router.navigate(['ajouterarticle']);
  }
  afficher(id: number) {
    (this.showv[id] === true) ? this.showv[id]  = false : this.showv[id]  = true;
  }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  affichage() {
    (this.a === true) ? this.a  = false : this.a  = true;
  }

}
