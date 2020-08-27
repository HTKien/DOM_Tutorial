function makeRedColor() {
    document.getElementById('content').style.color = 'red';


}

function makeGreenColor() {
    document.getElementById('content').style.color = 'green';

}

function makeBlueColor() {
    document.getElementById('content').style.color = 'blue';

}

function changeText() {
    document.getElementById('content').innerHTML = 'HÀN TRUNG KIÊN';


}

function reset() {
    document.getElementById('content').style.color = 'black';
    document.getElementById('content').innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae in id ratione molestias asperiores, suscipit sunt sapiente veniam nostrum. Enim maxime non odio ipsam iste praesentium delectus quas dignissimos porro.';


}
document.getElementById('btn-red').onclick = makeRedColor;
document.getElementById('btn-green').onclick = makeGreenColor;
document.getElementById('btn-blue').onclick = makeBlueColor;
document.getElementById('btn-change-text').onclick = changeText;
document.getElementById('btn-reset').onclick = reset;