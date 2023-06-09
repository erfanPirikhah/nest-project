import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as passport  from 'passport'
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('example API')
    .setDescription('This Apis for test .')
    .setVersion('1.0')
    .addTag('Api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);



  app.use(
    session({
      secret: 'secret',
    }),
  );

  app.use(passport.initialize())
  app.use(passport.session())


  await app.listen(3000);
}
bootstrap();
