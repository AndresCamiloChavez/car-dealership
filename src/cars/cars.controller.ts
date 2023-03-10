import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Body, Delete, Patch, Post, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.updateCar(id, updateCarDto);
  }
  @Delete('/:id')
  deleteCar(@Param('id') id: string) {
    
    return this.carsService.deleteCar(id)
  }
}
