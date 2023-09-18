POST: /music  
Body: { "title": "Lucky", "artist": "Radiohead", "album": "OK Computer", "duration": 260 }

GET: /music

PUT: /music?column=duration&value=260  
Body: { "title": "Lucky", "artist": "Radiohead", "album": "OK Computer", "duration": 100 }

DELETE: /music?artist=Radiohead&title=Lucky