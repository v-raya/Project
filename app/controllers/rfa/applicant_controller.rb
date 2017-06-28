class Rfa::ApplicantController < CalsBaseController

  def create
    json_data = '{ "first_name": "ratnesh",
                  "last_name": "raval",
                  "other_names": [
                    {"first_name": "nesh", "name_type": {
                            "id": 4,
                            "value": "Preferred"}
                    }
                    ]
                  }'


    # rfa_applicant = rfa_applicant_helper.create(json_data)

    rfa_applicant = RFA::Applicant.create(auth_header: session['token'],
                                          parent_id: params[:a01_id],
                                          body: json_data)

    byebug

  end

  def rfa_applicant_helper
    Helpers::RFA::Applicant.new(auth_header: session['token'])
  end
end
