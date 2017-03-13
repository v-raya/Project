CREATE TABLE Facility_Info_LIS(
	FAC_ACTION_CODE Varchar(254) NULL,
	FAC_AGG_STATUS Varchar(254) NULL,
	FAC_AMB_18_64_NBR Integer,
	FAC_AMB_1_17_NBR Integer,
	FAC_AMB_65_PLUS_NBR Integer,
	FAC_ANNUAL_10_MO_DEFER_DATE date,
	FAC_ANNUAL_10_MO_VISIT_APPR Varchar(254) NULL,
	FAC_ANNUAL_10_MO_VISIT_DATE date,
	FAC_ANNUAL_22_MO_DEFER_DATE date,
	FAC_ANNUAL_22_MO_VISIT_APPR Varchar(254) NULL,
	FAC_ANNUAL_22_MO_VISIT_DATE date,
	FAC_ANNUAL_VISIT_YEAR Integer,
	FAC_BILLING_DATE date,
	FAC_CAPACITY Integer,
	FAC_CFRS_ID_NBR Integer,
	FAC_CLIENT_SERVED_APPR_DATE date,
	FAC_CLOSED_DATE date,
	FAC_COMPLAINT Varchar(254) NULL,
	FAC_CO_NBR Integer,
	FAC_Cap_Inc_Closed_Date date,
	FAC_Cap_Inc_Rec_Date date,
	FAC_Client_Served Integer,
	FAC_Closed_Process_Date date,
	FAC_DEFICIENCY Varchar(254) NULL,
	FAC_DO_EVAL_CODE Varchar(254) NULL,
	FAC_DO_NBR Integer,
	FAC_DUAL_ID Varchar(254) NULL,
	FAC_DUAL_NUMBER Varchar(254) NULL,
	FAC_EMAIL_ADDRESS Varchar(254) NULL,
	FAC_FCRB_PROGRAM Varchar(254) NULL,
	FAC_FM_REGION_NBR Integer,
	FAC_GH_INDICATOR Varchar(254) NULL,
	FAC_Inc_Cap_Eff_Date date,
	FAC_LAST_DEFER_VISIT_DATE date,
	FAC_LAST_DEFER_VISIT_REASON Integer,
	FAC_LAST_VISIT_DATE date,
	FAC_LAST_VISIT_REASON Integer,
	FAC_LEGAL_ACTION_INDICATOR Varchar(254) NULL,
	FAC_LICENSEE_NAME Varchar(254) NULL,
	FAC_LIC_Comments Varchar(254) NULL,
	FAC_LIC_Comments_2 Varchar(254) NULL,
	FAC_LIC_Eff_Date date,
	FAC_LIC_Expir_Date date,
	FAC_LIC_First_Date date,
	FAC_LIC_Mail_City Varchar(254) NULL,
	FAC_LIC_Mail_State Varchar(254) NULL,
	FAC_LIC_Mail_Street_Addr Varchar(254) NULL,
	FAC_LIC_Mail_Zip_Code Varchar(254) NULL,
	FAC_Last_Change_Date date,
	FAC_Last_FireClear_Date date,
	FAC_Last_Upd_Date date,
	FAC_Licensee_Type Varchar(254) NULL,
	FAC_Mail_City Varchar(254) NULL,
	FAC_Mail_State Varchar(254) NULL,
	FAC_Mail_Street_Addr Varchar(254) NULL,
	FAC_Mail_Zip_Code Varchar(254) NULL,
	FAC_NAME Varchar(254) NULL,
	FAC_NBR Integer,
	FAC_NBR_NEW Integer,
	FAC_NONAMB_18_64_NBR Integer,
	FAC_NONAMB_1_17_NBR Integer,
	FAC_NONAMB_65_PLUS_NBR Integer,
	FAC_ORIG_APPL_REC_DATE date,
	FAC_POST_LIC_DEFER_DATE date,
	FAC_POST_LIC_VISIT_APPR Varchar(254) NULL,
	FAC_POST_LIC_VISIT_DATE date,
	FAC_PRE_LIC_VISIT_DATE date,
	FAC_PRIMARY_NBR Integer,
	FAC_REGION_CO Varchar(254) NULL,
	FAC_REGION_DO Varchar(254) NULL,
	FAC_REGION_NBR Integer,
	FAC_RENEWAL_DEFER_DATE date,
	FAC_RENEWAL_VISIT_APPR Varchar(254) NULL,
	FAC_RENEWAL_VISIT_DATE date,
	FAC_REQUIRED_VISIT Varchar(254) NULL,
	FAC_RES_CITY Varchar(254) NULL,
	FAC_RES_STATE Varchar(254) NULL,
	FAC_RES_STREET_ADDR Varchar(254) NULL,
	FAC_RES_ZIP_CODE Varchar(254) NULL,
	FAC_STATUS Integer,
	FAC_TYPE Integer,
	FAC_Unlic_Orig_Input_Date date,
	FN_Amb Varchar(254) NULL,
	FN_Comment Varchar(254) NULL,
	FN_Legal Varchar(254) NULL,
	FN_Licensing Varchar(254) NULL,
	FN_Mailing Varchar(254) NULL,
	FN_Visit Varchar(254) NULL,
	FNam_Amb Varchar(254) NULL,
	FNam_Comment Varchar(254) NULL,
	FNam_Legal Varchar(254) NULL,
	FNam_Licensing Varchar(254) NULL,
	FNam_Mailing Varchar(254) NULL,
	FNam_Visit Varchar(254) NULL,
	Facility_Admin Varchar(254) NULL,
	Facility_Telephone Varchar(254) NULL,
	NoExport Varchar(254) NULL
);

