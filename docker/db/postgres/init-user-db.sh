#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER pguser;
    CREATE DATABASE pguser;
    GRANT ALL PRIVILEGES ON DATABASE pguser TO pguser;
EOSQL

#FAS
psql -v -d pguser -f /tmp/FASDDLStatements.sql -U pguser
psql -v -d pguser -f /tmp/FASDMLStatements.sql -U pguser
psql -v -d pguser -f /tmp/Create_Alter_FAS_Tables.sql -U pguser
psql -v -d pguser -f /tmp/Insert_Facility_Info_LIS.sql -U pguser
psql -v -d pguser -f /tmp/drop_facility_info_lis.sql -U pguser
psql -v -d pguser -f /tmp/cals_cvl.sql -U pguser
psql -v -d pguser -f /tmp/facility_info_lis.sql -U pguser

#LIS
psql -v -d pguser -f /tmp/LISDDLStatements.sql -U pguser


