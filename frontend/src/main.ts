import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { ServiceLocator } from './app/service-locator';
import { HttpClientModule, HttpClient } from '@angular/common/http';

platformBrowser().bootstrapModule(AppModule)
  .then((moduleRef) => {
    const httpClient = moduleRef.injector.get(HttpClient);
    ServiceLocator.setHttpClient(httpClient);
  })
  .catch(err => console.error(err));
