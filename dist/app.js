var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var messages = 'Hello World';
console.log(messages);
function identity(arg) {
    return arg;
    /* /////////////////////////Plantilla que Permite crear arreglos ///////////////////////// */
}
var array = [1, 2, 3, 4, 5];
console.log(array);
var x = array[0], y = array[1], rest = array.slice(2);
console.log(x);
console.log(y);
console.log(rest);
/* //////// el agregar ... permite seleccionar los valores faltantes //////// */
var hello = "world"; //se recominda siempre definir el tipo de la variable
hello = "foo"; /*solo se permite cambiar variables como
let o var, const no puede ser cambiado*/
/* hello = true; da error porque solo se puede reasignar el mismo tipo
*/
//es mejor definir las funciones con la funcion flecha. ed2: se indica tambien el tipo para facilitar 
//su uso tanto en las entradas como en la salida
var getFullName = function (name, surname) {
    return name + " " + surname;
};
//los imput te indican el tipo
console.log(getFullName("Ruth", "Maurice"));
//el signo de pregunta indica que no es necesario incluir ese atributo
//por lo tanto ahora podemos aplicar 
var user1 = {
    name: "Ruth",
    age: 27,
    getMessage: function () {
        return "Hello" + name;
    }
};
//en este caso no indica que nos falta age
var user2 = {
    name: "Maurice",
    getMessage: function () {
        return "Hello" + name;
    }
};
//no es recomendable hacer muchas interfaces ya que hacen pesado el proyecto
//solo se recomienda hacer las minimas y necesarias
console.log(user1.name);
/* ////////////////////// Union Operator in TypeScript ////////////////////// */
//es el operador que une varios tipos para las variables
var username = "alex";
var pageName = '1';
//en el caso siguiente el valor por defecto en null, se recomienta 
//
var errorMessage = null;
var user3 = null;
var popularTags = ["dragon", "cafe"];
/* ////////////////////////////////// void ////////////////////////////////// */
//ts detecta por defecto si una funcion esta vacia por lo que indicara void
//tambien indicara esto si no puede leer el contenido
var doSomething = function () {
    console.log("doSomething");
};
/* /////////////////////////////////// any ////////////////////////////////// */
//any puede insertar cualquier tipo de datos, pero hay que usarlo con cuidado
/* ////////////////////////////////// never ///////////////////////////////// */
//una funcion que tenega never nunca puede ser ejecutada si esta al final del codigo
var doSomething1 = function () {
    throw "never"; //se agrega para que no tire error
    console.log("doSomething");
};
/* ///////////////////////////////// unknown //////////////////////////////// */
//es como any, puede aceptar cualquier tipo pero vali solo puede ser asignados a 
//variables que tambien sean unknow a diferencia de any
var vAny = 10;
var vUnknow = 10;
var s1 = vAny;
var s2 = vUnknow;
//agregando as string estamos asignanod ese unknow como un string
//no se puede asignar todas las variables entre si, primero requieren que se asigne
//como unknow
var pageNumber = "1";
var numericPageNumber = pageNumber;
//
/* ////////////////////////// trabajando sobre DOM ////////////////////////// */
//los dom es como interactuamos con el html, typescrip puede interactuar de muchas
//maneras con el dom
var someElement = document.querySelector(".foo"); //manera correcta
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName; //puedo cambiarlo aqui
    }
    User.prototype.changeUnchangableName = function () {
        //this.unchangableName = 'foo'//pero aca no se puede cambiar
    };
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50; //es de solo lectura y no es accesible salvo para leer
    return User;
}());
var user = new User('Ruth', 'Maurice');
console.log(user.getFullname); //el problema al hacer esto es que podemos obtener todos los elementos de la clase
//y eso no es deseable, para solucionar esto hay que asignar public,privated y protected
//por defecto siempre es public
//private solo deja usar dentro de la clase
//protected solo funciona con hijos directos
/* ////////////////////////////// clases extendidas ////////////////////////////// */
//permite usar clases pero agregarle propiedades
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('Foo', 'Bar');
console.log(admin.getEditor);
/* /////////////////////////// Generics Interfaces ////////////////////////// */
/* Genera una interfase que puede recibir un objeto y le asigna un id */
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
//esta interface genera un codigo alatoreo para colocarle id a los usuarios
var user6 = {
    name: 'Jack'
};
var result = addId(user6);
console.log("result", result);
