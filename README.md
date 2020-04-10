## Getting Started

Before we can design a website we need to have a platform to run our script. This allows us to iteratively test and debug the website as it is being built.

First we update our packages
>sudo apt-get update

Then we install apache2
>sudo apt-get install apache2

Then go into a webrowser and type "localhost" or "127.0.0.1"
You should be able to see your website!

### Customizing the website
Now we need to navigate to the folder where the website is located
>cd /var/www/html/

Lets see what is in this folder
>ls
You should see "index.html"
This is the default website which we will be replacing with our own. The default website is included in this repository.

###### Stop apache
>sudo /ect/init.d/apache2 stop

###### Restart apache
>sudo /ect/init.d/apache2 restart

(stuff about setting up local website hosting)

(stuff about website design)


