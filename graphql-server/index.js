// https://www.youtube.com/watch?v=0Hvzg6PSosg

const  express = require('express')
const  app = express();

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');


const { results } = require('./data.json');

const schema = buildSchema(`
    type Query {
        persona(email: String) : Result
        personas(gender: String) : [Result]
     }

    type Result {
        gender: String
        name: String
    }

    `);


let getResult = (args) => {
    let email = args.email;
    return results.filter(persona => { return persona.email === email; })[0]
}  

let getResults = (args) => {
    if(args.gender){
        let genre = args.gender;
        return results.filter(persona => persona.gender === genre);
    }else{
        return results;
    }
}  


const root = { 
    message: ()=> "hello world!",
    persona: getResult,
    personas: getResults,
}
app.use('/graphql', express_graphql({
    schema : schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000,()=>console.log('sever on port 3000'));