# frozen_string_literal: true

ActiveRecord::ModelSchema::ClassMethods.module_eval do
  def table_exists?
    return false unless ActiveRecord::Base.connected?

    connection.schema_cache.data_source_exists?(table_name)
  end
end
