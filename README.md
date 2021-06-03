**Hamster Wars Project**

This is the place where hamsters battle each other for the great honor of becoming the CUTEST champion. May the cutest hamster win!

**Backend** uses Firestore database and express.

_**Database collections:**_

hamsters {
	id: ,
name: ,
age: ,
favFood: ,
loves: ,
imgName: , 
wins: ,
defeats: ,
games: ,
}


matches {
id: ,
winnerId: ,
loserId: ,
}

**Frontend** frontend developed in React





_**Views**_

**HamsterWars**

/start

Information about the app and how to use it.


**Battle**

/battle

You decide the fate of the hamster who will hold the title of Cutest Champion through voting on which hamster you think is cutest between two random contestants in each battle.

**Gallery**

/gallery

Shows all hamsters in a gallery, click on the hamster to view more details or to delete the hamster.
You can also add new hamsters through filling in a form.

**Statistics**

/statistics

Displays top 5 hamsters with highest win value and top 5 hamsters with highest defeats value.


**History**

/history

Here you can view all the recent matches and delete them.


