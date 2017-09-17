source "https://rubygems.org"

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "octopress-autoprefixer"
end

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
