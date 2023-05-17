import { Injectable } from '@angular/core';
import { TechItemsInterface } from '../interfaces/tech-items.interface';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor() { }

  getAllProd():TechItemsInterface[] {
    return [
      {
        id : 1,
        name : 'Bose QuietComfort Earbuds',
        price : 299,
        imagePath: '/assets/images/bose.jpg',
        tags : ['Bluetooth & Wireless Speakers'],
        stars : 4.2,
        favorite : false,
        origins : 'Usa'
      },
      {
        id : 2,
        name : 'Nintendo Game Boy Advance',
        price : 199,
        imagePath: '/assets/images/gba.jpg',
        tags : ['Video Games'],
        stars : 4.4,
        favorite : false,
        origins : 'Japan'
      },
      {
        id : 3,
        name : 'HP Pavilion Laptop',
        price : 649,
        imagePath: '/assets/images/hp.jpg',
        tags : ['Computers', 'Tablets'],
        stars : 5,
        favorite : false,
        origins : 'Usa'
      },
      {
        id : 4,
        name : 'Marshall Stanmore II Wireless Bluetooth Speaker',
        price : 299,
        imagePath: '/assets/images/marshall.jpg',
        tags : ['Bluetooth & Wireless Speakers'],
        stars : 4.6,
        favorite : false,
        origins : 'UK'
      },
      {
        id : 5,
        name : 'SAMSUNG Galaxy S23+ Plus',
        price : 1199,
        imagePath: '/assets/images/samsung.jpg',
        tags : ['Cell Phones'],
        stars : 4.5,
        favorite : false,
        origins : 'South Korea'
      },
      {
        id : 6,
        name : 'Xbox Series S 512GB',
        price : 299,
        imagePath: '/assets/images/xbox.jpg',
        tags : ['Video Games'],
        stars : 4,
        favorite : false,
        origins : 'Usa'
      },
    ]
  }
}
