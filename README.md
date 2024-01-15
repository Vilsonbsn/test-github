First thing to do would be to config all the resources files

```bash
vi ./resources/db.json
```
All the connection data are stored at this file.

```bash
vi ./resources/config.json
```

There's an option to config the type of store
- db -> it will be stored at postgres
- anything else will store into a local file

```bash
vi ./resources/file.json
```

Config the output file to print the results.

1. GitHub API

Fetch information about a given GitHub user (passed as a command-line argument) using the [GitHub API](https://docs.github.com/en/rest), and store it on one or more database tables - the mandatory fields are Name and Location, but you will get bonus points for additional fields;

```bash
node ./src/fetch.js
```

The whole response of the API is stored at the database as an json.

2. Display

Using a different command-line option, it should be possible to fetch and display all users already on the database (showing them on the command line);

```bash
node ./src/display.js
```

3. Filter by location

Improving on the previous requirement, it should also be possible to list users only from a given location (again, using a command-line option);

```bash
node ./src/location.js
```

4. Filter by language or location

Finally, the application should also query the programming languages this user seems to know/have repositories with, and store them on the database as well - allowing to query a user per location and/or programming languages;

```bash
node ./src/language.js
```

or

```bash
node ./src/both.js
```
