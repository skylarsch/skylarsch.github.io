require 'rake'
require 'yaml'
require 'fileutils'

config = YAML.load_file("_config.yml")

def post_content(title, include_date=true, layout="post", opts={})
  string = "---\nlayout: #{layout}\ntitle: \"#{title}\"\n"
  if include_date
    string += "date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S')}\n"
  end
  opts.each do |key, val|
    string += "#{key}: #{val}\n"
  end
  string += "---\n\n"
  string
end
def file_name_title(title)
  title.gsub(/(\'|\!|\?|\:|\s\z)/,"").gsub(/\s/,"-").downcase
end
def parse_title(title)
  title
end

namespace :post do

  desc "Create a new post"
  task :new, :title do |t, args|
    title = parse_title(args[:title])
    editor = config["editor"]

    if title.nil? or title.empty?
      raise "Please add a title to your post."
    end
    puts "Creating new post \"#{title}\""

    date = Time.now.strftime("%Y-%m-%d")
    filename = "#{date}-#{file_name_title(title)}.md"
    if File.exists?("./_posts/#{filename}")
      raise "Post already exists"
    end
    File.write("_posts/#{filename}", post_content(title))
    if editor && !editor.empty?
      `open -a #{editor} _posts/#{filename}`
    end
  end

  desc "Create a new draft"
  task :draft, :title do |t, args|
    title = parse_title(args[:title])
    editor = config["editor"]

    if title.nil? or title.empty?
      raise "Please add a title to your post."
    end
    puts "Creating new draft post \"#{title}\""

    filename = "#{file_name_title(title)}.md"
    if File.exists?("./_drafts/#{filename}")
      raise "Draft already exists"
    end
    File.write("_drafts/#{filename}",post_content(title, false))
    if editor && !editor.empty?
      `open -a #{editor} _drafts/#{filename}`
    end
  end

  desc "Edit an existing post"
  task :edit, :title do |t, args|
    title = parse_title(args[:title])
    editor = config["editor"]

    if title.nil? or title.empty?
      raise "Can't open a post without a title"
    end

    filename = file_name_title(title)

    posts = Dir.glob("_posts/*-#{filename}.md")
    if posts.count == 1
      `open -a #{editor} #{posts[0]}`
    else
      drafts = Dir.glob("_drafts/#{filename}.md")
      if drafts.count == 1
        `open -a #{editor} #{drafts[0]}`
      else
        puts "Found..."
        puts "Posts: #{posts}"
        puts "Drafts: #{drafts}"
      end
    end
  end

  desc "Publish a draft post"
  task :publish, :title do |t, args|
    title = parse_title(args[:title])
    if title.nil? or title.empty?
      raise "Please add a title to your post."
    end
    puts "Publishing \"#{title}\""

    filename = "#{file_name_title(title)}.md"
    if !File.exists?("./_drafts/#{filename}")
      raise "Draft doesn't exist"
    end

    date = Time.now.strftime("%Y-%m-%d")
    post_filename = "#{date}-#{filename}"
    if File.exists?("./_posts/#{post_filename}")
      raise "Already published"
    end

    content = File.read("./_drafts/#{filename}")
    result = content.gsub(/^---(.*)---\n\n/m, post_content(title))
    File.write("_posts/#{post_filename}", result)
    File.delete("_drafts/#{filename}")

    puts "Published #{title}"
  end

  task :link, :title, :link do |t, args|
    title = parse_title(args[:title])
    link = args[:link]
    editor = config["editor"]

    if title.nil? or title.empty?
      raise "Please add a title to your post."
    end
    if link.nil? or link.empty?
      raise "Please add a link to your post."
    end
    puts "Creating new link post \"#{title}\""

    date = Time.now.strftime("%Y-%m-%d")
    filename = "#{date}-#{file_name_title(title)}.md"
    if File.exists?("./_posts/#{filename}")
      raise "Post already exists"
    end
    File.write("_posts/#{filename}", post_content(title, true, "link", {link: link}))
    if editor && !editor.empty?
      `open -a #{editor} _posts/#{filename}`
    end
  end
end
