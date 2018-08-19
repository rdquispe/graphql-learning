# Query 1
```
query getPersonById($personaEmail: String){
  persona(email: $personaEmail){
    gender
    name
  }
}

Query Variables 1

{
  "personaEmail": "caitlin.boyd@example.com"
}

```



# Query 2
```
query getPersonById($personaGenre: String){
  personas(gender: $personaGenre){
    gender
    name
  }
}

Query Variables 2

{
  "personaGenre": "female"
}

```