export class ParagraphService {
  private paragraphs = [
    ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere excepturi dignissimos quas, ratione recusandae quam mollitia inventore repellat aperiam alias sed numquam saepe, voluptas vel similique repudiandae! Distinctio, dignissimos! Corrupti aliquam incidunt quibusdam at quos fugit odit earum laudantium qui dolor inventore nemo iusto amet nobis minus aliquid, deleniti sunt, tenetur sed veniam labore similique! Voluptates quia eveniet illum. Velit ullam id eaque officia. Velit odit nulla impedit. Tempora deleniti, nostrum distinctio esse porro illum labore recusandae facilis repellendus nobis consectetur ullam, alias corporis voluptate, consequatur sequi ab? Velit. Nisi quas, qui sint hic voluptates dolor id aliquam, veniam eum alias inventore debitis quis deleniti error praesentium quaerat impedit! Aperiam est soluta ex aut id totam porro itaque minima! Tempore doloremque necessitatibus repellendus labore quaerat accusantium animi ullam nisi, officia quisquam molestiae reiciendis sit eaque. Eius, similique facere! Assumenda culpa dignissimos minima ex quasi optio officiis temporibus perspiciatis quos.'],
    ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere excepturi dignissimos quas, ratione recusandae quam mollitia inventore repellat aperiam alias sed numquam saepe, voluptas vel similique repudiandae! Distinctio, dignissimos! Corrupti aliquam incidunt quibusdam at quos fugit odit earum laudantium qui dolor inventore nemo iusto amet nobis minus aliquid, deleniti sunt, tenetur sed veniam labore similique! Voluptates quia eveniet illum. Velit ullam id eaque officia. Velit odit nulla impedit. Tempora deleniti, nostrum distinctio esse porro illum labore recusandae facilis repellendus nobis consectetur ullam, alias corporis voluptate, consequatur sequi ab? Velit. Nisi quas, qui sint hic voluptates dolor id aliquam, veniam eum alias inventore debitis quis deleniti error praesentium quaerat impedit! Aperiam est soluta ex aut id totam porro itaque minima! Tempore doloremque necessitatibus repellendus labore quaerat accusantium animi ullam nisi, officia quisquam molestiae reiciendis sit eaque. Eius, similique facere! Assumenda culpa dignissimos minima ex quasi optio officiis temporibus perspiciatis quos.']
  ]
  private sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

  getData() {
    return this.paragraphs
  }

  addSentence(index: number): void {
    //izveidojam jaunu tuk??o mas??vu kur glab??sies paragr??fs ar jauno teikumu
    let updatedParagraph = []

    //ar indeksa pal??dz??bu ????mam vajadz??go paragr??fu, kop??j??m to saturu un pievinojam teikumu
    this.paragraphs[index] = [...this.paragraphs[index], this.sentence]

    //iepriek?? izveidota mas??va beig??s pivienojam modific??to paragr??fu un veidojam no paragr??fa stringu ar atstarpi starp iepriek????jo saturu un jauno teikumu
    updatedParagraph.push(this.paragraphs[index].join(' '))

    //pasak??m, ka m??su paragr??fs tagad ir tas mas??vs, ko tikko izveidoj??m
    this.paragraphs[index] = updatedParagraph
  }  
}