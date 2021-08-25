function highlight(table) {
  let row = table.rows;
  let position = {
    name: 0,
    age: 1,
    gender: 2,
    status: 3
  }
  let attributeClass = {
    m: 'male',
    f: 'female',
    true: 'available',
    false: 'unavailable'
  }
  for (let i = 1; i < row.length; i++){
    let classGender = row[i].children[position.gender];
    let classAge = row[i].children[position.age];
    let classStatus = row[i].children[position.status];
    let parent = classGender.parentNode;

    parent.classList.add(attributeClass[classGender.innerHTML]);

    if(classAge.innerHTML < 18) {
      parent.setAttribute('style', 'text-decoration: line-through')
    }

    if (classStatus.hasAttribute('data-available')) {
      let dataAttribute = classStatus.getAttribute('data-available');
      parent.classList.add(attributeClass[dataAttribute]);
    } else {
      parent.hidden = true;
    }
  }
}
