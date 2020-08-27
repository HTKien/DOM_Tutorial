// getElement by tagname
let tagObject = document.getElementsByTagName('p');
tagObject[1].style.color = 'red';
tagObject[0].style.fontSize = '50px';
tagObject[2].style.backgroundColor = 'green';

for (i = 0; i < tagObject.length; i++) {
    tagObject[i].style.backgroundColor = 'gray';
    if (i % 2 === 0) {
        tagObject[i].style.color = 'red';

    } else {
        tagObject[i].style.color = 'yellow';

    }


}
//getelement by class name:
let pOne = document.getElementsByClassName('p-one');
pOne[0].style.color = 'pink';

//get element by id:
let pTwo = document.getElementById('p-two');
pTwo.style.fontWeight = 800;
pTwo.style.fontSize = '80px';

//query selector:

let object = document.querySelector('p');

let objectAll = document.querySelectorAll('p');
console.log(object);
console.log(objectAll);
console.log(document.querySelector('.p-one'));
console.log(document.querySelector('#p-two'));


document.querySelector('div p span').style.color = 'red';
console.log(document.querySelector('.test'));
document.querySelector('.test').style.color = 'green';


//dom html:
console.log(document.getElementById('name').innerHTML);
console.log(document.getElementById('email').innerHTML);
console.log(document.querySelector('#name').innerText);
console.log(document.querySelector('#email').innerText);

console.log(document.getElementById('test-content').innerHTML);
console.log(document.getElementById('test-content').innerText);
console.log(document.getElementById('phone').getAttribute('name'));
console.log(document.getElementById('phone').getAttribute('number'));
console.log(document.getElementById('phone').getAttribute('kien'));
document.getElementById('phone').setAttribute('kien', 'kienkienkienkiienkiene');
console.log(document.getElementById('phone').getAttribute('kien'));

document.getElementById('phone').setAttribute('number', '04091998');
console.log(document.getElementById('phone').getAttribute('number'));

document.getElementById('email').innerHTML = 'Địa chỉ email: kien.ht162220@sis.hust.edu.vn';

document.getElementById('email').style.backgroundColor = 'white';
document.getElementById('email').style.color = 'blue';