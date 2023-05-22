import { Injectable } from '@angular/core';
import { Tech } from '../models/Tech';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor() { }

  getAllTags(): Tag[] {
    return  [
      {name : 'All', count : 6},
      {name : 'Bluetooth & Wireless Speakers', count : 2},
      {name : 'Video Games', count : 2},
      {name : 'Computers', count : 2},
      {name : 'Tablets', count : 1},
      {name : 'Cell Phones', count : 1},
    ]
  }

  getTechById(id : number) : Tech {
    //@ts-ignore
    return this.getAllProd().find(tech => tech.id == id)
  }

  getAllItemsBySearchTerm(searchTerm : string): Tech[] {
    return this.getAllProd().filter(techItem => techItem.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getAllItemsByTag(tag: string) : Tech[] {
    return tag == 'All' ?
    this.getAllProd() :
    this.getAllProd().filter(item => item.tags?.includes(tag));
  }

  getAllProd():Tech[] {
    return [
      {
        id : 1,
        name : 'Bose QuietComfort Earbuds',
        price : 299,
        imagePath: '/assets/images/bose.jpg',
        tags : ['Bluetooth & Wireless Speakers'],
        stars : 4.2,
        favorite : false,
        origins : ['Usa']
      },
      {
        id : 2,
        name : 'Nintendo Game Boy Advance',
        price : 199,
        imagePath: '/assets/images/gba.jpg',
        tags : ['Video Games', 'Computers'],
        stars : 4.4,
        favorite : false,
        origins : ['Japan']
      },
      {
        id : 3,
        name : 'HP Pavilion Laptop',
        price : 649,
        imagePath: '/assets/images/hp.jpg',
        tags : ['Computers', 'Tablets'],
        stars : 5,
        favorite : false,
        origins : ['Usa']
      },
      {
        id : 4,
        name : 'Marshall Stanmore II Wireless Bluetooth Speaker',
        price : 299,
        imagePath: '/assets/images/marshall.jpg',
        tags : ['Bluetooth & Wireless Speakers'],
        stars : 4.6,
        favorite : false,
        origins : ['UK']
      },
      {
        id : 5,
        name : 'SAMSUNG Galaxy S23+ Plus',
        price : 1199,
        imagePath: '/assets/images/samsung.jpg',
        tags : ['Cell Phones'],
        stars : 4.5,
        favorite : false,
        origins : ['South Korea']
      },
      {
        id : 6,
        name : 'Xbox Series S 512GB',
        price : 299,
        imagePath: '/assets/images/xbox.jpg',
        tags : ['Video Games'],
        stars : 4,
        favorite : false,
        origins : ['Usa']
      },
    ]
  }
}
