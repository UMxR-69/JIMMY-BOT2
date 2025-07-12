exports.menu = (prefijo, nombreDelBot, remitente, nombreDelCreador, nombreDelPaquete) => {
return `
╭═══════════════════ ⪩  
╰╮✨⃟✰𝐈𝐍𝐅𝐎-𝐁𝐎𝐓/𝐔𝐒𝐔𝐀𝐑𝐈𝐎❈⃟✨  
╭┤⭐ Bot:  *${nombreDelCreador}*
┃│👤 Usuario: *${nombreDelBot}*   
┃│⚙️ Versión: *4.0.0*  
┃│👑 Dueño: *@${remitente.split("@")[0]}*
┃╰══ ⪨  
╰╦══════════════════ ⪨  

╭┤🖤⃟✰𝐌𝐄𝐍Ú𝐒 𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒✰⃟🖤  
┃│🎯 ${prefijo}menudueño  
┃│🎯 ${prefijo}menuadmin  
┃│🎯 ${prefijo}menupremium  
┃│🎯 ${prefijo}efectosimg  
┃│🎯 ${prefijo}logos  
┃│🎯 ${prefijo}juegos  
┃│🎯 ${prefijo}menucoins  
┃╰══ ⪨  

╭┤🖤⃟✰𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐌𝐈𝐄𝐌𝐁𝐑𝐎✰⃟🖤  
┃│🛠️ ${prefijo}bug (Reportar error)  
┃│💡 ${prefijo}sugerencia (Idea nueva)  
┃│⭐ ${prefijo}evaluar (Qué tal te parezco)  
┃╰══ ⪨  

╭┤🖤⃟✰𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒✰⃟🖤  
┃│📊 ${prefijo}ping (Velocidad)  
┃│📈 ${prefijo}actividad  
┃│🏆 ${prefijo}rankingactivo  
┃│🔍 ${prefijo}checkactivo (@)  
┃│🏅 ${prefijo}nivelranking  
┃│📜 ${prefijo}verpremium  
┃│📋 ${prefijo}misdatos  
┃│📂 ${prefijo}infobienvenida  
┃│🌐 ${prefijo}idiomas  
┃│💼 ${prefijo}infodueño  
┃│🏠 ${prefijo}infoalquiler  
┃│✨ ${prefijo}infocmdprem  
┃│🔑 ${prefijo}infopremium  
┃│📢 ${prefijo}infoanuncios  
┃│🔖 ${prefijo}ptvmsg (Menciónalo)  
┃╰══ ⪨  

╭┤🖤⃟✰𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒✰⃟🖤  
┃│🎵 ${prefijo}play (Nombre) 
┃│🎥 ${prefijo}play2 (Nombre)
┃│▶️ ${prefijo}play3 (Nombre)
┃│📹 ${prefijo}playvid (Nombre)  
┃│📄 ${prefijo}playdoc (Nombre) 
┃│🎶 ${prefijo}shazam (@audio)
┃│🎶 ${prefijo}shazam2 (@audio)  
┃│🎧 ${prefijo}spotify (Enlace)  
┃│🎙️ ${prefijo}tiktokaudio (Enlace)  
┃│🎞️ ${prefijo}ttkmp4 (Enlace)  
┃│🔊 ${prefijo}ttkmp3 (Enlace)  
┃│📸 ${prefijo}instavideo (Enlace)  
┃│📡 ${prefijo}instamp3 (Enlace)  
┃│🌐 ${prefijo}soundcloud (Enlace)
┃│🌐 ${prefijo}sc (Nombre)
┃│🔗 ${prefijo}generarlink (img/video)  
┃╰══ ⪨  

╭┤🖤⃟✰𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀𝐒✰⃟🖤  
┃│📖 ${prefijo}pensador (Nombre)  
┃│📲 ${prefijo}aptoide (Nombre)  
┃│🛒 ${prefijo}amazon (Nombre)   
┃│📚 ${prefijo}wikipedia (Nombre)  
┃│📌 ${prefijo}pinterest (Nombre)  
┃│🎞️ ${prefijo}pintemp4 (Enlace)
┃│🎵 ${prefijo}pintemp3 (Enlace)  
┃╰══ ⪨  

╭┤🖤⃟✰𝐈𝐍𝐓𝐄𝐋𝐈𝐆𝐄𝐍𝐂𝐈𝐀 (𝐈𝐀)✰⃟🖤
┃│🎙️ ${prefijo}transcribir (Audio)
┃│🤖 ${prefijo}gpt4 (Texto)
┃│🗣️ ${prefijo}tts2
┃│👩‍💻 ${prefijo}fenrys
┃│🎤 ${prefijo}hatsune
┃│🌿 ${prefijo}nahida
┃│🌊 ${prefijo}nami
┃│💉 ${prefijo}ana
┃│🤖 ${prefijo}optimus
┃│🔥 ${prefijo}goku
┃│🎵 ${prefijo}taylorswift
┃│🚀 ${prefijo}elonmusk
┃│🐭 ${prefijo}mickey
┃│🎤 ${prefijo}kendrick
┃│🎓 ${prefijo}angela
┃│🎙️ ${prefijo}eminem
┃│🎨 ${prefijo}arte
┃│🧠 ${prefijo}apc5
┃│🖼️ ${prefijo}apced
┃╰══ ⪨  

╭┤🖤⃟✰𝐍𝐎𝐓𝐈𝐂𝐈𝐀𝐒✰⃟🖤  
┃│📰 ${prefijo}noticias (Tema)  
┃╰══ ⪨  

╭┤🖤⃟✰𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒✰⃟🖤  
┃│🎨 ${prefijo}sticker (Marcar foto)  
┃│🖼️ ${prefijo}figura (Marcar foto)  
┃│🖌️ ${prefijo}toimg (Sticker → imagen)  
┃│💬 ${prefijo}attp (Tu texto)
┃│💬 ${prefijo}qc (Tu texto)    
┃│🎞️ ${prefijo}togif (Sticker → gif)  
┃│✂️ ${prefijo}robar (Texto/Textos)  
┃╰══ ⪨  

╭┤🖤⃟✰𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒✰⃟🖤  
┃│🗣️ ${prefijo}gtts (Idioma + Texto)  
┃│👤 ${prefijo}etiquétame  
┃│💡 ${prefijo}emoji (emoji/tipo)  
┃│📊 ${prefijo}tabla (Letras/Símbolos)  
┃│📜 ${prefijo}versiculobiblico  
┃│💕 ${prefijo}piropos  
┃│📖 ${prefijo}consejos  
┃│🗨️ ${prefijo}simi (Habla con ella)  
┃│💾 ${prefijo}perfil  
┃│🧮 ${prefijo}calcular (10 + 10)  
┃│✉️ ${prefijo}morechat (msg1/msg2)  
┃│⚖️ ${prefijo}imc (peso/altura)  
┃│📆 ${prefijo}contardias (DD/MM/AAAA)  
┃│📞 ${prefijo}ddd (Código de región)  
┃│🔓 ${prefijo}desbloquear  
┃│🔓 ${prefijo}desbloquear2  
┃│🆔 ${prefijo}generarcpf  
┃│☎️ ${prefijo}sip (Número)  
┃╰══ ⪨  
╰═══════════════════ ⪨
`;
};

