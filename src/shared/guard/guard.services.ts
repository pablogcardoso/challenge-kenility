
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from 'src/modules/auth/constants/jwt.constant';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService, @Inject(AuthService) private authServices: AuthService) { }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );
      const isLogged = await this.authServices.isLogged(payload);
      if (isLogged.length > 0) {
        return true;
      } else {
        return false;
      }

    } catch (error) {
      console.log("GUARD_ERROR", error);
      return false;
    }
  }

  private extractTokenFromHeader(request: Request): string | null {
    const [typeToken, token] = request.headers.authorization?.split(' ') ?? [];
    return typeToken === 'Bearer' ? token : null;
  }
}
