cd "$(dirname "$0")"
rm ../static/gameboy -rf
git clone https://github.com/wsandst/gameboy-emulator
cd gameboy-emulator/frontend_web/site
npm install
npm run build
rm ../../../../static/gameboy -rf
mv public ../../../../static/gameboy
cd ../../..
rm gameboy-emulator -rf