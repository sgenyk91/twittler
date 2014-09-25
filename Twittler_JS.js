$(document).ready(function(){
  $(document).on('click', '#RefreshButton', function() {
    printTweets(currentUser);
  });
  $(document).on('click', '#tweetUser', function() {
    currentUser = $(this).text();
    printTweets(currentUser);
  })
  //home button
});
var currentUser = undefined;

var printTweets = function(username) {
  var $tweets = $('.tweets');
  $tweets.html('');

  var index = streams.home.length - 1;

  if (!(username === undefined)) {
    
    index = (streams.users)[username].length - 1;
  }
  var counter = 10;
  while(index >= 0 && counter > 0){
    var tweet = streams.home[index];
    if (!(username === undefined)) {
      tweet = (streams.users)[username][index];
    }
    var tweetAt = '<span class ="tweetName"> @ </span>';
    var tweetUser = '<span class="tweetName" id="tweetUser">' + tweet.user + '</span>';
    var tweetTime = '<span class="tweetTime"> &nbsp&nbsp&nbsp' + tweet.created_at + '</span>';
    var tweetMessage = '<div class="tweetMessage">' + tweet.message + '</div>';

    $tweets.append(tweetAt);
    $tweets.append(tweetUser);
    $tweets.append(tweetTime);
    $tweets.append(tweetMessage);
    index -= 1;
    counter -= 1;
  }
}
