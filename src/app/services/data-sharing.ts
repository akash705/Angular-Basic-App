import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class dataShare{
    private masterData={
        originalData:[],
        filterData:[]
    };
    constructor(private httpClient:HttpClient){
        // console.log('services embeded');
    }
    request(){

       return new Promise((res,rej)=>{
        if(this.masterData.originalData.length)
            return res({status:true,data:[...this.masterData.filterData]});
        this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
            // this.masterData.originalData= [...data];
            if(data){
                this.masterData.originalData=Object.assign([],data);
                this.masterData.filterData=[...this.masterData.originalData];
                res({status:true,data:data});
            }else{
                rej({status:false,data:[]});
            }
        })
       }) 
    }
    filter(str){
        return new Observable((subscriber)=>{
            subscriber.next(
                this.masterData.originalData.filter(data=>data.title.includes(str))
            );
            subscriber.complete();
        });
    }
    originalData(){

    }
    filterData(){

    }
    get(i){
        
        return this.masterData.originalData[i] || null;
    }



}