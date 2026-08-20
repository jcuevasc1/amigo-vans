# Guía paso a paso — Amigo Vans

De tu laptop → GitHub → Hostinger, funcionando solo (auto-deploy).

Esta guía asume que estás empezando de cero **en esta laptop** (diferente a
la que usas para tu otro proyecto), así que empezamos revisando que las
herramientas estén instaladas.

---

## 0. Arquitectura del flujo

```
Carpeta local (C:\amgo)
      │  git push
      ▼
GitHub (repo nuevo, misma cuenta, separado de tus otros proyectos)
      │  auto-deploy (webhook)
      ▼
Hostinger (Git deploy en hPanel) → tu dominio
```

Cada vez que hagas `git push`, Hostinger jala los archivos y los publica en
tu dominio automáticamente. No hay que subir nada por FTP a mano.

---

## 1. Instalar Git en esta laptop

Abre **PowerShell** y revisa si ya está instalado:

```powershell
git --version
```

Si te dice que no reconoce el comando, instálalo con:

```powershell
winget install --id Git.Git -e --source winget
```

Cierra y vuelve a abrir PowerShell después de instalar.

> Git para Windows ya incluye **Git Credential Manager**, que te va a pedir
> iniciar sesión con tu cuenta de GitHub en el navegador la primera vez que
> hagas `push`. No necesitas configurar tokens a mano.

---

## 2. Configurar tu identidad en Git (solo la primera vez en esta laptop)

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
```

Usa el mismo correo con el que tienes tu cuenta de GitHub.

---

## 3. Crear el repositorio en GitHub

1. Entra a [github.com](https://github.com) con tu cuenta (la misma que ya usas).
2. Arriba a la derecha → **"+"** → **New repository**.
3. Nombre del repo: `amigo-vans`
4. Visibilidad: **Private** (recomendado, ya que aún no es público).
5. **No marques** "Add a README" (ya tenemos archivos locales).
6. Clic en **Create repository**.
7. GitHub te va a mostrar una URL parecida a:
   `https://github.com/TU-USUARIO/amigo-vans.git`
   — guárdala, la usamos en el siguiente paso.

---

## 4. Conectar tu carpeta local con GitHub

En PowerShell:

```powershell
cd C:\amgo
git init
git add .
git commit -m "Primer commit - diseño inicial del sitio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/amigo-vans.git
git push -u origin main
```

La primera vez que hagas `push`, se va a abrir el navegador para que
inicies sesión en GitHub y autorices el acceso. Después de eso, ya no te
lo va a volver a pedir en esta laptop.

Cuando termine, refresca la página de tu repo en GitHub — deberías ver
todos los archivos (`index.html`, `css/`, `js/`, `fotosVans/`, etc.).

---

## 5. Conectar Hostinger con GitHub (Git deploy automático)

Cuando ya tengas tus credenciales de Hostinger:

1. Entra a **hPanel** → tu sitio web → **Dashboard**.
2. En el menú lateral: **Advanced → Git**.
3. Clic en **"Continue with GitHub"** (o "Connect with GitHub").
4. Autoriza la aplicación de Hostinger en tu cuenta de GitHub — puedes
   darle acceso solo al repositorio `amigo-vans` (no a todos tus repos).
5. Selecciona el repositorio `amigo-vans`.
6. Configura:
   - **Branch (rama):** `main`
   - **Directorio raíz:** `public_html` (déjalo así para que sea la raíz de tu dominio)
7. Clic en **Deploy**.

A partir de aquí, cada `git push` a `main` se va a desplegar solo en tu
dominio en 1-2 minutos. También puedes forzar un "Redeploy" manual desde
el mismo panel si algo no se actualiza.

> Nota: esta función de Hostinger sirve los archivos "tal cual" (no corre
> `npm install` ni procesos de build). Como por ahora es HTML/CSS/JS puro,
> no hay ningún problema — funciona perfecto.

---

## 6. Conectar tu dominio

Como ya tienes el dominio comprado, hay dos casos:

**A) Lo compraste en Hostinger:** se conecta automáticamente al crear tu
hosting, no tienes que hacer nada extra.

**B) Lo compraste en otro lado** (GoDaddy, Namecheap, etc.): tienes dos
opciones:
- Cambiar los **nameservers** del dominio a los de Hostinger (más simple,
  Hostinger maneja todo el DNS).
- O dejar el dominio donde está y solo apuntar los registros **A** y
  **CNAME** hacia Hostinger (si quieres manejar otras cosas de DNS ahí).

Cuando tengas listas las credenciales de Hostinger, dime dónde compraste
el dominio y te doy los pasos exactos para tu caso.

---

## 7. Flujo de trabajo diario (una vez configurado todo)

Cada vez que quieras subir un cambio (editando aquí en Claude o tú mismo
en la laptop):

```powershell
cd C:\amgo
git add .
git commit -m "Describe brevemente el cambio"
git push
```

Y listo — Hostinger lo despliega solo.

---

## 8. Qué sigue (roadmap)

- [ ] Reemplazar las fotos de referencia por fotos reales de proyectos terminados
- [ ] Ajustar textos, teléfono y correo de contacto reales
- [ ] Conectar el dominio en Hostinger cuando tengas las credenciales
- [ ] Sistema de citas/reservaciones (más adelante, cuando el sitio esté listo)
- [ ] Base de datos + cobro de anticipo con PayPal (fase de plataforma)

Estos últimos dos puntos van a requerir backend (por ejemplo PHP + MySQL,
que Hostinger incluye) — lo planeamos juntos cuando lleguemos a esa etapa.
