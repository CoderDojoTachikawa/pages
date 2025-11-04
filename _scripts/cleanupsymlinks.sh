# Show symlinks (valid and broken)
find . -maxdepth 1 -xtype l -or -type l -printf '%p -> %l\n'

# Remove only broken symlinks among our targets
for d in _layouts _includes _sass assets; do
  if [ -L "$d" ] && [ ! -e "$(readlink "$d")" ]; then
    rm "$d"
    echo "Removed broken symlink: $d"
  fi
done

# If you want to remove any symlink (even if not broken), use:
# rm -f _layouts _includes _sass assets
