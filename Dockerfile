# Usamos una imagen de Node ligera
FROM node:20-slim

# Creamos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código (incluyendo la carpeta src)
COPY . .

# Si usas Vite, probablemente necesites buildear el proyecto
RUN npm run build

# Exponemos el puerto que usa tu servidor (ajusta el 3000 si usas otro)
EXPOSE 3000

# Comando para arrancar la app
CMD ["npm", "start"]