ALTER TABLE Appeal_Rights_Cont 
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time);
    
ALTER TABLE AttemptedVisitLog 
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Visit_Date TYPE date USING(Visit_Date::date),
    ALTER Visit_Time TYPE time USING(Visit_Time::time),
    ALTER Time_Created TYPE time USING(time_created::time);

ALTER TABLE BlankLetterCont_Page_2 
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
 	ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE BlankLetterCont_Page_3 
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Amend_Flag TYPE integer,
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer;
 
ALTER TABLE BlankLetterCont_Page_4
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Amend_Flag TYPE integer,
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE BlankLetterCont_Page_5
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Amend_Flag TYPE integer,
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer;

ALTER TABLE Cleared_POC_Letter_Cont
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Letter_Date TYPE date USING(Letter_Date::date),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Amend_Flag TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer,
    ALTER cpoc_POC_ClearCnt TYPE integer,
    ALTER cpoc_POC_Count TYPE integer;

ALTER TABLE Cleared_POC_Letter_Cont
    ADD COLUMN Amend_Printed Varchar(254) NULL,
    ADD COLUMN Report_Title  Varchar(254) NULL,
    ADD COLUMN ReportName Varchar(254) NULL; 
    
ALTER TABLE Complaint_Summary_CFH
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Amend_Flag TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE Complaint_TypeA_Violation_Log_LIC9216_
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Amend_Flag TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE Confidential_Names_Cont
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER cn_BirthDate TYPE date USING(cn_BirthDate::date),
	ALTER cn_BirthDate_1 TYPE date USING(cn_BirthDate_1::date),
	ALTER cn_BirthDate_2 TYPE date USING(cn_BirthDate_2::date),
	ALTER cn_BirthDate_3 TYPE date USING(cn_BirthDate_3::date),
	ALTER cn_BirthDate_4 TYPE date USING(cn_BirthDate_4::date),
	ALTER cn_BirthDate_5 TYPE date USING(cn_BirthDate_5::date),
	ALTER cn_BirthDate_6 TYPE date USING(cn_BirthDate_6::date),
	ALTER cn_BirthDate_7 TYPE date USING(cn_BirthDate_7::date),
    ALTER cnc_License_Date TYPE date USING(cnc_License_Date::date),
	ALTER cnc_Report_Date TYPE date USING(cnc_Report_Date::date),
	ALTER cnc_Visit_Date TYPE date USING(cnc_Visit_Date::date),
    ALTER Amend_Flag TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer,
    ADD COLUMN Amend_Printed Varchar(254) NULL;
    
ALTER TABLE JointVisitLog
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Time_Created TYPE time USING(Time_Created::time),
	ALTER Visit_Date TYPE date USING(Visit_Date::date),
	ALTER Visit_Time TYPE time USING(Visit_Time::time),
	ALTER Visit_Time_E TYPE time USING(Visit_Time_E::time);
    
