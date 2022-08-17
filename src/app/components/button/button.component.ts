import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  //padodam funkciju addSentence uz augšu
  @Output()
  addNewSentence = new EventEmitter<null>()

  addSentence(): void {
    this.addNewSentence.emit();
  }

}
