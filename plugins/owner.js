let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Andy', m)
  conn.sendContact(m.chat, '6285240389682', 'BUTUH BELAIAN WANITA', m)
  m.reply('wa.me/6285795431803')
}

handler.command = /^qw$/i

module.exports = handler
