const EventEmitter = require('events')
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send an Http request
        console.log(message);
        //Raise an event
    this.emit('messageLogged',{id: 1, url: 'http://url'})
    }

}

module.exports = Logger;

