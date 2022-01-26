const rotor = [0, 0, 0];
const seed = [
  'q', 'w', 's', 'a', 'z', 'x',
  'e', 'r', 'f', 'd', 'c', 'v',
  't', 'y', 'h', 'g', 'b', 'n',
  'u', 'i', 'k', 'j', 'm', 'o',
  'p', 'l',
];
const alpha = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z',
];

// крутим ротор
function rotate(arr) {
  const letter = arr.pop();
  arr.unshift(letter);
  return arr;
}

// зашифровка
function oneInput(letter) {
  const index = alpha.indexOf(letter, 0);
  const crypt = seed[index];
  rotate(seed);
  if (rotor[0] < 26) {
    rotor[0] += 1;
  } else {
    rotor[0] = 0;
    if (rotor[1] < 26) {
      rotor[1] += 1;
    } else {
      rotor[1] = 0;
      if (rotor[2] < 26) {
        rotor[2] += 1;
      } else {
        rotor[2] = 0;
        if (rotor[3] < 26) {
          rotor[3] += 1;
        } else {
          rotor[3] = 0;
          rotor[0] = 0;
        }
      }
    }
  }
  return crypt;
}

// расшифровка
function oneInputReverse(letter) {
  const index = seed.indexOf(letter, 0);
  const crypt = alpha[index];
  rotate(seed);
  if (rotor[0] < 26) {
    rotor[0] += 1;
  } else {
    rotor[0] = 0;
    if (rotor[1] < 26) {
      rotor[1] += 1;
    } else {
      rotor[1] = 0;
      if (rotor[2] < 26) {
        rotor[2] += 1;
      } else {
        rotor[2] = 0;
        if (rotor[3] < 26) {
          rotor[3] += 1;
        } else {
          rotor[3] = 0;
          if (rotor[4] < 26) {
            rotor[4] += 1;
          } else {
            rotor[4] = 0;
            rotor[0] = 0;
          }
        }
      }
    }
  }
  return crypt;
}

// вводим слово
function wordInput(word, func) {
  const arr = word.split('');
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(func(arr[i]));
  }
  return result.join('');
}

// вводим значения роторов и прокручиваем arr = [1, 2, 3]
function setRotor(arr) {
  const number = arr[2] * 27 * 27 + arr[1] * 27 + arr[0];
  for (let i = 0; i < number; i += 1) {
    rotate(seed);
    if (rotor[0] < 26) {
      rotor[0] += 1;
    } else {
      rotor[0] = 0;
      if (rotor[1] < 26) {
        rotor[1] += 1;
      } else {
        rotor[1] = 0;
        if (rotor[2] < 26) {
          rotor[2] += 1;
        } else {
          rotor[2] = 0;
          if (rotor[3] < 26) {
            rotor[3] += 1;
          } else {
            rotor[3] = 0;
            if (rotor[4] < 26) {
              rotor[4] += 1;
            } else {
              rotor[4] = 0;
              rotor[0] = 0;
            }
          }
        }
      }
    }
  }
  return rotor;
}
