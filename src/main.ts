import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExpeptionFilter } from './common/filters/http-expeption.filter';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(new HttpExpeptionFilter());
  app.useGlobalInterceptors(
    new WrapResponseInterceptor(),
    new TimeoutInterceptor(),
  );
  await app.listen(3000);
}
bootstrap();
