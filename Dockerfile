
FROM fusuf/whatsasena:latest
RUN git clone https://github.com/xRASHMITH/Aquabot-By-Sanuwa /root/aquabot
WORKDIR /root/aquabot/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