exports.adms = (prefijo, nombreDelBot, remitente, nombreDelCreador, nombreDelPaquete) => {
return `
╭═══════════════════ ⪩  
╰╮✨き⃟✰ 𝐌𝐄𝐍𝐔 - 𝐀𝐃𝐌𝐈𝐍𝐒 ✰⃟き ✨  
╭┤👾 ⋟ Bot: *${nombreDelCreador}* 
┃│👤 ⋟ Usuario: *${nombreDelBot}*   
┃│⚙️ ⋟ Versión: *4.0.0*  
┃│👑 ⋟ Dueño: *@${remitente.split("@")[0]}*
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤⚡ ⋟ **Comandos de Configuración:**  
┃│🖼️ ⋟ ${prefijo}antiimg (1/0) - Imágenes  
┃│🎥 ⋟ ${prefijo}antivideo (1/0)  
┃│🎙️ ⋟ ${prefijo}antiaudio (1/0)  
┃│🎭 ⋟ ${prefijo}antisticker (1/0)  
┃│📍 ⋟ ${prefijo}antilocalizacion (1/0)  
┃│📇 ⋟ ${prefijo}anticontacto (1/0)  
┃│📞 ⋟ ${prefijo}antiddd (1/0)  
┃│📄 ⋟ ${prefijo}antidoc (1/0)  
┃│🔗 ⋟ ${prefijo}antilinkgp (1/0)  
┃│🔞 ⋟ ${prefijo}antilink18 (1/0)  
┃│📵 ⋟ ${prefijo}antifake (1/0)  
┃│📝 ⋟ ${prefijo}antinotas (1/0)  
┃│🔤 ⋟ ${prefijo}antipalabra (1/0)  
┃│🛒 ⋟ ${prefijo}anticatálogo (1/0)  
┃│🤬 ⋟ ${prefijo}antipalabrota (1/0)  
┃│🔢 ⋟ ${prefijo}limitecaracteres (1/0)  
┃│👋 ⋟ ${prefijo}bienvenida (1/0)  
┃│🤝 ⋟ ${prefijo}bienvenida2 (1/0)  
┃│🤖 ⋟ ${prefijo}simi (1/0)  
┃│🎨 ⋟ ${prefijo}autosticker (1/0)  
┃│🔁 ⋟ ${prefijo}autorepo (1/0)  
┃│⭐ ⋟ ${prefijo}niveles (1/0)  
┃│🗑️ ⋟ ${prefijo}odelete (1/0)  
┃│👀 ⋟ ${prefijo}x9una (1/0)  
┃│👁️ ⋟ ${prefijo}x9 (1/0)  
┃│👮 ⋟ ${prefijo}sóadm  
┃│⏱️ ⋟ ${prefijo}limitecomandos  
┃│🌐 ⋟ ${prefijo}multiprefijo (1/0)  
┃│⏳ ⋟ ${prefijo}tiempocmd (segundos)  
┃│📞 ⋟ ${prefijo}antiddd-lista  
┃│➕ ⋟ ${prefijo}agregar_ddd  
┃│➖ ⋟ ${prefijo}eliminar_ddd  
┃│📸 ⋟ ${prefijo}leyenda_imagen (Texto)  
┃│🎥 ⋟ ${prefijo}leyenda_video (Texto)  
┃│🌎 ⋟ ${prefijo}leyenda_extranjera (Texto)  
┃│👋 ⋟ ${prefijo}leyendabv (Texto)  
┃│🚪 ⋟ ${prefijo}leyendasalida (Texto)  
┃│👋 ⋟ ${prefijo}leyendabv2 (Texto)  
┃│🚪 ⋟ ${prefijo}leyendasalida2 (Texto)  
┃│✅ ⋟ ${prefijo}autorizar (Solicitudes)  
┃│🚫 ⋟ ${prefijo}lista_negra (Número)  
┃│♻️ ⋟ ${prefijo}quitar_lista (Número)  
┃│⛔ ⋟ ${prefijo}lista_negraG (Número)  
┃│✅ ⋟ ${prefijo}quitar_listaG (Número)  
┃│➕ ⋟ ${prefijo}agregar_prefijo  
┃│➖ ⋟ ${prefijo}quitar_prefijo  
┃│⚠️ ⋟ ${prefijo}banghost  
┃│🔇 ⋟ ${prefijo}mutelist (Lista de silenciados)  
┃│🔇 ⋟ ${prefijo}mute (@)  
┃│🔊 ⋟ ${prefijo}desmute (@)  
┃│👋 ⋟ ${prefijo}add 5511...  
┃│💀 ⋟ ${prefijo}revivir (mencionar mensaje)  
┃│⚔️ ⋟ ${prefijo}expulsar [@]  
┃│🚷 ⋟ ${prefijo}banear (mencionar mensaje)  
┃│🔝 ⋟ ${prefijo}promover [@]  
┃│📉 ⋟ ${prefijo}degradar [@]  
┃│🖼️ ⋟ ${prefijo}removerfoto  
┃│📌 ⋟ ${prefijo}temporales (mensajes)  
┃│✍️ ⋟ ${prefijo}descgp (Texto)  
┃│📛 ⋟ ${prefijo}nombregp (Nombre)  
┃│🏷️ ⋟ ${prefijo}etiquetartodo (Texto)  
┃│🔒 ⋟ ${prefijo}grupo (abrir/cerrar)  
┃│🔗 ⋟ ${prefijo}linkgp  
┃│📊 ⋟ ${prefijo}infogrupo  
┃│📜 ⋟ ${prefijo}bloquearcmd (cmd)  
┃│❌ ⋟ ${prefijo}desbloquearcmd (cmd)  
┃│📋 ⋟ ${prefijo}listacmd  
┃│🤫 ⋟ ${prefijo}hidetag (Texto)  
┃│🔗 ⋟ ${prefijo}mención  
┃│🔗 ⋟ ${prefijo}mención2 (wa.me)  
┃╰═══ ⪨  
╰═══════════════════ ⪨`;
};

