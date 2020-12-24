import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-airesult',
  templateUrl: './airesult.component.html',
  styleUrls: ['./airesult.component.css']
})
export class AIresultComponent implements OnInit {
  @Input() aiChoiceCurrentDiceImage: string;

  constructor() { }

  ngOnInit(): void {
  }
  
}
