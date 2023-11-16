/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car{
    constructor(currentSpeed=0,model){
        this.currentSpeed = currentSpeed;
        this.model = model
    }
    accelerate() {
        this.currentSpeed ++;
    }
    brake() {
        this.currentSpeed --;
    }
    toString(){
        return `${this.model} current speed is ${this.currentSpeed}`
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const accord =   new Car(0,'Accord')
const mdx = new Car(0,'MDX')

accord.accelerate()
accord.accelerate()
accord.brake()
console.log(accord.toString())

mdx.accelerate()
mdx.accelerate()
mdx.brake()
console.log(mdx.toString())


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

class ElectricCar extends Car {
    constructor(currentSpeed=0,model){
        super(currentSpeed,model);
        this.motor = 'electric'
    }
    accelerate(){
        super.accelerate()
        super.accelerate()
    }
    toString(){
        return `The ${this.motor} ${super.toString()}`
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const bmwi4 =   new ElectricCar(0,'I4')
bmwi4.accelerate()
bmwi4.accelerate()
bmwi4.brake()
console.log(bmwi4.toString())