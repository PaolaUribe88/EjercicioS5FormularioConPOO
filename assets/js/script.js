//VARIABLES GLOBALES
//OBJETO que conta de los siguientes atributos
var persona ={
    //PROPIEDADES/ATRIBUTOS
    nombre : '',
    apellido: '',
    email: '',
    telefono: '',
    //METODOS/ACCIONES O COMPROTAMIENTOS
    // metodos deben tener vervos en infinitivo ar er ir
    saludar: function(){
        let mensaje =`Hola mi nombre es:  ${this.nombre} ${this.apellido}, gusto en Saludarte`;
        return mensaje;

    },
    proporcionarDatosContacto: function(){
        let datosContacto = ` Mis Datos de Contacto son: mi correo ${this.email}, mi numero de telefono  ${this.telefono}, no dudes en contactarme `;
        return datosContacto;

    },
    // si se quiere seguir agregando metodos se pone coma, 
    //si se termina con los metodos punto y coma;


};//instruccion
function asignarDatosAlObjeto(unNombre, unApellido, unEmail, unTelefono){
    persona.nombre = unNombre;
    persona.apellido = unApellido;
    persona.email = unEmail;
    persona.telefono = unTelefono;

}

function atraparDatosF(){
    // alert ('funciona el boton');
    //creamos las variables de los inputs del formulario
    let elNombre = document.getElementById('nombre').value;
    let elApellido = document.getElementById('apellido').value;
    let elEmail = document.getElementById('email').value;
    let elCelular = document.getElementById('txtCelular').value;

    //ASIGNAR DATOS ATRAPADOS DEL FORM AL OBJETO

    asignarDatosAlObjeto(elNombre, elApellido,elEmail,elCelular);

}
function presentarInformacion(){
    let elParrafoSaludo = document.getElementById('parrafoSaludo');
    elParrafoSaludo.innerText= persona.saludar();

    let elParrafoContacto = document.getElementById('parrafoContacto');
    elParrafoContacto.innerText = persona.proporcionarDatosContacto();
}

function asignarEventos(){
    //creamos una variable con el que manipulamos el elemento del dom llamado btnEnviar
    let elBoton = document.getElementById('btnEnviar');
    //este boton le asignamos un evento que es al hacer click atrapaDatos
    elBoton.addEventListener('click', atraparDatosF);

    let elBotonMostra = document.getElementById('btnMostrarDatos');
    elBotonMostra.addEventListener('click', presentarInformacion);
}