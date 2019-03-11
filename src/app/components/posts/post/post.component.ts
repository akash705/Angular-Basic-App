import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('postData') data;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  singlePost(){
      this.router.navigate([`/singlePost/${this.data.id}`],{
        
      })
  }

}
