exports.listLanguages = (prefix) => {
  return `Puedes consultar la lista de idiomas disponibles para usar en el traductor o gtts aquí: https://cloud.google.com/translate/docs/languages
–
• Ejemplo de uso de los comandos *gtts* y *traductor*:
–
↳ *Comando:* ${prefix}gtts es Hola mundo
*[es]* - Idioma o acento en que se reproducirá el audio.
*[Hola mundo]* - El texto o frase que se escuchará.
–
↳ *Comando:* ${prefix}traductor es|love you
*[es]* - Idioma al que se traducirá el texto o palabra.
*[love you]* - Texto o palabra a traducir.`
}

exports.bienvenida = (prefix) => {
  return `Este comando es para configurar el sistema de bienvenida. Recuerda que el sistema tiene dos modos: *bienvenida* (con foto) y *bienvenida2* (solo texto).
–
• Para activar o desactivar el sistema, usa 1 para activar y 0 para desactivar.
\t• Ejemplo para activar: ${prefix}bienvenida 1 o ${prefix}bienvenida2 1 (activa solo uno para evitar spam).
\t• Ejemplo para desactivar: ${prefix}bienvenida 0 o ${prefix}bienvenida2 0.
–
• Para cambiar la imagen de fondo de la bienvenida, envía una foto rectangular en WhatsApp y usa el comando *${prefix}fondobienvenida*.
Para cambiar la imagen de despedida, usa *${prefix}fondodespedida*.
\t→ *Nota:* Solo el propietario del bot puede usar estos comandos.
–
• Parámetros para personalizar mensajes:
*#hora#* → Muestra la hora exacta de entrada o salida.
*#nombregrupo#* → Muestra el nombre del grupo.
*#numero#* → Muestra el número del usuario que entró o salió.
*#prefix#* → Muestra el prefijo usado en el bot.
*#descripcion#* → Muestra la descripción o reglas del grupo.
–
Ejemplos para mensajes personalizados:
• Para mensaje de bienvenida:
\t→ Si usas *bienvenida* (con foto): ${prefix}mensajebienvenida Tu mensaje aquí
\t→ Si usas *bienvenida2* (solo texto): ${prefix}mensajebienvenida2 Tu mensaje aquí
• Para mensaje de despedida:
\t→ Si usas *bienvenida* (con foto): ${prefix}mensajedespedida Tu mensaje aquí
\t→ Si usas *bienvenida2* (solo texto): ${prefix}mensajedespedida2 Tu mensaje aquí`
}

exports.infoDuenio = (prefix, nickDuenio, numeroDuenio, nombreBot, sender) => {
  return `Hola @${sender.split("@")[0]}, aquí están los datos de mi dueño:
–
• Número: wa.me/${numeroDuenio}
• Nombre: ${nickDuenio}`
}

exports.configBot = (prefix) => {
  return `*CÓMO CONFIGURAR EL BOT, TUTORIAL:*
–
Primero enciende el bot en Termux y abre el WhatsApp del bot en privado para usar estos comandos.
*Nota:* Puedes usar letras modificadas si quieres.
–
• *1)* Cambiar nombre del bot:
\t• ${prefix}nombre-bot NombreQueQuieres
–
• *2)* Cambiar nickname del dueño:
\t• ${prefix}nick-dueno TuNickAquí
–
• *3)* Configurar número del dueño:
\t• ${prefix}numero-dueno 558288279194
\t*Nota:* Sin símbolos + o -, sin 9 extra, debe ser igual al número de WhatsApp.
–
• *4)* Cambiar prefijo del bot:
\t• ${prefix}prefijo-bot #
\t*Nota:* Puedes usar cualquier símbolo.
–
¡Suerte! Dudas? Contacta al creador con: *${prefix}creador*`
}

exports.infoAlquiler = (prefix) => {
  return `• INFORMACIÓN SOBRE ALQUILER:
–
Nuevo sistema global para facilitar el alquiler del bot en grupos. Ya no es necesario registrar grupos para que usen el bot.
~ Comando para consultar días restantes de alquiler: *${prefix}datos* (solo admins del grupo).
–
• Configuración de alquiler:
*${prefix}modoalquiler* 1 para activar globalmente, 0 para desactivar.
–
*1.* Añadir grupo a lista de alquiler sin generar código: *${prefix}addalquiler 558298.../días*.
*2.* Quitar días de alquiler: *${prefix}quitaralquiler cantidad_días* (en grupo registrado).
*3.* Eliminar alquiler del grupo: *${prefix}delalquiler* (grupo registrado).
*4.* Activar prueba 24h gratis: *${prefix}cortesia24* (en grupo).
*5.* Ver grupos alquilados: *${prefix}listalquiler*.
*6.* Ver claves creadas y su estado: *${prefix}codelistalquiler*.
*7.* Generar clave para activar grupo: *${prefix}generarcodigoalquiler (558298.../días)*.
*8.* Eliminar código generado: *${prefix}delcodigoalquiler (código)*.
*9.* Generar clave para cortesia 24h: *${prefix}generarcodigocortesia*.
*10.* Activar grupo sin registrar alquiler: *${prefix}savegrupo*`
}

exports.infoPremium = (prefix) => {
  return `⭐ - Cómo configurar sistema Premium temporal:
–
→ Añadir usuario Premium:
*${prefix}addpremium* @usuario/días
*Nota:* Si no pones días, puedes usar 0 para infinito.
→ Remover usuario Premium:
*${prefix}delpremium* @usuario
*Nota:* Remover quita beneficios Premium.`
}

exports.infoCmdPremium = (prefix) => {
  return `⭐ - Cómo configurar comandos exclusivos Premium:
–
• Añadir comando exclusivo:
\t↳ Comando: *${prefix}addcmdprem*
\t→ Selecciona el comando del menú principal y usa este para añadirlo.
–
• Eliminar comando exclusivo:
\t↳ Comando: *${prefix}delcmdprem*
\t→ Elimina comandos exclusivos de la lista.
–
• Ver lista de comandos Premium:
\t↳ Comando: *${prefix}cmdpremlist*
\t→ Muestra todos los comandos Premium disponibles.`
}

exports.infoComandoAds = (prefix) => {
  return `⚠️ Cómo configurar anuncios automáticos en tu grupo:

*1.* ${prefix}setads Mensaje|Tiempo
> Define mensaje y tiempo (s=segundos, m=minutos, h=horas, d=días)
> Ejemplo: ${prefix}setads Síguenos|10m (anuncia cada 10 minutos)

*2.* ${prefix}delads Número
> Borra anuncio según número.

*3.* ${prefix}stopads | ${prefix}startads
> Detener o activar anuncios.

*4.* ${prefix}listads
> Lista anuncios programados en el grupo.`
}
