const butão = document.querySelector('button');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');

butão.addEventListener('click', remov);
b1.addEventListener('click', add)
b2.addEventListener('click', toggle)
//trocar nome
butão.addEventListener('click', switch_name)

function remov(e){
  console.log(e)
  document.querySelector('section').classList.remove('ocultar');
}

function add(f){
  console.log(f);
  document.querySelector('main').classList.add('add')

}

function toggle(g){
  console.log(g)
  document.querySelector('article').classList.toggle('toggle')
}

function switch_name(h){
  console.log(h)
  document.querySelector('button').innerText ="Ocultar o red";
}