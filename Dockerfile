FROM node:20

# install programms
RUN npm install -g pnpm

# install packages
WORKDIR /dominik-schwaiger.ch
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

# Add source files
COPY . /dominik-schwaiger.ch
RUN pnpm run build

# second build stage for smaller docker image
FROM node:20

# Configuration
LABEL author="Dominik Schwaiger"
LABEL email="mail@dominik-schwaiger.ch"
LABEL homepage="https://dominik-schwaiger.ch"
LABEL description="My personal website"
LABEL ch.dominik-schwaiger.image.authors="mail@dominik-schwaiger.ch"
LABEL version="3.1.1"

ENV FILE_MOUNT=/dominik-schwaiger.ch/images/temp/
ENV IMAGE_FILES=/dominik-schwaiger.ch/images/
ENV SCHWAIGER_ADMIN_PASSWORD=admin
VOLUME /dominik-schwaiger.ch/images

WORKDIR /dominik-schwaiger.ch
COPY --from=0 /dominik-schwaiger.ch/.output/ /dominik-schwaiger.ch/

# final setup
CMD node server/index.mjs
EXPOSE 3000
