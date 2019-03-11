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
      console.log('singlePost',this.data);
      this.router.navigate([`/singlePost/${this.data.id}`],{
        
      })
  }

}
