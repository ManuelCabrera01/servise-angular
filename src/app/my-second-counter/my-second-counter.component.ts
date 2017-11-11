import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CounterService } from '../service/counter.service';
@Component({
  selector: 'app-my-second-counter',
  templateUrl: './my-second-counter.component.html',
  styleUrls: ['./my-second-counter.component.css'],
  // encapsulation: ViewEncapsulation.None
  providers: [CounterService]
})
export class MySecondCounterComponent implements OnInit {
  constructor(private theCounter: CounterService) {}

  ngOnInit() {
  }
  incrementCounter() {
   this.theCounter.increment();
 }

}
