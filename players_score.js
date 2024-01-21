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

for (i = 0; i < players.length; i++) {

  //каждого игрока запишем отдельно в этом цикле  
  let player = players[i];

  for (key in player) {
    //возьмём у игрока только значение scorePoints и запишем его в массив score
    score.push(player.scorePoints);
    break;
    //console.log(player.scorePoints);
  }
}

console.log(score);

console.log(Math.max(...score));