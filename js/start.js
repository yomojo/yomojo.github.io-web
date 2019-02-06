//call feed script
$('#divRss').FeedEk({
    FeedUrl : 'https://rajivshah.co/feed.xml',
    MaxCount : 3,
    ShowDesc : true,
    ShowPubDate: false,
    DescCharacterLimit:90,
    TitleLinkTarget:'_self'
  });
