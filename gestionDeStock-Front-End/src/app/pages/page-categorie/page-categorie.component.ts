import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../services/category/category.service';
import {categoryDTO} from '../../DTO/categoryDTO';
import {Observable, Subscription} from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SuccsAlertComponent} from '../../succs-alert/succs-alert.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent implements OnInit {


  listCategory1!: Observable<categoryDTO[]>;
  categoryTest!: Observable<categoryDTO>;
  screenHeight: number;
  screenWidth: number;
  idEntreprise="DHL123";

  constructor(private router: Router, private categoryService: CategoryService, private snackBar: MatSnackBar) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  ngOnInit(): void {
    this.listCategory1 = this.categoryService.getAllDataByEntreprise(this.idEntreprise);

  }
  noveaux() {
    this.router.navigate(['addcategory']);
  }

  update(codeCtegory: categoryDTO) {
    this.router.navigateByUrl('/addcategory', { state:
        {
          id: codeCtegory.id,
          codeCtegory: codeCtegory.codeCtegory,
          designation: codeCtegory.designation,
          idEntreprise: codeCtegory.idEntreprise,
          varTest: true
        }
    });
    console.log(codeCtegory);

  }
  delete(id: number) {
    this.categoryService.deleteCategory(id);
    this.listCategory1 = this.categoryService.getAllDataByEntreprise(this.idEntreprise);
    this.snackBar.open('Operation avec succés !', '', {
          duration: 3000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'end',
          panelClass: ['blue-snackbar']
        });
  }

}

