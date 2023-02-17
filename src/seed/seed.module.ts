import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { BrandsModule } from '../brands/brands.module';
import { CarsModule } from '../cars/cars.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [BrandsModule, CarsModule]
})
export class SeedModule {}
