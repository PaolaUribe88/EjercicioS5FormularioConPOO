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
//OBJETO LIBRO
var libro ={
    nombreLibro:'',
    autorLibro:'',
    editorialLibro:'',
    paginasLibro:'',
    
    mostrarDatosLibros: function(){
        let datoLibro =`El titulo del libro es ${this.nombreLibro}, el autor es ${this.autorLibro}, su editorial es ${this.editorialLibro} y su cantidad de paginas son ${this.paginasLibro}`
        return datoLibro;
    },

}
function asignarDatosAlObjeto(unNombre, unApellido, unEmail, unTelefono){//ASIGNACION DE LA PERSONA
    persona.nombre = unNombre;
    persona.apellido = unApellido;
    persona.email = unEmail;
    persona.telefono = unTelefono;

}
function asignarDatosAlObjetoLibro(unNombre, unAutor, unaEditorial, unasPaginas){//ASIGNACION DEL LIBRO
    libro.nombreLibro = unNombre;
    libro.autorLibro = unAutor;
    libro.editorialLibro = unaEditorial;
    libro.paginasLibro = unasPaginas;
}


function atraparDatosF(){ //ATRAPA DATOS DEL FORMULARIO
    // alert ('funciona el boton');
    //creamos las variables de los inputs del formulario
    let elNombre = document.getElementById('nombre').value;
    let elApellido = document.getElementById('apellido').value;
    let elEmail = document.getElementById('email').value;
    let elCelular = document.getElementById('txtCelular').value;

    //ASIGNAR DATOS ATRAPADOS DEL FORM AL OBJETO

    asignarDatosAlObjeto(elNombre, elApellido,elEmail,elCelular);

}
function atraparDatosLibro(){ //ATRAPA DATOS DEL LIBRO
    // alert ('funciona el boton');
    //creamos las variables de los inputs del formulario
    let elNombreLibro = document.getElementById('nombreLibro').value;
    let elAutorLibro = document.getElementById('autorLbro').value;
    let laEditorial = document.getElementById('editorial').value;
    let lasPaginas = document.getElementById('txtPag').value;

    //ASIGNAR DATOS ATRAPADOS DEL FORM AL OBJETO

    asignarDatosAlObjetoLibro(elNombreLibro, elAutorLibro, laEditorial, lasPaginas);

}
function presentarInformacion(){ //PRESENTA INFORMACION PERSONA
    let elParrafoSaludo = document.getElementById('parrafoSaludo');
    elParrafoSaludo.innerText= persona.saludar();

    let elParrafoContacto = document.getElementById('parrafoContacto');
    elParrafoContacto.innerText = persona.proporcionarDatosContacto();
    

}
function presentarInformacionLibro(){// PRESENTA INFORMACION LIBRO
    let elParrafoLibro = document.getElementById('parrafoLibro');
    elParrafoLibro.innerText= libro.mostrarDatosLibros();
}
function asignarEventos(){
    //creamos una variable con el que manipulamos el elemento del dom llamado btnEnviar
    let elBoton = document.getElementById('btnEnviar');
    //este boton le asignamos un evento que es al hacer click atrapaDatos
    elBoton.addEventListener('click', atraparDatosF);

    let elBotonMostra = document.getElementById('btnMostrarDatos');
    elBotonMostra.addEventListener('click', presentarInformacion);

    let elBotonLibro = document.getElementById('btnEnviarL');
    elBotonLibro.addEventListener('click', atraparDatosLibro );

    let elBotonMostrarLibro = document.getElementById('btnMostrarDatosLibro');
    elBotonMostrarLibro.addEventListener('click',presentarInformacionLibro )
}