const { Client } = require('discord.js');

const client = new Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
    partials: ["USER", "REACTION", "MESSAGE", "GUILD_SCHEDULED_EVENT", "GUILD_MEMBER", "CHANNEL"]
})

client.login('OTUwNDkwNzYwNzQ1MjIyMTk0.YiZrgA.YCwBkzhSSJZNf78sVqBXcFixFcA');

let dataSet = {};

Client.on('message', (message)=>{
    if(message.content == "pls.value"){
        return message.reply(dataSet[message.guild.id] || 'No data set!');
    }
});

const DBD = require('discord-dashboard');

const Dashboard = new DBD.Dashboard({
    port: 80,
    client: {
        id: '950490760745222194',
        secret: 'SKegP1e0h49RFQplxfrVY86o2toTMg-_'
    },
    redirectUri: 'http://melonxyz.tk/discord/callback',
    domain: 'http://melonxyz.tk',
    bot: client,
    theme: DarkDashboard({
    information: {
        createdBy: "iMidnight",
        websiteTitle: "iMidnight",
        websiteName: "iMidnight",
        websiteUrl: "https:/www.imidnight.ml/",
        dashboardUrl: "http://localhost:3000/",
        supporteMail: "support@imidnight.ml",
        supportServer: "https://discord.gg/yYq4UgRRzz",
        imageFavicon: "https://www.imidnight.ml/assets/img/logo-circular.png",
        iconURL: "https://www.imidnight.ml/assets/img/logo-circular.png",
        pageBackGround: "linear-gradient(#2CA8FF, #155b8d)",
        loggedIn: "Successfully signed in.",
        mainColor: "#2CA8FF",
        subColor: "#ebdbdb",
    },
    index: {
        card: {
            category: "iMidnight's Panel - The center of everything",
            title: `Welcome to the iMidnight discord where you can control the core features to the bot.`,
            image: "https://i.imgur.com/axnP93g.png",
            footer: "Footer",
        },
        information: {
            category: "Category",
            title: "Information",
            description: `This bot and panel is currently a work in progress so contact me if you find any issues on discord.`,
            footer: "Footer",
        },
        feeds: {
            category: "Category",
            title: "Information",
            description: `This bot and panel is currently a work in progress so contact me if you find any issues on discord.`,
            footer: "Footer",
        },
    },
    commands: [
        {
            category: "Starting Up",
            subTitle: "All helpful commands",
            aliasesDisabled: false,
            list: [{
                commandName: "bug",
                commandUsage: ";bug <bug>",
                commandDescription: "Report a bug to the developers of Wooar.",
                commandAlias: "No aliases"
            },
                {
                    commandName: "2nd command",
                    commandUsage: "oto.nd <arg> <arg2> [op]",
                    commandDescription: "Lorem ipsum dolor sth, arg sth arg2 stuff",
                    commandAlias: "Alias",
                },
                {
                    commandName: "Test command",
                    commandUsage: "prefix.test <arg> [op]",
                    commandDescription: "Lorem ipsum dolor sth",
                    commandAlias: "Alias",
                },
            ],
        },
    ],
    }),
    settings: [
        {
            categoryId: 'simple',
            categoryName: "Simple",
            categoryDescription: "Simple Test",
            categoryOptionsList: [
                {
                    optionId: 'test',
                    optionName: "Variable Test",
                    optionDescription: "Test variable",
                    optionType: DBD.formTypes.select('var',2,10,false,true ),
                    getActualSet: async ({guild}) => {
                        return dataSet[guild.id] || null;
                    },
                    setNew: async ({guild,newData}) => {
                        dataSet[guild.id] = newData;
                        return;
                    }
                },
            ]
        },
    ]
});

Dashboard.init();