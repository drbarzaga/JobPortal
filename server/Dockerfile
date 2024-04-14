FROM node:18.18.0
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5500
CMD ["npm", "run", "start"]

