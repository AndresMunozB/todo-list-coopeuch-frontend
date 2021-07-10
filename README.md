# React Boilerplate Frontend

Este es un Boilerplate React/Typescript que sirve de punto de partida para nuevos proyectos. Las reglas implementadas se encuentran validadas y permiten un desarrollo limpio y estandarizado, pero las decisiones de implementación como login, manejo de cachés, router, etc, deben ser analizadas al inicio de cada proyecto para adaptarse a las diferentes necesidades. No obstante, la estructura de carpetas y organización del proyecto se debe mantener.

El boilerplate que se entrega posee un código limpio y libre de advertencias, lo cual se debe mantener con cada entrega. Por esta razón, validar:

- Sin vulnerabilidades de seguridad (npm audit).
- Consola de navegador sin errores y advertencias justificadas.
- Linter de react-scripts sin errores y sin advertencias (npm start).
- Linter de proyecto sin errores y sin advertencias (npm run lint).

La aplicación que se construya debe ser single page application, por ende la navegación es entre componentes y no sitios.

## Ambiente de desarrollo

1. Instalar Visual Studio Code. [https://code.visualstudio.com/].

1. En Visual Studio Code instalar las extensiones:

   - ESLint. [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint].

   - Prettier. [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode].

## Instalación limpia del proyecto

> npm run clean

> npm install

## Formateador de código

- Utilizar la extensión Prettier

## Estructura de carpetas

- api/
  - endpoints/ <!-- rutas de endpoints, payloads, respuestas -->
    - commons.ts
    - endpointOne.ts
    - endpointTwo.ts
  - entities/ <!-- objetos de transporte -->
    - entityOne.ts
    - entityTwo.ts
  - index.ts
- assets/
  - images/
    - imageOne.png
    - imageTwo.jpg
  - themes/
    - themeOne.ts
    - themeTwo.ts
  - index.ts
- components/
  - Main/ <!-- layout principal, router, errors, ... -->
  - commons/ <!-- compartidos entre vistas -->
  - screens/ <!-- vistas inscrustadas en el layour principal -->
- constants/
  - project.ts
  - strings.ts
- storage/ <!-- localStorage, sessionStorage, indexedDb, etc ... -->
  - index.ts
- store/ <!-- redux -->
  - index.ts
  - config.ts
  - sagas.ts
  - reducers.ts
- utils/
  - date.ts
  - hooks.ts
  - validations.ts

Las carpetas se encuentran organizadas por funcionalidad, ya sean api, storage, assets, components, etc. En la raíz de los módulos se encuentra un archivo index.ts, en el cual se exportan sus funciones utilitarias. Además, en este archivo también se encuentra la configuración, si existe alguna excepción como es el caso de la store (referencia circular) esta se creará en el archivo config.ts.

## Estructura de componentes

- index.tsx <!-- punto de entrada y código principal -->
- styles.ts <!-- los estilos expuestos desde material-ui -->
- store/
  - actions.ts <!-- declaración de acciones -->
  - reducer.ts <!-- modifica estados de la store -->
  - sagas.ts <!-- comportamientos asíncronos -->
  - selectors.ts <!-- selectores de estado -->

## Generales

- No declarar tipos de datos con _any_.
- Los tipos de datos se declaran en los archivos que se utilizan, por ejemplo:
  - La (store) se define en el archivo del reducer.
  - Las (props) se definen en el archivo del componente.
  - Las (respuestas) de los endpoints en el archivo asociado en la API.
- No utilizar estilos inline, todos se aplican por medio del helper de Material-UI.
- Evitar el uso de tags html nativos, Material-UI provee todo lo necesario, ej: en vez de _div|span_ utilizar _Box_ con las respectivas propiedades.

### Componentes

- Los componentes se crean como una carpeta con nombre en PascalCase y en su interior un archivo index.tsx que es el componente mismo. El export default (componente) lleva el nombre de la carpeta.
- Solo se deben crear componentes funcionales.
- Solo debe existir una declaración de componente por archivo index.tsx.
- Mantener el template del componente limpio, si aumenta mucho su tamaño de modo que se hace poco legible se debe evaluar separar en componentes.
- Si un componente de uso común obligatoriamente debe estar anclado al layout principal del main, se debe generar un wrapper desde commons y consumirlo dese allí.
- Solo el index de un componente debe tener la extensión .tsx, ya que es el único que genera tags para el DOM.
- Las props se deben desestructurar al inicio. No utilizar _props.abc _, sino: \_const { abc } = props; y utilizar abc. Con esto evitamos redundancia de código y mejoramos performance al iterar sobre arrays grandes.
- El código fuente se escribe en inglés (sin spanglish).

### Hooks

- Los hooks comunes se definen en el archivo hooks.ts de la carpeta utils.
- Los hooks propios de un componente se crean como una carpeta con nombre en PascalCase y prefijo Use, y en su interior un archivo index.ts que es el hook mismo. El export default (hook) lleva el nombre de la carpeta en camelCase.

### Store

- Solo un reducer por archivo. Al estar la store encapsulada dentro del componente debería ser suficiente con uno. En casos especiales se puede realizar composición y retornar uno de igual manera.
- El acceso a los estados de la store debe ser únicamente a través de selectores definidos en selectors.ts, tanto para el componente como para las sagas. Esto permite refactorizar y/o modificar atributos de manera centralizada, además reduce la cantidad de código cuando existen objetos anidados.
- Solo se deben crear acciones con createAction() exportado de la utilidad de la store, esta función exporta un objeto con métodos y constantes para el manejo completo del ciclo de vida de una acción:
  - Default: estado inicial de la acción.
  - Start: cuando se inicia la acción.
  - Success: cuando se completa la acción.
  - Failure: cuando falla la acción.
- Solo se deben crear reducers con createReducer() exportado de la utilidad de la store.
- Se debe typear el estado inicial de todos los reducers.
- Se deben typear las aciones de todas las funciones reductoras.

### Configuración

- Las variables de ambiente se encuentran instanciadas en el archivo _.env_ ubicado en la raíz del proyecto.
- Si se debe agregar una nueva variable de ambiente, esta debe ser definida como string en el archivo _react-app-env.d.ts_ y con raíz _REACT_APP\_\_, de otra forma no será compilada. Luego se asigna su valor en el archivo _.env\_.

### Componente básico

```javascript
const MyComponent = (): JSX.Element => {
  console.log('MyComponent');
  return <></>;
};

export default MyComponent;
```

### Hook básico

```javascript
import { useEffect } from 'react';

const useMyHook = (): void => {
  useEffect(() => {
    console.log('useMyHook');
  }, []);
};

export default useMyHook;
```

## Documentación de código

- Para documentar el código fuente se utiliza TypeDoc.
- Todo el código fuente debe ser documentado, esto es funciones y tipos de datos. En los componentes basta con la descripción, ya que su estructura es conocida y las props se describen en el type.

```javascript
type MyType = {
  /** Descripción de first */
  first: string,
  /** Descripción de second */
  second: number
};

/**
 * Descripción de la función.
 *
 * @typeParam T Descripción del tipo de dato.
 * @param target Descripción del argumento.
 * @returns Descripción de los retornos.
 */
const myFunction = <T>(target: T): boolean => {
  if (!target) {
    return false;
  }
  return true;
};
```

### Librerías

- Material UI: expone todos los componentes necesarios para crear una aplicación basada en los principios de diseño de _Material Design_. [https://material-ui.com/].

- Immer: permite obtener una copia modificada de un objeto sin mutar el orignal. [https://immerjs.github.io/immer].

- Moment: se utiliza para manipular fechas de manera sencilla (transformaciones, validaciones, operaciones aritméticas, etc...). [https://momentjs.com/].

- Query String: analiza y convierte los argumentos de una url en un objeto y viceversa. [https://github.com/sindresorhus/query-string].

- Reselect: permite acceder al estado de la store de manera eficiente. [https://github.com/reduxjs/reselect].

- Redux Logger: monitorea el estado de la store y ayuda a seguir el flujo de las acciones a medida que se interactúa con el navegador. Se activa desde el archivo de confiración. [https://github.com/LogRocket/redux-logger].
