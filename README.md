# Fundamentos React

## Práctica de fundamentos React (nodepop-react) Versión 2

## Objetivo  
Vamos a crear una aplicación de tipo dashboard que será la interfaz gráfica para poder gestionar el API de anuncios Nodepop.

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
La aplicación frontend sera una SPA desarrollada con React como librería principal.  
En la aplicación se implementará una serie de rutas divididas en dos grupos: Las privadas y las públicas. En cada una de las rutas se renderizará un componente principal según detalle.

* Públicas: Accesibles para cualquier usuario. 
	- /login: LoginPage

* Protegidas: Accesibles SOLO para usuarios autenticados.    
	- Cualquier acceso de un usuario no autenticado a cualquiera de estas rutas redireccionará a /login.
	- /   Redirecciona a /adverts
	- /adverts: AdvertsPage
	- /advert/:id: AdvertPage
	- /advert/new: NewAdvertPage
	- Para cualquier otra url que no coincida se creará un componente NotFoundPage que
informará al usuario que la página solicitada no existe. 

* Funcionalidad de cada página-componente:
	- **LoginPage:**
		- Formulario con inputs para recoger email y password del usuario.
		- Checkbox “Recordar contraseña” mediante el que indicaremos que guardamos en el localStorage los datos de la session de usuario, evitando tener que introducir credenciales en cada visita al sitio.

	- **AdvertsPage:**
		- Listado de anuncios. Cada anuncio presentará nombre, precio, si es compra o venta y los tags. No se mostrará la foto en este listado.
		- Manejará el estado cuando no haya ningún anuncio de mostrar, con un enlace a la
página de creación de anuncios.
		- Cada anuncio del listado tendrá un enlace al detalle del anuncio (ruta /advert/:id).
		- Zona de filtros: Formulario con distintos inputs, donde podremos introducir los filtros que queremos aplicar sobre el listado.
			- Filtro por nombre (input tipo texto)
			- Filtro compra/venta (input tipo radio ‘venta’, ‘compra’, ‘todos’)
			- Filtro por precio (input donde podremos seleccionar el rango de precios por el que queremos filtrar). En nuestra práctica hemos utilizados dos inputs de tipo "number".
			- Cuando escribes en **el primer input, este iguala la cantidad en el segundo**, está hecho a propósito para facilitarle el desde hasta al usuario. 
			- Filtro por tags (input donde podremos seleccionar uno o varios tags de los disponibles). El filtro incluirá todos los tags seleccionados.
 
		- Podemos manejar el filtrado de anuncios de dos formas.
			- Recoger los filtros a aplicar en el front y enviarlos a la petición al API para traer los anuncios ya filtrados desde el backend.
			- Traer los anuncios sin filtrar desde el backend, y aplicar el filtro en el frontend con lo que se haya recogido en el formulario de filtros (una única petición).
			- En nuestro caso, hemos utilizado esta segunda opción.
			
	- **AdvertPage:**  
		- Detalle del anuncio cuyo id es recogido de la URL. Mostrará la foto del anuncio o un
placeholder en su lugar si no existe foto.
		- Si el anuncio no existe deberia redirigirnos al NotFoundPage.
		- Botón para poder borrar el anuncio. Antes de borrar mostar una confirmación al
usuario. Tras el borrado debería redireccionar al listado de anuncios.

	- **NewAdvertPage:**
		- Formulario con Todos los inputs necesarios para crear un nuevo anuncio:
			- Nombre
			- Compra / Venta 
			- Tags disponibles.
			- Precio.
			- Foto.
		- Todos los campos, excepto la foto serán requeridos para crear un anuncio. Manejar estas validaciones con React, por ejemplo desabiltando el submit hasta pasar todas las validaciones.
		- Tras la creación del anuncio debería redireccionar a la página del anuncio.
		
* Además de estos componentes necesitaremos un componente visible cuando el usuario esté
logeado desde el que podamos hacer logout (un botón por ejemlo, a poder ser possible con
confirmación).  

* Las rutas de /adverts y /adverts/new deben de estar accesibles fácilmente mediante enlaces de navegación (Link o NavLink).


## Desarrollo
En primer lugar, hemos puesta en marcha nuestro backend que nos permitirá el desarrollo de nuestro front. El backend lo hemos descargado del enlace proporcionado por nuestro instructor.   
Dejo también un enlace, donde se detallan los pasos y el orden seguido en el desarrollo del frontend perteneciente a la práctica.( Esto es importante para el Yo del futuro).
[Esquema desarrollo práctica](https://github.com/JosepCristobal/nodepop-react-pt/blob/master/README_2.md)

## Conclusiones finales

Creo que con este trabajo he cubierto todos los requisitos mínimos que se pedían en el enunciado de la práctica y el esfuerzo que he dedicado ha estado compensado por todo lo que he aprendido y entendido. Esta práctica ha sido un gran reto para mi porque el mundo del frontend no lo había entendido hasta ahora y sobre todo React. Ahora empiezo a ver un poco la luz.

En esta segunda entrega he intentado cubrir todas las recomendaciones que me has hecho en tus comentarios y he corregido, espero, todos los errores que no me permitieron llegar al APTO.

Seguro que hay muchísimas cosas a mejorar, por esto espero tus comentarios.

Realmente ha sido una práctica muy interesante y me lo he pasado muy bien, aunque también he sufrido bastante, pero he aprendido mucho realizándola.

Muchas gracias David por todo.

Un placer!
