const moment = require('moment-timezone');
const imageConfig = require('./Ima/Imagens.json');

let ultimaImagen = null;

function obtenerImagenAleatoria(imagenes) {
    let nuevaImagen;
    do {
        nuevaImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
    } while (nuevaImagen === ultimaImagen && imagenes.length > 1);
    ultimaImagen = nuevaImagen;
    return nuevaImagen;
}

module.exports = (prefix, nombreBot, sender) => {
    if (!imageConfig || !imageConfig.brincadeira || !Array.isArray(imageConfig.brincadeira.mainImage)) {
        throw new Error("No hay imágenes disponibles en la configuración.");
    }

    const imagenes = imageConfig.brincadeira.mainImage;
    if (imagenes.length === 0) {
        throw new Error("No hay imágenes disponibles para el menú RPG.");
    }

    const imagenAleatoria = obtenerImagenAleatoria(imagenes);
    const thumbnailAdUrl = 'https://xatimg.com/image/47FHqq0plr88.jpg';
    const linkOficial = 'https://tedzinho.online';
    const horaActual = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    const fechaActual = moment().format('DD/MM/YYYY');

    const textoMenuRPG = `
╭── 🎮 MENÚ RPG ──╮
│ 📅 Fecha: ${fechaActual}
│ ⏰ Hora: ${horaActual}
│ 👤 Usuario: @${sender.split("@")[0]}
╰────────────────╯

━━━━━━━━━━━━━━━
📋 INICIALES
━━━━━━━━━━━━━━━
📌 Registrar → ${prefix}registrar
🛍️ Comprar Escova → ${prefix}comprar_escova
🪥 Escovar Dientes → ${prefix}escovar

━━━━━━━━━━━━━━━
💼 TRABAJO & PROGRESO
━━━━━━━━━━━━━━━
💼 Trabajar → ${prefix}trabajar
📊 Estado General → ${prefix}estado_rpg

━━━━━━━━━━━━━━━
🏦 BANCO & FINANZAS
━━━━━━━━━━━━━━━
🏦 Abrir Banco → ${prefix}abrir_banco
💳 Mi Cuenta → ${prefix}mi_cuenta
💸 Operaciones Bancarias:
💰 Retirar → ${prefix}retirar
💼 Depositar → ${prefix}depositar
📊 Saldo → ${prefix}saldo
📈 Rendimientos → ${prefix}rendimientos
🔁 Transferir → ${prefix}transferir
🏅 Ranking Bancos → ${prefix}ranking_bancos
🏛️ Banco Central → ${prefix}banco_central

━━━━━━━━━━━━━━━
🛍️ TIENDAS & LUJO
━━━━━━━━━━━━━━━
🏬 Tienda de Lujo → ${prefix}tienda_lujo
💎 Comprar Lujo → ${prefix}comprar_lujo

━━━━━━━━━━━━━━━
🚗 COCHES & GARAJE
━━━━━━━━━━━━━━━
🚗 Mis Coches → ${prefix}mis_coches
🅿️ Garaje → ${prefix}garaje
💳 Pagar Impuestos → ${prefix}pagar_impuestos

━━━━━━━━━━━━━━━
🏠 CASAS & PROPIEDADES
━━━━━━━━━━━━━━━
🏠 Tienda de Casas → ${prefix}tienda_casas
🏡 Comprar Casa → ${prefix}comprar_casa
🏘️ Mis Casas → ${prefix}mis_casas

━━━━━━━━━━━━━━━
🌱 MODOS DE VIDA
━━━━━━━━━━━━━━━
🌍 Ver Modos de Vida → ${prefix}modos_vida
🎯 Elegir Vida → ${prefix}elegir_vida

━━━━━━━━━━━━━━━
🎲 ACCIÓN & RIESGO
━━━━━━━━━━━━━━━
🎰 Casa de Apuestas → ${prefix}apostar
🕵️ Robar Jugador → ${prefix}robar
🪪 Pagar Fianza → ${prefix}pagar_fianza

━━━━━━━━━━━━━━━
💸 PIX & INVERSIÓN
━━━━━━━━━━━━━━━
💠 Mi Pix → ${prefix}mi_pix
📤 Hacer Pix → ${prefix}hacer_pix

━━━━━━━━━━━━━━━
🚪 SALIR DEL RPG
━━━━━━━━━━━━━━━
❌ Salir del RPG → ${prefix}salir_rpg
`;

    return {
        imagen: {
            image: { url: imagenAleatoria },
            caption: textoMenuRPG,
            contextInfo: {
                mentionedJid: [sender],
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 1,
                    mediaUrl: null,
                    title: `⚡️ ${nombreBot} ⚡️`,
                    body: `ミ★ 》  sitio oficial 《★彡`,
                    sourceUrl: linkOficial,
                    thumbnailUrl: thumbnailAdUrl,
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
