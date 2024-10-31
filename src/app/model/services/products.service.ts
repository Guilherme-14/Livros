import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'O Menino Maluquinho', price: 50.0, description: 'Um livro alegre e impecável ', image: '../meninoMaluquinho.png' },
    { id: 1, name: 'O Homem que Escutava as Abelhas', price: 70.5, description: 'Um livro dramático e exuberante', image: '../oHomemQueEscutavaAsAbelhas.png' },
    { id: 1, name: 'Como eu era antes de Você', price: 58.0, description: 'Um livro romantico e triste', image: '../comoEuEraAntesDeVoce.png' },
    { id: 1, name: 'O Menino Maluquinho', price: 50.0, description: 'Um livro alegre e impecável ', image: '../meninoMaluquinho.png' },
    { id: 1, name: 'O Homem que Escutava as Abelhas', price: 70.5, description: 'Um livro dramático e exuberante', image: '../oHomemQueEscutavaAsAbelhas.png' },
    { id: 1, name: 'Como eu era antes de Você', price: 58.0, description: 'Um livro romantico e triste', image: '../comoEuEraAntesDeVoce.png' },
    { id: 1, name: 'O Menino Maluquinho', price: 50.0, description: 'Um livro alegre e impecável ', image: '../meninoMaluquinho.png' },
    { id: 1, name: 'O Homem que Escutava as Abelhas', price: 70.5, description: 'Um livro dramático e exuberante', image: '../oHomemQueEscutavaAsAbelhas.png' },
    { id: 1, name: 'Como eu era antes de Você', price: 58.0, description: 'Um livro romantico e triste', image: '../comoEuEraAntesDeVoce.png' },
    { id: 1, name: 'O Menino Maluquinho', price: 50.0, description: 'Um livro alegre e impecável ', image: '../meninoMaluquinho.png' },
    { id: 1, name: 'O Homem que Escutava as Abelhas', price: 70.5, description: 'Um livro dramático e exuberante', image: '../oHomemQueEscutavaAsAbelhas.png' },
    { id: 1, name: 'Como eu era antes de Você', price: 58.0, description: 'Um livro romantico e triste', image: '../comoEuEraAntesDeVoce.png' },
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}

