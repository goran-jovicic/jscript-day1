class PostOffice {
    constructor(){
        this.listaPisama = new Queue();
    
        setInterval(async () => {
            try {
                if (this.listaPisama.isEmpty()){
                    await this.sendLetter();
                    console.log('Pismo uspesno poslato');
                }
            } catch (Error){
                // console.log('Error');
                console.log(Error)
            }
        },10000);
    }
    
    sendLetter = () =>
        new Promise((resolve,reject) =>
            setTimeout(() => {
                Math.random()>0.1
                ?resolve(this.listaPisama.dequeue())
                :reject('Letter lost');
            },3000)
        );
    
    createLetter = () => 
        new Promise((resolve,reject)=>
        setTimeout(() => {
            var person1 = new Customer('Pera','Peric')
            var person2 = new Customer('Pera','Peric')
            var letter = (person1,person2,'test')
            if(person1.firstName === person2.firstName && person1.lastName === person2.lastName){
                reject('Ne moze ista osoba da salje i prima')
            } else {
                this.listaPisama.enqueue(letter);
                resolve('Letter added');
                // console.log('test');
                //resolve('Letter added');
            }
        },3000)
        );
    }
    
    class Person {
        constructor(firstName,lastName){
            if(this.constructor === Person){
                throw new Error('abstract class')
            }
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    
    class Customer extends Person{
        constructor(firstName,lastName){
            super(firstName,lastName)
        }
    
        primiPismo = () => {
            console.log('pismo');
        }
    }
    
    class Letter {
        constructor(posiljalac,primaoc,sadrzaj){
            this.posiljalac = posiljalac;
            this.primaoc = primaoc;
            this.sadrzaj = sadrzaj;
        }
    }
    
    class Queue {
        //Constructor
        constructor(){
          //Private array for the queue
          this.queue = [];
        }
        //At new item at the end of the queue
        enqueue(item){
          this.queue.push(item);
        }
        //Remove and return the item at the front of the queue
        dequeue(){
          return this.queue.shift();
        }
        //Returns if the queue is empty or not
        isEmpty(){
          return this.queue.length !== 0;
        }
       }
    
    // let customer = new Customer('Goran','Jovicic');
    // let customer2 = new Customer('Marko','Markovic');
    let postOffice = new PostOffice();
    postOffice.createLetter()
    // let pismo1 = new Letter(customer,customer2,'Tekst pisma');
    // console.log(postOffice.posaljiPismo(pismo1));
    // console.log(postOffice);