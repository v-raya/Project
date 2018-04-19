class Rfa::AdoptionHistory < CalsBase
  include Concerns::Rfa::AdoptionHistoryApiProtocolProvider
attr_accessor :id, :foster_care_licenses_q1, :applications_for_adoption_q2,
:facility_operation_licenses_q3, :employment_in_facilities_q4, :denial_history_q5,
:suspension_revocation_history_q6, :was_subject_for_exclusion_order_q7

# {
#   'foster_care_licenses_q1': {
#     'was_previously_licensed': '',
#     'agencies': [
#       {
#         name: '',
#         type: {}
#       }
#     ]
#   },
#   'applications_for_adoption_q2': {
#     'have_applied_for_adoption': '',
#     'facilities': ['']
#   },
#   'facility_operation_licenses_q3': {
#     'was_previously_licensed': '',
#     'agencies': [
#       {
#         name: '',
#         type: {}
#       }
#     ]
#   },
#   'employment_in_facilities_q4': {
#     'was_employed_or_volunteered': '',
#     'facilities': ['']
#   },
#   'denial_history_q5': {
#     'had_denials': '',
#     'agencies': [
#       {
#         name: '',
#         type: {}
#       }
#     ]
#   },
#   'suspension_revocation_history_q6': {
#     'had_suspensions_revocations': '',
#     'agencies': [
#       {
#         name: '',
#         type: {}
#       }
#     ]
#   },
#   'was_subject_for_exclusion_order_q7': false
# }
#
# )

end
