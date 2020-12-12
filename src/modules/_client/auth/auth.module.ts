import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { CommonAuthService } from './services/common/common.auth.service';
import { SigninService } from './services/signin.service';
import { SignupService } from './services/signup.service';

@Module({
  controllers: [AuthController],
  exports: [CommonAuthService, SigninService, SignupService],
  providers: [CommonAuthService, SigninService, SignupService],
})
export class AuthModule {}
