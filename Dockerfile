FROM fusuf/whatsasena:latest

RUN git clone https://github.com/iamMagma/ptsp /root/wabotcobra
WORKDIR /root/wabotcobra/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit


CMD ["node", "cbot.js"]
