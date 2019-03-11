import { dataShare } from './../../services/data-sharing';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
private id;
private data:any;
  constructor(
    private _activatedRoute:ActivatedRoute
    ,private _dataShare:dataShare,
    private _Router:Router,
    private _location:Location
    ) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params.id;
    // 
    this.data = this._dataShare.get(this.id);
    
    if(!this.data){
      this._Router.navigate(['/']);  
    }
  }
  back(){
      this._location.back();
  }

}
