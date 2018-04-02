FROM ratneshraval/cals-base:0.6

COPY . /cals

WORKDIR /cals

RUN cd /cals \
  && bundle install \
  && yarn install

# ENV variables
ENV CAPYBARA_APP_HOST=https://web.preint.cwds.io/cals \
  CALS_API_URL=https://calsapi.preint.cwds.io \
  BASE_SEARCH_API_URL=https://dora.preint.cwds.io \
  GEO_SERVICE_URL=https://geo.preint.cwds.io \
  AUTHENTICATION_API_BASE_URL=https://web.preint.cwds.io/perry
