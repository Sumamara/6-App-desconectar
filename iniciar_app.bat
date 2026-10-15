@echo off
title App Desconectar - Servidor Local
echo ======================================================================
echo           INICIANDO APP DESCONECTAR (Sin Error 153 de YouTube)
echo ======================================================================
echo.

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python detectado. Iniciando servidor en http://localhost:3000 ...
    echo.
    echo Abriendo la app en tu navegador...
    start http://localhost:3000/App_desconectar.html
    echo.
    echo ----------------------------------------------------------------------
    echo Servidor activo. Presiona Ctrl + C en esta ventana para cerrarlo.
    echo ----------------------------------------------------------------------
    python -m http.server 3000
    goto end
)

where npx >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Node detectado. Iniciando servidor en http://localhost:3000 ...
    echo.
    echo Abriendo la app en tu navegador...
    start http://localhost:3000/App_desconectar.html
    echo.
    echo ----------------------------------------------------------------------
    echo Servidor activo. Presiona Ctrl + C en esta ventana para cerrarlo.
    echo ----------------------------------------------------------------------
    npx -y serve -l 3000 .
    goto end
)

echo [!] No se encontro Python ni Node en tu sistema.
echo Para evitar el Error 153 de YouTube, abre esta carpeta en VS Code y haz clic
echo derecho en App_desconectar.html -^> 'Open with Live Server'.
pause

:end
