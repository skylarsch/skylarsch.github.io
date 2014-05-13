require 'grit'
require 'net/http'
require 't'

module Web
  BLOG_URL = "http://skylarsch.com"

  def self.link
    path = File.dirname(__FILE__) + "/../"
    repo = Grit::Repo.new(path)
    files = []
    repo.status.files.each do |key, val|
      if /_posts\/.*\.md$/.match(val.path)
        files << val.path.gsub(/_posts\/([\d]{4})-([\d]{2})-([\d]{2})-(.*)\.md/, '\1/\2/\3/\4.html')
      end
    end
    last_url = nil
    files.sort.reverse.each do |link|
      url = "#{BLOG_URL}/#{link}"
      uri = URI(url)
      request = Net::HTTP.new uri.host
      response= request.request_head uri.path
      if response.code.to_i == 200
        last_url = url
        break
      end
    end
    last_url
  end
end

desc "Open the site in the default browser"
task :open do
  `open #{Web::BLOG_URL}`
end

namespace :web do
  desc "Tweet the latest link using sferik/t"
  task :tweet do
    link = Web.link
    STDOUT.puts "Is this the correct link? #{link} (y/n)"
    input = STDIN.gets.strip
    if input == "y"
      `t update "I wrote a thing #{link}"`
    else
      puts "Canceling"
    end
  end
end
