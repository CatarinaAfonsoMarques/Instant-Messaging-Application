# syntax=docker/dockerfile:1
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN set -eux; \
    if [ -f package-lock.json ]; then \
      npm ci --omit=dev; \
    else \
      npm install --omit=dev; \
    fi

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]