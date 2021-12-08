FROM node:16

EXPOSE 3000

# install pnpm
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /ctc

COPY ./package.json .
COPY ./pnpm-lock.yaml .
RUN pnpm install

COPY . .
RUN pnpm run build
CMD pnpm run start
