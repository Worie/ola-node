const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

// symulacja danych z bazy, z pliku - czy w tym przypadku, z pamięci
// z tymi danymi porównujemy dane które uzytkownik wpisuje przy logowaniu (POST /login)
const allowedUsers = [{
  name: 'wojtek', password: 'p123',
}, {
  name: 'ola', password: 'p321',
}];

// get w linku - mniej bezpieczna w linku
// queryparams: ?name=mida&param=dss
app.get('/kotek', (request, response) => {
  // zwracamy dane podane przez uzytkownika + jakis nasz tekst do przegladarki
  // jesli nie damy response.send to przegladarka bedzie wisiec i czekac na odpowiedz serwera
  response.send(`oto kotek ;3 name: ${request.query.name} param: ${request.query.param}`);
});

// dowód na to, ze mozna miec dwa endpointy o tej samej nazwie ale roznych typach 
// jesli wejdziesz na /login z paska przegladarki to wejdziesz w get,
// jesli wejdzie na /login z formularza 
app.get('/login', (request, response) => {
  response.send(`oto login z geta`);
});

// faktyczne logowanie postem
app.post('/login', (request, response) => {
  // bierzemy dane z przeglądarki - jesli user je wprowadził
  if (request.body.name && request.body.password) {
    // sprawdzamy czy ktorykolwiek obiekt w tablicy pasuje do podanych danych
    const userProperlyLoggedIn = allowedUsers.some(user => {
      // tylko jesli i haslo i nazwa usera pasuja, to moze sie zalogowac
      const matches = (
        user.name === request.body.name && 
        user.password === request.body.password
      );
      
      return matches;
    });

    // jesli user podal dobre dane, pokaz ze ok
    if (userProperlyLoggedIn) {
      return response.send(`witaj ${request.body.name}!`);
    } else {
      // jesli user podal zle dane, pokaz ze nie ok
      return response.send(`brak dostępu!`);
    }
  } else {
    // jesli user podal niepelne dane, napisz ze niepelne
    return response.send('niepełne dane logowania!')
  }
});

// "prawie wszystkie" powyzej 1024 
app.listen(7777);

// post - bardziej bezpieczna, w pamięci