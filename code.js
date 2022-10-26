const cont = document.querySelector('#container')

for (let i = 0;i<8;i++){

const goose = document.createElement('div')


for(let i= 0;i<8;i++){
const foo = document.createElement('div')

foo.setAttribute('class','doris')
goose.appendChild(foo)

}
cont.appendChild(goose)
}

const foo = document.getElementsByClassName('doris')

for(let i = 0; i<foo.length; i++){
   foo[i].addEventListener('mouseover', 
function (){
foo[i].style.backgroundColor = 'black'


})
}





