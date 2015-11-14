Designer Sandbox
================

Requirements
------------
nodeJS
Sass - (sudo gem install sass on OSX)
Bower - (requires node, sudo npm install -g bower)

Installation
------------
* cd into cloned directory
* run npm install
* run bower install

Includes
-------------
* bootstrap-sass (commented out)
* material-design-lite
* fontawesome

How to use
---------------
* gulp watch project folder
** gulp will auto compile a new css to public/css/style.css whenever we make a change
* At this point you are ready to build. Any HTML changes needs to happen in index.html, and any css changes in resources/sass/style.css


Adding new plugins
------------------
* install plugin via bower install <plugin name>
* add new bower plugin to loadPath in gulpfile.js
* import <newplugin> in resources/sass/style.scss
** add any css changes below imports
*

