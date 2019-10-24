const popup = document.querySelector('.pop-up-container');
const notif1 = document.querySelector('.pop-up-group1 button');
const notif2 = document.querySelector('.pop-up-group2 button');
const message1 = document.querySelector('.pop-up-group1');
const message2 = document.querySelector('.pop-up-group2');
const dropdownList = document.querySelector('.dropdown');

popup.style.display = 'none';

bell.addEventListener('click', () => {
  popup.style.display = 'block';
});

notif1.addEventListener('click', () => {
  message1.style.display = 'none';
});

notif2.addEventListener('click', () => {
  message2.style.display = 'none';
});


const array = document.querySelectorAll('#myList option');

const timeZoneList = document.getElementById('myList');
timeZoneList.addEventListener('click', (event) => {
  let currentArea = event.target.value;
  for ( let i =0; i<array.length; i++ ) {
    let currentOption = array[i];
    if ( currentArea == currentOption.value ) {
      console.log(currentOption);
      localStorage.setItem('location', currentOption);
      console.log(localStorage.getItem('location'));
    }
  }
});
