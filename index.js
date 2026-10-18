


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
// datejs adds extra methods to Date, such as toString('M/d/yyyy')
require('datejs');

// Merges any number of arrays of usernames into one object
function combineUsers(...args) {
  // args is an array of arrays, e.g. [['a', 'b'], ['c']]

  // The object we will return, starting with an empty users array
  const combinedObject = {
    users: [],
  };

  // Loop through args to get each array of usernames
  for (const userArray of args) {
    // Spread the usernames into the users array
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  // Add today's date in the format M/d/yyyy (for example 10/18/2026)
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

// Export the function so tests can import it either way:
//   const combineUsers = require('./index');
//   const { combineUsers } = require('./index');
module.exports = combineUsers;
module.exports.combineUsers = combineUsers;