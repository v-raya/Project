FROM ratneshraval/cals-base:0.6

COPY . /cals

WORKDIR /cals

RUN cd /cals \
  && bundle install \
  && yarn install