exports.menudono = (prefijo, nombreDelBot, remitente, nombreDelCreador, nombreDelPaquete) => {
return `
╭═══════════════════ ⪩  
╰╮💎✨き⃟✰ 𝐌𝐄𝐍𝐔 - 𝐃𝐔𝐄Ñ𝐎 ✰⃟き ✨💎  
╭┤🤖 ⋟ Bot: *${nombreDelCreador}* 
┃│👤 ⋟ Usuario: *${nombreDelBot}*   
┃│⚙️ ⋟ Versión: *4.0.0*  
┃│👑 ⋟ Dueño: *@${remitente.split("@")[0]}*
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤🎲 ✨き⃟✰ COMANDOS VARIOS ✰⃟き ✨  
┃│🌟 ⋟ ${prefijo}setprefix  
┃│🖼️ ⋟ ${prefijo}fotomenu  
┃│🌅 ⋟ ${prefijo}fondobienvenida  
┃│🏞️ ⋟ ${prefijo}fondoSalida  
┃│📈 ⋟ ${prefijo}fondolevel  
┃│🌐 ⋟ ${prefijo}serpremium  
┃│📋 ⋟ ${prefijo}listagrupos  
┃│🚫 ⋟ ${prefijo}antipalabrota (1/0)  
┃│📵 ⋟ ${prefijo}antillamar (1/0)  
┃│📝 ⋟ ${prefijo}creartm (Texto)  
┃│✅ ⋟ ${prefijo}registrartm  
┃│❌ ⋟ ${prefijo}eliminartm  
┃│📜 ⋟ ${prefijo}listatm  
┃│👀 ⋟ ${prefijo}visualizarmensajes  
┃│✔️ ⋟ ${prefijo}verificado-global  
┃│🎶 ⋟ ${prefijo}menuaudio  
┃│🛑 ⋟ ${prefijo}agregarpalabra (palabrota)  
┃│♻️ ⋟ ${prefijo}eliminarpalabra (palabrota)  
┃│📴 ⋟ ${prefijo}ausente (mensaje)  
┃│✨ ⋟ ${prefijo}activo  
┃│❌ ⋟ ${prefijo}eliminarads [número]  
┃│📝 ⋟ ${prefijo}crearads [mensaje|tiempo]  
┃│📋 ⋟ ${prefijo}listarads  
┃│⏹️ ⋟ ${prefijo}detenerads  
┃│▶️ ⋟ ${prefijo}iniciarads  
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤👑 ✨き⃟✰ SUB-DUEÑOS ✰⃟き ✨  
┃│💼 ⋟ ${prefijo}subdono1 (@/55...)  
┃│💼 ⋟ ${prefijo}subdono2 (@/55...)  
┃│💼 ⋟ ${prefijo}subdono3 (@/55...)  
┃│💼 ⋟ ${prefijo}subdono4 (@/55...)  
┃│💼 ⋟ ${prefijo}subdono5 (@/55...)  
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤🏠 ✨き⃟✰ ALQUILER ✰⃟き ✨  
┃│🔑 ⋟ ${prefijo}modoalquiler (1/0)  
┃│📅 ⋟ ${prefijo}añadiralquiler (@/días)  
┃│🗑️ ⋟ ${prefijo}eliminaralquiler (días)  
┃│❌ ⋟ ${prefijo}borrarrenta  
┃│🎁 ⋟ ${prefijo}cortesia24  
┃│📋 ⋟ ${prefijo}listaralquiler  
┃│🕒 ⋟ ${prefijo}últimarenta  
┃│📜 ⋟ ${prefijo}codelistarenta  
┃│🔏 ⋟ ${prefijo}generarcoderenta (@/días)  
┃│🗑️ ⋟ ${prefijo}borrarcoderenta (código)  
┃│🎟️ ⋟ ${prefijo}generarcortesia  
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤🌟 ✨き⃟✰ PREMIUM ✰⃟き ✨  
┃│🎖️ ⋟ ${prefijo}eliminarpremium [@/días]  
┃│🏅 ⋟ ${prefijo}agregarpremium [@/días]  
┃│📋 ⋟ ${prefijo}listacmdpremium  
┃│🌟 ⋟ ${prefijo}listapremium  
┃│➕ ⋟ ${prefijo}agregarcmdpremium (cmd)  
┃│➖ ⋟ ${prefijo}eliminarcmdpremium (cmd)  
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤🔒 ✨き⃟✰ PRIVACIDAD ✰⃟き ✨  
┃│🔐 ⋟ ${prefijo}wprivacidadph  
┃│🔐 ⋟ ${prefijo}wprivacidadgp  
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤⛔ ✨き⃟✰ BLOQUEAR / DESBLOQUEAR ✰⃟き ✨  
┃│🚫 ⋟ ${prefijo}bloquearcmdg (cmd)  
┃│✅ ⋟ ${prefijo}desbloquearcmdg (cmd)  
┃│📋 ⋟ ${prefijo}listabcmdglobal  
┃│🚷 ⋟ ${prefijo}bloquearusuario [@]  
┃│🔓 ⋟ ${prefijo}desbloquearusuario [@]  
┃│⛔ ⋟ ${prefijo}bangp  
┃│✅ ⋟ ${prefijo}desbangp  
┃╰═══ ⪨  
╰╦══════════════════ ⪨  

╭┤🏆 ✨き⃟✰ NIVELES ✰⃟き ✨  
┃│📈 ⋟ ${prefijo}agregarnivel (cantidad)  
┃│📉 ⋟ ${prefijo}quitarnivel (cantidad)  
┃│⭐ ⋟ ${prefijo}agregarxp (cantidad)  
┃│🪙 ⋟ ${prefijo}quitarxp (cantidad)  
┃│📛 ⋟ ${prefijo}removernivel (@)  
┃╰═══ ⪨  
╰═══════════════════ ⪨`;
};


