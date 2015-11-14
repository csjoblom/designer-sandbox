Designer Sandbox
================

Requirements
------------
* nodejs
* git (obviously)
* sass - (sudo gem install sass on OSX)
* bower - (requires node, sudo npm install -g bower)

Installation
------------
* go to your projects folder
* clone this project (git clone https://github.com/csjoblom/designer-sandbox <project_name>)
* cd into new project folder
* run npm install
* run bower install

Includes
-------------
* bootstrap-sass 
* material-design-lite (commented out on this branch)
* fontawesome

How to use
---------------
* gulp watch project folder
* gulp will auto compile a new css to public/css/style.css whenever we make a change
* At this point you are ready to build. Any HTML changes need to happen in index.html, and any css changes in resources/sass/style.css 


Adding new plugins
------------------
* cd to your project folder
* install plugin via bower install <plugin name> 
* add new bower plugin to loadPath in gulpfile.js
* import <newplugin> in resources/sass/style.scss
* add any css changes below import