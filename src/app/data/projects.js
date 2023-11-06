import { hBuyImages } from "../assets/H-Buy"
import { wordleGameImages } from "../assets/WordleGame"


export const projects = [
  {
    name: "H-Buy",
    technologies: [
      "JavaScript",
      "React",
      "React Router DOM",
      "Redux Toolkit",
      "Redux Persist",
      "Axios",
      "HTML",
      "CSS",
      "Bootstrap",
      "Styled-Components",
      "SweetAlert2",
      "Material UI",
      "Auth0",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Nodemailer",
      "Mercado Pago",
      "Node",
      "SCRUM",
      "GitHub",
      "Trello"
    ],
    description: "H-Buy - Proyecto grupal. E-commerce multi rubro. Landing Page y carruseles de ofertas y productos destacados. Una página de productos con paginado y filtros combinados, cada producto tiene sus botones para agregarlo al carrito de compras, marcarlo como favorito y dirigirse a la vista completa del producto. Pasarela de pagos con Mercado Pago. Acceso y autenticación a través de Auth0. Perfiles personalizados (Comprador, Vendedor y Admin), cada uno con sus propias funcionalidades.",
    images: hBuyImages,
    github_url: "https://github.com/Nicoiconi/H-Buy"
  },
  {
    name: "Video Games Web App",
    technologies: [
      "JavaScript",
      "React",
      "React Router DOM",
      "React Context",
      "React Hooks",
      "IndexedDB",
      "Fetch",
      "Axios",
      "HTML",
      "CSS",
      "Bootstrap",
      "Sequelize",
      "Cloudinary",
      "Express",
      "Node",
    ],
    description: "Aplicación web con solicitudes a RAWG API. La carpeta 'front' contiene una renovación del proyecto original. Landing page con botones de acceso a la vista de video juegos y al formulario de creación. Desde la vista de video juegos se presiona un botón para ejecutar el pedido a la api, si no se ingresa una cantidad (máxima de 40) devuelve 20. Funcionalidades de guardar, buscar y borrar en IndexedDB (base de datos del navegador). Filtros combinados por nombre, género, plataforma y rating. Ordenamientos alfabéticos y por rating. Acceso al detalle del video juego presionando el nombre en la tarjeta, si el juego está guardado en la base de datos renderiza un boton para eliminarlo. Manejo de estado con Context + Hook. Las carpetas 'api' y 'client' son el proyecto original, full stack, con características similares. Diferencias: base de datos relacional con MySQL y Sequelize, Cloudinary (almacenamiento de imágenes en la nube) y el estado se administra con Redux + reducer",
    images: "",
    github_url: "https://github.com/Nicoiconi/H-Buy"
  },
  {
    name: "Wordle Game",
    technologies: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Canvas Confetti",
      "Vite",
      "ESLint"
    ],
    description: "Copia del reconocido juego. Se elige, aleatoriamente, una palabra de 5 letras y se gana descubriendola, tiene un límite de 6 intentos. Con cada intento el juego proporciona ayudas para adivinar la palabra. Las letras que no formen parte de la palabra secreta se pintan de gris. Las letras que formen parte de la palabra se pintan de amarillo y si además coincide la posición se pinta de verde. Al acertar la palabra se pintan todas las letras en verde y vuelan papelitos.",
    images: wordleGameImages,
    github_url: "https://github.com/Nicoiconi/WordleGame"
  },
  {
    name: "Login-Productos",
    technologies: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Redux Persist",
      "React Router DOM",
      "Axios",
      "HTML",
      "CSS",
      "Bootstrap",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT"
    ],
    description: "Acceso con usuario y contraseña. Formularios para crear y editar Usuarios, Productos y Categorias. Base de datos NoSQL, con referencia de Categoría en cada Producto. Estado global administrado por 'slices' con Redux Toolkit. React Router DOM le agrega una experiencia de navegación dinámica y fluida.",
    images: [],
    github_url: "https://github.com/Nicoiconi/Login-JWT-Productos"
  },
  {
    name: "Productos-Carrito",
    technologies: [
      "JavaScript",
      "React",
      "React Context",
      "React Hooks",
      "HTML",
      "CSS",
      "Local Storage",
      "Vite",
      "ESLinter"
    ],
    description: "Listado de productos con filtros combinados por categoria y precio, gestionados por contextos. Carrito de compras con almacenamiento local para persistir los datos.",
    images: [],
    github_url: "https://github.com/Nicoiconi/Productos-Carrito"
  },
  {
    name: "Comisiones App",
    technologies: [
      "JavaScript",
      "React",
      "React Router DOM",
      "Redux Toolkit",
      "HTML",
      "CSS",
      "Bootstrap",
      "Axios",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT"
    ],
    description: "Aplicación web desarrollada con el stack MERN. Se pueden crear, modificar y eliminar Productos, Categorías, Referidos, Proveedores, Usuarios y Pedidos. Al crear un pedido se seleccionan los productos, cantidades (no pueden superar la cantidad en stock), el Referido y el porcentaje de su comisión, el importe le acumulará en una propiedad.",
    images: [],
    github_url: "https://github.com/Nicoiconi/Comisiones-App"
  },
  {
    name: "TDD",
    technologies: [
      "JavaScript",
      "React",
      "HTML",
      "JSDom",
      "Vite",
      "Vitest",
      "React Testing Library",
      "ESLint",
      "Standard"
    ],
    description: "Tres proyectos desarrolladados con 'Test Driven Development' (o Desarrollo Guiado por Pruebas). Una metodología que se basa en primero escribir la prueba, asegurarse que no pase y luego escribir el código necesario que cumpla con los requisitos de la prueba.",
    images: [],
    github_url: "https://github.com/Nicoiconi/TDD"
  },
  {
    name: "Jest and TestingLibrary",
    technologies: [
      "JavaScript",
      "React",
      "React Hook Form",
      "Material UI",
      "Vite",
      "ESLint",
      "Standard",
      "Vitest",
      "Jest",
      "JSDom",
      "Babel",
      "Yup"
    ],
    description: "Formulario Login con validaciones de nombre de usuario y contraseña. Desarrollado a base de pruebas combinadas con Jest y Testing Library. Jest es un framework de pruebas completo para JavaScript. Una de sus cualidades es facilitar la simulación de 'mocks', información creada para no depender de componentes del sistema real. Testing Library se centra en las pruebas que simulan la interacción del usuario, como apretar botones, completar formularios, o verificar que los elementos se rendericen correctamente.",
    images: [],
    github_url: "https://github.com/Nicoiconi/Jest-and-TestingLibrary"
  }
]