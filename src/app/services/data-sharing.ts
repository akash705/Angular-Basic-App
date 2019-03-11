import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    }


}