ALTER TABLE KeyWrd
    RENAME COLUMN Key_Word_Catery TO Key_Word_Category;
    
ALTER TABLE LPA_Information
    ALTER Dt_Created TYPE date USING(Dt_Created::date),
    ALTER Dt_Edited TYPE date USING(Dt_Edited::date);

ALTER TABLE Noncompliance_Page_1_LIC9111_
	ALTER Conference_Date TYPE date USING(Conference_Date::date),
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Amend_Flag TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Last_Form_Created TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE Noncompliance_Page_2
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Times_Amended TYPE integer,
    ADD COLUMN Amend_Printed Varchar(254) NULL,
    ADD COLUMN Proof Varchar(254) NULL;
    
ALTER TABLE Noncompliance_Page_4
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Times_Amended TYPE integer,
    ADD COLUMN Amend_Printed Varchar(254) NULL,
    ADD COLUMN Proof Varchar(254) NULL; 

ALTER TABLE Notice_of_Site_Visit_LIC9213_
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(time_created::time),
    ALTER Times_Amended TYPE integer,
    ALTER Visit_Date TYPE date USING(Visit_Date::date);
    
ALTER TABLE R809N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_ANNUAL_10_MO_VISIT_DATE TYPE date USING(FAC_ANNUAL_10_MO_VISIT_DATE::date),
    ALTER FAC_LAST_VISIT_DATE TYPE date USING(FAS_Last_Req_Visit_Date::date),
    ALTER FAC_LIC_Eff_Date TYPE date USING(FAC_LIC_Eff_Date::date),
    ALTER FAC_LIC_FIRST_DATE TYPE date USING(FAC_LIC_FIRST_DATE::date),
    ALTER FAC_POST_LIC_VISIT_DATE TYPE date USING(FAC_POST_LIC_VISIT_DATE::date),
    ALTER FAS_Last_Req_Visit_Date TYPE date USING(FAS_Last_Req_Visit_Date::date),
    ALTER Publish_Date TYPE date USING(Publish_Date::date),
    ALTER Publish_Req_Date TYPE date USING(Publish_Req_Date::date),
    ALTER Visit_DueBy_Date TYPE date USING(Visit_DueBy_Date::date);
    
ALTER TABLE R809N
    RENAME COLUMN FAS_5Year_Vst_Due TO FAS_Anl_Req_Vst_Due;

ALTER TABLE R812N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Type TYPE integer,
    ALTER Time_Completed TYPE time USING(Time_Completed::time),
    ALTER Time_Visit_Began TYPE time USING(Time_Visit_Began::time),
    ALTER dsi_Visit_Date TYPE date USING(dsi_Visit_Date::date),
    ALTER visit_date TYPE date USING(visit_date::date);
 
 ALTER TABLE R9102N
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER an_Visit_Date TYPE date USING(an_Visit_Date::date);
 
ALTER TABLE RBlankLtr
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Letter_Date TYPE date USING(Letter_Date::date),
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;
 
ALTER TABLE RBlankLtrN1
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Last_Form_Created TYPE integer,
    ALTER Letter_Date TYPE date USING(Letter_Date::date),
    ALTER Letter_Date_History TYPE date USING(Letter_Date_History::date),
    ALTER Link_Count TYPE integer,
    ALTER Next_Page TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE RBlankLtrN2
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Last_Form_Created TYPE integer,
    ALTER Letter_Date TYPE date USING(Letter_Date::date),
    ALTER Letter_Date_History TYPE date USING(Letter_Date_History::date),
    ALTER Link_Count TYPE integer,
    ALTER Next_Page TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE RequiredVisitUpdate
    ALTER Change_Date TYPE timestamp USING(Change_Date::timestamp),
    ALTER FAC_ANNUAL_VISIT_YEAR TYPE integer,
    ALTER Facility_Number TYPE integer;

