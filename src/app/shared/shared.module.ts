import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'; 
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TechContainerComponent } from './components/tech-container/tech-container.component';
import { RatingModule } from "ng-starrating";
import { SearchComponent } from './components/search/search.component';
import { TagsComponent } from './components/tags/tags.component';
import { ButtonComponent } from './components/button/button.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
      HeaderComponent,
      TechContainerComponent,
      SearchComponent,
      TagsComponent,
      ButtonComponent,
      NotFoundComponent
  ],
    imports : [ 
      CommonModule,
      RatingModule,
      FormsModule, 
      RouterModule
    ],
    exports : [
      HeaderComponent,
      TechContainerComponent,
      SearchComponent,
      TagsComponent,
      ButtonComponent,
      NotFoundComponent
    ],
    providers : [

    ]

})

export class sharedModule {
    
}