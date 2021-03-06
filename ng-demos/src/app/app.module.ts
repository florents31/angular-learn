import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TemplateComponent } from './template/template.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { ConvertComponent } from './convert/convert.component';
import { CanvasComponent } from './mood/canvas/canvas.component';
import { TabListComponent } from './mood/tab-list/tab-list.component';
import { MoodFaceComponent } from './mood/mood-face/mood-face.component';
import { HappyComponent } from './mood/happy/happy.component';
import { SosoComponent } from './mood/soso/soso.component';
import { AngryComponent } from './mood/angry/angry.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TemplateComponent,
    FormComponent,
    ConvertComponent,
    CanvasComponent,
    TabListComponent,
    MoodFaceComponent,
    HappyComponent,
    SosoComponent,
    AngryComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
