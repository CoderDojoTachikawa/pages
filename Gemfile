# Gem source
source "https://rubygems.org"

# Pin Jekyll to your current series
gem "jekyll", "~> 4.4.1"

# --- Jekyll plugins ---------------------------------------------------------
# Keep all site plugins inside the :jekyll_plugins group so `bundle exec` loads them.
group :jekyll_plugins do
  # Feed plugin (keep your existing constraint; upgrade later if you wish)
  gem "jekyll-feed", "~> 0.12"

  # Remote theme plugin: pin to 0.4.3 to avoid `configure_sass` NoMethodError
  gem "jekyll-remote-theme", "~> 0.4.3"

  # Use the modern Sass converter (v3+) which relies on sass-embedded
  gem "jekyll-sass-converter", "~> 3.0"
end

# --- Sass runtime -----------------------------------------------------------
# sass-embedded provides the actual Sass engine used by jekyll-sass-converter v3+
gem "sass-embedded", "~> 1.93"

# --- Platform-specific bits -------------------------------------------------
# Windows & JRuby do not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Faster file watcher on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# JRuby-specific http_parser pin
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
