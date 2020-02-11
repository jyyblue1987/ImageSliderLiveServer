
global.io.sockets.on('connection',function(socket){
    socket.on('teacher-login',function(data){
        socket.join('teacher_channel');
        console.log(data);
    });
    
    socket.on('student-login',function(data){
        socket.join('student_channel');
        console.log(data);
    });

    socket.on('move-slide', function(data){
        console.log(data);        
        var room = 'student_channel';
        global.io.sockets.in(room).emit('move-slide', data);
    });
})  