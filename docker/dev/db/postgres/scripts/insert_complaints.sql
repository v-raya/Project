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

CREATE SEQUENCE complaints_id_seq;

--
-- Name: complaints; Type: TABLE; Schema: public; Owner: pguser
--

CREATE TABLE complaints (
    id integer DEFAULT nextval('complaints_id_seq'::regclass) NOT NULL,
    complaint_date date,
    assigned_worker character varying,
    control_number character varying,
    priority_level integer,
    approval_date date,
    status character varying,
    facility_id integer NOT NULL
);


ALTER TABLE complaints OWNER TO pguser;

ALTER SEQUENCE complaints_id_seq OWNER TO pguser;

--
-- Data for Name: complaints; Type: TABLE DATA; Schema: public; Owner: pguser
--

INSERT INTO complaints VALUES (72, '2016-09-19', 'Wilma Aguillon', '26-CR-20160919101829', 3, '2016-12-05', 'Approved', 412985642);
INSERT INTO complaints VALUES (1, '2017-01-01', 'Richard Stein', 'A45670', 1, '2017-01-05', 'Pending', 909453695);
INSERT INTO complaints VALUES (2, '2018-01-01', 'Richard Stein', 'A45671', 2, '2017-01-08', 'Pending', 909453695);
INSERT INTO complaints VALUES (59, '2014-10-20', 'Allison Fesler', '26-CR-20141020121935', 1, '2014-11-13', 'Approved', 385202991);
INSERT INTO complaints VALUES (73, '2010-01-17', 'Franklin Barnes', '26-CR-20100117083521', 1, '2011-03-05', 'Approved', 412985642);
INSERT INTO complaints VALUES (60, '2014-09-19', 'Allison Fesler', '26-CR-20140919142145', 3, '2014-12-22', 'Approved', 385202991);
INSERT INTO complaints VALUES (3, '2015-07-26', 'Jeremy Raiford', '26-CR-20150726123209', 3, '2015-12-14', 'Approved', 380506694);
INSERT INTO complaints VALUES (4, '2012-12-06', 'Jeremy Raiford', '26-CR-20121206170356', 3, '2013-02-16', 'Approved', 380506694);
INSERT INTO complaints VALUES (5, '2009-06-19', 'Alex Mumford', '26-CR-20090619091146', 2, '2009-10-03', 'Approved', 380506694);
INSERT INTO complaints VALUES (6, NULL, NULL, NULL, NULL, NULL, NULL, 380506694);
INSERT INTO complaints VALUES (7, NULL, NULL, NULL, NULL, NULL, NULL, 380506694);
INSERT INTO complaints VALUES (8, '2016-07-29', 'Daisy Rosario', '26-CR-20160729160944', 3, '2016-08-04', 'Approved', 430707335);
INSERT INTO complaints VALUES (9, '2014-03-12', 'Daisy Rosario', '26-CR-20140312143309', 3, '2014-07-14', 'Approved', 430707335);
INSERT INTO complaints VALUES (10, '2017-04-29', 'Chris Clancy', '26-CR-20170429022709', 3, NULL, 'Pending', 411408542);
INSERT INTO complaints VALUES (11, '2017-11-18', 'Chris Clancy', '26-CR-20161118112203', 3, NULL, 'Pending', 411408542);
INSERT INTO complaints VALUES (12, '2016-04-15', 'Chris Clancy', '26-CR-20160415153456', 2, '2016-07-12', 'Approved', 411408542);
INSERT INTO complaints VALUES (61, '2008-04-17', 'Lester Horner', '26-CR-20080417162355', 3, '2008-07-08', 'Approved', 385202991);
INSERT INTO complaints VALUES (13, '2009-02-14', 'Mark Winkler', '26-CR-20090214080808', 3, '2009-05-01', 'Approved', 411408542);
INSERT INTO complaints VALUES (14, '2007-07-21', 'Mark Winkler', '26-CR-20070721131246', 3, '2007-10-14', 'Approved', 411408542);
INSERT INTO complaints VALUES (15, '2015-11-14', 'Janet Allen', '32-CR-20151114155023', 2, '2015-04-29', 'Approved', 198204205);
INSERT INTO complaints VALUES (16, '2011-08-16', 'Janet Allen', '32-CR-20110816104355', 3, '2011-10-30', 'Approved', 198204205);
INSERT INTO complaints VALUES (17, '2015-07-26', 'Jeremy Raiford', '26-CR-20150726123209', 3, '2015-12-14', 'Approved', 909045100);
INSERT INTO complaints VALUES (18, '2017-04-19', 'Louis Stiffler', '26-CR-20170419082101', 2, NULL, 'Pending', 385022936);
INSERT INTO complaints VALUES (19, '2017-03-22', 'Louis Stiffler', '26-CR-20170322092202', 3, NULL, 'Pending', 385022936);
INSERT INTO complaints VALUES (20, '2016-10-18', 'Louis Stiffler', '26-CR-20161018102303', 3, '2016-12-02', 'Approved', 385022936);
INSERT INTO complaints VALUES (21, '2016-08-18', 'Louis Stiffler', '26-CR-20160818112404', 3, '2016-11-15', 'Approved', 385022936);
INSERT INTO complaints VALUES (22, '2016-04-14', 'Louis Stiffler', '26-CR-20160414122505', 2, '2016-06-26', 'Approved', 385022936);
INSERT INTO complaints VALUES (23, '2015-12-23', 'Louis Stiffler', '26-CR-20151223132606', 3, '2015-04-02', 'Approved', 385022936);
INSERT INTO complaints VALUES (24, '2016-08-18', 'Louis Stiffler', '26-CR-20160818112404', 3, '2016-11-15', 'Approved', 909045113);
INSERT INTO complaints VALUES (25, '2017-02-10', 'Ruben Pounds', '19-CR-20170210075638', 1, NULL, 'Pending', 336424547);
INSERT INTO complaints VALUES (26, '2016-11-19', 'Ruben Pounds', '19-CR-20161119082234', 2, '2017-03-04', 'Approved', 336424547);
INSERT INTO complaints VALUES (27, '2015-05-15', 'Ruben Pounds', '19-CR-20150515101212', 3, '2015-05-29', 'Approved', 336424547);
INSERT INTO complaints VALUES (28, '2013-04-29', 'Ruben Pounds', '19-CR-20130429150402', 3, '2013-07-15', 'Approved', 336424547);
INSERT INTO complaints VALUES (29, '2017-02-10', 'Ruben Pounds', '19-CR-20170210075638', 1, NULL, 'Pending', 909045117);
INSERT INTO complaints VALUES (30, '2017-02-10', 'Ruben Pounds', '19-CR-20170210075638', 1, NULL, 'Pending', 909045117);
INSERT INTO complaints VALUES (31, '2016-11-19', 'Ruben Pounds', '19-CR-20161119082234', 2, '2017-03-04', 'Approved', 909045116);
INSERT INTO complaints VALUES (32, '2016-09-19', 'Rebecca Bayliss', '32-CR-20160919075628', 3, '2017-01-12', 'Approved', 197806351);
INSERT INTO complaints VALUES (33, '2016-03-25', 'Rebecca Bayliss', '32-CR-20160325090909', 3, '2016-06-17', 'Approved', 197806351);
INSERT INTO complaints VALUES (34, '2015-10-30', 'Rebecca Bayliss', '32-CR-20151030092312', 1, '2016-05-06', 'Approved', 197806351);
INSERT INTO complaints VALUES (35, '2015-08-29', 'Rebecca Bayliss', '32-CR-20150829121538', 3, '2015-11-09', 'Approved', 197806351);
INSERT INTO complaints VALUES (36, '2013-05-05', 'Jean Grimes', '32-CR-20130505161616', 3, '2013-05-21', 'Approved', 197806351);
INSERT INTO complaints VALUES (37, '2016-09-19', 'Rebecca Bayliss', '32-CR-20160919075628', 3, '2016-01-12', 'Approved', 909045119);
INSERT INTO complaints VALUES (38, '2016-03-25', 'Rebecca Bayliss', '32-CR-20160325090909', 3, '2016-06-17', 'Approved', 909045120);
INSERT INTO complaints VALUES (39, '2017-04-10', 'Kurt Lemire', '26-CR-20170410091537', 3, NULL, 'Pending', 445202849);
INSERT INTO complaints VALUES (40, '2016-09-22', 'Kurt Lemire', '26-CR-20160922120718', 3, '2016-12-11', 'Approved', 445202849);
INSERT INTO complaints VALUES (41, '2015-12-31', 'Kurt Lemire', '26-CR-20151231142323', 2, '2016-07-06', 'Approved', 445202849);
INSERT INTO complaints VALUES (42, '2013-06-19', 'Allison Fesler', '26-CR-20130619165909', 3, '2013-09-03', 'Approved', 445202849);
INSERT INTO complaints VALUES (43, '2013-03-09', 'Allison Fesler', '26-CR-20130309115427', 3, '2013-05-27', 'Approved', 445202849);
INSERT INTO complaints VALUES (44, '2011-01-16', 'Allison Fesler', '26-CR-20110116075609', 2, '2011-02-27', 'Approved', 445202849);
INSERT INTO complaints VALUES (45, '2017-04-10', 'Kurt Lemire', '26-CR-20170410091537', 3, NULL, 'Pending', 909045121);
INSERT INTO complaints VALUES (46, '2013-06-19', 'Allison Fesler', '26-CR-20130619165909', 3, '2013-09-03', 'Approved', 909045123);
INSERT INTO complaints VALUES (47, '2011-01-16', 'Allison Fesler', '26-CR-20110116075609', 2, '2011-02-27', 'Approved', 909045123);
INSERT INTO complaints VALUES (48, '2011-05-20', 'Wilma Aguillon', '26-CR-20110520111905', 3, '2011-08-03', 'Approved', 275202579);
INSERT INTO complaints VALUES (49, '2011-05-20', 'Wilma Aguillon', '26-CR-20110520111905', 3, '2011-08-03', 'Approved', 909045126);
INSERT INTO complaints VALUES (50, '2016-03-21', 'Louis Stiffler', '26-CR-20160321121309', 3, '2016-06-13', 'Approved', 445201602);
INSERT INTO complaints VALUES (51, '2015-11-29', 'Louis Stiffler', '26-CR-20151129151223', 3, '2015-02-17', 'Approved', 445201602);
INSERT INTO complaints VALUES (52, '2014-07-05', 'Louis Stiffler', '26-CR-20140705111208', 3, '2014-10-16', 'Approved', 445201602);
INSERT INTO complaints VALUES (53, '2014-05-30', 'Louis Stiffler', '26-CR-20140530091756', 2, '2014-10-04', 'Approved', 445201602);
INSERT INTO complaints VALUES (54, '2016-03-21', 'Louis Stiffler', '26-CR-20160321121309', 3, '2016-06-13', 'Approved', 909045129);
INSERT INTO complaints VALUES (55, '2014-05-30', 'Louis Stiffler', '26-CR-20140530091756', 2, '2014-10-04', 'Approved', 909045128);
INSERT INTO complaints VALUES (56, '2017-01-21', 'Kurt Lemire', '26-CR-20170121080647', 3, '2017-04-08', 'Approved', 385202991);
INSERT INTO complaints VALUES (57, '2016-07-27', 'Kurt Lemire', '26-CR-20160727081515', 2, '2016-10-18', 'Approved', 385202991);
INSERT INTO complaints VALUES (58, '2015-04-09', 'Kurt Lemire', '26-CR-20150409101725', 3, '2015-07-05', 'Approved', 385202991);
INSERT INTO complaints VALUES (62, '2017-01-21', 'Kurt Lemire', '26-CR-20170121080647', 3, '2017-04-08', 'Approved', 909045133);
INSERT INTO complaints VALUES (63, '2014-10-20', 'Allison Fesler', '26-CR-20141020121935', 1, '2014-11-13', 'Approved', 909045131);
INSERT INTO complaints VALUES (64, '2008-04-17', 'Lester Horner', '26-CR-20080417162355', 3, '2008-07-08', 'Approved', 909045131);
INSERT INTO complaints VALUES (65, '2017-02-14', 'Beth Claffey', '19-CR-20170214170319', 2, '2017-05-01', 'Approved', 306003813);
INSERT INTO complaints VALUES (66, '2016-11-17', 'Beth Claffey', '19-CR-20161117141749', 3, '2017-02-08', 'Approved', 306003813);
INSERT INTO complaints VALUES (67, '2016-11-17', 'Beth Claffey', '19-CR-20161117141749', 3, '2017-02-08', 'Approved', 909045134);
INSERT INTO complaints VALUES (68, '2016-10-28', 'Jeremy Raiford', '26-CR-20161028105416', 3, '2017-01-13', 'Approved', 384502941);
INSERT INTO complaints VALUES (69, '2015-12-30', 'Jeremy Raiford', '26-CR-20151230150921', 2, '2016-01-14', 'Approved', 384502941);
INSERT INTO complaints VALUES (70, '2014-05-06', 'Dennis Cranford', '34-CR-20140506112306', 3, '2014-08-01', 'Approved', 195783285);
INSERT INTO complaints VALUES (71, '2015-10-30', 'Daisy Rosario', '26-CR-20151030104631', 3, '2015-12-21', 'Approved', 430988436);
INSERT INTO complaints VALUES (74, '2016-05-14', 'Ruben Pounds', '19-CR-20160514104101', 3, '2016-07-03', 'Approved', 1978563409);
INSERT INTO complaints VALUES (75, '2014-11-13', 'Ruben Pounds', '19-CR-20141113142733', 3, '2015-02-12', 'Approved', 1978563409);
INSERT INTO complaints VALUES (76, '2011-01-15', 'Ruben Pounds', '19-CR-20110115170249', 3, '2011-04-18', 'Approved', 1978563409);
INSERT INTO complaints VALUES (77, '2016-09-18', 'Louis Stiffler', '26-CR-20160918094816', 3, '2016-12-12', 'Approved', 385209345);
INSERT INTO complaints VALUES (78, '2016-04-02', 'Louis Stiffler', '26-CR-20160402113607', 3, '2016-06-23', 'Approved', 385209345);
INSERT INTO complaints VALUES (79, '2015-11-29', 'Louis Stiffler', '26-CR-20151129151748', 2, '2016-02-09', 'Approved', 385209345);
INSERT INTO complaints VALUES (80, '2011-08-30', 'Jules Montooth', '34-CR-20110830151542', 3, '2011-11-11', 'Approved', 197805287);
INSERT INTO complaints VALUES (81, '2017-01-16', 'Kurt Lemire', '26-CR20170116105917', 3, '2017-04-09', 'Approved', 435205582);
INSERT INTO complaints VALUES (82, '2015-10-28', 'Kurt Lemire', '26-CR-20151028131802', 3, '2015-12-21', 'Approved', 435205582);
INSERT INTO complaints VALUES (83, '2016-07-27', 'Cheryl Diener', '34-CR-20160727115903', 3, '2016-11-09', 'Approved', 197834756);
INSERT INTO complaints VALUES (84, '2016-10-19', 'Wilma Aguillon', '26-CR-20161019082841', 3, '2017-01-17', 'Approved', 415693585);
INSERT INTO complaints VALUES (85, '2015-06-17', 'Wilma Aguillon', '26-CR-20150617101229', 3, '2015-09-24', 'Approved', 415693585);
INSERT INTO complaints VALUES (86, '2017-01-12', 'Daisy Rosario', '26-CR-20170112132113', 2, NULL, 'Pending', 430663512);
INSERT INTO complaints VALUES (87, '2015-03-03', 'Daisy Rosario', '26-CR-20150303093629', 3, '2015-05-25', 'Approved', 430663512);
INSERT INTO complaints VALUES (88, '2012-02-28', 'Daisy Rosario', '26-CR-20120228170241', 3, '2012-05-14', 'Approved', 430663512);
INSERT INTO complaints VALUES (89, '2015-10-03', 'Beth Claffey', '19-CR-20151003113919', 3, '2015-12-16', 'Approved', 306016623);
INSERT INTO complaints VALUES (90, '2013-03-14', 'Beth Claffey', '19-CR-20130314134116', 3, '2013-06-21', 'Approved', 306016623);
INSERT INTO complaints VALUES (91, '2008-08-08', 'Beth Claffey', '19-CR-20080808080808', 3, '2008-11-01', 'Approved', 306016623);
INSERT INTO complaints VALUES (92, '2017-01-03', 'Beth Claffey', '19-CR-20170103090814', 3, '2017-03-13', 'Approved', 306099772);
INSERT INTO complaints VALUES (93, '2016-09-28', 'Beth Claffey', '19-CR-20160928121717', 2, '2016-11-06', 'Approved', 306099772);
INSERT INTO complaints VALUES (94, '2016-05-27', 'Jeremy Raiford', '26-CR-20160527101351', 3, '2016-08-11', 'Approved', 385002845);
INSERT INTO complaints VALUES (95, '2011-01-30', 'Alex Mumford', '26-CR-20110130141732', 3, '2011-04-19', 'Approved', 385002845);
INSERT INTO complaints VALUES (96, '2016-04-17', 'Dennis Cranford', '34-CR-20160417101641', 3, '2016-07-08', 'Approved', 197449810);
INSERT INTO complaints VALUES (97, '2015-11-28', 'Dennis Cranford', '34-CR-20151128075956', 2, '2016-02-15', 'Approved', 197449810);
INSERT INTO complaints VALUES (98, '2015-08-21', 'Dennis Cranford', '34-CR-20150821153920', 3, '2015-11-06', 'Approved', 197449810);
INSERT INTO complaints VALUES (99, '2016-11-30', 'Chris Clancy', '26-CR-20161130134809', 1, NULL, 'Pending', 415771298);
INSERT INTO complaints VALUES (100, '2015-07-27', 'Chris Clancy', '26-CR-20150727102130', 3, '2015-10-14', 'Approved', 415771298);
INSERT INTO complaints VALUES (101, '2016-08-21', 'Dennis Cranford', '34-CR-20160821152711', 3, '2016-11-19', 'Approved', 197446082);
INSERT INTO complaints VALUES (102, '2014-11-16', 'Dennis Cranford', '34-CR-20141116133836', 3, '2015-02-06', 'Approved', 197446082);
INSERT INTO complaints VALUES (103, '2012-07-27', 'Dennis Cranford', '34-CR-20120727110649', 3, '2012-10-16', 'Approved', 197446082);
INSERT INTO complaints VALUES (104, '2016-05-09', 'Cheryl Deiner', '34-CR-20160509085023', 2, '2016-08-17', 'Approved', 191155867);
INSERT INTO complaints VALUES (105, '2016-08-09', 'Ruben Pounds', '19-CR-20160809083327', 3, '2016-11-02', 'Approved', 339475613);
INSERT INTO complaints VALUES (106, '2013-03-27', 'Ruben Pounds', '19-CR-20130327101602', 3, '2013-06-21', 'Approved', 339475613);
INSERT INTO complaints VALUES (107, '2010-10-21', 'Ruben Pounds', '19-CR-20101021143757', 3, '2011-01-19', 'Approved', 339475613);
INSERT INTO complaints VALUES (108, '2016-04-11', 'Kurt Lemire', '26-CR-20160411115323', 3, '2016-07-01', 'Approved', 455032855);
INSERT INTO complaints VALUES (109, '2015-01-29', 'Kurt Lemire', '26-CR-20150129152137', 1, '2015-08-15', 'Approved', 455032855);
INSERT INTO complaints VALUES (110, '2015-09-30', 'Kurt Lemire', '26-CR-20150930091750', 1, '2015-12-04', 'Approved', 455032855);
INSERT INTO complaints VALUES (111, '2016-01-06', 'Daisy Rosario', '26-CR-20160106115317', 3, '2016-04-01', 'Approved', 435211996);
INSERT INTO complaints VALUES (112, '2015-08-26', 'Daisy Rosario', '26-CR-20150826140105', 3, '2015-11-17', 'Approved', 435211996);
INSERT INTO complaints VALUES (113, '2013-02-14', 'Daisy Rosario', '26-CR-20130214162233', 3, '2013-05-03', 'Approved', 435211996);
INSERT INTO complaints VALUES (114, '2016-06-21', 'Daisy Rosario', '26-CR-20160621113927', 3, '2016-09-03', 'Approved', 435299671);
INSERT INTO complaints VALUES (115, '2015-10-30', 'Daisy Rosario', '26-CR-20151030092146', 3, '2015-12-11', 'Approved', 435299671);
INSERT INTO complaints VALUES (116, '2016-09-27', 'Ruben Pounds', '19-CR-20160927081411', 2, '2016-12-10', 'Approved', 300665437);
INSERT INTO complaints VALUES (117, '2014-12-21', 'Ruben Pounds', '19-CR-20141221112822', 3, '2015-03-15', 'Approved', 300665437);
INSERT INTO complaints VALUES (118, '2013-04-07', 'Ruben Pounds', '19-CR-20130407135644', 3, '2013-07-01', 'Approved', 300665437);
INSERT INTO complaints VALUES (119, '2015-07-15', 'Wilma Aguillon', '26-CR-20150715152631', 3, '2015-10-03', 'Approved', 435205576);
INSERT INTO complaints VALUES (120, '2014-04-28', 'Wilma Aguillon', '26-CR-20140428091711', 3, '2014-06-05', 'Approved', 435205576);
INSERT INTO complaints VALUES (121, '2013-04-27', 'Louis Stiffler', '26-CR-20130427170354', 1, '2013-09-15', 'Approved', 385465528);
INSERT INTO complaints VALUES (122, '2016-11-19', 'Kurt Lemire', '26-CR-20161119101457', 3, '2017-02-14', 'Approved', 435667797);
INSERT INTO complaints VALUES (123, '2014-09-28', 'Allison Fesler', '26-CR-20140928080939', 3, '2015-01-23', 'Approved', 435667797);
INSERT INTO complaints VALUES (124, '2013-12-04', 'Allison Fesler', '26-CR-20131204122807', 2, '2014-03-02', 'Approved', 435667797);
INSERT INTO complaints VALUES (125, '2011-02-01', 'Allison Fesler', '26-CR-20110201163721', 3, '2011-04-17', 'Approved', 435667797);
INSERT INTO complaints VALUES (126, '2017-03-16', 'Dennis Cranford', '34-CR-20170316075621', 3, NULL, 'Pending', 198966009);
INSERT INTO complaints VALUES (127, '2017-03-16', 'Dennis Cranford', '34-CR-20170316075621', 3, NULL, 'Pending', 198966009);
INSERT INTO complaints VALUES (128, '2015-10-21', 'Dennis Cranford', '34-CR-20151021102339', 3, '2016-01-16', 'Approved', 198966009);
INSERT INTO complaints VALUES (129, '2013-09-29', 'Dennis Cranford', '34-CR-20130929170351', 2, '2014-06-03', 'Approved', 198966009);
INSERT INTO complaints VALUES (130, '2016-08-17', 'Beth Claffey', '19-CR-20160817100207', 3, '2016-11-10', 'Approved', 306753971);
INSERT INTO complaints VALUES (131, '2016-04-27', 'Beth Claffey', '19-CR-20160427114103', 1, '2016-11-10', 'Approved', 306753971);
INSERT INTO complaints VALUES (132, '2013-01-22', 'Beth Claffey', '19-CR-20130122132354', 3, '2013-02-25', 'Approved', 306753971);
INSERT INTO complaints VALUES (133, '2015-11-13', 'Chris Clancy', '26-CR-20151113151927', 3, '2015-02-02', 'Approved', 435673955);
INSERT INTO complaints VALUES (134, '2016-01-25', 'Cheryl Diener', '34-CR-20160125103055', 3, '2016-03-21', 'Approved', 198767890);
INSERT INTO complaints VALUES (135, '2012-09-18', 'Jules Montooth', '34-CR-20120918120417', 3, '2012-12-16', 'Approved', 198767890);
INSERT INTO complaints VALUES (136, '2009-10-31', 'Jason Barlog', '34-CR-20091031082227', 2, '2010-01-17', 'Approved', 198767890);
INSERT INTO complaints VALUES (137, '2005-04-24', 'Jason Barlog', '34-CR-20050424152601', 3, '2005-06-24', 'Approved', 198767890);
INSERT INTO complaints VALUES (138, '2015-02-10', 'Cheryl Diener', '34-CR-20150210111339', 3, '2015-05-02', 'Approved', 191152735);
INSERT INTO complaints VALUES (139, '2014-08-17', 'Cheryl Diener', '34-CR-20140817092727', 3, '2014-10-30', 'Approved', 191152735);
INSERT INTO complaints VALUES (140, '2009-10-20', 'Jason Barlog', '34-CR-20091020132546', 3, '2010-01-06', 'Approved', 191152735);
INSERT INTO complaints VALUES (141, '2008-05-08', 'Jason Barlog', '34-CR-20080513114029', 2, '2008-09-19', 'Approved', 191152735);
INSERT INTO complaints VALUES (142, '2017-01-15', 'Ruben Pounds', '19-CR-20170115125543', 3, '2017-04-15', 'Approved', 306077545);
INSERT INTO complaints VALUES (143, '2010-07-05', 'Ruben Pounds', '19-CR-20100705091427', 3, '2010-10-11', 'Approved', 306077545);
INSERT INTO complaints VALUES (144, '2008-12-15', 'Patricia Temple', '19-CR-20081215132452', 1, '2009-05-21', 'Approved', 306077545);
INSERT INTO complaints VALUES (145, '2017-05-03', 'Chris Clancy', '26-CR-20170503141136', 2, NULL, 'Pending', 415600072);
INSERT INTO complaints VALUES (146, '2017-05-23', 'Louis Stiffler', '26-CR-20171523142416', 3, NULL, 'Pending', 385246017);
INSERT INTO complaints VALUES (147, '2017-02-09', 'Louis Stiffler', '26-CR-20170209101357', 3, '2017-04-27', 'Approval', 385246017);
INSERT INTO complaints VALUES (148, '2016-03-28', 'Dennis Cranford', '34-CR-20160328115406', 3, '2016-05-31', 'Approved', 198543276);
INSERT INTO complaints VALUES (149, '2017-04-12', 'Ruben Pounds', '19-CR-20170412153709', 2, '2017-08-10', 'Approved', 306008850);
INSERT INTO complaints VALUES (150, '2014-04-20', 'Ruben Pounds', '19-CR-20140420105417', 3, '2014-07-01', 'Approved', 306008850);
INSERT INTO complaints VALUES (151, '2016-11-10', 'Chris Clancy', '26-CR-20161110170238', 3, '2016-02-08', 'Approved', 411888643);
INSERT INTO complaints VALUES (152, '2014-06-06', 'Alice Waller', '26-CR-20140606081749', 3, '2014-08-30', 'Approved', 411888643);
INSERT INTO complaints VALUES (153, '2014-03-08', 'Daisy Rosario', '26-CR-20140308150719', 1, '2015-01-16', 'Approved', 430707079);
INSERT INTO complaints VALUES (154, '2009-06-13', 'Hector Moralez', '26-CR-20090613094720', 3, '2009-09-08', 'Approved', 430707079);
INSERT INTO complaints VALUES (155, '1997-07-24', 'Chanelle Gowan', '26-CR-19970724143824', 1, '1998-06-03', 'Approved', 430707079);
INSERT INTO complaints VALUES (156, '1994-09-21', 'Chanelle Gowan', '26-CR-19940921132253', 3, '1994-12-15', 'Approved', 430707079);
INSERT INTO complaints VALUES (157, '2015-04-29', 'Chris Clancy', '26-CR-20150429143948', 3, '2015-07-02', 'Approved', 385670904);
INSERT INTO complaints VALUES (158, '2016-10-03', 'Cheryl Diener', '34-CR-20161003145019', 3, '2017-01-19', 'Approved', 198798943);
INSERT INTO complaints VALUES (159, '2014-03-17', 'Cheryl Diener', '34-CR-20140317082452', 2, '2014-07-25', 'Approved', 198798943);
INSERT INTO complaints VALUES (160, '2016-02-22', 'Wilma Aguillon', '26-CR-20160222101032', 3, '2016-04-15', 'Approved', 411232134);
INSERT INTO complaints VALUES (161, '2014-11-29', 'Wilma Aguillon', '26-CR-20141129092748', 3, '2014-03-01', 'Approved', 411232134);
INSERT INTO complaints VALUES (162, '2014-06-21', 'Wilma Aguillon', '26-CR-20140621134208', 3, '2014-09-05', 'Approved', 411232134);
INSERT INTO complaints VALUES (163, '2015-08-09', 'Ruben Pounds', '19-CR-20150809102528', 1, '2016-01-25', 'Approved', 309872356);
INSERT INTO complaints VALUES (164, '2011-05-27', 'Ruben Pounds', '19-CR-20110527085407', 3, '2011-08-20', 'Approved', 309872356);
INSERT INTO complaints VALUES (165, '2009-12-04', 'Patricia Temple', '19-CR-20091204090931', 3, '2009-03-03', 'Approved', 309872356);
INSERT INTO complaints VALUES (166, '2015-02-11', 'Jeremy Raiford', '26-CR-20150211101917', 3, '2015-05-10', 'Approved', 385512341);
INSERT INTO complaints VALUES (167, '2013-08-16', 'Jeremy Raiford', '26-CR-20130816081604', 3, '2013-11-04', 'Approved', 385512341);
INSERT INTO complaints VALUES (168, '2011-04-27', 'Alex Mumford', '26-CR-20110427170344', 3, '2011-07-17', 'Approved', 385512341);
INSERT INTO complaints VALUES (169, '2011-01-21', 'Alex Mumford', '26-CR-20110121162159', 3, '2011-03-16', 'Approved', 385512341);
INSERT INTO complaints VALUES (170, '2016-02-21', 'Louis Stiffler', '26-CR-20160221131732', 3, '2016-05-16', 'Approved', 385246687);
INSERT INTO complaints VALUES (171, '2014-09-18', 'Louis Stiffler', '26-CR-20140918154810', 2, '2015-04-23', 'Approved', 385246687);
INSERT INTO complaints VALUES (172, '2016-10-02', 'Dennis Cranford', '34-CR-20161002112931', 1, NULL, 'Pending', 197499562);
INSERT INTO complaints VALUES (173, '2015-11-13', 'Chris Clancy', '26-CR-20151113152103', 3, '2016-02-04', 'Approved', 411400060);

--
-- Name: complaints complaints_pkey; Type: CONSTRAINT; Schema: public; Owner: pguser
--

ALTER TABLE ONLY complaints
    ADD CONSTRAINT complaints_pkey PRIMARY KEY (id);


--
-- Name: index_complaints_on_facility_id; Type: INDEX; Schema: public; Owner: pguser
--

CREATE INDEX index_complaints_on_facility_id ON complaints USING btree (facility_id);


--
-- PostgreSQL database dump complete
--

