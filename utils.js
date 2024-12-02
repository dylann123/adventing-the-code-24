class array1d {
  static getIntDescending(array) {
    return array.sort((a, b) => b - a);
  }

  static getIntAscending(array) {
    return array.sort((a, b) => a - b);
  }

  static getAlphaAscending(array) {
    return array.sort();
  }

  static getAlphaDescending(array) {
    return array.sort().reverse();
  }

  static getAllWithValue(array, value) {
    return array.filter((item) => item === value);
  }

  static getStringArrayAsNumbers(array) {
    return array.map((item) => parseInt(item));
  }

  static getNumberArrayAsString(array) {
    return array.map((item) => item.toString());
  }
}

class array2d {
  static rotateClockwise(array) {
    return array[0].map((_, index) => array.map((row) => row[index]));
  }

  static rotateCounterClockwise(array) {
    return array[0].map((_, index) => array.map((row) => row[index]).reverse());
  }

  static flipHorizontally(array) {
    return array.map((row) => row.reverse());
  }

  static mirrorHorizontally(array) {
    return array.map((row) => row.slice().reverse());
  }

  static flipVertically(array) {
    return array.reverse();
  }

  static mirrorVertically(array) {
    return array.slice().reverse();
  }

  static convertToInt(array) {
    return array.map((row) => row.map((item) => parseInt(item)));
  }

  static getAllWithValue(array, value) {
    return array.filter((row) => row.includes(value));
  }
}

class convert {
  static getAsciiValue(char) {
    return char.charCodeAt(0);
  }

  static getCharFromAsciiValue(value) {
    return String.fromCharCode(value);
  }


}



export default { array1d, array2d, convert };