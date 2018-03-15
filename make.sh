cd ~/base16-builder
./base16

# Copy to dotfiles
cp -a ./output/shell/. ~/dotfiles/base16-shell/
chmod 755 * ~/dotfiles/base16-shell/*
cd ~/dotfiles/
git pull
git add .
git commit -m "Update base16-shell"
git push

cd ~/base16-builder

# Copy to vim
cp -a ./output/vim/. ~/base16-vim/colors
cd ~/base16-vim
git pull
git add .
git commit -m "Update base16-vim"
git push
cd ~/.vim/bundle/base16-vim
git pull

cd ~/base16-builder
