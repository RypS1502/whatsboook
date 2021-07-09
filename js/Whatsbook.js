// Ingreso a la cuenta

let correos_telefonos = ['jinewo9051@ovooovo.com', 'gefeloh115@eyeremind.com', 'xedehe3408@godpeed.com', 'wobipe1171@godpeed.com', 'jolevov781@eyeremind.com', '914822597'];

let contraseñas = ['cONceScaTergENELablEgI', 'eDAYGVfpu', '4dRvt^j9K', 'V99iYHh^$HDV', 'awNEcTRA', 'lihGP$xJ'];


function validarContraseña(){

    let usuarioIngresado = document.getElementById('user').value;
    let contraseñaIngresada = document.getElementById('contraseña').value;
    let cuentaEncontrada = false;

    for(let i = 0; i < correos_telefonos.length; i++){
        if(usuarioIngresado == correos_telefonos[i] && contraseñaIngresada == contraseñas[i]){
            cuentaEncontrada = true;
        }else{}
    }

    if(cuentaEncontrada){
        alert('Bienvenido');
    }else{
        alert('El correo o contraseña ingresado es inválido o no existe');
    }
}

let ingreso = document.getElementById('btnEntrar');

ingreso.addEventListener('click', validarContraseña)

// Registro

let registrarse = document.getElementById('btnReg');
registrarse.addEventListener('click', registro);

function registro(){
    let camposFormulario = document.getElementsByClassName('inputs');
    let correcto = true;
    for(i in camposFormulario){
        if(camposFormulario[i].value == ""){
            correcto = false;
        }
    }
    if(correcto){
        alert('Te registraste con éxito');
    }else{
        alert('Parece que dejaste algunos campos vacios, por favor rellénalos')
    }
}