$(document).ready(function(){
  printTweets(currentUser);
  $(document).on('click', '#Refresh_Button', function() {
    printTweets(currentUser);
  });
  $(document).on('click', '#tweetUser', function() {
    currentUser = $(this).text();
    printTweets(currentUser);
  });
  $(document).on('click', '#home', function() {
    currentUser = undefined;
    counter = 10;
    printTweets(currentUser);
  });
  $(document).on('click', '#Expand_Button', function() {
    counter +=10;
    printTweets(currentUser);
  });

  $('form').submit(function(e) {
    e.preventDefault();
    currentUser = $('#search').val();
    printTweets(currentUser);
  });
});

var currentUser = undefined;
var counter = 10;

var printTweets = function(username) {
  var $tweets = $('.tweets');
  $tweets.html('');

  var index = streams.home.length - 1;
  if (!(username === undefined)) {
    index = (streams.users)[username].length - 1;
  }

  var newCounter = counter;
  while(index >= 0 && newCounter > 0){
    var tweet = streams.home[index];
    if (!(username === undefined)) {
      tweet = (streams.users)[username][index];
    }
    var tweetAt = '<span class ="tweetName" id="tweetAt"> @ </span>';
    var tweetUser = '<span class="tweetName" id="tweetUser">' + tweet.user + '</span>';
    var tweetTime = '<span class="tweetTime" data-livestamp= "' + tweet.created_at + '"></span>';
    var tweetMessage = '<div class="tweetMessage">' + tweet.message + '</div>';

    $tweets.append(tweetAt);
    $tweets.append(tweetUser);
    $tweets.append(tweetTime);
    $tweets.append(tweetMessage);
    index -= 1;
    newCounter -= 1;
  }
}
