// Homework 1
let users = [
  {
    id: 0,
    name: "Alex",
    age: 18,
    adress: {
      country: "America",
      city: "New York",
    },
  },
  {
    id: 1,
    name: "Alisa",
    age: 17,
    adress: {
      country: "America",
      city: "Michigun",
    },
  },
  {
    id: 2,
    name: "George",
    age: 22,
    adress: {
      country: "England",
      city: "London",
    },
  },
  {
    id: 3,
    name: "Michael",
    age: 20,
    adress: {
      country: "England",
      city: "Manchester",
    },
  },
  {
    id: 4,
    name: "Asadbek",
    age: 14,
    adress: {
      country: "Uzbekistan",
      city: "Samarkand",
    },
  },
  {
    id: 5,
    name: "Xurshed",
    age: 19,
    adress: {
      country: "Uzbekistan",
      city: "Tashkent",
    },
  },
];

let countries = [
  {
    name: "America",
    people: [],
  },
  {
    name: "England",
    people: [],
  },
  {
    name: "Uzbekistan",
    people: [],
  },
];

for (let i = 0; i < users.length; i++) {
  for (let k = 0; k < countries.length; k++) {
    if (users[i].adress.country == countries[k].name) {
      countries[k].people.push(users[i]);
    }
  }
}

console.log(countries);


// Homework 2
let arr = [4, 16, 19, 22, 11, 144, 967, 19124];
let toq = 0;
let juft = 0;

for (let check = 0; check < arr.length; check++) {
  if (arr[check] % 2 == 0) {
    juft++;
  } else {
    toq++;
  }
}

console.log('Juft raqamlar:',juft);
console.log('Toq raqamlar:',toq);