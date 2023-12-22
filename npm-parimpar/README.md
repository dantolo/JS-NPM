# Crear y publicar un nuevo package de npm
## Creacion del package
1. inicializar npm desde CLI con el comando
me guiará a traves de una serie de pasos donde me solicite informacion relacionada con mi package como el nombre, version, etc.
2. presionar enter para aceptar que la informacion es correcta y que se cree el package.
3. crear una carpeta llamada modules en donde vivirá nuestro scripct.
4. crear un archivo .js en la carpeta modules.
5. crear la funcion del script y exportarlo con export default
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta con extensión` e invocamos la función con parámetros.
    ```javascript
    import determinarParImpar from "./modules/parimpar.js";
    ```
7. configurar el type module en el archivo package.json
8. ejecutamos el programa desde el entorno de node js con el comando node index.js