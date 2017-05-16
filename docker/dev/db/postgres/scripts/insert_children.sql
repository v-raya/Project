
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
CREATE TABLE IF NOT EXISTS children (
  first_name character varying(254),
    last_name character varying(254),
    date_of_birth date,
    assigned_worker character varying(254),
    sex character varying(254),
    date_of_placement date,
    county_of_origin character varying(254),
    facility_id integer
);


ALTER TABLE children OWNER TO pguser;

INSERT INTO children VALUES ('Tom', 'Doe', '2010-01-01', 'Jane Doe', 'M', '2010-01-05', 'Sacramento', '909453695');
INSERT INTO children VALUES ('Jane', 'Doe', '2010-01-01', 'Tom Doe', 'F', '2010-01-05', 'Los Angeles', '909453695');
