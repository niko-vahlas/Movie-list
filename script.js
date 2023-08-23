const deleteButtons = document.getElementsByClassName('x-button');

for (let x of deleteButtons) {
  x.addEventListener('click', deleteListElement);
}

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addMovie);

function deleteListElement() {
  this.parentElement.parentElement.remove();
}

function addMovie() {
  const moviespace = document.getElementById('add-movie-field');
  const textValue = moviespace.value;
  if (textValue === '') {
    alert('Please input a name');
  } else {
    const elementList = document.getElementsByClassName('movie--list__entry');
    const elementToClone = elementList[0];
    const clonedLi = elementToClone.cloneNode(true);
    const child = clonedLi.children[0];
    const grandchild = child.children[0];
    grandchild.innerHTML = `${textValue}`;
    const movieList = document.getElementById('movie--list');
    const clonedDeleteButton = clonedLi.getElementsByClassName('x-button')[0];
    clonedDeleteButton.addEventListener('click', deleteListElement);
    movieList.appendChild(clonedLi);
  }
}
