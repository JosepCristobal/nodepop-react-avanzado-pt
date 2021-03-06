# React avanzado v2

## Práctica de React avanzado (nodepop-react-avanzado)
### [Notas v2](https://github.com/JosepCristobal/nodepop-react-avanzado-pt#correcciones-en-la-versión-2)
## Objetivos   
En base a la práctica anterior de React Fundamentos, deberemos implementar REDUX y TESTING.

Para ver los requisitos y funcionalidades de práctica anterior, pongo el enlace al
[README.md](https://github.com/JosepCristobal/nodepop-react-pt/blob/master/README.md).

## Puesta en marcha del proyecto.  
En primer lugar, necesitamos instalar el proyecto de backend facilitado por nuestro instructor y su puesta en marcha.  
En segundo lugar, descargar este repo en una carpeta de nuestro ordenador y a través de una ventana de comandos, nos situamos en la carpeta raiz de nuestro progecto, donde se encuentra nuestro package.json y aplicamos el siguiente comando para instalar todas nuestras dependencias.   

	npm install

Este mismos paso sirve igual para el proyecto de backend.

Siguiente paso, **muy importante**, deberemos crear un fichero en la raiz de nuestro proyecto con el nombre .env y dentro crear la siguiente variable de entorno:

	REACT_APP_API_BASE_URL=http://localhost:3001

En nuestro caso, también valdría renombrar el fichero .env_example a .env.
Esta variable de entorno pertenece a la ruta donde se encuentra nuestro API (backend).


## Requisitos mínimos  

1. Configurar un store Redux donde se almacenará al menos la siguiente información:
	 * Información sobre la sesión o el usuario registrado en el sistema. Al iniciar la aplicación se deberá leer la información del usuario desde el LocalStorage y se almacenará en el store de Redux. Al hacer login un un usuario su información deberá guardarse en el store de Redux y en el Local Storage si se eligió recordar el login.
	 
	 * Información sobre los anuncios. El store deberá manejar la obtención de tags disponibles, de anuncios desde el API (listado y detalle), así como la creación y borrado de anuncios.
Será importante modelar correctamente el estado que se va a guardar en el store.

2. Crear las acciones y reducers necesarios para poder cumplir los objetivos del punto 1.
3. Conectar los componentes con el store de redux (connect / hooks).
4. Configurar Redux Dev Tools para simplificar las tareas de debugging de la aplicación.

5. Testing. Crear tests unitarios, dando al menos un ejemplo de cada uno de estos casos.
	* Una acción síncrona.
	* Una acción asíncrona.
	* Un reducer.
	* Un selector.
	* Un componente con snapshot testing.
	* Comprobar el funcionamiento de un componente que ejecuta una acción del store,
mockeando la acción.

## El proyecto, desarrollo paso a paso

1. Adaptamos el proyecto de react fundamentos al nuevo proyecto.
2. Creamos la carpeta store
3. Creamos dentro del store, types.js, actions.js, reducers.js y selectors.js
4. Instalamos redux en nuestro proyecto npm install redux
5. Instalamos npm install --save dev redux-devtools-extension
6. Instalamos redux-thunk
7. instalamos npm install connected-react-router
8. trabajamos en la carpeta store
9. importamos el store en el index de nuestra app "import configureStore from './store';"
10. Adaptamos el index.js principal
11. Redux devTools plug-in en el navegador Chrome.
12. Instalamos npm install redux-logger
13. Ceamos fichero index.js en carpeta api para hacer la exportación de toda la carpeta de una sola vez.
14. Borramos el context.js de auth ya que a partir de ahora no lo utilizaremos-
15. En App borramos todas las referencias al contexto.
16. En PrivateRoute borramos todas las referencias al contexto.
17. Ahora vamos al AuthButton.js.
18. Hasta ahora hemos utilizado el mapStateToProps y a en el paso 19 utilizaremos el mapDispatchToProps.
19. Estamos en LoginPage.js para el tema de la autenticación.
20. Completamos actions.js
21. Vamos al boton de logout en AuthButton.js para añadir el mapDispatchToProps
22. Solucionamos el login y los adverts con redux primera parte.
23. Redux Thunk instalamos npm install redux-thunk
24. Configuramos nuestro store para que acepte middleware. Importamos applyMiddleware from redux.
25. LLevamos la lógica de nuestro componente a actions con un middleware.
26. 1:42:26 del día 4
27. Instalamos npm install redux-logger
28. thunk with extra arguments en index.js
29. Dia 5 10'.
30. Aplicaremeos thunk en los adverts asincronía.
31. Creamos los Types correspondientes a Adverts.
32. Actions de Adverts.
33. Thunk de Adverts en actions.js advertsLoadAction 
34. Vamos a trbajar en el reducer.
35. Modificamos componente en AdvertsPage.js
36. En selector creamos getAdvertsLoaded para saber cuantos anuncios hemos cargado.
37. Empezaremos a gestionar los tags en el selector, ahora crearemos los types, actions y reducers.
38. Tags a redux thunk TagsAvailable funcionando.
39. Tags solo se cargan una vez. Solo en la primera carga.
40. Vamos a por los nuevos Anuncios NewAdvert.
41. En types creamos ADVERTS_CREATED_REQUEST ...SUCCESS ...FAILURE
42. Creamos las actions y el thunk advertCreatedAction.
43. Cremos en reducers en la sección de ui y en la de adverts.
44. vamos al componente.
45. Creamos nuevo anuncio con thunk.
46. Dia 5 2:05 Nos queda pendiente el detail.
47. Ahora abordamos el detalle de nuestros anuncios. En selectors getAdvertDetail.
48. Una vez creado el selector getTweetDetail vamos a nuestro componente para adaptarlo.
49. En dia 5 2:35:00 el detail está hecho con clases no con hook por lo que él utiliza connect . Lo intentaré hacer con hooks.
50. En types creamos ADVERTS_DETAIL_SUCCESS.
51. En actions creamos advertsDetailSuccess advertsDetailAction.
52. Completamos reducers.
53. Funcionando. Pero cuando ponemos la url directamente en el navegador con el id del anuncio, no funciona. Si lo hacemos por la aplicación, todo funciona correctamente.
54. Vamos a por el borrado del anuncio, con el procedimiento habitual. Redux thunk.
55. Completado el borrado. Repasamos todo el código a borrar.
56. Empezamos con los tests unitarios.
57. Creamos action.test.js.
58. Tenemos problemas para la puesta en marcha , tenemos el siguiente error:
            watchmanResponse: {
            error: 'resolve_projpath: path `/Users/jcm/Documents/BootCampWeb/11-React_Avanzado/React_Avanzado_PT/nodepop-react-avanzado/src`: open: /Users/jcm/Documents/BootCampWeb/11-React_Avanzado/React_Avanzado_PT/nodepop-react-avanzado/src: Operation not permitted',
             version: '4.9.0'
  }
59. Continuamos con los test e intentaremos solucionar el problema al final.
60. Test acción síncrona authLoginRequest y advertsLoadedSuccess.
61. Test acción asíncrona loginAction.
62. Otra alternativa coon redux mock store npm install redux-mock-store --save-dev.
63. Empezamos con los reducers y creamos reducers.test.js
64. Testeamos ADVERTS_LOADED_SUCCESS, ADVERTS_DETAIL_SUCCESS
65. Empezamos con los selectores. selectors.test.js
66. He conseguido hacer funcionar watchman. configuración y activar permiso den documentos.
67. yarn test -- --watchAll --coverage nos crea un folder en nuestro proyecto y posemos visualizar de forma gráfica el alcance de nuestros tests.
68. Pasamos a test de componentes.
69. Vamos a utilizar enzyme como librería de utilidades para renderizar nuestro componentes. npm install -save-dev enzyme
70. También instalamos una librería de adaptador de react-16 npm i --save-dev enzyme-adapter-react-16. Hemos tenido problemas con las dependencias, no creo que funcione correctamente
71. Componente con snapshot testing, utilizaremos enzyme. Creamos LoginForm.test.js
72. No puedo hacer el test, no consigo instalar esta versión de Enzyme en mi máquina. he encontrado una versión no oficial, pero prefiero no instalarla.
'@wojtekmaj/enzyme-adapter-react-17'; 
73. Al final lo he instalado añadiendo al final --legacy-peer-deps para que no tenga en cuenta las versiones.
74. AdvertDetailPage, exportamos la función para poder hacer un buen test.
75. Pasamos al snapshot de testing. Instalamos enzyme-to-json.
76. npm install --save-dev enzyme-to-json
77. Añadimos a nuestro package.json una nueva configuración de "jest:{snapshotSerializers :["enzime-to-json/serializer"]}
78. Pequeños ajustes en nuestro proyecto en la parte de test.
79. En los tests, tenemos un pequeño desajuste  que no hay forma de solventar. No nos reconoce .sort como una función.


 		TypeError: state.adverts.sort is not a function

     	2 |
      	3 | export const getAdverts = state => 
    	> 4 |     state.adverts.sort((t1, t2) =>{
        |                   ^
      	5 |         if(t1.updatedAt < t2.updatedAt) return 1;
      	6 |         return -1;
      	7 |     });

      	at getAdverts (src/store/selectors.js:4:19)
      	at Object.<anonymous> (src/store/selectors.test.js:10:22)     
      	
    
80. Pasamos a la entrega de la práctica porque se acerca la hora máxima y no damos con la solución.
81. **Todo Solucionado**. Después de recibir sugerencias de corrección por parte del formador, se procede a solucionar todo lo que no funcionaba de forma correcta.


## Conclusiones finales

Me repito y reitero mis conclusiones de la práctica anterior.

Creo que con este trabajo he intentado cubrir todos los requisitos mínimos que se pedían en el enunciado de la práctica y el esfuerzo que he dedicado ha estado compensado por todo lo que he aprendido y entendido. Esta práctica ha sido un gran reto para mi porque el mundo del frontend no lo había entendido hasta ahora y sobre todo React-Redux. Ahora empiezo a ver un poco la luz, pero todavía me queda muchísimo camino por recorrer.

Seguro que hay muchísimas cosas a mejorar, por esto espero tus comentarios.

Realmente ha sido una práctica muy interesante y me lo he pasado muy bien, aunque también he sufrido bastante, pero he aprendido mucho realizándola.

Muchas gracias David por todo.

Un placer!


## Correcciones en la versión 2
La primera entrega ha sido "NO APTO", en esta versión 2 se han corregido todos los errores que se reportarón y se han hecho pequeñas mejoras en redirección a páginas de error.  
		
1. No pasan algunos tests, los reducers ni los selectores. La forma del estado en los test no se adapta a lo que hacen los selectores en realidad.
	* Se ha revisado todo el código y se han corregido todos los errores en el test. Ahora los pasa todos de forma correcta.

	<p align="center">
	<img src="https://github.com/JosepCristobal/nodepop-react-avanzado-pt/blob/master/public/Tests.png?raw=true" alt="Tags disponibles" width="300"/>
	</p>
	
2. En el logout estás llamando directamente al api desde el componente. Mejor meter todo ese flujo en una acción y así los componentes no se preocupan más del api.
	* Refactorizado y funcionando.
3. Tienes un fallo al cargar el listado sin estar el usuario logueado, cosa que no debería ocurrir porque si no hay usuario esa ruta no debería ser accesible. Pero lo es y eso provoca un error al intentar renderizar AdvertsPage.
	* Refactorizado y funcionando de forma correcta.
4. Si refresco desde el detalle me cambia al listado.
	* Refactorizado y funcionando correctamente.



