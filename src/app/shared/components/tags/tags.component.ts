import { Component, OnInit } from '@angular/core';
import { TagInterface } from '../../interfaces/tag.inteeface';
import { TechService } from '../../services/tech.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags : TagInterface[] = []
  constructor(
    private techService : TechService
  ) {}

  ngOnInit(): void {
    this.tags = this.techService.getAllTags()
  }

}
