# _plugins/local_theme_override.rb
# If ../pages-theme exists, symlink site overrides to it.
# If not, ensure no dangling symlinks remain (so remote_theme works).
require "fileutils"

Jekyll::Hooks.register :site, :after_init do |site|
  site_root        = site.source
  local_theme_root = File.expand_path("../pages-theme", site_root)

  pairs = {
    "_layouts"  => File.join(local_theme_root, "_layouts"),
    "_includes" => File.join(local_theme_root, "_includes"),
    "_sass"     => File.join(local_theme_root, "_sass"),
    "assets"    => File.join(local_theme_root, "assets")
  }

  if Dir.exist?(local_theme_root)
    Jekyll.logger.info "LocalTheme", "found: #{local_theme_root}"
    pairs.each do |site_dir, theme_dir|
      next unless Dir.exist?(theme_dir)

      site_path = File.join(site_root, site_dir)

      # Keep existing paths. Only create if not present.
      if File.exist?(site_path) || File.symlink?(site_path)
        # If it is already the same symlink, do nothing.
        if File.symlink?(site_path) && File.readlink(site_path) == theme_dir
          next
        end
        Jekyll.logger.info "LocalTheme", "kept existing: #{site_dir} (no overwrite)"
        next
      end

      FileUtils.mkdir_p(File.dirname(site_path))
      begin
        FileUtils.ln_s(theme_dir, site_path)
        Jekyll.logger.info "LocalTheme", "linked #{site_dir} -> #{theme_dir}"
      rescue => e
        Jekyll.logger.warn "LocalTheme", "failed to link #{site_dir}: #{e.message}"
      end
    end
  else
    # Local theme not present: remove broken symlinks to avoid ENOENT on read
    Jekyll.logger.info "LocalTheme", "not found: #{local_theme_root} (remote_theme will be used)"
    pairs.each_key do |site_dir|
      site_path = File.join(site_root, site_dir)
      if File.symlink?(site_path)
        target = File.readlink(site_path) rescue nil
        unless target && File.exist?(target)
          begin
            FileUtils.rm_f(site_path)
            Jekyll.logger.info "LocalTheme", "removed broken symlink: #{site_dir}"
          rescue => e
            Jekyll.logger.warn "LocalTheme", "failed to remove #{site_dir}: #{e.message}"
          end
        end
      end
    end
  end
end
