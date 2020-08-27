document.getElementById('btn-show').onclick = function() {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let gender = document.querySelector('.gender:checked').value;

    if (name === '') {
        document.getElementById('error').innerHTML = 'Vui lòng nhập tên!';

    } else {
        document.getElementById('error').innerHTML = '';

    }


    document.getElementById('name-result').innerHTML = 'Xin chào ' + name + '!';
    document.getElementById('city-result').innerHTML = `Thành phố của bạn là:  ${ city }`;
    document.getElementById('gender-result').innerHTML = 'Giới tính của bạn là: ' + gender;



}