const db = require('../config/connection');
const { User, Blog, Security, Shop, Social} = require('../models');
const userSeeds = require('./userSeeds.json');
const blogSeeds = require('./blogSeeds.json');
const securitySeeds = require('./securitySeeds.json');
const shopSeeds = require('./shopSeeds.json');
const socialSeeds = require('./socialSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Blog.deleteMany({});
        await Security.deleteMany({});
        await Shop.deleteMany({});
        await Social.deleteMany({});
    
        await User.create(userSeeds);
        await Blog.create(blogSeeds);
        await Security.create(securitySeeds);
        await Shop.create(shopSeeds);
        await Social.create(socialSeeds);

    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    } 
);