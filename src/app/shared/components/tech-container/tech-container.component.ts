import { Component, OnInit } from '@angular/core';
import { TechService } from '../../services/tech.service';
import { ActivatedRoute } from '@angular/router';
import { Tech } from '../../models/Tech';

@Component({
  selector: 'app-tech-container',
  templateUrl: './tech-container.component.html',
  styleUrls: ['./tech-container.component.scss']
})
export class TechContainerComponent implements OnInit {


  techItems : Tech[] =[];

  constructor(
    private techService: TechService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.techItems = this.techService.getAllItemsBySearchTerm(params.searchTerm);
      if(params.tag)
        this.techItems = this.techService.getAllItemsByTag(params.tag);
      else
        this.techItems = this.techService.getAllProd();
    })
  }

}
