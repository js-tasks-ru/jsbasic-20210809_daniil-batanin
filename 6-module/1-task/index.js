/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    let table = '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th><tr></thead><tbody>';
    for (let row of rows) {
      table += `<tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button class="delete">X</button></td>
      </tr>`;
    }
    table += '</tbody>';
    this.elem.innerHTML = table;
    this.elem.addEventListener('click', function(event) {
      if (event.target.closest('.delete')) {
        event.target.closest('tr').remove();
      }
    });
  }
  
}
