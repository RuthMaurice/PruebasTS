let messages: string = 'Hello World';
console.log(messages);

function identity<T>(arg: T): T{

    return arg;
/* /////////////////////////Plantilla que Permite crear arreglos ///////////////////////// */
}

var array=[1,2,3,4,5];
console.log(array);
var [x,y, ...rest] = array;
console.log(x);
console.log(y);
console.log(rest);

/* //////// el agregar ... permite seleccionar los valores faltantes //////// */
let hello: string = "world"; //se recominda siempre definir el tipo de la variable
hello = "foo";/*solo se permite cambiar variables como
let o var, const no puede ser cambiado*/
/* hello = true; da error porque solo se puede reasignar el mismo tipo
*/

//es mejor definir las funciones con la funcion flecha. ed2: se indica tambien el tipo para facilitar 
//su uso tanto en las entradas como en la salida
const getFullName = (name: string,surname: string): string => {
    return name + " " + surname;
};
//los imput te indican el tipo
console.log(getFullName("Ruth","Maurice"));


/* ///////////////////////////// Creando Objetos //////////////////////////// */

//si ponemos le cursor sobre user nos dira que tipo de info acepta
//el indicar los tipos que debemos ingresar es importante notar que
//si creamos un objeto similar nos dira que tipo de info falta
/*const user:{name:string;age:number} = {
    name: "Ruth",
    age: 27
};
//en este caso no indica que nos falta age
const user2:{name:string;age:number} ={
    name: "Maurice",
};

/* /////////////////////////////// Interfaces /////////////////////////////// */
//permiten crear objetos con facilidad
// se instalo un plugin para que VSCode autocomplete

interface UserInterface {
   name:string;
   age?: number; 
   getMessage(): string;
}
//el signo de pregunta indica que no es necesario incluir ese atributo
//por lo tanto ahora podemos aplicar 
const user1: UserInterface = {
    name: "Ruth",
    age: 27,
    getMessage(){
        return "Hello" + name;
    },
};
//en este caso no indica que nos falta age
const user2: UserInterface  ={
    name: "Maurice",
    getMessage(){
        return "Hello" + name;
    },
};
//no es recomendable hacer muchas interfaces ya que hacen pesado el proyecto
//solo se recomienda hacer las minimas y necesarias
console.log(user1.name);

/* ////////////////////// Union Operator in TypeScript ////////////////////// */
//es el operador que une varios tipos para las variables
let username: string = "alex";

let pageName: string | number = '1';
//en el caso siguiente el valor por defecto en null, se recomienta 
//
let errorMessage: string | null = null;

interface UserInterface1 {
    name: string
    surname: string
}
let user3: UserInterface1 | null = null;

/* ////////////////////////////////// Alias ///////////////////////////////// */
/* /////////////////// permiten crear tipos personalizados ////////////////// */
type ID = string;
type PopularTag = string;

interface UserInterface2 {
    id: ID
    name: string
    surname: string
}

const popularTags: PopularTag[] = ["dragon","cafe"];


/* ////////////////////////////////// void ////////////////////////////////// */
//ts detecta por defecto si una funcion esta vacia por lo que indicara void
//tambien indicara esto si no puede leer el contenido
const doSomething = ():void => {
    console.log("doSomething")
};
/* /////////////////////////////////// any ////////////////////////////////// */
//any puede insertar cualquier tipo de datos, pero hay que usarlo con cuidado

/* ////////////////////////////////// never ///////////////////////////////// */
//una funcion que tenega never nunca puede ser ejecutada si esta al final del codigo

const doSomething1 = ():never => {
    throw "never"//se agrega para que no tire error
    console.log("doSomething")
};

/* ///////////////////////////////// unknown //////////////////////////////// */
//es como any, puede aceptar cualquier tipo pero vali solo puede ser asignados a 
//variables que tambien sean unknow a diferencia de any

let vAny: any = 10;
let vUnknow: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknow as string;
//agregando as string estamos asignanod ese unknow como un string
//no se puede asignar todas las variables entre si, primero requieren que se asigne
//como unknow
let pageNumber:string = "1";
let numericPageNumber: number = pageNumber as unknown as number;
//

/* ////////////////////////// trabajando sobre DOM ////////////////////////// */
//los dom es como interactuamos con el html, typescrip puede interactuar de muchas
//maneras con el dom
const someElement = document.querySelector(".foo") as HTMLInputElement;//manera correcta
//selecciona el primer elemento que coincida con esa clase
//si este elemento era un imput y queremos obtener el valor tendremos unn roiblema
//estp es porque ts nos genera el tipo elemento que no soporta que lo manejen como
//una entrada, para solucionar esto hay que combertirlo del tipo elemento a entrada html

//console.log("someElement",(someElement as any).value);//manera incorrecta
//console.log("someElement", someElement.value);
/* ///////////////////////////// Event listener ///////////////////////////// */
//someElement.addEventListener(type,listener) es una funcion que se ejecutara al
//sucederse el eveneto en cuestion
//someElement.addEventListener('blur', (event) =>{
//    const target = event.target as HTMLInputElement;
//    console.log('event', target.value);
//})

/* /////////////////////////////// TS classes /////////////////////////////// */
/*Sirven para trabajar junto a los prototipos */
interface UserInterfaceC {
    getFullName():string;
}

class User  {//puedo implementar interfaces de esta manera
    firstName: string
    lastName: string
    readonly unchangableName: string//es de solo lectura
    static readonly maxAge = 50//es de solo lectura y no es accesible salvo para leer

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
        this.unchangableName = firstName //puedo cambiarlo aqui
    }

    changeUnchangableName():void{
        //this.unchangableName = 'foo'//pero aca no se puede cambiar
    }

    getFullname(): string {
        return this.firstName + ' ' + this.lastName
    }
}

const user = new User('Ruth', 'Maurice');
console.log(user.getFullname)//el problema al hacer esto es que podemos obtener todos los elementos de la clase
//y eso no es deseable, para solucionar esto hay que asignar public,privated y protected
//por defecto siempre es public
//private solo deja usar dentro de la clase
//protected solo funciona con hijos directos

/* ////////////////////////////// clases extendidas ////////////////////////////// */
//permite usar clases pero agregarle propiedades
class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin('Foo', 'Bar');
console.log(admin.getEditor)

/* /////////////////////////// Generics Interfaces ////////////////////////// */
/* Genera una interfase que puede recibir un objeto y le asigna un id */
const addId = <T>(obj: T) => {//indica que sera un dato generico, evita problemas de tipo
    //genera un arreglo de tipos para todo lo que se ingrese
    const id = Math.random().toString(16)
    return {
        ...obj,
        id,
    };
};
//esta interface genera un codigo alatoreo para colocarle id a los usuarios

const user6 = {
    name: 'Jack',
};

const result = addId(user6);
console.log("result", result)

/* /////////////////////////////// Enumeracion ////////////////////////////// */
const statuses = {
    notStarted:0,
    inProgress: 1,
    done: 2,
};
console.log(statuses.inProgress);

//enum permite crear enumeraciones, los contenidos dentro se enumeran automaticamente
//los valores se incrementaran desde 0
enum Status {
    NotStarted,
    InProgress,
    Done
}
//si hacemos esto solo podremos asignarle valores que tenga Status
const notStartedStatus: Status = Status.NotStarted;
console.log(Status.InProgress);