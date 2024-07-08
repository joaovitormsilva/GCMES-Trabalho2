import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { Response as ExpressReponse } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Request() req: AuthRequest,
    @Response({ passthrough: true }) response: any,
  ) {
    const access_token = await this.authService.login(req.user);
    response.cookie('jwt_token', access_token, {
      httpOnly: true,
      secure: true,
      maxAge: 30 * 86400,
      path: '/',
    });
    return { message: 'Login successful' };
  }

  @IsPublic()
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Response({ passthrough: true }) response: ExpressReponse) {
    response.clearCookie('jwt_token');
    return { message: 'Logout successful' };
  }
}
