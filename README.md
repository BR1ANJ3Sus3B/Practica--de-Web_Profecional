# Practica de Web Profesional
Desarrollo de Página Web

#  Farmacia del Ahorro Xicotepec

Aplicación web tipo **Single Page Application (SPA)** desarrollada únicamente con **HTML, CSS y JavaScript Vanilla**, diseñada para una farmacia 24 horas en Huauchinango, Puebla.

El proyecto simula un sistema comercial real con **catálogo de productos**, **carrito de compras**, **contacto y pagos vía WhatsApp**, **modo oscuro**, **SEO local** y **persistencia de datos en LocalStorage**.

---

## Alcance del Proyecto

El presente proyecto contempla el desarrollo de una página web informativa y funcional para una farmacia, enfocada en la visualización y organización de productos farmacéuticos mediante herramientas de búsqueda y filtrado.


##  Objetivo del Proyecto

Desarrollar una página web moderna, rápida y funcional que permita:

- Mostrar productos farmacéuticos con imágenes, precios y descripciones.
- Simular una base de datos local (`almacen24`) usando JavaScript.
- Permitir agregar productos al carrito y gestionar pedidos en línea.
- Facilitar contacto inmediato a través de WhatsApp.
- Mejorar el posicionamiento local mediante técnicas básicas de SEO.
- Funcionar completamente en el navegador sin necesidad de backend ni servidor.

---

##  Tecnologías Utilizadas

- **HTML5** – Estructura del sitio y elementos semánticos.
- **CSS3** – Estilo, diseño responsivo, animaciones y modo oscuro.
- **JavaScript ** –  carrito de compras y persistencia.


---

##  Estructura del Proyecto

```text

├── index.html          
├── producto.html       
├── contacto.html       
├── servicios.html      
├── sucursales.html     
├── CSS/
│   ├── style.css       
│   ├── producto.css    
│   └── contacto.css   
├── JS/
├── carrito.js          
└── README.md           
```
 **Justificaciones:**
- **LadingPage :** Es la página que describe todos los servicios que ofrece la farmacia. Sirve como referencia para los usuarios y proporciona información adicional que no está en productos o contacto, incluyendo atención al cliente, consultas y entregas.
<br>
- **servicios.html:** Es la página que describe todos los servicios que ofrece la farmacia. Sirve como referencia para los usuarios y proporciona información adicional

##  Busqueda / Filtrado

Este proyecto consiste en el desarrollo de una página web de productos que permite al usuario buscar y filtrar productos de manera dinámica.
El objetivo principal es mejorar la experiencia del usuario facilitando el acceso rápido a los productos según su nombre o categoría

- Buscador por nombre (input)
- Filtro por categoría (select)
- Implementado con la función filterProducts()
- Implementado con la función filterProducts()

##  Categorías disponibles
Los productos están organizados en las siguientes categorías:

- Analgésicos / Antiinflamatorios
- Vitaminas y Suplementos
- Higiene y Cuidado Personal
- Implementado con la función filterProducts()

 ## Justificación del Proyecto
 La implementación de un sistema de búsqueda y filtrado de productos es fundamental para mejorar la usabilidad y la experiencia del usuario dentro de una página web con múltiples artículos.

El buscador por nombre permite que el usuario encuentre rápidamente un producto específico sin necesidad de recorrer toda la lista, optimizando el tiempo de navegación. Por su parte, el filtro por categoría facilita la organización de los productos, permitiendo acceder únicamente a aquellos que pertenecen a un grupo determinado.

## Imagenes de Figma 
Las imágenes incluidas en este documento tienen como finalidad evidenciar visualmente el funcionamiento y la estructura de la página web, así como demostrar la correcta implementación de las funcionalidades principales del proyecto.

# Página principal  
![Buscador de productos](/Assets/brian.png)

