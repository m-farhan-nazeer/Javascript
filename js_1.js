// console.log("hello World");

//                                                      Binary operators

// let a = 5;
// let b = 7;
// console.log(a + b )
// console.log(a ** b)


// //                                                       loose equality

// console.log('5' == 5 )

// //                                                        strict equality
// console.log('5' === 5 )


//                 //                                        bitwise_operators

// console.log( 5 & 2)
// console.log(5|2)
// console.log(~5)
// console.log(5>>1)
// console.log(5<<1)
// //                                                       conditions

// let age = 8;
// if (age >18){
//     console.log('can vote')
// }
// else{
//     console.log('cannot vote')
// }
// let num = 3;
// if (num ==1){
//     console.log('a')
// }
// else if(num == 0 ){
//     console.log('b')
// }
// else if (num == 2){
//     console.log('c')
// }
// else{
//     console.log('f')
// }
//                                                 // switch 

// let number = 2;
// switch(number){
//     case 1 : console.log('a')
//     break;
//     case 2 : console.log('b')
//     break;
//     case 3 : console.log('c')
//     break;
//     default : console.log ('f')

// }


// ------------------------------------------------string literals--------------------------------------------



// let age = `my age is ${5+5+5}`
// console.log(age)


// --------------------------Truthness and Falsiness----------------------
// let user = 'farhan';
// if (user){
//     console.log("welcome");
// }
// else{
//     console.log("no user added ")
// }


// let num = 7;
// num === 7 ? console.log('lucky') : console.log("not lucky");

// let statuss = 'ofline';
// let color = statuss ==='ofline'? 'red' : 'green';
// console.log(color)
// function addNumbers(a, b) {
//   return a + b;
// }

// // Example usage:
// console.log(addNumbers(5, 7)); // Output: 12
// // Returns the square of any number
// function square(num) {
//   return num * num;
// }

// // Example usage:
// console.log(square(6)); // Output: 36
// /**
//  * Fetch users and filter by post count
//  * @param {number} minPosts - Minimum number of posts to include a user
//  * @returns {Promise<Array>} - Sorted array of filtered users
//  */
// async function getActiveUsers(minPosts = 5) {
//   const USERS_URL = "https://jsonplaceholder.typicode.com/users";
//   const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

//   try {
//     // Fetch users and posts in parallel
//     const [usersRes, postsRes] = await Promise.all([
//       fetch(USERS_URL),
//       fetch(POSTS_URL)
//     ]);

//     if (!usersRes.ok || !postsRes.ok) {
//       throw new Error("Failed to fetch data from API");
//     }

//     const users = await usersRes.json();
//     const posts = await postsRes.json();

//     // Count posts per user
//     const postCountMap = posts.reduce((acc, post) => {
//       acc[post.userId] = (acc[post.userId] || 0) + 1;
//       return acc;
//     }, {});

//     // Filter users who have at least minPosts
//     const filteredUsers = users.filter(user => 
//       (postCountMap[user.id] || 0) >= minPosts
//     );

//     // Sort by name
//     filteredUsers.sort((a, b) => a.name.localeCompare(b.name));

//     // Return simplified objects
//     return filteredUsers.map(user => ({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       totalPosts: postCountMap[user.id] || 0
//     }));
//   } catch (error) {
//     console.error("Error in getActiveUsers:", error.message);
//     return [];
//   }
// }

// // Example usage:
// getActiveUsers(8).then(activeUsers => console.log(activeUsers));



// ----------------------------array------------------------------


let animals = ['cows','goats,','chickens']
animals.push('hens')
animals.pop()

let dishesToDO =[]
dishesToDO.unshift('platter')
dishesToDO.unshift('bowl')
dishesToDO.unshift('glass')
dishesToDO.shift()

console.log(animals.concat(dishesToDO))

let an = animals.slice(-3)


