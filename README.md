# WaifuTest
Explicación de como funcionan ciertos aspectos de nuestra app

## Cambio de pantallas

El `useState` más importante para esta función de la aplicación fue el lector `gameState` y el escritor `setGameState`.

En las páginas tanto de inicio como del quiz en sí, el botón para comenzar el quiz y el botón para finalizarlo tienen una propiedad `onPress`.
- En la pantalla de incio `StartQuizScreen.js` -> [onPress={() => (onStartGame(1))}](./screens/StartQuizScreen.js)
- En la pantala del quiz `QuizScreen.js` -> [onPress={() => (onCalculate(2))}](./screens/QuizScreen.js)

Que al activarse, evía un valor dependiendo de cada pantalla a `gameState` para que se despligue la pagina indicada.

## Componente genérico

Son componentes de React que podemos reutilizar vasias veces con distintos valores. En nuestra aplicación un componente genérico sería nuestro  `QuestionContainer.js `,
dentro de este componente definimos los estilos que queremos para el formato de las preguntas del quiz. 

De esta manera mportamos el componente al principio ene l codigo de nuestra pantalla del quiz 

[import QuestionContainer from "../components/QuestionContainer";](./screens/StartQuizScreen.js)

Esto va a hacer que las especificaciones de estilo se mantengan constantes
y no sea necesario especificarlos de nuevo para cada pregunta. 

## API
Lo que hace que nuestra aplicación pueda recibir datos de la API es uan función `fetch()` que solicita la información a través de un URL. 

Este URL incluye el `id` de las respuestas y una espcificación de que *response data* queremos; en nuestro caso el que utilizamos fue el de `animeCharacters` guardado en el apartado de ***relationships*** de la API.

Asi mismo utilizamos un `deserialise`que importamos de la biblioteca `kitsu core` perteneciente a la API para que cada entrada si contenga los datos que necesitamos y nos sea más facil acceder a dichos datos.

Para obtener el `id` que utilizará el URL, hicimos que primero se le asiganara un id a cada respuesta del quiz. Al terminar de contestar las preguntas los id de cada respuesta se concatenan
formando un número que será el nuevo `id`que utilizará la API para asignarle un anime y un personaje del mismo al usuario. 