Página principal muestra la vista inicial del sistema, donde el usuario tiene el primer contacto con la aplicación. En esta sección se presenta la identidad de la farmacia, accesos rápidos a las diferentes áreas del sitio y una interfaz clara que facilita la navegación.

---

# Área de productos 

![Buscador de productos](/Assets/chucho.png)

Al área de productos permite observar el catálogo farmacéutico, donde se visualizan los artículos disponibles con su nombre, imagen y precio. Esta sección es fundamental, ya que concentra la funcionalidad principal del sistema: la consulta de productos.

# Servicios  

![Buscador de productos](/Assets/mendoza.png)

las prestaciones adicionales que ofrece la farmacia, como atención al cliente, consultas y entregas. Su inclusión permite complementar la información del negocio y mejorar la experiencia del usuario.

---

# Área de Contactos  

![Buscador de productos](/Assets/Captura%20de%20pantalla%202026-02-03%20161546.png)

Contacto evidencia los medios de comunicación disponibles, permitiendo al usuario interactuar de forma directa con la farmacia. Esta sección facilita la atención personalizada y refuerza la accesibilidad del sitio.

# Filtrado   

![Buscador de productos](/Assets/Captura%20de%20pantalla%202026-02-03%20161139.png)

El funcionamiento del sistema de búsqueda y filtrado, permitiendo localizar productos por nombre o categoría. Esta funcionalidad mejora la usabilidad y optimiza el tiempo de navegación del usuario.

---
## Imagenes de Pagina web 

# Página principal     
![Buscador de productos](/Assets/lading.png)

# Productos 
![Buscador de productos](/Assets/Productos.png)

# Servicios 
![Buscador de productos](/Assets/Servicios.png)

# Sucursales  
![Buscador de productos](/Assets/Sucursales.png)

# Contacto  
![Buscador de productos](/Assets/Contacto.png)

---

## Resultados de Busqueda y filtrado 

# Busqueda  
![Buscador de productos](/Assets/filtrado.png)



Esta sección tiene como objetivo demostrar el correcto funcionamiento del sistema de búsqueda y filtrado de productos, el cual constituye una de las funcionalidades principales del proyecto.

# Filtrado  
![Buscador de productos](/Assets/base.png)

A medida que se escribe el nombre del producto, la lista se actualiza dinámicamente mostrando únicamente aquellos productos que coinciden con el criterio ingresado.
Esta funcionalidad permite localizar productos de forma rápida y eficiente, mejorando la experiencia de navegación.


## Responsivo 

Fue diseño responsivo, lo que significa que su contenido y estructura se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos, incluyendo móviles, tabletas y escritorios.
  
![Buscador de productos](/Assets/responsivo%20.png)

## Búsqueda Simple

![Buscador de productos](/Assets/Busqueda.png)
Esta sección muestra cómo funciona la búsqueda de productos dentro de la página web, permitiendo al usuario localizar rápidamente artículos por nombre o palabra clave.

---
## Campo de entrada para palabras clave
![Buscador de productos](/Assets/Paracetamol.png)

el campo de búsqueda donde el usuario ingresa el nombre del producto o palabra clave. Esta interfaz es clara y accesible, y está diseñada para funcionar de manera responsiva, adaptándose a diferentes tamaños de pantalla y dispositivos.

## Script que compare

![Buscador de productos](/Assets/destacados.png)

la lógica detrás de la búsqueda, implementada en JavaScript. El script compara el texto ingresado por el usuario con los nombres de los productos en la base de datos simulada (almacen24) y filtra los resultados en tiempo real. Esto permite una experiencia dinámica y eficiente sin recargar la página.

## Visualización de coincidencias encontradas

![Buscador de productos](/Assets/jabon.png)

los resultados de la búsqueda en la página. Solo se visualizan los productos que coinciden con el criterio ingresado, organizados de forma clara. Gracias al diseño responsivo, los resultados se ajustan automáticamente, garantizando legibilidad y accesibilidad en móviles, tabletas y escritorios.

