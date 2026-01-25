# 🌟 AURØRE Dashboard

**Dashboard interactivo y funcional para gestión de bots de Discord con diseño cyberpunk**

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Demo en Vivo

**👉 [Ver Dashboard](https://szkingxz.github.io/aurore-dashboard/)**

## ✨ Características

### 📊 Dashboard Principal
- **Estadísticas en tiempo real**: Usuarios totales, usuarios activos, mensajes y comandos
- **Gráficos interactivos**: Visualización de actividad con Recharts
- **Sistema de logs**: Seguimiento de eventos del servidor en tiempo real
- **Top Commands**: Ranking de comandos más utilizados

### 🛡️ Sistema de Moderación
- **Quick Actions**: Ban, Kick, Warn y Timeout rápidos
- **Estadísticas de moderación**: Bans y warns del día
- **Auto-Mod activo**: Sistema de moderación automática
- **Modales funcionales**: Formularios para acciones de moderación

### 💬 Constructor de Embeds
- **Editor en tiempo real**: Crea embeds personalizados
- **Preview instantáneo**: Visualiza los cambios al instante
- **Selector de colores**: Personaliza el color del embed
- **Campos configurables**: Título, descripción, imágenes y thumbnails

### 🎨 Diseño
- **Tema cyberpunk/tech**: Colores cyan y purple con efectos neón
- **Partículas animadas**: Fondo dinámico con partículas flotantes
- **Efectos hover**: Interacciones suaves y atractivas
- **Sidebar colapsable**: Optimiza el espacio de trabajo
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 🛠️ Tecnologías

- **React 18** - Framework frontend
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilos utility-first
- **Recharts** - Gráficos interactivos
- **Lucide React** - Iconos modernos
- **GitHub Pages** - Hosting gratuito

## 📦 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/SzKingXz/aurore-dashboard.git
cd aurore-dashboard

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run deploy   # Deploy a GitHub Pages
```
## 🎯 Estructura del Proyecto

```
aurore-dashboard/
├── src/
│   ├── components/
│   │   └── BotDashboard.jsx  # Componente principal
│   ├── App.jsx               # App root
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globales
├── public/                  # Assets estáticos
├── dist/                    # Build de producción
├── package.json            # Dependencias
├── vite.config.js         # Configuración Vite
└── tailwind.config.js     # Configuración Tailwind
```

## 🎨 Paleta de Colores

- **Primary Cyan**: `#00E5FF` - Acentos principales
- **Primary Purple**: `#7C6CFF` - Acentos secundarios
- **Background Dark**: `#0B0E14` - Fondo principal
- **Surface**: `#1C1F26` - Tarjetas y superficies
- **Text**: `#EDEFF4` - Texto principal

## 🔧 Configuración de GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. El `base` en `vite.config.js` está configurado como `/aurore-dashboard/`
2. Usa `npm run deploy` para desplegar cambios
3. La rama `gh-pages` se crea automáticamente

## 📝 Funcionalidades Implementadas

### ✅ Completado
- [x] Dashboard con estadísticas
- [x] Gráficos de actividad
- [x] Sistema de logs
- [x] Módulo de moderación
- [x] Constructor de embeds funcional
- [x] Sidebar navegable
- [x] Sistema de notificaciones
- [x] Modales interactivos
- [x] Tooltips informativos
- [x] Tema dark con efectos

### 🚧 En Desarrollo
- [ ] Integración con API real
- [ ] Sistema de autenticación
- [ ] Base de datos
- [ ] Más módulos (Economía, Juegos, Música)
- [ ] Modo claro/oscuro

## 🤝 Contribuir

Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👤 Autor

**SzKingXz**
- GitHub: [@SzKingXz](https://github.com/SzKingXz)
- Proyecto: [aurore-dashboard](https://github.com/SzKingXz/aurore-dashboard)

## 🌟 Showcase

### Dashboard Principal
![Dashboard Overview](https://via.placeholder.com/800x400/0B0E14/00E5FF?text=Dashboard+Overview)

### Sistema de Moderación
![Moderation](https://via.placeholder.com/800x400/0B0E14/00E5FF?text=Moderation+System)

### Constructor de Embeds
![Embed Builder](https://via.placeholder.com/800x400/0B0E14/00E5FF?text=Embed+Builder)

---

⭐️ **Si te gusta este proyecto, dale una estrella en GitHub!**

🚀 **Desarrollado con ❤️ usando React + Vite**