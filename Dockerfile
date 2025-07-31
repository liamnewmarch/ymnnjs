FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json .

RUN npm clean-install --only=production

CMD ["npm", "start"]
