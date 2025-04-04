import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/cv.module';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { Cv } from './cv/entities/cv.entity';
import { User } from './user/entities/user.entity';
import { Skill } from './skill/entities/skill.entity';

@Module({
  imports: [
    CvModule, UserModule, SkillModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'cv_api',
      entities: [Cv, User, Skill],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
