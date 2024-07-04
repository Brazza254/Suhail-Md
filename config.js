const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "245748646229";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "" SUHAIL_17_11_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcyLFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGeXlNVVdBZzdPYmgxV3JlYkpGWFVUbHdpWEVTQUwrRTJTdXhWU2lRUDg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0ODY0NjIyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDM4RjkxMjc2NUZFNkE0NDZCQ0NCRjQwQjQ2MzUyRTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTEzMDkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQ4NjQ2MjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NDJGQTYyN0NDNUZDMjkyODFGOEJBRDYzN0ZGMURDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMTMwOTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiB0cnVlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6S0xkQXBGRFNYR24zRE0zQV90NTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0MmZjZjVjLWVlYTUtNDZjMC04ZWNkLWJjOWY2MWYzNWJlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyLFxuICAgICAgMTMxLFxuICAgICAgMjQzLFxuICAgICAgOTYsXG4gICAgICAxMjQsXG4gICAgICA3MixcbiAgICAgIDEwOSxcbiAgICAgIDM0LFxuICAgICAgMTE4LFxuICAgICAgNjksXG4gICAgICA2OSxcbiAgICAgIDEzOSxcbiAgICAgIDI4LFxuICAgICAgOTMsXG4gICAgICAxODQsXG4gICAgICA1MSxcbiAgICAgIDE0MCxcbiAgICAgIDI0OSxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDcyLFxuICAgICAgOTcsXG4gICAgICAxMTYsXG4gICAgICAyNTUsXG4gICAgICAyMTksXG4gICAgICAzOSxcbiAgICAgIDgsXG4gICAgICA0NSxcbiAgICAgIDE3NixcbiAgICAgIDIwMCxcbiAgICAgIDIzNCxcbiAgICAgIDM0LFxuICAgICAgMjgsXG4gICAgICAxOTQsXG4gICAgICAxNTEsXG4gICAgICA3NixcbiAgICAgIDIwNSxcbiAgICAgIDY1LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMySlJIQUpQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDg2NDYyMjk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwMTcyNTM0MTY5NjExOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQnJhenphIPCfmq7wn5uQ8J+It++4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01uNWs5OERFTDJ2bTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1F1V0Jsa1lsUHVUbS9UaWRlSjRXejkvM0FxMFFSSmhwa0tTK3VMK29XWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPeEFLbW9BdHo2UE1NVGFQR2cxazkveWZHNzlCWFFOa0FwQjhFL3RnSnI1bE5FL1JmWVRuanBpRXhnL21ZWERWRU5nVU1wcmlhdlNHZnFsSVUrVjZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEVmpma0RrT0gvUnZOQzg4Z2xpSnZabllPNTVnSzZLN0dNK1hpTGhwVW00VUtiMmJuY0dtVUFxU29reURvT2toblZ6RDNCUGZBRFFTYnhCdGViODRpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDg2NDYyMjk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTEzMDg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2FlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4K2dTUXZ2K0NSZnF6L2UyZGZIYTJuMFhyc1hWTUZTZG5FVXV3NUxydlVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDQ4NjI2NjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDExMzA5MDU0OVwifSIKfQ== // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
