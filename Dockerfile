
FROM node:lts
RUN git clone https://github.com/quiode/dominik-schwaiger.ch --branch release --single-branch
WORKDIR /dominik-schwaiger.ch
RUN npm install
RUN npm run build

# Configuration
LABEL version="0.0.2"
LABEL author="Dominik Schwaiger"
LABEL email="mail@dominik-schwaiger.ch"
LABEL homepage="dominik-schwaiger.ch"
LABEL description="My personal website"
LABEL ch.dominik-schwaiger.image.authors="mail@dominik-schwaiger.ch"

CMD node .output/server/index.mjs
EXPOSE 3000