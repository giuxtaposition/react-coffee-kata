# 🔴🟢🔵 reactjs-tdd-kata

This kata was created by maker of **[WeDoTDD.com](https://WeDoTDD.com)**: lists companies, teams, software crafters, and coaches who TDD

This kata is meant for **_anyone_** out there in the world who wants to try it.

Take your time to read this. Don't skim it.

## Support

If there are problems or questions, feel free to reach out to Dave Schinkel by **Joining the [WeDoTDD.com Slack](https://join.slack.com/t/wedotdd/shared_invite/zt-ladr0ati-rD4bNNEx_Uu1v0pZsxZDNQ)**

# 📄 Description

This Kata is set up initially to stretch your skills by working with [React Hooks](https://reactjs.org/docs/hooks-intro.html) and [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment).

The following is already setup for you: [jest](https://jestjs.io), [React Testing Library](https://testing-library.com)

## Make this Kata what _you_ want

You don't have to use what's out of the box here. This kata is setup initially with a few nice things such as a GraphQL service to serve data to the client.

## Individuals working on this Kata

**`Do not commit changes to main/master`. Instead:**

1. If you do not have a github account, create one using your personal email
2. Create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to enable you to use as a password for github command-line (pushes, forks, etc)
3. `Fork` this repo instead of cloning it, then work on your own fork.

# 🪛 Setup

## 💻 Mac:

- Install **Homebrew**
  - run this cmd: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Install **NodeJS**: `brew install node`
- Install **Yarn**: `brew install yarn`

## 💻 Windows PC:

- Install [**NodeJS**](https://nodejs.org/en/download/) first
- Install **Yarn**
  - `npm install --global yarn`

## Finally:

- Run `yarn` (install node modules)
- **Next, be sure you can run the tests**: test scripts are in `package.json`, look there, try them

# 🧪 Tests

**The following frameworks and libs are already setup for you and ready to go**: [jest](https://jestjs.io/), [React Testing Library](https://testing-library.com)

Looking at the config of these libs or frameworks will help you understand how to set these up for your own projects.

Out-of-box test cases demonstrate the `Arrange` / `Act` / `Assert` test partitioning pattern

## Client Tests

- For React Component tests, you can use [React Testing Library](https://testing-library.com) coupled with [jest](https://jestjs.io/)
- For lower-level micro tests (below the components), you can use plain [jest](https://jestjs.io)
- these tests _**do not**_ rely on running the actual site (webpack)

### 🧪ADDING _YOUR_ TESTS

️ in this repo, `add your tests under the folder src/tests`.

### Running

Run your tests using `yarn test`

# 🏃🏻‍♀️ Run the Website (optional)

You will need two separate terminal sessions running. One to run graphql and one to run the website.

### Perform the following steps:

Run **_front-end_**: `yarn start`, then go to [http://localhost:8080](http://localhost:8080)

- Note: uses [vite](https://vitejs.dev/)

# ☕️ The Kata

_If you don't like Coffee, tough luck!_ 😭

## 📃 Description

### 🏃‍♀️🏃🏃‍♂️ It's the typical "Agile" sprint:

🌩 The sky is falling, and John 🙆‍♂️, a business stakeholder who is very close to obtaining his next career promotion, has asked you once again to _rush_ 🚑 some new features out to the new "Coffee Roasters" website, a place where people can find the very best roasters on the planet.

🚨 He has stated with a strong voice, that "We are Agile" which means the world will end as we know it if these features aren't out in 2 days. John says Agile says you should be able to deliver things fast, and that fast is all that counts.

He told you he expects "this should be easy", but if you must, please work weekends, that you must "have a sense of urgency", and expect "do whatever it takes team player attitude" or you are fired! 😱 🙀 🖕. On top of that, he expects no bugs 🐞🪲 to be found.

🔴🟢🔵

You know however, **that for many reasons, it's better to go well, never rush**. And you realize that learning and applying TDD will help you along the way.

🔨 You are a Software Artisan who cares about producing high quality software; you are here to continually improve and practice [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment), [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), [SOLID](https://en.wikipedia.org/wiki/SOLID), and the [4 Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html).

🔴🟢🔵

### **So relax, get some coffee, have fun and Good Luck!**

## 🖥 Requirements

**Implement the [following features](#-coffee-roaster-features) below** using disciplined [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment)

Implement the front-end without a real backend first (use test data and [stubs](https://martinfowler.com/articles/mocksArentStubs.html) to provide data to the front-end

## 🖥 TDD Tips

While doing this kata, keep these in mind:

- Use the feature names below as good names for your overarching test describes
- Keep each test you write for a feature `super small` in behavioral scope
- One feature should end up in `more than just one test` written to implement that feature
  - If you're ending up with just one test and calling that "good", it means you're not taking small enough steps during your TDD workflow. It means you're not practicing baby steps: you're not evolving your design for that feature in a lean fashion. Write smaller tests to get there
- Write tests that drive behavior for both `happy` and `sad` paths
-

## 📜 COFFEE ROASTER FEATURES

![beans](src/assets/coffee-beans.gif)

## Implement the following features with TDD:

## These are done for you (see examples in repo)

### `Feature #0` (degenerate case): No Roasters

### `Feature #1`: Show "Hello World"

## Finish the rest:

Remember: **small** tests; and each feature should result in **several** small tests

### `Feature #2`: Show a list of Coffee Roasters

### `Feature #3`: Clear Roasters

### `Feature #4`: Show Roaster Details

- ability to select a roaster somehow to see their detail page
- detail page should show some basic info on a couple of roasts (e.g. Dark Roast, Light Roast)

### `Feature #5`: Filter list by Roaster Name

### `Feature #6`: Show a _paged_ list of Coffee Roasters

### `Feature #7`: Go to next paged list of roasters

### `Feature #8`: Go to previous paged list of roasters list

## 🪛 Helpful Code Resources

#### Sites

**[WeDoTDD.com](https://WeDoTDD.com)** - companies, teams, software crafters, and coaches who TDD

#### Vids

- [TDD TV](https://www.youtube.com/channel/UCiRBjSlxIlt5URzgHSGhHQA)

#### Tools

- [Mocha](https://mochajs.or)
- [Chai](https://www.chaijs.com)
- [Jest](https://jestjs.io)
- [isolate-react](https://www.npmjs.com/package/isolate-react) - a newer, leaner, simpler, faster React testing lib
- [React Testing Library](https://testing-library.com)
- [Enzyme](https://enzymejs.github.io/enzyme)
- [GraphQL](https://graphql.org)
- [ExpressJS](https://expressjs.com)
- [Koa](https://stackshare.io/koa): highly recommended over ExpressJS, written by [TJ Holowaychuk](https://github.com/tj), the guy who wrote ExpressJS. He wrote this to be an improvement over ExpressJS.

#### Books

- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Test Driven Development: By Exmaple](https://www.amazon.com/Test-Driven-Development-Kent-Beck-ebook/dp/B095SQ9WP4)
- [Refactoring: Improving the Design of Existing Code (2nd Edition)](https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599)
