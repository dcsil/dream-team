install_homebrew() {
  if [ "$(uname)" == "Darwin" ]; then
    echo "Installing Homebrew"
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
  fi
}


command -v brew > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "Homebrew already installed"
else
  install_homebrew
fi

echo "\n==========\nInstalling jq using homebrew\n==========\n"
brew install jq


echo "\n==========\nInstalling node  using homebrew\n==========\n"
brew install node

echo "\n==========\nInstalling yarn  using homebrew\n==========\n"
brew install yarn

echo "\n==========\nInstalling dependencies using yarn\n==========\n"
yarn install
