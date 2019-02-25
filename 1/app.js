// load "fs" module to variable FS (it has its own set of functions within it, somehow like a library)
// we're targeting "fs" via string name, if you were to load "gulp" then you should do something like this: 
// const gulp = require('gulp');
const FS = require('fs');

// readFileSync reads a file in a blocking way, but it returns a binary buffer - so to read it we have to convert it to string
const exampleFileText = FS.readFileSync('./example.txt').toString();
console.log(exampleFileText);

// similarly we can write a file (update one, or create a new one), similarly by passing a string name of the file
FS.writeFileSync('./example.txt', "2345678");

// but if we want to know the contents of the file after writing to it, we have to read it again, because `exampleFileText`
// already contains old value
console.log(exampleFileText);

const newExampleFileText = FS.readFileSync('./example.txt').toString();
console.log(newExampleFileText);

// readdir - first argument is path of the directory to read its contents
// second one is a callback, if everything goes well the first parameter which is error will be null 
// and the second paramerter of the callback will be the array of filenames 
FS.readdir('./', (error, arrayOfFileNamesInRequestedDirectory) => {
  if (error !== null) {
    console.log('oh darn!', error);
  } 

  arrayOfFileNamesInRequestedDirectory.forEach((fileName) => {
    // you can read info about a file with statSync -> it returns an object that has methods (functions)
    // which tell you stuff about this particular file
    const isDirectory = FS.statSync(fileName).isDirectory();

    // we can now see if a file is a dir
    console.log(`"${fileName}" exists and is ${(!isDirectory ? 'not': '')} a directory`);

    // longhand for (!isDirectory ? 'not': '')

    // let stringToPrint = '';
    // if (!isDirectory) {
    //   stringToPrint = 'not';
    // }
  });
});

const arrayOfImages = [];

// Progam który: 
// 1. Będzie miał podaną nazwę katalogu w którym ma zacząć szukać danego pliku (.jpg)
// 2. Będzie musiał odczytać zawartość podanego katalogu (czyli jakie pliki w nim są)
// 3. Sprawdzić, czy są w nim pliki o rozszerzeniu .jpg => jesli tak to dopisac je do tablicy
// 4. Sprawdzić, czy spośród plików które zostały wylistowane, są w nich jakieś katalogi => jeśli tak, wywołać na nich punkt 2.
// 5. Jeśli nie, to koniec programu, wyświetlamy tablicę 

// recurive programs, recurrence (rekurencja)
// it needs a place in which to stop

// function loop () {
//   if (warunek) {
//     console.log('xd');
//     loop();
//   }
// }
// loop();

// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

const extenstionToFind = '.jpg';
function findImageInFileSystem(directoryName) {

};

findImageInFileSystem('~/Downloads/');