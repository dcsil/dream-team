Note: Dreamtune folder consists of all Django settings for the Dreamtune project.
      Dream-app folder consists of all code related to the lead generation app.

Apps exist within projects. This way we can configure multiple apps as we branch out
and add support for mobile etc.

Testing notes:
Add tests to the testing folder. Tests should be added in a folder named by "{language}\_tests" where language corressponds to the language the TESTS are written in (since the entire app is written strictly in Django/python3). Add a corresponding entry to GitHub actions IMMEDIATELY and label the workflow name appropriately.
