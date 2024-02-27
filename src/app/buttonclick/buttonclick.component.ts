import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-buttonclick',
  standalone: true,
  imports: [],
  templateUrl: './buttonclick.component.html',
  styleUrl: './buttonclick.component.css'
})
export class ButtonclickComponent {
  constructor(){}
  @Output()
    newEvent = new EventEmitter();
  clicked(){
    this.newEvent.emit("hello");
  }
}
