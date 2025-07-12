const moment = require('moment-timezone');
const configuracionImagenes = require('./Ima/Imagens.json');

let ultimaImagen = null;

// Selecciona una imagen aleatoria que no sea igual a la anterior
function obtenerImagenAleatoria(imagenes) {
    let nuevaImagen;
    do {
        nuevaImagen = imagenes[Math.floor(Math.random() * imagens.length)];
    } while (nuevaImagen === ultimaImagen && imagenes.length > 1);
    ultimaImagen = nuevaImagen;
    return nuevaImagen;
}

module.exports = (prefijo, nombreDelBot, remitente) => {
    if (
        !configuracionImagenes ||
        !configuracionImagenes.brincadeira ||
        !Array.isArray(configuracionImagenes.brincadeira.mainImage)
    ) {
        throw new Error("mainImage no está disponible en el archivo de configuración.");
    }

    const imagenes = configuracionImagenes.brincadeira.mainImage;

    if (imagenes.length === 0) {
        throw new Error("No hay imágenes disponibles para el menú RPG.");
    }

    const imagenAleatoria = obtenerImagenAleatoria(imagenes);
    const miniaturaAdUrl = 'https://xatimg.com/image/47FHqq0plr88.jpg';
    const sitioOficial = 'https://tedzinho.online';
    const horaActual = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    const fechaActual = moment().format('DD/MM/YYYY');

    const textoMenuRPG = `
╭── 🎮 MENÚ RPG ──╮
│ 📅 Fecha: ${fechaActual}
│ ⏰ Hora: ${horaActual}
│ 👤 Usuario: @${remitente.split("@")[0]}
╰────────────────────╯

━━━━━━━━━━━━━━━
📋 INICIO
━━━━━━━━━━━━━━━
📌 Registrar → ${prefijo}registrorpg  
🛍️ Comprar Cepillo → ${prefijo}comprarescova  
🪥 Cepillarse los Dientes → ${prefijo}escovar  

━━━━━━━━━━━━━━━
💼 TRABAJO Y PROGRESO
━━━━━━━━━━━━━━━
💼 Trabajar → ${prefijo}trabalhar  
📊 Estado General → ${prefijo}statusrpg  

━━━━━━━━━━━━━━━
🏦 BANCO Y FINANZAS
━━━━━━━━━━━━━━━
🏦 Abrir Banco → ${prefijo}abrirbanco  
💳 Mi Cuenta → ${prefijo}minhaconta  
💸 Operaciones Bancarias:  
💰 Retirar → ${prefijo}sacarrpg  
💼 Depositar → ${prefijo}depositarrpg  
📊 Saldo → ${prefijo}saldorpg  
📈 Rendimientos → ${prefijo}rendimentorpg  
🔁 Transferencia → ${prefijo}transferirrpg  
🏅 Ranking Bancario → ${prefijo}rankbancos  
🏛️ Banco Central → ${prefijo}bancorpg  

━━━━━━━━━━━━━━━
🛍️ TIENDAS Y LUJO
━━━━━━━━━━━━━━━
🏬 Tienda de Lujo → ${prefijo}lojadeluxorpg  
💎 Comprar de Lujo → ${prefijo}comprarrpgdeluxo  

━━━━━━━━━━━━━━━
🚗 COCHES Y GARAJE
━━━━━━━━━━━━━━━
🚗 Mis Coches → ${prefijo}meuscarros  
🅿️ Garaje → ${prefijo}garagemrpg  
💳 Pagar Impuestos → ${prefijo}pagarpva  

━━━━━━━━━━━━━━━
🏠 CASAS E INMUEBLES
━━━━━━━━━━━━━━━
🏠 Tienda de Casas → ${prefijo}lojacasasrpg  
🏡 Comprar Casa → ${prefijo}comprarrpgcasa  
🏘️ Mis Casas → ${prefijo}minhascasasrpg  

━━━━━━━━━━━━━━━
🌱 ESTILOS DE VIDA
━━━━━━━━━━━━━━━
🌍 Ver Estilos de Vida → ${prefijo}modosvida  
🎯 Elegir Estilo de Vida → ${prefijo}escolhervida  

━━━━━━━━━━━━━━━
🎲 ACCIÓN Y RIESGO
━━━━━━━━━━━━━━━
🎰 Casa de Apuestas → ${prefijo}apostarrpg  
🕵️ Robar Jugador → ${prefijo}assaltarrpg  
🪪 Pagar Fianza → ${prefijo}pagarfianca  

━━━━━━━━━━━━━━━
💸 PIX E INVERSIÓN
━━━━━━━━━━━━━━━
💠 Mi Pix → ${prefijo}Meupix  
📤 Enviar Pix → ${prefijo}fazerpix  

━━━━━━━━━━━━━━━
🚪 SALIR DEL RPG
━━━━━━━━━━━━━━━
❌ Salir del RPG → ${prefijo}sairrpg  
`;

    return {
        imagen: {
            image: { url: imagenAleatoria },
            caption: textoMenuRPG,
            contextInfo: {
                mentionedJid: [remitente],
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 1,
                    mediaUrl: null,
                    title: `⚡️ ${nombreDelBot} ⚡️`,
                    body: `ミ★ 》 Sitio oficial 《★彡`,
                    sourceUrl: sitioOficial,
                    thumbnailUrl: miniaturaAdUrl,
                },
            },
        },
        audio: {
            audio: { url: 'https://c.top4top.io/m_3439grqmu7.mp3' },
            mimetype: 'audio/mpeg',
            ptt: true,
        }
    };
};

