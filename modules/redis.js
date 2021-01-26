'use strict';
module.exports = {
    connectRedis,

}

const redis = require("redis");

const {  } = require('./socket');

var rClient, rPub, rSub;

function connectRedis() {
    // config set notify-keyspace-events KEg$lshzxe 
    return new Promise(resolve => {
        Promise.all([
            initRedisClient(), 
            initRedisPublisher(),
            initRedisSubscriber()
        ]).then(function(values) {
            console.log("Redis connected", new Date());            
            resolve();
        }).catch(err => {
            console.log("Redis Conection error : ", err);
        });
    });
}

function initRedisClient(){
    return new Promise(resolve => {
        rClient = redis.createClient(process.env.REDIS_CONNECTION_URL);
        rClient.on("error", function(error) {
            console.error("Redis Client error : ",error);
        });

        rClient.on("ready", function() {
            // console.log("Redis Client connected ", new Date())
            resolve();
        });
    })   
}

function initRedisPublisher(){
    return new Promise(resolve => {
        rPub = redis.createClient(process.env.REDIS_CONNECTION_URL);
        rPub.on("error", function(error) {
            console.error("Redis Publisher error : ",error);
        });

        rPub.on("ready", function() {
            // console.log("Redis Publisher connected ", new Date())
            resolve();
        });
    })   
}
function initRedisSubscriber(){
    return new Promise(resolve => {
        rSub = redis.createClient(process.env.REDIS_CONNECTION_URL);
        rSub.on("error", function(error) {
            console.error("Redis Subscriber error : ",error);
        });
        
        rSub.on("ready", function() {
            resolve();
            // console.log("Redis Subscriber connected ", new Date())
        });
    })   
}

   