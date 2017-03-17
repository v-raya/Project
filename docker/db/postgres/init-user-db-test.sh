#!/bin/bash

set -e

psql postgres -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE pguser_test;
    GRANT ALL PRIVILEGES ON DATABASE pguser_test TO pguser;
EOSQL

#FAS
psql -v -d pguser_test -f ./scripts/FASDDLStatements.sql -U pguser
psql -v -d pguser_test -f ./scripts/FASDMLStatements.sql -U pguser
psql -v -d pguser_test -f ./scripts/Create_Alter_FAS_Tables.sql -U pguser
psql -v -d pguser_test -f ./scripts/Insert_Facility_Info_LIS.sql -U pguser
psql -v -d pguser_test -f ./scripts/drop_facility_info_lis.sql -U pguser
psql -v -d pguser_test -f ./scripts/cals_cvl.sql -U pguser
psql -v -d pguser_test -f ./scripts/facility_info_lis.sql -U pguser

#LIS
psql -v -d pguser_test -f ./scripts/LISDDLStatements.sql -U pguser
