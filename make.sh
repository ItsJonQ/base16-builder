cd ~/base16-builder
./base16

# Copy to dotfiles
cd ~/dotfiles/
git pull
cp -a ~/base16-builder/output/shell/. ~/dotfiles/base16-shell/
chmod 755 * ~/dotfiles/base16-shell/*
git add .
git commit -m "Update base16-shell"
git push

cd ~/base16-builder

# Copy to vim
cd ~/base16-vim
git pull
cp -a ~/base16-builder/output/vim/. ~/base16-vim/colors
git add .
git commit -m "Update base16-vim"
git push
# cd ~/.vim/plugged/base16-vim
# git pull
cd ~/.vim/plugged/base16-vim
git pull

cd ~/base16-builder
