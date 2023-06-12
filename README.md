login:

1-Inserta apodo, clickea en iniciar sesion
    
    -Se crea una contraseña para encriptar la clave privada 
    -Se crea clave publica y privada y en ese mismo momento se la encripta con la contraseña y se la envia al session storage
    Se envia este objeto como propuesta. Si existe en el objeto clientes otra propiedad con esa clave publica se lo 

    {
    clavePublica:
            {
                apodo           : apodoIngresado
                contraseña      : xxxx,
                par             : undefined / apodo 
                state           : findingPair/Chating
                stateTimeStamp  : timeStamp (del ultimo estado)
                lastMessageTime : undefined / timeStamp (del ultimo mensaje)
            }
    }

    findingPair:            Si el now - timeStame es mayor o igual a 5 minutos se borra el usuario, alert de 3 segundos, se cierra la sesion y el front envia al login
    chating:                Si el now - timeStame es mayor o igual a 24 horas se borra el usuario, alert de 3 segundos, se cierra la sesion y el front envia al login
    lastMessageTime:        Si el now - timeStame es mayor o igual a 10 minutos se borra el usuario, alert de 3 segundos, se cierra la sesion y el front envia al login

Si alguno de los cierra la sesion, se cierran las conexiones, se borran los dos objetos y se manda las apps al login 

2-Iniciar chat: insertar apodo y clickear en boton
    -si el otro no existe espera 30 segundos y envia un mensaje de rechazo que se convierte en un alert que dice el otro usuario no existe o rechazo tu pedido de chat privado, si rechaza tambien. A los 30 segundos se envia

3-El otro tiene 30 segundos para decidir
    -Si el otro existe y acepta:
        -Modifica ambos objetos user editando su par  
        -guarda en variable en el front la clave publica del otro


4-enviar mensaje: mensaje encriptado con clave publica del otro, apodo del otro, apodo propio
    -en el servidor se busca el apodo, se chequea que su par sea el apodo del remitente en caso afirmativo se envia el mensaje al otro

5-recepcion del mensaje: mensaje encriptado con su clave publica, contraseña
    -con la contraseña se desencripta el session storage, se pide la clave privada y se desencripta el mensaje, todo en una sola linea para no persistir nada en una variable referido a una clave


