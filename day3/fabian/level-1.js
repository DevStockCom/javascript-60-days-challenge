const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born between 1500 and 1700

// const bornInventors = inventors.filter(inventor => {
//   if (inventor.year >= 1500 && inventor.year < 1700) {
//     return true; // means keep it!
//   }
// });

const inventorsBornDate = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1700));
console.table(inventorsBornDate);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names and create new property
// namely age which will indicate how many years they lived

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// const age = inventors.map(inventor => parseInt(`${inventor.passed - inventor.year}`));
// console.log(age);

// new array with calculated age property assigned to every inventor
// const inventorsNew = [];
// for (var i = 0; i < inventors.length; i++) {
//   inventorsNew.push({
//     first: inventors[i].first,
//     last: inventors[i].first,
//     age: parseInt(`${inventors[i].passed - inventors[i].year}`)
//   })
// }
// console.table(inventorsNew);

const inventorsNew = [];
for (var i = 0; i < inventors.length; i++) {
  inventorsNew.push({
    first: inventors[i].first,
    last: inventors[i].first,
    age: parseInt(`${inventors[i].passed - inventors[i].year}`)
  })
}
console.table(inventorsNew);


// Array.prototype.sort()
// 3. Sort the inventors by age, oldest to youngest
// tip: you have to calculate age at first

// const ordered = inventors.sort(function(a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventorsNew.sort((a, b) => a.age > b.age ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// var totalYears = 0;
// for (var i = 0; i < inventors.length; i++) {
//   totalYears += inventors[i].year
// }

// const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
const totalYears = inventorsNew.reduce((total, inventor) => total + inventor.age, 0);
console.log(totalYears);


// 5*. Sort the inventors by years lived  - task from the video, same as 3, bit different solution

// const oldest = inventorsNew.sort(function(a, b) {
//   const lastGuy = a.passed - a.year;
//   const nextGuy = b.passed - b.year;
//   // if (lastGuy > nextGuy) {
//   //   return -1;
//   // } else {
//   //   return 1;
//   // }
//   return lastGuy > nextGuy ? -1 : 1;
// });
// console.table(oldest);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// tip: at first grab this data and save here as an array(like investors)

// const category = document.querySelector('.mw-category');
// // const links = Array.from(category.querySelectorAll('a'));
// const links = [...category.querySelectorAll('a')];
//
//
// const de = links
//             .map(link => link.textContent)
            // .filter(streetName => streetName.includes('de'));

const boulevards = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"];

const de = boulevards.filter(name => name.includes('de'));
console.log(de);


// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {})

console.log(transportation);
