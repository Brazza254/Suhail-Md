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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254748646229";




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


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_15_56_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzEyRHdrRkNoZkFGK3FDYzJ2YjY3U0xsdzhhcnVnOTBlRW1DblFlbG9Kbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDg2NDYyMjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY1MkFGRjQyMTkyRDAxQzNEQzY5NEIxMzBBNjcyNEY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEwODYxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0ODY0NjIyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjU5RkQxRTU0NjI4NzZCOURCRkJBNzE2ODQxQ0M0OTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTA4NjE3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUUJ2Q2duTjVUVnVLWE1heWZILWVCUVwiLFxuICBcInBob25lSWRcIjogXCJlZTA2NGU5Yy01YTZiLTQ5OGUtYmE5MC0zYTU2ZmQxZTVmMWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxNjMsXG4gICAgICA0NyxcbiAgICAgIDEwLFxuICAgICAgNTMsXG4gICAgICAyMzAsXG4gICAgICAxOTIsXG4gICAgICAxNjMsXG4gICAgICAxNzgsXG4gICAgICAxNDQsXG4gICAgICA3NSxcbiAgICAgIDYzLFxuICAgICAgMjQ1LFxuICAgICAgMjMsXG4gICAgICAxNzQsXG4gICAgICA4NyxcbiAgICAgIDYxLFxuICAgICAgNzMsXG4gICAgICA3LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMTQ5LFxuICAgICAgMTgsXG4gICAgICAyMDIsXG4gICAgICAyMTMsXG4gICAgICA5NyxcbiAgICAgIDE3NCxcbiAgICAgIDQ0LFxuICAgICAgMjMxLFxuICAgICAgMTYwLFxuICAgICAgMTcsXG4gICAgICAxMTQsXG4gICAgICAxNyxcbiAgICAgIDIxMixcbiAgICAgIDE2NyxcbiAgICAgIDExNCxcbiAgICAgIDExNixcbiAgICAgIDEyNixcbiAgICAgIDE4NixcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxM0FSODVTN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ4NjQ2MjI5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MDE3MjUzNDE2OTYxMTo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJyYXp6YSDwn5qu8J+bkPCfiLfvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNajVrOThERUwrTW03UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldRdVdCbGtZbFB1VG0vVGlkZUo0V3o5LzNBcTBRUkpocGtLUyt1TCtvV1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieElMWlA4V2czQUlCclBHUUgyWXN0cVRyajQzRlZHenhLQ09uWGVIOWtiWTBxamVHTEk3S0g3S2hFbGxFSGpaQUJtd3F0MCtKY05seEc4eTljQThzQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibStrazRYbUhJZ2VPajkwZTBhVVQwVTE0SExtM2pRTnQwZm40WGdaOG0xQkdCMnMvTmVad2x0UkFlbisyeHBqemNGZjF4WUJQSm43clArRlByRmZXZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ4NjQ2MjI5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEwODYxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNhV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2FXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2pMNW9mUEZFZHlwVVNoWDVXMTJ1YjhOVXlPSWVPS1o0Qk5BOEp1WkoxUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA0ODYyNjYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMDA4MzM1MzQ4XCJ9Igp9""  // PUT your SESSION_ID 


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
