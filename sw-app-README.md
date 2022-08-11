I. Basic Application Concept
II. Maintained functionalities




I. 

    The main purpose of the app is to serve as an online forum. The forum contains a database about
Star Wars characters and has description about each one of them (much like a wikipedia site - the equivalent is
a site called Wookipedia, at https://starwars.fandom.com/wiki/Darth_Nihilus).
    The main difference here, as that each character's strength is subjectively evaluated by the creator
The characters can face each other in a battle, created by the user. And all of this can be commented by app's users.

II. 

    Please note that for a complete experience, a new user should be registered, instead of using the server
pre-uploaded users (peter, gosho and admin), because they do not have a profile in the database.

If a new user is regitered, and there are no characters posted in the DB, there is an option for initial data post
to the server and initial render to it - this is only done to show what the site is intended to look like, you can
ignore this functionality and just create you own characters.

- Profile section:

Upon registration, along with the user, a profile object is also automatically created in the DB. The profile can 
later be editted by the logged user. The profile data is currently only used for the comments components and for
the profile-related views.

- Characters section:

    This is the main functionality of the app. The main component - CharacterList (the catalog page)
shows data about all the characters and renders the Character component (short preview, card) for each one of them. For the full preview of the characters, a Details Page is accessable through the Details button of each character from the catalog. Details Page also contains the Character Comment Section component, which is later described in the documentation. Full CRUD operations are possible for the logged in creator of the character. The details page and the catalog itself can be accessed by unauthorised users as well.


- Battle section:

    This functionality is based on the characters - it cannot be fully accessed unless there are two available
characters. It has a catalog page, rendered by the BattleListBage. To create a battle, a logged in user must select
two characters from the Characters catalog page, by clicking the battle icon (see Home page for visual tutorial) on
the character card. This leads to the Battle Create Page, where you can upload the battle. Afterwards you will be 
redirected to the Battle Details Page where the Battle comments section is also rendered. A logged in creator of the
battle can delete it, and unauthorised users can view the details and the catalog page.

- Comment section:

    Depending on which view is rendered, either the Character Comment section or the Battle Comment section will be
shown. They both use the Comment component to render the comments, related to the specific character/battle which is
currently rendered by the user. Full CRUD operations are possible for the logged in creator of the comment. All comments are visible to unauthorised users.
