const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

// 1. Filter all people born in the 1500s
const born1500s = inventors.filter(inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.table(born1500s);

// 2. Get inventors first and last name
const fullNames = inventors.map(
  inventor => `${inventor.first} ${""}${inventor.last}`
);
console.log(fullNames);

// 3.Sort inventors by their birthdate from oldest to youngest
const oldToYoung = inventors.sort((inventor1, inventor2) =>
  inventor1.year > inventor2.year ? 1 : -1
);
console.table(oldToYoung);

// 4. Total number of years lived by all invetors
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort inventors number of years lived
const yearsLived = inventors.sort((inventor1, inventor2) => {
  const a = inventor1.passed - inventor1.year;
  const b = inventor2.passed - inventor2.year;
  return a > b ? 1 : -1;
});
console.table(yearsLived);
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// 6. Sort people alphabetically by last name
const peopleOrder = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(" ");
  const [bLast, bFirst] = nextOne.split(" ");
  return aLast > bLast ? 1 : -1;
});

console.log(peopleOrder);
