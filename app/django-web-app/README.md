Note: Dreamtune folder consists of all Django settings for the Dreamtune project.
      Dream-app folder consists of all code related to the lead generation app.

Apps exist within projects. This way we can configure multiple apps as we branch out
and add support for mobile etc.

Testing notes:
<<<<<<< HEAD
Add tests to the testing folder. Should be named by "{language}_tests". Add a corresponding entry to GitHub actions IMMEDIATELY.

For Developers:
All "edits" must be made on a separate git branch to preserve github action credits. Failure to do so may result in a personal fine.
=======
Add tests to the testing folder. Tests should be added in a folder named by "{language}\_tests" where language corressponds to the language the TESTS are written in (since the entire app is written strictly in Django/python3). Add a corresponding entry to GitHub actions IMMEDIATELY and label the workflow name appropriately.
>>>>>>> 3130c7ecbcf4794d7dd24ecf9b16b3e187cdb2ec
