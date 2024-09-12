# Carrito de Compras - Migración a TypeScript
Este proyecto realiza la migración del carrito de compras original a TypeScript, lo que aporta mayor seguridad, robustez y mantenibilidad al código gracias a la tipificación estática. La migración se enfoca en convertir tanto componentes como hooks, utilizando las características de TypeScript para garantizar que los tipos sean manejados de manera más precisa y confiable durante el desarrollo.

## **Funcionalidades**
- **Agregar Productos**: Añade productos al carrito desde una lista de opciones
- **Gestión del Carrito**: Modifica la cantidad de productos, elimina artículos y limpia el carrito
- **Persistencia de Datos**: Los datos del carrito se guardan en LocalStorage para persistir entre recargas
- **Optimización**: Uso de useMemo para mejorar el rendimiento en cálculos del total del carrito
- **Migración a TypeScript**: Incorporación de tipado estático en los componentes y hooks personalizados.

## TypeScript en el Proyecto
  ### Ventajas
  - **Seguridad de Tipos**:Previene errores relacionados con el manejo incorrecto de tipos
  - **Mantenibilidad**: Mejora la legibilidad y facilita el mantenimiento del código
  - **Escalabilidad**: Facilita la evolución del proyecto con menos riesgo de introducir errores
    
## Tecnologías 
- **React**: Biblioteca para construir interfaces de usuario
- **TypeScript**: Lenguaje de programación tipado que mejora la seguridad del código.
- **Estados**: Manejo del estado y efectos secundarios (useState, useEffect, useMemo)
- **CSS**: Estilización de componentes
- **LocalStorage** : Persistencia de datos en el navegador
  
## Instalación 
- **Clonar el Repositorio**: git clone https://github.com/OsorioMaicol/proyectoss-curso-react-type.git
- **Instalacion de Dependencias**: : navega a cd **1.2.carritoComprasTypescript** y despues instala las dependencias con npm install
