let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πΏπΎπππ΄*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[βππππβ] Report/Request Minimal π·0 caracter!*`
if (text.length > 1000) throw `*[βππππβ] Report/Request Maksimal π·000 Caracter!*`
let teks = `*ββββββ[REPORT/REQUEST]ββββββ*\n*β¬*\n*ββ§ NOMER:* wa.me/${m.sender.split`@`[0]}\n*β΄*\n*β¬*\n*ββ§ LAPORAN/REQUEST:* ${text}\n*β΄*`
conn.reply('628884357769@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ βοΈ ] Laporan/Request An Anda Sudah Di Kirim Ke Owner Terima Kasih*`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['main']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
