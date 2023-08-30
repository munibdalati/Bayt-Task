// 1
function all(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

function isLessThanSeven(number) {
  return number < 7;
}

var array = [12, 9];

var allAreLessThanSeven = all(array, isLessThanSeven);

console.log(allAreLessThanSeven);

// 2

function contains(obj, targetValue) {
    for (const key in obj) {
        if (obj[key] === targetValue) {
            return true;
        } else if (typeof obj[key] === 'object') {
            if (contains(obj[key], targetValue)) {
                return true;
            }
        }
    }
    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};

console.log(contains(nestedObject, 'foo2'));  // Output: true
console.log(contains(nestedObject, 44));      // Output: true
console.log(contains(nestedObject, 'bar'));  // Output: false

