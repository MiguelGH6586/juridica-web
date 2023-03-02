FROM node:18-alpine

WORKDIR /usr/src/lab/front/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/lab/front/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
# Silent clean install of npm
#RUN rm -rf node_modules
#RUN rm -f package-lock.json
#RUN npm cache clean --force
#RUN npm ci --silent
# add app
#RUN yarn add react
RUN npm install
RUN npm install react-scripts@5.0.1 -g --silent
RUN npm install --save react-dom @types/react @types/react-dom
COPY . .

# Build production
RUN npm run build
#RUN npm rebuild node-sass


#RUN npm install -g serve

## Start the app on port 3006
#CMD serve -s build -l 3000
CMD ["npm", "start", "--host", "0.0.0.0", "--port", "3000", "--disableHostCheck", "true"]