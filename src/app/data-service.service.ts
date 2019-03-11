import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  public table_data: any;
  dataextract() {
    let data1: any;
    $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      async: false,
      dataType: "json",
      success: function (response) {
        data1 = response;
      }

    });
    this.table_data = data1;
    return this.table_data;
  }
  
