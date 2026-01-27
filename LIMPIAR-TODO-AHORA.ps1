# Limpieza completa y automática
Write-Host "Borrando archivos innecesarios..." -ForegroundColor Yellow

$archivos = @(
"README.md","LEEME-PRIMERO.txt","EJECUTAR-TODO.bat","quitar-particulas.ps1",
"ACTUALIZACION-COMPLETA.txt","CAMBIOS.md","START-HERE.txt","LEEME.bat","GUIA-VISUAL.html",
"RESUMEN-COMPLETO.md","VISTA-PREVIA.md","CHECKLIST.md","PROYECTO-COMPLETADO.txt",
"SISTEMA-ACTIVO.txt","RESUMEN-PROYECTO.md","BIENVENIDA.html",
"GUIA-INSTALACION.md","GITHUB-SETUP.md","INICIO-RAPIDO.md",
"INICIO_RAPIDO.bat","INICIAR.bat","build.bat","start-dev.bat","limpiar.bat","deploy.bat",
"cleanup.ps1","delete-temp.bat","INSTRUCCIONES-FINAL.txt","DEPLOY-TODO.bat",
"HACER-TODO-AUTOMATICO.bat","setup-github.bat","deploy-github.bat","INICIAR_DASHBOARD.bat",
"FINAL-CLEAN-DEPLOY.bat"
)

$borrados = 0
foreach ($archivo in $archivos) {
    if (Test-Path $archivo) {
        Remove-Item -Force $archivo
        Write-Host "  ✓ $archivo" -ForegroundColor Green
        $borrados++
    }
}

Write-Host "`n$borrados archivos eliminados" -ForegroundColor Cyan

Write-Host "`nArchivos que quedan:" -ForegroundColor Yellow
Get-ChildItem -File | Where-Object { $_.Name -notmatch "node_modules|\.git|dist" } | Select-Object Name | Format-Table -AutoSize

Write-Host "`n✓ Tu PC está limpia!" -ForegroundColor Green
Write-Host "Solo quedan los archivos necesarios del proyecto" -ForegroundColor Gray

# Auto-eliminarse
Remove-Item -Force $MyInvocation.MyCommand.Path
