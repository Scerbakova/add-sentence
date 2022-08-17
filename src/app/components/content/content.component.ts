import { Component, OnInit } from '@angular/core';
import { ParagraphService } from 'src/app/paragraph.service';
import { Paragraph } from 'src/app/paragraph';
import { Sentence } from 'src/app/sentence';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ParagraphService]
})
export class ContentComponent implements OnInit {

  constructor(private paragraphService: ParagraphService) {}

  paragraphs: Paragraph[][] = []
  sentence!: Sentence
  updatedParagraph!: Paragraph[]

  ngOnInit() {
    this.paragraphs = this.paragraphService.getData()
  }

  addSentence(i: number): void {
    this.paragraphService.addSentence(i)
  }
}
