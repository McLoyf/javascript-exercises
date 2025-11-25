let arr = [1, 2, 3];

function shuffle(arr){
    const min = 0;
    const max = 100;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    const decideFate = randomInteger % 3;
    arr.sort(() => Math.random() - 0.5 + (decideFate - 1) * 0.0001);
}

/*  My Answer above, I kinda figured there had to be a
    better way to do this but I liked the variable name
    decideFate but decided I should at least type out the 
    Fisher-Yates algorithm. What I ended up with seemed
    good until I copied and pasted the test written out.
    Spoiler, the Fisher-Yates algorithm is slightly more even probability wise.
*/

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

shuffle(arr);
console.log(arr);