#!/bin/bash

# 🌸🌿 JIMMY-BOT2 - Tu conexión suave y encantadora 🌿🌸

# 💖 Función para mostrar mensajes coloridos
echo_color() {
    local color=$1
    local message=$2
    case $color in
        "pink") echo -e "\033[1;95m$message\033[0m" ;;  # Rosa
        "lilac") echo -e "\033[1;94m$message\033[0m" ;; # Lila
        "gold") echo -e "\033[1;93m$message\033[0m" ;;  # Dorado
        "red") echo -e "\033[1;91m$message\033[0m" ;;   # Rojo
        "green") echo -e "\033[1;92m$message\033[0m" ;; # Verde
        *) echo -e "$message" ;;
    esac
}

# 🌷 Efecto de carga
loading_effect() {
    local message=${1:-"⏳ Cargando..."}
    echo -n "$message"
    for i in {1..3}; do
        echo -n " ✨"
        sleep 0.5
    done
    echo ""
}

# 🎀 Verificar si ya está conectado
verificar_conexion() {
    if [ -f "/path/to/conexion_activa.txt" ]; then
        return 0  # Conectado
    else
        return 1  # No conectado
    fi
}

# 💕 Conectar al bot
conectar() {
    local tipo_conexion=$1
    local parametro=$2
    echo_color "lilac" "🔗 Conectando mediante $tipo_conexion..."
    loading_effect "Creando vínculo..."

    if [ "$tipo_conexion" == "QR Code" ]; then
        echo_color "pink" "📸 Escanea el código QR con tu teléfono."
    else
        echo_color "gold" "🔢 Ingresa el código generado en el dispositivo."
    fi

    node connect.js "$parametro"
}

# 🗑️ Borrar archivos QR antiguos
borrar_qr() {
    local dir="./archivos/database/qr-code"
    if [ -d "$dir" ]; then
        rm -f "$dir"/*
        echo_color "green" "✅ Archivos QR eliminados con éxito."
    else
        echo_color "red" "❌ Directorio QR no encontrado."
    fi
}

# 🌸 Menú principal del JIMMY-BOT2
while true; do
    if ! verificar_conexion; then
        clear
        echo_color "pink"  "****************************************************"
        echo_color "gold"  " 💕✨ Bienvenido a JIMMY-BOT2 ✨💕"
        echo_color "pink"  "****************************************************"
        echo ""
        echo_color "lilac" "🌿 Una conexión delicada y poderosa para ti 🌿"
        echo ""

        echo_color "gold"   "🔽 Elige una opción:"
        echo ""
        echo_color "pink"  "  1️⃣  Conectar con código QR 📷"
        echo_color "pink"  "  2️⃣  Conectar con código numérico 🔢"
        echo_color "lilac" "  3️⃣  Instalar dependencias 🛠️"
        echo_color "lilac" "  4️⃣  Abrir canal de YouTube 🎀"
        echo_color "gold"  "  5️⃣  Borrar archivos QR 🗑️"
        echo_color "red"   "  6️⃣  Salir 🚪"
        echo ""

        read -t 15 -p "⌛ Elige tu opción (máx 15s): " opcion
        echo ""

        if [ -z "$opcion" ]; then
            echo_color "gold" "⏳ Tiempo agotado. Conectando automáticamente..."
            conectar "QR Code" "no"
        else
            case $opcion in
                1|1️⃣)
                    conectar "QR Code" "no"
                    ;;
                2|2️⃣)
                    conectar "Código" "sí"
                    ;;
                3|3️⃣)
                    echo_color "gold" "🌷 Instalando dependencias..."
                    loading_effect "Preparando todo..."
                    apt-get update -y
                    apt-get upgrade -y
                    apt install -y nodejs nodejs-lts ffmpeg wget git
                    echo_color "green" "✅ ¡Listo! Ahora ejecuta 'sh start.sh' para conectar."
                    ;;
                4|4️⃣)
                    echo_color "lilac" "🎀 Abriendo canal de YouTube..."
                    xdg-open "https://youtube.com/@TuCanal" 2>/dev/null
                    ;;
                5|5️⃣)
                    borrar_qr
                    ;;
                6|6️⃣)
                    echo_color "red" "👋 Gracias por usar JIMMY-BOT2. ¡Hasta pronto!"
                    exit 0
                    ;;
                *)
                    echo_color "red" "❌ Opción inválida. Elige un número del 1 al 6."
                    ;;
            esac
        fi
    else
        echo_color "green" "🌸 ¡Conexión activa! Iniciando JIMMY-BOT2..."
        loading_effect "Organizando todo..."
        node start.js
    fi

    echo_color "red" "⚠️ Algo salió mal. Reiniciando en 5 segundos..."
    sleep 5
done

