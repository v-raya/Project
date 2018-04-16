class User < CalsBase
  attr_accessor :user, :staffId, :roles, :county_code, :county_name, :privileges

=begin
  def initialize(user, staffId, roles, county_code, county_name, privilege)
     @user = user
     @staffId = staffId
     @roles = roles
     @county_code = county_code
     @county_name = county_name
     @privilege = privilege
  end
=end
end
