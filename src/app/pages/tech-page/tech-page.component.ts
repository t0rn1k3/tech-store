import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechItemsInterface } from 'src/app/shared/interfaces/tech-items.interface';
import { TechService } from 'src/app/shared/services/tech.service';

@Component({
  selector: 'app-tech-page',
  templateUrl: './tech-page.component.html',
  styleUrls: ['./tech-page.component.scss']
})
export class TechPageComponent implements OnInit {

  //@ts-ignore
  techItem : TechItemsInterface;

  constructor(
    private activatedRoute : ActivatedRoute,
    private techService : TechService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.techItem = techService.getTechById(params.id)
    })
  }

  ngOnInit(): void {
    
  }

}
