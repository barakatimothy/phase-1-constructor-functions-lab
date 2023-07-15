function Scooter(year, color, model){
      this.year = year;
      this.color = color;
      this.model = model;
}
function Driver(name, age, experience){
      this.name = name;
      this.age = age;
      this.experience = experience;
}
function PickupLocation(city, address){
    this.address = address;
    this.city = city;
}

let newYork = new PickupLocation('New York City', '123 Broadway');

newYork.address;