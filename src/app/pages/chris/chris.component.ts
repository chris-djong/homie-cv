import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chris',
  templateUrl: './chris.component.html',
  styleUrls: ['./chris.component.scss']
})
export class ChrisComponent implements OnInit {

  public birthday: Date = new Date(1994, 7, 6);

  constructor() { }

  ngOnInit(): void {
  }

}
