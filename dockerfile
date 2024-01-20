FROM node:18-alpine

#Create a app directory
WORKDIR /app

#Install app dependency
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app source
COPY . .

EXPOSE 5001

CMD [ "npm","start" ]