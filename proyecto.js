//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar

do {
  var precio_base = 2000;

  //Valores de los recargos 
  var edad_18 = 0.1; // 10%
  var edad_25 = 0.2; // 20%
  var edad_50 = 0.3; // 30%

  var casado_18 = 0.1; // 10%
  var casado_25 = 0.2; // 20%
  var casado_50 = 0.3; // 30%

  var hijos_recargo = 0.2; // 20%

  //Recargos extra
  var recargo_propiedades = 0.35; // 35%
  var recargo_ingresos = 0.05; // 5%

  //Recargo
  var recargo = 0;
  var recargo_total = 0;
  var recargo_conyuge = 0;
  var recargo_hijos = 0;
  var cargopropiedades = 0;
  var cargoingresos=0;

  //Precio final 
  var precio_final = 0;


  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor");
  var edad = parseInt(prompt("¿Cuantos años tiene?", "Ingrese solamente números"));

  if(edad>=18){
  var casado = prompt("¿Está casado actualmente?", "Si/No");

  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  if(casado.toUpperCase()=="SI"){
    var edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?", "Ingrese solamente números"))
  };

  //Pide indicar si es que el cleinte/asegurado tiene hij@s o no 
  var hijos = prompt("¿Tiene hijos o hijas?", "Si/No");
  var cantidad_hijos=0;

  //Comprobamos la cantidad de hijos solamente si los tienen

  if(hijos.toUpperCase()=="SI"){
    cantidad_hijos = parseInt(prompt("¿Cuantos hijos o hijas tiene?", "Ingrese solamente números"))
  };

  //Pide indicar si es que el cliente/asegurado tiene propiedades o no
  var cantidad_propiedades=0;
  var propiedades = prompt("¿Tiene propiedades?", "Si/No");

  //En caso que indique que si tiene se le pedirá indicar cuántas propiedades tiene
  if(propiedades.toUpperCase()=="SI"){
    cantidad_propiedades = parseInt(prompt("¿Cuantas propiedades tiene?", "Ingrese solamente números"))
  };

  //Pide indicar cúal es su salario mensual
  var salario = parseInt(prompt("¿Cual es su salario mensual?"));

  //Aquí es donde debe de calcular los recargos y el valor final
  // 1. Recargo por edad del asegurado 
  if(edad>=18 && edad<25){
    recargo = precio_base * edad_18
    recargo_total += recargo
  } else if(edad>=25 && edad<50){
    recargo=precio_base*edad_25
    recargo_total+=recargo
  } else if(edad>=50){
    recargo=precio_base*edad_50
    recargo_total+=recargo
  };

 
  // 2. Recargo por la edad del conyuge
  if(edad_conyuge>=18 && edad_conyuge<25){
    recargo_conyuge=precio_base*casado_18
    recargo_total+=recargo_conyuge
  } else if(edad_conyuge>=25 && edad_conyuge<50){
    recargo_conyuge=precio_base*casado_25
    recargo_total+=recargo_conyuge
  } else if(edad_conyuge>=50){
    recargo_conyuge=precio_base*casado_50
    recargo_total+=recargo_conyuge
  };


  // 3. Recargo por la cantidad de hijos 
  if (cantidad_hijos>0){
    var recargo_hijos = 0;
    var i=1
    while(i<=cantidad_hijos){
      recargo_hijos+=precio_base*hijos_recargo;
      i++;
    }
    recargo_total+=recargo_hijos
  };


//4. Recargo basado en la cantidad de propiedades
 if(cantidad_propiedades>0){
  cargopropiedades=cantidad_propiedades*recargo_propiedades
  recargo_total+=cargopropiedades
 };

  // 5. Recargo basado en el salario del asegurado
  cargoingresos=salario*recargo_ingresos;
  recargo_total+=cargoingresos;

  precio_final = precio_base+recargo_total;
  //Resultado


  alert ("Para el asegurado "+nombre);
  alert ("El recargo total será de: "+recargo_total);
  alert ("El precio será de: "+precio_final);

} else{
  alert("Usted es menor de edad y no podemos tomar su caso")
}

  var seguir=prompt("¿Desea seguir con el programa? En caso que no desee seguir con el programa escriba Salir", "Si/Salir")
  //Seguir con la calculadora
} while (seguir.toUpperCase()==="SI");

alert("Nos vemos en la proxima :)")