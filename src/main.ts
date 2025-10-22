import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend
  app.enableCors({
    origin: true,
    // credentials: true,
  });

  await app.listen(PORT, HOST);
  // await app.listen(3000, "0.0.0.0", () => console.log("Server running"));

  console.log(`Application is running on: http://${HOST}:${PORT}`);
})();
