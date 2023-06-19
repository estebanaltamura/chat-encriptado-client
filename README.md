La app esta basada en un estado statusConnection en el contexto webSocketConnectionProvider y el estado publicKeys en el contexto publicKeysProvider

Reglas duras de cierre: 
    Cerrar para el front significa redddireccionar conlocation.href lo borra todos los estados y contextos. ConecctionStatus al cargar desde cero toma el estado de "offline" y publicKeys toma el valor inicial {from: null, to: null}

    Cerrar para el servidor es borrar el usuario dentro del objeto de usuarios
    

ESTADO PUBLICKKEYS
valor inicial: {from: null, to: null}

ESTADO CONECCIONSTATUS
Valor inicial: "offline"

connectionStatus va reflejando diferentes estadios posibles de la conexion:
    -offline
    -online
    -userRegistered
    -chating

offline: La conexion con el servido no fue establecida aun

online: La conexion fue establecida

userRegisted: Un usuario fue creado en el servidor, persistiendo el apodo, la clave publica y otros datos

chating: Dos usuarios se emparentaron mediante la invitacion de uno al otro y estan chateando. Cuando se emparentaron el servidor persistio en cada usuario en la propiedad "to" la clave publica del otro

El caminbo feliz es:
Login => Pairing => Chating
De login a pairing:
-App empieza en login, publicKeys null (connectionStatus: offline)=>
-Se invoca a la funcion connectWebSocket del context webSocketConnectionProvider =>
-Cuando conecta cambia el estado (connectionStatus: online) y capturando ese cambio de estado con un useEffect se envia como argumento un objeto creado con los datos del usuario en   la funcion createUser de websockeckConnectionProvider=>
-El servidor crea el usuario y devuelve un mensaje para que front lo tome y cambie el estado de connectionStatus a "userRegistered" y genera un reenvio a la pantalla findingPairing








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



no persisti el context  en el evento unloading en el local storage por que de frla conexion web socket se cae
                                                  


