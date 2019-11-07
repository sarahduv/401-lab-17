# 401-lab-17

Travis:
- https://travis-ci.com/sarahduv/401-lab-17

Heroku:
- https://sarahduv-401-lab-17.herokuapp.com/

Image:
- https://github.com/sarahduv/401-lab-17/blob/master/assets/image.jpg?raw=true

### Requirements
- Refactor the provided application (app.js) using best practices for modularization, asynchronous file access, and test-ability.
- Connect the application (app.js) to the server (server.js) and emit messages related to file access. Connect a new application (logger.js) to the server and log all file activity.

### Assignment
- Refactor app.js to be modular, testable, and clean
- Read/Write should be done in promises, not callbacks
- File Reading/Writing/Upper-casing should happen in one module
- Each operation should be in a separate function
- Alter app.js to connect to the running server using TCP
- On file errors, write an error message to the socket
- On file save, write a save message to the socket.

### Alter server.js to …
- Parse the text it receives
- Given a good “event” broadcast the event to all connected clients
- Create a new application called logger.js …
- Connect to the server
- Listen for “error” and “save” events only
- On “save”, do a console.log() with the message
- On “error” do a console.error() with the message

### Notes
- You will need to start your servers up in the right order so that you can visually test things out.
- server.js - needs to be up so that it can accept and re-emit events
- logger.js - needs to have a running server to connect to, so that it can hear events
- app.js to run and have the server hear your events

### Deployment
- Not required for this assignment

### Testing
- Write tests around all of your units
- Test event handlers (not events themselves)
- Use spies to help testing your logger methods (assert that console.log was called right)
