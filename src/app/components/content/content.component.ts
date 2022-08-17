import { Component, OnInit } from '@angular/core';
import { ParagraphService } from 'src/app/paragraph.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ParagraphService]
})
export class ContentComponent implements OnInit {

  constructor(private paragraphService: ParagraphService) {}

  paragraphs: string[][] = []
  sentence!: string
  updatedParagraph!: string[]

  //kad komponente inicializējas mēs pasakam, ka paragrāfi ir paragrāfi no servisa
  ngOnInit() {
    this.paragraphs = this.paragraphService.getData()
  }

  //pievinojam teikumu ar funkciju no servisa
  addSentence(i: number): void {
    this.paragraphService.addSentence(i)
  }
}
