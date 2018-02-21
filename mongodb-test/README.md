## MongoDB Installation and command

### Install mongodb in C:\mongodb>

### Create two folder C:\mongodb> mkdir data
### Create folder C:\mongodb\data> mkdir db
### Create folder C:\mongodb>mkdir log
### go to C:\mongodb\bin>

## execute
    C:\mongodb\bin>mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --logappend --install

    C:\mongodb\bin> net start mongodb

    C:\mongodb\bin> mongo
        ## mongo-shell>cls
        > show dbs
        > use mycustomers  //switch to db mycustomers
        > db //check db name 'mycustomers'

### create db user
    db.createUser({
        user: "bp",
        pwd: "1234",
        roles: ["readWrite", "dbAdmin"]
    });

### Create collection
    > db.createCollection('customers')

    > show collections

### Insert data to collection
    > db.customers.insert({
        first_name: "John",
        last_name: "Doe"
    });

    > db.customers.find();

    > db.customers.insert([
        {
            first_name: "Jane",
            last_name: "Doe"
        },
        {
            first_name: "Steve",
            last_name: "Smith"
        }
    ]);

### See the customers data in pretty format
    > db.customers.find().pretty()

### Update customers data
    > db.customers.update({
        first_name: "John"
    },{
        first_name: "John",
        last_name: "Doe",
        gender: "male"
    });

### Update specific property of customers data
    > db.customers.update({
        first_name:"Jane"
    },{
        $set: { gender: "female"}
    });

### Increment property of customers data
    > db.customers.update({
        first_name: "John"
    },{
        $set : { age: 30 }
    });

    > db.customers.update({
        first_name: "John"
    },{
        $inc: { age: 5 }
    });

### Unset or remove some property of customers data
    > db.customers.update({
        first_name: "Jane"
    },{
        $unset: { age: 1 }
    });

### Insert or Update data
    > db.customers.update({
        first_name: "Mary"
    },{
        first_name: "Mary",
        last_name: "Jane"
    },{
        upsert: true
    });

### Rename property of customers data
    > db.customers.update({
        first_name: "Steve"
    },{
        $rename: { "gender" : "sex" }
    });

### Remove or Delete customers data
    > db.customers.remove({
        first_name: "Steve"
    });

### Only delete the first matching record
    > db.customers.remove({
        first_name: "Steve"
    },{
        justOne : true
    });

### Querying Customers Data
    > db.customers.find({
        $or: [{
            first_name: "Steve"
        },{
            first_name: "Jane"
        }]
    });

    > db.customers.find({
        gender: "male"
    });

    // Age less than 30
    > db.customers.find({
        age: { $lt: 30 }
    });

    // Accessing nested property
    > db.customers.find({
        "address.city" : "Boston"
    });

    // Searching in membership array
    > db.customers.find({
        memberships : "mem1"
    });

    // Sorting Asscending
    > db.customers.find().sort({
        last_name: 1
    });

    > db.customers.find().sort({
        last_name: -1
    });

### Finding fetched records count
    > db.customers.find().count();

    > db.customer.find({ gender: "male" }).count();

### Limit number of records
    > db.customers.find().limit(4);

    > db.customers.find().limit(4).sort({ first_name: 1});

### forEach records
    > db.customers.find().forEach(function(doc){
        print("Customer Name: " + doc.first_name)
    });

