# Desde React Básico a Next.js 14: Proyectos Completos con typeScript y Tecnologías Modernas

## Descripción

Este repositorio contiene una serie de proyectos y ejercicios prácticos desarrollados con React y TypeScript. Aquí encontrarás aplicaciones que van desde los fundamentos básicos hasta conceptos mas avanzados, incluyendo gestión del estado, integración con APIs y desarrollo full stack. Cada proyecto está diseñado para ofrecer una experiencia práctica enriquecedora y ayudar a perfeccionar mis habilidades en el desarrollo de aplicaciones web modernas.


## Proyectos del Curso

1. **Carrito de Compras**
   - **Descripcion**: Este proyecto es una aplicación de carrito de compras desarrollada con React. Permite a los usuarios agregar productos al carrito, gestionar cantidades, calcular el total y almacenar el contenido del carrito en LocalStorage para persistencia de datos.
   - **Temas**: Componentes, Eventos, Estado, Persistencia con LocalStorage, Optimización con useMemo, Hooks.

1.1. **Carrito de Compras con Hooks Personalizados**
  - **Descripcion**: Este proyecto expande el carrito de compras anterior utilizando hooks personalizados en React. Se enfoca en la creación y uso de hooks para manejar el estado del carrito, proporcionando una estructura más modular y reutilizable.
   - **Temas**: Hooks Personalizados, Creación de useCart, Migración de Código, Definición y Uso de Valores en Hooks, Instalación de Dependencias.

1.2. **Carrito de Compras - Migración a TypeScript**
   - **Descripcion**:  Este proyecto adapta el carrito de compras original para utilizar TypeScript, proporcionando una tipificación estática que mejora la robustez y mantenibilidad del código. Se centra en la conversión de componentes y hooks existentes a TypeScript, aprovechando sus características para definir tipos y mejorar la seguridad del tipo en el desarrollo.
   - **Temas**: Introducción a TypeScript y Ventajas, Creación del Proyecto con TypeScript, Tipos Primitivos y Avanzados en TypeScript, Definición de Tipos e Interfaces, Tipado de Props en Componentes, Creación y Uso de Archivos de Tipos, Extensión y Utilización de Tipos, Utility Types en TypeScript.

2. **Calculadora de Propinas con TypeScript**
   - **Descripcion**: Descripción: Este proyecto es una calculadora de propinas construida con React y TypeScript. Permite gestionar y calcular el total de la propina y el consumo total de una orden de manera interactiva. Utiliza TailwindCSS para el diseño y presenta funcionalidades para añadir y eliminar artículos, calcular propinas, y optimizar el rendimiento del cálculo.
   - **Temas**: Configuración del Proyecto y TailwindCSS, Creación de Componentes y Hooks Personalizados, Gestión del Estado y Funcionalidades de Orden, Tipado en TypeScript, Cálculo del Consumo y Propinas, Optimización con useMemo y useCallback, Reinicio de la Orden y Deployment.

3. **Contador de Calorías, Consumo y Ejercicios con useReducer**
   - **Descripcion**: Este proyecto es una aplicación para el seguimiento de calorías, consumo de alimentos y ejercicios, desarrollada con React y TypeScript utilizando el hook useReducer. Permite ingresar y gestionar actividades físicas y alimenticias, calcular el total de calorías consumidas y quemadas, y actualizar la información de manera eficiente. La aplicación también incluye funcionalidades para editar y eliminar actividades, así como almacenamiento en LocalStorage.
   - **Temas**: Configuración del Proyecto y TailwindCSS, Gestión del Estado con useReducer, Creación de Formulario y Validación de Datos, Tipado en TypeScript, Manejo de Acciones y Dispatch, Edición y Eliminación de Actividades, Almacenamiento en LocalStorage, Cálculo de Calorías y Diferenciales.

4. **Migrar el Carrito de Compras de Guitarras a useReducer**
   - **Descripcion**: Este proyecto consiste en actualizar una aplicación de carrito de compras de guitarras para utilizar el hook useReducer en lugar de un custom hook. La migración permite una gestión del estado más robusta y eficiente, facilitando el manejo de acciones como añadir, eliminar e incrementar cantidades de productos en el carrito. La aplicación también incluye la persistencia del estado en LocalStorage.
   - **Temas**: Creación del Reducer y Type de Acciones, Definición del Estado Inicial, Escritura de Acciones y Manejo con Reducer, Migración del Custom Hook hacia useReducer, Manejo de Acciones: Añadir, Eliminar e Incrementar Cantidades, Ajustes en la Sintaxis y Evitar Registros Duplicados, Persistencia del Estado en LocalStorage.

