# MongoDB
## Mongo commands
database
```
db # current
use db1
```
create
```
db.collection1.insertOne()
db.collection2.insertMany()
```
read
```
db.collection1.find({}) # select all
{status: "D"} # status == D
{ status: { $in: [ "A", "D" ] } } # status == A or D
{ status: "A", qty: { $lt: 30 } } # status = "A" and qty < 30
{ $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } # status = "A" or qty < 30
{ "size.h": { $lt: 15 } } # nested documents
{ tags: ["red", "blank"] } # exact array match
{ tags: { $all: ["red", "blank"] } } # contain red and blank
{ tags: "red" } # contain red
{ dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } # one element match both conditions
{ "dim_cm.1": { $gt: 25 } } # array index
{ "tags": { $size: 3 } } # array size
```
projection
```
db.inventory.find( { status: "A" }, { item: 1, status: 1 } )
db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )
db.inventory.find( { status: "A" }, { status: 0, instock: 0 } )
```
Update one document
```
db.students.updateOne( { _id: 3 }, [ { $set: { "test3": 98, modified: "$$NOW"} } ] )
```
Set Default values
```
db.students2.updateMany( {},
  [
    { $replaceRoot: { newRoot:
       { $mergeObjects: [ { quiz1: 0, quiz2: 0, test1: 0, test2: 0 }, "$$ROOT" ] }
    } },
    { $set: { modified: "$$NOW"}  }
  ]
)
```
Average and switch case
```
db.students3.updateMany(
   { },
   [
     { $set: { average : { $trunc: [ { $avg: "$tests" }, 0 ] }, modified: "$$NOW" } },
     { $set: { grade: { $switch: {
                           branches: [
                               { case: { $gte: [ "$average", 90 ] }, then: "A" },
                               { case: { $gte: [ "$average", 80 ] }, then: "B" },
                               { case: { $gte: [ "$average", 70 ] }, then: "C" },
                               { case: { $gte: [ "$average", 60 ] }, then: "D" }
                           ],
                           default: "F"
     } } } }
   ]
)
```
Concat arrays
```
db.students4.updateOne( { _id: 2 },
  [ { $set: { quizzes: { $concatArrays: [ "$quizzes", [ 8, 6 ]  ] } } } ]
)
```
Adding fields + mapping + math
```
db.temperatures.updateMany( { },
  [
    { $addFields: { "tempsF": {
          $map: {
             input: "$tempsC",
             as: "celsius",
             in: { $add: [ { $multiply: ["$$celsius", 9/5 ] }, 32 ] }
          }
    } } }
  ]
)
```
Delete
```
db.inventory.deleteMany({}) # deletes all documents
db.inventory.deleteOne( { status: "D" } ) # delete atmost one
db.inventory.deleteMany({ status : "A" }) # multiple
```
Remove a field from every documnet
```
db.people.updateMany(
    { },
    { $unset: { "join_date": "" } }
)
```
Sort
```
db.people.find( { status: "A" } ).sort( { user_id: 1 } )
```
Count
```
db.people.count( { age: { $gt: 30 } } )
db.people.find( { age: { $gt: 30 } } ).count()
```
Distinct
```
db.people.distinct( "status" )
```
