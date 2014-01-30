require './lib/SassyJSON'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = SassyJSON::VERSION
  s.date = SassyJSON::DATE

  # Gem Details
  s.name = "SassyJSON"
  s.rubyforge_project = "SassyJSON"
  s.description = %q{Sass API for JSON}
  s.summary = %q{SassyJSON is a Sass-powered API for JSON. It provides you the classic json-encode and json-decode directly from your Sass files.}
  s.authors = ["Hugo Giraudel", "Fabrice Weinberg"]
  s.email = ["hugo.giraudel@gmail.com", "fabrice@weinberg.me"]
  s.homepage = "https://github.com/HugoGiraudel/SassyJSON/"

  # README file
  s.files = ["README.md"]

  # CHANGELOG
  s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Add to require
  s.require_paths = ["lib", "stylesheets"]

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}
  # Deps
  s.add_runtime_dependency 'sass', '>= 3.3'
end