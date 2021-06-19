import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  data: any = [];
  show: Boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.show = true;
    this.http.get('https://api.github.com/users').subscribe((resonse) => {
      console.log(resonse);
      this.data = resonse;
      // this.data=resonse.map(item=>{
      //   return new IPosts()
      // })
    });
  }
}
