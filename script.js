const deleteButtons = document.getElementsByClassName('x-button');

for (let x of deleteButtons) {
  x.addEventListener('click', deleteListElement);
  console.log('Event listener added to button');
}

function deleteListElement() {
  console.log('red');
  this.parentElement.parentElement.remove();
}
