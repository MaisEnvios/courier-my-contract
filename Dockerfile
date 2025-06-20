FROM node:20

ENV NODE_ENV=development

RUN mkdir -p /var/www/courier-my-contract

WORKDIR /var/www/courier-my-contract

RUN if [-f yarn.lock]; then cp yarn.lock ./; fi

COPY . .

CMD ["yarn", "start:dev"]
