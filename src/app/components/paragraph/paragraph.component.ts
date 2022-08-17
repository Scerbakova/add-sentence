import { Component, Input } from '@angular/core';
import { Paragraph } from 'src/app/paragraph';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {

  //saņemam no augšas paragrāfu
  @Input()
  paragraph!: Paragraph[];
}
