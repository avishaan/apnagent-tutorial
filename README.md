iOS APN Example
====================

The following is an example to get you up and running with apnagent. It is based
off of the engineyard tutorial. There are a lot of tutorials but they are either
a couple years old or are a comprehensive app. This is meant to help you get quickly
up and running so you can play around with APN.

Why Another Tutorial?
---------------------------------
The other tutorials on this are too verbose. This is meant to be a quickstart version
of the original tutorial. Also, the old tutorial hadn't been updated in a while which
made it difficult to follow along. Even getting setup with the certs and appID have changed
a lot since then!

Install/Setup Steps
--------------------
1. Clone the repo to your local directory.
2. Have your device token ready
3. `npm install` to make sure the dependencies in package.json is installed
4. Edit device.js and replace it with your token
5. Replace the pfx.p12 file in the _certs/ directory with your .p12 file
6. Make sure you get a connection with `node agent/_header.js`
  - if you don't get 'apnaagent [sandbox] gateway connected' you need to troubleshoot
7. Once that is ok, send a message with `node agent/hello.js`
8. Now that you are up and running check out the original docs here. http://apnagent.qualiancy.com/


Todo
---------------------------------
- [ ] Walkthrough of how to install the test app for testing notifications
- [ ] Walkthrough of how to get the correct certs and token for testing purposes
