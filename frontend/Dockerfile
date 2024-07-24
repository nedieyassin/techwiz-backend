# Use an official Node runtime as the base image
FROM node:alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built React app using Nginx
FROM nginx:alpine

# Copy the Nginx configuration file that includes redirect to root
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the 'build' stage to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server when the container launches
CMD ["nginx", "-g", "daemon off;"]
