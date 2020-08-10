class Human{
    constructor(name,age,gender){
        this._name=name;
        this._age=age;
        this._gender=gender;
        this._stamina=10;
    }
    staminaCheck()
    {
        if(this._stamina<=2)
        {
            this.consumeEnergyDrink();
        }
    }
    walk(){
        if(this.staminaCheck())
        {
            this._stamina-=2;
            console.log("He walked");
        }
    }
    talk(){
        if(this.staminaCheck())
        {
            this._stamina-=4;
            console.log("He talked");
        }
    }
    consumeEnergyDrink()
    {
        this._stamina+=4;
        console.log("Energy levels are up");
    }
    get age(){
        return this._age;
    }
    set age(humanAge){
        this._age=humanAge;
    }
}

const h1=new Human("amy",20,'f');
console.log(h1.age);
h1.age=25
console.log(h1.age);

