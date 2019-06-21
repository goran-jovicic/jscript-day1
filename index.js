class Form {
    constructor(data) {
        this.originalData = data; 
        this.errors = new Errors();
        for(let key in data){
            this[key] = data[key];
        }
    }

    data(){
        var data = {};
        for(let key in this.originalData){
            data[key] = this[key];
        }

        return data;
    }
    
    reset(){
        console.log(this.errors);
        this.errors.clear()
        for(let key in this.originalData){
            this[key] = this.originalData[key];
        }
    } 
    
    async submit(){
            try{
                let promise = await this.server()
                this.onSuccess(promise)
            }catch(error){
                this.onFail(error)
            }
    } 
    
    server(){
        return new Promise((resolve,reject)=> {
            setTimeout(()=> {
            Math.random() > 0.5
            ?resolve({ message:'Sucessfully logged in!'})
            :reject({ username:'Username is invalid' })
            },5000)
        })
    }

    onSuccess({message}){
        alert(message);

        this.reset();
    } 
    
    onFail(error){
        console.log('Error occured');
        this.errors.record(error);
    }
}

class Errors {
    constructor(){
        this.errors = {};
    }

    has(field){
        return this.errors.hasOwnProperty(field);
    }

    any(){
        return Object.keys(this.errors).length > 0;
    }
    
    get(field){
        return this.errors[field];
    }

    record(error){
        this.errors = {...this.errors, ...error};
    }

    clear(field){
        if(field){
            delete this.errors[field];

            return;
        }

        this.errors = {};
    }
}


// // console.log(errors);
// var errors = new Errors();
// errors.record({username:'Username is required'})
// console.log(errors.any());
// console.log(errors.has('username'));
// console.log(errors.get('username'));
// errors.clear('username');
// console.log(errors.has('username'));
// var form = new Form(object);
// console.log(form.data());
// console.log(form);
// var form = new Form({username:'',password: ''})
// form.username = 'goran';
// form.password = 'jovicic';
// // console.log(form);
// // console.log(form);
// // form.reset();
// // console.log(form)
// // form.submit();
// form.reset()
// console.log(form)
// form.submit();
// form.onSuccess(form)