exports.menulogos = (prefijo, nombreDelBot, remitente, nombreDelCreador, paquete) => {
  return `╭━━━『 ⚙️ INFORMACIÓN 』━━━✦
┃✨ Prefijo: 「 ${prefijo} 」
┃🤖 Nombre: ${nombreDelBot}
┃👤 Usuario: @${remitente.split("@")[0]}
┃📦 Versión: ${paquete.version}
┃👑 Dueño: ${nombreDelCreador}
╰━━━━━━━━━━━━━━━━━━━━━━━✦

╭━━『 🎨 LOGOS DE TEXTO 』━━✦
┃🔥 ${prefijo}fluffy-logo (texto)
┃🎯 ${prefijo}pubgvideo
┃🎊 ${prefijo}añonuevo
┃🐯 ${prefijo}tigre
┃🌋 ${prefijo}lava-logo (texto)
┃😎 ${prefijo}cool-logo (texto)
┃🗯️ ${prefijo}comic-logo (texto)
┃🔥 ${prefijo}fire-logo (texto)
┃💧 ${prefijo}water-logo (texto)
┃❄️ ${prefijo}ice-logo (texto)
┃🎩 ${prefijo}elegante-logo (texto)
┃🥇 ${prefijo}oro-logo (texto)
┃🍀 ${prefijo}fortuna-logo (texto)
┃🔵 ${prefijo}azul-logo (texto)
┃🥈 ${prefijo}plata-logo (texto)
┃🌟 ${prefijo}neon-logo (texto)
┃🛹 ${prefijo}skate-logo (texto)
┃📼 ${prefijo}retro-logo (texto)
┃🍭 ${prefijo}caramelo-logo (texto)
┃✨ ${prefijo}brillante-logo (texto)
╰━━━━━━━━━━━━━━━━━━━━━━━✦

╭━━『 🖼️ EPHOTO - 3 TEXTOS 』━━✦
┃🌀 ${prefijo}retro (texto1|texto2|texto3)
╰━━━━━━━━━━━━━━━━━━━━━━━✦

╭━━『 🖼️ EPHOTO - 2 TEXTOS 』━━✦
┃🦸 ${prefijo}capitan (texto1|texto2)
┃🎨 ${prefijo}paredgraffiti (texto1|texto2)
┃🅿️ ${prefijo}phlogo (texto1|texto2)
┃🎀 ${prefijo}blackpink (texto1|texto2)
┃💀 ${prefijo}deadpool (texto1|texto2)
┃✨ ${prefijo}brillo (texto1|texto2)
┃🕶️ ${prefijo}vintage3d (texto1|texto2)
╰━━━━━━━━━━━━━━━━━━━━━━━✦

╭━━『 🖼️ EPHOTO - 1 TEXTO 』━━✦
┃🌌 ${prefijo}galaxia-luz (texto)
┃🌌 ${prefijo}galaxia (texto)
┃⚡ ${prefijo}glitch (texto)
┃🎨 ${prefijo}graffiti (texto)
┃🔩 ${prefijo}metalico (texto)
┃✨ ${prefijo}brillante (texto)
┃🐾 ${prefijo}mascota (texto)
┃🐉 ${prefijo}fuegodragon (texto)
┃💖 ${prefijo}oro-rosa (texto)
┃🎯 ${prefijo}pubgavatar (texto)
┃🎯 ${prefijo}ffavatar (texto)
┃👾 ${prefijo}amongus (texto)
┃🦸 ${prefijo}comics (texto)
┃🎮 ${prefijo}lolavatar (texto)
┃⚰️ ${prefijo}cementerio (texto)
┃🩸 ${prefijo}sangre (texto)
┃🦇 ${prefijo}murcielago (texto)
┃🛡️ ${prefijo}titanio (texto)
┃🧽 ${prefijo}borrador (texto)
┃🎃 ${prefijo}halloween (texto)
┃❄️ ${prefijo}nieve (texto)
┃🇺🇸 ${prefijo}america (texto)
┃🌟 ${prefijo}mascotaneon (texto)
┃🌫️ ${prefijo}dobleexposicion (texto)
┃🛠️ ${prefijo}metal (texto)
┃💥 ${prefijo}3dcrack (texto)
┃🌈 ${prefijo}colorido (texto)
┃🎈 ${prefijo}globo (texto)
┃🌈 ${prefijo}multicolor (texto)
┃🎨 ${prefijo}pinturagraffiti (texto)
┃🎨 ${prefijo}estilograffiti (texto)
┃❄️ ${prefijo}congelado (texto)
┃✍️ ${prefijo}ligaduras (texto)
┃🎨 ${prefijo}acuarela (texto)
┃🏖️ ${prefijo}playa-verano (texto)
┃☁️ ${prefijo}cielonublado (texto)
┃🖥️ ${prefijo}estilotecnico (texto)
┃👑 ${prefijo}real (texto)
┃🎆 ${prefijo}fuegosartificiales (texto)
┃⚙️ ${prefijo}mascotametal (texto)
╰━━━━━━━━━━━━━━━━━━━━━━━✦​​​​
`;
};

