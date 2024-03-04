# Stage 1: Build the React app
FROM node:20 as build

WORKDIR /frontend


COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Use a smaller image for serving the built app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /frontend/build /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

# The default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
