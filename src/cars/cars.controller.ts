import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('/')
  getAllCars() {
    return { cars: this.carsService.findAll() };
  }

  @Get('/:id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return { car: this.carsService.findById(id) };
  }
}
