function generateScores() {
  // генератор массивов
  const scores = [];
  for (i = 0; i < 24; i++) {
    const score = Math.floor(Math.random() * 100) + 1;
    scores.push(score);
  }
  return scores;
}

const studentScores = generateScores();
console.log(studentScores);

// // function monkeySort (array) {
// // }
// function shuffleArray(array) {
//     for (i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
//   const myArray = [/* массив */];
//   shuffleArray(studentScores);
//   console.log('Перемешанный массив:', studentScores);

// function almostBubbleSort(array) {
//   // это без подсматриваний, работает, но вроде итераций много (100элементов 2500 итераций)
//   let iCounter= 0;
//   for (i = 0; array.length > i; i++) {

//     console.log(`_________новая итерация (## ${iCounter} ##)`);
//     console.log(`сравниваем пару ${array[i]} и ${array[i+1]}`);
//     console.log(`сравниваем индексы ${i} и ${i+1}`);

//     if (array[i] > array[i+1]) {

//       //console.log(`Массив в итерации ${iCounter} до перестановки: ${array}`)
//       console.log(`работаем с массивом: ${array}`)

//       let tempElement = array[i];
//       array[i] = array[i+1];
//       array[i+1] = tempElement;
//       //console.log(`Массив в итерации ${iCounter} после перестановки:${array}`)
//       console.log(`получился промежуточный массив: ${array}`)

//       i = -1;
//       iCounter++;
//     }

//   }
//   console.log(array)
// }

// almostBubbleSort(studentScores);

function realBubbleSort(array) {
  let iCounter = 0;
  for (i = 0; array.length > i; i++) {

    console.log(`_________новая итерация (## ${iCounter} ##)`);

    for (j = 0; array.length-i-1 > j; j++) {

      console.log(`сравниваем пару ${array[j]} и ${array[j + 1]}`);
      console.log(`сравниваем индексы ${j} и ${j + 1}`);

      if (array[j] > array[j + 1]) {

        console.log(`работаем с массивом: ${array}`);

        let tempElement = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempElement;

        console.log(`получился промежуточный массив: ${array}`);

        iCounter++;
      }

    }
  }
  console.log(array);
}

realBubbleSort(studentScores);

function isArraySorted(array) {
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  }

  console.log('<<<<< Массив отсортирован:', isArraySorted(studentScores));
