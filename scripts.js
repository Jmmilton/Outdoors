// Function expression to select elements //

function selectElement(s) {
  return document.querySelector(s);
}

// open the menu on click//
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});

// close the menu on click//
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});
// close the menu on click!Anywhere!//
selectElement('.hero').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});

selectElement('.btn').addEventListener('click', () => {
  console.log('clicked');
});
