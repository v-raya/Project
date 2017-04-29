FROM ruby:latest

RUN gem install rails

RUN gem install puma

RUN apt-get update && apt-get install -y nodejs

# Make ssh root dir
RUN mkdir /root/.ssh

# Copy over private key and set permissions
COPY id_rsa /root/.ssh/id_rsa
RUN chmod 700 /root/.ssh/id_rsa
RUN chown -R root:root /root/.ssh

# Create known_hosts
RUN touch /root/.ssh/known_hosts
# Add github's key
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

RUN mkdir /var/www

# Clone the mock-api
RUN git clone git@github.com:ca-cwds/cals-mock-api.git /var/www/cals-mock-api
# RUN git clone https://github.com/ca-cwds/cals-mock-api.git 

WORKDIR /var/www/cals-mock-api
RUN cd /var/www/cals-mock-api

RUN bundle install

RUN rake db:migrate RAILS_ENV=aws_dev

ENV ELASTICSEARCH_HOST_URL=http://calses:9200

# 20170427- the following 2 lines added as a workaround for aws_dev 
RUN cp /var/www/cals-mock-api/config/database.yml /var/www/cals-mock-api/config/database.bak
RUN sed s/devdb1.cs-cals.com/calspostgres/ < /var/www/cals-mock-api/config/database.bak > /var/www/cals-mock-api/config/database.yml

#CMD ["bundle", "exec", "rails", "server", "-e aws_dev", "--binding", "0.0.0.0", "-p 3001"]

CMD rails server -e aws_dev -p 3001 -b 0.0.0.0









