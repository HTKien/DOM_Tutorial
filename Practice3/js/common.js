function changeProductList(type, element) {
    let tabs = document.getElementsByClassName('tab-item');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.background = '#b14c38'
    }
    element.style.background = '#ee4d2d';
    switch (type) {
        case 'trend':
            document.getElementById('trend').style.display = 'block';
            document.getElementById('new').style.display = 'none';
            document.getElementById('best-sell').style.display = 'none';


            break;
        case 'new':
            document.getElementById('trend').style.display = 'none';
            document.getElementById('new').style.display = 'block';
            document.getElementById('best-sell').style.display = 'none';


            break;
        case 'best-sell':
            document.getElementById('trend').style.display = 'none';
            document.getElementById('new').style.display = 'none';
            document.getElementById('best-sell').style.display = 'block';


            break;

        default:
            break;
    }

}