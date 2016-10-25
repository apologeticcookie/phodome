## Understanding and Improving Load Speeds ##

In developing Phodome, we noticed that page load speeds would be an important aspect of the application. A 3D/VR photo rendering app would be resource intensive, and depending on how the app is set up, design decisions would potentially impact its load time.

From our research, we used GTmetrix, which ran page load speed tests from Google's PageSpeed Insights and Yahoo's YSlow, and suggested action steps to improve load times.

## Action Steps taken ##

1) Enabled gzip compression on the server side. Implemented via Compression middleware in Express.

## References ##
How fast is fast enough?
>https://timkadlec.com/2014/01/fast-enough/#comment-1200946500
-100ms is how long you have for the user to feel like the task was instantaneous.
-1.0 second is how long you have for the user’s state of flow to remain uninterrupted (though the delay will still be noticeable).
-10 seconds is how long you have before the user loses interest entirely and will want to multitask while the task is completing.

