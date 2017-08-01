//Retrieve id, title, and a 150x200 box art url for every video

//You've managed to flatten a tree that's two levels deep,
//let's try for three! Let's say that instead of a single boxart url on each video,
//we had a collection of boxart objects, each with a different size and url.
//Create a query that selects {id, title, boxart} for every video in the movieLists.
//This time though, the boxart property in the result will be the url of the boxart object
//with dimensions of 150x200px. Let's see if you can solve this problem with map(), concatAll(), and filter().

//There's just more one thing: you can't use indexers. In other words, this is illegal:
//    var itemInArray = movieLists[0];

//Furthermore, you're not allowed to use indexers in any of the next exercises
// unless you're implementing one of the five functions.
// There is a very good reason for this restriction,
// and that reason I will eventually explain to you :).
// For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)

//GOOD LUCK :)