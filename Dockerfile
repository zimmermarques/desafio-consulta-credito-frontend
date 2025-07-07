# Etapa 1: Build da aplicação
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --prod

# Etapa 2: Servir com Nginx
FROM nginx:alpine

# Remove o nginx default
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos buildados
COPY --from=build /app/dist/consulta-credito/browser /usr/share/nginx/html

# Copia config customizada do nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
