#!/bin/bash

# VARIÁVEIS
APP_NAME="consulta-credito-app"
API_URL="${1:-http://localhost:8080/api}"  # Usa o 1º argumento ou um valor padrão

echo "🔧 Substituindo environment.ts com API_URL = $API_URL"

# Substitui variável no template
sed "s|\${API_URL}|$API_URL|g" src/environments/environment.template.ts > src/environments/environment.ts

echo "📦 Instalando dependências"
npm install

echo "🛠️  Buildando Angular..."
npm run build --prod

echo "🐳 Buildando imagem Docker..."
docker build -t $APP_NAME .

echo "🚀 Rodando container..."
docker run -d -p 4200:80 --name $APP_NAME --rm $APP_NAME

echo "✅ Aplicação disponível em: http://localhost:4200"
