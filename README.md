```
**************************************************************************

   _____    _____   _   _____    _    ____      _____   _____    _____
  / ____|  / ____| | | |  __ \  | |  / __ \    |  ___| |  __ \  |  __ \
 | (___   | |      | | | |__) | | | | |  | |   | |___  | |__) | | |__) |
  \___ \  | |      | | |  ___/  | | | |  | |   |  ___| |  _  /  |  ___/
  ____) | | |____  | | | |      | | | |__| |   | |___  | | \ \  | |
 |_____/   \_____| |_| |_|      |_|  \____/    |_____| |_|  \_\ |_|

					https://www.scipioerp.com
					
					ANGULAR SHOP PROTOTYPE

**************************************************************************
```

# Angular Shop (Prototype)

##  General
This is a variant of the original shop component, containing a complete angular product store. 

This store is a *SHOW CASE* only and does not match the functionality of the original shop component.

Please be aware that the component may not receive updates and due to the differences between the logic involved in the actual shop
and this component, it may never be feature-complete nor bug-free. 

To get started, the following information may be of interest to you:

* Live Demo: 
  https://ce.scipioerp.com/angular-shop 
* Scipio ERP Addon Installation Guide:
  https://www.scipioerp.com/community/end-user/addons/
* Default load directory
  webapp/shop/
    
Compile with (in webapp/shop/):

```
$ng build --watch
```

## Installation
### Addon installation
On a copy of SCIPIO ERP add this addon as a subtree:

```
git remote add addons-angular-shop git@github.com:ilscipio/addons-angular-shop.git
git subtree add --squash --prefix=addons/angular-shop addons-angular-shop master
```

For future updates, use: 
```
git subtree pull --squash --prefix=addons/angular-shop addons-angular-shop master
```


### Angular Setup
(in webapp/shop/)
* Install node.js and npm: https://nodejs.org/en/download/
* Install angular-cli (once)
```
$ npm install -g @angular/cli
```
* Run angular cli: 
```
$ng build --watch
```