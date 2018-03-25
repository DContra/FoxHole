# FOXHOLE #

*This application is for use of collecting and storing asks and bids from Ethereum Crypto Exchanges*

## Currently supported Exchanges: ##

Kraken

## How to use: ##

1. Pull this repository
2. Run npm i to install dependencies
3. Once completed run node index.js
4. This will create an SQLITE3 table called ask-bid.db and write to it approx
5. every 5 seconds with a timestamp, a list of asks, and a list of bids

#*Note:*#

Per a rough calculation, the database grows 1GB every 12-15 days