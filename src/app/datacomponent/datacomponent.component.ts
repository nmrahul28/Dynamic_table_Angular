import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-datacomponent',
  templateUrl: './datacomponent.component.html',
  styleUrls: ['./datacomponent.component.css']
})
export class DatacomponentComponent implements OnInit {
  public data: any;
  public tablehead: string[];
  public tablevalues: string[];
  public flag: boolean = true;
  constructor() { }
  ngOnInit() {
    var extract = new DataServiceService();
    this.data = extract.dataextract();
    this.tablehead = Object.keys(this.data[0]);
    this.tablevalues = extract.get_data();
  }
  sorting(param: any) {
    if (this.flag == true) {
      console.log(this.flag);
      console.log(param);
      this.data.sort(
        function (a, b) {
          if (a.param > b.param && this.flag)
            return 1;
          if (a.param < b.param && this.flag)
            return -1;
          else
            return 0;
        });
      this.flag = false;
    }

    else {
      if (this.flag == false) {
        console.log(this.flag);
        this.data.sort(
          function (a: any, b: any) {
            if (a.param < b.param && this.flag)
              return 1;
            if (a.param > b.param && this.flag)
              return -1;
            else
              return 0;
          });
        this.flag = true;
      }

    }
  }
}
