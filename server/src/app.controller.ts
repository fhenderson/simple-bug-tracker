import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import {LocalAuthGuard} from "./auth/guards/local-auth.guard";
import {AppService} from "./app.service";
import {AuthService} from "./auth/auth.service";

/**
 * Main application access with bare-bones /auth/login route
 */
@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly authService: AuthService
  ) {}

  /**
   * Test API (unprotected api)
   * ==> /test
   */
  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Login API
   * ==> /auth/login
   * @param req
   */
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  /**
   * User profile API
   * ==> /profile
   * @param req
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}