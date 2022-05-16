
FROM node:16
ADD . /dominik-schwaiger.ch
WORKDIR /dominik-schwaiger.ch
RUN ls
RUN npm install
RUN npm run build

# Configuration
LABEL version="1.0.1"
LABEL author="Dominik Schwaiger"
LABEL email="mail@dominik-schwaiger.ch"
LABEL homepage="dominik-schwaiger.ch"
LABEL description="My personal website"
LABEL ch.dominik-schwaiger.image.authors="mail@dominik-schwaiger.ch"

CMD node .output/server/index.mjs
EXPOSE 3000