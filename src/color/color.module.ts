import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';

@Module({
  controllers: [ColorController],
  imports: [TypeOrmModule.forFeature([Color])],
  providers: [ColorService],
})
export class ColorModule {}
