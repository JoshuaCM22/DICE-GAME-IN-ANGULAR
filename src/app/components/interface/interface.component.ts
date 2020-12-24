import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  @Input() game:number;
  @Input() clearState: () => void;
  @Input() startGame: () => void;

  constructor() { }

  ngOnInit(): void {
  }
}
