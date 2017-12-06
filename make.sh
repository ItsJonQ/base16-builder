b16
./base16

# Copy to dotfiles
cp -a ./output/shell/. ~/dotfiles/base16-shell/
chmod 755 * ~/dotfiles/base16-shell/*
cd ~/dotfiles/
git add .
git commit -m "Update base16-shell"
git push

b16

# Copy to vim
# cp -a ./output/vim/. ~/base16-vim/colors
# sh ~/base16-vim/sync.sh
# cd ~/base16-vim
# git add .
# git commit -m "Update base16-vim"
# git push

# b16
