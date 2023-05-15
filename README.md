# UI Testing Exercises

This repository contains a set of exercises to help you learn how to
build stable UI tests.

**NOTE: These exercises put emphasis on make the tests resillient to systems
which are a bit unpredictable. In these cases, it would be preferable to
improve the system.**

## The Plot

Some time ago, the team created some UI tests using Playwright, however,
no one quite remembers how they work. Over time, the tests have become
unreliable and the team is now struggling to maintain them. It is now
your job to stabilize the tests.

## Instructions

### Start up the web app

In a terminal, `cd` to the [web-app](./web-app/) directory and run:

```bash
yarn install
yarn build
yarn start
```

Once the app has started, you can access it at
[http://localhost:3000](http://localhost:3000).

### Setup the tests

In another terminal window, `cd` to the [tests](./test/) directory and
run:

```bash
yarn install
```

You can now run the tests using:

```bash
yarn playwright test
```

### The Exercises

You can find the tests in [tests/tests](./tests/tests).
You will notice that there are some files in there called
`exercise*.spec.ts`.

Your job is to work through the exercises in order. For each
one, remove the `.fixme` annotation from the test and make it
consistenly pass.

Note, most of these tests fail sometimes, there might be ways to
make the pass by adding more bad habits to the tests, however,
you should try to think of ways to make the tests more resilient.
