
desc 'Run the dev server'
task :server do
  exec "bundle exec jekyll serve --watch"
end
