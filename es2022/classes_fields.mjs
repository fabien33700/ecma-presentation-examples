import { alreadyInitialized, resumeCounterState } from './mocks/index.mjs';

class Person {

  // Champ static privé
  static #registrationCounter;

  // Bloc d'initialisation de classe statique
  static {
    if (!alreadyInitialized()) {
      console.log(1, 'Initialisation de la classe');
      this.#registrationCounter = resumeCounterState();
    }
  }

  // Champs publics
  firstName;
  lastName;

  // Champs privés
  #registrationNumber;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#registrationNumber = Person.#registrationCounter++;
  }

  get registrationNumber() {
    return this.#registrationNumber;
  }

  // Méthode privée
  #unregister() {
    this.#registrationNumber = null;
  }

  // Accesseur statique
  static get registrationCounter() {
    return this.#registrationCounter;
  }

  // Méthode statique
  static resetCounter() {
    this.#registrationCounter = 0;
  }

}

const p1 = new Person('Michel', 'Dupont');
// Person.#registrationCounter = 0;
// person.#unregister();

console.log(2, p1)
console.log(3, p1.registrationNumber);

const p2 = new Person('Michel', 'Bernard');
console.log(4, p2.registrationNumber);
Person.resetCounter();

console.log(5, Person.registrationCounter);
