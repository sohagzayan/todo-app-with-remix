# Base image
FROM node:14

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Set environment variables
ENV NODE_ENV=production

# Start the app
CMD ["npm", "start"]