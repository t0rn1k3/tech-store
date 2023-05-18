import { Component, OnInit } from '@angular/core';
import { TechService } from '../../services/tech.service';
import { TechItemsInterface } from '../../interfaces/tech-items.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tech-container',
  templateUrl: './tech-container.component.html',
  styleUrls: ['./tech-container.component.scss']
})
export class TechContainerComponent implements OnInit {


  techItems : TechItemsInterface[] =[];

  constructor(
    private techService: TechService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.techItems = this.techService.getAllProd().filter(techItem => techItem.name.toLocaleLowerCase().includes(params.searchTerm.toLocaleLowerCase()))
      else
        this.techItems = this.techService.getAllProd();
    })
  }

}