## Busqueda avanzada 
Cuenta con un buscador avanzado que permite a los usuarios encontrar productos de forma rápida y eficiente, combinando búsqueda por texto, filtro por categoría y búsqueda por palabra clave.

- Permite escribir cualquier palabra relacionada con el producto.

- La búsqueda es insensible a mayúsculas.

- Muestra sugerencias dinámicas basadas en coincidencias parciales.

Mejora la experiencia de usuario al localizar productos específicos sin recorrer todo el catálogo.

## Visualización de Busqueda avanzada 

![Buscador de productos](/Assets/Avanzada.png)

## Error de busqueda 

Error de búsqueda: No se encontraron coincidencias con los términos ingresados. Verifica que los datos sean correctos o intenta realizar la búsqueda utilizando otros criterios.

![Buscador de productos](/Assets/error.png)

---

### Unidad 2

# Validación de Datos y Verificación de Usuarios Humanos
En el desarrollo del sistema web para Farmacia del Ahorro – Huauchinango, se implementó un proceso de validación de datos en el formulario de inicio de sesión con el objetivo de garantizar la integridad de la información ingresada por el usuario y mejorar la seguridad del sistema.


![Buscador de productos](/Assets/validacionHumana.png)

## ¿Por qué implementar validaciones?

Las validaciones se implementan por las siguientes razones:

✔ Seguridad básica

Evitan que se envíen datos vacíos, incorrectos o maliciosos.

✔ Integridad de la información

Garantizan que los datos ingresados cumplan con un formato lógico y coherente.

✔ Mejora de experiencia del usuario

Permiten mostrar mensajes claros e inmediatos sin recargar la página.

✔ Prevención de errores humanos

Muchos usuarios cometen errores de escritura; las validaciones ayudan a detectarlos antes de continuar.

![Buscador de productos](/Assets/correo.png)

## Pautas de Validación de Cada Campo y Justificación
🔹 Campo: Correo Electrónico
🔍 Pauta de validación:

Se utiliza una expresión regular: 
Es una secuencia de caracteres que forma un patrón de búsqueda para validar, localizar o manipular texto

 como correos electrónicos, números de teléfono o contraseñas

/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

✔ ¿Qué valida?

- Que exista texto antes del “@”.

- Que exista un dominio después del “@”.

- Que tenga una extensión válida (mínimo 2 letras).

![Buscador de productos](/Assets/validacion%20.png)

## Campo: Contraseña
🔍 Pauta de validación:

Mínimo 8 caracteres y una letra Mayuscula .

if (password.length < 8)

![Buscador de productos](/Assets/Contra.png) 
 
---

![Buscador de productos](/Assets/Mayus.png) 


## Campo: Checkbox "No soy un robot"
🔍 Pauta de validación:

Se verifica que esté marcado:

if (!robotCheck)

![Buscador de productos](/Assets/robot.png)

### ¿Por qué se eligió este tipo de verificación?

- Se implementó un captcha simple tipo checkbox porque:

- Es fácil de implementar.

- No requiere conexión con servicios externos.

- Es ideal para fines académicos.

- Demuestra el concepto de validación humana.

- No depende de APIs como Google reCAPTCHA.


### ¿Por qué no se utilizó un reCAPTCHA real?

- Un sistema como Google reCAPTCHA requiere:

- Registro en Google Cloud

- Claves públicas y privadas

- configuración en backend

- Validación del lado del servidor

Dado que el proyecto está desarrollado solo en frontend (HTML, CSS y JavaScript), se eligió una solución simple que cumple el propósito demostrativo sin necesidad de infraestructura adicional.

###  En Conclusión

La implementación de validaciones en el formulario de inicio de sesión cumple un papel fundamental en la calidad y seguridad del sistema. Cada campo fue validado bajo criterios básicos pero funcionales, equilibrando seguridad, simplicidad y usabilidad.
