/* 

API de almacenamiento web

Nos permite almacenar información en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesión (los datos son volátiles)

Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.

*/ 

/*
Almacenamiento local (localStorage)

La información que pongamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminada por código o borrada del navegador.

Casos de uso:
    - Artículos de un carrito de compras
    - Guardar un perfil de configuración
    - Historial de uso de una aplicación
*/

//Guardando mi primer dato en localStorage
//localStorage.setItem( key, value );
localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carro de compras
let carritoCompras = ["Sabritones", "Coca-Cola", "Chicles", "Tortillas"];
localStorage.setItem("Carrito de Compras", carritoCompras);

//Obtener la información almacenada en mi localStorage
//localStorage.getItem( key );
let apellido = localStorage.getItem("Apellido");
console.log(apellido);
//Recuperando el carrito de compras
let carrito = localStorage.getItem("Carrito de Compras");
console.log(carrito);

//Eliminando un elemento de localStorage
//localStorage.removeItem( key );
localStorage.removeItem("Carrito de Compras");

//Conocer el largo o longitud del localStorage
//localStorage.length
let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con setItem
localStorage.setItem("Apellido", "Gonzalez");