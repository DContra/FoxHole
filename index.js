'use strict'
const ccxt = require('ccxt');
const sqlite3 = require('sqlite3');
var db;


connectToDB();

getTable();

setInterval(()=>{
    getTable();
}, 5000)

function connectToDB() {
    db = new sqlite3.Database('./ask-bid.db', (err) => {
        if (err) return console.error(err.message)
        console.log('Successfully connected to SQL database')
    })

    db.serialize(function () {
        db.run("CREATE TABLE if not exists kraken (timestamp TEXT, ask TEXT, bid TEXT)");
    });
}

function closeDB(){
    db.close();
}

function getTable() {
    let kraken    = new ccxt.kraken ()
    kraken.fetchOrderBook ('ETH/USD').then(res=>{
        db.run(`INSERT into kraken (timestamp, ask, bid) VALUES ("${res.timestamp}", "${escape(JSON.stringify(res.asks))}", "${escape(JSON.stringify(res.bids))}")`)
        console.log('Added entry to kraken table')
    })
}
