FROM node:alpine

EXPOSE 3000

WORKDIR /app
COPY . .
RUN rm -rf node_modules/

RUN npm i -g pnpm
RUN pnpm install

CMD pnpm run dev
