import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { modules_routes } from './modules.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
    providers: [
      importProvidersFrom([]),
      provideRouter(modules_routes), provideClientHydration()]
  };