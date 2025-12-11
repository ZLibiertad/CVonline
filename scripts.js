/* -----  Inicializar AOS  ----- */
AOS.init({ once:true, offset:60 });

/* -----  Detectar preferencia de color del sistema  ----- */
const html = document.documentElement;
const preferencia = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
html.setAttribute('data-bs-theme', preferencia);
