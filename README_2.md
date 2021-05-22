1 Ejecutamos coamndo para generar proyecto  npx create-react-app nodepop-react-pt el nombre de la carpeta no admite mayúsculas.

2 Nos situamos en el directorio que nos ha generado  cd nodepop-react-pt y ejecutamos el npm install y npm start.

3 Podemos ver la página principal que nos viene por defecto.

4 Vamos a limpiar carpetas de ejemplos que no son necesarios.

5 Empezamos por el src/index.js

6 Borramos reportWebVitals y logo.

7 Creamos utils/storage.js para controlar el local storage, de momento para gestionar el token.

8 Instalando react-router-dom.

9 Creamos src/api/client.js que nos permitirá acceder a la API rest que nos gestionará la utenticación y obtención de token.

10 Generamos un fichero .env para guardar variables de entorno.

11 Instalamos el paquete de axios que nos permite gestionar la llamadas al API.

12 Vamos a preparar el backend para poder empezar a trabajar con él. A partir de ahora es importante tener algún dato de prueba.

13 Instalado el backend nodepop-api y ejecutamos el proyecto y funciona.

14 Introducimos datos de usuario a través de swagger y también hacemos la prueba con Postman.

15 Ya tenemos nuetro backend a punto para empezar a desarrollar nuestro front.

16 Volvemos a nuestro proyecto de front y vamos a utilizar el contexto para la verificación y gestión de usuarios autenticados.

17 Creamos en src/components/auth/context.js que en App.js envolveremos todas nuestras páginas en este componente.

18 En App importamos react-router-dom y prop-types para navegar entre rutas y verificar tipos de datos tratados, respectivamente.

19 Creando la LoginPage en components/auth/LoginPage y sus dependencias.

20 Guardando token en el local storage.

21 Creando index.js de exportación por folders.

22 En components/shared creamos los componentes que nos harán falta en nuestros formularios. Inicialmente en el de login.

23 Creados Button.js , FormField.css, FormField.js e index.js

24 Creamos hooks personalizados en src/hooks/useForm.js

25 Modificamos el App.js para marcar las rutas del 404 y Login de momento.

26 Instalando styled-components.

27 Instalamos propy-types y date-fns classnames.

28 Creamos el /utils/FormField.js

29 Ya tenemos nuestra primera vesión de formulario de Login.

30 Implementando el checkbox y controlar su valor a través del hook personalizado useForm.js

31 Se implementa en una sola función handleChange de nuestro hook personalizado.

32 Controlamos el guardar o no en el local storage el token resultante de la validación. Lo controlamos en el auth.js a través de credentials.

33 Creamos y empezamos a utilizar el PrivateRoute. Lo utilizamos para gestionar si estás autenticado y a que páginas puedes acceder con o sin autenticatión.

34 Vamos ha crear las carpetas y la gestión del Layout.

35 Inicialmente adaptaremos el Layout del ejercicio de clase para nuestra práctica y si sobra tiempo, lo personalizaremos un poco más.

36 Empezamos a crear estructura de carpetas para los anuncios (adverts) en components/adverts.

37 Empezamos con el Layout. Creamos la carpeta AuthButton en auth/ con ello podremos acceder a autenticarnos o desautenticar.

38 Ahora vamos a construir la visualización de anuncios y vamos a utilizar la misma estructura que se ha utilizado en clase con los tweets.

39 Dentro de adverts/AdvertsPage creamos Advert.js, AdvertList.js, AdvertPage.js con los css correspondientes.

40 Creamos en api la llamada y gestión de adverts.

41 En Shared creamos Photo.js

42 Creamos el detalle en AdvertDetailPage.js cogiendo como muestra el ejercicio realizado en clase.

43 También hemos creado el AdertDetailPageHook que es lo mismo que la anterior pero en lugar de utilizar clases, hemos utilizado hooks.

44 Como estamos creando el esqueleto de nuestra aplicación y dando funcionalidad mínima a todo, ahora vamos a la creación de un nuevo anuncio.

45 Creamos en la carpeta de NewAdvertPage los ficheros NewAdvertForm.js, NewAdvertPage.js y NewAdvertPage.css.

46 Desarrollamos el formulario de alta de nuevos anuncios.

47 Creamos RadioField para tratar los radiobuttons.

48 Creamos en api/tags.js para recuperar los tags de que disponemos para clasificar nuestro anuncio.

49 Contruyendo y peleándome con el Select de los tags. Un infierno.

50 Solucionado el tema de selección dinámico de tags y registro a través de la API.

51 Ahora abordamos la subida de la imagen a nuestro anuncio.

52 Creamos un nuevo método en adverts createAdvertPhoto donde utilizamos el formData para subir nuestro anuncio con foto incluida.

53 Sabemos discriminar si guardamos anuncio con o sin foto. la foto es opcional.

54 Ahora vamos a trabajar en el detalle para realizar el borrado de un anuncio con confirmación tal y como se pide en el enunciado de la práctica.

55 Cuando no existen anuncios, en el primer anuncio mostramos una pantalla con el detalle vacío y un botón que nos permitirá crear nuestro primer anuncio.

56 En NewAdvertForm vamos a implantar el .propTypes para validar el tipo de datos que utilizamos en cada campo.

57 En NewAdvertForm no se activa el botón de guardar hasta que no están todos los campos obligatorios con sus valores.

58 Creamos AdvertSearch para desarrollar las etiquetas de búsqueda.

59 Lo intentamos de todas las maneras, pero no hay forma de pasar los parametros de filtro a la parte final.

60 Solucionamos la foto por defecto en el detalle de anuncios cuando no existe foto.

Se hace la hora de entrega y ya no puedo avanzar más.

Las pruebas de filtrado las he intentado hacer en local y me ha faltado el poder aplicar el filtro dinámico.

 Haciendo pruebas con filtros manuales como datoEvalua="Moto" funciona correctamente.

 El tiempo que queda no da para más y hasta aquí he llegado.

 Subo la práctica y si me da tiempo hasta 23.50h haré otra intentona.


TODO- El listado de anuncios maquetarlo correctamente y en detalle poner la fecha de creación.

TODO- Control de errores implantar en algunos casos y mejorar los existentes.

TODO- Crear una validación inicial para saber que el token que tenemos guardado no está caducado y es válido.

TODO- Solucionar Warning en Advert Detail.

TODO- Campo precio en new y en search que sólo acepte campos numéricos.

TODO- Mejoras y optimización de código.

61 Seguimos con los filtros. Para filtrar los precios, utilizaremos dos inputs tipo number para marcar los mínimos y máximos.

62 Intentamos solucionar todos los puntos de mejora que se comentan en la corrección de la práctica.

63 Pasamos a documentar los puntos mejorados.

64 Entrega.




