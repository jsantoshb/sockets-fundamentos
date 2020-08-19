
const {io} = require('../server')

io.on('connection', (client) =>{
    
    client.emit('enviarMensaje', {
        usuario:'admin',
        mensaje:'Bienvenido a esta aplicación'
    });



    client.on('disconnect', ()=>{
        console.log('Usuario desconectado') 
    });

    client.on('enviarMensaje', (message, callback)=>{
        console.log(message)
        client.broadcast.emit('enviarMensaje', message);
        // if(message.usuario)
        // {
        //     callback({
        //         message:'Todo salio bien'
        //     });
        // }
        // else{
        //     callback({
        //         message:'Todo salio MAL'
        //     });
        // }
    });
});