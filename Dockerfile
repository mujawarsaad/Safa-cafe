# Stage 1

#Base image
FROM node:20-alpine AS builder

#Working directory
WORKDIR /app

#Copy the code 
COPY . /app

#Install dependencies
RUN npm install
RUN npm run build

# Stage 2

#Base image
FROM nginx:1.27-alpine

#Copy the code
COPY --from=builder /app/dist /usr/share/nginx/html

#Port expose
EXPOSE 80

#Run the code
CMD ["nginx", "-g", "daemon off;"]
