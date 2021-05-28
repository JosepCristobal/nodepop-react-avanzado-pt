# React avanzado

## Práctica de React avanzado (nodepop-react-avanzado)

## Objetivos   
En base a la práctica anterior de React Fundamentos, deberemos implementar REDUX y TESTING.


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
