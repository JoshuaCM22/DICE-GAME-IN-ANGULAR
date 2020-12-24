import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-result',
  templateUrl: './your-result.component.html',
  styleUrls: ['./your-result.component.css']
})
export class YourResultComponent implements OnInit {
  @Input() yourChoiceCurrentDiceImage: string;

  constructor() { }

  ngOnInit(): void {
  }
}