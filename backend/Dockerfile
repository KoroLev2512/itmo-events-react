ARG NODE_VERSION=18.17

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:${NODE_VERSION}-alpine
WORKDIR /app
USER node
ENV NODE_ENV=production
COPY --from=builder --chown=node:node /app ./
CMD ["node", "dist/main"]
