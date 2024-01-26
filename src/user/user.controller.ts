import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers(@Paginate() query: PaginateQuery) {
    return this.userService.getUsers(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getUser(@Param() params: any) {
    return this.userService.getUser(params.id);
  }

  @Post()
  @UseGuards(AuthGuard)
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateUser(@Param() params: any, @Body() data: UpdateUserDto) {
    return this.userService.updateUser(params.id, data);
  }
}