5. **Calculadora de Propinas - Migrando hacia useReducer**
   - **Descripcion**: En este proyecto, se realiza la migración de una calculadora de propinas para usar el hook useReducer en lugar de la gestión del estado previa. Esta transición mejora la estructura del código y facilita la gestión de las acciones relacionadas con los artículos de la orden y el cálculo de propinas. Incluye la creación de un reducer para manejar el estado y acciones específicas como agregar, eliminar artículos y definir la propina.
   - **Temas**: Creación del Reducer y Definición de Acciones, Gestión de Artículos en la Orden, Visualización de Contenidos de la Orden, Acción para Eliminar Artículos, Acción para Definir la Propina.

6. **Control de Gastos y Presupuestos con Context API para Estado Global**
   - **Descripcion**: Este proyecto aborda la creación de una aplicación para gestionar gastos y presupuestos utilizando Context API para el manejo del estado global. Incluye la configuración de la aplicación, la integración de TailwindCSS para el diseño, y la implementación de un contexto global para manejar el presupuesto y los gastos. Se crea una interfaz interactiva con componentes para agregar, editar y eliminar gastos, además de mostrar gráficos y alertas.
   - **Temas**: Context API, Reducer y Actions, Manejo del Estado Global, Validación de Formularios, Componentes Interactivos (Modal, Formularios de Gastos),Persistencia en LocalStorage.

7. **Contador de Calorías hacia Context API y useReducer**
   - **Descripcion**: Migración de un contador de calorías para utilizar Context API y useReducer para la gestión del estado global y la lógica del negocio. Este enfoque permite una mejor organización del código y una administración más eficiente del estado de la aplicación.
   - **Temas**: Context API, useReducer, Estado, Estado Global, Hooks Personalizados, Integración de Context en Componentes, Migración y Optimización del Estado.

8. **Administrador de Pacientes con Zustand y React Hook Form**
   - **Descripcion**: Desarrollo de una aplicación para la gestión de pacientes utilizando Zustand para el manejo del estado global y React Hook Form para la gestión y validación de formularios. Este enfoque proporciona una estructura eficiente para el manejo del estado y la interacción con los formularios..
   - **Temas**: Zustand, React Hook Form, Manejo de Formularios, Validación de Campos, Estado Global con Zustand, Integración con LocalStorage, Mensajes de Alerta con React-Toastify.

9. **Aplicación de Clima que obtiene el Clima en tiempo real con una API**
   - **Descripcion**: Desarrollo de una aplicación para consultar el clima en tiempo real utilizando una API. El proyecto aborda la creación de formularios, la integración de una API externa, el manejo del estado y la validación de datos.
   - **Temas**: Introducción a APIs y obtención de API Key, CSS Modules para estilos, Gestión de formularios para consulta de clima, Llamadas a la API para obtener datos del clima, Tipado de resultados de API con TypeScript, Validación de datos con ZOD y Valibot, Manejo de estados y resultados en la interfaz, Implementación de un spinner de carga, Manejo de errores para ciudades no existentes, Deployment del proyecto con API Key.

9. **Cotizador de Criptomonedas en Tiempo Real con ZOD y Zustand**
   - **Descripcion**:Desarrollo de una aplicación para consultar las cotizaciones en tiempo real de criptomonedas utilizando una API. El proyecto abarca la integración con Zustand para el manejo del estado global y ZOD para la validación de datos.
   - **Temas**: Formulario de Cotización de Criptomonedas, Configuración del Store con Zustand, Validación de Datos con ZOD, Obtención y Visualización de Datos de la API, Estilización y Agregación de un Spinner de Carga,Deployment del Proyecto.

10. **Buscador de Bebidas y Recetas con React Router DOM**
   - **Descripcion**:Desarrollo de una aplicación que permite buscar bebidas y recetas utilizando React Router DOM para la navegación entre páginas. La aplicación incluye funcionalidades para gestionar favoritos y mostrar notificaciones, utilizando Zustand para el manejo del estado y ZOD para la validación de datos.
   - **Temas**: Instalación de Tailwind y configuración del proyecto, Uso de React Router para la navegación entre páginas, Integración con Zustand para el manejo del estado global, Validación de datos con ZOD, Obtención y visualización de categorías y recetas desde la API,Manejo del estado de los favoritos y local storage, Implementación de modales para mostrar detalles de las recetas,Optimización del rendimiento y despliegue de la aplicación.

## Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/OsorioMaicol/proyectos-curso-react-typescript/
