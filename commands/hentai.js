module.exports ={

name: "hentai",

code: `$title[1;Gacha Hentong]

$description[1;**Ange bang?**]

$image[1;$httpRequest[https://api.waifu.pics/nsfw/waifu;GET;;url]]

$addTimestamp[1]

$color[1;2F3136]

$footer[1;Gacha lagi bang $username]

$addReactions[<a:emoji_18:1021674375134584853>]
$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Ini bukan channel \`nsfw\` goblok**]`

}