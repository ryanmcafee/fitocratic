FROM mhart/alpine-node

RUN mkdir /data
WORKDIR /app

# Need python to build bcrypt (node-gyp)
RUN apk add --no-cache \
    python \
    gcc \
    build-base

# Env vars
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production
ENV PORT 3000
ENV DEBUG app:*,lib:*

# Install deps
COPY package.json package.json
RUN npm install

# Copy over app data
COPY scss scss
COPY www www
COPY screenshots screenshots
COPY resources resources
COPY plugins plugins
COPY platforms platforms
COPY hooks hooks
COPY README.md README.md
COPY server.js server.js

EXPOSE 3000
CMD ["node", "server.js"]
