# Contribution Guidelines

**Many passwords** is powered by the community, so feel free to contribute in any way you can to help us!

# How you can help

* Submit pull requests with new default passwords (see guidelines below) or snippet updates (notes, typos, incorrect data, etc).
* Submit pull requests with project website improvement, corrections and other things about the page (website files are in the [website branch](https://github.com/nothing3f/many-passwords/tree/website).
* Submit pull requests or open issues with your ideas to improve the project.
* Open issues for things you want to see added, modified or help out with existing issues (for example: Have you noticed a typo but you don't know how to fix it? Write about it in issue).
* Do you have any other idea to help? Feel free to!

# Ground rules

Passwords are stored as a CSV file.

The project uses Github Action to sort alphabetically and update the number of passwords in the README file.   
So you don't have to do it manually.  

In order for the CSV file to be displayed correctly by Github, follow the scheme below:  
```Vendor,Model,Version,Access Type,Username,PASSWORD,Privileges,Notes```

Example:  
```3COM,Wireless AP,ANY,Multi,admin,comcomcom,Admin,Works on all 3com wireless APs```  
will be displayed:  
![Example display](https://cdn.discordapp.com/attachments/574604364342231052/765893402176126976/unknown.png)

If you don't know a field, leave it blank (for example: you don't know what the access type is, so leave this field blank).  
You don't have to worry that something has gone wrong. We will be happy to help if you open a PR or issue.
