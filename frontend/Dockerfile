FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install || true
COPY . .
RUN npm run build || true

FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
