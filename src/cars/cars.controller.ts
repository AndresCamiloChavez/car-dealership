import { Controller, Get, Param, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { Body, Delete, Patch, Post, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('')
  getAllCars() {
    return { cars: this.carsService.findAll() };
  }

  @Get('/:id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return { car: this.carsService.findById(id) };
  }

  @Post('')
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch('/:id')
  updateCar(@Param('id') id: string, @Body() body: any) {
    return { id, body };
  }
  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { msg: `Delelte method ${id}` };
  }
}
