FROM node:22

ENV NODE_ENV=development

RUN mkdir -p /var/www/courier-my-contract

WORKDIR /var/www/courier-my-contract

COPY . /var/www/courier-my-contract

RUN yarn install

CMD yarn run start:dev
