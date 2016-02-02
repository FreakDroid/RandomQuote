import {Component, OnInit, Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app',
  template: `<ul>
                <li (click)='myAlert()'> Helow World</li>
             </ul>
             <div>
              <spam>{{quote}}</spam>
              <br>
              <spam>{{author}}</spam>
             </div>`,
  providers: [HTTP_PROVIDERS]
})

export class App {
  public quote: string;
  public author: string;
  public  logError: string;

  constructor(private http: Http){
  }

  myAlert(){
        this.http.get("http://quotes.rest/qod.json").map(res => { return res.json()})
          .subscribe(
            data => { this.quote = data.contents.quotes[0].quote; this.author = data.contents.quotes[0].author;},
            err => this.logError(err),
            () => console.log('Random Quote Complete')
        );
    }
}



class quotes {
  public  quote: string;
  public  author: string;

  constructor(quote: string,
                author: string) {
      this.quote = quote;
      this.author = author;
    }
}
