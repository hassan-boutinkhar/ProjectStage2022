import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-page-ajouter-article',
  templateUrl: './page-ajouter-article.component.html',
  styleUrls: ['./page-ajouter-article.component.scss']
})
export class PageAjouterArticleComponent implements OnInit {

  myForm: FormGroup;

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

  constructor(private router: Router, private fb: FormBuilder) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      codearticle: ['', Validators.required],
      Designation: ['', [Validators.required, Validators.email]],
      Prix_unitaire: ['', [Validators.required, Validators.minLength(15)]],
      Taux_TVA: ['', [Validators.required, Validators.minLength(15)]],
      Prix_unitaireTTC: ['', [Validators.required, Validators.minLength(15)]],
      category: ['', [Validators.required, Validators.minLength(15)]],
      photo: ['', [Validators.required, Validators.minLength(15)]],
    });
  }
  close() {
    this.router.navigate(['/particle']);
  }



  onSubmit(form: FormGroup) {
    console.log('hhhhhhhhhh');
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.codearticle);
    console.log('Email', form.value.Designation);
    console.log('Message', form.value.Prix_unitaire);
    console.log('Message', form.value.Taux_TVA);
    console.log('Message', form.value.Prix_unitaireTTC);
    console.log('Message', form.value.category);
    console.log('Message', form.value.photo);
  }
}
