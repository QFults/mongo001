const mongojs = require('mongojs')
const db = mongojs('animals_db')

// db.dogs.find({ name: 'Beef' }, (err, data) => {
//   if (err) { console.log(err) }
//   console.log(data)
// })

// db.dogs.insert({ name: 'Gertrude', breed: 'Pitbull', age: 3 }, (err, data) => {
//   if (err) { console.log(err) }
//   console.log(data)
// })

// db.dogs.update({ name: 'Gertrude' }, { $set: { age: 4 } }, (err, data) => {
//   if (err) { console.log(err) }
//   console.log(data)
// })

// db.dogs.remove({ name: 'Gertrude' }, (err, data) => {
//   if (err) { console.log(err) }
//   console.log(data)
// })