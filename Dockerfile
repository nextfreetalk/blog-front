FROM node:20-alpine
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm i
EXPOSE 3000
RUN ["npm", "run", "build"]
CMD ["npm", "run", "preview"]