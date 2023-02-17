import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {


  constructor(private carsService: CarsService, private brandService: BrandsService){}
 

  populateDB() {
    this.carsService.fillCars(CARS_SEED);
    console.log('Cargo los carros?');
    
    this.brandService.fillBrands(BRANDS_SEED);
    return `Seed Executed`
  }
}
