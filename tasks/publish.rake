require 'grit'

desc "Commit new post and push."
task :publish do
  puts "Publishing"
  repo = Grit::Repo.new(Dir.pwd)
  files = repo.status.files.select { |k,v| (v.type =~ /(M|A)/ || v.untracked) }
  new_posts = files.select { |f| f =~ /_posts/ }
  if new_posts.count > 0
    new_images = files.select { |f| f =~ /images\/posts/ }
    new_posts.each { |k,v| repo.add(k) }
    new_images.each { |k,v| repo.add(k) }
    repo.commit_index("New Post")
    puts `git push origin master`
  else
    puts "No new posts to publish"
  end
end
