ARG DATA_DIR=/dominik-schwaiger.ch/public/images
ARG SCHWAIGER_ADMIN_PASSWORD=admin

FROM node:22

# Inherit ARGS from Global Scope
ARG DATA_DIR
ARG SCHWAIGER_ADMIN_PASSWORD

# Set Environment Variables
ENV DATA_DIR=${DATA_DIR}
ENV SCHWAIGER_ADMIN_PASSWORD=${SCHWAIGER_ADMIN_PASSWORD}

# install programms
RUN npm install -g pnpm

# install packages
WORKDIR /dominik-schwaiger.ch
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --shamefully-hoist

# Add source files
COPY . /dominik-schwaiger.ch
RUN pnpm run build

# second build stage for smaller docker image
FROM node:22
# Inherit ARGS from Global Scope
ARG DATA_DIR
ARG SCHWAIGER_ADMIN_PASSWORD

# Set Environment Variables
ENV DATA_DIR=${DATA_DIR}
ENV SCHWAIGER_ADMIN_PASSWORD=${SCHWAIGER_ADMIN_PASSWORD}

VOLUME ${DATA_DIR}

WORKDIR /dominik-schwaiger.ch
COPY --from=0 /dominik-schwaiger.ch/.output/ /dominik-schwaiger.ch/

# final setup
CMD node server/index.mjs
EXPOSE 3000
