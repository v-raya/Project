# version 0.9

# versions at time of creation
# node : 8.12
# yarn : 1.12.3
# puma : 3.12.0

FROM ruby:2.5.1

ENV BASE_REFRESH=2018-11-27

# Get latest nodejs PPA and other repos
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
  && apt-get install -y nodejs \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -y && \
    apt-get upgrade -y

RUN gem install rails -v 5.1.6 \
  && gem install puma

RUN apt-get install -y \
    yarn \
    build-essential \
    sudo
