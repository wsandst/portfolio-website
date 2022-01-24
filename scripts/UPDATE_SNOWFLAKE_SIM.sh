cd "$(dirname "$0")"
rm ../static/snowflakes -rf
git clone https://github.com/wsandst/snowflake-sim
cd snowflake-sim/site
npm install
npm run build
mv public ../../../static/snowflakes
cd ../../
rm snowflake-sim -rf