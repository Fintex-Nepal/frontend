# Use the official Node.js LTS (Long-Term Support) image as the base image
FROM node:18.14.0 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use the Nginx image as the production server
FROM nginx:latest as production-stage

# Copy the production build from the previous stage to the Nginx server's web root
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose the port that Nginx will listen on
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]