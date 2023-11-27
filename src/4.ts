class Key {
  private signature: number = Math.random();

  public getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  private tenants: Person[] = [];

  constructor(public key: Key) {}

  public comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
