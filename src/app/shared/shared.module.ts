import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { TechContainerComponent } from './components/tech-container/tech-container.component';
import { RatingModule } from "ng-starrating";

@NgModule({
    declarations: [
      HeaderComponent,
      TechContainerComponent
  ],
    imports : [ 
      CommonModule,
      RatingModule
    ],
    exports : [
      HeaderComponent,
      TechContainerComponent
    ],
    providers : [

    ]

})

export class sharedModule {
    
}