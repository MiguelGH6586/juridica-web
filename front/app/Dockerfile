FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /usr/src/lab/front/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/lab/front/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install react-scripts@5.0.1 -g --silent
#RUN npm install --save react-dom @types/react @types/react-dom
COPY . .

# Build production
RUN npm run build
#RUN npm rebuild node-sass


#RUN npm install -g serve

## Start the app on port 3006
#CMD serve -s build -l 3000
#CMD ["npm", "start", "--host", "0.0.0.0", "--port", "3000", "--disableHostCheck", "true"]
CMD ["npm", "run", "dev"]
