# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos y carpetas del proyecto al directorio de trabajo actual del contenedor
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Define la variable de entorno para el modo de producción
ENV NODE_ENV=production

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
