# Require any additional compass plugins here.
require "compass"

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/scss"
images_dir = "assets/images"
fonts_dir = "assets/fonts"
javascripts_dir = "assets/js"
relative_assets = true

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# SASS Options
# Soucemap is for debugging in browser dev tools
# As of Jan 2014 requires "sudo gem install compass-sourcemaps --pre"
sass_options = {:sourcemap => true, :debug_info => true}
enable_sourcemaps = true

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass scss scss && rm -rf sass && mv scss sass
