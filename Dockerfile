FROM node:16 AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm build


FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
CMD ["npm","run", "start:prod"]