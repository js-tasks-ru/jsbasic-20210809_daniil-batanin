/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name == null) {
    return false;
  }
  let checkSpace = true;
  for (let char of name) {
      if (char == ' ') {
          checkSpace = false;
      }
    }
  return (name != '' && name.length >= 4 && checkSpace);
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
