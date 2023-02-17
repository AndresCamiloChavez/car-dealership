import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      ...createBrandDto,
      createAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return { msg: `Se ha crado la brand correctamente`, brand };
  }

  findAll() {
    return { brands: this.brands };
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id == id);
    if (!brand)
      throw new NotFoundException(`La brand con el id ${id}, no existe`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id == brandDB.id) {
        brandDB = {
          ...brand,
          ...updateBrandDto,
          updateAt: new Date().getTime(),
        };
        return brandDB;
      }
      return brand;
    });

    return {
      msg: `Se ha actualizado la brand: ${id}`,
      brand: brandDB,
    };
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return {
      msg: `Se ha eliminado la brand ${id}`,
    };
  }

  fillBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
