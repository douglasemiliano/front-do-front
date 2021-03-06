import { Injectable } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ApiService {

  getEndpoint(): string {
    return 'cliente';
  }
}
