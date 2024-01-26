import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../decorator/roles.decorator';
import { Role } from '../utils/role.enum';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard)
  getUsers(@Paginate() query: PaginateQuery) {
    return this.userService.getUsers(query);
  }

  @Get(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard)
  getUser(@Param() params: any) {
    return this.userService.getUser(params.id);
  }

  @Post()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard)
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard)
  updateUser(@Param() params: any, @Body() data: UpdateUserDto) {
    return this.userService.updateUser(params.id, data);
  }
}
