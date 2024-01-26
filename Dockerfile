FROM node:19.9.0-alpine3.17
WORKDIR /nest-back
COPY package.json .
RUN apk add --no-cache \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

RUN npm install bull-repl -g
RUN echo 'alias migrations="npm run typeorm:run-migrations"' >> /etc/profile
ENV ENV="/etc/profile"

COPY . .
EXPOSE 4001
CMD ["npm", "start"]