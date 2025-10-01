# Use Node.js LTS

# Use Node.js LTS with OpenSSL for Prisma
FROM node:18-alpine

# Install OpenSSL (required for Prisma)
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /app

# Install deps first
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Run dev mode (for hot reload with volumes)
CMD ["npm", "run", "dev"]