exports.alteradores = (prefix, NomeDoBot, sender, NickDono, packname) => {
return`╭═══════════════🎨═══════════════╮  
       🌟 **MENÚ ALTERADORES** 🌟  
╰═══════════════════════════════╯  

╭━━━👾📜━━━╮  
📌 **Bot:** *${NickDono}* 
👤 **Usuario:** *${NomeDoBot}*   
🔖 **Versión:** *4.0.0*  
👑 **Dueño:***@${sender.split("@")[0]}*
╰━━━👾📜━━━╯  

🎥 **ALTERAR VIDEO** 🎥  
╭───────────────╮  
🎬 ${prefix}VideoLento (mencionar)  
🎥 ${prefix}VideoRapido (mencionar)  
🔄 ${prefix}VideoContrario (mencionar)  
╰───────────────╯  

🎵 **ALTERAR AUDIO** 🎵  
╭───────────────╮  
🐌 ${prefix}AudioLento (mencionar)  
⚡ ${prefix}AudioRapido (mencionar)  
🎚️ ${prefix}Grave (mencionar)  
🎛️ ${prefix}Grave2 (mencionar)  
🐿️ ${prefix}Ardilla (mencionar)  
💥 ${prefix}Explotar (mencionar)  
🎶 ${prefix}Bass (mencionar)  
🎵 ${prefix}Bass2 (mencionar)  
👦 ${prefix}VozNiño (mencionar)  
╰───────────────╯  

✨ **${NomeDoBot} está listo para ti!** ✨
`;
};

