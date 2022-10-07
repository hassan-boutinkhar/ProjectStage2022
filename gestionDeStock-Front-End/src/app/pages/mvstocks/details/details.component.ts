import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  variable!: number;
  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.variable = data ;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }



}
