import { Paragraph } from "./paragraph";
import { Sentence } from "./sentence";

export class ParagraphService {
  private paragraphs: Paragraph[][] = [
    ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere excepturi dignissimos quas, ratione recusandae quam mollitia inventore repellat aperiam alias sed numquam saepe, voluptas vel similique repudiandae! Distinctio, dignissimos! Corrupti aliquam incidunt quibusdam at quos fugit odit earum laudantium qui dolor inventore nemo iusto amet nobis minus aliquid, deleniti sunt, tenetur sed veniam labore similique! Voluptates quia eveniet illum. Velit ullam id eaque officia. Velit odit nulla impedit. Tempora deleniti, nostrum distinctio esse porro illum labore recusandae facilis repellendus nobis consectetur ullam, alias corporis voluptate, consequatur sequi ab? Velit. Nisi quas, qui sint hic voluptates dolor id aliquam, veniam eum alias inventore debitis quis deleniti error praesentium quaerat impedit! Aperiam est soluta ex aut id totam porro itaque minima! Tempore doloremque necessitatibus repellendus labore quaerat accusantium animi ullam nisi, officia quisquam molestiae reiciendis sit eaque. Eius, similique facere! Assumenda culpa dignissimos minima ex quasi optio officiis temporibus perspiciatis quos.'],
    ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere excepturi dignissimos quas, ratione recusandae quam mollitia inventore repellat aperiam alias sed numquam saepe, voluptas vel similique repudiandae! Distinctio, dignissimos! Corrupti aliquam incidunt quibusdam at quos fugit odit earum laudantium qui dolor inventore nemo iusto amet nobis minus aliquid, deleniti sunt, tenetur sed veniam labore similique! Voluptates quia eveniet illum. Velit ullam id eaque officia. Velit odit nulla impedit. Tempora deleniti, nostrum distinctio esse porro illum labore recusandae facilis repellendus nobis consectetur ullam, alias corporis voluptate, consequatur sequi ab? Velit. Nisi quas, qui sint hic voluptates dolor id aliquam, veniam eum alias inventore debitis quis deleniti error praesentium quaerat impedit! Aperiam est soluta ex aut id totam porro itaque minima! Tempore doloremque necessitatibus repellendus labore quaerat accusantium animi ullam nisi, officia quisquam molestiae reiciendis sit eaque. Eius, similique facere! Assumenda culpa dignissimos minima ex quasi optio officiis temporibus perspiciatis quos.']
  ]
  private sentence: Sentence = ['Lorem ipsum dolor sit amet consectetur adipisicing elit.']

  getData(): Paragraph[][] {
    return this.paragraphs
  }

  addSentence(i: number): void {
    //izveidojam jaunu tukšo masīvu kur glabāsies paragrāfs ar jauno teikumu
    let updatedParagraph = []

    //ar indeksa palīdzību ņēmam vajadzīgo paragrāfu, kopējām to saturu un pievinojam teikumu
    this.paragraphs[i] = [...this.paragraphs[i], this.sentence]

    //iepriekš izveidotajā masīva beigās pivienojam modificēto paragrāfu un veidojam no paragrāfa stringu ar atstarpi starp ieprikējo saturu un jauno teikumu
    updatedParagraph.push(this.paragraphs[i].join(' '))

    //pasakam, ka mūsu paragrāfs tagad it tas masīvs, ko tikko izveidojām
    this.paragraphs[i] = updatedParagraph
  }  
}