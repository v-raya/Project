FROM ratneshraval/cals-test-base:0.3

COPY . /cals

WORKDIR /cals

RUN cd /cals \
  && bundle install \
  && yarn install --frozen-lockfile --production=false

CMD sleep 1200
