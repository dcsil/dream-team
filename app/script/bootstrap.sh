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

echo "\n==========\nInstalling python3 using homebrew\n==========\n"
brew install python3

echo "\n==========\nInstalling pip\n==========\n"
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade setuptools

echo "\n==========\nInstalling dependencies in requirements.txt using pip\n==========\n"
python3 -m pip install -r requirements.txt
