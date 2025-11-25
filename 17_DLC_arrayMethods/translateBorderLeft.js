function camelize(str){
    let arr = str.split('-');
    console.log(str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''));
}

camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');