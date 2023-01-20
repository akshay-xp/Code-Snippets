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
```
