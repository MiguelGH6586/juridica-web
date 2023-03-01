FROM node:17-alpine

# RUN npm install -g nodemon

WORKDIR /usr/src/lab/front/app

ENV PATH  /usr/src/lab/front/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install

# RUN npm install react-scripts@^18.2.0 -g --silent

COPY . .

RUN npm run build


CMD ["npm", "start"]