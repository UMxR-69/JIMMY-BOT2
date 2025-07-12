exports.registerUserLFM = (p) => {
    return `Olvidaste colocar el usuario de LastFM después del comando. ¡Recuerda sincronizar con Spotify!`
}

exports.ErrorBaileys_401 = () => {
    const responses = [
        "Hubo una desconexión, vuelve a escanear el QR si es necesario... ¡Estoy reiniciando!",
        "Mi sesión se desconectó, ¿puedes reconectar y escanear el QR otra vez? ¡Generando código QR!",
        "¿Me desconectaste? La sesión debe escanearse de nuevo... ¡Estoy reiniciando!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.ErrorBaileys_408 = () => {
    const responses = [
        "La sesión sufrió un timeout, recargando...",
        "Se agotó el tiempo de respuesta, recargando...",
        "Recargando la sesión debido a un timeout..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.ErrorBaileys_411 = () => {
    const responses = [
        "La sesión guardada no coincide con la conexión, reiniciando sesión...",
        "El archivo de sesión parece incorrecto, intentando recargar...",
        "Error al conectar, la sesión parece incorrecta, recargando..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.ErrorBaileys_428 = () => {
    const responses = [
        "La conexión se cerró, ¿tu internet se cayó? Intentando reconectar...",
        "No se pudo mantener la conexión con WhatsApp, intentando de nuevo...",
        "Parece que tu conexión con WhatsApp cayó, reconectando..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.ErrorBaileys_440 = () => {
    const responses = [
        "Otra sesión de WhatsApp Web fue abierta en mi número, ciérrala...",
        "¿Tienes otra sesión de WhatsApp en mi número? Ciérrala para usar este...",
        "Hay demasiadas sesiones de WhatsApp conectadas en mi número, ciérralas..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.ErrorBaileys_500 = () => {
    const responses = [
        "La sesión parece mal configurada, intentaré reconectar...",
        "Se hará una reconexión porque la sesión se consideró incorrecta...",
        "La sesión parece incorrecta, la conexión será reiniciada..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.ErrorBaileys_515 = () => {
    const responses = [
        "Estoy reiniciando porque la sesión pidió actualización...",
        "El sistema solicitó reinicio, lo hago automáticamente...",
        "Mi código será reiniciado para estabilizar la conexión..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.open = () => {
    const responses = [
        "Sesión abierta con WhatsApp-Web con éxito. Próximos logs abajo:",
        "Conectado exitosamente a WhatsApp-Web. Próximos logs abajo:",
        "Sesión cargada con éxito, próximos logs abajo:",
        "Online, conexión estabilizada con éxito, próximos logs abajo:"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.connecting = () => {
    const responses = [
        "Inicializando o reiniciando el sistema, espera un momento...",
        "Un segundo, estoy cargando la información necesaria.",
        "El bot está iniciando, carga en progreso, aguarda...",
        "¿Ya tomaste un vaso de agua hoy? Si no, ve por uno. Iniciando bot...",
        "¡Hola, bonito! Ya estoy arrancando, calma un poco..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.blackList = (GroupMetadata_, sab2) => {
    const participant = sab2.participants[0].split("@")[0];
    const responses = [
        `*@${participant}* fue removido de *${GroupMetadata_.subject}* por estar en la lista negra...`,
        `¡Mira quién volvió! *@${participant}* pensó que no te vería de nuevo, tonto(a) 💅🏻`,
        `*@${participant}* pensó que pasaría desapercibido, ¡error! Bye bye... 😵‍💫`,
        `😨 ¡Oh Dios! *@${participant}* acaba de ser baneado del grupo por estar en la lista negra.`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.phrasesLeft = (sab2, encodeURIComponent) => {
    const responses = [
        "¿Brindamos por su partida?",
        "Menos uno en esta industria vital...",
        "Nada que ver aquí, se fue por 'accidente'..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.promoteUser = (usern) => {
    const responses = [
        `🍻 @${usern.split("@")[0]} fue promovido a administrador del bar.`,
        `¡Atención! Un nuevo administrador ha sido agregado. 🍻🤪 Felicidades @${usern.split("@")[0]}!`,
        `¡Un extraterrestre nuevo en la administración! 👽 Felicidades @${usern.split("@")[0]}!`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.rebaixarUser = (usern) => {
    const responses = [
        `🗣️ ¡Esperé tanto por este día! @${usern.split("@")[0]} fue degradado a miembro común.`,
        `👋🏼 Adiós @${usern.split("@")[0]}! Mala elección para admin en este bar decadente... Besos!`,
        `🥱 No es el martillo de Thor, es el juicio final para @${usern.split("@")[0]}: pierde el admin.`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.phrasesWelcome = (mdata_2, sab2, encodeURIComponent) => {
    const responses = [
        `al grupo ${encodeURIComponent(mdata_2.subject)}`,
        "Un nuevo integrante cayó de sorpresa en el grupo...",
        "Lee las reglas y diviértete!",
        "Otro más en esta industria vital...",
        "¿Quieres un té mientras lees las reglas?",
        "Saludos nuevo miembro, aquí la gerente del lugar!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

exports.wait = () => {
    const responses = [
        "Estamos alimentando el motor de la creatividad con ideas frescas. ¡Un momento más! 🚂",
        "Los algoritmos bailan sincronizados para hallar la respuesta perfecta. Aguarda un instante. 💃",
        "Los piratas de la información desentierran el tesoro que pediste. ¡Casi listo! 🏴‍☠️",
        "Conectamos los puntos en el mapa del conocimiento. Tu respuesta viene en camino. 📍",
        "Los supercomputadores compiten para resolver primero. Sólo un segundo más. 🖥️",
        "Cosiendo tu respuesta con hilos de datos. Ya casi terminamos. 🪡",
        "Los unicornios del aprendizaje cruzan el arcoíris de la sabiduría. ¡Casi llegamos! 🌈",
        "Sincronizando el reloj del tiempo para traer la solución exacta. Espera un poco más. 🕰️",
        "Los cohetes cargan tu pregunta para el próximo nivel. Casi en órbita. 🚀",
        "Exploramos cavernas ocultas del conocimiento. ¡Volvemos pronto! 🗻",
        "Los truenos de la innovación retumban. La respuesta vendrá como un rayo. ⚡",
        "Los enigmas se desdoblan en el laberinto de información. ¡Ya casi salimos! 🌀",
        "Los pingüinos del raciocinio lógico marchan hacia la respuesta. Sólo un poquito más. 🐧",
        "Nos sumergimos en el océano de datos. La respuesta sube a la superficie. 🌊",
        "Los ingenieros del procesamiento ajustan los últimos tornillos. Un momento más. 🔧",
        "Captamos ondas radiointerstelar para traer la mejor solución. Sintonizando... 📡",
        "Los conejos de la eficiencia saltan para acelerar el proceso. Casi listo. 🐇",
        "Los planetas se alinean para tu respuesta. Casi ahí. 🌍",
        "Los alquimistas digitales refinan el elixir de la sabiduría. Un poco más de paciencia. 🧪",
        "Buscamos en el baúl de los recuerdos para encontrar la respuesta. Volvemos pronto. 🗝️",
        "Los mecánicos del universo reparan las ruedas del tiempo. Sólo un instante más. ⚙️",
        "Los astrónomos mapean constelaciones para la precisión de la respuesta. Casi listo. 🌟",
        "Programamos una danza sincronizada de bits para la solución. Presta atención. 💻",
        "Los bardos del conocimiento escriben una canción épica para tu respuesta. Aguarda el final. 🎵",
        "Los ninjas digitales atraviesan barreras invisibles para llegar a ti. Sólo un poco más. 🥷",
        "Los inventores prueban su última creación para la respuesta ideal. Tranquilo. 🛠️",
        "Los osos polares caminan por el Ártico del procesamiento. La respuesta llega. 🐻‍❄️",
        "Construimos un castillo de ideas para tu pregunta. Un momento más. 🏰",
        "Los superhéroes de la lógica salvan el día. Tu respuesta viene. 🦸‍♂️",
        "Cocinamos ideas en el caldero de la sabiduría. Sólo un poco más. 🍵",
        "Los científicos testean hipótesis para la solución exacta. Aguarda. 🔬",
        "Por favor espera, los comandos son verificados en varios sistemas para evitar errores, es común que demoren, gracias por esperar! 🕒",
        "Entendido, amor, espera mientras hago esto, puede tardar un poco, evita usar comandos pesados hasta que termine, gracias! <3 🌈",
        "Espera un momento mientras preparo la poción mágica de datos! 🧙‍♂️",
        "Viajamos a la velocidad de la luz para buscar la información solicitada. Aguarda un poco! 🚀",
        "Reorganizamos la biblioteca de Alejandría para encontrar la respuesta. Aguarda, por favor! 📚",
        "Mientras tanto, Darth Vader intenta encontrar el camino en el lado oscuro de la Fuerza. Aguarda! ⚔️",
        "Cultivamos las respuestas con cuidado en nuestro jardín del conocimiento. La paciencia es virtud! 🌱",
        "Contamos los granos de arena en todas las playas del mundo para hallar la respuesta. Aguarda pacientemente! 🏖️",
        "Enseñamos a las palomas mensajeras para traer tu respuesta. Aguarda, están en entrenamiento! 🕊️",
        "Damos un trato al hámster del procesamiento. Está por terminar de correr en la rueda! 🐹",
        "Esperamos que los minions terminen de trabajar. Son algo torpes pero dedicados! 👷‍♂️",
        "Calma, voy lo más rápido posible! Unos segundos más y estaremos listos! 🏎️",
        "Pongo mis bits a trabajar! Puede tardar un poco, aprovecha para tomar un café! ☕",
        "Invoco mis poderes mágicos de procesamiento! Como esperar la varita mágica, sólo un poco más! 🪄",
        "Sujeta tus emociones! Casi listo, mientras tanto, cuenta ovejitas? 🐑",
        "No me abandones ahora! Trabajo duro para algo increíble. Sólo un poco más! 💪",
        "Pido refuerzos a mis colegas códigos para acelerar! Gracias por la paciencia! 😊",
        "Respira! La maratón de bits casi termina. Espera un poco más... 🏁",
        "Hago lo mejor para no hacerte esperar mucho! Mientras, piensa en cuantos bytes hay en el universo. 🤔",
        "Los hámsters en mis servidores corren más rápido para acelerar! 🐹",
        "Los bytes bailan vals mientras procesamos tu solicitud. Un momento! 🎻",
        "Calibramos el telescopio para encontrar la respuesta en las estrellas. Un poco más! ✨",
        "La respuesta pasa por el detector de calidad. Casi lista! 🛠️",
        "Dibujamos tu respuesta a mano, con todo el cuidado. Un poco más! 🎨",
        "Organizamos un desfile de ideas para hallar la más brillante. Un instante! 🎭",
        "Los astronautas del conocimiento flotan en el espacio buscando solución. Casi! 🧑‍🚀",
        "Construimos el puente perfecto para llegar a la respuesta. ¡Aguanta! 🌉",
        "Los arqueros de la información apuntan al blanco correcto. Un poco más! 🎯",
        "Sacamos la respuesta del sombrero del mago. Prepárate! 🎩",
        "Los robots recargan baterías para seguir trabajando. Volvemos pronto! 🔋",
        "Subimos una montaña de datos para traer la respuesta de la cima. Un momento! 🏔️",
        "Los detectives de lógica analizan pistas. Casi allí! 🔍",
        "Atravesamos un laberinto digital para hallar la salida correcta. Espera! 🏛️",
        "Los bailarines de algoritmos aceleran el ritmo. La respuesta viene! 💃",
        "Los ingenieros refuerzan las bases del conocimiento. Un segundo! 🏗️",
        "Desciframos mensajes encriptados para la solución. Casi listo! 🔐",
        "Los artistas del raciocinio esculpen la respuesta con precisión. Un momento! 🗿",
        "Exploramos la selva del saber para algo especial. Aguarda! 🌴",
        "Los caballeros de la lógica protegen la respuesta en su camino. Ya viene! 🛡️",
        "Probamos cada combinación para entregar la mejor solución. Espera un poco! 🔢",
        "Los cohetes de inteligencia artificial se preparan para despegar. Listo para el impacto! 🚀",
        "Afinamos instrumentos para la sinfonía perfecta de respuestas. Ya empieza! 🎼",
        "Los mineros de datos extraen los mejores insights. Un momento! ⛏️",
        "Exploradores submarinos bucean en el océano digital. La respuesta sube! 🐋",
        "Los guardianes del conocimiento liberan el portal. Casi! 🛡️",
        "Los faros de sabiduría iluminan el camino. La respuesta casi se ve! 🏮",
        "Corremos contra el tiempo para traer la respuesta. Un instante! ⏳",
        "Los programadores del destino compilan el código solución. Espera! 👨‍💻",
        "Los acróbatas de la lógica equilibran ideas para hallar la mejor. Aguarda! 🎪",
        "Los científicos locos ajustan sus inventos. Un momento! 🧪",
        "Los corredores de la creatividad llegan a la meta. Tu respuesta ya viene! 🏃",
        "Los pescadores de datos tiran redes llenas de información. Ya llegan! 🎣",
        "Afilamos las espadas del análisis para cortar directo a la solución. Un momento! ⚔️",
        "Los constructores del pensamiento finalizan tu respuesta. Espera! 🛠️",
        "Los relámpagos de inteligencia encienden ideas. La respuesta casi está! 🌩️",
        "Activamos modo turbo para terminar rápido. Ya la entregamos! 🏎️",
        "Los magos de respuestas hacen trucos avanzados. Casi listo! 🧙",
        "Los superhéroes de la sabiduría corren a salvar el día. Prepárate! 🦸",
        "Los navegantes de estrellas ajustan telescopios para la respuesta. Un instante! 🔭",
        "Los alpinistas de ideas escalan la creatividad. La respuesta casi está! 🧗",
        "Los samuráis de la precisión pulen detalles finales. Aguanta! 🗡️",
        "Sintonizamos antenas gigantes para captar ondas correctas. Ya llega! 📻",
        "Los maestros del tiempo sincronizan cada segundo para no tardar más. Paciencia! ⏲️",
        "Los gnomos de la información trabajan tras bambalinas. Piden un minuto más! 🤏",
        "Ajustamos tornillos de la máquina del tiempo para la solución perfecta. Aguanta! ⏳",
        "La magia ocurre tras bastidores. Un instante y listo! 🪄",
        "Los robots cambian pilas para seguir trabajando. Volvemos! 🤖",
        "Alineamos planetas para que todo salga perfecto. Aguarda! 🪐",
        "Los elfos tecnológicos revisan últimos detalles. Tu paciencia será premiada! 🧝",
        "El reloj gira más rápido para que esperes menos. Un instante! ⏰",
        "Estamos en la fila de creatividad para la mejor idea. Un segundo! 🎯",
        "Tejemos tu respuesta hilo a hilo, como una obra maestra. Un poco más! 🧵",
        "La respuesta cruza el multiverso. Casi llega! 🌌",
        "Los bits resuelven un enigma. Cuando terminen, tu respuesta estará! 🧩",
        "Navegamos aguas desconocidas para hallar la solución perfecta. Ajustando velas! ⛵",
        "Los dragones de sabiduría vuelan en busca de solución. Un poco más! 🐉",
        "Desciframos runas antiguas para descubrir lo que necesitas. Casi listo! 🔮",
        "Los datos giran como ruleta de casino. En cualquier momento, respuesta! 🎰",
        "Revisamos cada detalle como detectives buscando pistas. Aguanta! 🕵️‍♂️",
        "La respuesta atraviesa portal interdimensional. Casi llega! 🌌",
        "Configuramos cables de internet intergaláctica para traer lo pedido. Aguarda! 🌐",
        "Los alquimistas terminan la fórmula secreta. Un instante! ⚗️",
        "Apilamos bloques de información como Tetris. Quedan pocas piezas! 🧱",
        "Los vientos de sabiduría soplan a nuestro favor. Ajustamos velas! 🌬️",
        "Calentamos turbinas de creatividad. Presta atención, lanzamiento inminente! 🚀",
        "Los trolls del conocimiento cruzan un puente para traer respuesta. Un poco más! 🌉",
        "Organizamos estrellas para entregar mensaje perfecto. Controla la emoción! ✨",
        "Los pájaros del entendimiento traen novedades. Un instante! 🐦",
        "La respuesta escala el Everest del conocimiento. Pronto estará en tus manos! 🏔️",
        "Desciframos códigos misteriosos para la solución. Sólo segundos! 🧑‍💻",
        "Los robots hacen mantenimiento mientras procesan tu pedido. Ten paciencia! 🤖",
        "Los circuitos se calientan de tanto trabajar. La respuesta casi lista! 🔥",
        "Cocinamos la respuesta a fuego lento para sabor perfecto. Un poco más! 🍲",
        "Los magos de la información ajustan trucos. Prepárate para la revelación! 🎩",
        "Pulimos pixeles para que tu respuesta sea impecable. Un momento! 🖌️",
        "Los exploradores trazan camino para la solución. Casi en destino! 🗺️",
        "Mezclamos colores en la paleta del conocimiento. Obra maestra casi lista! 🎨",
        "Los ninjas del saber en misión secreta para la respuesta. Rápidos y cuidadosos! 🥷",
        "Escribimos la respuesta con plumas de oro. Un instante! ✍️",
        "Los antiguos nos enviaron un pergamino. Desciframos el mensaje! 📜",
        "Alineamos satélites para captar mejor solución. Aguanta! 🛰️",
        "Los leones del raciocinio rugen por el camino correcto. Unos segundos! 🦁"
    ]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyAdmins = () => {
response = [
    'No eres administrador del grupo, actualmente solo eres un miembro más del desorden, ¡así que no tienes el privilegio de usar comandos administrativos! 🧙🏼‍♀️🌟',
    '¡Cómo te atreves a usar un comando que no tienes el don de usar! *Solo los administradores del grupo tienen acceso...*',
    '*¿Quién eres tú en la fila del pan?* ¡Ponte en tu lugar! Este comando es solo para seres superiores (admins) del grupo...',
    'No eres uno de los adimiradores, ¿serás digno algún día de usar esto?',
    'Uy, un campesino queriendo usar comandos de alta patente del grupo. Este comando es solo para seres superiores, ¡los administradores del bar! 🍻🥴',
    'Ojalá te autorizara a usar comandos administrativos sin formar parte de la organización del barcito. 🍻',
    'Este comando es restringido solo para administradores, dueño del grupo, mi jefe o moderadores. Quizás algún día estés en alguna de estas listas.'
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyOwner = () => {
response = [
    '💫👮🏻‍♀ No tienes ningún derecho a usar este comando, ¡solo mi propietario tiene el poder total de usarlo!',
    'Hola intruso, ¡esta es un área restringida! Solo personas autorizadas tienen el poder de usarlo – como yo y mis jefes, ¡nadie más está permitido aquí! 👮🏻‍♀💫',
    'No formas parte de la organización del bot, ¿cómo quieres usar una función más allá de tu poder señor(a)? 🧐🍻'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroup = () => {
response = [
    'Lo siento amiguito, pero solo un grupo tiene derecho a usar este comando...',
    '¿Cómo quieres usar un comando de grupo en privado? 🧐 Este comando solo se puede usar en grupos...',
    'Fui configurada para que este comando solo se ejecute en grupos. Por favor, no insistas en usarlo de nuevo, ya fuiste avisado...',
    'Hola, ¿todo bien? Esta función está reservada para grupos. Si quieres usarla, solo agrégame (con permiso de mi querido propietario) y contacta con él para saber sobre grupos oficiales (si los hay).️'   
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyPremiumUser = () => {
response = [
    '¿Quién eres? 😵‍💫💫 No eres un usuario premium, para usar este comando debes ser un usuario VIP del bot. Obtén el premium contactando a mi dueño señor(a).',
    '🌟 *No tienes suficientes poderes para usar comandos de la lista VIP.* Para usar estos comandos debes contactar con mi propietario y negociar tu acceso premium...',
    'Este comando es exclusivo para usuarios en la lista premium. Aún no tienes poder suficiente para usar funciones VIP.'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyBotAdmin = () => {
response = [
    '¿Cuándo te dijeron que puedo ejecutar comandos administrativos sin ser administradora del grupo? Ponme en el puesto de fiscal del grupo, porque algunas funciones dependen del cargo de admin...',
    '🍻👮🏼‍♀️ ¡Todavía no trabajo en la seguridad del bar! Para contratarme, ponme como administradora del grupo y haré mi trabajo sin interrupciones.',
    '¡Ve despacio! No soy administradora para ejecutar ciertas funciones en el grupo...'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroupFun = (prefixo) => {
response = [
    `🤹🏻‍♀️ - ¿Quieres usar comandos de diversión en tu grupo? Es necesario activar ${prefixo}modobrincadeira para habilitar todos los comandos de interacción y diversión para los participantes. (Nota: Solo seres superiores a los campesinos tienen autorización para activar).`, 
    `El modo diversión no está activo actualmente en el grupo, solicita a un administrador que lo active... 🫤 Para habilitarlo, ejecuta el comando: *${prefixo}modobrincadeiras 1*.`
  ];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyPrivate = () => {
response = [
    '🔐 Hola, el comando solo está disponible para uso en conversaciones privadas...',
    '😵‍💫🌟 Hola, el comando solo está habilitado en conversaciones privadas. Pero ten cuidado al llamarme en privado, mi dueño(a) puede haber activado el anti-pv.'
]
return response[Math.floor(Math.random() * response.length)];
}


exports.bannedUser = () => {
response = [
    'Has infringido una cláusula de mis términos y condiciones de uso, por eso estás baneado de usar mis comandos por tiempo indefinido...️',
    'Estás impedido de usar mis comandos, es decir, estás bloqueado por tiempo indefinido hasta que mis superiores cambien de opinión... 😭👋🏼',
    '*¡Dios mío!* 😱 Debes haber dejado muy enfadado a mi dueño para que te banee de usar mis comandos...'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  response = [
    `⚠️ Hola @${mentionUser.split('@')[0]}, estás siendo baneado(a) del grupo. Porque tienes un DDD prohibido aquí!`, 
   `🪦 Hola @${mentionUser.split('@')[0]}, te informo que estás siendo baneado(a) porque posees un número con un DDD de un estado prohibido en este grupo.`,
   `👺 ¡Fuera de aquí! Números con el DDD ${extractDDD(mentionUser.split('@')[0])} no son bienvenidos en este grupo.`,
   `😾 Oye, tú ni los que tienen el DDD ${extractDDD(mentionUser.split('@')[0])} son bienvenidos en este barcito aquí!`
    ];
  return response[Math.floor(Math.random() * response.length)];
}

exports.errorConvertSticker = () => {
return 'Error al convertir el medio enviado en sticker. Por favor, intenta de nuevo más tarde... 👍🏽😉';
}

exports.errorCommandLink = () => {
return 'Asegúrate de que este es el enlace correcto para usar en el comando.';
}

exports.playResult = (data, dataAudio) => {
  return `• Título: *${data.resultado[0].title || dataAudio.resultado.title}*\n• Descripción: *${data.resultado[0].description || "No encontrado."}*\n• Duración: *${dataAudio.resultado.duration || data.resultado[0].timestamp || "No encontrado."}*\n• URL del video: *${data.resultado[0].url || dataAudio.resultado.videoUrl}*\n—\n• Visualizaciones: *${dataAudio.resultado.views.replaceAll("visualizações", "").trim() || data.resultado[0].views || "No encontrado."}*\n• Canal: *${data.resultado[0].author.name}*\n• Publicación: *${dataAudio.resultado.uploadDate || "No encontrado."}*`
}

exports.playResult2 = (data) => {
  return `• Título: *${data.resultado[0].title}*\n• Descripción: *${data.resultado[0].description || "Sin descripción."}*\n• Canal: *${data.resultado[0].author.name}*\n• Duración: *${data.resultado[0].timestamp}*\n• URL del video: *${data.resultado[0].url}*`
}

exports.syntaxDownloadMusic = () => {
return `Por favor, ingresa el título de una canción o video.`
}

exports.smartphoneInfo = (listPhones, detailsPhone) => {
return `• Nombre: *${listPhones[0].title}*\n• Disponibilidad: *${detailsPhone["Disponibilidade"]}*\n• Dimensiones: *${detailsPhone["Dimensoes"]}*\n• Peso: *${detailsPhone["Peso"]}*\n–\n⚙️ *Especificaciones Técnicas:*\n• Sistema Operativo: *${detailsPhone["Sistema_Operacional"]}*\n• Chipset & Procesador: *${detailsPhone["Chipset"]} - ${detailsPhone["Processador"]}*\n• Resistente al agua? *${detailsPhone["Resistencia_a_agua"] === false ? "No" : detailsPhone["Resistencia_a_agua"] === true ? "Sí" : "No"}*\n• Dual SIM? *${detailsPhone["Dual_Sim"] === false ? "No" : detailsPhone["Dual_Sim"] === true ? "Sí" : "No"} (${detailsPhone["Sim_Card"]})*\n• Velocidad 5G (Datos móviles): *${detailsPhone["5G"] === false ? "No" : detailsPhone["5G"] === true ? "Sí" : "No"}*\n• GPU: *${detailsPhone["GPU"]}*\n• Almacenamiento máximo: *${detailsPhone["Memoria_Max"]}*\n• Memoria RAM: *${detailsPhone["RAM"]}*\n• Almacenamiento expandible: *${detailsPhone["Memoria_Expansivel"] === false ? "No" : detailsPhone["Memoria_Expansivel"] === true ? "Sí" : "No"}*\n–\n📱 *Especificaciones de la pantalla:*\n• Pulgadas (Tamaño): *${detailsPhone["Polegadas"]}*\n• Resolución: *${detailsPhone["Resolucao"]}*\n• Densidad de píxeles: *${detailsPhone["Densidade_de_pixels"]}*\n• Protección en la pantalla? *${detailsPhone["Protecao"] === false ? "No" : detailsPhone["Protecao"] === true ? "Sí" : "No"}*\n• FPS total (Frames por segundo): *${detailsPhone["FPS"]}*\n–\n🔋 *Especificaciones de la batería:*\n• Tipo: *${detailsPhone["Tipo"]}*\n• Capacidad (mAh): *${detailsPhone["Ampere"]}*`
}

exports.InstaStalker = (data, formatNumberDecimal) => {
return `> 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nombre: ${data.resultado.profileName || "Usuario de Instagram"} *(@${data.resultado.username})*\n• Cuenta privada? *${data.resultado.accountPrivate === true ? "Sí" : "No"}*\n• Cuenta verificada? *${data.resultado.accountVerified === true ? "Sí" : "No"}*\n• URL externa: *${data.resultado.externalUrl}*\n• Publicaciones (Fotos & Videos): *${formatNumberDecimal(data.resultado.mediaCount)}*\n• Total seguidores: *${formatNumberDecimal(data.resultado.followersAmount)}*\n• Total siguiendo: *${formatNumberDecimal(data.resultado.followingAmount)}*\n–\n• Biografía:\n\`\`\`${data.resultado.biography || "❌️ Sin biografía!"}\`\`\``;
}

exports.TiktokStalker = (data, formatNumberDecimal) => { 
return `> 𝐓𝐢𝐤𝐭𝐨𝐤 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nombre: *${data.resultado.users.nickname}* | @${data.resultado.users.username}\n• URL: *https://tiktok.com/@${data.resultado.users.username}*\n• Cuenta verificada: *${data.resultado.users.verified === true ? "Sí" : "No"}*\n• Cuenta privada: *${data.resultado.users.privateAccount === true ? "Sí" : "No"}*\n• Cuenta comercial: *${data.resultado.users.commerceUser === true ? "Sí" : "No"}*\n• Región: *${data.resultado.users.region}*\n—\n• Estadísticas:\n\t• Seguidores: *${formatNumberDecimal(data.resultado.stats.followerCount)}*\n\t• Siguiendo: *${data.resultado.stats.followingCount}*\n\t• Likes: *${formatNumberDecimal(data.resultado.stats.heartCount)}*\n\t• Videos publicados: *${formatNumberDecimal(data.resultado.stats.videoCount)}*\n\t• Videos gustados: *${formatNumberDecimal(data.resultado.stats.likeCount)}*\n—\n• Biografía: \n\`\`\`${data.resultado.users.signature.replaceAll(`\n\n`, `\n`)}\`\`\``
}

exports.MediaFire = (response) => {
return `→ Archivo descargado con éxito: *'${response.resultado.fileName}'*! Gracias por esperar.\n• Extensión: *${response.resultado.mimetype}*\n• Peso (Tamaño): *${response.resultado.info.size}*\n• Subida: *${response.resultado.info.uploadDate}*`
}

exports.tiktok = (data) => {
const tags = data.resultado?.hashtag.map((v, index) => `#${v}`).join(' ');
  return  `> *# Información - Video:*\n• Usuario: *@${data.resultado?.author.nickname}* (@${data.resultado?.author.username})\n• Descripción: *${data.resultado?.description.trim() || "Sin descripción."}*\n• Hashtags: *${data.resultado?.hashtag.length} | [${tags}]*\n–\n> *# Estadísticas del video:*\n• Comentarios: *${data.resultado?.statistics.commentCount}*\n• Likes: *${data.resultado?.statistics.diggCount}*\n• Compartidos: *${data.resultado?.statistics.shareCount}*\n• Visualizaciones: *${data.resultado?.statistics.playCount}*\n–\n> *# Información - Audio:*\n• Título: *${data.resultado?.music.title}*\n• Creador(a): *${data.resultado?.music.author}*\n• Álbum: *${data.resultado?.music.album || "Sin información."}*`
}

exports.tiktokMusic = (data) => {
return `> *# Información - Audio:*\n• ID: *${data.resultado?.music.id}*\n• Título: *${data.resultado?.music.title}*\n• Creador(a): *${data.resultado?.music.author}*\n• Álbum: *${data.resultado?.music.album || "Sin información."}*`
}

exports.soundcloud = (data, tinyUrl) => {
return `• Canción: *${data.resultado.titulo}*\n• *Total de descargas: *${data.resultado.total_downloads}*\n–\n\t• Si el *audio* no se envía, descárgalo con el link: ${tinyUrl.data}`
}

exports.icmsResult = (data) => {
return `📊 Estado ICMS: *${data.resultado.icms}%*\n–\n• Valor ICMS _(valor neto/tasa)_: *R$ ${data.resultado.icmsTotal}*\n• Total BRL _(valor presentado + icms, en reales)_: *R$ ${data.resultado.total}*\n• Total USD _(valor presentado + icms, convertido a dólares)_: *$ ${data.resultado.dolar}*\n–\n📌 *Observación:* El valor del envío puede ser diferente, este cálculo es una probabilidad de la tasa aplicada. También puede variar la *alícuota* de cada estado, que es la cosa que se está enviando.\n–\n⚠️ *¿Cómo se calcula un valor menor a R$50?*\n\tProducto × icms(estado) = valor_icms\n\tProducto + valor_icms = total\n–\n⚠️ *¿Cómo se calcula un valor mayor a R$50?*\n\t Producto + (60 + icms(estado)) = valor_icms\n\t Producto + valor_icms = total`
}

exports.syntaxIcms = (prefix) => {
return `*¡Ups!* El comando está siendo usado incorrectamente, _por favor revisa la forma correcta de uso para tener éxito._\n–\nPara usar este comando es necesario usar la siguiente forma: *${prefix}icms 704|82*, _explicando sobre los valores presentados:_\n\t• *704* ‐ El valor que deseas saber la probabilidad de la posible tasa aplicada.\n\t• *82* - El DDD del estado donde vives o deseas consultar.`
}

exports.syntaxTrackParcels = (prefix) => {
return `• Introduce el código de envío proporcionado por Correios, abajo tienes la *explicación y ejemplo de uso*:\n–\n⚠️ *Ejemplo:* ${prefix}Rastrear [Código]\n\t• El *código de rastreo de Correios* sirve para registrar que un paquete fue enviado y permite localizarlo durante el proceso.\n\t• Está compuesto por 9 números y 4 letras, dos al inicio y dos al final, como en el ejemplo: *PC123456789BR*.`
}

exports.invalidCodeRastrear = () => {
return `• *Código inválido o no se encontró resultado.* Por favor proporciona un código válido, _verifica que seguiste la instrucción:_\n\t• Está compuesto por 9 números y 4 letras, dos al inicio y dos al final, como el ejemplo: *PC123456789BR*.`
}

exports.rastrearEncomenda = (dataResult, q) => {
return `📦 Rastreo de Envíos:\n• Nº de rastreo: *${q}*\n• Última actualización: *${dataResult.resultado[0].datePost} (${dataResult.resultado[0].timeCount})*\n——\n📍 Historial de ubicación:\n` + dataResult.resultado.map((info, index) => `*[ ${index+1} ]* Estado: ${info.description}\n• Publicación: *${info.timeCount} (${info.datePost})*`).join('\n–\n');
}

exports.lyrics = (data, II) => {
 return `• Título: *${data.resultado.name}*\n• Artista: *${data.resultado.byArtist.name}*\n• Descripción: *${data.resultado.description}*\n• URL: *${data.resultado.url}*\n• Letra (Original):\n${II}${data.resultado.lyricOriginal}${II}`
}

exports.result_APOD = (dataSab, resultExp) => {
return `🔭 Título - ${dataSab.nasa.title}\n\n🌐📝 Explicación - ${resultExp.result}`
}

exports.mediafireDownload = (ABC, encurt) => {
  return `*[ MediaFire ]* - Información del archivo:\n–\n• *Nombre del archivo:* ${ABC.resultado[0].nama}\n• *Tamaño:* ${ABC.resultado[0].size}\n• *Tipo de archivo enviado:* ${ABC.resultado[0].mime}\n–\n*Por favor, espera un momento, estoy enviando el archivo.*\n\t• Si hay un retraso de *2 minutos* puede ser por el tamaño del archivo.\n\t• *¿No llegó?* Descárgalo por el link: ${encurt.data}`
}

exports.speed = (speedConverted, os, TimeCount) => {
return `🏓 *Ping:*\n▢ *Latencia:* ${String(speedConverted.toFixed(3))} milisegundos.\n▢ *Uptime:* ${TimeCount(process.uptime())}\n—\n⚙️ *Sistema:*\n▢ Sistema Operativo: *${os.type()}*\n▢ Versión: *${os.release()}*\n▢ Memoria RAM usada: *${(os.freemem()/Math.pow(1024, 3)).toFixed(2)} GB*\n▢ Memoria RAM total: *${(os.totalmem()/Math.pow(1024, 3)).toFixed(2)} GB*\n▢ Uso de CPU: *${os.loadavg()[0].toFixed(2)}%*\n▢ Uso de memoria RAM: *${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%*\n▢ Versión de NodeJS: *${process.version}*`
}

exports.horoscopo = (data) =>  {
itensAdicionais = data.resultado.signo.itensAdicionais.map((v, index) => `*${v.title}* - ${v.description}`).join(`\n–\n`);
return `🔮 *${data.resultado.date}:*\n• ${data.resultado.forecast}\n—\n➕️ *${data.resultado.signo.title}:*\n• ${data.resultado.signo.description}\n–\n${itensAdicionais}`
}

exports.dicionario = (data, dataDicio, capitalizeFirstLetter, III) => {
  return `• Término (Palabra): *${capitalizeFirstLetter(dataDicio.resultado.term)}*\n• Significado: *${data.resultado[0].description}*\n• Etimología (Origen de la palabra):\n> ${dataDicio.resultado.etymology}\n• Gramatical: *${capitalizeFirstLetter(dataDicio.resultado.grammaticalClass)}*\n• Vocales: *${dataDicio.resultado.otherInfo.vowels.split(" ").map((v) => `${v}`).join(', ')}*\n• Consonantes: *${dataDicio.resultado.otherInfo.consonants.split(" ").map((v) => `${v}`).join(', ')}*\n*—*\n• Palabra en plural: ${III}${dataDicio.resultado.plurals.map((v) => v).join(', ')}${III}\n• Sinónimos: ${III}${dataDicio.resultado.synonyms.map((v) => v).join(', ')}${III}\n• Palabras relacionadas: ${III}${dataDicio.resultado.relatedWords.map((v) => v).join(', ')}${III}\n*—*\n🔍 Frases y ejemplos con la palabra “${data.resultado[0].term}”:\n${dataDicio.resultado.exampleSentences.map((v, index) => `\t*${index + 1}.* _${v.frase}_ — *${v.fonte}*`).join('\n')}\n*—*\n📚 Definiciones:\n${dataDicio.resultado.definitions.map((v, index) => `\t*${index + 1}*. ${v}`).join('\n')}\n*—*\n✒️ Lexicógrafo(a):\n\t• Nombre: *${dataDicio.resultado.authorInfo.name}*\n\t• Biografía: *${dataDicio.resultado.authorInfo.biography}*`
}


exports.respuestaChatGPT = (dataResulted) => {
  return `${dataResulted.result}`;
};

exports.respuestaResumida = (dataResulted) => {
  return `${dataResulted.result}`;
};

exports.respuestaRedaccion = (dataResulted) => {
  return `${dataResulted.result}`;
};

exports.respuestaWiki = (wikis) => {
  return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`;
};

exports.metadatosSticker = (stickerMetadata) => {
  return `• Emojis: *${stickerMetadata?.emojis?.join(' ') || '❌'}*\n• ID del Paquete: *${stickerMetadata['sticker-pack-id'] || '❌'}*\n• Nombre del Paquete: *${stickerMetadata['sticker-pack-name'] || '❌'}*\n• Autor del Paquete: *${stickerMetadata['sticker-pack-publisher'] || stickerMetadata['sticker-author-name'] || '❌'}*\n• Sticker Maker _(Android)_: *${stickerMetadata['android-app-store-link'] || '❌'}*\n• Sticker Maker _(iOS)_: *${stickerMetadata['ios-app-store-link'] || '❌'}*`;
};

exports.imagenGoogle = (data) => {
  return `• Título: *${data.origin.title || "No existe título en la imagen."}*\n• URL: *${data.origin.website.url || "Sin URL."}* \n• Fuente: *${data.origin.website.name || "Sin información."} _(${data.origin.website.domain || "Sin información."})_*\n• Resolución: *${data.height || "0"} × ${data.width || "0"}*`;
};

exports.aptoide = (getApk, sizeApk, lnDown) => {
  return `• Nombre: *${getApk.name}*\n• Paquete de la aplicación a enviar: *${getApk.package}*\n• Tamaño del archivo a enviar por mí: *${sizeApk} MB*\n• Versión de la aplicación a enviar por mí: *${getApk.file.vername}*\n——\n• [📁] *¿No descargaste?* Haz clic en el enlace abajo y realiza el proceso:\n↳ ${lnDown.data}`;
};

exports.traductor = (bla) => {
  return `Tu texto fue traducido con éxito: ${bla.result}`;
};

exports.clima = (wttrin) => {
  return `📡 → Información Meteorológica del lugar: *${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+ j.region[i].value +', ' + j.country[i].value).flat().join(' | ')}*\n• Temperatura actual: *${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° - [${wttrin.current_condition.map(j => j.temp_F).flat().join(' | ')} F°]*\n• Sensación térmica: *${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° = [${wttrin.current_condition.map(j => j.FeelsLikeF).flat().join(' | ')} F°]*\n• Humedad del aire: *${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%*\n• Condición actual de lluvias en pulgadas: *${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} Pol - [${wttrin.current_condition.map(j => j.precipMM).flat().join(' | ')} MM]*\n• Cobertura de nubes: *${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%*\n• Índice de UV _(Ultravioleta)_: *${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}*\n• Nivel de visibilidad: *${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]*\n• Descripción: *${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]*\n• Dirección del viento: *${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]*\n• Velocidad de los vientos en KM: *${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM - [${wttrin.current_condition.map(j => j.windspeedMiles).flat().join(', ')} M.]*\n• Presión del aire: *${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa - [${wttrin.current_condition.map(j => j.pressureInches).flat().join(' | ')} mmHg]*\n—\n🏘 → Algunas informaciones del lugar:\n• Total de habitantes: *${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}*\n• Fecha y hora: *${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}*\n• Horario de observación: *${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}*`;
};

exports.shazam = (dados) => {
  return `✅️🤖 - Con una similitud de *${dados.similarity}* con el audio, sigue la información de la música similar:\n—\n• Música: *${dados.music}*\n• Artista(s): *${dados.artists_name}*\n• Álbum: *${dados.album_name}*\n• Productor(a): *${dados.producer || 'No especificado.'}*\n• Duración: *${dados.duration}*\n• Fecha de lanzamiento: *${dados.launch}*\n• Género(s): *${dados.genres.map((v, index) => v).join(', ')}*`;
};

exports.peliculas = (movieInfo) => {
  return `• Título: *${movieInfo.data.results[0].title}* (${movieInfo.data.results[0].original_title})\n• Lanzamiento: _${movieInfo.data.results[0].release_date}_\n• Evaluaciones: _${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)_\n• Popularidad de la película (%): *${movieInfo.data.results[0].popularity.toFixed(1)}%*\n• ¿Clasificación adulta? *${movieInfo.data.results[0].adult ? 'Sí.' : 'No.'}*\n• Idioma oficial de la película: *${movieInfo.data.results[0].original_language}*\n–\n• [🎬] *Sinopsis de la película:*\n↳ ${movieInfo.data.results[0].overview}`;
};

exports.series = (serieInfo) => {
  return `• Título: *${serieInfo.data.results[0].name}* (${serieInfo.data.results[0].original_name})\n• Lanzamiento: *${serieInfo.data.results[0].first_air_date}*\n• Evaluaciones: *${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)*\n• Popularidad de la serie (%): *${serieInfo.data.results[0].popularity.toFixed(1)}%*\n• ¿Clasificación adulta? *${serieInfo.data.results[0].adult ? 'Sí.' : 'No.'}*\n• Idioma oficial de la serie: *${serieInfo.data.results[0].original_language}*\n–\n• [🌟] *Sinopsis de la serie:*\n↳ ${serieInfo.data.results[0].overview}`;
};

exports.buscarDireccionIP = (ip) => {
  return `*📡 Localizar + Información ${ip.data.type}*\n–\n• *Código IP:* ${ip.data.ip}\n• *Tipo de dirección IP:* ${ip.data.type}\n• *Provincia:* ${ip.data.region} / ${ip.data.city}\n• *Latitud:* ${ip.data.latitude}\n• *Longitud:* ${ip.data.longitude}\n• *Proveedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Zona horaria:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moneda del país:* ${ip.data.currency} - ${ip.data.currency_code}`;
};

exports.buscarCep = (res) => {
  return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Calle:* ${res.street}\n• *Complemento:* No encontrado.\n• *Código del DDD:* ${res.ddd}\n• *Barrio:* ${res.neighborhood}\n• *Ciudad/Estado:* ${res.city} - ${res.state}\n• *Código del IBGE:* ${res.ibge}\n• *Código del Siafi:* ${res.siafi}`;
};

exports.sinResultados = () => {
  return `Lo siento, no pude encontrar lo que buscabas de esta forma, ¿puedes intentar de otra manera?`;
};

exports.informacionPerfil = (pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, status) => {
  return `👤 「 *INFORMACIÓN - PERFIL* 」\n–\n• Nombre: *${pushname} (@${sender.split("@")[0]})*\n• Actualmente estás conectado en un dispositivo: ${info.key.id.length > 21 ? '*Android*' : info.key.id.substring(0, 2) == '3A' ? '*iOS*' : '*Windows/Linux*'}\n• Biografía: *${status}*\n–\n• Tu nivel de prostitución: *${putar}${putar2}%*\n• Tu nivel de atractivo: *${gostosurar}${gostosurar2}%*\n• Tu nivel de gadómetro: *${nivelgador}${nivelgado2r}%*\n• Valor de tu programa: *R$${programa}*`;
};

exports.advertencia = (menc_os2, dfqn) => {
  return `Hola @${menc_os2.split("@")[0]} - Has sido advertido ${dfqn}/3, ten cuidado, con 3 advertencias serás expulsado...`;
};

exports.finalizarAdvertencia = (menc_os2) => {
  return `Adiós usuario: @${menc_os2.split("@")[0]} - Has completado 3 advertencias, contacta con la administración del grupo para entender lo ocurrido.`;
};

exports.sintaxisCorreoAnonimo = (prefix) => {
  return `*Para usar el correo elegante o no*, también puede ser una indirecta... 😬\n–\nPrimero debes copiar el número de tu crush o enemigo(a), luego piensa en un mensaje.\n   • Ejemplo: *${prefix}correo [número/mensaje]*\n   • Ejemplo en práctica: *${prefix}correo +5582.../te amo*`;
};

exports.correoAnonimo = (txt2) => {
  return `📪 Has recibido un mensaje del mayor correo anónimo de Brasil.\n–\n▶️ ¿Quién lo envió? *Desconocido*\n–\n`+"```"+txt2+"```";
};

exports.exitoCorreoAnonimo = () => {
  return `✅ El correo fue enviado al destinatario con éxito.\n–\n• *Nota:* Él/ella puede descubrir quién lo envió. _No me responsabilizo si enviaste mensajes desalentadores._`;
};

exports.mensajeDesbaneado = (blcp) => {
  return `@${blcp.split('@')[0]} ha sido desbaneado y podrá volver a usar los comandos del bot.`;
};

exports.mensajeBaneado = (blcp) => {
  return `@${blcp.split('@')[0]} ha sido baneado y no podrá usar más los comandos del bot.`;
};

exports.listaPropietarios = (NombreDelBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6) => {
  return `Hola, aquí está la lista de propietarios del bot: ${NombreDelBot}\n–\n*Dueño Oficial:* wa.me/${numerodono_ofc}\n–\nDueño [1] - wa.me/${numero_dono1}\nDueño [2] - wa.me/${numero_dono2}\nDueño [3] - wa.me/${numero_dono3}\nDueño [4] - wa.me/${numero_dono4}\nDueño [5] - wa.me/${numero_dono5}\nDueño [6] - wa.me/${numero_dono6}`;
};

exports.estadoBot = (isAnticall, isAntiPv, isAntiPv2, isAntiPv3, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isAntiDDD, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn) => {
  return `Estado de funcionalidades activables para proteger el grupo / divertirse con sus participantes.\nFuncionalidades como *Anti Privado - Anti Llamada - Modo Alquiler*, son activaciones que solo el dueño puede ejecutar, _por lo que si están activas no podrás usar comandos en privado ni hacer llamadas al número del bot._\n–\n➱ Anti Llamada: ${isAnticall ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti PV Bloqueo: ${isAntiPv ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti PV (2) - Sin bloqueo de usuario(s): ${isAntiPv2 ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti PV (3) - No responde a nadie en privado: ${isAntiPv3 ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Imagen: ${isAntiImg ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Vídeo: ${isAntiVid ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Audio: ${isAntiAudio ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Sticker: ${isAntiSticker ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Documento: ${Antidoc ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Contacto: ${isAntiCtt ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Localización: ${Antiloc ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Link Grupo: ${isAntilinkgp ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Link Hard: ${isAntiLinkHard ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Fake: ${isAntifake ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Notas: ${isAntiNotas ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Catálogo: ${isAnticatalogo ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti Palabrota: ${isPalavrao ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Límite de Caracteres: ${isAntiFlood ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Bienvenida 1: ${isWelkom ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Bienvenida 2: ${isWelkom2 ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Simi 1: ${isSimi ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Simi 2: ${isSimi2 ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Auto Sticker: ${isAutofigu ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Auto Respuesta: ${isAutorepo ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Modo Broma: ${isModobn ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Modo Alquiler: ${isModoAluguel ? '✓ - Función activa.' : '✕ - No activada.'}\n➱ Nivel: ${isLevelingOn ? '✓ - Función activa.' : '✕ - Desactivada.'}\n➱ Anti DDD: ${isAntiDDD ? '✓ - Función activa.' : '✕ - Desactivada.'}`;
};

exports.errorSubidaImagen = () => {
  return `❌️ Ocurrió un error en la conversión o puede que la duración del video haya sido excedida, solo convierto videos de hasta 30s.`;
};

exports.sinArgumentosBusqueda = () => {
  return `¿Cómo deseas realizar una búsqueda sin incluir ningún argumento?`;
};

exports.sintaxisLogos = () => {
  return `¿Dónde está el texto? Para crear un logo necesito que incluyas un texto asociado al comando.`;
};

exports.cotizacionMonedas = (response) => {
  return `*[COTIZACIÓN]* - Los datos informados se actualizan 24 horas al día: 🗣💰\n–\n• Moneda: *${response.name}*\n• Valor más alto de la moneda en 24 horas: *R$ ${Number(response.high).toFixed(2)}*\n• Valor más bajo de la moneda en 24 horas: *R$ ${Number(response.low).toFixed(2)}*\n• Valor de la moneda actualizado ahora: *R$ ${Number(response.bid).toFixed(2)}*`;
};

exports.sintaxisStickerWeb = (prefix) => {
  return `🤖 *¿Cómo usar el comando 'figuweb'?*\n• *Función:* Crear una figurita con texto personalizado y fondo coloreado.\n——\n• *Sintaxis del Comando:*\n\t- ${prefix}figuweb [texto]/[número de color]\n• *Escogiendo el Color de Fondo:*\n\t- Puedes elegir entre 4 colores diferentes para el fondo de tu figurita. Solo añade el número correspondiente al color deseado después del texto, separado por una barra (/).\n—\n• *Numeración de los colores de fondo de la figurita de texto:*\n\t- 1. Negro (Predeterminado), 2. Blanco, 3. Rojo, 4. Azul\n—\n• *Ejemplos de uso:*\n \t- ${prefix}figuweb Hola, ¿cómo estás?/1 (Fondo en color Negro)\n\t- ${prefix}figuweb ¡Buenos días!/2 (Fondo en color Blanco)\n\t- ${prefix}figuweb ¡Buenas tardes!/3 (Fondo en color Rojo)\n\t- ${prefix}figuweb ¡Buenas noches!/4 (Fondo en color Azul)\n—\n• Si no especificas un color, se usará el fondo predeterminado (Negro).`;
};

exports.invitacionGrupo = (sender, cnvt, prefix) => {
  return `*[SOLICITUD]* - Se envió una invitación para que el bot ingrese a un grupo.\n–\n⚙️ *Información:*\n      • Número: *wa.me/${sender.split("@")[0]}*\n      • Enlace: *${cnvt}*\n–\n📑 *¿Cómo aceptar o rechazar la solicitud?*\n      • Para aceptar la solicitud es necesario usar el comando: ${prefix}entrar y el enlace del grupo del solicitante.\n          Ej: *${prefix}entrar ${cnvt}*\n      • *¡Rechazar la solicitud es fácil!* Pero recuerda que solo sirve para notificar al usuario que la solicitud fue rechazada.\n          Ej: *${prefix}rechazar ${sender.split("@")[0]}*`;
};

exports.removerUsuarioAntiPalabra = () => {
  return `*「 EXPULSADO(A) POR USAR UNA PALABRA PROHIBIDA 」*\nSerás expulsado del grupo, la próxima vez revisa las reglas antes de escribir cualquier palabra.`;
};

exports.permisoDenegadoUsuario = () => {
  return `Desafortunadamente, no soy administrador, por lo que no puedo expulsarte.`;
};

exports.mensajeAntiAleatorio = () => {
  return `Una de estas opciones está activada, pero por ser administrador, no serás expulsado(a) _(ANTI CONTACTO - ANTI CATÁLOGO - ANTI LOCALIZACIÓN)_`;
};

exports.caracteresAnti = () => {
  return `🚨 Se enviaron demasiados caracteres en un solo mensaje, esto va contra las reglas del grupo. Por orden de los administradores, expulsaré al miembro.`;
};

exports.marcarTodosMiembros = () => {
  return `⚠️ Se detectó un mensaje marcando a todos los participantes del grupo de forma invisible, posiblemente sea un tipo de WhatsApp modificado. Por este motivo, el miembro acaba de ser expulsado por seguridad del grupo. Si tienes algo que explicar, contacta con uno de los administradores del grupo.`;
};

exports.registroAusenciaPropietario = (NickDono, tabelin) => {
  return `Hola, mi propietario "${NickDono}" se encuentra ausente en este momento.\n↺ Desde la hora: ${tabelin.Ausente_Desde}\n–\n☇ Mensaje de ausencia: ${tabelin.Motivo_Da_Ausência}`;
};

exports.registroAusenciaAdmin = (blak) => {
  return `*Registro de Ausencia* - El administrador "@${blak.id.split("@")[0]}" se encuentra *ausente* en este momento.\n–\n☇ Mensaje: ${blak.msg}`;
};

exports.comandosFlood = () => {
  return `Espera *5s* para usar otro comando o ejecutar el mismo...`;
};

exports.tiempoRequerido = () => {
  return `No es posible realizar descargas de audios o videos de más de *20 minutos*.`;
};

exports.error = () => {
  return `Lo siento, ocurrió un error. Por favor, intenta de nuevo más tarde.`;
};

exports.mensajeProhibidoDetectadoAdmin = () => {
  return `> ⚠️ Mensaje prohibido detectado:\n• Hola administrador(a), tu sanción fue anulada porque formas parte del equipo de organización del grupo. ¡Tranquilo(a), señor(a)!`;
};

exports.linkProhibidoDetectadoAdmin = () => {
  return `> ⚠️ ¡Link detectado! Uno de los tipos de AntiLink está activo en este grupo.\n• Hola administrador(a), tu sanción fue anulada porque formas parte del equipo de organización del grupo. ¡Tranquilo(a), señor(a)!`;
};

exports.mensajeEncuestaDetectada = (senderUser) => {
  return `⚠️ *[@${senderUser.split('@')[0]}]* - Uno de los administradores habilitó una configuración de seguridad que impide que los miembros inferiores a administrador(a) creen encuestas en este grupo. Por lo tanto, la encuesta creada será eliminada para todos.`;
};

exports.mensajeProhibidoDetectadoUsuario = () => {
  return `🚨- Se detectó un mensaje prohibido según las reglas del grupo y los antis activados. Estoy realizando la expulsión del infractor de las reglas del grupo. Para más información sobre tu expulsión, contacta con un administrador(a) del grupo.`;
};

exports.antiLlamadas = () => {
  return `📵 - Hola, ¿todo bien? No puedes realizar llamadas al bot. Recuerda, el anti llamadas está activado, por lo que serás bloqueado en privado. Habla con mi jefe/jefa para realizar el desbloqueo.`;
};

exports.ayudaConfiguracionesGrupo = (prefix, sender) => {
  return `🤠 Hola administrador(a) *@${sender.split("@")[0]}*! ¿Todo bien?\n> Bienvenido(a) al menú de ayuda del comando *'grupo'*:\n–\n1. _${prefix}grupo_ *-open* _→_ Permite el envío de mensajes por todos los participantes del grupo.\n\n2. _${prefix}grupo_ *-close* _→_ Permite el envío de mensajes solo a los administradores del grupo.\n\n3. _${prefix}grupo_ *-libre* _→_ Permite a todos los integrantes editar los datos.\n\n4. _${prefix}grupo_ *-private* _→_ Solo permitirá que los administradores realicen cambios en los datos del grupo.`;
};

exports.ayudaPrivacidadFoto = (prefix, sender) => {
  return `🤪 Hola propietario(a) *@${sender.split("@")[0]}*! ¿Todo bien?\n> Bienvenido(a) al menú de ayuda del comando *'wprivacyph'*:\n–\n1. _${prefix}wprivacyph_ *-cntt* _→_ Permite que solo los contactos guardados en el dispositivo vean la foto de perfil.\n\n2. _${prefix}wprivacyph_ *-all* _→_ Permite que todos vean la foto de perfil del bot.\n\n3. _${prefix}wprivacyph_ *-noall* _→_ Nadie verá la foto de perfil del bot, incluso el propietario estará restringido (oculta).\n–\n📍 *Función:* El comando permite cambiar la privacidad de la foto de perfil, es decir, puedes modificarla directamente desde el bot sin necesidad de abrir el número del bot y ajustar las configuraciones.`;
};

exports.ayudaPrivacidadGrupo = (prefix, sender) => {
  return `🤪 Hola propietario(a) *@${sender.split("@")[0]}*! ¿Todo bien?\n> Bienvenido(a) al menú de ayuda del comando *'wprivacygp'*:\n–\n1. _${prefix}wprivacygp_ *-cntt* _→_ Permite que solo los contactos guardados en el dispositivo añadan al bot a grupos.\n\n2. _${prefix}wprivacygp_ *-all* _→_ Permite que todos los contactos añadan al bot a grupos sin ninguna interferencia.\n\n3. _${prefix}wprivacygp_ *-noall* _→_ Nadie podrá añadir al bot a grupos, incluso el dueño(a) estará restringido.\n–\n📍 *Función:* El comando permite cambiar la privacidad para que los usuarios añadan el contacto del bot a grupos, es decir, puedes modificarlo directamente desde el bot sin necesidad de abrir el número del bot y ajustar las configuraciones.`;
};

exports.respuestaErrorSimi = () => {
  const response = [
    "No entiendo todo, señor(a), ¡soy una simple simi! Explícamelo...",
    "¡Lo sé, lo sé! 👀 Sin querer abusar, ¿qué es esto? Enséñame...",
    "¡No me insultes, amor! 😭 Todavía tengo mucho que aprender...",
    "*¿Eh, qué?* 🤷🏻‍♀ ¿Qué es esto? ¿Podrías explicármelo, por favor, humano(a)?",
    "¡Soy un(a) bot! 🤖 Pero no lo sé todo. ¿Me lo explicas, por favor?"
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.GshowGE = (dataResult) => {
  return dataResult.resultado.map((info, index) => `${index+1}. *${info.titulo || 'Titular sin título.'}* - (${info.horarioPostagem || 'Hace X horas.'})\n• ${info.trechoManchete || 'Titular sin descripción.'}`).join('\n–\n');
};

exports.ayudaNoticiasJuegos = (sender, prefix) => {
  return `😸 Hola @${sender.split('@')[0]}, bienvenido al menú de ayuda y tutoriales del comando: *'gamenews'* | *'gamesnews'*\n–\n> El comando tiene 11 argumentos de uso, cada uno con un filtro de noticias. Recuerda, este comando es solo para noticias de juegos online. Para ver noticias de deportes, usa: _${prefix}esportenews_.\n–\n*01.* Call of Duty: ${prefix}gamenews -cod\n*02.* Counter-Strike: ${prefix}gamenews -csgo\n*03.* FIFA 2024: ${prefix}gamenews -fifa\n*04.* Fortnite: ${prefix}gamenews -fortnite\n*05.* GameXP: ${prefix}gamenews -gamexp\n*06.* PES 2024: ${prefix}gamenews -pes\n*07.* League of Legends: ${prefix}gamenews -lol\n*08.* Pokemon: ${prefix}gamenews -pokemon\n*09.* Rainbow 6: ${prefix}gamenews -r6\n*10.* Valorant: ${prefix}gamenews -valorant\n*11.* Pokemon TCG: ${prefix}gamenews -tcg`;
};

exports.ayudaNoticiasDeportes = (sender, prefix) => {
  return `🌟 Hola @${sender.split('@')[0]}, bienvenido al menú de ayuda y tutoriales del comando: *'esporte_noticias'* | *'esportenews'*\n–\n> El comando tiene 18 argumentos de uso, cada uno con un filtro de noticias. Recuerda, este comando es solo para noticias de deportes. Para ver noticias de juegos online, usa: _${prefix}gamenews_.\n–\n*01.* Todas las categorías agrupadas en un solo parámetro: ${prefix}esportenews -all\n*02.* Fútbol: ${prefix}esportenews -futebol\n*03.* Futsal: ${prefix}esportenews -futsal\n*04.* Skate: ${prefix}esportenews -skate\n*05.* Surf: ${prefix}esportenews -surf\n*06.* Baloncesto: ${prefix}esportenews -basquete\n*07.* Voleibol: ${prefix}esportenews -volei\n*08.* Tenis: ${prefix}esportenews -tenis\n*09.* Atletismo: ${prefix}esportenews -atletismo\n*10.* Natación: ${prefix}esportenews -natacao\n*11.* Ciclismo: ${prefix}esportenews -ciclismo\n*12.* Boxeo: ${prefix}esportenews -boxe\n*13.* Béisbol: ${prefix}esportenews -beisebol\n*14.* Fútbol Americano: ${prefix}esportenews -futebol-eua\n*15.* Judo: ${prefix}esportenews -judo\n*16.* Gimnasia: ${prefix}esportenews -ginastica\n*17.* Golf: ${prefix}esportenews -golfe\n*18.* Fórmula 1: ${prefix}esportenews -f1`;
};

exports.comandoBloqueadoGrupo = () => {
  return `*¡La función está bloqueada en este grupo!* El administrador restringió el uso de este comando, por lo que los participantes de este grupo no pueden usarlo.`;
};

exports.comandoBloqueadoGlobal = () => {
  return `Este comando fue bloqueado por mi dueño(a) para todos los usuarios.`;
};
