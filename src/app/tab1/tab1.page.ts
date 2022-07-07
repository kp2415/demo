import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title: string = "";
  description: string = ""
  notes = []
  constructor() {
  }

  sort(value) {
    switch (value) {
      case 'title': {
        this.notes.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
       
        break;
      }
        
      case 'desc':{
        this.notes.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))
        break;
      }

       

      default:
        break;
    }
  }
  save() {
    this.notes.push(
      {
        title: this.title,
        description: this.description
      }
    );
    this.title="";
    this.description=""
  }

  delete(x) {
    var index = this.notes.indexOf(x);
    this.notes.splice(index, 1);
  }

}
