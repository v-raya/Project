
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: children; Type: TABLE; Schema: public; Owner: pguser
--
CREATE TABLE IF NOT EXISTS complaints (
  complaint_date date,
    assigned_worker character varying(254),
    control_number character varying(254),
    priority_level integer,
    status character varying(254),
    approval_date date,
    facility_id integer
);


ALTER TABLE complaints OWNER TO pguser;

INSERT INTO complaints VALUES ('2010-01-01', 'Tom Doe', '23-CR20170105112053', '2', 'Pending', '2010-01-05', '909453695');
INSERT INTO complaints VALUES ('2010-02-03', 'Jan Doe', '12-CR20161205112053', '2', 'Pending', '2010-03-05', '909453695');
