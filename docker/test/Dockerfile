FROM ratneshraval/cals-base:0.6

COPY . /cals

WORKDIR /cals

RUN cd /cals \
  && bundle install \
  && yarn install --frozen-lockfile --production=false

CMD sleep 600
