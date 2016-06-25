class Drone {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  static getCompany() {
    console.log(`id: ${this.id}`);
  }

  fly() {
    console.log(`Drone ${this.id} is flying`);
  }
}

let drone = new Drone('A123', 'flyer');
drone.id = 'B456';

console.log(`Drone - ${drone.id} : ${drone.name}`);

