FROM node:8.8.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN apt-get update
RUN apt-get install git
<<<<<<< HEAD
RUN npm i -g gulp

=======
RUN npm i -g flow-typed gulp nodemon
RUN flow-typed install styled-components@2.2.2
>>>>>>> develop
RUN yarn

EXPOSE 3000
CMD [ "npm", "start" ]
