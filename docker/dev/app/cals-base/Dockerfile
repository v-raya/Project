
# version 0.3

FROM ruby:latest

RUN gem install rails \
  && gem install puma

# Get latest nodejs PPA and other repos
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
  && apt-get install -y nodejs \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -y
RUN apt-get upgrade -y

RUN apt-get install -y nodejs yarn build-essential chrpath libssl-dev libxft-dev libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev \
    iceweasel \
    chromium \
    chromedriver \
    xvfb \
    bzip2 \
    qt5-default \
    libqt5webkit5-dev \
    gstreamer1.0-plugins-base \
    gstreamer1.0-tools \
    gstreamer1.0-x

RUN apt-get install -y gconf2

RUN ln -s /usr/lib/chromium/chromedriver /usr/bin/chromedriver

#### ENV variables
ENV PHANTOM_JS=phantomjs-2.1.1-linux-x86_64

# RUN wget --user-agent="Mozilla" https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2
# RUN wget 'https://cambriasolutionsinc-my.sharepoint.com/personal/dtalwar_cambriasolutions_com/_layouts/15/guestaccess.aspx?docid=07376a6ae3f3c45dea8a9135781a0bbfc&authkey=AaSPiMF0Aza3iH9SWKPDBsg' -O $PHANTOM_JS.tar.bz2
RUN wget 'https://drive.google.com/uc?export=download&id=0B8styZ_fXfKEQkFPTldZWkRYV3M' -O /usr/local/share/$PHANTOM_JS.tar.bz2

WORKDIR /usr/local/share/

RUN cd /usr/local/share/ \
  && tar xvjf $PHANTOM_JS.tar.bz2 \
  && ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/share/phantomjs \
  && ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin/phantomjs \
  && ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/bin/phantomjs
