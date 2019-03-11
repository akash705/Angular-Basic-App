import { dataShare } from './../../services/data-sharing';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs/';
import { switchMap, throttleTime, debounceTime} from 'rxjs/operators';
import subject from 'src/app/services/subject';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private searchBar="";
  private subscriber;
  @ViewChild('customInput') inputText:ElementRef; 
  constructor(private _dataShare:dataShare) { }

  ngOnInit() {
    this.subscriber  = fromEvent(this.inputText.nativeElement,'input');
    this.subscriber.pipe(debounceTime(500), switchMap(data =>this._dataShare.filter(this.searchBar)))
      .subscribe((data, len) => {
        subject.next(data);
        // console.log(data);
      }, () => {}, (complete) => {})
  }
  

}
