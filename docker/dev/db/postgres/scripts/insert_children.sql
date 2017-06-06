--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

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

CREATE SEQUENCE children_id_seq;

--
-- Name: children; Type: TABLE; Schema: public; Owner: pguser
--

CREATE TABLE children (
    id integer DEFAULT nextval('children_id_seq'::regclass) NOT NULL,
    first_name character varying,
    last_name character varying,
    sex character varying,
    date_of_birth date,
    date_of_placement date,
    assigned_worker character varying,
    county_of_origin character varying,
    facility_id integer NOT NULL
);


ALTER TABLE children OWNER TO pguser;

ALTER SEQUENCE children_id_seq OWNER TO pguser;

--
-- Data for Name: children; Type: TABLE DATA; Schema: public; Owner: pguser
--

INSERT INTO children VALUES (541770083, 'Marisol', 'Cruz', 'Female', '1999-07-09', '2017-05-23', 'Derek Nesbitt', 'Orange', 306099772);
INSERT INTO children VALUES (4, 'Keith', 'Richards', 'M', '1990-01-01', '1992-01-01', 'Richard Stein', 'Los Angeles', 909453695);
INSERT INTO children VALUES (541769912, 'Keisha', 'Tope', 'Female', '2011-02-11', '2017-01-23', 'Roger Witherspoon', 'Santa Clara', 909045101);
INSERT INTO children VALUES (541769954, 'Marco', 'Ledesma', 'Male', '2000-09-23', '2017-04-11', 'Stanley Wolf', 'San Mateo', 909045102);
INSERT INTO children VALUES (541770158, 'Jia', 'Wang', 'Female', '2007-04-05', '2017-02-27', 'Betty Lowry', 'Los Angeles', 909045112);
INSERT INTO children VALUES (541769955, 'Elizabeth', 'Ledesma', 'Female', '2001-12-04', '2017-04-11', 'Stanley Wolf', 'San Mateo', 909045102);
INSERT INTO children VALUES (541769956, 'Stephen', 'Ledesma', 'Male', '2003-05-11', '2017-04-11', 'Stanley Wolf', 'San Mateo', 909045102);
INSERT INTO children VALUES (541769957, 'Lillian', 'Ledesma', 'Female', '2005-06-12', '2017-04-11', 'Stanley Wolf', 'San Mateo', 909045102);
INSERT INTO children VALUES (541769958, 'Yolanda', 'Ledesma', 'Female', '2006-11-24', '2017-04-11', 'Stanley Wolf', 'San Mateo', 909045102);
INSERT INTO children VALUES (541766912, 'Danielle', 'Garrigus', 'Female', '2017-04-21', '2017-04-23', 'Waylon T. Hollington', 'Santa Clara', 909045104);
INSERT INTO children VALUES (541769913, 'Gregorio', 'Garrigus', 'Male', '2015-06-21', '2016-08-23', 'Waylon T. Hollington', 'Santa Clara', 909045104);
INSERT INTO children VALUES (541770163, 'Lana', 'Volkov', 'Female', '2001-08-08', '2017-01-25', 'Lorraine Casper', 'Los Angeles', 909045112);
INSERT INTO children VALUES (541770165, 'Suzanna', 'Forrest-Harkins', 'Female', '2006-10-24', '2017-05-20', 'Betty Lowry', 'Los Angeles', 909045112);
INSERT INTO children VALUES (541769914, 'Michael', 'Garrigus', 'Male', '2013-11-03', '2016-08-23', 'Waylon T. Hollington', 'Santa Clara', 909045104);
INSERT INTO children VALUES (541769921, 'Claire', 'Randolph', 'Female', '2006-03-24', '2016-12-21', 'Forest Swangler', 'Santa Cruz', 909045105);
INSERT INTO children VALUES (541769922, 'Renee', 'Randolph', 'Female', '2008-07-23', '2016-12-21', 'Forest Swangler', 'Santa Cruz', 909045105);
INSERT INTO children VALUES (541769927, 'Wayne', 'Randolph', 'Male', '2017-05-20', '2017-05-25', 'Forest Swangler', 'Santa Cruz', 909045105);
INSERT INTO children VALUES (541769923, 'Corey', 'Randolph', 'Male', '2010-09-11', '2017-05-15', 'Forest Swangler', 'Santa Cruz', 909045106);
INSERT INTO children VALUES (541769916, 'Carter', 'Vorbeck', 'Male', '2002-02-22', '2010-06-12', 'Juanita Sauceda', 'Santa Clara', 909045114);
INSERT INTO children VALUES (541769917, 'Kaitlin', 'Vorbeck', 'Female', '2009-02-25', '2010-06-12', 'Juanita Sauceda', 'Santa Clara', 909045114);
INSERT INTO children VALUES (541769924, 'Willy', 'Randolph', 'Male', '2012-10-12', '2017-05-15', 'Forest Swangler', 'Santa Cruz', 909045106);
INSERT INTO children VALUES (541769918, 'Elena', 'Cuadros', 'Female', '2008-12-23', '2011-01-03', 'Waylon T. Hollington', 'Santa Clara', 909045114);
INSERT INTO children VALUES (541769919, 'Hugo', 'Dominguez', 'Male', '2014-01-23', '2014-01-29', 'Waylong T. Hollington', 'Santa Clara', 909045114);
INSERT INTO children VALUES (541769925, 'Ricky', 'Randolph', 'Male', '2012-10-12', '2017-05-15', 'Forest Swangler', 'Santa Cruz', 909045106);
INSERT INTO children VALUES (541769926, 'Viola', 'Randolph', 'Female', '2016-02-11', '2017-05-15', 'Forest Swangler', 'Santa Cruz', 909045106);
INSERT INTO children VALUES (541769920, 'Steven', 'Mayfield', 'Male', '2004-08-09', '2016-03-14', 'Roger Witherspoon', 'Santa Clara', 909045108);
INSERT INTO children VALUES (541769951, 'Phillip', 'Poniatowski', 'Male', '2009-09-19', '2016-07-16', 'Waylon T. Hollington', 'Santa Clara', 909045108);
INSERT INTO children VALUES (541769974, 'Quentin', 'Frommel', 'Male', '2006-03-17', '2016-12-13', 'Phyllis Dusso', 'San Mateo', 909045108);
INSERT INTO children VALUES (541769943, 'Sean', 'Mulder', 'Male', '2010-12-17', '2017-04-19', 'Roger Witherspoon', 'Santa Clara', 909045109);
INSERT INTO children VALUES (541770172, 'Paulo', 'Acevedo', 'Male', '2011-02-22', '2017-04-24', 'Betty Lowry', 'Los Angeles', 909045121);
INSERT INTO children VALUES (541770173, 'Emilia', 'Acevedo', 'Female', '2015-03-11', '2017-04-24', 'Betty Lowry', 'Los Angeles', 909045121);
INSERT INTO children VALUES (541770174, 'Teresa', 'Acevedo', 'Female', '2016-12-11', '2017-04-24', 'Betty Lowry', 'Los Angeles', 909045121);
INSERT INTO children VALUES (541769944, 'Roger', 'Mulder', 'Male', '2011-11-19', '2017-04-19', 'Roger Witherspoon', 'Santa Clara', 909045109);
INSERT INTO children VALUES (541769945, 'Stephanie', 'Nickles', 'Female', '2013-01-25', '2017-04-19', 'Roger Witherspoon', 'Santa Clara', 909045109);
INSERT INTO children VALUES (541769946, 'Mollie', 'Crampton', 'Female', '2017-04-17', '2017-04-19', 'Roger Witherspoon', 'Santa Clara', 909045109);
INSERT INTO children VALUES (541770109, 'Wayne', 'Childs', 'Male
Male', '2000-08-29', '2013-10-11', 'Rosa Sosa', 'Orange', 909045117);
INSERT INTO children VALUES (541770110, 'Krystal', 'Childs', 'Female', '2001-12-14', '2013-10-11', 'Rosa Sosa', 'Orange', 909045117);
INSERT INTO children VALUES (541770111, 'Charisse', 'Childs', 'Female', '2004-08-01', '2013-10-11', 'Rosa Sosa', 'Orange', 909045117);
INSERT INTO children VALUES (541770143, 'Mark', 'Davenport', 'Male', '2004-11-12', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045110);
INSERT INTO children VALUES (541770144, 'Samuel', 'Davenport', 'Male', '2006-08-19', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045110);
INSERT INTO children VALUES (541770145, 'Rachel', 'Davenport', 'Female', '2008-02-15', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045110);
INSERT INTO children VALUES (541770146, 'Phillip', 'Davenport', 'Male', '2009-02-16', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045110);
INSERT INTO children VALUES (541770147, 'Luke', 'Davenport', 'Male', '2010-06-13', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045110);
INSERT INTO children VALUES (541770148, 'Grace', 'Davenport', 'Female', '2011-10-03', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045110);
INSERT INTO children VALUES (541770149, 'Rebecca', 'Davenport', 'Female', '2013-01-04', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045111);
INSERT INTO children VALUES (541770150, 'Julia', 'Davenport', 'Female', '2013-12-27', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045111);
INSERT INTO children VALUES (541770151, 'John', 'Davenport', 'Male', '2015-03-27', '2016-05-11', 'Scott Hayward', 'Los Angeles', 909045111);
INSERT INTO children VALUES (541770152, 'Hannah', 'Davenport', 'Female', '2017-04-28', '2017-05-03', 'Scott Hayward', 'Los Angeles', 909045111);
INSERT INTO children VALUES (541770136, 'Amber', 'Guthrie', 'Female', '2007-01-02', '2017-04-11', 'Lorraine Casper', 'Los Angeles', 909045112);
INSERT INTO children VALUES (541769952, 'Alexandria', 'Froyd', 'Female', '2017-05-24', '2017-05-27', 'Phyllis Dusso', 'San Mateo', 909045115);
INSERT INTO children VALUES (541769953, 'Austin', 'Froyd', 'Male', '2017-05-24', '2017-05-27', 'Phyllis Dusso', 'San Mateo', 909045115);
INSERT INTO children VALUES (541770138, 'Laurie', 'Crews', 'Female', '1999-12-10', '2015-08-23', 'Betty Lowry', 'Los Angeles', 909045116);
INSERT INTO children VALUES (541770139, 'Nicholas', 'Crews', 'Male', '2002-07-22', '2015-08-23', 'Betty Lowry', 'Los Angeles', 909045116);
INSERT INTO children VALUES (541770108, 'Ronnie', 'Childs', 'Male', '1998-07-21', '2013-10-11', 'Rosa Sosa', 'Orange', 909045117);
INSERT INTO children VALUES (541770112, 'Clarence', 'Childs', 'Male', '2007-10-06', '2013-10-11', 'Rosa Sosa', 'Orange', 909045117);
INSERT INTO children VALUES (541770113, 'Jazmine', 'Childs', 'Female', '2008-12-23', '2013-10-11', 'Rosa Sosa', 'Orange', 909045117);
INSERT INTO children VALUES (541770180, 'Chloe', 'McCuen', 'Female', '2017-02-20', '2017-04-15', 'Queenie Brown', 'San Bernardino', 909045118);
INSERT INTO children VALUES (541770181, 'Christina', 'McCuen', 'Female', '2017-02-20', '2017-04-15', 'Queenie Brown', 'San Bernardino', 909045118);
INSERT INTO children VALUES (541770079, 'Brenda', 'Quigg', 'Female', '2008-10-02', '2017-05-27', 'Padma Singh', 'Riverside', 909045118);
INSERT INTO children VALUES (541770080, 'Kenneth', 'Quigg', 'Male', '2009-11-06', '2017-05-27', 'Padma Singh', 'Riverside', 909045118);
INSERT INTO children VALUES (541770081, 'Anthony', 'Quigg', 'Male', '2015-03-08', '2017-05-27', 'Padma Singh', 'Riverside', 909045118);
INSERT INTO children VALUES (541770154, 'Martin', 'Torres', 'Male', '2010-09-22', '2015-09-11', 'Gloria Delgado', 'Kern', 909045119);
INSERT INTO children VALUES (541770155, 'Ralph', 'Torres', 'Male', '2010-09-22', '2015-09-11', 'Gloria Delgado', 'Kern', 909045119);
INSERT INTO children VALUES (541770156, 'Patricia', 'Torres-Olvera', 'Female', '2012-07-13', '2016-09-11', 'Gloria Delgado', 'Kern', 909045119);
INSERT INTO children VALUES (541770167, 'Calvin', 'Irving', 'Male', '2017-05-05', '2017-05-09', 'Betty Lowry', 'Los Angeles', 909045120);
INSERT INTO children VALUES (541769933, 'Kevin', 'Black', 'Male', '2000-01-02', '2004-06-11', 'Juanita Sauceda', 'Santa Clara', 909045122);
INSERT INTO children VALUES (541769934, 'Joseph', 'Black', 'Male', '2003-06-05', '2004-06-11', 'Juanita Sauceda', 'Santa Clara', 909045122);
INSERT INTO children VALUES (541769935, 'Lena', 'Black', 'Female', '2007-07-09', '2007-07-21', 'Juanita Sauceda', 'Santa Clara', 909045122);
INSERT INTO children VALUES (541769961, 'Dustin', 'Powers', 'Male', '2010-07-11', '2017-05-27', 'Nancy Chang', 'San Mateo', 909045124);
INSERT INTO children VALUES (541769976, 'Dexter', 'Stampler', 'Male', '2015-01-13', '2015-03-22', 'Phyllis Dusso', 'San Mateo', 909045126);
INSERT INTO children VALUES (541769977, 'Eleanor', 'Stampler', 'Female', '2017-04-20', '2017-04-22', 'Phyllis Dusso', 'San Mateo', 909045126);
INSERT INTO children VALUES (541769997, 'Nevaeh', 'Bello', 'Female', '2003-03-03', '2011-01-02', 'Gladys Clifton', 'Monterey', 909045126);
INSERT INTO children VALUES (541769936, 'Iris', 'Stewart', 'Female', '2001-04-04', '2011-05-15', 'Theresa Suda', 'Alameda', 909045123);
INSERT INTO children VALUES (541769937, 'Jeremy', 'Stewart', 'Male', '2007-11-22', '2011-05-15', 'Theresa Suda', 'Alameda', 909045123);
INSERT INTO children VALUES (541770053, 'Sonia', 'Ferraro', 'Female', '2001-12-09', '2015-06-09', 'Forest Swangler', 'Santa Cruz', 909045129);
INSERT INTO children VALUES (541770054, 'Roberto', 'Ferraro', 'Male', '2003-02-27', '2015-06-09', 'Forest Swangler', 'Santa Cruz', 909045129);
INSERT INTO children VALUES (541770055, 'Miguel', 'Ferraro', 'Male', '2004-03-16', '2015-06-09', 'Forest Swangler', 'Santa Cruz', 909045129);
INSERT INTO children VALUES (541770056, 'Nina', 'Salcedo-Ferraro', 'Female', '2008-07-02', '2015-06-09', 'Forest Swangler', 'Santa Cruz', 909045129);
INSERT INTO children VALUES (541769940, 'Marcus', 'Stricklen', 'Male', '2008-02-29', '2017-06-01', 'Waylon T. Hollington', 'Santa Clara', 909045130);
INSERT INTO children VALUES (541769941, 'Jeremy', 'Stewart', 'Male', '2013-08-13', '2017-05-20', 'Waylon T. Hollington', 'Santa Clara', 909045130);
INSERT INTO children VALUES (541769979, 'Danielle', 'Castratta', 'Female', '2003-08-26', '2015-07-22', 'Shaquita Turner', 'Marin', 909045131);
INSERT INTO children VALUES (541769965, 'Beatrice', 'Espinosa', 'Female', '2002-04-30', '2011-02-22', 'Nancy Chang', 'San Mateo', 909045132);
INSERT INTO children VALUES (541769966, 'Anna', 'Espinosa', 'Female', '2004-01-15', '2011-02-22', 'Nancy Chang', 'San Mateo', 909045132);
INSERT INTO children VALUES (541769967, 'Antonio', 'Espinosa-Santana', 'Male', '2011-02-14', '2011-02-22', 'Nancy Chang', 'San Mateo', 909045132);
INSERT INTO children VALUES (541770286, 'Dean', 'Gillingham', 'Male', '2004-04-26', '2013-07-17', 'Waylon T. Hollington', 'Santa Clara', 435205582);
INSERT INTO children VALUES (541770037, 'Camelia', 'Danvers', 'Female', '2009-11-14', '2017-01-30', 'Cassandra Niland', 'San Francisco', 909045133);
INSERT INTO children VALUES (541770038, 'Robert', 'Danvers', 'Male', '2012-06-24', '2017-01-30', 'Cassandra Niland', 'San Francisco', 909045133);
INSERT INTO children VALUES (541770176, 'Miguel', 'Sandoval', 'Male', '2009-09-03', '2016-01-24', 'Scott Hayward', 'Los Angeles', 909045135);
INSERT INTO children VALUES (541770178, 'Jodran', 'Dubose', 'Male', '2004-07-19', '2016-06-13', 'Scott Hayward', 'Los Angeles', 909045135);
INSERT INTO children VALUES (541770088, 'Jacob', 'Locke', 'Male', '2017-05-27', '2017-05-30', 'Derek Nesbitt', 'Orange', 909045136);
INSERT INTO children VALUES (541770019, 'Juan', 'Arroyo', 'Male', '2008-03-29', '2012-08-09', 'Gregory Biondi', 'Stanislaus', 384502941);
INSERT INTO children VALUES (541770026, 'Bobby', 'Cober', 'Male', '1998-02-24', '2013-05-05', 'Cassandra Niland', 'San Francisco', 384502941);
INSERT INTO children VALUES (541770141, 'Jacob', 'Johnson', 'Male', '2008-03-06', '2011-03-28', 'Bobby Barfield', 'Ventura', 198208723);
INSERT INTO children VALUES (541770193, 'Theron', 'SpottedBear', 'Male', '2002-02-15', '2011-05-14', 'Lorraine Casper', 'Los Angeles', 198208723);
INSERT INTO children VALUES (541770195, 'Larry', 'Lavielle', 'Male', '2006-06-17', '2012-09-09', 'Scott Hayward', 'Los Angeles', 198208723);
INSERT INTO children VALUES (541770197, 'Darryl', 'Freyman', 'Male', '2007-10-15', '2014-10-10', 'Lorraine Casper', NULL, 198208723);
INSERT INTO children VALUES (541770101, 'Miranda', 'Moore', 'Female', '2000-12-02', '2003-02-14', 'Rosa Sosa', 'Orange', 195783285);
INSERT INTO children VALUES (541770199, 'Rhonda', 'Donlan', 'Female', '2001-02-13', '2002-07-16', 'Betty Lowry', 'Los Angeles', 195783285);
INSERT INTO children VALUES (541770201, 'Jennifer', 'Kenward', 'Female', '2005-10-02', '2007-12-27', 'Betty Lowry', 'Los Angeles', 195783285);
INSERT INTO children VALUES (541770203, 'Alisha', 'Amad', 'Female', '2005-12-22', '2009-04-15', 'Lorraine Casper', 'Los Angeles', 195783285);
INSERT INTO children VALUES (541769928, 'Wallace', 'Gallardo', 'Male', '2007-03-21', '2007-11-11', 'Shannon Osterfeld', 'Merced', 430988436);
INSERT INTO children VALUES (541769932, 'Pedro', 'Holguin', 'Male', '2015-09-30', '2016-10-31', 'Juanita Sauceda', 'Santa Clara', 430988436);
INSERT INTO children VALUES (541770285, 'Daniel', 'Michaels', 'Male', '2008-03-28', '2009-04-22', 'Juanita Sauceda', 'Santa Clara', 430988436);
INSERT INTO children VALUES (541769986, 'Daniel', 'Castratta Coronado', 'Male', '2010-10-10', '2011-01-31', 'Stanley Wolf', 'San Mateo', 430988436);
INSERT INTO children VALUES (541769988, 'John', 'Brolsma', 'Male', '2008-06-12', '2011-10-13', 'Phyllis Dusso', 'San Mateo', 430988436);
INSERT INTO children VALUES (541770042, 'Pedro', 'Dasaro', 'Male', '2000-05-15', '2007-10-15', 'Sylvia Walker', 'San Francisco', 430988436);
INSERT INTO children VALUES (541769963, 'Catherine', 'Moffet', 'Female', '2014-10-29', '2014-11-25', 'Forest Swangler', 'Santa Cruz', 412985642);
INSERT INTO children VALUES (541769972, 'Velva', 'Davis', 'Female', '1998-09-22', '2009-12-15', 'Stanley Wolf', 'San Mateo', 412985642);
INSERT INTO children VALUES (551000100, 'Marianne', 'Mitchell', 'Female', '2001-02-15', '2010-02-11', 'Phyllis Dusso', 'San Mateo', 412985642);
INSERT INTO children VALUES (551000101, 'Suzette', 'Duric', 'Female', '2006-09-13', '2010-04-21', 'Nancy Chang', 'San Mateo', 412985642);
INSERT INTO children VALUES (551000102, 'Destiny', 'Stollsteimer', 'Female', '2007-10-30', '2009-11-04', 'Stanley Wolf', 'San Mateo', 412985642);
INSERT INTO children VALUES (541770128, 'Derrick', 'Chadwick', 'Male', '2003-04-11', '2017-05-27', 'Yun Zhao', 'Orange', 306099772);
INSERT INTO children VALUES (551000103, 'Beverly', 'Schroth', 'Female', '2008-07-07', '2012-06-16', 'Nancy Chang', 'San Mateo', 412985642);
INSERT INTO children VALUES (541770067, 'Eric', 'Fallon', 'Male', '2010-01-31', '2015-09-17', 'Cassandra Niland', 'San Francisco', 385209345);
INSERT INTO children VALUES (541770129, 'Ryan', 'Meeks', 'Male', '2008-09-19', '2017-05-27', 'Yun Zhao', 'Orange', 306099772);
INSERT INTO children VALUES (541770068, 'Cynthia', 'Fallon', 'Female', '2012-09-27', '2015-09-17', 'Cassandra Niland', 'San Francisco', 385209345);
INSERT INTO children VALUES (541770130, 'Amy', 'Bartley', 'Female', '2005-10-11', '2017-05-27', 'Yun Zhao', 'Orange', 306099772);
INSERT INTO children VALUES (541770069, 'Grant', 'Fallon', 'Male', '2015-09-08', '2015-09-17', 'Cassandra Niland', 'San Francisco', 385209345);
INSERT INTO children VALUES (541770287, 'Parker', 'Gillingham', 'Male', '2005-05-29', '2013-07-17', 'Waylon T. Hollington', 'Santa Clara', 435205582);
INSERT INTO children VALUES (541770035, 'Ashley', 'McClean', 'Female', '2003-08-27', '2017-05-22', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770015, 'Latoya', 'James', 'Female', '2007-09-13', '2017-05-24', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770016, 'Tricia', 'James', 'Female', '2010-10-20', '2017-05-24', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770017, 'Corey', 'James', 'Male', '2003-01-19', '2017-05-24', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770028, 'Carrie', 'Garnett', 'Female', '2005-08-11', '2017-05-25', 'Michael Hodge', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770029, 'Genevieve', 'Garnett', 'Female', '2006-08-15', '2017-05-25', 'Michael Hodge', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770060, 'Maria', 'Quintal-Salas', 'Female', '2006-08-22', '2017-05-28', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770065, 'Dana', 'Streetman', 'Female', '2007-05-18', '2017-05-29', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770289, 'Brady', 'Market', 'Male', '2010-02-02', '2013-07-17', 'Waylon T. Hollington', 'Santa Clara', 435205582);
INSERT INTO children VALUES (541770288, 'Jackie', 'Market', 'Female', '2008-11-29', '2013-07-17', 'Waylon T. Hollington', 'Santa Clara', 435205582);
INSERT INTO children VALUES (541770183, 'Laveta', 'Walker', 'Female', '2004-08-02', '2016-07-17', 'Betty Lowry', 'Los Angeles', 197642954);
INSERT INTO children VALUES (541770184, 'Jacqueline', 'Walker', 'Female', '2006-08-18', '2016-07-17', 'Betty Lowry', 'Los Angeles', 197642954);
INSERT INTO children VALUES (541770185, 'Quentin', 'Walker', 'Male', '2009-11-24', '2016-07-17', 'Betty Lowry', 'Los Angeles', 197642954);
INSERT INTO children VALUES (541770190, 'Dylan', 'McPherson', 'Male', '2010-10-01', '2013-12-30', 'Lorraine Casper', 'Los Angeles', 197805287);
INSERT INTO children VALUES (541770290, 'Emmanuel', 'Market', 'Male', '2011-05-16', '2013-07-17', 'Waylon T. Hollington', 'Santa Clara', 435205582);
INSERT INTO children VALUES (541770291, 'Kacey', 'Market', 'Female', '2015-08-19', '2015-08-27', 'Waylon T. Hollington', 'Santa Clara', 435205582);
INSERT INTO children VALUES (541770191, 'Isabel', 'McPherson', 'Female', '2013-11-09', '2013-12-30', 'Lorraine Casper', 'Los Angeles', 197805287);
INSERT INTO children VALUES (541770192, 'Clayton', 'Finegan', 'Male', '2017-05-09', '2017-05-12', 'Lorraine Casper', 'Los Angeles', 197805287);
INSERT INTO children VALUES (541770075, 'Hea', 'Kim', 'Male', '2005-02-11', '2016-01-20', 'Yun Zhao', 'Orange', 306007239);
INSERT INTO children VALUES (541770076, 'Chin', 'Kim', 'Male', '2008-04-16', '2016-01-20', 'Yun Zhao', 'Orange', 306007239);
INSERT INTO children VALUES (541770194, 'Melinda', 'Finegan', 'Female', '2017-05-09', '2017-05-12', 'Lorraine Casper', 'Los Angeles', 197805287);
INSERT INTO children VALUES (541770077, 'Ki', 'Kim', 'Female', '2010-12-30', '2016-01-20', 'Yun Zhao', 'Orange', 306007239);
INSERT INTO children VALUES (541770084, 'Luis', 'Cruz', 'Male', '2003-06-11', '2017-05-23', 'Derek Nesbitt', 'Orange', 306099772);
INSERT INTO children VALUES (541770086, 'Christopher', 'Hartman', 'Male', '2004-06-06', '2017-05-24', 'Rosa Sosa', 'Orange', 306099772);
INSERT INTO children VALUES (541770105, 'Abiola', 'Adebayo', 'Male', '2007-04-07', '2017-05-25', 'Derek Nesbitt', 'Orange', 306099772);
INSERT INTO children VALUES (541770106, 'Jadesola', 'Adebayo', 'Female', '2010-06-16', '2017-05-25', 'Derek Nesbitt', 'Orange', 306099772);
INSERT INTO children VALUES (541770121, 'Lian', 'LI', 'Female', '2005-05-06', '2017-05-30', 'Yun Zhao', 'Orange', 306099772);
INSERT INTO children VALUES (541770123, 'April', 'Oliver', 'Female', '2006-06-09', '2017-05-28', 'Rosa Sosa', 'Orange', 306099772);
INSERT INTO children VALUES (541770124, 'Brian', 'Oliver-Mays', 'Male', '2011-08-12', '2017-05-28', 'Rosa Sosa', 'Orange', 306099772);
INSERT INTO children VALUES (541770132, 'Troy', 'Bowers', 'Male', '2002-04-25', '2017-05-26', 'Derek Nesbitt', 'Orange', 306099772);
INSERT INTO children VALUES (541770071, 'Joseph', 'Black', 'Male', '2008-11-13', '2017-05-30', 'Michael Hodge', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770050, 'Chun', 'Ng', 'Female', '2004-09-09', '2017-05-31', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770051, 'Kim', 'Ng', 'Female', '2004-09-09', '2017-05-31', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770058, 'Kyle', 'McNeil', 'Male', '2010-10-05', '2017-06-01', 'Michael Hodge', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770030, 'Edward', 'Garnett', 'Male', '2009-03-20', '2017-05-25', 'Michael Hodge', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770031, 'Madison', 'Garnett', 'Female', '2011-07-07', '2017-05-25', 'Michael Hodge', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770048, 'Christiana', 'Burnell', 'Female', '2004-01-07', '2017-05-26', 'Sylvia Walker', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770040, 'Bradley', 'Forslund', 'Male', '2004-04-01', '2017-05-26', 'Cassandra Niland', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770044, 'Neela', 'Patel', 'Female', '2007-02-02', '2017-06-02', 'Cassandra Niland', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770045, 'Anuj', 'Patel', 'Male', '2010-11-06', '2017-06-02', 'Cassandra Niland', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770046, 'Priya', 'Patel', 'Female', '2003-05-08', '2017-06-02', 'Cassandra Niland', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770024, 'Danica', 'Carroll', 'Female', '2007-01-01', '2017-06-01', 'Michael Hodge', 'San Francisco', 385002845);
INSERT INTO children VALUES (541770160, 'Aleah', 'Mohammed', 'Female', '2005-05-20', '2017-05-29', 'Lorraine Casper', 'Los Angeles', 197449810);
INSERT INTO children VALUES (541770161, 'Kaden', 'Mohammed', 'Male', '2008-11-29', '2017-05-29', 'Lorraine Casper', 'Los Angeles', 197449810);
INSERT INTO children VALUES (541770169, 'Jeffery', 'Barkley', 'Male', '2000-06-07', '2017-05-26', 'Lorraine Casper', 'Los Angeles', 197449810);
INSERT INTO children VALUES (541770170, 'Grace', 'Barkley', 'Female', '2003-01-09', '2017-05-26', 'Lorraine Casper', 'Los Angeles', 197449810);
INSERT INTO children VALUES (541770205, 'Serena', 'Caravello', 'Female', '2009-11-18', '2017-05-28', 'Betty Lowry', 'Los Angeles', 197449810);
INSERT INTO children VALUES (541770207, 'Lianne', 'Sayson', 'Female', '2004-01-11', '2017-06-01', 'Scott Hayward', 'Los Angeles', 197449810);
INSERT INTO children VALUES (541769981, 'Tessa', 'Zellinger', 'Female', '2008-12-13', '2017-05-29', 'Nancy Chang', 'San Mateo', 415771298);
INSERT INTO children VALUES (541770093, 'Thomas', 'Tucker', 'Male', '2005-03-18', '2017-05-04', 'Derek Nesbitt', 'Orange', 306753971);
INSERT INTO children VALUES (541770094, 'Hoc', 'Nguyen', 'Male', '2000-11-05', '2015-12-03', 'Yun Zhao', 'Orange', 306753971);
INSERT INTO children VALUES (541769982, 'Roxanne', 'Zellinger-Smith', 'Female', '2010-02-08', '2017-05-29', 'Nancy Chang', 'San Mateo', 415771298);
INSERT INTO children VALUES (541770096, 'Monica', 'Brenner', 'Female', '2005-09-12', '2017-03-21', 'Yun Zhao', 'Orange', 306753971);
INSERT INTO children VALUES (541770097, 'Justin', 'Barker', 'Male', '2002-02-16', '2017-04-07', 'Yun Zhao', 'Orange', 306753971);
INSERT INTO children VALUES (541769983, 'Charles', 'Zellinger-Smith', 'Male', '2011-05-03', '2017-05-29', 'Nancy Chang', 'San Mateo', 415771298);
INSERT INTO children VALUES (541769984, 'Sharla', 'Smith', 'Female', '2006-07-17', '2017-05-29', 'Nancy Chang', 'San Mateo', 415771298);
INSERT INTO children VALUES (541770004, 'Gabriella', 'Nunes', 'Female', '2004-01-08', '2017-05-30', 'Stanley Wolf', 'San Mateo', 415771298);
INSERT INTO children VALUES (541770005, 'Magdelano', 'Lopez', 'Male', '2006-02-16', '2017-05-30', 'Stanley Wolf', 'San Mateo', 415771298);
INSERT INTO children VALUES (541769929, 'Athena', 'Springstead', 'Female', '2001-04-21', '2017-05-02', 'Waylon T. Hollington', 'Santa Clara', 435211996);
INSERT INTO children VALUES (541769942, 'Erin', 'Revette', 'Female', '2000-10-30', '2016-11-04', 'Theresa Suda', 'Alameda', 435211996);
INSERT INTO children VALUES (541769949, 'Sherrie', 'Chrisman', 'Female', '2000-03-12', '2016-03-20', 'Juanita Sauceda', 'Santa Clara', 435211996);
INSERT INTO children VALUES (541769950, 'Dierdre', 'Jackson', 'Female', '2000-07-03', '2016-07-17', 'Juanita Sauceda', 'Santa Clara', 435211996);
INSERT INTO children VALUES (541769930, 'Brittani', 'Huntly', 'Female', '2001-04-16', '2017-04-29', 'Roger Witherspoon', 'Santa Clara', 435211996);
INSERT INTO children VALUES (541769931, 'Monique', 'Dunham', 'Female', '2000-07-29', '2016-08-13', 'Roger Witherspoon', 'Santa Clara', 435211996);
INSERT INTO children VALUES (541769947, 'Tao', 'Vang', 'Male', '2000-08-27', '2016-09-12', 'Shannon Osterfeld', 'Merced', 435299671);
INSERT INTO children VALUES (541769948, 'Mai', 'Yang', 'Female', '2001-05-24', '2017-05-30', 'Shannon Osterfeld', 'Merced', 435299671);
INSERT INTO children VALUES (541769938, 'Pamela', 'Robles', 'Female', '2000-12-08', '2016-12-12', 'Roger Witherspoon', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541769939, 'Anna', 'Parton', 'Female', '2001-03-17', '2017-03-28', 'Roger Witherspoon', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770292, 'Johnny', 'Lander', 'Male', '2001-02-15', '2017-02-22', 'Juanita Sauceda', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770293, 'Tamara', 'Redhouse', 'Female', '2000-06-01', '2016-06-13', 'Roger Witherspoon', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770294, 'Josh', 'Dolgoff', 'Male', '2001-01-03', '2017-01-10', 'Juanita Sauceda', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770295, 'Cleo', 'Carrington', 'Female', '2000-09-16', '2016-09-23', 'Roger Witherspoon', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770296, 'Samuel', 'Jannetti', 'Male', '2000-10-12', '2016-10-23', 'Juanita Sauceda', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770297, 'Elvin', 'Potvin', 'Male', '2001-02-16', '2017-02-28', 'Roger Witherspoon', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770298, 'Cara', 'Sardelli', 'Female', '2000-12-19', '2016-12-26', 'Waylon T. Hollington', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770299, 'Adam', 'Nemcek', 'Male', '2000-08-16', '2016-08-27', 'Waylon T. Hollington', 'Santa Clara', 435299671);
INSERT INTO children VALUES (541770099, 'Mei', 'Takahashi', 'Female', '2000-05-28', '2016-06-06', 'Yun Zhao', 'Orange', 300665437);
INSERT INTO children VALUES (541770103, 'Daniel', 'Ordonez', 'Male', '2000-09-26', '2016-10-03', 'Derek Nesbitt', 'Orange', 300665437);
INSERT INTO children VALUES (541770115, 'Das', 'Kular', 'Male', '2000-01-19', '2016-01-26', 'Queenie Brown', 'San Bernardino', 300665437);
INSERT INTO children VALUES (541770117, 'Shaneka', 'Quilling', 'Female', '2001-03-28', '2017-04-10', 'Rosa Sosa', 'Orange', 300665437);
INSERT INTO children VALUES (541770119, 'Francisca', 'Esquivel', 'Female', '2000-11-17', '2016-11-25', 'Derek Nesbitt', 'Orange', 300665437);
INSERT INTO children VALUES (541770301, 'Priscilla', 'Snowden', 'Female', '2000-07-14', '2016-07-21', 'Roger Witherspoon', 'Santa Clara', 435667797);
INSERT INTO children VALUES (541770303, 'Vernon', 'Shipp', 'Male', '2001-04-28', '2017-05-05', 'Juanita Sauceda', 'Santa Clara', 435667797);
INSERT INTO children VALUES (541770300, 'Jeff', 'Burd', 'Male', '2003-05-21', '2015-05-29', 'Roger Witherspoon', 'Santa Clara', 435667797);
INSERT INTO children VALUES (541770302, 'Sean', 'Fogel', 'Male', '2002-06-29', '2015-09-16', 'Juanita Sauceda', 'Santa Clara', 435667797);
INSERT INTO children VALUES (541770304, 'Beth', 'Waters', 'Female', '2004-03-18', '2017-03-25', 'Waylon T. Hollington', 'Santa Clara', 435667797);
INSERT INTO children VALUES (541770305, 'Christina', 'Ally', 'Female', '2000-10-19', '2014-06-24', 'Waylon T. Hollington', 'Santa Clara', 435667797);
INSERT INTO children VALUES (541770187, 'Jefferson', 'Garney', 'Male', '2005-04-23', '2016-07-01', 'Bobby Barfield', 'Kern', 198966009);
INSERT INTO children VALUES (541770188, 'Quinn', 'Spencer', 'Male', '2001-01-10', '2017-06-01', 'Bobby Barfield', 'Kern', 198966009);
INSERT INTO children VALUES (541770209, 'Victoria', 'Rhyne', 'Female', '2003-08-09', '2016-11-29', 'Lorraine Casper', 'Los Angeles', 198966009);
INSERT INTO children VALUES (541770211, 'Jean', 'Barretto', 'Female', '2002-12-02', '2017-05-22', 'Lorraine Casper', 'Los Angeles', 198966009);
INSERT INTO children VALUES (541770213, 'Jay', 'Mackie', 'Male', '2000-05-11', '2016-08-01', 'Betty Lowry', 'Los Angeles', 198966009);
INSERT INTO children VALUES (541770215, 'Dennis', 'Goldberger', 'Male', '2001-07-20', '2014-04-06', 'Scott Hayward', 'Los Angeles', 198966009);
INSERT INTO children VALUES (541770126, 'Wesley', 'Burrell', 'Male', '2003-02-08', '2016-04-17', 'Derek Nesbitt', 'Orange', 306753971);
INSERT INTO children VALUES (541770090, 'Huong', 'Ng', 'Female', '2001-01-11', '2014-06-24', 'Vinh Vo', 'San Diego', 306753971);
INSERT INTO children VALUES (541770091, 'Hai', 'Bao', 'Male', '2002-08-02', '2017-04-09', 'Rosa Sosa', 'Orange', 306753971);
INSERT INTO children VALUES (541770092, 'Annie', 'Marion', 'Female', '2003-10-08', '2016-10-12', 'Derek Nesbitt', 'Orange', 306753971);
INSERT INTO children VALUES (541769990, 'Antonio', 'Piazza', 'Male', '2001-11-16', '2015-05-19', 'Nancy Chang', 'San Mateo', 435673955);
INSERT INTO children VALUES (541769991, 'Andrea', 'Piper', 'Female', '2002-11-17', '2016-10-15', 'Nancy Chang', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770007, 'Kayla', 'Yeaton', 'Female', '2005-04-06', '2017-05-03', 'Nancy Chang', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770008, 'Alex', 'Tipton', 'Male', '2004-08-31', '2016-09-14', 'Nancy Chang', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770217, 'Donald', 'Staubin', 'Male', '2002-09-12', '2016-09-13', 'Stanley Wolf', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770219, 'Marvin', 'Romney', 'Male', '2000-07-29', '2015-03-16', 'Stanley Wolf', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770221, 'Janie', 'Ruben', 'Female', '2004-06-16', '2016-07-04', 'Stanley Wolf', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770223, 'Claire', 'Schillinger', 'Female', '2001-11-21', '2016-01-07', 'Phyllis Dusso', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770225, 'Lindsay', 'Combs', 'Female', '2003-12-19', '2017-06-02', 'Phyllis Dusso', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770227, 'Gilbert', 'Capote', 'Male', '2003-04-07', '2017-05-21', 'Phyllis Dusso', 'San Mateo', 435673955);
INSERT INTO children VALUES (541770228, 'Brandy', 'Hanes', 'Female', '2000-01-16', '2014-02-03', 'Betty Lowry', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770230, 'Lorraine', 'Crouch', 'Female', '2004-09-16', '2016-10-15', 'Betty Lowry', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770232, 'Ted', 'Dalal', 'Male', '2000-02-26', '2015-03-19', 'Betty Lowry', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770234, 'Candy', 'Casazza', 'Female', '2000-11-12', '2013-07-09', 'Betty Lowry', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770236, 'August', 'Roman', 'Male', '2004-10-01', '2017-02-01', 'Scott Hayward', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770244, 'Gabriel', 'Garibaldi', 'Male', '2001-04-02', '2013-09-16', 'Scott Hayward', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770258, 'Adele', 'Melendez', 'Female', '2002-04-27', '2017-04-18', 'Lorraine Casper', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770246, 'Curtis', 'Reasoner', 'Male', '2001-02-13', '2014-05-10', 'Scott Hayward', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770250, 'Andre', 'Bragdon', 'Male', '2002-06-27', '2016-08-23', 'Lorraine Casper', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770256, 'Juan', 'Martinez', 'Male', '2003-08-29', '2016-11-02', 'Lorraine Casper', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770238, 'Michael', 'Busby', 'Male', '2000-12-17', '2017-01-06', 'Scott Hayward', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770254, 'Jolene', 'Curl', 'Female', '2002-03-20', '2017-02-14', 'Lorraine Casper', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770240, 'Eileen', 'Harrell', 'Female', '2001-03-14', '2016-06-25', 'Scott Hayward', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770242, 'Annette', 'Silveira', 'Female', '2001-01-07', '2015-07-27', 'Scott Hayward', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770252, 'Wendy', 'Ramer', 'Female', '2003-07-20', '2017-06-01', 'Lorraine Casper', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770248, 'Brenda', 'Mabe', 'Female', '2002-05-18', '2017-05-19', 'Lorraine Casper', 'Los Angeles', 385673326);
INSERT INTO children VALUES (541770262, 'Billy', 'Eastham', 'Male', '2000-02-13', '2014-06-19', 'Betty Lowry', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770266, 'Grayson', 'Limon', 'Male', '2003-03-09', '2016-08-02', 'Betty Lowry', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770270, 'Arnold', 'Womack', 'Male', '2004-06-09', '2017-06-03', 'Bobby Barfield', 'Kern', 198767890);
INSERT INTO children VALUES (541770272, 'Ralph', 'Cedillo', 'Male', '2005-07-15', '2017-05-29', 'Scott Hayward', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770278, 'Derek', 'Stenberg', 'Male', '2002-10-03', '2014-03-18', 'Scott Hayward', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770264, 'Ricky', 'Gaines', 'Male', '2001-04-19', '2016-11-21', 'Betty Lowry', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770282, 'Scott', 'Gaines', 'Male', '2004-12-12', '2017-02-19', 'Queenie Brown', 'San Bernardino', 198767890);
INSERT INTO children VALUES (541770260, 'Claude', 'Walls', 'Male', '2000-01-12', '2012-02-16', 'Betty Lowry', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770268, 'Roy', 'Chatfield', 'Male', '2001-05-17', '2015-09-16', 'Betty Lowry', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770274, 'Jason', 'Bernabe', 'Male', '2006-08-24', '2017-04-23', 'Scott Hayward', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770276, 'Charles', 'McKittrick', 'Male', '2007-09-09', '2017-06-04', 'Scott Hayward', 'Los Angeles', 198767890);
INSERT INTO children VALUES (541770280, 'Fred', 'Barris', 'Male', '2003-11-19', '2016-07-24', 'Queenie Brown', 'San Bernardino', 198767890);
INSERT INTO children VALUES (541770284, 'Sandra', 'Fuller', 'Female', '2000-01-04', '2012-01-14', 'Scott Hayward', 'Los Angeles', 191152735);
INSERT INTO children VALUES (541780285, 'Diane', 'Elliot', 'Female', '2001-07-19', '2015-12-13', 'Scott Hayward', 'Los Angeles', 191152735);
INSERT INTO children VALUES (541780288, 'Elena', 'Briggs', 'Female', '2002-09-06', '2016-08-20', 'Betty Lowry', 'Los Angeles', 191152735);
INSERT INTO children VALUES (541780290, 'Nellie', 'Jackson', 'Female', '2003-10-01', '2017-04-05', 'Betty Lowry', 'Los Angeles', 191152735);
INSERT INTO children VALUES (541780292, 'Henrietta', 'Griffin', 'Female', '2004-04-14', '2017-02-07', 'Lorraine Casper', 'Los Angeles', 191152735);
INSERT INTO children VALUES (541780294, 'Carmen', 'Moran', 'Female', '2005-05-17', '2017-05-17', 'Queenie Brown', 'San Bernardino', 191152735);
INSERT INTO children VALUES (541790001, 'Yvonne', 'Wong', 'Female', '2000-06-11', '2012-12-01', 'Derek Nesbitt', 'Orange', 306077545);
INSERT INTO children VALUES (541790002, 'Toni', 'Potter', 'Female', '2001-07-13', '2016-07-28', 'Vinh Vo', 'San Diego', 306077545);
INSERT INTO children VALUES (541790003, 'Kristy', 'Crawson', 'Female', '2002-08-11', '2006-11-11', 'Padma Singh', 'Riverside', 306077545);
INSERT INTO children VALUES (541790004, 'Misty', 'Gray', 'Female', '2003-09-24', '2017-05-02', 'Yun Zhao', 'Orange', 306077545);
INSERT INTO children VALUES (541790005, 'Sabrina', 'George', 'Female', '2004-10-12', '2015-03-19', 'Rosa Sosa', 'Orange', 306077545);
INSERT INTO children VALUES (541790006, 'Brandi', 'Yates', 'Female', '2000-11-09', '2016-04-15', 'Rosa Sosa', 'Orange', 306077545);
INSERT INTO children VALUES (541770470, 'Ada', 'Simpson', 'Female', '1998-07-28', '2015-10-08', 'Lorraine Casper', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770472, 'Adrienne', 'Wheeler', 'Female', '1998-12-20', '2015-09-27', 'Lorraine Casper', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770400, 'James', 'Brooks', 'Male', '2000-11-12', '2016-07-21', 'Stanley Wolf', 'San Mateo', 415600072);
INSERT INTO children VALUES (541770402, 'Freddie', 'Brock', 'Male', '1998-07-16', '2013-12-13', 'Gladys Clifton', 'Monterey', 415600072);
INSERT INTO children VALUES (541770404, 'Jonathan', 'Lyons', 'Male', '1999-11-22', '2016-02-21', 'Phyllis Dusso', 'San Mateo', 415600072);
INSERT INTO children VALUES (541770406, 'Eduardo', 'Jimenez', 'Male', '2000-10-18', '2015-12-17', 'Phyllis Dusso', 'San Mateo', 415600072);
INSERT INTO children VALUES (541770408, 'Nicholas', 'McBride', 'Male', '2001-05-20', '2017-04-26', 'Nancy Chang', 'San Mateo', 415600072);
INSERT INTO children VALUES (541770410, 'Elijah', 'Willis', 'Male', '1998-12-13', '2014-08-16', 'Nancy Chang', 'San Mateo', 415600072);
INSERT INTO children VALUES (541770412, 'Evan', 'Lucas', 'Male', '1999-09-24', '2015-11-01', 'Shaquita Turner', 'Marin', 415600072);
INSERT INTO children VALUES (541770414, 'Lucas', 'Edwards', 'Male', '2003-02-26', '2017-04-08', 'Stanley Wolf', 'San Mateo', 415600072);
INSERT INTO children VALUES (541770062, 'Gregory', 'Mitchell', 'Male', '2001-04-20', '2017-02-19', 'Angela Haggins', 'San Joaquin', 385002341);
INSERT INTO children VALUES (541770063, 'Eric', 'Lander', 'Male', '2005-06-03', '2017-06-04', 'Cassandra Niland', 'San Francisco', 385002341);
INSERT INTO children VALUES (541770021, 'Hugo', 'Dominguez-Chavez', 'Male', '2006-12-01', '2017-05-27', 'Theresa Suda', 'Alameda', 385002341);
INSERT INTO children VALUES (541770032, 'Spencer', 'Lipinski', 'Male', '2004-09-06', '2017-03-28', 'Michael Hodge', 'San Francisco', 385002341);
INSERT INTO children VALUES (541770033, 'Cody', 'Marin', 'Male', '2007-02-17', '2017-04-01', 'Michael Hodge', 'San Francisco', 385002341);
INSERT INTO children VALUES (541770022, 'Adrianna', 'Chavez', 'Female', '2005-12-07', '2017-03-03', 'Theresa Suda', 'Alameda', 385246017);
INSERT INTO children VALUES (541770446, 'Joy', 'Lawrence', 'Female', '1998-06-22', '2017-01-12', 'Cassandra Niland', 'San Francisco', 385246017);
INSERT INTO children VALUES (541770450, 'Casey', 'Herrera', 'Female', '2001-10-28', '2017-03-07', 'Sylvia Walker', 'San Francisco', 385246017);
INSERT INTO children VALUES (541770452, 'Amelia', 'Little', 'Female', '2003-12-14', '2017-02-07', 'Forest Swangler', 'Santa Cruz', 385246017);
INSERT INTO children VALUES (54177054, 'Ruby', 'McDaniel', 'Female', '2004-08-19', '2017-05-06', 'Michael Hodge', 'San Francisco', 385246017);
INSERT INTO children VALUES (54177048, 'Laura', 'Chavez', 'Female', '1999-03-04', '2017-04-21', 'Cassandra Niland', 'San Francisco', 385246017);
INSERT INTO children VALUES (541770494, 'Sam', 'Winston', 'Male', '2001-06-29', '2016-07-18', 'Shannon Osterfeld', 'Merced', 435000008);
INSERT INTO children VALUES (541770495, 'Jaime', 'Grant', 'Male', '1998-12-22', '2016-09-21', 'Roger Witherspoon', 'Santa Clara', 435000008);
INSERT INTO children VALUES (541770496, 'Levi', 'Gross', 'Male', '2000-02-05', '2016-08-13', 'Roger Witherspoon', 'Santa Clara', 435000008);
INSERT INTO children VALUES (541770497, 'Roy', 'Craig', 'Male', '1999-08-31', '2017-01-22', 'Theresa Suda', 'Alameda', 435000008);
INSERT INTO children VALUES (541770498, 'Jim', 'Brooks', 'Male', '2002-03-31', '2016-12-28', 'Juanita Sauceda', 'Santa Clara', 435000008);
INSERT INTO children VALUES (541770499, 'Anthony', 'Strickland', 'Male', '2003-12-09', '2016-10-31', 'Waylon T. Hollington', 'Santa Clara', 435000008);
INSERT INTO children VALUES (541770474, 'Geraldine', 'Aguilar', 'Female', '2003-06-19', '2017-06-01', 'Queenie Brown', 'San Bernardino', 198543276);
INSERT INTO children VALUES (541770476, 'Dana', 'Webster', 'Female', '2000-03-20', '2016-10-10', 'Betty Lowry', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770478, 'Lisa', 'Summers', 'Female', '1999-04-09', '2015-11-13', 'Betty Lowry', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770480, 'Emily', 'Lee', 'Female', '2001-10-15', '2016-01-14', 'Betty Lowry', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770482, 'Jared', 'Reed', 'Male', '1998-08-08', '2015-10-22', 'Gloria Delgado', 'Ventura', 198543276);
INSERT INTO children VALUES (541770484, 'Caleb', 'Garza', 'Male', '2005-01-19', '2017-04-26', 'Scott Hayward', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770486, 'Ervin', 'Johnson', 'Male', '1999-05-23', '2015-11-01', 'Scott Hayward', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770488, 'Pedro', 'Garza', 'Male', '2004-11-06', '2017-03-18', 'Scott Hayward', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770490, 'Keith', 'Woods', 'Male', '2001-02-01', '2016-04-27', 'Bobby Barfield', 'Kern', 198543276);
INSERT INTO children VALUES (541770492, 'Kirk', 'Garrett', 'Male', '2002-08-07', '2017-02-23', 'Lorraine Casper', 'Los Angeles', 198543276);
INSERT INTO children VALUES (541770501, 'Cynthia', 'Carpenter', 'Female', '1999-07-03', '2016-07-29', 'Scott Hayward', 'Los Angeles', 197588809);
INSERT INTO children VALUES (541770503, 'Donna', 'Sharp', 'Female', '2005-02-04', '2017-06-04', 'Gloria Delgado', 'Ventura', 197588809);
INSERT INTO children VALUES (541770505, 'Nicole', 'Franklin', 'Female', '2003-03-11', '2016-09-23', 'Lorraine Casper', 'Los Angeles', 197588809);
INSERT INTO children VALUES (541770507, 'Maggie', 'Rodriguez', 'Female', '2000-09-30', '2016-10-11', 'Lorraine Casper', 'Los Angeles', 197588809);
INSERT INTO children VALUES (541770509, 'Gwendolyn', 'White', 'Female', '2001-01-07', '2017-02-02', 'Betty Lowry', 'Los Angeles', 197588809);
INSERT INTO children VALUES (541770511, 'Nora', 'Wagner', 'Female', '2002-08-02', '2017-04-11', 'Bobby Barfield', 'Kern', 197588809);
INSERT INTO children VALUES (541770513, 'Amanda', 'Holmes', 'Female', '1999-10-23', '2014-11-07', 'Rosa Sosa', 'Orange', 306008850);
INSERT INTO children VALUES (541770515, 'Katherine', 'King', 'Female', '2001-05-26', '2016-03-21', 'Padma Singh', 'Riverside', 306008850);
INSERT INTO children VALUES (541770517, 'Minnie', 'Watkins', 'Female', '2002-06-25', '2015-09-06', 'Yun Zhao', 'Orange', 306008850);
INSERT INTO children VALUES (541770519, 'Mabel', 'Lynch', 'Female', '2000-09-15', '2017-05-11', 'Yun Zhao', 'Orange', 306008850);
INSERT INTO children VALUES (541770521, 'Hattie', 'Rogers', 'Female', '2006-05-08', '2017-05-16', 'Vinh Vo', 'San Diego', 306008850);
INSERT INTO children VALUES (541770523, 'Lupita', 'Zaragoza', 'Female', '2003-12-12', '2017-01-04', 'Derek Nesbitt', 'Orange', 306008850);
INSERT INTO children VALUES (541770576, 'Alonso', 'Galvin', 'Male', '1998-09-10', '2014-01-16', 'Phyllis Dusso', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770578, 'Gilbert', 'Fernandez', 'Male', '2003-01-30', '2017-01-17', 'Phyllis Dusso', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770580, 'Brendan', 'Murphy', 'Male', '2005-04-14', '2016-12-02', 'Phyllis Dusso', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770582, 'Joseph', 'Oritz', 'Male', '2004-02-25', '2017-03-19', 'Gladys Clifton', 'Monterey', 411888643);
INSERT INTO children VALUES (541770584, 'Shawn', 'Lambert', 'Male', '1999-10-19', '2014-04-11', 'Stanley Wolf', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770586, 'Malcolm', 'Love', 'Male', '2001-12-30', '2015-07-19', 'Stanley Wolf', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770588, 'Neal', 'Robertson', 'Male', '2000-03-23', '2014-05-09', 'Stanley Wolf', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770590, 'Zachary', 'Manning', 'Male', '2006-01-24', '2017-03-26', 'Shaquita Turner', 'Marin', 411888643);
INSERT INTO children VALUES (541770592, 'Lawrence', 'Moore', 'Male', '2000-07-02', '2014-09-13', 'Nancy Chang', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770594, 'Henry', 'Martinez', 'Male', '2002-08-31', '2016-06-16', 'Nancy Chang', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770596, 'Marco', 'Torres', 'Male', '2001-11-16', '2015-10-10', 'Nancy Chang', 'San Mateo', 411888643);
INSERT INTO children VALUES (541770598, 'Donovan', 'Greene', 'Male', '1999-05-12', '2016-04-03', 'Forest Swangler', 'Santa Cruz', 411888643);
INSERT INTO children VALUES (541770853, 'Patrick', 'Watts', 'Male', '1999-07-11', '2013-10-05', 'Theresa Suda', 'Alameda', 430707079);
INSERT INTO children VALUES (541770845, 'Wendell', 'Chandler', 'Male', '2003-10-08', '2017-06-05', 'Waylon T. Hollington', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770843, 'Armando', 'Cordoza', 'Male', '2001-07-18', '2015-09-19', 'Waylon T. Hollington', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770857, 'Domingo', 'Perez', 'Male', '2004-12-25', '2017-01-08', 'Roger Witherspoon', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770837, 'Devin', 'Spencer', 'Male', '1999-07-07', '2014-07-09', 'Waylon T. Hollington', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770725, 'Leona', 'Jordan', 'Female', '2000-11-15', '2015-08-24', 'Sylvia Walker', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770839, 'Lionel', 'Wade', 'Male', '1998-08-01', '2013-05-06', 'Waylon T. Hollington', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770841, 'Noah', 'Carter', 'Male', '2000-02-09', '2016-07-11', 'Waylon T. Hollington', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770847, 'Eddie', 'Jennings', 'Male', '2002-07-25', '2016-08-03', 'Waylon T. Hollington', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770849, 'Frankie', 'Patton', 'Male', '2003-08-31', '2017-04-24', 'Waylon T. Hollington', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770851, 'Alexander', 'Conner', 'Male', '2003-10-08', '2017-04-23', 'Theresa Suda', 'Alameda', 430707079);
INSERT INTO children VALUES (541770727, 'Dana', 'Austin', 'Female', '2001-01-23', '2014-06-16', 'Sylvia Walker', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770729, 'Erin', 'Grant', 'Female', '2003-01-07', '2017-03-18', 'Sylvia Walker', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770731, 'Carla', 'Franklin', 'Female', '2002-09-03', '2016-09-19', 'Forest Swangler', 'Santa Cruz', 385512341);
INSERT INTO children VALUES (541770733, 'Inez', 'Montanez', 'Female', '1998-11-14', '2012-05-05', 'Cassandra Niland', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770855, 'Douglas', 'Payne', 'Male', '2000-06-02', '2016-02-27', 'Roger Witherspoon', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770859, 'Eric', 'Schneider', 'Male', '1999-11-19', '2014-12-14', 'Roger Witherspoon', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770861, 'Dexter', 'Davidson', 'Male', '2005-11-15', '2017-04-27', 'Roger Witherspoon', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770863, 'Bernadette', 'Hinojos', 'Female', '2001-09-13', '2016-06-13', 'Roger Witherspoon', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770865, 'Susan', 'Hawkins', 'Female', '2006-03-01', '2017-03-11', 'Roger Witherspoon', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770867, 'Jody', 'Johnson', 'Female', '2002-09-09', '2014-10-09', 'Roger Witherspoon', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770869, 'Viola', 'Hampton', 'Female', '2000-04-06', '2015-03-01', 'Shannon Osterfeld', 'Merced', 430707079);
INSERT INTO children VALUES (541770871, 'Wanda', 'McGuired', 'Female', '2001-10-06', '2016-10-22', 'Shannon Osterfeld', 'Merced', 430707079);
INSERT INTO children VALUES (541770873, 'April', 'Klein', 'Female', '2004-08-14', '2017-04-25', 'Juanita Sauceda', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770529, 'Rose', 'Simmons', 'Female', '2004-11-28', '2017-05-22', 'Derek Nesbitt', 'Orange', 300173398);
INSERT INTO children VALUES (541770531, 'Deborah', 'Bailey', 'Female', '2005-08-19', '2017-05-26', 'Yun Zhao', 'Orange', 300173398);
INSERT INTO children VALUES (541770533, 'Tamara', 'Hall', 'Female', '2003-05-03', '2017-05-05', 'Yun Zhao', 'Orange', 300173398);
INSERT INTO children VALUES (541770735, 'Alison', 'Cobb', 'Female', '2001-04-29', '2016-07-21', 'Cassandra Niland', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770737, 'Melanie', 'Taylor', 'Female', '2002-12-09', '2017-04-09', 'Cassandra Niland', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770739, 'Abraham', 'Farmer', 'Male', '2003-10-21', '2016-11-18', 'Cassandra Niland', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770741, 'Dominic', 'Thompson', 'Male', '1999-06-29', '2014-12-03', 'Angela Haggins', 'San Joaquin', 385512341);
INSERT INTO children VALUES (541770743, 'Julian', 'Allison', 'Male', '2004-03-08', '2017-04-08', 'Michael Hodge', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770535, 'Anne', 'Clark', 'Female', '2004-02-05', '2017-06-03', 'Yun Zhao', 'Orange', 300173398);
INSERT INTO children VALUES (541770537, 'Clement', 'Dunne', 'Male', '2000-06-16', '2017-06-04', 'Rosa Sosa', 'Orange', 300173398);
INSERT INTO children VALUES (541770539, 'Carter', 'Sales', 'Male', '2006-06-25', '2017-05-17', 'Rosa Sosa', 'Orange', 300173398);
INSERT INTO children VALUES (541770875, 'Desiree', 'Marshall', 'Female', '1998-11-17', '2014-06-08', 'Juanita Sauceda', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770877, 'Victoria', 'Fields', 'Female', '2000-02-12', '2015-03-09', 'Juanita Sauceda', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770879, 'Margaret', 'Cooney', 'Female', '2003-06-06', '2017-05-06', 'Juanita Sauceda', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770881, 'Mandy', 'Cope', 'Female', '1999-05-21', '2013-07-20', 'Juanita Sauceda', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770883, 'Rebecca', 'Wiggins', 'Female', '2003-12-07', '2016-12-27', 'Juanita Sauceda', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770885, 'Nevada', 'Knott', 'Female', '2002-07-25', '2015-03-16', 'Juanita Sauceda', 'Santa Clara', 430707079);
INSERT INTO children VALUES (541770887, 'Bonita', 'Bernabe', 'Female', '1999-12-13', '2014-01-31', 'Theresa Suda', 'Alameda', 430707079);
INSERT INTO children VALUES (541770456, 'Huong', 'Mangalinden', 'Female', '1999-05-15', '2014-03-03', 'Sylvia Walker', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770541, 'Darius', 'Lockwood', 'Male', '2003-12-27', '2017-04-11', 'Rosa Sosa', 'Orange', 300173398);
INSERT INTO children VALUES (541769969, 'Adam', 'York', 'Male', '2004-02-28', '2017-01-16', 'Gladys Clifton', 'Monterey', 411400060);
INSERT INTO children VALUES (541770745, 'Cory', 'Cool', 'Male', '2000-11-21', '2015-05-25', 'Michael Hodge', 'San Francisco', 385512341);
INSERT INTO children VALUES (541769994, 'Carlton', 'Bryant-Brown', 'Male', '2003-05-21', '2017-03-12', 'Stanley Wolf', 'San Mateo', 411400060);
INSERT INTO children VALUES (541769999, 'An', 'Tran', 'Male', '1997-06-11', '2016-04-04', 'Phyllis Dusso', 'San Mateo', 411400060);
INSERT INTO children VALUES (541770747, 'Raul', 'Jimenez', 'Male', '2003-04-20', '2017-04-26', 'Michael Hodge', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770749, 'Vu', 'Vo', 'Male', '2002-11-12', '2016-11-30', 'Michael Hodge', 'San Francisco', 385512341);
INSERT INTO children VALUES (541770751, 'Scott', 'Lewis', 'Male', '2001-12-31', '2017-01-16', 'Gregory Biondi', 'Stanislaus', 385512341);
INSERT INTO children VALUES (541770753, 'Benjamin', 'Gonzalez', 'Male', '2003-08-04', '2017-05-28', 'Gregory Biondi', 'Stanislaus', 385512341);
INSERT INTO children VALUES (541770755, 'Gina', 'Tyler', 'Female', '2007-02-20', '2017-01-03', 'Michael Hodge', 'San Francisco', 385246687);
INSERT INTO children VALUES (541770757, 'Lillie', 'Fox', 'Female', '2004-04-02', '2017-04-04', 'Michael Hodge', 'San Francisco', 385246687);
INSERT INTO children VALUES (541770012, 'Brody', 'Wadley', 'Male', '2007-05-25', '2016-08-14', 'Cassandra Niland', 'San Francisco', 411400060);
INSERT INTO children VALUES (541770759, 'Leigh', 'Steele', 'Female', '2003-07-18', '2017-03-21', 'Cassandra Niland', 'San Francisco', 385246687);
INSERT INTO children VALUES (541770761, 'Violet', 'Crawford', 'Female', '2000-11-26', '2017-02-15', 'Cassandra Niland', 'San Francisco', 385246687);
INSERT INTO children VALUES (541770763, 'Maureen', 'Reed', 'Female', '2005-05-29', '2017-02-08', 'Sylvia Walker', 'San Francisco', 385246687);
INSERT INTO children VALUES (541770765, 'Elizabeth', 'Maldonado', 'Female', '2006-08-12', '2017-03-24', 'Sylvia Walker', 'San Francisco', 385246687);
INSERT INTO children VALUES (541770525, 'Maria', 'Zamora', 'Female', '2006-04-22', '2017-04-04', 'Derek Nesbitt', 'Orange', 300173398);
INSERT INTO children VALUES (541770527, 'Caroline', 'Stewart', 'Female', '2000-01-07', '2017-05-03', 'Derek Nesbitt', 'Orange', 300173398);
INSERT INTO children VALUES (541770560, 'Heriberto', 'Holguin', 'Male', '2002-12-04', '2017-05-11', 'Shaquita Turner', 'Marin', 411400060);
INSERT INTO children VALUES (541770559, 'Lanh', 'Chan', 'Male', '2003-12-25', '2016-07-17', 'Phyllis Dusso', 'San Mateo', 411400060);
INSERT INTO children VALUES (541770561, 'Virgilio', 'Moran', 'Male', '2003-03-06', '2017-06-02', 'Nancy Chang', 'San Mateo', 411400060);
INSERT INTO children VALUES (541770562, 'Rodney', 'North', 'Male', '2001-12-28', '2017-02-11', 'Stanley Wolf', 'San Mateo', 411400060);


--
-- Name: children children_pkey; Type: CONSTRAINT; Schema: public; Owner: pguser
--

ALTER TABLE ONLY children
    ADD CONSTRAINT children_pkey PRIMARY KEY (id);


--
-- Name: index_children_on_facility_id; Type: INDEX; Schema: public; Owner: pguser
--

CREATE INDEX index_children_on_facility_id ON children USING btree (facility_id);


--
-- PostgreSQL database dump complete
--

