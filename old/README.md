# Proyecto 2. Awesome profile-cards

Ahoy! 👋🏼 En este repositorio podréis encontrar los ficheros generados en la realización del **proyecto final del Módulo 2 - Promo Radia**.

## Autoras👩🏻‍💻:
En la realización de este proyecto han participado: 

- Ana Lozano Moreno: [@Ana-Purple-Dev](https://github.com/Ana-Purple-Dev) 
- Blanca Ubis Martínez: [@blancaum](https://github.com/blancaum)
- Laura González Calvo: [@lauragonzalezcalvo](https://github.com/lauragonzalezcalvo)
- Mª Elena Arocena López: [@marocena26](https://github.com/marocena26)
- María López Aparicio: [@marialapc](https://github.com/marialapc)

## Descripción:page_facing_up::

¡Sean todos bienvenidos a **Coding Time**! En este repositorio encontraréis nuestra aplicación web **Algebraic profile-cards**, la cual os permitirá crear una tarjeta de visita totalmente personalizada. 

En ella podréis:

- introducir vuestros datos personales. 
- introducir vuestros perfiles profesionales.
- adjuntar una foto de vuestro estilo.
- elegir los colores de vuestra tarjeta seleccionado una de las tres originales de paletas que os ofrecemos. 
- obtener una vista maquetada de vuestra información una vez rellenéis todos los campos. 

Y no solo eso, ¿sabéis que es lo mejor de todo? ¡Que podréis compartirla en Twitter! :bird:

## Tecnologías utilizadas💻:

- Lenguajes: 
    - Lenguaje de marcado: **HTML5**.
    - Lenguaje de estilos: **CSS avanzado con diseño responsive**.
    - Lenguaje de programación: **Vanilla JS**.
- Automatización de tareas: **Gulp**.
- Procesador CSS: **Sass**.
- Control de versiones: **GitHub**.
- Almacenamiento en local usando **LocalStorage**.
- Acceso y envío de **datos a un servidor**.
- Gestión de **eventos** en el navegador.
- **JSON**.
- **NodeJS**.
- **[Adalab - Web starter kit](https://github.com/Adalab/Adalab-web-starter-kit)**.

### Organizando el código:

Es importante tener en cuenta que la organización del código en este repositorio está dividida en distintos **partials**. 

## Objetivos de nuestro proyecto🎯: 

- Aprender los **conceptos básicos de programación** (variables, estructuras de datos, condicionales, funciones, etc.).
- Comprender cómo manipular el **DOM** de una página y responder a eventos del usuario.
- Manejar estructuras de datos **complejas, con arrays y objetos**.
- Realizar peticiones al **servidor** y **almacenar datos en local**.
- Implementar **Scrum** como marco de referencia para el desarrollo del producto, basándonos siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua.
- Mejorar la **comunicación** entre los miembros del equipo.
- Mejorar vuestras habilidades de comunicación en público al **exponer el proyecto** en la sesión final.

## Especificaciones✅:

El proyecto consta de 2 **páginas**:
- Una página **landing** de bienvenida.

![image](https://user-images.githubusercontent.com/113302094/202533970-35c67b5a-7ad1-42ef-9e39-9106920fd3e6.png)

- Una página con la aplicación de **crear tarjetas**.

![image](https://user-images.githubusercontent.com/113302094/202534113-91f488ea-0b38-4d63-93ef-53d6c4543349.png)

La aplicación funciona siguiendo estos pasos:

1. Permitir al usuario **elegir el estilo de la tarjeta**, eligiendo paleta de colores.
2. Permitir al usuario que, mediante la introducción de información en un **formulario**, este texto se muestre maquetado automáticamente en un cuadro similar a una **tarjeta de visita**, que será la muestra del resultado final.
3. Permitir que el usuario pueda crear una web con su tarjeta y **compartirla por Twitter**.

La tarjeta de visita deberá tener los **siguientes campos** (entre paréntesis el nombre del campo a usar):

- Nombre completo (full_name)
- Profesión (job)
- Datos personales
    - Teléfono (phone)
    - Correo electrónico (email)
- RRSS
    - LinkedIn (linkedin)
    - GitHub (github)
 
![image](https://user-images.githubusercontent.com/113302094/202535512-a70b735e-e841-4355-aecb-ca13af8717c5.png)

![image](https://user-images.githubusercontent.com/113302094/202535016-49c452d5-b583-4f71-9aaf-6177a5cb26cb.png)

**Respecto a la interacción** con la web:

- Los campos deberán tener restricciones para su formato indicado. Campo de teléfono para el móvil, mail para el correo, etc.
- Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta
- Las 3 partes del proceso de creación serán elementos colapsables, que al hacer clic en el título se mostrará/ocultará solo mostrando una sección a la vez
- Toda la información del formulario debe almacenarse en LocalStorage (almacenamiento local del navegador), de forma que al recargar la página siga disponible y podamos borrarla con un botón de Reset. Para esto, debemos definir una estructura de datos compleja (con arrays y objetos) que es lo que guardaremos en el navegador

### Respecto a la funcionalidad del botón de Twitter: 

- Si el usuario no rellena los campos no se podrá compartir la tarjeta en Twitter:

![image](https://user-images.githubusercontent.com/113302094/202536423-2156b7d4-7428-4e35-91d2-6667baaba32e.png)

- Si el usuario ha rellenado todos los campos aparecerá el siguiente mensaje:

![image](https://user-images.githubusercontent.com/113302094/202536672-88b8d059-dae7-4442-996f-4d62c4c2fbcd.png)

- Una vez aparezca nuestro botón de compatir, seguiremos 2 pasos:
1. Al hacer clic en el botón de "Enviar" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena
2. Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlazará a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta

![image](https://user-images.githubusercontent.com/113302094/202535371-737e6170-8595-44f0-b8fe-b58f6cf3a8e4.png)

## Pasos a seguir para utilizar este proyecto en vuestro ordenador💾:

Este proyecto se ha realizado utilizando una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, como es el Adalab web starter kit. Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. Para poder trabajar con él se debe tener previamente instalado Node JS.

### Pasos a seguir cada vez que se quiere arrancar un proyecto desde cero:

- Crea tu propio repositorio.
- Descarga el Starter kit desde **[GitHub](https://github.com/Adalab/Adalab-web-starter-kit)**.
- Copia todos los ficheros en la carpeta raíz del repositorio.
- Abre una terminal e instala las dependencias locales ejecutando en la terminal de comando:

```bash
npm install
```
### Pasos para arrancar el proyecto:

**El proyecto hay que arrancarlo cada vez que nos pongamoss a programar**, para ello ejecutaremos el comando:

```bash
npm start
```
Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya podemos empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

## Resultado final✨:

Puedes echar un vistazo a cómo quedó en Github Pages: **[Coding Time](https://beta.adalab.es/project-promo-r-module-2-team-1/)**. 

Esperamos que os guste 😉. 


