preguntaUser=true
while(preguntaUser){
    let respuesta=prompt("1.predice el resultado\n2.respuesta real ajustando el codigo\nsalir")
    if (respuesta=="1"){
        // Predicción del Usuario
        var predA = prompt("Predice el valor de 'a' después de su declaración:");
        var predB = prompt("Predice el valor de 'b' después de su declaración:");
        var predC = prompt("Predice el valor de 'c' después de su declaración:");
        var predFuncDeclarada = prompt("Predice el resultado de 'funcionDeclarada()':");
        var predFuncExpresada = prompt("Predice el resultado de 'funcionExpresada()':");

        console.log("Valor de a:", a);
        console.log("Valor de b:", b);
        console.log("Valor de c:", c);
        console.log("Resultado de funcionDeclarada:", funcionDeclarada());
        console.log("Resultado de funcionExpresada:", funcionExpresada());

        // Variables y Funciones
        var a = 1;
        let b = 2;
        const c = 3;

        function funcionDeclarada() {
            return "Función declarada ha sido llamada.";
        }

        const funcionExpresada = function () {
            return "Función expresada ha sido llamada.";
        };

    }else if(respuesta=="2"){
        resultadoReal()
        // Explicación del Comportamiento del Hoisting
        console.log("Explicación del Comportamiento del Hoisting:");
        console.log("Las variables declaradas con 'var' se inicializan con undefined y las funciones declaradas con su definición completa. Sin embargo, las variables 'let' y 'const' no se inicializan hasta su declaración, por lo que cualquier intento de acceso antes de la declaración resultará en un error.");
    }
    else{
        preguntaUser=false
    }

}


// Resultado Real
function resultadoReal() {
    // vars declaration
    var a = 1;
    let b = 2;
    const c = 3;
    // vars call
    console.log("Valor de a:", a);
    console.log("Valor de b:", b);
    console.log("Valor de c:", c);
  
    // functions call
    console.log("Resultado de funcionDeclarada:", funcionDeclarada());
  
    const funcionExpresada = function () {
      return "Función expresada ha sido llamada.";
    };
    console.log("Resultado de funcionExpresada:", funcionExpresada());
  
    // functions declarations
    function funcionDeclarada() {
      return "Función declarada ha sido llamada.";
    }
  
  }