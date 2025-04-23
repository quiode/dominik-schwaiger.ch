FROM node:22

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
FROM node:22

ENV FILE_MOUNT=/dominik-schwaiger.ch/images/temp/
ENV SCHWAIGER_ADMIN_PASSWORD=admin
VOLUME /dominik-schwaiger.ch/images

WORKDIR /dominik-schwaiger.ch
COPY --from=0 /dominik-schwaiger.ch/.output/ /dominik-schwaiger.ch/

# final setup
CMD node server/index.mjs
EXPOSE 3000
