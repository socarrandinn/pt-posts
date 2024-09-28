# Prueba Técnica - Listado de Posts con CRUD

Este proyecto es una prueba técnica que implementa un CRUD (Create, Read, Update, Delete) para manejar un listado de posts. Se utilizan **React Hook Form** para la gestión de formularios y **Material UI** para la interfaz de usuario. Además, **Yarn** se utiliza como gestor de dependencias.

## Características

- Listado de posts.
- Creación de nuevos posts con validación de formularios usando **React Hook Form**.
- Edición de posts existentes.
- Eliminación de posts.
- Interfaz de usuario con componentes de **Material UI**.
- Manejo de errores y mensajes de confirmación.

## Tecnologías Utilizadas

- **Vite** - Herramienta de construcción rápida para aplicaciones web modernas.
- **React** - Biblioteca de JavaScript para la creación de interfaces de usuario.
- **Axios** - Cliente HTTP para realizar las peticiones a la API.
- **Yup** - Biblioteca para la validación de esquemas de formularios.
- **React Query** - Para la gestión de estado y manejo de datos.
- **React Hook Form** - Manejo eficiente de formularios y validación.
- **Material UI** - Biblioteca de componentes de interfaz de usuario con estilos predefinidos.
- **Yarn** - Administrador de paquetes utilizado en el proyecto.
## Instalación y Uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/socarrandinn/pt-posts.git
cd pt-posts
```

2. Instalación de dependencias
Asegúrate de tener Yarn instalado. Si no lo tienes, puedes instalarlo ejecutando:

```bash
npm install --global yarn
```

Luego, instala las dependencias del proyecto:

```bash
yarn install
```

3. Ejecutar el proyecto
Para iniciar el servidor de desarrollo, usa el siguiente comando:

```bash
yarn dev
```

La aplicación estará disponible en http://localhost:5173/

Funcionalidades
1. Listar Posts
La página principal muestra un listado de posts que se obtienen de una API externa. Cada post contiene un título, resumen y usuario asignado.

2. Crear un Post
Desde la sección "Crear Publicación", se puede agregar un nuevo post llenando un formulario con campos validados utilizando React Hook Form y Yup. Se utilizan componentes de Material UI para los campos de entrada.

3. Editar un Post
Puedes editar cualquier post existente haciendo clic en el botón de edición en la lista de posts. El formulario de edición también utiliza React Hook Form para gestionar la validación y envío de datos.

4. Eliminar un Post
Elimina un post haciendo clic en el botón de eliminar y confirmando la acción en la ventana emergente.

5. Validaciones
Se validan los campos del formulario utilizando Yup junto con React Hook Form para asegurarse de que los datos introducidos sean correctos, como la longitud mínima del título y la obligatoriedad del resumen.

6. Interfaz con Material UI
La aplicación está diseñada utilizando componentes de @mui/material para una experiencia de usuario moderna y estilizada. Se han utilizado componentes como TextField, Button, Dialog, y más.


NOTA:
La api externa no refleja los cambios de eliminar, actualizar, crear
