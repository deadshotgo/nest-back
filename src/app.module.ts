import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { User } from './user/entities/user.entity';
import { Category } from './category/entities/category.entity';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { SubCategory } from './sub-category/entities/sub-category.entity';
import { BlogModule } from './blog/blog.module';
import { BrandModule } from './brand/brand.module';
import { Blog } from './blog/entities/blog.entity';
import { Brand } from './brand/entities/brand.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { ImageProductModule } from './image-product/image-product.module';
import { ImageProduct } from './image-product/entities/image-product.entity';
import { ColorModule } from './color/color.module';
import { TagModule } from './tag/tag.module';
import { Color } from './color/entities/color.entity';
import { Tag } from './tag/entities/tag.entity';
import { TagProductModule } from './tag-product/tag-product.module';
import { ColorProductModule } from './color-product/color-product.module';
import { TagProduct } from './tag-product/entities/tag-product.entity';
import { ColorProduct } from './color-product/entities/color-product.entity';
import { TagBlogModule } from './tag-blog/tag-blog.module';
import { TagBlog } from './tag-blog/entities/tag-blog.entity';
import { ContactModule } from './contact/contact.module';
import { Contact } from './contact/entities/contact.entity';
export const entities = [
  User,
  Category,
  SubCategory,
  Blog,
  Brand,
  Product,
  ImageProduct,
  Color,
  Tag,
  TagProduct,
  ColorProduct,
  TagBlog,
  Contact,
];
@Module({
  imports: [
    ConfigModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities,
        synchronize: false,
        logging: false,
        ssl: undefined,
      }),
      inject: [ConfigService],
    }),
    CategoryModule,
    SubCategoryModule,
    BlogModule,
    BrandModule,
    ProductModule,
    ImageProductModule,
    ColorModule,
    TagModule,
    ColorProductModule,
    TagProductModule,
    TagBlogModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
