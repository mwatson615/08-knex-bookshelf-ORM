# 08-knex-bookshelf-ORM

A.  Exercise

Let's create a database, fill it with useful tables, and then knock the whole thing down again.

First create a directory for your knex sand castle and cd into it mkdir knex-sandcastle && cd $_

then npm init and install some dependencies npm install --save pg knex

using your psql console, CREATE DATABASE sandcastledb; HINT: don't forget the ";" at the end of the statement, and avoid capital letters.

knex init, and update your knexfile.js to use your sandcastledb.

knex migrate:make add_first_table, put a table in the exports.up, and then drop the table in exoprts.down. What kind of table? How about some monsters (monsters like attacking castles). Monsters have names, unique id's, and any other descriptive columns you feel like adding.

Now- run knex migrate:latest and check to see if your "monsters" table has been added to your database using pgAdmin or your psql terminal.

It looks awesome? Let's get rid of it! knex migrate:rollback and check to make sure that table is gone.

All done! Just kidding...

Try it again. Make another migration to add a second table to your database. How about some heroes to fight off those monsters? Run knex migrate:latest and knex migrate:rollback a couple of time to see how the two different migration intereact with each other and the databse.

now and forever whenever you make a change to your database, you can migrate:latest, you can migrate:rollback, or you can migrate:make new_migration. Do not change a migration file that has already been made, or you will be sad 😢.

Bonus

Create another migration that adds a new column to your hero table
Create yet another migration that adds a weapons table to your database. The weapons should have names and should have a many to many relationship with your heroes.

B.  Exercise

Remember that sandcastle database we made in the previous exercise? Go ahead and run those migrations so that our tables exist, and let's seed them with data.

Create a seed file for your monsters and add at least three monsters to your database.
Create a new seed file for your heros and add those guys to the databse.
Confirm your seeded data has made it into the database by checking pgAdmin or psql.
Create a new table called "battles" that includes a unique id, a location, a hero id (foreign key), and a monster id(foreign key).
Create and run a seed file to seed your new battles table.
Have fun storming the castle.
Bonus

Seed your weapons table.

C.  Exercise

Create an index.js in which you require knex and bookshelf and link them together as shown above
Add models for Hero, Monster, and Battle, making sure to specify their relationships
Create at least one new hero, one new monster, and one new battle and add them to your database using the models
Add a "findByName" method to your Hero model, and use it to query the databse and console.log your hero's id.
Using a hero's id, console.log a list of all the battles that your hero has fought.
Create a collection for your monsters and then turn them all into JSON before printing their names to the console.
Bonus

Create a Weapon model with relationships and add the weapon relationship to your hero table.
Write a query that returns all weapons associated with a particular hero.
Write a query that returns all of the heros that have used a particular weapon.

D.  Queries with ORMS

Once you have your models set up, writing queries in bookshelf is simpler than writing queries in raw SQL.

Check out the following examples.

//SQL
SELECT * FROM monsters

//Bookshelf (after a model has been created)
Monster.forge().fetchAll()

//Bookshelf (after a collection has been created)
Monsters.forge().fetch()

Helpful tip: If you pass debug: true as one of the options in your initialize settings, you can see all of the query calls being made. You can do this in the development section of your knexfile:

development: {
  client: 'pg',
  debug: true,
  connection: 'postgres://localhost/foo',
  migrations: {
    directory: __dirname + '/db/migrations'
  }
}
Then, on each request you will get an output in your terminal that looks something like this:

{ method: 'select',
  options: {},
  timeout: false,
  cancelOnTimeout: false,
  bindings: [],
  __knexQueryUid: '0aa7bb57-0182-46e9-9275-97c0120d8c85',
  sql: 'select * from "shows"' }
  
  E.  Exercise Part Two

Really, the reason we register our models is so that we can require and use them in other files. And, really, the reason we write node is because we love modularity, something that this code has been lacking so far.

So....

mkdir models
touch models/heros.js
touch models/monsters.js
touch models/battles.js
Let's move each model into its own file. There will be a few bumps on this road, but you're a capable individual who can figure things out.
Leave the queries you've already written in the index.js and confirm that they still run as expected when your models are broken into their own files.
Bonus

Create a file db/bookshelf.js file that contains all of the info you need to instantiate bookshelf and export it, so that you can simply const bookshelf = Require('../db/bookshelf') and you don't have to include the set up for bookshelf in all of your individual models.

F.  Exercise

Create a many-to-many relationship in your code for one of the earlier exercises. Maybe a Hero can fight in many Battles, and a Battle can be fought by many Heroes. Or Heroes can use many Weapon types and Weapons can be used by many Heroes.
Use knex to create a schema for a join table.
Use Bookshelf to define models that have a many-to-many relationship through a new model for the join table schema.
