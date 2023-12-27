const productos = [
    {
      id: "vhC4NX",
      nombre: "Impresión Laser Color Frente - Papel Obra 75 grs. - 210 x 297 mm.",
      descripcion: {titulo: "Impresión Digital Laser Color", medida: "Medida: 210 x 297 mm.", ai: "Área de impresión: 200 x 280 mm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ilc-a4-frente.jpeg",
      precio: 700,
      stock: 2,
      categoria: "impresion-laser-color"
    },
    {
      id: "me3Xx2",
      nombre: "Impresión Laser Color Frente - Papel Obra 90 grs. - 324 x 474 mm.",
      descripcion: {titulo: "Impresión Digital Laser Color", medida: "Medida: 324 x 474 mm.", ai: "Área de impresión: 310 x 460 mm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ilc-sa3-frente.jpeg",
      precio: 1400,
      stock: 12,
      categoria: "impresion-laser-color"
    },
    {
      id: "lUJ7w8",
      nombre: "Impresión Laser Color Frente - Papel Kraft Liner 200 grs. - 297 x 420 mm.",
      descripcion: {titulo: "Impresión Digital Laser Color", medida: "Medida: 297 x 420 mm.", ai: "Área de impresión: 200 x 410 mm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ilc-a3-frente.jpeg",
      precio: 1800,
      stock: 8,
      categoria: "impresion-laser-color"
    },
    {
      id: "v8LiBO",
      nombre: "Impresión Laser Color Frente y Dorso - Papel Kraft Liner 200 grs. - 297 x 420 mm.",
      descripcion: {titulo: "Impresión Digital Laser Color", medida: "Medida: 297 x 420 mm.", ai: "Área de impresión: 200 x 410 mm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ilc-a3-frente-dorso.jpeg",
      precio: 2600,
      stock: 14,
      categoria: "impresion-laser-color"
    },
    {
      id: "2VjBWt",
      nombre: "Impresión para Sublimar - Papel 72 grs. - A4",
      descripcion: {titulo: "Impresión con tinta para Sublimar", medida: "Medida: A4 (21x29,7cm.)", ai: "Área de impresión: 20x28cm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ips-a4.jpeg",
      precio: 940,
      stock: 4,
      categoria: "impresion-para-sublimar"
    },
    {
      id: "rJyAD5",
      nombre: "Impresión para Sublimar - Papel 72 grs. - A3",
      descripcion: {titulo: "Impresión con tinta para Sublimar", medida: "Medida: A3 (29,7x42cm.)", ai: "Área de impresión: 28x41cm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ips-a3.jpeg",
      precio: 1140,
      stock: 2,
      categoria: "impresion-para-sublimar"
    },
    {
      id: "00Siup",
      nombre: "Impresión para Sublimar - Papel 72 grs. - EA3",
      descripcion: {titulo: "Impresión con tinta para Sublimar", medida: "Medida: EA3 (32,9x48,3cm.)", ai: "Área de impresión: 31x47cm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ips-ea3.jpeg",
      precio: 1220,
      stock: 8,
      categoria: "impresion-para-sublimar"
    },
    {
      id: "13qWLe",
      nombre: "Impresión para Sublimar - Papel 72 grs. - 1 Metro",
      descripcion: {titulo: "Impresión con tinta para Sublimar", medida: "Medida: 1 Metro (110x100cm.)", ai: "Área de impresión: 109x99cm.", cantidadImpresa: "Cantidad: 1 unidad"},
      imagen: "/img/productos/ips-metro.jpeg",
      precio: 3900,
      stock: 10,
      categoria: "impresion-para-sublimar"
    }
];

const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

export default obtenerProductos