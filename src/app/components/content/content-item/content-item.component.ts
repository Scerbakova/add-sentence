import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.css']
})
export class ContentItemComponent {
  //saņemam datus
  @Input()
  paragraphs!: string[][];

    //padodam funkciju addSentence uz augšu un te mums jau ir indekss kā arguments
  @Output() addNewSentence = new EventEmitter<number>();

  addSentence(i: number): void {
    this.addNewSentence.emit(i);
  }
}