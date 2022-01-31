
FROM fusuf/whatsasena:latest
RUN git clone https://github.com/iamMagma/ptsp /root/QueenMizuki
WORKDIR /root/QueenMizuki/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
