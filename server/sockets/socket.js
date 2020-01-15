const { io } = require('../server');

io.on('connection', (cliente) => {

    console.log('Usuario conectado');

    //Emitimos informacion al cliente
    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mesnsaje: 'Bienvenido a esta aplicación'
    })

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Esuchar al cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //Este se comunica unicamente con el servidor
        //cliente.emit('enviarMensaje', data);

        cliente.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
            //console.log(mensaje);
            callback({
                resp: 'TODO SALIÓ BIEN'
            });
        }else{
            callback({
                resp: 'TODO SALIÓ MAL'
            });
        } */

    });
});