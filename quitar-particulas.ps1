# Script para quitar partículas y grid del dashboard

$dashboardPath = "src\components\BotDashboard.jsx"
$content = Get-Content $dashboardPath -Raw

# 1. Quitar el estado de partículas
$content = $content -replace '\s*const \[particles, setParticles\] = useState\(\[\]\);', ''

# 2. Quitar el useEffect de partículas
$content = $content -replace '(?s)useEffect\(\(\) => \{[^}]*setParticles\(newParticles\);[^}]*\}, \[\]\);', ''

# 3. Quitar las partículas del JSX en landing
$content = $content -replace '(?s)<div className="fixed inset-0 pointer-events-none">\s*\{particles\.map\([^}]+\}\)\}\s*</div>', ''

# 4. Quitar el grid de fondo
$content = $content -replace '(?s)<div className="fixed inset-0 pointer-events-none opacity-10">[^<]*<div className="absolute inset-0"[^>]*></div>\s*</div>', ''

# 5. Cambiar fondo a gradiente limpio
$content = $content -replace 'min-h-screen bg-gray-900 relative overflow-hidden', 'min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'

# 6. Quitar el keyframe de float
$content = $content -replace '(?s)<style[^>]*>\{`@keyframes float[^`]+`\}</style>', ''

# Guardar cambios
$content | Set-Content $dashboardPath -NoNewline

Write-Host "✓ Partículas y grid eliminados del dashboard" -ForegroundColor Green
Write-Host "✓ Fondo ahora es un gradiente limpio" -ForegroundColor Green
