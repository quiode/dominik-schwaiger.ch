FROM node:16
# Configuration
LABEL author="Dominik Schwaiger"
LABEL email="mail@dominik-schwaiger.ch"
LABEL homepage="https://dominik-schwaiger.ch"
LABEL description="My personal website"
LABEL ch.dominik-schwaiger.image.authors="mail@dominik-schwaiger.ch"
LABEL version="2.3.0"

# install programms
RUN npm install -g pnpm

# install packages
WORKDIR /dominik-schwaiger.ch
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

# Add source files
COPY . /dominik-schwaiger.ch
RUN pnpm run build

# final setup
CMD node .output/server/index.mjs
EXPOSE 3000