exports.menuprem = (isCmdPremium, prefix, NomeDoBot, sender, NickDono, packname, capitalizeFirstLetter) => { 
return `╭═══════════════════ ⪩  
╰╮✨🤖き⃟✰MENÚ-PREMIUM✰⃟⃟き  
╭┤⭐ ⋟ Bot: *${NickDono}* 
┃│👤 ⋟ Usuario: *${NomeDoBot}*   
┃│⚙️ ⋟ Versión: *4.0.0*  
┃│👑 ⋟ Dueño:*@${sender.split("@")[0]}*
┃╰══ ⪨  
╰╦══════════════════ ⪨  
╭┤🔒き⃟✰COMANDOS-PREMIUM✰⃟⃟き  
${isCmdPremium.map((cmd, index) => `┃│✨ ⋟ ${prefix + capitalizeFirstLetter(cmd)}`).join('\n')}  
┃╰══ ⪨  
╰═══════════════════ ⪨`;
};

exports.brincadeiras = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `​​​​​
╭━━━━━━━━━━━━━━━━━━━━━
┃✧✰ MENÚ-JUEGOS ✰✧
╰━ ⠀⣿ Bot:${NomeDoBot}
⠀⠀⠀⣿ Usuario:@${sender.split("@")[0]}
⠀⠀⠀⣿ Versión:4.0.0
⠀⠀⠀⣿ Dueño:${NickDono}
╰━━━━━━━━━━━━━━━━━━━━━

╭⣿✧ JUEGOS ✧
┃ 🌟 ${prefix}Tresenraya (@mencionar)
┃ 🍷 ${prefix}Yonjamas (Yo nunca, ¿yo sí?)
┃ ✨ ${prefix}Ppt (Piedra/Papel/Tijera)
╰━━━━━━━━━━━━━━━━━━━━━

╭⣿✧ INTERACTIVOS ✧
┃ 💥 ${prefix}Gay (mencionar (@))
┃ 👑 ${prefix}Feo (mencionar (@))
┃ 💔 ${prefix}Cornudo (mencionar (@))
┃ 👀 ${prefix}Bizco (mencionar (@))
┃ 🍻 ${prefix}Borracho (mencionar (@))
┃ 😘 ${prefix}Rico (mencionar (@))
┃ 💃 ${prefix}Rica (mencionar (@))
┃ 💋 ${prefix}Beso (mencionar (@))
┃ 🔪 ${prefix}Matar (mencionar (@))
┃ 💥 ${prefix}Bofetada (mencionar (@))
┃ 👢 ${prefix}Patada (mencionar (@))
┃ 🍀 ${prefix}Suerte (mencionar (@))
┃ 🐕 ${prefix}GolpePerro (mencionar (@))
┃ 🪖 ${prefix}Nazista (mencionar (@))
┃ ✨ ${prefix}Chance (di algo)
┃ 🌹 ${prefix}Fiesta (cantidad)
┃ 💖 ${prefix}Pareja (pareja del grupo)
┃ 🔮 ${prefix}Cuando (preguntar)
┃ ☠️ ${prefix}Muerte (nombre)
╰━━━━━━━━━━━━━━━━━━━━━

╭⣿✧ TOP 5 - RANKING ✧
┃ 🌈 ${prefix}Rankgay (top 5 gays)
┃ 🐉 ${prefix}Rankgado (top 5 gados)
┃ 💔 ${prefix}Rankcornudo (top 5 cornudos)
┃ 🔥 ${prefix}Rankrico (top 5 ricos)
┃ 💎 ${prefix}Rankrica (top 5 ricas)
┃ 🕊️ ${prefix}Ranknazista (top 5 nazis)
┃ 🎮 ${prefix}Rankotaku (top 5 otakus)
┃ 🏆 ${prefix}Rankculo (top 5 culos)
╰━━━━━━━━━━━━━━━━━━━━━​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`;
};

exports.efeitos = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭═══════❖ *MENÚ DE EFECTOS* ❖═══════╮  
┃ 🤖 Bot: *${NickDono}* 
┃ 👤 Usuario: *${NomeDoBot}*   
┃ 🛠️ Versión: *4.0.0*  
┃ 👑 Dueño:*@${sender.split("@")[0]}*
╰═══════════════════════════════╯  

╭───✧ *COMANDOS DISPONIBLES* ✧───╮    
┃ 🎨 *Mejorar:*  
┃    ➤ ${prefix}Mejorar (mencionar)-(img)  
┃  
┃ 🖌️ *Recolorear:*  
┃    ➤ ${prefix}Recolorear (mencionar)-(img)  
┃  
┃ 🌫️ *Quitar neblina:*  
┃    ➤ ${prefix}QuitarNeblina (mencionar)-(img)  
╰───────────────────────────────╯  

⚡ *Aplica los efectos y brilla!* ⚡​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`;
};
