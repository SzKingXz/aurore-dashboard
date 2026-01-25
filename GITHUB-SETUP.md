# 🔗 Guía Rápida de GitHub

## Paso 1: Instala Git (si no lo tienes)

```bash
# Verifica si Git está instalado
git --version
```

Si no está instalado:
1. Descarga de: https://git-scm.com/download/win
2. Instala con opciones por defecto
3. Reinicia tu terminal

## Paso 2: Configura Git (Primera vez)

```bash
# Configura tu nombre
git config --global user.name "Tu Nombre"

# Configura tu email (usa el mismo de GitHub)
git config --global user.email "tu@email.com"

# Verifica la configuración
git config --list
```

## Paso 3: Crea el Repositorio en GitHub

1. Ve a: **https://github.com/new**
2. Repository name: **aurore-dashboard**
3. Description: **AURØRE - Modern Discord Bot Dashboard**
4. Public o Private (tu elección)
5. **¡NO MARQUES NADA MÁS!**
6. Click **"Create repository"**

## Paso 4: Conecta el Proyecto

Abre PowerShell o CMD en la carpeta del proyecto:

```bash
cd C:\Users\Administrator\Documents\aurore-dashboard
```

### Si es la primera vez:

```bash
# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: AURORE Dashboard"

# Conecta con GitHub (REEMPLAZA TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/aurore-dashboard.git

# Cambia a branch main
git branch -M main

# Sube todo
git push -u origin main
```

### Ejemplo con usuario real:

```bash
git remote add origin https://github.com/johndoe/aurore-dashboard.git
git branch -M main
git push -u origin main
```

## Paso 5: Autenticación

Cuando hagas `git push`, te pedirá credenciales:

### Opción A: HTTPS (Recomendado para principiantes)
- Username: Tu usuario de GitHub
- Password: **Personal Access Token** (NO tu contraseña normal)

**¿Cómo crear un Personal Access Token?**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)"
3. Nombre: "AURORE Dashboard"
4. Selecciona: `repo` (todos los permisos de repositorio)
5. "Generate token"
6. **¡COPIA EL TOKEN INMEDIATAMENTE!** (solo se muestra una vez)
7. Usa este token como contraseña

### Opción B: SSH (Para usuarios avanzados)
```bash
# Genera una clave SSH
ssh-keygen -t ed25519 -C "tu@email.com"

# Agrega la clave a GitHub
# Copia el contenido de: C:\Users\Administrator\.ssh\id_ed25519.pub
# Pégalo en GitHub → Settings → SSH and GPG keys → New SSH key

# Usa URL SSH en lugar de HTTPS
git remote set-url origin git@github.com:TU_USUARIO/aurore-dashboard.git
```

## Paso 6: Verifica que Funcionó

```bash
# Verifica el remote
git remote -v

# Deberías ver algo como:
# origin  https://github.com/TU_USUARIO/aurore-dashboard.git (fetch)
# origin  https://github.com/TU_USUARIO/aurore-dashboard.git (push)
```

Ve a tu repositorio en GitHub y deberías ver todos los archivos.

## Comandos Útiles de Git

```bash
# Ver estado de archivos
git status

# Ver historial de commits
git log --oneline

# Crear un nuevo commit
git add .
git commit -m "Mensaje descriptivo"
git push

# Ver diferencias
git diff

# Deshacer cambios no guardados
git checkout -- nombre-archivo

# Ver branches
git branch

# Cambiar de branch
git checkout nombre-branch

# Crear nuevo branch
git checkout -b nuevo-branch
```

## Flujo de Trabajo Normal

Cada vez que hagas cambios:

```bash
# 1. Verifica qué cambió
git status

# 2. Agrega los cambios
git add .

# 3. Haz commit con mensaje descriptivo
git commit -m "Add: nueva funcionalidad de notificaciones"

# 4. Sube a GitHub
git push
```

## Mensajes de Commit Recomendados

```bash
# Buenos ejemplos:
git commit -m "Add: sistema de notificaciones"
git commit -m "Fix: error en gráficos de actividad"
git commit -m "Update: colores del tema"
git commit -m "Remove: código sin usar"
git commit -m "Refactor: componente de sidebar"

# Malos ejemplos:
git commit -m "cambios"
git commit -m "update"
git commit -m "asdfasdf"
```

## Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/aurore-dashboard.git
```

### Error: "Permission denied"
- Verifica tus credenciales
- Usa Personal Access Token en vez de contraseña
- O configura SSH

### Error: "Repository not found"
- Verifica que el repositorio exista en GitHub
- Verifica que escribiste bien el username
- Verifica los permisos

### Quiero empezar de nuevo
```bash
# ¡CUIDADO! Esto borra el historial de Git
rm -rf .git
git init
# Luego repite desde el Paso 4
```

## GitHub Pages (Hosting Gratis)

Después de subir el código:

```bash
# Despliega con un comando
npm run deploy
```

O manualmente:
1. GitHub → Tu repositorio → Settings
2. Pages (menú lateral)
3. Source: **gh-pages** branch
4. Save
5. Espera 5-10 minutos
6. Tu sitio estará en: `https://TU_USUARIO.github.io/aurore-dashboard/`

## URLs Importantes

- Tu repositorio: `https://github.com/TU_USUARIO/aurore-dashboard`
- Tu dashboard desplegado: `https://TU_USUARIO.github.io/aurore-dashboard/`
- Crear token: `https://github.com/settings/tokens`
- Ayuda de GitHub: `https://docs.github.com/`

---

## Scripts que Facilitan Todo

En lugar de escribir comandos, usa los scripts:

- **setup.bat** - Configura todo automáticamente
- **start-dev.bat** - Inicia servidor de desarrollo
- **build.bat** - Construye para producción
- **deploy.bat** - Despliega a GitHub Pages

---

**¡Listo! Ahora tienes tu dashboard en GitHub! 🎉**
