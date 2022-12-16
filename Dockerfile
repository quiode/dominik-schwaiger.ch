
FROM node:16
# Configuration
LABEL version="2.2.0"
LABEL author="Dominik Schwaiger"
LABEL email="mail@dominik-schwaiger.ch"
LABEL homepage="https://dominik-schwaiger.ch"
LABEL description="My personal website"
LABEL ch.dominik-schwaiger.image.authors="mail@dominik-schwaiger.ch"

# install programms
RUN npm install -g pnpm

# install packages
WORKDIR /dominik-schwaiger.ch
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --shamefully-hoist

# Add source files
COPY . /dominik-schwaiger.ch
RUN pnpm run build

# final setup
CMD node .output/server/index.mjs
EXPOSE 3000