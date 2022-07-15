const vowels = ["a", "e", "i", "o", "u"];

console.log(
  "Hello! This is the code developed by Francisco Guzman for the Asistensi code challenge"
);
console.log("Below you will see the results of each of the exercises");

// ############# EXERCISE 1 #############
function filterByValue(arr, key) {
  if (arr.length > 0 && key) {
    return arr.filter((arrElem) => key in arrElem);
  } else {
    return;
  }
}

const resultExercise1 = filterByValue(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
    { first: "Colt", last: "Steele", isCatOwner: false },
  ],
  "isCatOwner"
);

console.log(
  "########################### EXERCISE 1 ########################### "
);
console.log("result 1:");
console.log(resultExercise1);

// ############# EXERCISE 2 #############

function find(arr, searchValue) {
  if (arr.length > 0) {
    return arr.find((arrElem) => arrElem === searchValue);
  } else {
    return undefined;
  }
}

console.log(
  "########################### EXERCISE 2 ########################### "
);

const result1Exercise2 = find([1, 2, 3, 4, 5], 3);
console.log("result 1:");
console.log(result1Exercise2);

const result2Exercise2 = find([1, 2, 3, 4, 5], 10);
console.log("result 2:");
console.log(result2Exercise2);

// ############# EXERCISE 3 #############

function findInObj(arr, key, searchValue) {
  if (arr.length > 0) {
    return arr.find((arrElem) => arrElem[key] === searchValue);
  } else {
    return;
  }
}

console.log(
  "########################### EXERCISE 3 ########################### "
);
console.log("result 1:");
console.log(
  findInObj(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
      { first: "Colt", last: "Steele", isCatOwner: false },
    ],
    "isCatOwner",
    true
  )
);

// ############# EXERCISE 4 #############

function removeVowels(str) {
  if (str.length > 0 && typeof str === "string") {
    const newString = [];

    str
      .toLowerCase()
      .split("")
      .forEach((char) => {
        if (vowels.every((vowel) => vowel !== char)) {
          newString.push(char);
        }
      });
    return newString.join("");
  } else {
    return;
  }
}

console.log(
  "########################### EXERCISE 4 ########################### "
);
console.log("result 1:");
console.log(removeVowels("Francisco"));
console.log("result 2: ");
console.log(removeVowels("Elie"));
console.log("result 3: ");
console.log(removeVowels("TIM"));

// ############# EXERCISE 5 #############

function doubleOddNumbers(arr) {
  if (arr.length > 0) {
    return arr.filter((arrElem) => arrElem % 2).map((arrElem) => arrElem * 2);
  } else {
    return [];
  }
}

console.log(
  "########################### EXERCISE 5 ########################### "
);
console.log("result 1:");
console.log(doubleOddNumbers([1, 2, 3, 4, 5]));
console.log("result 2: ");
console.log(doubleOddNumbers([4, 4, 4, 4, 4]));

// ############# EXERCISE 6 #############
//Not doing this exercise, since it is repeated. It is the same one as exercise 4
console.log(
  "########################### EXERCISE 6 ########################### "
);
console.log("exercise 6 is the same as exercise 4");

// ############# EXERCISE 7 #############

function extractKey(arr, key) {
  if (arr.length > 0) {
    return arr.map((arrElem) => arrElem[key]);
  } else {
    return;
  }
}
console.log(
  "########################### EXERCISE 7 ########################### "
);
console.log("result 1:");
console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);

console.log("result 2:");
console.log(
  extractKey(
    [
      { tipoPoliza: "100%" },
      { name: "Tim" },
      { tipoPoliza: "50%" },
      { name: "Colt" },
    ],
    "tipoPoliza"
  )
);

// ############# EXERCISE 8 #############
console.log(
  "########################### EXERCISE 8 ########################### "
);
console.log("exercise 8 is the same as exercise 7");

// ############# EXERCISE 9 #############

function vowelCount(str) {
  if (str.length > 0 && typeof str === "string") {
    const vowelCountObject = {};

    str
      .toLowerCase()
      .split("")
      .forEach((char) => {
        if (vowels.find((vowel) => vowel === char)) {
          vowelCountObject[char] = vowelCountObject[char]
            ? vowelCountObject[char] + 1
            : 1;
        }
      });

    return vowelCountObject;
  } else {
    return;
  }
}

console.log(
  "########################### EXERCISE 9 ########################### "
);
console.log("result 1: ");
console.log(vowelCount("Francisco"));
console.log("result 2: ");
console.log(vowelCount("Guzman"));
console.log("result 3: ");
console.log(vowelCount("ASISTENSI"));
console.log("result 4: ");
console.log(vowelCount("aAAlllllLLLLeeEEpppppiIkoiii"));

// ############# EXERCISE 10 #############

function hasNoDuplicates(arr) {
  if (arr.length > 0) {
    const arrayLength = arr.length;

    for (i = 0; i < arrayLength; i++) {
      for (l = i + 1; l < arrayLength; l++) {
        if (arr[i] === arr[l]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return true;
  }
}

console.log(
  "########################### EXERCISE 10 ########################### "
);
console.log("result 1:");
console.log(hasNoDuplicates([1, 2, 3, 2]));
console.log("result 2:");
console.log(hasNoDuplicates([1, 2, 3]));

// ############# EXERCISE 11 #############

function addKeyAndValue(arr, key, value) {
  if (arr.length >= 0) {
    return arr.map((arrElem) => {
      return { ...arrElem, [key]: value };
    });
  } else {
    return;
  }
}

console.log(
  "########################### EXERCISE 11 ########################### "
);
console.log("result 1: ");
console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "Instructor"
  )
);

// ############# EXERCISE 12 #############

function partition(arr, callback) {
  if (arr.length > 0) {
    const trueArray = [];
    const falseArray = [];
    arr.forEach((arrElem) => {
      if (callback(arrElem)) {
        trueArray.push(arrElem);
      } else {
        falseArray.push(arrElem);
      }
    });
    return [trueArray, falseArray];
  } else {
    return;
  }
}

function isEven(val) {
  return val % 2 === 0;
}

console.log(
  "########################### EXERCISE 12 ########################### "
);
console.log("result 1:");
console.log(partition([1, 2, 3, 4, 5, 6, 7, 8], isEven));

function hasVowels(val) {
  const stringLength = val.length;
  const loweredCaseString = val.toLowerCase();

  for (i = 0; i < stringLength; i++) {
    if (vowels.find((vowel) => vowel === loweredCaseString[i])) {
      return true;
    }
  }
  return false;
}
console.log("result 2:");
console.log(
  partition(
    [
      "Francisco",
      "fflasoo",
      "GUZMAN",
      "dlll",
      "pqpqlq12321",
      "ASISTENSI",
      "apple",
      "ppqqpplkkk123",
      "sotware",
    ],
    hasVowels
  )
);

// ############# EXERCISE 13 #############

function hasCertainKey(arr, key) {
  if (arr.length > 0) {
    return arr.every((arrElem) => key in arrElem);
  } else {
    return false;
  }
}

console.log(
  "########################### EXERCISE 13 ########################### "
);
console.log("result 1:");

console.log(
  hasCertainKey(
    [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
      { title: "Instructor", first: "Matt", last: "Lane" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "first"
  )
);

console.log("result 2:");
console.log(
  hasCertainKey(
    [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
      { title: "Instructor", first: "Matt", last: "Lane" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner"
  )
);
