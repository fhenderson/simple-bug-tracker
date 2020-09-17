import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AppService} from "./app.service";

/**
 * Main application access with bare-bones /auth/login route
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}