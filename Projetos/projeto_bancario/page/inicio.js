let saldo= document.getElementById('saldo');
let  usuario = JSON.parse(localStorage.getItem('usuario'))

function sair(){
    window.location.assign("/index.html");
    usuario = JSON.parse(localStorage.removeItem('usuario'));
}
console.log(usuario)
