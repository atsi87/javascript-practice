
nCars = ['volvo' ,'honda', 'toyota','bmv'];

class car {
    constructor(name ,model ) {
        this.name = 'name';
        this.model = 'model';
        this.mpg = 18;
        this.set = 4;

}

}
console.log(car);
document.body.innerHTML = `${car.name} <br/> ${car.model} <br/> ${car.mpg} <br/> ${car.set}`;

for (let i = 0; i <= nCars.length; i++) {
    let car = new car(nCars[i]);
console.log(nCars);
}