import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from "./datamodel.model";
import { MyExampleService } from "./app.service";
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  public data: Data;
  private display: boolean; // whether to display info in the component
                            // use *ngIf="display" in your html to take
                            // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
                          // when OnDestroy is called.

  private timer: Observable<number>;
  private interval: number;

  constructor(private myExampleService: MyExampleService) {
    this.display = false;
    this.alive = true;
    this.interval = 1000;
    this.timer = Observable.timer(0, this.interval);
  }

  ngOnInit() {
    this.timer
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.myExampleService.get()
          .subscribe((data) => {
            debugger;
            this.data = data;
            if(!this.display){
              this.display = true;
            }
          });
      });
  }

  ngOnDestroy(){
    this.alive = false; // switches your IntervalObservable off
  }
}