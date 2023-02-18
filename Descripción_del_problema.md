# Descripción del problema

Una empresa de seguros llamada "TK-U" realiza cotizaciones para sus posibles clientes/asegurados, el cinconveniente radica en que estas cotizaciones son realizadas a mano por lo que esto limita en gran medida en su productividad y por ende en sus posibles ganancias. Es por ello que se le encargó realizar un cotizador automático para la empresa de seguros TK-U. 

*Para ello se le dan los siguientes requerimientos:*

- La persona a asegurar tiene que ser mayor de edad, por lo que no se considerarán los casos en los cuales esto no sea verdad.
- En caso de que ya tenga un plan base, a este se le aplicarán recargos extra dependiendo de las condiciones del asegurado. Las condiciones a considerar son: 
    1. Dependiendo de la edad del asegurado.
    2. Dependiendo de si el asegurado esta casado o no; y si lo esta se considerará la edad del conyuge. 
    3. Dependiendo de si el asegurado tiene hij@s o no; y si los tiene se considerará cuantos hij@s tiene.
    4. Dependiendo de si el asegurado tiene propiedades o no; y si las tiene se considerará cuantas propiedades tiene.
    5. Dependiendo de los ingresos mensuales del asegurado.
- En base a las condiciones anteriores, los recargos dados a las primeras dos condiciones son los siguientes rangos y recargos:
    1. Si tienen entre 18 y 24 años se les hará un recargo del 10% sobre el precio base.
    2. Si tienen entre 25 y 49 años se les hará un recargo del 20% sobre el precio base.
    3. Si tienen 50 o más años se les hará un recargo del 30% sobre el precio base.
Cada recargo se aplicará individualmente tanto al asegurado como al conyuge.
- En el caso de los recargos hechos hacia la cantidad de hij@s que tiene el cliente será del 20% por cada hijo.
- El recargo extra basado en la cantidad de propiedades que tiene será del 35% de la cotización por propiedad.
- El recargo basado en el salario del cliente y será del 5%.
- Al final de cada cotización se le pedirá al usuario que indique si desea continuar con las cotizaciones, en caso que no quiera seguir deberá de escribir la palabra "Salir" o en el caso que si desee seguir realizando cotizaciones deberá escribir "Si"
