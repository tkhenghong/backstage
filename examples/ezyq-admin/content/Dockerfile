# build environment
FROM node:17-alpine as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

# production environment
# FROM nginx:stable-alpine
# FROM nginx:1.20.1-alpine
# non root nginx. openshift does not allow running container as root
FROM nginxinc/nginx-unprivileged:1.23-alpine
# RUN apk update && apk upgrade
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


