var socket = io();

        //socket.on -> A la espera de un evento
        socket.on('connect', function () {
            console.log('Conectado al servidor');
        });

        //socket.on -> A la espera de un evento
        socket.on('disconnect', function () {
            console.log('Se perdió la conexion con el servidor');
        });

        //socket.emit -> Sirve para enviar inforación
        socket.emit('enviarMensaje', {
            usuario: 'Rafael',
            mensaje: 'Hola mundo'
        }, function (resp) {
            console.log('Respuesta del servidor: ', resp);
        });

        //Escuchamos el servidor
        socket.on('enviarMensaje', function (mensajeServidor) {
            console.log('Servidor: ', mensajeServidor);
        });