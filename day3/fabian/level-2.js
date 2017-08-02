const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
//TIP: use console.log or console.table to print data

//9. Print all the names in an array, using for loop
function task9() {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
task9();

//10. Print all the names in an array, using forEach loop
function task10() {
  names.forEach(function(name) {
    console.log(name);
  });
}
task10();

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

    // if other output formatting needed
    // newReleases.forEach(function(video) {
    //   videoAndTitlePairs.push({
    //     id: video.id,
    //     title: video.title
    //   });
    // });

    // using map
    // const videoAndTitlePairs = newReleases.map((data) => `${data.id}, ${data.title}`);

    // return videoAndTitlePairs;
    console.log(videoAndTitlePairs);
}
task11();

//12. Implement map()
//To make projections easier, let's add a map() function to the Array type.
//Map accepts the projection function to be applied to each item in the source array, and returns the projected array.
//TIP to do this use forEach or for loop

// Smashing in-built map() into pieces:
Array.prototype.mapPolyfill = function(callback/*, thisArg*/) {

  var thisArg, newArray, counter;

  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  // 1. Let thisObject be the result of calling ToObject passing the |this|
  //    value as the argument.
  var thisObject = Object(this);
  // 2. Let thisObjectLength be the result of calling the Get internal
  //    method of thisObject with the argument "length".
  // 3. Let thisObjectLength be ToUint32(lenValue).
  var thisObjectLength = thisObject.length >>> 0;

  // 4. If IsCallable(callback) is false, throw a TypeError exception.
  // See: http://es5.github.com/#x9.11
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  // 5. If thisArg was supplied, let thisArg be thisArg; else let thisArg be undefined.
  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  // 6. Let newArray be a new array created as if by the expression new Array(thisObjectLength)
  //    where Array is the standard built-in constructor with that name and
  //    thisObjectLength is the value of thisObjectLength.
  newArray = new Array(thisObjectLength);

  // 7. Let counter be 0
  counter = 0;

  // 8. Repeat, while k < thisObjectLength
  while (counter < thisObjectLength) {

    var counterValue, mappedValue;

    // a. Let Pk be ToString(k).
    //   This is implicit for LHS operands of the in operator
    // b. Let kPresent be the result of calling the HasProperty internal
    //    method of thisObject with argument Pk.
    //   This step can be combined with c
    // c. If kPresent is true, then
    if (counter in thisObject) {

      // i. Let counterValue be the result of calling the Get internal
      //    method of thisObject with argument Pk.
      counterValue = thisObject[counter];

      // ii. Let mappedValue be the result of calling the Call internal
      //     method of callback with thisArg as the this value and argument
      //     list containing counterValue, counter, and thisObject.
      mappedValue = callback.call(thisArg, counterValue, counter, thisObject);

      // iii. Call the DefineOwnProperty internal method of newArray with arguments
      // Pk, Property Descriptor
      // { Value: mappedValue,
      //   Writable: true,
      //   Enumerable: true,
      //   Configurable: true },
      // and false.

      // In browsers that support Object.defineProperty, use the following:
      // Object.defineProperty(newArray, k, {
      //   value: mappedValue,
      //   writable: true,
      //   enumerable: true,
      //   configurable: true
      // });

      // For best browser support, use the following:
      newArray[counter] = mappedValue;
    }
    // d. Increase k by 1.
    counter++;
  }

  // 9. return newArray
  return newArray;
};

// customMap() using for loop
Array.prototype.customMapFor = function(callback) {
  var newArray = [];
  var thisArg, counter;
  var thisObject = Object(this);
  var thisObjectLength = thisObject.length >>> 0;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  newArray = new Array(thisObjectLength);

  for (var i = 0; i < thisObjectLength; i++) {
    if (i in this) {
      var counterValue, mappedValue;
      counterValue = thisObject[i];
      mappedValue = callback.call(thisArg, counterValue/*, [i], thisObject*/);
      newArray[i] = mappedValue;
    }
  }
  return newArray;
};

////////////////////////////////////////////////////////////////
// customMap() using forEach() method

Array.prototype.customMapForEach = function(callback) {
  var newArray = [];

  this.forEach(function(itemInArray) {
    mappedValue = callback.call(this, itemInArray);
    newArray.push(mappedValue);
  });
  return newArray;
};

///////////////////////////////////////////////////////////////


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
    // return newReleases.customMap((film) => `${film.id}, ${film.title}`);
    // finish this expression!

    // comparing the results
    var films = newReleases.mapPolyfill((film) => `${film.id}, ${film.title}`);
    console.log(films);
    var films2 = newReleases.map((film) => `${film.id}, ${film.title}`);
    console.log(films2);
    var films3 = newReleases.customMapFor((film) => `${film.id}, ${film.title}`);
    console.log(films3);
    var films4 = newReleases.customMapForEach((film) => `${film.id}, ${film.title}`);
    console.log(films4);
    // ------------ INSERT CODE HERE! -----------------------------------
}

task13();
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
    // Use forEach function to accumulate every video with a rating of 5.0
    var videos = [];

    // function pushToArray(video) {
    //   if (video.rating === 5) {
    //     videos.push(video);
    //   }
    // }
    //
    // newReleases.forEach(pushToArray);

    newReleases.forEach(function(video) {
      if (video.rating === 5) {
        videos.push(video);
      }
    });

    // ------------ INSERT CODE HERE! -----------------------------------

    // return videos;
    console.table(videos);
}
task14();


//15. Implement customFilter() to Array.prototype
//To make filtering easier, let's add a customFilter() function to the Array type. The
// customFilter() function accepts a predicate. A predicate is a function that accepts an item in the array,
// and returns a boolean indicating whether the item should be retained in the new array.


Array.prototype.filterPolyfill = function(predicateFunction /*, thisArg*/)
{
  var objectLength = this.length;
  if (typeof predicateFunction != "function") {
    throw new TypeError();
  }

  var results = new Array();
  var thisArg = arguments[1];
  for (var i = 0; i < objectLength; i++)
  {
    if (i in this)
    {
      var val = this[i]; // in case predicateFunction mutates this
      if (predicateFunction.call(thisArg, val, i, this))
        results.push(val);
    }
  }
  return results;
};


Array.prototype.customFilter = function(predicateFunction) {
  var results = [];

  this.forEach(function(itemInArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // var thisArg = arguments[1];

    if (predicateFunction.call(this, itemInArray)) {
      results.push(itemInArray);
    }
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
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

    /*
    // JUST FOR TESTING
    var ratingFilter = newReleases.filter(video => {
      if (video.rating == 5) {
        return true; // means keep it!
      }
    });
    console.log(ratingFilter);

    var ratingFilterPolyfill = newReleases.filterPolyfill(video => (video.rating == 5));
    console.log(ratingFilterPolyfill);

    var ratingCustomFilter = newReleases.customFilter(video => (video.rating == 5));
    console.log(ratingCustomFilter);
    */

    // ------------ INSERT CODE HERE! -----------------------------------
    // Chain the filter and map functions to select the id of all videos
    // with a rating of 5.0.

    var filterAndMap = newReleases.customFilter(video => (video.rating == 5)).customMapFor(video => video.id);
    console.log(filterAndMap);

    // return newReleases; // Complete this expression
    // ------------ INSERT CODE HERE! -----------------------------------
}

task16();
