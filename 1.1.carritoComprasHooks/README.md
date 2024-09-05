# Carrito de Compras con Hooks Personalizados
Este proyecto es una aplicación de carrito de compras construida con React. Permite a los usuarios agregar, gestionar y eliminar productos en un carrito, y guarda el estado del carrito en LocalStorage para mantener los datos entre sesiones. La última actualización incluye un hook personalizado useCart para gestionar el carrito de manera más eficiente.

## **Funcionalidades**
- **Agregar Productos**: Añade productos al carrito desde una lista de opciones
- **Gestión del Carrito**: Modifica la cantidad de productos, elimina artículos y limpia el carrito
- **Persistencia de Datos**: Los datos del carrito se guardan en LocalStorage para persistir entre recargas
- **Optimización**: Uso de useMemo para mejorar el rendimiento en cálculos del total del carrito
- **Hook Personalizado**: Implementación del hook useCart para simplificar la lógica de gestión del carrito

## Hook Personalizado useCart
  ### Ventajas
  - **Modularidad**:Permite encapsular toda la lógica relacionada con el carrito en un solo lugar
  - **Reusabilidad**: Facilita la reutilización del código en diferentes componentes
  - **Mantenimiento**: Simplifica la gestión y el mantenimiento del estado del carrito
    
## Tecnologías 
- **React**: Biblioteca para construir interfaces de usuario
- **Estados**: Manejo del estado y efectos secundarios (useState, useEffect, useMemo)
- **CSS**: Estilización de componentes
- **LocalStorage** : Persistencia de datos en el navegador
## Instalación 
- **Clonar el Repositorio**: git clone https://github.com/OsorioMaicol/proyectoss-curso-react-type.git
- **Instalacion de Dependencias**: : navega a cd **1.1.carritoComprasHooks** y despues instala las dependencias con npm install