exports.initGame = function(sio, socket, users){
    io = sio;
    gameSocket = socket;

    gameSocket.emit('connected', { message: "You are connected!" });
    
    gameSocket.on('add-user', (user) => {
        users.push(user);
        io.sockets.emit('users', users);
    });

    gameSocket.on('request-users', (req) => {
        io.sockets.emit('users', users);
    });

    gameSocket.on('join-game', (player) => {
        let message1 = {
            player1: {'email' : player.inviterEmail, 'socketId' : player.inviterId},
            player2: {'email' : player.email, 'socketId' : player.socketId}
        };
        let message2 = {
            player1: {'email' : player.email, 'socketId' : player.socketId},
            player2: {'email' : player.inviterEmail, 'socketId' : player.inviterId}
        };
        
        io.to(player.socketId).emit('join-game', message2);
        io.to(player.inviterId).emit('join-game', message1);
    });

    gameSocket.on('score', (scoreMessage) => {
       socketId = scoreMessage.socketId;
      io.to(socketId).emit('score',scoreMessage.score);
    });
}
