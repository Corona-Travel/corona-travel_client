FROM node:16

EXPOSE 3000

# install pnpm
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /ctc

ARG GMAP_KEY_SECRET=""
ENV NEXT_PUBLIC_API_URL http://3.12.143.140:8080/
ENV NEXT_PUBLIC_GMAP_KEY=$GMAP_KEY_SECRET

COPY ./package.json .
COPY ./pnpm-lock.yaml .
COPY ./cache .
RUN pnpm install

COPY . .
RUN pnpm run build
CMD pnpm run start
