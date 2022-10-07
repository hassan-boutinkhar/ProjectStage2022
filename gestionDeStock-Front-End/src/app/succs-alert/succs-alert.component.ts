import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {PageCategorieComponent} from '../pages/page-categorie/page-categorie.component';

@Component({
  selector: 'app-succs-alert',
  templateUrl: './succs-alert.component.html',
  styleUrls: ['./succs-alert.component.scss']
})
export class SuccsAlertComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<PageCategorieComponent>
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
