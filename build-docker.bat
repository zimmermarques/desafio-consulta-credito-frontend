@echo off
set IMAGE_NAME=consulta-credito-app
set API_URL=http://localhost:8080/api

echo.
echo 🔧 Substituindo environment.ts com API_URL = %API_URL%

REM Substitui o template e gera o environment.ts final
powershell -Command "(Get-Content src/environments/environment.template.ts) -replace '\$\{API_URL\}', '%API_URL%' | Set-Content src/environments/environment.ts"

echo 🔧 Buildando Angular...
call npm install
call npm run build --prod

echo 🐳 Buildando Docker...
docker build -t %IMAGE_NAME% .

echo 🚀 Rodando container...
docker run -d -p 4200:80 --name %IMAGE_NAME% --rm %IMAGE_NAME%

echo ✅ Aplicação rodando em: http://localhost:4200
