import { dataShare } from './../../services/data-sharing';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private filterData=[];
  constructor(private _dataShare:dataShare) {

   }

  ngOnInit() {
      this._dataShare.request().then(data=>{
          if(data['status']){
            this.filterData=[...data['data']];
          }
      })
  }

}
