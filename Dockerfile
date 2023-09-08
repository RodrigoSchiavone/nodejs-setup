FROM node:12-slim as BUILDER
LABEL maintainer="Rodrigo Schiavone Rosa"

WORKDIR /usr/src/app


#Install app dependencies

COPY package*.json ./
RUN npm Install
COPY src ./src


FROM node:16-alphine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app ./

EXPOSE 3000

CMD ["npm", "start"]