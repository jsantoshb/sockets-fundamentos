var  socket = io();
socket.on('connect', function(){ 
    console.log('Conectado al servidor')
})

socket.on('disconnect', function(){
    console.log('Se perdio la conexión al servidor')
})

socket.emit('enviarMensaje', {
    usuario:'Javier',
    mesaje:'Hola'
}, function(resp){
    console.log('respuesta server: ', resp)
})

socket.on('enviarMensaje', function(message){
    console.log(message)
})