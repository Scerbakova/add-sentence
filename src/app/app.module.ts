import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentItemComponent } from './components/content-item/content-item.component';
import { ContentComponent } from './components/content/content.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ParagraphService } from './paragraph.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TitleComponent,
    LogoComponent,
    HeaderComponent,
    ContentItemComponent,
    ContentComponent,
    ParagraphComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ParagraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
