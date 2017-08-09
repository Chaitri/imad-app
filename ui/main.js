console.log('Loaded!');
var element = document.getElementById('name');
element.innerHTML = 'Chaitri SM';
element.onClick = function() {
    element.style.marginLeft = '100px';
};