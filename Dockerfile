# Etapa 1: Construcción (Build)
FROM node:20-slim AS builder

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos todas las dependencias (incluyendo devDependencies para el build)
RUN npm install

# Copiamos el resto del código
COPY . .

# Generamos la carpeta dist (React + Vite)
RUN npm run build

# Etapa 2: Producción
FROM node:20-slim

WORKDIR /app

# Instalamos tsx de forma global para ejecutar server.ts
RUN npm install -g tsx

# Copiamos solo lo necesario desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server.ts ./

# Instalamos solo dependencias de producción
RUN npm install --omit=dev

# Configuramos variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=3000

# Exponemos el puerto interno
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["tsx", "server.ts"]
