const mongoose = require('mongoose');
const { User, Blog, Security, Shop, Social} = require('../models');
const userSeeds = require('./userSeeds.json');
const blogSeeds = require('./blogSeeds.json');
const securitySeeds = require('./securitySeeds.json');
const shopSeeds = require('./shopSeeds.json');
const socialSeeds = require('./socialSeeds.json');

const seedData = async () => {
    try {
        await User.deleteMany({});
        await Blog.deleteMany({});
        await Security.deleteMany({});
        await Shop.deleteMany({});
        await Social.deleteMany({});
    
        await User.insertMany(userSeeds);
        await Blog.insertMany(blogSeeds);
        await Security.insertMany(securitySeeds);
        await Shop.insertMany(shopSeeds);
        await Social.insertMany(socialSeeds);

    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    
};

module.exports = seedData;