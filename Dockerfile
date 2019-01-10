FROM ratneshraval/cals-test-base:0.2

RUN git clone https://github.com/ca-cwds/CALS.git cals

WORKDIR /cals

RUN cd /cals \
  && bundle install \
  && yarn install --frozen-lockfile --production=false

CMD sleep 1200
