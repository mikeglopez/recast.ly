var searchYouTube = (options, callback) => {
  var server = 'https://www.googleapis.com/youtube/v3/search';

  $.ajax({
    url: server,
    type: 'GET',
    data: {
      maxResults: options.max,
      part: 'snippet',
      q: options.query,
      type: 'video',
      key: options.key,
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: function(data) {
      console.log('request successful');
      callback(data.items);
    },
    error: function (error) {
      console.error('Recast.ly: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;