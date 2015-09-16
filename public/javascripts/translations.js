var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}"}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"one_page":{"display_entries":{"zero":"No %{entry_name} found","one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}"}},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"}}},"mongoid":{"errors":{"messages":{"blank_in_locale":"can't be blank in %{location}","ambiguous_relationship":{"message":"Ambiguous relations %{candidates} defined on %{klass}.","summary":"When Mongoid attempts to set an inverse document of a relation in memory, it needs to know which relation it belongs to. When setting %{name}, Mongoid looked on the class %{inverse} for a matching relation, but multiples were found that could potentially match: %{candidates}.","resolution":"On the %{name} relation on %{inverse} you must add an :inverse_of option to specify the exact relationship on %{klass} that is the opposite of %{name}."},"callbacks":{"message":"Calling %{method} on %{klass} resulted in a false return from a callback.","summary":"If a before callback returns false when using Document.create!, Document#save!, or Document#update_attributes! this error will get raised since the document did not actually get saved.","resolution":"Double check all before callbacks to make sure they are not unintentionally returning false."},"calling_document_find_with_nil_is_invalid":{"message":"Calling Document.find with nil is invalid.","summary":"Document.find expects the parameters to be 1 or more ids, and will return a single document if 1 id is provided, otherwise an array of documents if multiple ids are provided.","resolution":"Most likely this is caused by passing parameters directly through to the find, and the parameter either is not present or the key from which it is accessed is incorrect."},"document_not_destroyed":{"message":"%{klass} with id %{id} was not destroyed.","summary":"When calling %{klass}#destroy! and a callback halts the destroy callback chain by returning a false value, the deletion will not actually occur.","resolution":"Check the before/after destroy callbacks to ensure that the return values are truthy for the chain to continue."},"document_not_found":{"message":"Document(s) not found for class %{klass} with id(s) %{missing}.","summary":"When calling %{klass}.find with an id or array of ids, each parameter must match a document in the database or this error will be raised. The search was for the id(s): %{searched} (%{total} total) and the following ids were not found: %{missing}.","resolution":"Search for an id that is in the database or set the Mongoid.raise_not_found_error configuration option to false, which will cause a nil to be returned instead of raising this error when searching for a single id, or only the matched documents when searching for multiples."},"document_with_attributes_not_found":{"message":"Document not found for class %{klass} with attributes %{attributes}.","summary":"When calling %{klass}.find_by with a hash of attributes, all attributes provided must match a document in the database or this error will be raised.","resolution":"Search for attributes that are in the database or set the Mongoid.raise_not_found_error configuration option to false, which will cause a nil to be returned instead of raising this error."},"eager_load":{"message":"Eager loading :%{name} is not supported since it is a polymorphic belongs_to relation.","summary":"Mongoid cannot currently determine the classes it needs to eager load when the relation is polymorphic. The parents reside in different collections so a simple id lookup is not sufficient enough.","resolution":"Don't attempt to perform this action and have patience, maybe this will be supported in the future."},"invalid_collection":{"message":"Access to the collection for %{klass} is not allowed.","summary":"%{klass}.collection was called, and %{klass} is an embedded document - it resides within the collection of the root document of the hierarchy.","resolution":"For access to the collection that the embedded document is in, use %{klass}#_root.collection, or do not attempt to persist an embedded document without a parent set."},"invalid_config_option":{"message":"Invalid configuration option: %{name}.","summary":"A invalid configuration option was provided in your mongoid.yml, or a typo is potentially present. The valid configuration options are: %{options}.","resolution":"Remove the invalid option or fix the typo. If you were expecting the option to be there, please consult the following page with repect to Mongoid's configuration:\n\n   http://mongoid.org/en/mongoid/docs/installation.html"},"invalid_field":{"message":"Defining a field named '%{name}' is not allowed.","summary":"Defining this field would override the method '%{name}', which would cause issues with expectations around the original method and cause extremely hard to debug issues. The original method was defined in:\n   Object: %{origin}\n   File: %{file}\n   Line: %{line}","resolution":"Use Mongoid.destructive_fields to see what names are not allowed, and don't use these names. These include names that also conflict with core Ruby methods on Object, Module, Enumerable, or included gems that inject methods into these or Mongoid internals."},"invalid_field_option":{"message":"Invalid option :%{option} provided for field :%{name}.","summary":"Mongoid requires that you only provide valid options on each field definition in order to prevent unexpected behaviour later on.","resolution":"When defining the field :%{name} on '%{klass}', please provide valid options for the field. These are currently: %{valid}. If you meant to define a custom field option, please do so first like so:\n\n   Mongoid::Fields.option :%{option} do |model, field, value|\n     # Your logic here...\n   end\n   class %{klass}\n     include Mongoid::Document\n     field :%{name}, %{option}: true\n   end\n\n"},"invalid_includes":{"message":"Invalid includes directive: %{klass}.includes(%{args})","summary":"Eager loading in Mongoid only supports providing arguments to %{klass}.includes that are the names of relations on the %{klass} model, and only supports one level of eager loading. (ie, eager loading associations not on the %{klass} but one step away via another relation is not allowed.","resolution":"Ensure that each parameter passed to %{klass}.includes is a valid name of a relation on the %{klass} model. These are: %{relations}."},"invalid_index":{"message":"Invalid index specification on %{klass}: %{spec}, %{options}","summary":"Indexes in Mongoid are defined as a hash of field name and direction/2d pairs, with a hash for any additional options.","resolution":"Ensure that the index conforms to the correct syntax and has the correct options.\n\n Valid options are:\n   background: true|false\n   database: 'database_name'\n   drop_dups: true|false\n   name: 'index_name'\n   sparse: true|false\n   unique: true|false\n   min: 1\n   max: 1\n   bits: 26\n   bucket_size : 1\n   weights: { content: 1, title: 2 }\n   expire_after_seconds: number_of_seconds\n Valid types are: 1, -1, '2d', '2dsphere', 'geoHaystack', 'text', 'hashed'\n\n Example:\n   class Band\n     include Mongoid::Document\n     index({ name: 1, label: -1 }, { sparse: true })\n     index({ location: '2d' }, { background: true })\n   end\n\n"},"invalid_options":{"message":"Invalid option :%{invalid} provided to relation :%{name}.","summary":"Mongoid checks the options that are passed to the relation macros to ensure that no ill side effects occur by letting something slip by.","resolution":"Valid options are: %{valid}, make sure these are the ones you are using."},"invalid_path":{"message":"Having a root path assigned for %{klass} is invalid.","summary":"Mongoid has two different path objects for determining the location of a document in the database, Root and Embedded. This error is raised when an embedded document somehow gets a root path assigned.","resolution":"Most likely your embedded model, %{klass} is also referenced via a has_many from a root document in another collection. Double check the relation definitions and fix any instances where embedded documents are improperly referenced from other collections."},"invalid_scope":{"message":"Defining a scope of value %{value} on %{klass} is not allowed.","summary":"Scopes in Mongoid must be procs that wrap criteria objects.","resolution":"Change the scope to be a proc wrapped critera.\n\n Example:\n   class Band\n     include Mongoid::Document\n     scope :inactive, -\u003e{ where(active: false) }\n   end\n\n"},"invalid_storage_options":{"message":"Invalid options passed to %{klass}.store_in: %{options}.","summary":"The :store_in macro takes only a hash of parameters with the keys :database, :collection, or :session.","resolution":"Change the options passed to store_in to match the documented API, and ensure all keys in the options hash are symbols.\n\n Example:\n   class Band\n     include Mongoid::Document\n     store_in collection: 'artists', database: 'secondary'\n   end\n\n"},"invalid_storage_parent":{"message":"Invalid store_in call on class %{klass}.","summary":"The :store_in macro can only be called on a base Mongoid Document","resolution":"Remove the store_in call on class %{klass}, as it will use its parent store configuration. Or remove the hierarchy extension for this class."},"invalid_time":{"message":"'%{value}' is not a valid Time.","summary":"Mongoid tries to serialize the values for Date, DateTime, and Time into proper UTC times to store in the database. The provided value could not be parsed.","resolution":"Make sure to pass parsable values to the field setter for Date, DateTime, and Time objects. When this is a String it needs to be valid for Time.parse. Other objects must be valid to pass to Time.local."},"inverse_not_found":{"message":"When adding a(n) %{klass} to %{base}#%{name}, Mongoid could not determine the inverse foreign key to set. The attempted key was '%{inverse}'.","summary":"When adding a document to a relation, Mongoid attempts to link the newly added document to the base of the relation in memory, as well as set the foreign key to link them on the database side. In this case Mongoid could not determine what the inverse foreign key was.","resolution":"If an inverse is not required, like a belongs_to or has_and_belongs_to_many, ensure that :inverse_of =\u003e nil is set on the relation. If the inverse is needed, most likely the inverse cannot be figured out from the names of the relations and you will need to explicitly tell Mongoid on the relation what the inverse is.\n\n Example:\n   class Lush\n     include Mongoid::Document\n     has_one :whiskey, class_name: \"Drink\", inverse_of: :alcoholic\n   end\n\n   class Drink\n     include Mongoid::Document\n     belongs_to :alcoholic, class_name: \"Lush\", inverse_of: :whiskey\n   end"},"invalid_set_polymorphic_relation":{"message":"The %{name} attribute can't be set to an instance of %{other_klass} as %{other_klass} has multiple relations referencing %{klass} as %{name}.","summary":"If the parent class of a polymorphic relation has multiple definitions for the same relation, the values must be set from the parent side and not the child side since Mongoid cannot determine from the child side which relation to go in.","resolution":"Set the values from the parent, or redefine the relation with only a single definition in the parent."},"invalid_value":{"message":"Value of type %{value_class} cannot be written to a field of type %{field_class}","summary":"Tried to set a value of type %{value_class} to a field of type %{field_class}","resolution":"Verify if the value to be set correspond to field definition"},"mixed_relations":{"message":"Referencing a(n) %{embedded} document from the %{root} document via a relational association is not allowed since the %{embedded} is embedded.","summary":"In order to properly access a(n) %{embedded} from %{root} the reference would need to go through the root document of %{embedded}. In a simple case this would require Mongoid to store an extra foreign key for the root, in more complex cases where %{embedded} is multiple levels deep a key would need to be stored for each parent up the hierarchy.","resolution":"Consider not embedding %{embedded}, or do the key storage and access in a custom manner in the application code."},"mixed_session_configuration":{"message":"Both uri and standard configuration options defined for session: '%{name}'.","summary":"Instead of simply giving uri or standard options a preference order, Mongoid assumes that you have made a mistake in your configuration and requires that you provide one or the other, but not both. The options that were provided were: %{config}.","resolution":"Provide either only a uri as configuration or only standard options."},"nested_attributes_metadata_not_found":{"message":"Could not find metadata for relation '%{name}' on model: %{klass}.","summary":"When defining nested attributes for a relation, Mongoid needs to access the metadata for the relation '%{name}' in order if add autosave functionality to it, if applicable. Either no relation named '%{name}' could be found, or the relation had not been defined yet.","resolution":"Make sure that there is a relation defined named '%{name}' on %{klass} or that the relation definition comes before the accepts_nested_attributes_for macro in the model - order matters so that Mongoid has access to the metadata.\n\n Example:\n   class Band\n     include Mongoid::Document\n     has_many :albums\n     accepts_nested_attributes_for :albums\n   end\n\n"},"no_default_session":{"message":"No default session configuration is defined.","summary":"The configuration provided settings for: %{keys}, but Mongoid requires a :default to be defined at minimum.","resolution":"If configuring via a mongoid.yml, ensure that within your :sessions section a :default session is defined.\n\n Example:\n   development:\n     sessions:\n       default:\n         hosts:\n           - localhost:27017\n\n"},"no_environment":{"message":"Could not load the configuration since no environment was defined.","summary":"Mongoid attempted to find the appropriate environment but no Rails.env, Sinatra::Base.environment, RACK_ENV, or MONGOID_ENV could be found.","resolution":"Make sure some environment is set from the mentioned options. Mongoid cannot load configuration from the yaml without knowing which environment it is in, and we have considered defaulting to development an undesireable side effect of this not being defined."},"no_map_reduce_output":{"message":"No output location was specified for the map/reduce operation.","summary":"When executing a map/reduce, you must provide the output location of the results. The attempted command was: %{command}.","resolution":"Provide the location that the output of the operation is to go by chaining an #out call to the map/reduce.\n\n Example:\n   Band.map_reduce(map, reduce).out(inline: 1)\n\n Valid options for the out function are:\n   inline:  1\n   merge:   'collection-name'\n   replace: 'collection-name'\n   reduce:  'collection-name'\n\n"},"no_metadata":{"message":"Metadata not found for document of type %{klass}.","summary":"Mongoid sets the metadata of a relation on the document when it is either loaded from within the relation, or added to one. The presence of the metadata is required in order to provide various functionality around relations. Most likely you are getting this error because the document is embedded and was attempted to be persisted without being associated with a parent, or the relation was not properly defined.","resolution":"Ensure that your relations on the %{klass} model are all properly defined, and that the inverse relations are also properly defined. Embedded relations must have both the parent (embeds_one/embeds_many) and the inverse (embedded_in) present in order to work properly."},"no_parent":{"message":"Cannot persist embedded document %{klass} without a parent document.","summary":"If the document is embedded, in order to be persisted it must always have a reference to its parent document. This is most likely caused by either calling %{klass}.create or %{klass}.create! without setting the parent document as an attribute.","resolution":"Ensure that you've set the parent relation if instantiating the embedded document directly, or always create new embedded documents via the parent relation."},"no_session_config":{"message":"No configuration could be found for a session named '%{name}'.","summary":"When attempting to create the new session, Mongoid could not find a session configuration for the name: '%{name}'. This is necessary in order to know the host, port, and options needed to connect.","resolution":"Double check your mongoid.yml to make sure under the sessions key that a configuration exists for '%{name}'. If you have set the configuration programatically, ensure that '%{name}' exists in the configuration hash."},"no_sessions_config":{"message":"No sessions configuration provided.","summary":"Mongoid's configuration requires that you provide details about each session that can be connected to, and requires in the sessions config at least 1 default session to exist.","resolution":"Double check your mongoid.yml to make sure that you have a top-level sessions key with at least 1 default session configuration for it. You can regenerate a new mongoid.yml for assistance via `rails g mongoid:config`.\n\n Example:\n   development:\n     sessions:\n       default:\n         database: mongoid_dev\n         hosts:\n           - localhost:27017\n\n"},"no_session_database":{"message":"No database provided for session configuration: :%{name}.","summary":"Each session configuration must provide a database so Mongoid knows where the default database to persist to. What was provided was: %{config}.","resolution":"If configuring via a mongoid.yml, ensure that within your :%{name} section a :database value for the session's default database is defined.\n\n Example:\n   development:\n     sessions:\n       %{name}:\n         database: my_app_db\n         hosts:\n           - localhost:27017\n\n"},"no_session_hosts":{"message":"No hosts provided for session configuration: :%{name}.","summary":"Each session configuration must provide hosts so Mongoid knows where the database server is located. What was provided was: %{config}.","resolution":"If configuring via a mongoid.yml, ensure that within your :%{name} section a :hosts value for the session hosts is defined.\n\n Example:\n   development:\n     sessions:\n       %{name}:\n         database: my_app_db\n         hosts:\n           - localhost:27017\n\n"},"readonly_attribute":{"message":"Attempted to set the readonly attribute '%{name}' with the value: %{value}.","summary":"Attributes flagged as readonly via Model.attr_readonly can only have values set when the document is a new record.","resolution":"Don't define '%{name}' as readonly, or do not attempt to update its value after the document is persisted."},"readonly_document":{"message":"Attempted to persist the readonly document '%{klass}'.","summary":"Documents loaded from the database using #only cannot be persisted.","resolution":"Don't attempt to persist documents that are flagged as readonly."},"scope_overwrite":{"message":"Cannot create scope :%{scope_name}, because of existing method %{model_name}.%{scope_name}.","summary":"When defining a scope that conflicts with a method that already exists on the model, this error will get raised if Mongoid.scope_overwrite_exception is set to true.","resolution":"Change the name of the scope so it does not conflict with the already defined method %{model_name}, or set the configuration option Mongoid.scope_overwrite_exception to false, which is its default. In this case a warning will be logged."},"taken":"is already taken","too_many_nested_attribute_records":{"message":"Accepting nested attributes for %{association} is limited to %{limit} records.","summary":"More documents were sent to be processed than the allowed limit.","resolution":"The limit is set as an option to the macro, for example: accepts_nested_attributes_for :%{association}, limit: %{limit}. Consider raising this limit or making sure no more are sent than the set value."},"unknown_attribute":{"message":"Attempted to set a value for '%{name}' which is not allowed on the model %{klass}.","summary":"Without including Mongoid::Attributes::Dynamic in your model and the attribute does not already exist in the attributes hash, attempting to call %{klass}#%{name}= for it is not allowed. This is also triggered by passing the attribute to any method that accepts an attributes hash, and is raised instead of getting a NoMethodError.","resolution":"You can include Mongoid::Attributes::Dynamic if you expect to be writing values for undefined fields often."},"unsaved_document":{"message":"Attempted to save %{document} before the parent %{base}.","summary":"You cannot call create or create! through the relation (%{document}) who's parent (%{base}) is not already saved. This would case the database to be out of sync since the child could potentially reference a nonexistant parent.","resolution":"Make sure to only use create or create! when the parent document %{base} is persisted."},"unsupported_javascript":{"message":"Executing Javascript $where selector on an embedded criteria is not supported.","summary":"Mongoid only supports providing a hash of arguments to #where criterion on embedded documents. Since %{klass} is embedded, the expression %{javascript} is not allowed.","resolution":"Please provide a standard hash to #where when the criteria is for an embedded relation."},"validations":{"message":"Validation of %{document} failed.","summary":"The following errors were found: %{errors}","resolution":"Try persisting the document with valid data or remove the validations."},"delete_restriction":{"message":"Cannot delete %{document} because of dependent '%{relation}'.","summary":"When defining '%{relation}' with a :dependent =\u003e :restrict, Mongoid will raise an error when attempting to delete the %{document} when the child '%{relation}' still has documents in it.","resolution":"Don't attempt to delete the parent %{document} when it has children, or change the dependent option on the relation."}}}},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","previous":"\u0026lsaquo; Prev","next":"Next \u0026rsaquo;","truncate":"\u0026hellip;","rademade":{"first":"First","last":"Last","previous":"Previous","next":"Next","truncate":"\u0026hellip;"}}},"ckeditor":{"page_title":"CKEditor Files Manager","confirm_delete":"Delete file?","buttons":{"cancel":"Cancel","upload":"Upload","delete":"Delete","next":"Next"}},"rademade_admin":{"project":"Project","home":"Home","search":"Search in rubric","show_on_page":"Show","reset_sort":"Reset sorting","management":{"title":"Management","destroy":"Destroy","edit":"Edit","preview":"Preview","show_status":"Show status"},"login":{"email":"Email","password":"Password","submit":"Log in","validation":{"email_not_found":"There is no users with such email","incorrect_password":"Incorrect password","access_denied":"Access denied"}},"dashboard":{"greeting":"Hello, %{user}"},"record":{"new":"Add record","edit":"Edit"},"title":{"new_record":"New record","edit_record":"Edit record"},"export":{"csv":"Export to csv"},"success_message":{"simple":"Ok","insert":"Entity was inserted!","update":"Entity data was updated!","delete":"Entity was deleted!","unlink":"Entity was unlinked!","link":"Entity was linked!","status_update":"Status was updated!"},"remove_confirm":{"record":"Do you really want delete this record?","model":"Do you really want delete this model?","image":"Do you really want delete this image?"},"uploader":{"download":"Download file","crop":"Crop","remove":"Remove","add":{"photo":"Add new\u2028photo","video":"Add new\u2028video","file":"Add new\u2028file","gallery":"Add new\u2028photo"}},"button":{"save":"Save","cancel":"Cancel","submit":"Submit","save_and_return":"%{save} and return"},"locale":{"en":"EN","ru":"RU"},"relation":{"add":"Add new","edit":"Edit","destroy":"Destroy","search":"Enter search phrase"}},"select2":{"no_results":"No results"},"simple_form":{"yes":"Yes","no":"No","required":{"text":"required","mark":"*"},"error_notification":{"default_message":"Please review the problems below:"}},"hello":"Hello world"},"cs":{"ckeditor":{"page_title":"CKEditor Správce souborů","confirm_delete":"Smazat soubor ?","buttons":{"cancel":"Zrušit","upload":"Nahrát","delete":"Smazat","next":"Next"}}},"de":{"ckeditor":{"page_title":"CKEditor Dateimanager","confirm_delete":"Datei löschen?","buttons":{"cancel":"Abbrechen","upload":"Hochladen","delete":"Löschen","next":"Next"}}},"el-GR":{"ckeditor":{"page_title":"CKEditor Διαχείρηση Αρχείων","confirm_delete":"Διαγραφή αρχείου;","buttons":{"cancel":"Ακύρωση","upload":"Μεταφόρτωση","delete":"Διαγραφή","next":"Next"}}},"es":{"ckeditor":{"page_title":"Administrador de Archivos CKEditor","confirm_delete":"¿Borrar archivo?","buttons":{"cancel":"Cancelar","upload":"Subir","delete":"Borrar","next":"Next"}}},"fr":{"ckeditor":{"page_title":"CKEditor - Gestionnaire de fichiers","confirm_delete":"Supprimer le fichier ?","buttons":{"cancel":"Annuler","upload":"Ajouter","delete":"Supprimer","next":"Next"}}},"hu":{"ckeditor":{"page_title":"CKEditor fájlkezelő","confirm_delete":"Biztosan töröljük a fájlt?","buttons":{"cancel":"Mégsem","upload":"Feltöltés","delete":"Törlés","next":"Next"}}},"it":{"ckeditor":{"page_title":"CKEditor Files Manager","confirm_delete":"Cancellare il file?","buttons":{"cancel":"Annulla","upload":"Carica","delete":"Elimina","next":"Next"}}},"ja":{"ckeditor":{"page_title":"CKEditor ファイル・マネージャー","confirm_delete":"ファイルを削除しますか？","buttons":{"cancel":"キャンセル","upload":"アップロード","delete":"削除","next":"次へ"}}},"nb":{"ckeditor":{"page_title":"CKEditor filbehandlingr","confirm_delete":"Slette filen?","buttons":{"cancel":"Avbryt","upload":"Last opp","delete":"Slett","next":"Neste"}}},"nl":{"ckeditor":{"page_title":"CKEditor Files Manager","confirm_delete":"Delete file?","buttons":{"cancel":"Cancel","upload":"Upload","delete":"Delete","next":"Next"}}},"pl":{"ckeditor":{"page_title":"CKEditor Menadżer Plików","confirm_delete":"Usunąć plik?","buttons":{"cancel":"Anuluj","upload":"Wyślij","delete":"Skasuj","next":"Next"}}},"pt-BR":{"ckeditor":{"page_title":"Gerenciador de arquivos do CKEditor","confirm_delete":"Apagar arquivo?","buttons":{"cancel":"Cancelar","upload":"Enviar","delete":"Apagar","next":"Next"}}},"pt-PT":{"ckeditor":{"page_title":"Gestor de arquivos do CKEditor","confirm_delete":"Apagar arquivo?","buttons":{"cancel":"Cancelar","upload":"Enviar","delete":"Apagar","next":"Next"}}},"ru":{"ckeditor":{"page_title":"CKEditor Загрузка файлов","confirm_delete":"Удалить файл?","buttons":{"cancel":"Отмена","upload":"Загрузить","delete":"Удалить","next":"Показать еще"}},"rademade_admin":{"project":"Проект","home":"Главная","search":"Поиск в рубрике","show_on_page":"Показать","reset_sort":"Сбросить сортировку","management":{"title":"Управление","destroy":"Удалить","edit":"Редактировать","preview":"Просмотр","show_status":"Статус отображения"},"login":{"email":"Электронная почта","password":"Пароль","submit":"Войти","validation":{"email_not_found":"Пользователь не найден","incorrect_password":"Неверный пароль","access_denied":"Отказано в доступе"}},"dashboard":{"greeting":"Привет, %{user}"},"record":{"new":"Добавить запись","edit":"Редактировать"},"title":{"new_record":"Новая запись","edit_record":"Редактирование"},"export":{"csv":"Экспортировать в csv"},"success_message":{"simple":"Ok","insert":"Запись вставлена!","update":"Запись обновлена!","delete":"Запись удалена!","unlink":"Запись отсоединена!","link":"Запись соединена!","status_update":"Статус обновлен!"},"remove_confirm":{"record":"Вы действительно хотите удалить данную запись?","model":"Вы действительно хотите удалить данную модель?","image":"Вы действительно хотите удалить данную картинку?"},"uploader":{"download":"Скачать файл","crop":"Обрезать","remove":"Удалить","add":{"photo":"Добавить фото","video":"Добавить видео","file":"Добавить файл","gallery":"Добавить фото"}},"button":{"save":"Сохранить","cancel":"Отмена","submit":"Подтвердить","save_and_return":"%{save} и вернуться"},"locale":{"en":"EN","ru":"RU"},"relation":{"add":"Добавить","edit":"Редактировать","destroy":"Удалить","search":"Введите фразу для поиска"}},"views":{"pagination":{"rademade":{"first":"Первая","last":"Последняя","previous":"Предыдущая","next":"Следующая","truncate":"\u0026hellip;"}}},"select2":{"no_results":"Нет записей"},"helpers":{"submit":{"create":"Создать","update":"Сохранить изменения","reset":"Сбросить","cancel":"Отмена"}}},"sv-SE":{"ckeditor":{"page_title":"CKEditor filhanterare","confirm_delete":"Ta bort fil?","buttons":{"cancel":"Avbryt","upload":"Ladda upp","delete":"Ta bort","next":"Next"}}},"uk":{"ckeditor":{"page_title":"CKEditor Завантаження файлів","confirm_delete":"Видалити файл?","buttons":{"cancel":"Відміна","upload":"Завантажити","delete":"Видалити","next":"Показати більше"}}},"zh-CN":{"ckeditor":{"page_title":"CKEditor - 文件管理","confirm_delete":"删除文件?","buttons":{"cancel":"取消","upload":"上传","delete":"删除","next":"下一个"}}},"zh-TW":{"ckeditor":{"page_title":"CKEditor - 文件管理","confirm_delete":"删除文件?","buttons":{"cancel":"取消","upload":"上傳","delete":"删除","next":"下一個"}}}};