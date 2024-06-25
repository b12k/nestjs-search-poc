import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT);
  if (env.IS_DEV) {
    console.log(`🚀 API running on http://localhost:${env.PORT}`);
  }
}
bootstrap();
