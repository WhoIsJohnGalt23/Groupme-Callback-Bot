var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexSEA = /^\/Car SB/; botRegexKane = /^\/0/; botRegexboom = /^\/boom/; botRegexcueitup = /^\/cue it up/;
      botRegexboom2 = /^\/boom2/; botRegexIce = /^\/icy/; botRegexDez = /^\/Dez otb/; botRegexJetsO = /^\/Jets O/; botRegexIce2 = /^\/icy2/;
      botRegexIce3 = /^\/icy3/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","LA","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/WZ/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();    
   } 
  else if(request.text && botRegexIce.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/FzRA0A2.gif");
    this.res.end();
   } 
  else if(request.text && botRegexJetsO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://d31omju6te34uu.cloudfront.net/media/catalog/product/P/1/P1-ZB-11_a.jpg");
    this.res.end();    
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexDez.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/NYEAFHB94PZQI/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexIce2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://25.media.tumblr.com/d2a29d990cca9de4cd4260c15545ac6f/tumblr_mpyn0k7syX1ra7vneo1_400.gif");
    this.res.end();
  } 
  else if(request.text && botRegexIce3.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://mrwgifs.com/wp-content/uploads/2013/11/Vanilla-Ice-Freaky-Dance-Reaction-Gif.gif");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexcueitup.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/originals/7b/c0/16/7bc016582b9d073fa46f5a793c27215b.gif");
    this.res.end();
  } 
  else if(request.text && botRegexboom2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://stream1.gifsoup.com/view4/20150429/5203177/stone-cold-zamboni-o.gif");
    this.res.end();
  } 
  else if(request.text && botRegexIce.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/FzRA0A2.gif");
    this.res.end();
  } 
  else if(request.text && botRegexboom.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://68.media.tumblr.com/65b1c7e49203b41130de51bf8184b32b/tumblr_mywnofVPkf1ql0k28o5_250.gif");
    this.res.end();
  } 
  else if(request.text && botRegexKane.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://whatistheexcel.com/wooobooru/_images/4743f472cc832d2cf8b1cb2e56b434c5/9116%20-%20Raw%20autoplay_gif%20fire%20gif%20kane%20mask%20pyro%20wwf.gif");
    this.res.end();    
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/wz/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/wz/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/wz/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexSEA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.tenor.co/images/fb3f2d1e814190100a4ae401b1660d5b/tenor.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
