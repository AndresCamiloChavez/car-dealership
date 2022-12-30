import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }
  findById(id: string): Car {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException('No se encontro el vehículo ' + id); // es atrapada por exeption Filter
    return car;
  }
  createCar(createCarDto: CreateCarDto) {
    this.cars.push({ id: uuid(), ...createCarDto });
    return { id: uuid(), ...createCarDto };
  }
  updateCar(id: string, updateCarDto: UpdateCarDto) {

    let carDB = this.findById(id);

    this.cars = this.cars.map(car =>{
      if(car.id == id){
        carDB = {
          ...carDB,
          ...updateCarDto,
          id
        }
        return carDB;
      }
      return car;
    });
    return carDB;
  }
}
