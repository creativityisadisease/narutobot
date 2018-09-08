const discord = require("discord.js");
var client = new discord.Client();
const token = "token";

//setup

client.on("ready", () =>{
    console.log("ready");
    client.user.setActivity ("believe it");
});

//commands (i write everything inside the same thing)

client.on("message", (message) => {
    //so it doesnt answer to bots
    if (message.author.bot) return;
  
  //so it's case insenitive
    msg = message.content.toLowerCase();
  
    //regular message command (i just copy and paste one after another)
    if(msg.startsWith ("naruto")) {
      message.channel.send ("whos callin");
    }

    if(msg.startsWith ("press f")) {
      message.channel.send ("f");
    }

    if(msg.startsWith ("fuck you naruto")) {
      message.channel.send ("im calling kakashi");
    }

    if(msg.startsWith ("fuck u naruto")) {
      message.channel.send ("im used to it");
    }

    if(msg.startsWith ("naruto fuck off")) {
      message.channel.send ("the anubi WILL come");
    }

    if(msg.startsWith ("fuck off naruto")) {
      message.channel.send ("im the fucking hokage you cant tell me what to do");
    }

//randomizer
  
  const NAME1 = [
    "sasuke",
    "saske"
    ];
  const NAME2 = [
    "did someone say sasuke? not that i,,, care or anything",
    "i WILL fuck sasuke. thats my way of ninja"
  ];

  if(NAME1.some(word => msg.includes(word))) {
    var response = NAME2 [Math.floor(Math.random() * NAME2.length)];
    
    message.channel.send(response).then().catch(console.error);
  } else;

  const BELIEVEIT = [
    "believe"
    ];
  const HITSBONG = [
    "**hits bong** believe it",
    "i believe in you. thats my way of ninja"
  ];

  if(BELIEVEIT.some(word => msg.includes(word))) {
    var response = HITSBONG [Math.floor(Math.random() * HITSBONG.length)];
    
    message.channel.send(response).then().catch(console.error);
  } else;


});

client.login(token);