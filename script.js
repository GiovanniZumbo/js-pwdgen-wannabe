// Chiedere all'utente Nome, cognome e colore preferito e crearci una password

/*
1. Recupero dell'elemento di interesse nel DOM / Get the element of interest from the DOM
2. Chiedo il nome all'utente / Request the first name of the user
3. Chiedo il cognome all'utente / Request the last name of the user 
4. Chiedo il colore preferito all'utente / Request user's favourite colour
5. Creo una variabile che unisca tutti e 3 i dati con il numero 21 / Make a variable linking those three datas with a the default number "21"
6. Inserisco il risultato nell'elemento del DOM / Print the result in the element of interest

*/

// ? FASE PREPARATORIA 
// 1. Recupero dell'elemento di interesse nel DOM

const resultElement = document.getElementById('result');
console.log(resultElement);

// ? FASE RACCOLTA
// 2. Chiedo il nome all'utente

const firstName = prompt('Inserisci il tuo nome', 'John');
console.log(firstName, typeof firstName);

// 3. Chiedo il cognome all'utente

const lastName = prompt('Inserisci il tuo cognome', 'Smith');
console.log(lastName, typeof lastName);

// 4. Chiedo il colore preferito all'utente

const favouriteColour = prompt('Inserisci il tuo colore preferito', 'Red');
console.log(favouriteColour, typeof favouriteColour);

// ? FASE ELABORAZIONE

// 5. Creo una variabile che unisca tutti e 3 i dati con il numero 21

const gatheredData = `${firstName}${lastName}${favouriteColour}21`;
console.log(gatheredData, typeof gatheredData);


// ? FASE OUTPUT

// 6. Inserisco il risultato nell'elemento del DOM

resultElement.innerText = `La tua nuova password è: ` + gatheredData;

