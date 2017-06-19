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

--
-- Name: cals_cvl; Type: TABLE; Schema: public; Owner: pguser
--

CREATE TABLE cals_cvl (
    key character varying(10) NOT NULL,
    code character varying(32) NOT NULL,
    value character varying(255),
    type character varying(255)
);


ALTER TABLE cals_cvl OWNER TO pguser;

--
-- Data for Name: cals_cvl; Type: TABLE DATA; Schema: public; Owner: pguser
--

INSERT INTO cals_cvl VALUES ('DO', '2', 'BAY AREA-CC OAKLAND', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '3', 'RIVER CITY (SACTO)CC', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '4', 'FRESNO-CC', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '5', 'PENINSULA CHILD CARE', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '6', 'ORANGE CO CHILD CARE', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '7', 'SAN JOSE-DAY CARE', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '8', 'SO. CAL SC/RES', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '1', 'REDWOOD EMPIRE CC', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '13', 'CHICO-DAY CARE', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '14', 'CENTRAL COAST SC/RES', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '15', 'GREATER B.AREA ADULT', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '17', 'CENTRAL COAST-CHILD', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('CO', '2', 'Alpine', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '3', 'Amador', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '4', 'Butte', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '5', 'Calaveras', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '6', 'Colusa', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '7', 'Contra Costa', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '8', 'Del Norte', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '1', 'Alameda', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '10', 'Fresno', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '11', 'Glenn', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '12', 'Humboldt', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '13', 'Imperial', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '14', 'Inyo', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '15', 'Kern', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '16', 'Kings', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '17', 'Lake', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '18', 'Lassen', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '19', 'Los Angeles', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '20', 'Madera', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '21', 'Marin', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '22', 'Mariposa', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '23', 'Mendocino', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '24', 'Merced', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '25', 'Modoc', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '26', 'Mono', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '28', 'Napa', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('FS', '2', 'Pending', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '3', 'Licensed', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '4', 'Provisional License', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '5', 'Probationary License', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '6', 'Licensed/Pending Increase', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '7', 'Application Withdrawn', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '8', 'Application Denied', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '1', 'Unlicensed', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '10', 'Closed, Agency Initiated', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '11', 'Closed, Unlicensed Facility', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '12', 'Certified (CFH & OSGH)', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '13', 'Closed Non-payment', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '14', 'Closed, Change of Ownership', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '15', 'Closed, Change of Location', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '16', 'Closed, Decertified (CFH)', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '20', 'Incomplete Application', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FS', '21', 'Inactive', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('FT', '300', 'Home Care Organization', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '400', 'Adoption Agency', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '403', 'FFA-Resource Family Home', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '430', 'Foster Family Agency', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '431', 'Foster Family Agency Sub-office', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '433', 'FFA-Certified Home', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '710', 'Small Family Home', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '711', 'Foster Family Home (Confidential - Do not release)', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '720', 'Crisis Nursery', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '721', 'Temporary Shelter Care Facility', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('LVR', '1', 'Pre-Licensing', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '2', 'Post Licensing', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '3', 'RCFE-Midyear (Not being used)', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '5', 'not being used', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '4', 'CCC Annaul (All Fac.''s)', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '6', 'Collateral', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '7', 'Renewal (Fac.''s w/Expir.)', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '8', 'Complaint', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('LVR', '9', 'Plan of Correction', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('DO', '20', 'MISSION VALLEY', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '22', 'SO. REGION AC/RES.', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '24', 'SIERRA CASCADE AC', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '25', 'CHICO - RESIDENTIAL', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '28', 'LA TRI-COUNTY AC/RES', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '29', 'CENTRAL COAST-RES.', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '31', 'GREATER LA AREA SC', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '39', 'LA REGION DO', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '42', 'SENIOR CARE PROGRAM', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '43', 'CHILD CARE SOUTH', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '46', 'ADULT CARE PROGRAM', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '55', 'CERTIFICATION UNIT', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '60', 'COB-AUDIT SECTION', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '95', 'FFA CERTIFIED HOMES', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '96', 'LIS - TRAINING', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '99', 'SACRAMENTO', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '9', 'INLAND EMPIRE CHILD', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('CO', '27', 'Monterey', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '29', 'Nevada', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '30', 'Orange', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '31', 'Placer', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '32', 'Plumas', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '33', 'Riverside', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '34', 'Sacramento', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '35', 'San Benito', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '36', 'San Bernardino', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '37', 'San Diego', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('DO', '32', 'MONTEREY PARK', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '34', 'CULVER CITY', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('CO', '38', 'San Francisco', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '39', 'San Joaquin', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '40', 'San Luis Obispo', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '41', 'San Mateo', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '42', 'Santa Barbara', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '43', 'Santa Clara', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '44', 'Santa Cruz', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '45', 'Shasta', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '46', 'Sierra', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '47', 'Siskiyou', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '48', 'Solano', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '49', 'Sonoma', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '50', 'Stanislaus', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '51', 'Sutter', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '52', 'Tehama', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '53', 'Trinity', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '54', 'Tulare', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '55', 'Tuolumne', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '56', 'Ventura', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '57', 'Yolo', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '58', 'Yuba', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('CO', '60', 'Out of State', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('FT', '722', 'Transitional Shelter Care', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '726', 'Transitional Housing Placement', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '728', 'Community Treatment Facility', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '730', 'Group Home', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '731', 'Out of State Group Home', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '732', 'Runaway and Homeless Youth Shelter - GH', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '733', 'Short Term Res Therapeutic Program', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '734', 'Adult Res Special Health Care', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '735', 'Adult Residential', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '736', 'Residential Facility Chronically Ill', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '729', 'GH - Enhanced Behavioral Supports Home', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '737', 'ARF - Enhanced Behavioral Supports Home', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '738', 'Community Crisis Home - ARF', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '740', 'Residential Care/Elderly', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '741', 'RCFE-Continuing Care', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '771', 'Rehab Facility', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '772', 'Social Rehabilitation Facility', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '775', 'Adult Day Care', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '810', 'Family Day Care Home (Capacity 1-8 Confidential - Do not release)', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '830', 'Infant Center', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '840', 'School-age Day Care Center', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '845', 'Day Care Center/Ill Child', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('FT', '850', 'Day Care Center', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('DO', '21', 'NO. CAL SC/RES', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '23', 'NO. CAL CR/RES.', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '30', 'L.A. DAYCARE-NO.WEST', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '33', 'L.A. DAY CARE-EAST', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '41', 'OUT OF STATE GH CERT', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '44', 'CHILDREN''S RES PROG', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '50', 'CENTRAL OPERATIONS', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '75', 'CENTRAL FINGERPRINT', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '98', 'CCLD APP SUPP. DESK', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('CO', '9', 'El Dorado', 'CodeMapping::County');
INSERT INTO cals_cvl VALUES ('FS', '9', 'Closed, License Initiated', 'CodeMapping::FacilityStatus');
INSERT INTO cals_cvl VALUES ('LVR', '10', 'Caseload Management', 'CodeMapping::LastVisitReason');
INSERT INTO cals_cvl VALUES ('AW', 'R801', 'Alexis Hollon', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'P708', 'Steve Schmitz', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'T407', 'Lauren Schaub', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'R802', 'Denise Tugade', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'W801', 'Kim Tarabetz', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'G412', 'Zach Ulhaq', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'U803', 'Venkata Nuli', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'J701', 'Henk Keukenkamp', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'SRDO', 'Rich Cefola', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', '7707', 'Suzanne Vitale', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', '1204', 'Maggie Smith', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'R120', 'Kari Gutierrez', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'X707', 'William Spangler', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', '0903', 'Maureen Lyon', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', '1231', 'Diane Hussey', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'P906', 'Lynda Smyth', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', '7702', 'Blake Jeter', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'TRAN', 'Gayle Lowery', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A001', 'Beth Claffey', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('DO', '19', 'RIVERSIDE', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('DO', '26', 'SAN JOSE', 'CodeMapping::DistrictOffice');
INSERT INTO cals_cvl VALUES ('AW', 'A007', 'Victor Beason', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A002', 'Jeremy Raiford', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A003', 'Louis Stiffler', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A004', 'Chris Clancy', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A005', 'Wilma Aguillon', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A006', 'Ruben Pounds', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A008', 'Rebecca Bayliss', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A009', 'Cheryl Diener', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A010', 'Dennis Cranford', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A011', 'Daisy Rosario', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('AW', 'A012', 'Kurk Lemire', 'CodeMapping::AssignedWorker');
INSERT INTO cals_cvl VALUES ('FT', '724', 'Transitional Care Facility for Children', 'CodeMapping::FacilityType');
INSERT INTO cals_cvl VALUES ('AW', 'O101', 'Linda Harrison', 'CodeMapping::AssignedWorker');


--
-- Name: cals_cvl cals_cvl_pkey; Type: CONSTRAINT; Schema: public; Owner: pguser
--

ALTER TABLE ONLY cals_cvl
    ADD CONSTRAINT cals_cvl_pkey PRIMARY KEY (key, code);


--
-- PostgreSQL database dump complete
--

