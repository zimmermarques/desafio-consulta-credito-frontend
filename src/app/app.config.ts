import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
            { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
