# Web Clínica Dental

Web de la clínica dental Dentimédica (Cercedilla). HTML + CSS + JS, sin instalar nada. Publicada en Netlify.

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página principal (servicios, equipo, cita, horario…) |
| `tratamientos.html` | Detalle de tratamientos por especialidad (se elige con los botones de arriba) |
| `css/styles.css` | Diseño. Los colores de marca están arriba del todo (`--brand`) |
| `js/main.js` | Menú del móvil, carga del mapa y selector de tratamientos |
| `img/equipo/` | Fotos del equipo (las actuales son provisionales) |
| `gracias.html` | Página que ve el paciente tras pedir cita |
| `aviso-legal.html`, `privacidad.html`, `cookies.html` | Textos legales (plantillas) |
| `netlify.toml` | Configuración de Netlify |

## Cómo editar los datos

Busca `EDITAR` en todos los archivos `.html`: cada comentario marca un dato a sustituir
(nombre, teléfono, WhatsApp, dirección, horario, nº de registro sanitario, NIF…).

- **WhatsApp**: el formato del enlace es `https://wa.me/34XXXXXXXXX` (34 + número, sin espacios ni `+`).
- **Opiniones**: la sección enlaza a las reseñas de Google. Si añades reseñas en la web, que sean reales y con permiso del paciente.
- **Fotos del equipo**: sustituye las de `img/equipo/` por las reales (mismo nombre de archivo o cambia la ruta en `index.html`).

## Ver la web en local

Doble clic en `index.html` (el formulario solo funciona una vez publicada en Netlify).

## Publicar en Netlify

1. Sube este repo a GitHub.
2. En [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → elige el repo. No hace falta configurar nada más.
3. En **Site configuration → Forms**: activa la detección de formularios (*Enable form detection*) y vuelve a desplegar.
4. En **Forms → Form notifications** → añade una notificación por email para recibir cada cita.
5. Opcional: **Domain management** → conectar un dominio propio (p. ej. `clinicasonrisa.es`).

## Antes de publicar (checklist)

- [ ] Todos los `EDITAR` sustituidos
- [ ] Nº de registro sanitario visible en el footer (obligatorio en España)
- [ ] Textos legales revisados
- [ ] Cita de prueba enviada y recibida por email
