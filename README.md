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
46. Dia 5 2:05 Nos queda pendiente el detail.
47. Ahora abordamos el detalle de nuestros anuncios. En selectors getAdvertDetail.
48. Una vez creado el selector getTweetDetail vamos a nuestro componente para adaptarlo.
49. En dia 5 2:35:00 el detail está hecho con clases no con hook por lo que él utiliza connect . Lo intentaré hacer con hooks.
50. En types creamos ADVERTS_DETAIL_SUCCESS.
51. En actions creamos advertsDetailSuccess advertsDetailAction.
52. Completamos reducers.
53. Funcionando. Pero cuando ponemos la url directamente en el navegador con el id del anuncio, no funciona. Si lo hacemos por la aplicación, todo funciona correctamente.
53. Vamos a por el borrado del anuncio, con el procedimiento habitual. Redux thunk.
54. Completado el borrado. Repasamos todo el código a borrar.
55. Empezamos con los tests unitarios.
56. Creamos action.test.js.
57. Tenemos problemas para la puesta en marcha , tenemos el siguiente error:
            watchmanResponse: {
            error: 'resolve_projpath: path `/Users/jcm/Documents/BootCampWeb/11-React_Avanzado/React_Avanzado_PT/nodepop-react-avanzado/src`: open: /Users/jcm/Documents/BootCampWeb/11-React_Avanzado/React_Avanzado_PT/nodepop-react-avanzado/src: Operation not permitted',
             version: '4.9.0'
  }
58. Continuamos con los test e intentaremos solucionar el problema al final.
59. Test acción síncrona authLoginRequest y advertsLoadedSuccess.
60. Test acción asíncrona loginAction.
61. Otra alternativa coon redux mock store npm install redux-mock-store --save-dev.
62. Empezamos con los reducers y creamos reducers.test.js
63. Testeamos ADVERTS_LOADED_SUCCESS, ADVERTS_DETAIL_SUCCESS
64. Empezamos con los selectores. selectors.test.js
65. 
