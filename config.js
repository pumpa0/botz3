
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'ApiHanBotz',
}

// Other
global.owner = ['6285731855426']
global.premium = ['6285731855426']
global.packname = 'Han'
global.author = 'IG: @terserah_bomat'
global.sessionName = 'session'
global.prefa = ['!','.','/','#']
global.sp = '•'
global.mess = {
    success: '_Success_',
    admin: '_Fitur Khusus Admin Group!_',
    botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Digunakan Hanya Untuk Group!_',
    premm: '_Fitur Khusus Member Premium_',
    private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
    bot: '_Fitur Khusus Pengguna Nomor Bot_',
    wait: '_Loading..._',
    endLimit: '_Limit Harian Anda Telah Habis_',
}
global.limitawal = {
    premium: "Infinity",
    game: "15",
    free: "12",
    xpp: "1",
    xpprem: "99999999999999"
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
