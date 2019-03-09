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
  public table_values: string[];
  get_data() {
    let newdata: string[];
    newdata = this.table_data.map((ele: number, ind: number) => {
      return Object.values(this.table_data[ind])
    });
    return this.table_values = newdata;
  }

  public flag: boolean = true;

  sort(id: any) {
    if (this.flag == true) {
      console.log(this.flag);
      this.table_data.sort(
        function (a:any, b:any) {
          if (a[id] > b[id] && this.flag)
            return -1;
          else
            return 1;
          return 0;
        });
      this.flag = false;
    }
  }

}
