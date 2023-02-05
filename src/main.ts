import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  try {
    await app.listen(env.PORT);
    console.log(`listening to port ${env.PORT}`);
  } catch (err) {
    console.log(`connexion error ${err}`);
  }
}
bootstrap();
