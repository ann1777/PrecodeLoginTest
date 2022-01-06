FROM cypress/included:6.8.0

WORKDIR /app

COPY . /app

RUN mpm install

RUN npm run build

RUN npm run link

RUN npm run build:dynamic

EXPOSE 3000