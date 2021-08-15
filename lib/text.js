const formater1 = (seconds) => {
                    const pad1 = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad1(hrs) + ':' + pad1(mins) + ':' + pad1(secs)
                }
            const uptime1 = process.uptime()
    var ramadhan2k21 = new Date("July 31, 2021 00:00:00").getTime() 

var now = new Date().getTime()
var hitungMundur = ramadhan2k21 - now 


function secondsToHms(d) {
    d = Number(d);
    var w = Math.floor(d / 36000 / 2400);
    var h = Math.floor(d / 3600 / 360 / 6);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var wDisplay = w > 0 ? w + (w == 1 ? " Hari,, " : " hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Jam,, " : " Jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
    return wDisplay + hDisplay + mDisplay + sDisplay; 
} 
const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return ` *Hi! Ini adalah fitur pada AsunaBot✨*

Good ${salam} ${pushname}, Have a nice day :)

	- Runtime : ${formater1(uptime1)} -
	- Time : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB -

Link Grup AsunaBot : https://chat.whatsapp.com/FVZnY98BQno5tbhw5KnQ6K
Masuk ke grup untuk mendapatkan hak akses lebih!
- - - *Fun Menu (Group):* - - -
-⌛ *${p+=1}.* ${prefix}group _open|close_
-⌛ *${p+=1}.* ${prefix}antilink _on|off_
-⌛ *${p+=1}.* ${prefix}antitagall _on|off_
-⌛ *${p+=1}.* ${prefix}antiviewonce _on|off_
-⌛ *${p+=1}.* ${prefix}welcome _on|off_
-⌛ *${p+=1}.* ${prefix}leave _on|off_
-⌛ *${p+=1}.* ${prefix}setgroupicon _replyImage_
-⌛ *${p+=1}.* ${prefix}setgroupname _text_
-⌛ *${p+=1}.* ${prefix}setgroupdesc _text_
-⌛ *${p+=1}.* ${prefix}hidetag _text_
-⌛ *${p+=1}.* ${prefix}getpp _@tag_
-⌛ *${p+=1}.* ${prefix}tagall
-⌛ *${p+=1}.* ${prefix}linkgroup
-⌛ *${p+=1}.* ${prefix}revoke
-⌛ *${p+=1}.* ${prefix}leave

- - - *Downloader:* - - -
-☀ *${p+=1}.* ${prefix}play _query_
-☀ *${p+=1}.* ${prefix}playvid _query_
-☀ *${p+=1}.* ${prefix}youtubedl _query_
-☀ *${p+=1}.* ${prefix}ytmp3 _link_
-☀ *${p+=1}.* ${prefix}ytmp4 _link_
-☀ *${p+=1}.* ${prefix}igstory _username_
-☀ *${p+=1}.* ${prefix}ig _link_
-☀ *${p+=1}.* ${prefix}joox _song_

- - - *Sticker:* - - -
-✙ *${p+=1}.* ${prefix}stickerwm _pack|author_
-✙ *${p+=1}.* ${prefix}takestick _pack|author_
-✙ *${p+=1}.* ${prefix}toimg _replySticker_
-✙ *${p+=1}.* ${prefix}togif _replySticker_
-✙ *${p+=1}.* ${prefix}semoji _emoji_
-✙ *${p+=1}.* ${prefix}stickerfire
-✙ *${p+=1}.* ${prefix}stickernobg
-✙ *${p+=1}.* ${prefix}stickergif
-✙ *${p+=1}.* ${prefix}sticker

- - - *Anime:* - - -
-✙ *${p+=1}.* ${prefix}anime _query_
-✙ *${p+=1}.* ${prefix}manga _query_
-✙ *${p+=1}.* ${prefix}chara _query_
-✙ *${p+=1}.* ${prefix}waifu

- - - *Edukasi:* - - -
-❐ *${p+=1}.* ${prefix}nulis _text_
-❐ *${p+=1}.* ${prefix}brainly _query_
-❐ *${p+=1}.* ${prefix}kbbi _query_
-❐ *${p+=1}.* ${prefix}wiki _query_

- - - *Searching:* - - -
-❐ *${p+=1}.* ${prefix}playstore _apk_
-❐ *${p+=1}.* ${prefix}happymod _apk_
-❐ *${p+=1}.* ${prefix}iguser _username_
-❐ *${p+=1}.* ${prefix}igstalk _username_
-❐ *${p+=1}.* ${prefix}ytsearch _query_
-❐ *${p+=1}.* ${prefix}ytplaylist _query_
-❐ *${p+=1}.* ${prefix}ytchannel _channel_
-❐ *${p+=1}.* ${prefix}shoope _product_
-❐ *${p+=1}.* ${prefix}spotify _song_
-❐ *${p+=1}.* ${prefix}gsmarena _hp_
-❐ *${p+=1}.* ${prefix}searchmusic _replyAudio_
-❐ *${p+=1}.* ${prefix}wallpaper _query_
-❐ *${p+=1}.* ${prefix}pinterest _query_
-❐ *${p+=1}.* ${prefix}googleimage _query_
-❐ *${p+=1}.* ${prefix}jagokata _kata_

- - - *Primbon:* - - -
-☂ *${p+=1}.* ${prefix}jodoh _kamu|dia_
-☂ *${p+=1}.* ${prefix}artinama _nama_
-☂ *${p+=1}.* ${prefix}artimimpi _mimpi_

- - - *Random:* - - -
-☂ *${p+=1}.* ${prefix}fml
-☂ *${p+=1}.* ${prefix}randomquran
-☂ *${p+=1}.* ${prefix}meme
-☂ *${p+=1}.* ${prefix}darkjoke
-☂ *${p+=1}.* ${prefix}pantun
-☂ *${p+=1}.* ${prefix}nickepep
-☂ *${p+=1}.* ${prefix}quotes
-☂ *${p+=1}.* ${prefix}estetikpic

- - - *Image Maker:* - - -
-✎ *${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
-✎ *${p+=1}.* ${prefix}calender _replyImage / @tag_
-✎ *${p+=1}.* ${prefix}drawing _replyImage / @tag_
-✎ *${p+=1}.* ${prefix}sketch _replyImage / @tag_

- - - *Lain Lain:* - - -
-✎ *${p+=1}.* ${prefix}tomp3 _replyVideo_
-✎ *${p+=1}.* ${prefix}removebg _replyImage / @tag_
-✎ *${p+=1}.* ${prefix}qrencode _text_
-✎ *${p+=1}.* ${prefix}tts _code|text_
-✎ *${p+=1}.* ${prefix}barcode _text_
-✎ *${p+=1}.* ${prefix}jadwalsholat _daerah_
-✎ *${p+=1}.* ${prefix}jadwaltv _channel_
-✎ *${p+=1}.* ${prefix}tebakgambar

- - - *Info:* - - -
-✎ *${p+=1}.* ${prefix}stickermenu
-✎ *${p+=1}.* ${prefix}owner
-✎ *${p+=1}.* ${prefix}limit
-✎ *${p+=1}.* ${prefix}info
-✎ *${p+=1}.* ${prefix}listvn

- - - *owner:* - - -
-✔️ *${p+=1}.* ${prefix}setpp _replyImage_
-✔️ *${p+=1}.* ${prefix}eval _text_
-✔️ *${p+=1}.* ${prefix}term _code_
-✔️ *${p+=1}.* ${prefix}block _@tag_
-✔️ *${p+=1}.* ${prefix}unblock _@tag_
-✔️ *${p+=1}.* ${prefix}join _link_
-✔️ *${p+=1}.* ${prefix}bc _text_
-✔️ *${p+=1}.* ${prefix}addvn _replyAudio/vn_
-✔️ *${p+=1}.* ${prefix}delvn _name_
-✔️ *${p+=1}.* ${prefix}premium add _@tag_
-✔️ *${p+=1}.* ${prefix}premium del _@tag_
-✔️ *${p+=1}.* ${prefix}premium list
-✔️ *${p+=1}.* ${prefix}clearall
-✔️ *${p+=1}.* ${prefix}resetlimit
`
}

const ingfo = `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript Terima kasih.
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Tunggu! sedang membuat request ke server, JANGAN SPAM YA SAYANG',
			 group: 'this command can only be used in groups!',
			 admin: 'only be used by admin!',
			 botAdmin: 'this command can only be used if the bot is an admin groups',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'This command is only for the owner!'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
