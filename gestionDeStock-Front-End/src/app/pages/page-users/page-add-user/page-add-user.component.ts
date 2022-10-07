import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent implements OnInit {
 title!: string;
 path1!: string;
  constructor(private router: ActivatedRoute, private route1: Router) { }

  ngOnInit(): void {
    this.router.data.subscribe(data =>
        this.title = data.title,
    );
    this.router.data.subscribe(data =>
      this.path1 = data.path1
    );
  }
   close() {
    this.route1.navigate([this.path1]);
   }
}
