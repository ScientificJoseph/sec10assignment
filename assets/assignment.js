class Course {
    #title;
    #price;

    constructor(title, length, price) {
        this.#title = title;
        this.length = length;
        this.#price = price
    }

    get calc(){
        const sum = this.length / this.#price
        return `That class has ${sum} credits and will take ${this.length} days.`
    }

    set calc(val){
        if(this.#price < 0) {
            console.log('Bertha wnats to help!')
            console.log(`You don't have enough to take ${this.#title} this semester` )
            this.#price = 5            
            return
        }
    }
    
    summary() {
        return `You choose ${this.#title}. It last ${this.length} days and cost \$${this.price} Simon.`
    }
}

const offerings = {
    choices: [
        new Course('Math', 100, 10),
        new Course('Science', 120, 30)
    ],

    render() {
        for(const choice of this.choices) {
            console.log(choice.calc)
            console.log(choice.summary())
        }
    }
}

class PracticalCourse extends Course {
    #title;
    constructor(title, length, price, numOfExercises, name) {
        super(title, length, price)
        this.#title = title
        this.numOfExercises = numOfExercises
        this.name = name
    }
    render(){
        console.log(`${this.name}, ${this.#title} has ${this.numOfExercises} assignments. ${this.calc}`)
    }
}

class TheoreticalCourse extends Course {
    #title;
  
    constructor(title, length, price, name) {
        super(title, length, price,)
        this.#title = title;
        this.price = price;
        this.name = name
    }
    publish() {
        console.log(`${this.name}, Booker T Washington said ${this.#title} is the way forward. ${this.calc}`)
    }
}

// offerings.render()
const practical = new PracticalCourse('English',40, 2, 30, 'Bertha')
practical.calc = this.price
practical.render()

const theoretical = new TheoreticalCourse('Agriculture', 20 ,5, 'Simon')
theoretical.calc = this.price
theoretical.publish()