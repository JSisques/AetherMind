# Usa una imagen base de Node.js
FROM node:18-alpine AS base

# Establece el directorio de trabajo en la aplicación
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm ci

# Copia los archivos y carpetas del proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa de producción
FROM node:18-alpine AS production

WORKDIR /app

# Copia los archivos necesarios desde la etapa base
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# Expone el puerto 80
EXPOSE 80

# Define la variable de entorno para el modo de producción
ENV NODE_ENV=production

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
