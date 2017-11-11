import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],

  // encapsulation: ViewEncapsulation.None
  providers: [CounterService]
})
export class MyCounterComponent implements OnInit {
constructor(private theCounter: CounterService) {}


  ngOnInit() {
  }
  incrementCounter() {
      this.theCounter.increment();
    }
}
