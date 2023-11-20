import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { IncrementAction} from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store : Store) {}

  increment() {
    //this.store.dispatch(increment({value:2}));
    this.store.dispatch(new IncrementAction(4));
  }

  decrement() {
    this.store
  }
}
