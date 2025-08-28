# Build stage
FROM node:20-alpine AS builder
WORKDIR /var/www/courier-my-contract
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Production stage  
FROM node:20-alpine AS production
WORKDIR /var/www/courier-my-contract
COPY --from=builder /var/www/courier-my-contract/dist ./dist
COPY --from=builder /var/www/courier-my-contract/.env.development ./.env.development
COPY --from=builder /var/www/courier-my-contract/node_modules ./node_modules
COPY package.json ./
CMD ["node", "dist/main"]
