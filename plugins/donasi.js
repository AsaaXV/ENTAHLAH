let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • DANA [6285240389682]
│ • TELKOMSEL [6285240389682]
│ • BUTUH DANA BUAT DATA:)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ds$/i

module.exports = handler
