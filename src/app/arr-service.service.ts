import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrServiceService {

  arr = [
    { name: `Pepsi`, prise: `$1`, expirationDate: { normalDate: `10/08/2021`, exDate: new Date(2021, 7, 10), }, category: `drinks` },
    { name: `Fanta`, prise: `$2`, expirationDate: { normalDate: `10/09/2021`, exDate: new Date(2021, 8, 10), }, category: `drinks` },
    { name: `Sprite`, prise: `$3`, expirationDate: { normalDate: `10/07/2021`, exDate: new Date(2021, 6, 10), }, category: `drinks` },
    { name: `Mirinda`, prise: `$1`, expirationDate: { normalDate: `10/05/2021`, exDate: new Date(2021, 4, 10), }, category: `drinks` },
    { name: `7up`, prise: `$1`, expirationDate: { normalDate: `10/11/2021`, exDate: new Date(2021, 10, 10), }, category: `drinks` },
  ];

  constructor() { }
}
