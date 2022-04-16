
FROM fusuf/whatsasena:latest
RUN git clone https://github.com/White-Yazuwa/ffsp /root/ffsp
WORKDIR /root/ffsp/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
