import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../services/category/category.service';
import {categoryDTO} from '../../../DTO/categoryDTO';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs';

@Component({
  selector: 'app-page-add-categorie',
  templateUrl: './page-add-categorie.component.html',
  styleUrls: ['./page-add-categorie.component.scss']
})
export class PageAddCategorieComponent implements OnInit {

  myForm: FormGroup;
  categoryUpdate: categoryDTO;
  varTest: boolean;

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

  constructor(private router: ActivatedRoute,private router1: Router,private fb: FormBuilder, private categoryService: CategoryService, private snackBar: MatSnackBar) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  ngOnInit(): void {
/*    this.router.data.subscribe(data =>{
      console.log(data);
        this.categoryUpdate.id = data.id,
          this.categoryUpdate.codeCtegory = data.codeCtegory,
          this.categoryUpdate.designation = data.designation,
          this.categoryUpdate.idEntreprise = data.idEntreprise
          this.varTest=data.varTest
      }
    );*/
    console.log("hhhhhhh");
 this.router.paramMap
      .pipe(map(() => window.history.state)).subscribe(
        data=> {
          this.categoryUpdate.id = data.id,
            this.categoryUpdate.codeCtegory = data.codeCtegory,
            this.categoryUpdate.designation = data.designation,
            this.categoryUpdate.idEntreprise = data.idEntreprise
          this.varTest=data.varTest
        }
      );
    console.log(this.categoryUpdate);
    this.myForm = this.fb.group({
      id:[this.categoryUpdate.id],
      codeCategory: [this.categoryUpdate.codeCtegory, Validators.required],
      description: [this.categoryUpdate.designation, Validators.required],
      idEntreprise: [this.categoryUpdate.idEntreprise],
    });
    console.log(this.categoryUpdate.id);
  }
  onSubmit(form: FormGroup) {
    if(this.varTest){
      this.categoryService.updateCategory(this.dataToDATO(form));
      this.snackBar.open('Operation avec succés !', '', {
        duration: 3000,
        verticalPosition: 'bottom', // 'top' | 'bottom'
        horizontalPosition: 'end',
        panelClass: ['blue-snackbar']
      });
      this.myForm.reset({});
    }else {
      this.categoryService.getCategoryByCodeCategoryAndIdEntreprise(form.value.codeCategory, form.value.idEntreprise).subscribe(
        (data) => {
          console.log(data);
          if(data == null){
            this.categoryService.addCategory(this.dataToDATO(form));
            this.snackBar.open('Operation avec succés !', '', {
              duration: 3000,
              verticalPosition: 'bottom', // 'top' | 'bottom'
              horizontalPosition: 'end',
              panelClass: ['blue-snackbar']
            });
            this.myForm.reset({});
          }else{
            this.snackBar.open('Le categorie est deja exist !', '', {
              duration: 3000,
              verticalPosition: 'bottom', // 'top' | 'bottom'
              horizontalPosition: 'end',
              panelClass: ['red-snackbar']
            });
          }
        }
      );
    }


  }

  dataToDATO(form: FormGroup): categoryDTO {
    const categoryDTOV: categoryDTO = new categoryDTO();
    categoryDTOV.id=form.value.id;
    categoryDTOV.codeCtegory = form.value.codeCategory;
    categoryDTOV.idEntreprise = form.value.idEntreprise;
    categoryDTOV.designation = form.value.description;
    return categoryDTOV;
  }
  updateCategory(category: categoryDTO) {

  }

}
