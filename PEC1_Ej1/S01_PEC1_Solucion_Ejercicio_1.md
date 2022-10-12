1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos).
- ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas

    Ayudan a definir la estructura del documento y permite que las páginas web sean mejor indexada en los buscadores

- Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.  
  - HTML Geolocation API: Se usa para obtener la situación actual del usuario que accede a la página.
  - HTML Web Worker API: Ayuda a cargar en Background el Javascript de la página sin afectar el rendimiento.
  - HTML Web Storage API: Se usa para guardar información en el navegador. Tiene la ventaja frente a las cookies tradicionales de poder guardar más cantidad de información y ésta se puede transferir al servidor.
- Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su  visualización en diferentes dispositivos (diferentes tamaños de pantalla).
  - Para conseguir esto, CSS3 nos ofrece los Media Queries que hace posible deifnir diferentes reglas de estilo para diferentes tipos de media.
- Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).
  - Nos permite definir el tipo de variable que vamos a usar (variables tipadas).
  - Definir datos públicos y privados en una clase.
  - El uso de decoradores (decorators) para añadir funcionalidad a un objeto de forma dinámica.
  - Uso de inyección de dependencias más sencillo.

2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)
- Cita al menos 2 de estos preprocesadores.
  - SASS.
  - LESS.
- Cita al menos 4 ventajas que ofrecen estos preprocesadores.
  - Facilitan la escritura y el mantenimiento de las hojas de estilos.
  - Uso de variables.
  - Reduce el código repetitivo.
  - Asegura la compatibilidad entre navegadores.
- Explica brevemente en qué consisten los sourcemaps.
  
  Normalmente los fuentes de Javascript que desarrollamos son transformados por los navegadores y el resultado difiere mucho del código original. El hacer debug de este código generado se convierte en una tarea muy complicada y para facilitar esta labor se crean los "source maps". Son ficheros que mapean el código transformado al código original así el navegador puede reconstruirlo y permite hacer debug sobre éste.
- Explica qué es un transpilador
  
  Un transpilador es un caso especial de compilador que traduce código entre dos lenguajes que están al mismo nivel. Por ejemplo, traducir de Java a Bytecode es compilar, traducir Typescript a Javascript sería una transpilación debido a que el primero es una variante del segundo.

1. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas
como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

- Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
  - Git.
  - Subversion
  - 
- Cita y explica al menos 3 comandos de Git
  - git init `<directorio>`: Crea un repositorio vacío en el directorio.
  - git log: muestra el historial de commits usando el formato por defecto.
  - git add `<directorio>`: Sube los cambios (stage) al directorio para el siguiente commit. 
- Cita y explica brevemente las características más definitorias de WebPack.
  - 

