# Use official Node.js base image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy everything inside ./server into the container
COPY . .

# Install only production dependencies
RUN npm install

# Expose app port
EXPOSE 4000

# Start the app using npm
CMD ["npm", "start"]
