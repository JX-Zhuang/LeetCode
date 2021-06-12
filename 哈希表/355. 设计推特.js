/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.users = new Map();
    this.messages = [];
};
Twitter.prototype.createUser = function (userId) {
    if (!this.users.has(userId)) {
        this.users.set(userId, {
            follows: new Set(),
        });
        this.users.get(userId).follows.add(userId);
    }
}
/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.createUser(userId);
    this.messages.push({
        userId,
        tweetId
    });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    var messages = [];
    this.createUser(userId);
    var user = this.users.get(userId);
    for (var i = this.messages.length; i--; i < this.messages.length) {
        var message = this.messages[i];
        if (user.follows.has(message.userId)) messages.push(message.tweetId);
        if (messages.length === 10) break;
    }
    return messages;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    this.createUser(followerId);
    this.users.get(followerId).follows.add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    this.users.get(followerId).follows.delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */