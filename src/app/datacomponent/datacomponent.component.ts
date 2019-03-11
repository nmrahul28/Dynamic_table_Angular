import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import * as $ from 'jquery';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-datacomponent',
  templateUrl: './datacomponent.component.html',
  styleUrls: ['./datacomponent.component.css']
})
export class DatacomponentComponent implements OnInit {
  public data: any;
  public tablehead: string[];
  public flag: boolean = true;
  public input: any;
  public tableheading: any;
  public userid: any;
  public id: any;
  public title: any;
  public body: any;
  public new_data: object;
  constructor() { }
  ngOnInit() {
    var extract = new DataServiceService();
    this.data = extract.dataextract();
    this.tablehead = Object.keys(this.data[0]);
  }
  get_data(i: number) {
    return Object.values(this.data[i]);
  }
  sorting(param) {
    if (this.flag == true) {
      this.data.sort(
        function (a, b) {
          if (a[param] > b[param])
            return 1;
          if (a[param] < b[param])
            return -1;
          else
            return 0;
        });
      this.flag = false;
    }

    else {
      if (this.flag == false) {
        this.data.sort(
          function (a: any, b: any) {
            if (a[param] < b[param])
              return 1;
            if (a[param] > b[param])
              return -1;
            else
              return 0;
          });
        this.flag = true;
      }

    }
  }


  ok() {
    this.new_data = {
      "userId": this.userid,
      "id": this.id,
      "title": this.title,
      "body": this.body
    };
    if (this.new_data['userId']==undefined||this.new_data['id']==undefined||this.new_data['title']==undefined||this.new_data['body']==undefined) {
      alert("Enter the data");
    }
    else {
      this.data.push(this.new_data);

    }

  }
  cancel(){
    this.userid = "";
    this.id = "";
    this.title = "";
    this.body = "";
  }


}
