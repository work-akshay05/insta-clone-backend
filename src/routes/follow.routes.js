const express=require('express')
const followModel=require('../model/follow.model');
const identifer=require('../middleware/userverify.middleware');
const { follow, unfollow, pendingList, changestatus } = require('../controllers/follow.controllers');

const followRoute=express();
followRoute.use(express.json());

/**
 * @route /follow/:username 
 * @description so this route is for one user to follow the other user 
 * @logic we have created 3 check - if user is following it self then it will return none, - if user is tring to follow a invalid user, - if user is already following that user  
*/

followRoute.post('/follow/:username',identifer,follow)

followRoute.post('/unfollow/:username',identifer,unfollow)

/**
 * @route /pendingreq
 * @description this api will only show the data of pending request which a user get
 * @logic so basically we are first creating all list of pending and we will show the list of pending in frontend and there should be two button 1 is for accepting and one is for rejecting
 */
followRoute.get('/pendingreq',identifer, pendingList)

followRoute.post('/changestatus/:id',identifer,changestatus)

module.exports=followRoute;
