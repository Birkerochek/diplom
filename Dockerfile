# Stage 1: deps + build
FROM node:22.20.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# если нужны Prisma артефакты в образе:
RUN npx prisma generate
RUN npm run build

# Stage 2: runtime
FROM node:22.20.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# переменные окружения передавайте при запуске контейнера или через --env-file
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
# если нужен сгенерированный Prisma клиент:
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
EXPOSE 3000
CMD ["npm", "run", "start"]
