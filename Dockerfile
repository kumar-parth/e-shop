FROM nginx:latest

RUN apt update -y

RUN apt install nginx -y

WORKDIR /app

COPY nginx.conf /etc/nginx/nginx.conf

COPY build /app