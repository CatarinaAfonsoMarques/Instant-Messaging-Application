# syntax=docker/dockerfile:1
FROM node:20-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN set -eux; \
    if [ -f package-lock.json ]; then \
      npm ci --omit=dev; \
    else \
      npm install --omit=dev; \
    fi

# Copy source
COPY . .
EXPOSE 3001
CMD ["node", "server.js"]