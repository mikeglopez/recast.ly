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
      callback(data.items);
    },
    error: function (error) {
      console.error('Recast.ly: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;



// readAll: function (successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function (error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// },
