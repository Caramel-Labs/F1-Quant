# Use official Node.js base image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy rest of the application
COPY . .

# Expose app port
EXPOSE 4000

# Start the app using npm
CMD ["npm", "start"]
