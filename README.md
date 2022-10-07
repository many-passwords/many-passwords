![](https://github.com/many-passwords/many-passwords/blob/main/many-passwords.png)

# Many passwords

_Default passwords for IoT devices and for web applications (for ex. MySQL and PostgreSQL admin panels)._ 🐱‍💻

_Useful for fans of Shodan, Censys and Google dorks._

- [x] in progress

## Motivation

- one document for the vendors default credentials with high-quality entries
- encouragent participation in the open source community by taking part in [Hacktoberfest](https://hacktoberfest.digitalocean.com/)
- archiving credentials of no longer available in the web

## Stats

Number of collected default passwords: ``2814``. ✔️

Places in the world where the [project page](https://many-passwords.github.io/) was displayed:

![stats](https://user-images.githubusercontent.com/36797326/141017341-bfd438ed-eca9-41c8-91ed-2fd3e1dbd973.png)

As you can see, most people are from India, Russia and United States. The goal is for the entire map to turn blue.

## Navigation

Credentials are in the [passwords.csv](https://github.com/many-passwords/many-passwords/blob/main/passwords.csv) file (the data is in the form of a table) or [project website](https://many-passwords.github.io/).

Each entries contains: ``Vendor``, ``Model/Software name``, ``Version``, ``Access Type``, ``Username``, ``Password``, ``Privileges`` and ``Notes``.

### Pass Station

[Pass Station](https://github.com/noraj/pass-station) is CLI & library to search for default credentials, created by [@noraj](https://github.com/noraj).  
As of [1.2.3 version](https://github.com/noraj/pass-station/releases/tag/v1.2.3) _Many passwords_ have been added as one of the sources of credentials.

Doc: [https://noraj.github.io/pass-station/#/](https://noraj.github.io/pass-station/#/)

## Contribution

Contribute <!-- in the main repository --> by checking the [CONTRIBUTING.md](https://github.com/many-passwords/many-passwords/blob/main/CONTRIBUTING.md) file in main repo<!--or    
contribute in the web repository by checking the [CONTRIBUTING.md](https://github.com/many-passwords/many-passwords.github.io/blob/main/CONTRIBUTING.md) file in website repo. -->.
## Sources

Entries are gathered from different sources:

- Vendors documentations/blogs
- [ics-default-passwords](https://github.com/arnaudsoullie/ics-default-passwords/)
- [SecLists - Passwords/Default-Credentials](https://github.com/danielmiessler/SecLists/tree/master/Passwords/Default-Credentials)
- [BetterDefaultPasslist](https://github.com/govolution/betterdefaultpasslist)
- [RouterSploit](https://github.com/threat9/routersploit)
- [changeme](https://github.com/ztgrace/changeme)
- [DefaultCreds-cheat-sheet](https://github.com/ihebski/DefaultCreds-cheat-sheet)
- [Cirt](https://cirt.net/passwords)
- [Saynamweb](https://sites.google.com/site/saynamweb/password)
- [URTech.ca](https://www.urtech.ca/2011/12/default-passwords/)
- [Datarecorvery.com](https://datarecovery.com/rd/default-passwords/)
- [RouterReset](https://www.router-reset.com/default-router-password-lookup)

## Special thanks

Thank you so much all contributors for their contribution to this project. I hope you will contribute to the open source community again!

Special thanks to:

- [@MarcelCoding](https://github.com/MarcelCoding) - [created Github Action](https://github.com/many-passwords/many-passwords/pull/49) which streamlined and accelerated the work;
- [@Mpcs](https://github.com/Mpcs) - [made very big changes to the project website](https://github.com/many-passwords/many-passwords/pull/41) - change of appearance, grid layout, search bar, navigation bar, About Us page, floating button go to the top, link to repo (contributing button), cleaner code;
- [@alenquer](https://github.com/alenquer) - [created the first version](https://github.com/many-passwords/many-passwords/pull/37) of the project page;
- [@secondl1ght](https://github.com/secondl1ght) - [semantic, accessibility, styling and DRY improvements](https://github.com/many-passwords/many-passwords.github.io/pull/1) and [format code in all files](https://github.com/many-passwords/many-passwords.github.io/pull/2) to be cleaner;
- [@zeno4ever](https://github.com/zeno4ever) - [adding a lot of ip cameras](https://github.com/many-passwords/many-passwords/pull/60), over 50 entries;
- [@noraj](https://github.com/noraj) - [adding many entries and helping sanitize the database](https://github.com/many-passwords/many-passwords/pulls?q=is%3Apr+author%3Anoraj+is%3Aclosed);
- [@Glowstik-YT](https://github.com/Glowstik-YT) - [created new logo](https://github.com/many-passwords/many-passwords/pull/80);
- [@SurendarSingh](https://github.com/SurendarSingh) and [@rahulbhatt1899](https://github.com/rahulbhatt1899) - added contact form [pull/14](https://github.com/many-passwords/many-passwords.github.io/pull/14) and [pull/8](https://github.com/many-passwords/many-passwords.github.io/pull/8);
- [@NgoQuocBao1010](https://github.com/NgoQuocBao1010) - [added buttons for downloads passwords to CSV and JSON file and displaying the number of collected passwords on the home page](https://github.com/many-passwords/many-passwords.github.io/issues/20);
- [@all contributors](https://github.com/many-passwords/many-passwords/graphs/contributors) - I cannot list all of you, thank you all for your contribution!
