import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstrapping the Node.js server using the Nest.js framework
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(33000);
  console.log(`You can access this server API's at ${await app.getUrl()}`)

}
bootstrap();
