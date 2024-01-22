function generateRandomScore() {
  return Math.floor(Math.random() * 101); // Генерация случайного числа от 0 до 100 feat gpt
}

function generateRandomData() {
  const names = [
    "John",
    "Alice",
    "Bob",
    "Eve",
    "Charlie",
    "Grace",
    "David",
    "Olivia",
  ];
  const hobbies = ["Reading", "Gaming", "Traveling", "Cooking", "Coding"];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];

  return {
    name: randomName,
    hobby: randomHobby,
    age: Math.floor(Math.random() * 30) + 20, // Генерация случайного возраста от 20 до 50 лет  feat gpt
  };
}

const dataArray = []; // рандомный массив, куда складываются рандомные люди-объекты

for (let i = 0; i < 20; i++) {
  const dataObject = {
    scorePoints: generateRandomScore(),
    ...generateRandomData(),
  };

  dataArray.push(dataObject);
}

console.log(dataArray);

let score = [];

const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

//пройдем по каждому игроку

for (i = 0; i < dataArray.length; i++) {
  //каждого игрока запишем отдельно в этом цикле
  let player = dataArray[i];

  for (key in player) {
    //возьмём у игрока только значение scorePoints и запишем его в массив score
    score.push(player.scorePoints);
    break;
    //console.log(player.scorePoints);
  }
}

console.log(score);

console.log("Максимальное значение очков:", Math.max(...score));