ALTER TABLE RR195AN1v06_10
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_1 TYPE date USING(Date_1::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;

ALTER TABLE RR195ANv08_11
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_1 TYPE date USING(Date_1::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE RR195AN1v08_11
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_1 TYPE date USING(Date_1::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE RR421
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER cpal_DateAssessed TYPE date USING(cpal_DateAssessed::date),
    ALTER fer_AssessDate TYPE date USING(fer_AssessDate::date),
    ALTER fer_FromDate TYPE date USING(fer_FromDate::date),
    ALTER fer_ReportDate_1 TYPE date USING(fer_ReportDate_1::date),
    ALTER fer_ToDate TYPE date USING(fer_ToDate::date);
    
ALTER TABLE RR421B
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER cpaul_DateAssessed TYPE date USING(cpaul_DateAssessed::date);
    
ALTER TABLE RR809CN
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER fercc_Visit_Date TYPE date USING(fercc_Visit_Date::date);
    
ALTER TABLE RR809N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Publish_Date TYPE date USING(Publish_Date::date),
    ALTER Publish_Req_Date TYPE date USING(Publish_Req_Date::date);
    
ALTER TABLE RR811
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER cn_BirthDate TYPE date USING(cn_BirthDate::date),
    ALTER cn_BirthDate_1 TYPE date USING(cn_BirthDate_1::date),
    ALTER cn_BirthDate_2 TYPE date USING(cn_BirthDate_2::date),
    ALTER cn_BirthDate_3 TYPE date USING(cn_BirthDate_3::date),
    ALTER cn_BirthDate_4 TYPE date USING(cn_BirthDate_4::date),
    ALTER cn_BirthDate_5 TYPE date USING(cn_BirthDate_5::date),
    ALTER cn_BirthDate_6 TYPE date USING(cn_BirthDate_6::date),
    ALTER cn_BirthDate_7 TYPE date USING(cn_BirthDate_7::date),
    ALTER cn_License_Date TYPE date USING(cn_License_Date::date),
    ALTER cn_Report_Date TYPE date USING(cn_Report_Date::date),
    ALTER cn_Visit_Date TYPE date USING(cn_Visit_Date::date);
    
ALTER TABLE RR812CN
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Completed TYPE time USING(Time_Completed::time),
    ALTER Time_Visit_Began TYPE time USING(Time_Visit_Began::time),
    ALTER dsic_Visit_Date TYPE date USING(dsic_Visit_Date::date);
    
ALTER TABLE RR812N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Type TYPE integer,
    ALTER Time_Completed TYPE time USING(Time_Completed::time),
    ALTER Time_Visit_Began TYPE time USING(Time_Visit_Began::time),
    ALTER dsi_Visit_Date TYPE date USING(dsi_Visit_Date::date);
    
 ALTER TABLE RR857CN1
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Birth_0 TYPE date USING(Date_Birth_0::date),
    ALTER Date_Birth_1 TYPE date USING(Date_Birth_1::date),
    ALTER Date_Birth_2 TYPE date USING(Date_Birth_2::date),
    ALTER Date_of_Birth_3 TYPE date USING(Date_of_Birth_3::date),
    ALTER Date_Birth_4 TYPE date USING(Date_Birth_4::date),
    ALTER Date_Birth_5 TYPE date USING(Date_Birth_5::date),
    ALTER Date_Enrolled_0 TYPE date USING(Date_Enrolled_0::date),
    ALTER Date_Enrolled_1 TYPE date USING(Date_Enrolled_1::date),
    ALTER Date_Enrolled_2 TYPE date USING(Date_Enrolled_2::date),
    ALTER Date_Enrolled_3 TYPE date USING(Date_Enrolled_3::date),
    ALTER Date_Enrolled_4 TYPE date USING(Date_Enrolled_4::date),
    ALTER Date_Enrolled_5 TYPE date USING(Date_Enrolled_5::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Page_Nr TYPE integer,
    ALTER Page_Total TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER Visit_Date TYPE date USING(Visit_Date::date),
    ADD COLUMN Date1 date,
    ADD COLUMN LPA_Signature Varchar(254) NULL; 
    
 ALTER TABLE RR857N1
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Birth_0 TYPE date USING(Date_Birth_0::date),
    ALTER Date_Birth_1 TYPE date USING(Date_Birth_1::date),
    ALTER Date_Birth_2 TYPE date USING(Date_Birth_2::date),
    ALTER Date_of_Birth_3 TYPE date USING(Date_of_Birth_3::date),
    ALTER Date_Birth_4 TYPE date USING(Date_Birth_4::date),
    ALTER Date_Birth_5 TYPE date USING(Date_Birth_5::date),
    ALTER Date_Enrolled_0 TYPE date USING(Date_Enrolled_0::date),
    ALTER Date_Enrolled_1 TYPE date USING(Date_Enrolled_1::date),
    ALTER Date_Enrolled_2 TYPE date USING(Date_Enrolled_2::date),
    ALTER Date_Enrolled_3 TYPE date USING(Date_Enrolled_3::date),
    ALTER Date_Enrolled_4 TYPE date USING(Date_Enrolled_4::date),
    ALTER Date_Enrolled_5 TYPE date USING(Date_Enrolled_5::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Page_Nr TYPE integer,
    ALTER Page_Total TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER Visit_Date TYPE date USING(Visit_Date::date);
    
 ALTER TABLE RR858CN1
	ALTER Amend_Flag TYPE integer,
    ALTER CRI_Date_0 TYPE date USING(CRI_Date_0::date),
    ALTER CRI_Date_1 TYPE date USING(CRI_Date_1::date),
    ALTER CRI_Date_2 TYPE date USING(CRI_Date_2::date),
    ALTER CRI_Date_3 TYPE date USING(CRI_Date_3::date),
    ALTER CRI_Date_4 TYPE date USING(CRI_Date_4::date),
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Admit_0 TYPE date USING(Date_Admit_0::date),
    ALTER Date_Admit_1 TYPE date USING(Date_Admit_1::date),
    ALTER Date_Admit_2 TYPE date USING(Date_Admit_2::date),
    ALTER Date_Admit_3 TYPE date USING(Date_Admit_3::date),
    ALTER Date_Admit_4 TYPE date USING(Date_Admit_4::date),
    ALTER Date_Birth_0 TYPE date USING(Date_Birth_0::date),
    ALTER Date_Birth_1 TYPE date USING(Date_Birth_1::date),
    ALTER Date_Birth_2 TYPE date USING(Date_Birth_2::date),
    ALTER Date_Birth_3 TYPE date USING(Date_Birth_3::date),
    ALTER Date_Birth_4 TYPE date USING(Date_Birth_4::date),
    ALTER Dis_Date_0 TYPE date USING(Dis_Date_0::date),
    ALTER Dis_Date_1 TYPE date USING(Dis_Date_1::date),
    ALTER Dis_Date_2 TYPE date USING(Dis_Date_2::date),
    ALTER Dis_Date_3 TYPE date USING(Dis_Date_3::date),
    ALTER Dis_Date_4 TYPE date USING(Dis_Date_4::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Page_Nr TYPE integer,
    ALTER Page_Total TYPE integer,
    ALTER Ref_Nr_0 TYPE integer,
    ALTER Ref_Nr_1 TYPE integer,
    ALTER Ref_Nr_2 TYPE integer,
    ALTER Ref_Nr_3 TYPE integer,
    ALTER Ref_Nr_4 TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER crri_Visit_Date TYPE date USING(crri_Visit_Date::date),
    ALTER Visit_Date TYPE date USING(Visit_Date::date);
    
ALTER TABLE RR858N1
	ALTER Amend_Flag TYPE integer,
    ALTER CRI_Date_0 TYPE date USING(CRI_Date_0::date),
    ALTER CRI_Date_1 TYPE date USING(CRI_Date_1::date),
    ALTER CRI_Date_2 TYPE date USING(CRI_Date_2::date),
    ALTER CRI_Date_3 TYPE date USING(CRI_Date_3::date),
    ALTER CRI_Date_4 TYPE date USING(CRI_Date_4::date),
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Admit_0 TYPE date USING(Date_Admit_0::date),
    ALTER Date_Admit_1 TYPE date USING(Date_Admit_1::date),
    ALTER Date_Admit_2 TYPE date USING(Date_Admit_2::date),
    ALTER Date_Admit_3 TYPE date USING(Date_Admit_3::date),
    ALTER Date_Admit_4 TYPE date USING(Date_Admit_4::date),
    ALTER Date_Birth_0 TYPE date USING(Date_Birth_0::date),
    ALTER Date_Birth_1 TYPE date USING(Date_Birth_1::date),
    ALTER Date_Birth_2 TYPE date USING(Date_Birth_2::date),
    ALTER Date_Birth_3 TYPE date USING(Date_Birth_3::date),
    ALTER Date_Birth_4 TYPE date USING(Date_Birth_4::date),
    ALTER Dis_Date_0 TYPE date USING(Dis_Date_0::date),
    ALTER Dis_Date_1 TYPE date USING(Dis_Date_1::date),
    ALTER Dis_Date_2 TYPE date USING(Dis_Date_2::date),
    ALTER Dis_Date_3 TYPE date USING(Dis_Date_3::date),
    ALTER Dis_Date_4 TYPE date USING(Dis_Date_4::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Page_Nr TYPE integer,
    ALTER Page_Total TYPE integer,
    ALTER Ref_Index TYPE integer,
    ALTER Ref_Nr_0 TYPE integer,
    ALTER Ref_Nr_1 TYPE integer,
    ALTER Ref_Nr_2 TYPE integer,
    ALTER Ref_Nr_3 TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER crri_Visit_Date TYPE date USING(crri_Visit_Date::date),
    ALTER Visit_Date TYPE date USING(Visit_Date::date);
    
ALTER TABLE RR859CN1
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Employed_0 TYPE date USING(Date_Employed_0::date),
    ALTER Date_Employed_1 TYPE date USING(Date_Employed_1::date),
    ALTER Date_Employed_2 TYPE date USING(Date_Employed_2::date),
    ALTER Date_Employed_3 TYPE date USING(Date_Employed_3::date),
    ALTER Date_Employed_4 TYPE date USING(Date_Employed_4::date),
    ALTER Date_Employed_5 TYPE date USING(Date_Employed_5::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Page_Nr TYPE integer,
    ALTER Page_Total TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER Visit_Date TYPE date USING(Visit_Date::date),
    ADD COLUMN Date1 date,
    ADD COLUMN LPA_Signature Varchar(254) NULL;
    
ALTER TABLE RR859N1
	ALTER Amend_Flag TYPE integer,
    ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Employed_0 TYPE date USING(Date_Employed_0::date),
    ALTER Date_Employed_1 TYPE date USING(Date_Employed_1::date),
    ALTER Date_Employed_2 TYPE date USING(Date_Employed_2::date),
    ALTER Date_Employed_3 TYPE date USING(Date_Employed_3::date),
    ALTER Date_Employed_4 TYPE date USING(Date_Employed_4::date),
    ALTER Date_Employed_5 TYPE date USING(Date_Employed_5::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Page_Nr TYPE integer,
    ALTER Page_Total TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER Visit_Date TYPE date USING(Visit_Date::date),
    ADD COLUMN Last_C_UNID Varchar(254) NULL,
    ADD COLUMN Last_Entry Varchar(254) NULL;
 
    
ALTER TABLE RR9099N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Publish_Date TYPE date USING(Publish_Date::date),
    ALTER Publish_Req_Date TYPE date USING(Publish_Req_Date::date),
    ALTER date TYPE date USING(date::date);
  
ALTER TABLE RR9099NA
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Publish_Date TYPE date USING(Publish_Date::date),
    ALTER Publish_Req_Date TYPE date USING(Publish_Req_Date::date),
    ALTER date TYPE date USING(date::date);
    
ALTER TABLE RR9102
	ALTER Amend_Flag TYPE integer,
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER an_Visit_Date TYPE date USING(an_Visit_Date::date);
    
ALTER TABLE RR9216
	ALTER Amend_Flag TYPE integer,
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE RRAplRights
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Created TYPE time USING(Time_Created::time);
    
ALTER TABLE RRBlankC
	ALTER Amend_Flag TYPE integer,
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER FAC_DO_NBR TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Status TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer;
    
ALTER TABLE RRCPOC
	ALTER Amend_Flag TYPE integer,
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Link_Count TYPE integer,
    ALTER POC_DateCleared TYPE date USING(POC_DateCleared::date),
    ALTER POC_DateCleared_1 TYPE date USING(POC_DateCleared_1::date),
    ALTER POC_DateCleared_2 TYPE date USING(POC_DateCleared_2::date),
    ALTER POC_DateCleared_3 TYPE date USING(POC_DateCleared_3::date),
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER Times_Amended TYPE integer,
    ALTER cpoc_POC_ClearCnt TYPE integer,
    ALTER cpoc_POC_Count TYPE integer,
    ALTER cpoc_POC_Date TYPE date USING(cpoc_POC_Date::date),
    ALTER cpoc_POC_Date_1 TYPE date USING(cpoc_POC_Date_1::date),
    ALTER cpoc_POC_Date_2 TYPE date USING(cpoc_POC_Date_2::date),
    ALTER cpoc_POC_Date_3 TYPE date USING(cpoc_POC_Date_3::date),
    ALTER cpoc_Visit_Date TYPE date USING(cpoc_Visit_Date::date);
    
ALTER TABLE RRD809N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp);
    
ALTER TABLE RRD812N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Time_Completed TYPE time USING(Time_Completed::time),
    ALTER Time_Visit_Began TYPE time USING(Time_Visit_Began::time),
    ALTER dsi_Visit_Date TYPE date USING(dsi_Visit_Date::date);
    
ALTER TABLE RRD9099N
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER date TYPE date USING(date::date);
    
ALTER TABLE RRD9099NA
	ALTER Amend_Date TYPE timestamp USING(Amend_Date::timestamp),
    ALTER Amend_Date_1 TYPE timestamp USING(Amend_Date_1::timestamp),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER date TYPE date USING(date::date);
    
ALTER TABLE Statement_of_Facts_Case_Summary
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp);
    
ALTER TABLE Statement_of_Facts_Issues_Interviews
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp);
    
ALTER TABLE Statement_of_Facts_LIC9029A_
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Capacity TYPE integer,
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp),
    ALTER sof_AckLetterDate TYPE date USING(sof_AckLetterDate::date),
    ALTER sof_AppealReceived TYPE date USING(sof_AppealReceived::date),
    ALTER sof_CFFH_Date_Decert TYPE date USING(sof_CFFH_Date_Decert::date),
    ALTER sof_DueDate TYPE date USING(sof_DueDate::date),
    ALTER sof_First_Lic_Date TYPE date USING(sof_First_Lic_Date::date),
    ALTER sof_ImmedExclDateServed TYPE date USING(sof_ImmedExclDateServed::date),
    ALTER sof_RMDate TYPE date USING(sof_RMDate::date);

ALTER TABLE Statement_of_Facts_Page_2
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Proj_Date_Closed TYPE date USING(Proj_Date_Closed::date),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp),
    ALTER sof_PMDate_Signed TYPE time USING(sof_PMDate_Signed::time),
    ALTER sof_RODate_Signed TYPE timestamp USING(sof_RODate_Signed::timestamp);
    
ALTER TABLE Statement_of_Facts_Personnel_Flag_LIC9011B_
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp);
    
ALTER TABLE Statement_of_Facts_Preparation_Checklist
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp);
    
ALTER TABLE Statement_of_Facts_Violation_Log_LIC9216_
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp);
    
ALTER TABLE Statement_of_Facts_Witnesses
	ALTER Create_Date TYPE date USING(Create_Date::date),
    ALTER Date_Signed TYPE timestamp USING(Date_Signed::timestamp),
    ALTER Dt_Created TYPE timestamp USING(Dt_Created::timestamp),
    ALTER Dt_Edited TYPE timestamp USING(Dt_Edited::timestamp),
    ALTER Facility_Number TYPE integer,
    ALTER Facility_Type TYPE integer,
    ALTER Last_Entry TYPE integer,
    ALTER Time_Created TYPE time USING(Time_Created::time),
    ALTER d_Date_Signed TYPE timestamp USING(d_Date_Signed::timestamp),
    ALTER sof_BirthDate_1 TYPE date USING(sof_BirthDate_1::date),
    ALTER sof_BirthDate_2 TYPE date USING(sof_BirthDate_2::date),
    ALTER sof_BirthDate_3 TYPE date USING(sof_BirthDate_3::date),
    ALTER sof_BirthDate_4 TYPE date USING(sof_BirthDate_4::date),
    ALTER sof_BirthDate_5 TYPE date USING(sof_BirthDate_5::date); 
    
