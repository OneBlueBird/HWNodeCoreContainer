From node: 8.10.0

WORKDIR /app
ADD ./app
RUN npm install
EXPOSE 5000
CMD npm start
