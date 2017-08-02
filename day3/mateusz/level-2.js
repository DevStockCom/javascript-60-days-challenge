const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
//TIP: use console.log or console.table to print data

//9. Print all the names in an array, using for loop

for(var i = 0; i < names.length ;i++) {
    console.log(names[i]);
}

console.log("---------------");
//10. Print all the names in an array, using forEach loop

names.forEach(function(el) {
    console.log(el);
});

//11. Project an array of videos into an array of {id,title} pairs using forEach()
//For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

function task11() {
    var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id: 432534, time: 65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ],
        videoAndTitlePairs = [];

    newReleases.forEach(function(video) {
        videoAndTitlePairs.push(`${video.id}, ${video.title}`);
    });

    return videoAndTitlePairs;
    
    console.log(videoAndTitlePairs);
}

var task = task11();

console.log(task);


//12. Implement map()
//To make projections easier, let's add a map() function to the Array type.
//Map accepts the projection function to be applied to each item in the source array, and returns the projected array.
//TIP to do this use forEach or for loop
Array.prototype.customMap = function(map) {
    var projectionFunction = [];
    this.forEach(function(element) {
        projectionFunction.push(map(element));
    });
    
    return projectionFunction;
}
//Your customMap function should give the same result as original Array.prototype.map function, and behave in the same way

//13. Use newly create customMap() to project an array of videos into an array of {id,title} pairs

function task13() {
    var newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ];

    // ------------ INSERT CODE HERE! -----------------------------------
    return newReleases.customMap = function(movie) {
        return {id: video.id, title: video.title};});
    // finish this expression!
    // ------------ INSERT CODE HERE! -----------------------------------

}

// try it also with original Array.protorype.map function

//14. Use forEach() to collect only those videos with a rating of 5.0

function task14() {
    var newReleases = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ],
        videos = [];

    // ------------ INSERT CODE HERE! -----------------------------------
     newReleases.forEach(function(movie) {
        if (movie.rating == 5.0 ) {
            videos.push(movie);}
    });
    // ------------ INSERT CODE HERE! -----------------------------------

    return videos;   
    console.log(videos);
}

var wideo = task14();

console.log(wideo);
//15. Implement customFilter() to Array.prototype
//To make filtering easier, let's add a customFilter() function to the Array type. The
// customFilter() function accepts a predicate. A predicate is a function that accepts an item in the array,
// and returns a boolean indicating whether the item should be retained in the new array.

Array.prototype.filter = function(predicateFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
        if(predicateFunction(itemInArray)) {
            results.push(itemInArray);
        }
    });

    return results;
    console.log(results);
};


//16. Chain customFilter and customMap to collect the ids of videos that have a rating of 5.0

function task16() {
    var newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ];

    // ------------ INSERT CODE HERE! -----------------------------------
    // Chain the filter and map functions to select the id of all videos
    // with a rating of 5.0.

    newReleases.filter(function(movie) {
        if(movie.rating == 5.0) {
            return.movie
        }
    })
    
    newReleases.map(function(movie) {
        return movie.id });
    // ------------ INSERT CODE HERE! -----------------------------------
}