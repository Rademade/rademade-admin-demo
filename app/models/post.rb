# -*- encoding : utf-8 -*-
class Post
  include RademadeAdmin::Hideable
  include Mongoid::Document
  include Sortable

  belongs_to :user
  belongs_to :gallery
  belongs_to :main_post, :class_name => 'Post', :inverse_of => :other_posts
  has_many :other_posts, :class_name => 'Post', :inverse_of => :main_post, :sortable => true
  has_and_belongs_to_many :tags, :sortable => true

  mount_uploader :avatar, PosterUploader
  mount_uploader :document, FileUploader
  mount_uploader :video, VideoUploader

  field :headline, :type => String
  field :text, :type => String, :localize => true
  field :status, :type => Integer
  field :post_time, :type => DateTime
  field :status, :type => Mongoid::Boolean, :default => RademadeAdmin::Hideable::STATUS_SHOWN

  validates_presence_of :headline

  def to_s
    headline
  end

end
