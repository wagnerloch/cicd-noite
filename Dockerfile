# ESTÁGIO 1 - BUILDER
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ESTÁGIO 2 - PRODUÇÃO
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY package*.json ./

RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start"]
