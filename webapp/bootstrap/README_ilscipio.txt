-----------------
LESS setup
-----------------
This is based on: http://getbootstrap.com/getting-started/ & https://github.com/FezVrasta/bootstrap-material-design 
to give bootstrap a more modern appeal. 
To setup system to compile sass files, the following packages/commands are needed (ubuntu/debian/mint):

sudo apt-get install ruby ruby-dev ruby-full nodejs nodejs-dev npm
npm install -g grunt-cli

-----------------
LESS compile
-----------------
To start watching for less changes to auto compile to css, go to:

@component-name/webapp/@component-name/bower-components/bootstrap-material-design

and run:
grunt watch

-----------------
Bower update
-----------------
Run command from @component-name/webapp/@component-name/:

bower update


-----------------
Style changes
-----------------
Currently we include our own styles in @component-name/webapp/@component-name/sb-admin