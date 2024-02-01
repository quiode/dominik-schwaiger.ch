FROM node:16

# install programms
RUN npm install -g pnpm

# install packages
WORKDIR /dominik-schwaiger.ch
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

VOLUME [ "/dominik-schwaiger.ch" ]

# final setup
CMD pnpm dev
EXPOSE 3000
