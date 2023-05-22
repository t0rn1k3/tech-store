import { Component, OnInit } from '@angular/core';
import { TechService } from '../../services/tech.service';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags : Tag[] = []
  constructor(
    private techService : TechService
  ) {}

  ngOnInit(): void {
    this.tags = this.techService.getAllTags()
  }

}
