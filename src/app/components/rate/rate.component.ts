import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() selectedVal = -1
  @Output() emitter = new EventEmitter<number>();
  constructor() {
   }

  ngOnInit(): void {
  }

  selectRate(param: number){
    this.emitter.emit(param)
  }
}
