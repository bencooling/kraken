bec-kraken
==========

Fatten Kraken with some useful functionality to quickly build a node application with JSON flat file database.

kraken framework with:

  - ✓ arvindr21/diskDB as database store (JSON files)
  - JSON schema for store structure & client validation
  - ✓ Cookie based language localisation implementation
  - Protected routes with basic auth
  - Additional Gruntjs tasks for development & build:
    - fingerprinting assets,
    - spriting images, 
    - web server with live reload
    ...
  - Additional global variables:
    - ✓ base_path
    - ✓ storage_path
  - Bower dependencies added for 
    - form handling, 
    - css animations, 
    - (bourbon+) sass mixins & responsive grid
    ...

development progress
--------------------
/beaches route can GET (read) & POST (update) records to JSON database
language localisation works with /set-language route



resources
---------
[diskDB](https://github.com/arvindr21/diskDB)
[generator-kraken](https://github.com/krakenjs/generator-kraken)
[with.shoppingcart](https://github.com/krakenjs/kraken-examples/tree/master/with.shoppingcart)