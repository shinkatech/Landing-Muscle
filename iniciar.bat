@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if not %errorlevel%==0 (
  echo Node.js nao encontrado. Instale em https://nodejs.org e rode de novo.
  pause
  exit /b
)
if not exist node_modules (
  echo Instalando dependencias, aguarde...
  call npm install
)
echo.
echo  Forja Academia rodando em http://localhost:5173  (feche esta janela para parar)
call npm run dev
pause
