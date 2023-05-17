import { Component, OnInit } from '@angular/core';
import { TechService } from '../../services/tech.service';
import { TechItemsInterface } from '../../interfaces/tech-items.interface';

@Component({
  selector: 'app-tech-container',
  templateUrl: './tech-container.component.html',
  styleUrls: ['./tech-container.component.scss']
})
export class TechContainerComponent implements OnInit {


  techItems : TechItemsInterface[] =[];

  constructor(
    private techService: TechService
  ){}

  ngOnInit(): void {
    this.techItems = this.techService.getAllProd();
  }

}
