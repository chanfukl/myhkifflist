const V={
  KG:{n:'香港文化中心大劇院',s:'文化中心 KG',addr:'尖沙咀梳士巴利道10號',mtr:'尖沙咀站 L6/J3出口',tel:'2734 2009',cap:1734,col:'#c0392b'},
  EK:{n:'東九文化中心劇院',s:'東九 EK',addr:'九龍灣牛頭角道60號',mtr:'九龍灣站 B出口',tel:'3166 2800',cap:900,col:'#3469a7'},
  IS:{n:'英皇戲院 尖沙咀iSQUARE',s:'英皇iSQUARE IS',addr:'尖沙咀彌敦道63號iSQUARE 7樓',mtr:'尖沙咀站 H/R出口',tel:'2522 2996',cap:0,col:'#4a9058'},
  GL:{n:'GALA CINEMA 旺角',s:'GALA GL',addr:'旺角亞皆老街8號朗豪坊8樓',mtr:'旺角站 E1出口',tel:'2388 0002',cap:0,col:'#7858a5'},
  PE:{n:'PREMIERE Elements 西九龍',s:'PREMIERE PE',addr:'西九龍柯士甸道西1號圓方2樓',mtr:'九龍站 C2出口',tel:'2388 0002',cap:0,col:'#c8503c'},
  MC:{n:'M+戲院',s:'M+ Cinema MC',addr:'九龍博物館道38號M+博物館 LG層',mtr:'九龍站 C1/D1出口',tel:'2200 0217',cap:0,col:'#9b6923'},
  TS:{n:'英皇戲院 銅鑼灣時代廣場',s:'英皇TS',addr:'銅鑼灣勿地臣街1號時代廣場',mtr:'銅鑼灣站',tel:'',cap:0,col:'#3c829b'},
  AC:{n:'藝術中心 古天樂電影院',s:'Louis Koo AC',addr:'灣仔港灣道2號香港藝術中心',mtr:'灣仔站 A4出口',tel:'2582 0200',cap:0,col:'#6e5a96'},
  CT:{n:'香港大會堂劇院',s:'大會堂 CT',addr:'中環愛丁堡廣場5號',mtr:'香港站/中環站',tel:'2921 2840',cap:463,col:'#5a7850'},
};
const TR={
  'KG-IS':[8,18,10],'KG-GL':[15,40,12],'KG-PE':[12,35,10],'KG-MC':[18,40,12],'KG-TS':[10,30,14],'KG-AC':[10,22,12],'KG-CT':[12,25,14],'KG-EK':[30,90,25],
  'EK-IS':[35,80,28],'EK-GL':[30,75,25],'EK-PE':[32,80,26],'EK-MC':[40,85,30],'EK-TS':[30,75,28],'EK-AC':[35,82,30],'EK-CT':[35,85,30],
  'IS-GL':[8,25,10],'IS-PE':[6,20,8],'IS-MC':[15,35,12],'IS-TS':[5,12,8],'IS-AC':[5,14,8],'IS-CT':[15,30,14],
  'GL-PE':[7,22,9],'GL-MC':[15,35,12],'GL-TS':[8,22,10],'GL-AC':[8,22,10],'GL-CT':[15,35,14],
  'PE-MC':[12,30,10],'PE-TS':[7,22,9],'PE-AC':[7,22,9],'PE-CT':[15,35,14],
  'MC-TS':[15,35,12],'MC-AC':[15,35,12],'MC-CT':[20,42,16],
  'TS-AC':[5,14,8],'TS-CT':[15,30,14],
  'AC-CT':[15,28,12],
};
const FILMS=[
{id:1,zh:'我們不是陌生人',zhCN:'我们不是陌生人',en:'We Are All Strangers',sec:'op',dir:'陳哲藝 Anthony Chen',co:'新加坡',yr:2026,dur:158,dbs:5.6,dbn:214,cast:['楊雁雁','許家樂','林偉文'],db:'https://movie.douban.com/subject/35328629/',sc:[[1,'KG',19,30,'01KG01','qa'],[4,'KG',14,30,'04KG01','']]},
{id:2,zh:'超風',zhCN:'超风',en:'Cyclone',sec:'op',dir:'翁子光 Philip Yung',co:'香港',yr:2026,dur:119,dbs:null,dbn:0,cast:['劉語嬌','孫禾頤','廖子妤'],db:'https://movie.douban.com/subject/37193446/',sc:[[12,'KG',19,30,'12KG02','qa'],[12,'EK',20,30,'12EK02','']]},
{id:3,zh:'寂靜的朋友',zhCN:'寂静的朋友',en:'Silent Friend',sec:'ga',dir:'Ildikó Enyedi',co:'匈牙利',yr:2025,dur:145,dbs:null,dbn:0,cast:['梁朝偉'],db:'https://movie.douban.com/subject/26967871/',sc:[[7,'KG',14,30,'07KG01','qa'],[11,'KG',20,30,'11KG03','']]},
{id:4,zh:'欲愛流離',zhCN:'欲爱流离',en:'Queen at Sea',sec:'ga',dir:'Agnieszka Holland',co:'法國',yr:2025,dur:121,dbs:null,dbn:0,cast:['茱麗葉·畢諾什'],db:'',sc:[[10,'EK',17,30,'10EK01','qa'],[12,'KG',14,30,'12KG01','']]},
{id:5,zh:'斷了氣中戲',zhCN:'断了气中戏',en:'Nouvelle Vague',sec:'ga',dir:'Richard Linklater',co:'法國/美國',yr:2025,dur:106,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'TS',19,15,'04TS04','qa'],[11,'KG',17,45,'11KG02','']]},
{id:6,zh:'尋你我，覓自己',zhCN:'寻你我，觅自己',en:'In-I in Motion',sec:'ga',dir:'Akram Khan / Juliette Binoche',co:'英國',yr:2025,dur:124,dbs:null,dbn:0,cast:['茱麗葉·畢諾什','Akram Khan'],db:'',sc:[[10,'EK',20,30,'10EK02','qa'],[12,'MC',19,30,'12MC03','']]},
{id:7,zh:'回家',zhCN:'回家',en:'Back Home (Vong Pakse)',sec:'la',dir:'蔡明亮',co:'台灣/寮國',yr:2025,dur:66,dbs:null,dbn:0,cast:['Anong Houngheuangsy'],db:'https://movie.douban.com/subject/37445720/',sc:[[2,'PE',14,30,'02PE01','qa'],[4,'MC',18,0,'04MC02','']]},
{id:8,zh:'地慾廚房',zhCN:'地欲厨房',en:'Morte Cucina',sec:'la',dir:'Pen-ek Ratanaruang',co:'泰國',yr:2025,dur:96,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'PE',21,45,'05PE05'],[7,'PE',19,30,'07PE03']]},
{id:9,zh:'水的編年史',zhCN:'水的编年史',en:'The Chronology of Water',sec:'la',dir:'Kristen Stewart',co:'美國',yr:2025,dur:128,dbs:null,dbn:0,cast:['Imogen Poots'],db:'',sc:[[1,'PE',21,30,'01PE01','qa'],[7,'GL',17,15,'07GL02','']]},
{id:10,zh:'天虐有情',zhCN:'后座',en:'Pillion',sec:'la',dir:'Harry Lighton',co:'英國',yr:2025,dur:107,dbs:6.7,dbn:5062,cast:['Alexander Skarsgård','Harry Melling'],db:'https://movie.douban.com/subject/36885941/',sc:[[3,'PE',12,30,'03PE01','qa'],[5,'GL',19,30,'05GL03','']]},
{id:11,zh:'意大利第一年',zhCN:'意大利第一年',en:'Year One',sec:'la',dir:'Andrea Segre',co:'意大利',yr:2025,dur:125,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'CT',20,0,'03CT01'],[5,'AC',14,45,'05AC02']]},
{id:12,zh:'發條狗',zhCN:'恶徒',en:'Good Boy',sec:'la',dir:'Jan Komasa',co:'波蘭/英國',yr:2025,dur:110,dbs:6.8,dbn:1205,cast:['Stephen Graham','Andrea Riseborough'],db:'https://movie.douban.com/subject/36749535/',sc:[[3,'IS',19,45,'03IS04'],[5,'PE',14,45,'05PE02']]},
{id:13,zh:'末世狂沙',zhCN:'末世狂沙',en:'Sirât',sec:'la',dir:'Mathieu Kassovitz',co:'法國/摩洛哥',yr:2025,dur:115,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'KG',21,45,'04KG03'],[7,'PE',17,0,'07PE02']]},
{id:14,zh:'墜落之聲',zhCN:'坠落之声',en:'Sound of Falling',sec:'la',dir:'Mascha Schilinski',co:'德國',yr:2025,dur:155,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'PE',13,30,'03PE02','qa'],[7,'GL',14,0,'07GL01','']]},
{id:15,zh:'鏡子第三樂章',zhCN:'镜子第三乐章',en:'Mirrors No. 3',sec:'la',dir:'Sergei Loznitsa',co:'荷蘭',yr:2025,dur:86,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'IS',22,0,'03IS05'],[6,'PE',14,45,'06PE01']]},
{id:16,zh:'妻之淚',zhCN:'妻之泪',en:'My Wife Cries',sec:'la',dir:'Neus Ballús',co:'西班牙',yr:2025,dur:93,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'GL',14,15,'05GL01'],[12,'TS',17,15,'12TS03']]},
{id:17,zh:'異鄉人',zhCN:'异乡人',en:'The Stranger',sec:'la',dir:'Thomas Bidegain',co:'法國',yr:2025,dur:122,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'KG',18,0,'03KG02'],[12,'IS',16,45,'12IS03']]},
{id:18,zh:'誣網之後',zhCN:'诬网之后',en:'After the Hunt',sec:'la',dir:'Luca Guadagnino',co:'美國',yr:2025,dur:139,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'KG',21,0,'05KG03','qa'],[11,'IS',19,30,'11IS04','']]},
{id:19,zh:'浮雲盡處是人間',zhCN:'云之下',en:'Below the Clouds',sec:'ma',dir:'Gianfranco Rosi',co:'意大利',yr:2025,dur:100,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37168459/',sc:[[1,'GL',21,45,'01GL01'],[5,'TS',17,0,'05TS03']]},
{id:20,zh:'一代名伶的絕唱',zhCN:'杜塞',en:'Duse',sec:'ma',dir:'Pietro Marcello',co:'意大利',yr:2025,dur:123,dbs:6.0,dbn:307,cast:['Valeria Bruni Tedeschi'],db:'https://movie.douban.com/subject/36809537/',sc:[[1,'TS',21,30,'01TS01'],[5,'CT',14,15,'05CT01']]},
{id:21,zh:'尋找幽靈大象',zhCN:'追寻幽灵大象',en:'Ghost Elephants',sec:'ma',dir:'Werner Herzog',co:'美國',yr:2025,dur:117,dbs:7.0,dbn:254,cast:['Werner Herzog'],db:'https://movie.douban.com/subject/37148366/',sc:[[2,'KG',17,45,'02KG02','qa'],[4,'TS',14,45,'04TS02','']]},
{id:22,zh:'拼貼卡夫卡',zhCN:'弗兰茨',en:'Franz',sec:'ma',dir:'Agnieszka Holland',co:'捷克/波蘭',yr:2025,dur:127,dbs:7.0,dbn:935,cast:['Idan Weiss'],db:'https://movie.douban.com/subject/35740377/',sc:[[2,'PE',16,30,'02PE02','qa'],[5,'KG',14,30,'05KG01','']]},
{id:23,zh:'她和她談她復出的那天',zhCN:'她回来的那天',en:'The Day She Returns',sec:'ma',dir:'洪常秀',co:'韓國',yr:2026,dur:85,dbs:null,dbn:0,cast:['宋宣美','趙倫嬉'],db:'https://movie.douban.com/subject/37346409/',sc:[[5,'MC',17,15,'05MC02','qa'],[9,'PE',20,0,'09PE03','']]},
{id:24,zh:'總統的恩典',zhCN:'恩典',en:'La Grazia',sec:'ma',dir:'Paolo Sorrentino',co:'意大利',yr:2025,dur:133,dbs:7.3,dbn:2193,cast:['Toni Servillo'],db:'https://movie.douban.com/subject/37143216/',sc:[[3,'TS',17,0,'03TS03','qa'],[10,'KG',21,15,'10KG01','']]},
{id:25,zh:'檢察官的密函',zhCN:'国家公诉人',en:'Two Prosecutors',sec:'ma',dir:'Sergei Loznitsa',co:'法國/德國',yr:2025,dur:117,dbs:6.5,dbn:466,cast:[],db:'https://movie.douban.com/subject/36587901/',sc:[[4,'GL',19,30,'04GL03'],[6,'PE',16,45,'06PE02']]},
{id:26,zh:'麥哲倫之死',zhCN:'麦哲伦',en:'Magellan',sec:'ma',dir:'Lav Diaz',co:'西班牙/菲律賓',yr:2025,dur:160,dbs:6.6,dbn:198,cast:['Gael García Bernal'],db:'https://movie.douban.com/subject/37309944/',sc:[[4,'CT',19,45,'04CT03'],[6,'GL',18,45,'06GL03']]},
{id:27,zh:'我的初戀赤裸裸',zhCN:'袒露',en:'Truly Naked',sec:'wo',dir:'Murielle Jasserond',co:'荷蘭/比利時',yr:2026,dur:102,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37560459/',sc:[[4,'PE',17,15,'04PE03'],[7,'GL',20,0,'07GL03']]},
{id:28,zh:'她們不像預期的遇上',zhCN:'遇见世界',en:'Meets the World',sec:'wo',dir:'松居大悟',co:'日本',yr:2025,dur:126,dbs:7.3,dbn:1212,cast:['杉咲花','南琴奈'],db:'https://movie.douban.com/subject/36689647/',sc:[[3,'PE',21,30,'03PE04'],[6,'GL',14,15,'06GL01']]},
{id:29,zh:'衝衝衝世代',zhCN:'冲冲冲',en:'Funky Freaky Freaks',sec:'wo',dir:'韓昌禄',co:'韓國',yr:2025,dur:87,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37496492/',sc:[[5,'PE',19,15,'05PE04'],[7,'PE',22,0,'07PE04']]},
{id:30,zh:'在抹去的路上',zhCN:'通往抹去的路',en:'En Route To',sec:'wo',dir:'劉在仁',co:'韓國',yr:2025,dur:105,dbs:null,dbn:0,cast:['李智媛'],db:'https://movie.douban.com/subject/37496490/',sc:[[5,'IS',20,0,''],[7,'IS',12,30,'07IS01']]},
{id:31,zh:'青青校園少女草',zhCN:'万事顺利',en:'All Greens',sec:'wo',dir:'児山隆',co:'日本',yr:2025,dur:119,dbs:null,dbn:0,cast:['南沙良'],db:'https://movie.douban.com/subject/37069578/',sc:[[2,'PE',21,45,'02PE04'],[4,'PE',14,45,'04PE02']]},
{id:32,zh:'戴拖路的血色美學',zhCN:'德尔·托罗之血',en:'Sangre Del Toro',sec:'wo',dir:'Yves Montmayeur',co:'法國/英國',yr:2025,dur:95,dbs:null,dbn:0,cast:['Guillermo del Toro'],db:'https://movie.douban.com/subject/37352853/',sc:[[3,'AC',12,30,'03AC01'],[11,'IS',22,15,'11IS05']]},
{id:33,zh:'平生覺：芭芭拉漢瑪的酷兒路',zhCN:'永远的芭芭拉',en:'Barbara Forever',sec:'wo',dir:'Bridie Oconner',co:'美國/德國',yr:2026,dur:102,dbs:null,dbn:0,cast:['Barbara Hammer'],db:'https://movie.douban.com/subject/36538905/',sc:[[2,'MC',20,0,'02MC03'],[10,'AC',14,45,'10AC01']]},
{id:34,zh:'小津日記',zhCN:'小津日记',en:'The Ozu Diaries',sec:'wo',dir:'Daniel Raim',co:'美國',yr:2025,dur:140,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37172694/',sc:[[7,'AC',18,45,'07AC04'],[12,'MC',14,0,'12MC01']]},
{id:35,zh:'超級大都會背後：直激哥普拉',zhCN:'大都会全息录',en:'Megadoc',sec:'wo',dir:'Mike Figgis',co:'美國',yr:2025,dur:107,dbs:null,dbn:0,cast:['Francis Ford Coppola','Adam Driver'],db:'https://movie.douban.com/subject/36903442/',sc:[[5,'TS',19,30,'05TS04'],[7,'AC',16,30,'07AC03']]},
{id:36,zh:'昔文今讀安妮艾諾',zhCN:'书写人生：高中生眼中的埃尔诺',en:'Writing Life – Annie Ernaux',sec:'wo',dir:'Claire Simon',co:'法國',yr:2025,dur:90,dbs:null,dbn:0,cast:['Annie Ernaux'],db:'https://movie.douban.com/subject/37449568/',sc:[[8,'MC',17,0,'08MC02'],[11,'AC',12,45,'11AC01']]},
{id:37,zh:'鸛鳥桑田',zhCN:'西里安的故事',en:'The Tale of Silyan',sec:'wo',dir:'Tamara Kotevska',co:'北馬其頓',yr:2025,dur:81,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37445761/',sc:[[5,'AC',17,15,'05AC03'],[11,'PE',22,30,'11PE05']]},
{id:38,zh:'愛的三次告別',zhCN:'三声再见',en:'Three Goodbyes',sec:'wo',dir:'Isabel Coixet',co:'意大利/西班牙',yr:2025,dur:86,dbs:null,dbn:0,cast:['Alba Rohrwacher'],db:'https://movie.douban.com/subject/37233382/',sc:[[5,'TS',14,30,'05TS02'],[7,'KG',19,0,'07KG02']]},
{id:39,zh:'十七歲的聖召',zhCN:'礼拜天',en:'Sundays',sec:'wo',dir:'Alauda Ruiz de Azúa',co:'法國/西班牙',yr:2025,dur:117,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/36898818/',sc:[[4,'GL',14,15,'04GL02'],[11,'GL',12,30,'11GL01']]},
{id:40,zh:'英倫轉生號',zhCN:'内华达之瑰',en:'Rose of Nevada',sec:'wo',dir:'Mark Jenkin',co:'英國',yr:2025,dur:114,dbs:null,dbn:0,cast:['George MacKay'],db:'https://movie.douban.com/subject/37167155/',sc:[[2,'TS',19,0,'02TS01'],[8,'AC',14,45,'08AC02']]},
{id:41,zh:'七月尋幽記',zhCN:'桑格豪森的渴望',en:'Phantoms of July',sec:'wo',dir:'Julian Radlmaier',co:'德國',yr:2025,dur:90,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37202778/',sc:[[4,'AC',17,30,'04AC02'],[6,'IS',15,30,'06IS02']]},
{id:42,zh:'乳齒脫落時',zhCN:'乳牙',en:'Milk Teeth',sec:'wo',dir:'Mihai Mincan',co:'羅馬尼亞/法國',yr:2025,dur:104,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/36657622/',sc:[[3,'IS',21,30,''],[7,'IS',19,45,'07IS04']]},
{id:43,zh:'西非孽影',zhCN:'笑刃荒途',en:'I Only Rest in the Storm',sec:'wo',dir:'Pedro Pinho',co:'法國/葡萄牙',yr:2025,dur:211,dbs:7.2,dbn:899,cast:[],db:'https://movie.douban.com/subject/35182657/',sc:[[2,'AC',16,15,'02AC03'],[7,'CT',14,30,'07CT01']]},
{id:44,zh:'走佬雞',zhCN:'母鸡',en:'Hen',sec:'wo',dir:'Giorgos Balermpis',co:'匈牙利/德國',yr:2025,dur:84,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/35182657/',sc:[[4,'GL',22,0,'04GL04'],[10,'IS',20,0,'10IS04']]},
{id:45,zh:'總有愛在',zhCN:'留存的爱',en:'The Love That Remains',sec:'wo',dir:'Hlynur Pálmason',co:'冰島',yr:2025,dur:109,dbs:7.2,dbn:316,cast:[],db:'https://movie.douban.com/subject/36955318/',sc:[[5,'IS',21,45,'05IS04'],[7,'TS',19,15,'07TS04']]},
{id:46,zh:'母愛難治',zhCN:'为了亚当',en:"Adam's Sake",sec:'wo',dir:'Laura Wandel',co:'比利時/法國',yr:2025,dur:75,dbs:5.9,dbn:248,cast:[],db:'https://movie.douban.com/subject/36587400/',sc:[[6,'IS',12,30,''],[12,'PE',17,0,'12PE03']]},
{id:47,zh:'詩佬正傳之誤人子弟',zhCN:'诗佬正传之误人子弟',en:'A Poet',sec:'wo',dir:'Lkhagvadulam Purev-Ochir',co:'蒙古',yr:2025,dur:122,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'IS',17,0,'10IS03'],[12,'IS',19,15,'12IS04']]},
{id:48,zh:'加沙女孩的聲音',zhCN:'加沙女孩的声音',en:'The Voice of Hind Rajab',sec:'wo',dir:'',co:'',yr:2025,dur:89,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'IS',14,30,'04IS02'],[7,'KG',22,0,'07KG03']]},
{id:49,zh:'春樹',zhCN:'春树',en:'Mothertongue',sec:'wo',dir:'Sacha Polak',co:'荷蘭',yr:2025,dur:122,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'IS',19,0,'04IS04'],[6,'TS',14,45,'06TS02']]},
{id:50,zh:'羅目的黃昏',zhCN:'罗目的黄昏',en:'Gloaming in Luomu',sec:'wo',dir:'',co:'中國',yr:2025,dur:99,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'IS',21,45,'04IS05'],[6,'TS',17,30,'06TS03']]},
{id:51,zh:'詞聖的醉後一夜',zhCN:'词圣的醉后一夜',en:'Blue Moon',sec:'wo',dir:'Nanni Moretti',co:'意大利',yr:2025,dur:100,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'TS',17,0,'04TS03'],[10,'IS',22,0,'10IS05']]},
{id:52,zh:'戲劇性婚禮',zhCN:'戏剧性婚礼',en:'The Drama',sec:'wo',dir:'',co:'波蘭',yr:2025,dur:106,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'KG',19,0,'04KG02'],[6,'PE',22,0,'06PE04']]},
{id:53,zh:'EPiC: Elvis Presley in Concert',zhCN:'',en:'EPiC: Elvis Presley in Concert',sec:'wo',dir:'',co:'美國',yr:2025,dur:100,dbs:null,dbn:0,cast:['Elvis Presley'],db:'',sc:[[4,'PE',22,0,'04PE05']]},
{id:54,zh:'快要到達家了',zhCN:'快要到达家了',en:'Almost Home',sec:'wo',dir:'Yoon Dan-bi',co:'韓國',yr:2025,dur:90,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'PE',19,30,'04PE04'],[8,'TS',19,30,'08TS03']]},
{id:55,zh:'Christophers, The',zhCN:'',en:'The Christophers',sec:'wo',dir:'',co:'',yr:2025,dur:100,dbs:null,dbn:0,cast:[],db:'',sc:[[6,'KG',14,30,'06KG01'],[12,'IS',14,45,'12IS02']]},
{id:56,zh:'這年夏天，愛之尋謎',zhCN:'',en:'Romería',sec:'wo',dir:'Carla Simón',co:'西班牙',yr:2025,dur:115,dbs:null,dbn:0,cast:[],db:'',sc:[[6,'KG',17,15,'06KG02'],[9,'IS',19,0,'09IS02']]},
{id:57,zh:'文豪獄成記',zhCN:'被俘的塞万提斯',en:'The Captive',sec:'wo',dir:'Alejandro Amenábar',co:'西班牙',yr:2025,dur:134,dbs:null,dbn:0,cast:['Julio Peña'],db:'https://movie.douban.com/subject/36650563/',sc:[[5,'IS',19,0,'05IS03'],[9,'IS',21,30,'09IS03']]},
{id:58,zh:'假救贖之名',zhCN:'假救赎之名',en:'Salvation',sec:'wo',dir:'',co:'',yr:2025,dur:120,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'GL',21,45,'03GL04'],[9,'IS',16,30,'09IS01']]},
{id:59,zh:'勝利前別讓電影終結',zhCN:'',en:'To the Victory!',sec:'wo',dir:'',co:'比利時',yr:2025,dur:105,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'TS',14,45,'03TS02'],[7,'IS',17,30,'07IS03']]},
{id:60,zh:'廢．作戰',zhCN:'废·作战',en:'Urchin',sec:'wo',dir:'Guilherme Cezar Coelho',co:'巴西',yr:2025,dur:99,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'GL',19,30,'03GL03'],[6,'TS',22,0,'06TS05']]},
// 焦點影人：賈樟柯
{id:61,zh:'小山回家 / 公共場所',zhCN:'小山回家/公共场所',en:'Xiao Shan Going Home / In Public',sec:'fo',dir:'賈樟柯',co:'中國',yr:1995,dur:89,dbs:null,dbn:0,cast:['王宏偉'],db:'',sc:[[2,'AC',12,30,'02AC01']]},
{id:62,zh:'小武',zhCN:'小武',en:'Xiao Wu',sec:'fo',dir:'賈樟柯',co:'中國',yr:1997,dur:113,dbs:8.4,dbn:35000,cast:['王宏偉'],db:'https://movie.douban.com/subject/1300849/',sc:[[3,'KG',14,0,'03KG01','qa']]},
{id:63,zh:'站台',zhCN:'站台',en:'Platform',sec:'fo',dir:'賈樟柯',co:'中國',yr:2000,dur:150,dbs:8.4,dbn:52000,cast:['王宏偉','趙濤'],db:'https://movie.douban.com/subject/1305861/',sc:[[4,'MC',14,30,'04MC01','qa']]},
{id:64,zh:'世界',zhCN:'世界',en:'The World',sec:'fo',dir:'賈樟柯',co:'中國',yr:2004,dur:143,dbs:8.0,dbn:28000,cast:['趙濤','成泰燊'],db:'https://movie.douban.com/subject/1301348/',sc:[[6,'IS',12,30,'06IS01','']]},
{id:65,zh:'東 / 營生',zhCN:'东/营生',en:'Dong / The Hedonists',sec:'fo',dir:'賈樟柯',co:'中國',yr:2006,dur:92,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'AC',12,30,'08AC01']]},
{id:66,zh:'三峽好人',zhCN:'三峡好人',en:'Still Life',sec:'fo',dir:'賈樟柯',co:'中國',yr:2006,dur:108,dbs:8.2,dbn:45000,cast:['趙濤','韓三明'],db:'https://movie.douban.com/subject/1767199/',sc:[[7,'AC',12,30,'07AC01','qa']]},
{id:67,zh:'二十四城記',zhCN:'二十四城记',en:'24 City',sec:'fo',dir:'賈樟柯',co:'中國',yr:2008,dur:107,dbs:null,dbn:0,cast:['趙濤'],db:'https://movie.douban.com/subject/3100379/',sc:[[9,'AC',14,45,'09AC01']]},
{id:68,zh:'山河故人',zhCN:'山河故人',en:'Mountains May Depart',sec:'fo',dir:'賈樟柯',co:'中國',yr:2015,dur:126,dbs:7.5,dbn:120000,cast:['趙濤','張譯'],db:'https://movie.douban.com/subject/25938388/',sc:[[10,'IS',12,30,'10IS01','']]},
{id:69,zh:'江湖兒女',zhCN:'江湖儿女',en:'Ash is Purest White',sec:'fo',dir:'賈樟柯',co:'中國',yr:2018,dur:137,dbs:7.7,dbn:85000,cast:['趙濤','廖凡'],db:'https://movie.douban.com/subject/27119724/',sc:[[11,'IS',12,30,'11IS01','']]},
{id:70,zh:'風流一代',zhCN:'风流一代',en:'Caught by the Tides',sec:'fo',dir:'賈樟柯',co:'中國',yr:2024,dur:111,dbs:null,dbn:0,cast:['趙濤'],db:'https://movie.douban.com/subject/35983374/',sc:[[12,'AC',12,45,'12AC01','qa']]},
{id:71,zh:'汾陽小子賈樟柯',zhCN:'汾阳小子贾樟柯',en:'Jia Zhangke, a Guy from Fenyang',sec:'fo',dir:'Walter Salles',co:'巴西/法國',yr:2014,dur:105,dbs:null,dbn:0,cast:['賈樟柯'],db:'https://movie.douban.com/subject/25776012/',sc:[[12,'AC',15,15,'12AC02','']]},
// 焦點影人：茱麗葉·畢諾什
{id:72,zh:'藍白紅三部曲之藍',zhCN:'蓝白红三部曲之蓝',en:'Three Colours: Blue',sec:'fo',dir:'Krzysztof Kieślowski',co:'法國/波蘭',yr:1993,dur:94,dbs:8.5,dbn:160138,cast:['茱麗葉·畢諾什'],db:'https://movie.douban.com/subject/1292048/',sc:[[11,'KG',14,0,'11KG01','sub']]},
{id:73,zh:'別問我是誰',zhCN:'英国病人',en:'The English Patient',sec:'fo',dir:'Anthony Minghella',co:'英美',yr:1996,dur:162,dbs:8.5,dbn:295240,cast:['茱麗葉·畢諾什','Ralph Fiennes'],db:'https://movie.douban.com/subject/1291853/',sc:[[11,'TS',17,0,'11TS02','sub']]},
{id:74,zh:'似是有緣人',zhCN:'合法副本',en:'Certified Copy',sec:'fo',dir:'Abbas Kiarostami',co:'法國/意大利',yr:2010,dur:106,dbs:8.0,dbn:35420,cast:['茱麗葉·畢諾什'],db:'https://movie.douban.com/subject/2973543/',sc:[[11,'EK',20,45,'11EK02','sub']]},
// 修復
{id:75,zh:'哀樂中年',zhCN:'哀乐中年',en:'Sorrows and Joys of a Middle-Aged Man',sec:'re',dir:'桑弧',co:'中國',yr:1949,dur:110,dbs:9.3,dbn:30310,cast:['石揮'],db:'https://movie.douban.com/subject/4719384/',sc:[[5,'MC',19,30,'05MC03','qa'],[10,'AC',17,0,'10AC02','']]},
{id:76,zh:'籠民',zhCN:'笼民',en:'Cageman',sec:'re',dir:'張之亮',co:'香港',yr:1992,dur:150,dbs:8.8,dbn:15591,cast:['黃家駒','乔宏'],db:'https://movie.douban.com/subject/1306326/',sc:[[3,'MC',14,0,'03MC01','qa'],[6,'KG',20,15,'06KG03','']]},
{id:77,zh:'愛情萬歲',zhCN:'爱情万岁',en:"Vive L'Amour",sec:'re',dir:'蔡明亮',co:'台灣',yr:1994,dur:118,dbs:8.0,dbn:48927,cast:['楊貴媚','李康生'],db:'https://movie.douban.com/subject/1296370/',sc:[[2,'IS',21,15,'02IS03','qa'],[4,'MC',20,15,'04MC03','']]},
{id:78,zh:'最後勝利',zhCN:'最后胜利',en:'Final Victory',sec:'re',dir:'譚家明',co:'香港',yr:1987,dur:98,dbs:7.1,dbn:5588,cast:['曾志偉','李麗珍'],db:'https://movie.douban.com/subject/1306708/',sc:[[9,'TS',20,0,'09TS03'],[12,'AC',17,30,'12AC03']]},
{id:79,zh:'黃土地',zhCN:'黄土地',en:'Yellow Earth',sec:'re',dir:'陳凱歌',co:'中國',yr:1984,dur:89,dbs:8.4,dbn:12000,cast:['薛白','王學圻'],db:'https://movie.douban.com/subject/1296906/',sc:[[2,'KG',14,15,'02KG01','qa'],[11,'EK',17,15,'11EK01','']]},
{id:80,zh:'紅高粱',zhCN:'红高粱',en:'Red Sorghum',sec:'re',dir:'張藝謀',co:'中國',yr:1987,dur:93,dbs:8.2,dbn:28000,cast:['鞏俐','姜文'],db:'https://movie.douban.com/subject/1306476/',sc:[[4,'CT',14,30,'04CT01','qa']]},
{id:81,zh:'黑砲事件',zhCN:'黑炮事件',en:'The Black Cannon Incident',sec:'re',dir:'黃建新',co:'中國',yr:1985,dur:99,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'EK',20,0,'04EK01']]},
{id:82,zh:'油麻菜籽',zhCN:'油麻菜籽',en:'Ah Fei',sec:'re',dir:'萬仁',co:'台灣',yr:1983,dur:113,dbs:null,dbn:0,cast:[],db:'',sc:[[6,'CT',14,30,'06CT01']]},
{id:83,zh:'光陰的故事',zhCN:'光阴的故事',en:'In Our Time',sec:'re',dir:'侯孝賢/楊德昌',co:'台灣',yr:1982,dur:100,dbs:null,dbn:0,cast:[],db:'',sc:[[6,'EK',20,30,'06EK02','qa']]},
{id:84,zh:'名劍',zhCN:'名剑',en:'The Sword',sec:'re',dir:'徐克',co:'香港',yr:1980,dur:89,dbs:null,dbn:0,cast:[],db:'',sc:[[6,'EK',18,0,'06EK01'],[11,'IS',15,15,'11IS02']]},
{id:85,zh:'蝶變',zhCN:'蝶变',en:'The Butterfly Murders',sec:'re',dir:'徐克',co:'香港',yr:1979,dur:88,dbs:7.2,dbn:8661,cast:['劉兆銘','黃樹棠'],db:'https://movie.douban.com/subject/1304940/',sc:[[7,'EK',21,0,'07EK01','qa']]},
{id:86,zh:'瘋劫',zhCN:'疯劫',en:'The Secret',sec:'re',dir:'許鞍華',co:'香港',yr:1979,dur:90,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'EK',18,15,'05EK01']]},
{id:87,zh:'半邊人',zhCN:'半边人',en:'Ah Ying',sec:'re',dir:'方育平',co:'香港',yr:1982,dur:110,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'EK',21,0,'05EK02']]},
{id:88,zh:'青少年哪吒',zhCN:'青少年哪吒',en:'Rebels of the Neon God',sec:'re',dir:'蔡明亮',co:'台灣',yr:1992,dur:106,dbs:null,dbn:0,cast:['李康生'],db:'https://movie.douban.com/subject/1295689/',sc:[[3,'MC',17,30,'03MC02','qa']]},
{id:89,zh:'盜馬賊',zhCN:'盗马贼',en:'The Horse Thief',sec:'re',dir:'田壯壯',co:'中國',yr:1986,dur:89,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/1293308/',sc:[[3,'EK',20,0,'03EK01','qa']]},
{id:90,zh:'戀戀風塵',zhCN:'恋恋风尘',en:'Dust in the Wind',sec:'re',dir:'侯孝賢',co:'台灣',yr:1986,dur:113,dbs:8.6,dbn:12000,cast:['王晶文','辛樹芬'],db:'https://movie.douban.com/subject/1294406/',sc:[[12,'EK',17,30,'12EK01','qa']]},
{id:91,zh:'爸媽不在家',zhCN:'爸妈不在家',en:'Ilo Ilo',sec:'re',dir:'陳哲藝',co:'新加坡',yr:2013,dur:99,dbs:8.1,dbn:45000,cast:['楊雁雁','許家樂'],db:'https://movie.douban.com/subject/10577936/',sc:[[3,'IS',14,45,'03IS02','qa'],[6,'IS',21,45,'06IS05','']]},
{id:92,zh:'熱帶雨',zhCN:'热带雨',en:'Wet Season',sec:'re',dir:'陳哲藝',co:'新加坡',yr:2019,dur:103,dbs:7.9,dbn:18000,cast:['楊雁雁'],db:'https://movie.douban.com/subject/30219574/',sc:[[3,'IS',17,15,'03IS03','qa'],[7,'IS',22,0,'07IS05','']]},
// 香港電影
{id:93,zh:'我們不是什麼',zhCN:'我们不是什么',en:"We're Nothing At All",sec:'hk',dir:'邱禮濤',co:'香港',yr:2026,dur:128,dbs:null,dbn:0,cast:['談善言','江熙本','Ansonbean'],db:'https://movie.douban.com/subject/36870984/',sc:[[2,'KG',20,30,'02KG03','qa']]},
{id:94,zh:'大濛',zhCN:'大蒙',en:'A Foggy Tale',sec:'hk',dir:'陳玉勳',co:'台灣',yr:2025,dur:110,dbs:7.7,dbn:394,cast:['方郁婷'],db:'https://movie.douban.com/subject/36680492/',sc:[[3,'KG',21,15,'03KG03','qa'],[5,'KG',17,45,'05KG02','']]},
{id:95,zh:'廚師發辦',zhCN:'厨师发办',en:'The Dating Menu',sec:'hk',dir:'黃浩然/鐘宏傑',co:'香港',yr:2026,dur:100,dbs:null,dbn:0,cast:['盧鎮業','梁雍婷'],db:'https://movie.douban.com/subject/37516326/',sc:[[8,'KG',21,30,'08KG01','qa'],[11,'PE',12,30,'11PE01','']]},
{id:96,zh:'大分瓶',zhCN:'大分瓶',en:'Spare Queens',sec:'hk',dir:'湯仲星',co:'香港',yr:2026,dur:92,dbs:null,dbn:0,cast:['鄧麗欣','周秀娜','江熚生'],db:'https://movie.douban.com/subject/36149741/',sc:[[9,'KG',21,30,'09KG01','qa'],[12,'PE',12,30,'12PE01','']]},
{id:97,zh:'小蟲蟲大冒險',zhCN:'小虫虫大冒险',en:'A Mighty Adventure',sec:'hk',dir:'袁建滔',co:'香港',yr:2026,dur:75,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'PE',12,30,'05PE01'],[7,'AC',14,45,'07AC02']]},
{id:98,zh:'窄路微光',zhCN:'窄路微光',en:'Halo',sec:'hk',dir:'陳健朗',co:'香港',yr:2022,dur:106,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'IS',12,30,'03IS01'],[6,'IS',19,30,'06IS04']]},
{id:99,zh:'黑咖啡之味',zhCN:'黑咖啡之味',en:'On Your Lap',sec:'hk',dir:'',co:'香港',yr:2025,dur:100,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'IS',19,0,'08IS01'],[4,'AC',22,0,'04AC04']]},
// 午夜場
{id:100,zh:'瘦怨',zhCN:'糖精',en:'Saccharine',sec:'mi',dir:'Natalie Erika James',co:'澳大利亞',yr:2026,dur:107,dbs:null,dbn:0,cast:['Midori Francis'],db:'https://movie.douban.com/subject/37162852/',sc:[[3,'TS',19,45,'03TS04'],[5,'GL',22,0,'05GL04']]},
{id:101,zh:'斷手爛腳鬼工廠',zhCN:'不再入睡',en:'Sleep No More',sec:'mi',dir:'Edwin',co:'印尼',yr:2026,dur:96,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/36550900/',sc:[[8,'EK',20,45,''],[10,'GL',19,0,'10GL03'],[12,'IS',21,45,'12IS05']]},
{id:102,zh:'夾Band尋寶維京佬',zhCN:'最后的维京人',en:'The Last Viking',sec:'mi',dir:'Anders Thomas Jensen',co:'丹麥',yr:2025,dur:116,dbs:7.1,dbn:1188,cast:['Mads Mikkelsen'],db:'https://movie.douban.com/subject/36416363/',sc:[[2,'GL',21,45,'02GL04'],[4,'GL',17,0,'04GL02']]},
{id:103,zh:'洛奇恐怖晚會',zhCN:'洛基恐怖秀',en:'The Rocky Horror Picture Show',sec:'mi',dir:'Jim Sharman',co:'英國/美國',yr:1975,dur:100,dbs:8.1,dbn:29563,cast:['Tim Curry'],db:'https://movie.douban.com/subject/1292050/',sc:[[5,'CT',21,45,'05CT03','sub'],[7,'TS',21,45,'07TS05','sub']]},
{id:104,zh:'禍禍女',zhCN:'祸祸女',en:'Mag Mag',sec:'mi',dir:'吉田有里',co:'日本',yr:2025,dur:113,dbs:null,dbn:0,cast:['南沙良'],db:'https://movie.douban.com/subject/37469727/',sc:[[2,'PE',21,15,'02PE03'],[6,'GL',22,0,'06GL04']]},
{id:105,zh:'星與月是天上的洞',zhCN:'星与月是天上的洞',en:'The Stars and Moon are Holes in the Sky',sec:'mi',dir:'荒井晴彥',co:'日本',yr:2025,dur:122,dbs:null,dbn:0,cast:['綾野剛'],db:'https://movie.douban.com/subject/37512260/',sc:[[4,'GL',12,15,'04GL01'],[6,'PE',19,15,'06PE03']]},
// 新秀競賽
{id:106,zh:'分居總要在戰時',zhCN:'战时离婚指南',en:'How to Divorce During the War',sec:'fi',dir:'Andrius Blaževičius',co:'立陶宛',yr:2026,dur:108,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/36513585/',sc:[[8,'GL',14,45,'08GL01','qa'],[9,'GL',14,45,'09GL01',''],[12,'GL',21,45,'12GL05','']]},
{id:107,zh:'青鷺與少年',zhCN:'蓝鹭',en:'Blue Heron',sec:'fi',dir:'Sophie Longval',co:'加拿大/匈牙利',yr:2025,dur:90,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/36990045/',sc:[[10,'GL',17,0,'10GL02'],[12,'GL',15,30,'12GL02']]},
{id:108,zh:'無聲的成人禮',zhCN:'17',en:'17',sec:'fi',dir:'Kosta Mitič',co:'北馬其頓',yr:2026,dur:105,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37311282/',sc:[[8,'GL',16,45,'08GL02'],[11,'GL',17,30,'11GL03']]},
{id:109,zh:'上海女兒',zhCN:'上海女儿',en:'Shanghai Daughter',sec:'fi',dir:'沈仲旻',co:'中國',yr:2026,dur:94,dbs:null,dbn:0,cast:['梁翠珊'],db:'https://movie.douban.com/subject/36753343/',sc:[[8,'PE',14,30,'08PE01'],[10,'PE',14,30,'10PE01']]},
{id:110,zh:'地下美人',zhCN:'地下美人',en:'Number 23',sec:'fi',dir:'夏昊',co:'中國',yr:2025,dur:91,dbs:null,dbn:0,cast:['郝蕾'],db:'https://movie.douban.com/subject/26928484/',sc:[[8,'PE',17,0,'08PE02'],[11,'PE',17,30,'11PE03']]},
{id:111,zh:'你的眼睛比太陽明亮',zhCN:'你的眼睛比太阳明亮',en:'Nighttime Sounds',sec:'fi',dir:'張中臣',co:'中國',yr:2025,dur:89,dbs:null,dbn:0,cast:['陳哈琳'],db:'https://movie.douban.com/subject/36765878/',sc:[[9,'PE',22,0,'09PE04'],[12,'IS',12,30,'12IS01']]},
{id:112,zh:'一個夜晚與三個夏天',zhCN:'一个夜晚与三个夏天',en:'Linka Linka',sec:'fi',dir:'岡珍',co:'中國',yr:2025,dur:100,dbs:null,dbn:0,cast:['次仁央金'],db:'https://movie.douban.com/subject/36449264/',sc:[[8,'PE',17,0,''],[11,'PE',15,0,'11PE02']]},
{id:113,zh:'深度安靜',zhCN:'深度安静',en:'Deep Quiet Room',sec:'fi',dir:'沈可尚',co:'台灣',yr:2025,dur:107,dbs:null,dbn:0,cast:['張孝全','林依晨'],db:'https://movie.douban.com/subject/35211934/',sc:[[8,'EK',20,45,'08EK01','qa'],[10,'PE',19,30,'10PE03','']]},
{id:114,zh:'恨女的逆襲',zhCN:'恨女的逆袭',en:'A Dance with Rainbows',sec:'fi',dir:'李宜珊',co:'台灣',yr:2025,dur:122,dbs:null,dbn:0,cast:['李千娜'],db:'https://movie.douban.com/subject/36576396/',sc:[[9,'PE',17,0,'09PE02'],[12,'PE',18,45,'12PE04']]},
{id:115,zh:'核',zhCN:'核',en:'Amoeba',sec:'fi',dir:'陳思攸',co:'新加坡',yr:2025,dur:98,dbs:7.0,dbn:1077,cast:['鄭凱心'],db:'https://movie.douban.com/subject/36174652/',sc:[[10,'PE',17,0,'10PE02'],[12,'PE',21,45,'12PE05']]},
{id:116,zh:'泡泡糖女孩',zhCN:'泡泡糖女孩',en:'Ah Girl',sec:'fi',dir:'洪玉桔',co:'新加坡',yr:2026,dur:94,dbs:null,dbn:0,cast:['王宣靜'],db:'https://movie.douban.com/subject/37030720/',sc:[[9,'PE',14,30,'09PE01'],[11,'PE',20,0,'11PE04']]},
// 短片競賽
{id:117,zh:'國際短片競賽節目（一）',zhCN:'国际短片竞赛节目（一）',en:'Short Film Competition Programme I',sec:'sc',dir:'各導演',co:'國際',yr:2026,dur:101,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'TS',12,30,'04TS01'],[10,'AC',21,30,'10AC04']]},
{id:118,zh:'國際短片競賽節目（二）',zhCN:'国际短片竞赛节目（二）',en:'Short Film Competition Programme II',sec:'sc',dir:'各導演',co:'國際',yr:2026,dur:100,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'TS',12,30,'05TS01'],[11,'AC',21,30,'11AC05']]},
{id:119,zh:'國際短片競賽節目（三）',zhCN:'国际短片竞赛节目（三）',en:'Short Film Competition Programme III',sec:'sc',dir:'各導演',co:'國際',yr:2026,dur:100,dbs:null,dbn:0,cast:[],db:'',sc:[[6,'TS',12,30,'06TS01'],[12,'AC',21,30,'12AC05']]},
// 詩影像
{id:121,zh:'隱蹟之書：重寫自我',zhCN:'隐迹之书：重写自我',en:'Palimpsest: The Story of a Name',sec:'po',dir:'Mary Stephen',co:'台灣/法國',yr:2025,dur:109,dbs:null,dbn:0,cast:['Mary Stephen'],db:'https://movie.douban.com/subject/36554090/',sc:[[9,'EK',20,45,'09EK01','qa'],[11,'MC',19,30,'11MC02','']]},
{id:122,zh:'私人革命 公共空間',zhCN:'私人革命公共空间',en:'Private Revolutions, Public Spaces',sec:'po',dir:'Various',co:'亞洲',yr:2026,dur:65,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'MC',20,30,'10MC03'],[12,'MC',17,0,'12MC02']]},
{id:123,zh:'天涯還鱗記',zhCN:'Trillion',en:'Trillion',sec:'po',dir:'Viktor Kossakovsky',co:'挪威/美國',yr:2025,dur:80,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/36900211/',sc:[[3,'MC',20,30,'03MC03'],[5,'AC',19,30,'05AC04']]},
{id:124,zh:'無何有變奏',zhCN:'段终最落',en:'Pin de Fartie',sec:'po',dir:'Alejo Moguillansky',co:'阿根廷',yr:2025,dur:112,dbs:7.2,dbn:157,cast:[],db:'https://movie.douban.com/subject/36788513/',sc:[[9,'AC',21,30,'09AC04'],[11,'AC',17,15,'11AC03']]},
{id:125,zh:'願這世界如童話',zhCN:'梦巢',en:"Mare's Nest",sec:'po',dir:'Ben Rivers',co:'法國/英國',yr:2025,dur:98,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/36308713/',sc:[[8,'GL',14,45,'08GL01'],[11,'AC',14,45,'11AC02']]},
{id:126,zh:'無太陽下的新事',zhCN:'杠杆启示',en:'Levers',sec:'po',dir:'Reine Vulmeth',co:'加拿大',yr:2025,dur:71,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/37473496/',sc:[[2,'MC',17,45,'02MC02'],[7,'TS',12,30,'07TS01']]},
{id:127,zh:'羅馬浴場私語時',zhCN:'昨夜低语',en:'Last Night I Conquered the City of Thebes',sec:'po',dir:'Gabriel Abrantes',co:'西班牙',yr:2025,dur:111,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/35332340/',sc:[[8,'MC',19,30,'08MC03'],[11,'AC',21,15,'']]},
{id:128,zh:'失傳的字裏人間',zhCN:'发纸水谣',en:'Hair, Paper, Water...',sec:'po',dir:'張明歸/Nicolas Graux',co:'越南/法國',yr:2025,dur:71,dbs:7.5,dbn:170,cast:[],db:'https://movie.douban.com/subject/37202740/',sc:[[2,'MC',17,45,''],[7,'AC',14,45,'07AC02']]},
{id:129,zh:'穿州過省八座橋',zhCN:'八座桥',en:'Eight Bridges',sec:'po',dir:'James Benning',co:'美國',yr:2026,dur:82,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/38208082/',sc:[[3,'AC',18,30,'03AC04'],[9,'MC',14,30,'09MC01']]},
{id:130,zh:'噪音滋滋處處聞',zhCN:'',en:'Everything Else is Noise',sec:'po',dir:'',co:'',yr:2025,dur:70,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'TS',22,15,'03TS05'],[12,'AC',19,45,'12AC04']]},
// 環球視野（紀錄片等）
{id:131,zh:'被奪去的土地',zhCN:'我们的土地',en:'Landmarks',sec:'wo',dir:'Lucrecia Martel',co:'阿根廷/美國',yr:2025,dur:119,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/33458628/',sc:[[4,'GL',12,30,''],[6,'CT',17,15,'06CT02']]},
{id:132,zh:'探險夢埋冰原下',zhCN:'冰之墓',en:'Ice Grave',sec:'wo',dir:'Robin Hunzinger',co:'法國/瑞典',yr:2025,dur:79,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/38372824/',sc:[[2,'AC',14,30,'02AC02'],[10,'TS',20,0,'10TS04']]},
{id:133,zh:'貝魯特，你還愛我嗎？',zhCN:'你爱我吗？',en:'Do You Love Me',sec:'wo',dir:'Eliane Raheb',co:'黎巴嫩',yr:2025,dur:75,dbs:null,dbn:0,cast:[],db:'',sc:[[2,'AC',22,15,'02AC05'],[11,'TS',20,15,'11TS03']]},
{id:134,zh:'再見鳳仙花',zhCN:'再见凤仙花',en:'The Last Blossom',sec:'hk',dir:'',co:'香港',yr:2025,dur:90,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'IS',12,30,'04IS01'],[6,'TS',20,0,'06TS04']]},
{id:136,zh:'能樂師的女兒',zhCN:'能乐师的女儿',en:'The Path of Soul',sec:'wo',dir:'卓翔',co:'香港/日本',yr:2026,dur:83,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/38372833/',sc:[[3,'PE',19,15,'03PE03'],[7,'PE',12,30,'07PE01']]},
{id:137,zh:'革命詩人手札',zhCN:'革命诗人手札',en:'Amílcar',sec:'wo',dir:'',co:'葡萄牙',yr:2025,dur:87,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'AC',17,15,'05AC03'],[7,'TS',14,30,'07TS02']]},
{id:138,zh:'盜馬少年的歷險',zhCN:'盗马少年的历险',en:'Balentes',sec:'wo',dir:'',co:'薩丁尼亞',yr:2025,dur:70,dbs:null,dbn:0,cast:[],db:'https://movie.douban.com/subject/38372824/',sc:[[2,'GL',14,30,'02GL01'],[6,'GL',17,0,'06GL02']]},
{id:139,zh:'沒有人寄錢給外婆',zhCN:'',en:'Variations on a Theme',sec:'po',dir:'',co:'',yr:2025,dur:65,dbs:null,dbn:0,cast:[],db:'',sc:[[9,'GL',17,30,'09GL02'],[11,'GL',22,15,'11GL05']]},
// 修復經典（更多）
{id:142,zh:'聖貞德傳',zhCN:'圣贞德传',en:'Saint Joan',sec:'re',dir:'Otto Preminger',co:'英美',yr:1957,dur:110,dbs:null,dbn:0,cast:[],db:'',sc:[[1,'AC',21,30,'01AC01'],[3,'GL',17,30,''],[10,'MC',14,30,'10MC01']]},
{id:143,zh:'多情艷后',zhCN:'多情艳后',en:'Queen Kelly',sec:'re',dir:'Erich von Stroheim',co:'美國',yr:1929,dur:105,dbs:null,dbn:0,cast:['Gloria Swanson'],db:'',sc:[[5,'CT',17,0,'05CT02'],[7,'AC',21,30,'07AC05']]},
{id:144,zh:'波特金號戰艦',zhCN:'波将金号战舰',en:'Battleship Potemkin',sec:'re',dir:'Sergei Eisenstein',co:'蘇聯',yr:1925,dur:73,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'CT',17,45,'04CT02','sub'],[8,'MC',14,30,'08MC01','sub']]},
{id:145,zh:'Aniki-Bóbó',zhCN:'点指兵兵小灵精',en:'Aniki-Bóbó',sec:'re',dir:'Manoel de Oliveira',co:'葡萄牙',yr:1942,dur:72,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'GL',17,30,''],[12,'PE',15,15,'12PE02']]},
{id:146,zh:'林中日夜',zhCN:'林中日夜',en:'Days and Nights in the Forest',sec:'re',dir:'Satyajit Ray',co:'印度',yr:1970,dur:114,dbs:null,dbn:0,cast:[],db:'',sc:[[7,'IS',15,0,'07IS02'],[9,'AC',17,15,'09AC02']]},
{id:147,zh:'小芭舒',zhCN:'小芭舒',en:'Bashu, the Little Stranger',sec:'re',dir:'Bahram Beizai',co:'伊朗',yr:1990,dur:120,dbs:6.9,dbn:109,cast:[],db:'https://movie.douban.com/subject/1308105/',sc:[[2,'MC',14,45,'02MC01'],[4,'AC',19,30,'04AC03']]},
{id:148,zh:'模範公屋',zhCN:'预制板的故事',en:'PanelStory',sec:'re',dir:'Věra Chytilová',co:'捷克',yr:1979,dur:101,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'AC',19,15,'08AC04'],[11,'IS',17,15,'11IS03']]},
{id:149,zh:'星星問',zhCN:'星星问',en:'Stars',sec:'re',dir:'Konrad Wolf',co:'東德/保加利亞',yr:1959,dur:91,dbs:null,dbn:0,cast:[],db:'',sc:[[2,'AC',20,15,'02AC04'],[6,'IS',17,30,'06IS03']]},
// 動畫
{id:150,zh:'世界動畫精選',zhCN:'世界动画精选',en:'World Animation',sec:'an',dir:'各導演',co:'國際',yr:2026,dur:67,dbs:null,dbn:0,cast:[],db:'',sc:[[9,'AC',19,45,'09AC03'],[12,'GL',17,45,'12GL03']]},
{id:151,zh:'成人動畫精選',zhCN:'成人动画精选',en:'World Animation for Adults',sec:'an',dir:'各導演',co:'國際',yr:2026,dur:65,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'AC',19,30,'10AC03'],[12,'GL',19,45,'12GL04']]},
{id:152,zh:'謝文明動畫短片集',zhCN:'谢文明动画短片集',en:'Joe Hsieh Animation',sec:'an',dir:'謝文明',co:'台灣/香港',yr:2026,dur:69,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'PE',17,15,'05PE03'],[7,'GL',22,15,'07GL04']]},
// 補全缺失影片
{id:153,zh:'少年墮下的辯證',zhCN:'少年坠下的辩证',en:'Woman and Child',sec:'wo',dir:'',co:'',yr:2025,dur:145,dbs:null,dbn:0,cast:[],db:'',sc:[[1,'IS',21,15,'01IS01'],[3,'GL',14,30,'03GL01']]},
{id:154,zh:'公寓的二度春光',zhCN:'公寓的二度春光',en:'Calle Málaga',sec:'wo',dir:'',co:'西班牙',yr:2025,dur:116,dbs:null,dbn:0,cast:[],db:'',sc:[[2,'IS',18,45,'02IS02'],[4,'IS',16,30,'04IS03']]},
{id:155,zh:'亂世孤雛',zhCN:'乱世孤雏',en:'Orphan',sec:'wo',dir:'',co:'',yr:2025,dur:132,dbs:null,dbn:0,cast:[],db:'',sc:[[2,'TS',21,30,'02TS02'],[5,'GL',16,45,'05GL02']]},
{id:156,zh:'狂舔夫妻檔',zhCN:'狂舔夫妻档',en:'Yes',sec:'wo',dir:'',co:'',yr:2025,dur:150,dbs:null,dbn:0,cast:[],db:'',sc:[[2,'GL',18,45,'02GL03'],[8,'IS',21,15,'08IS02']]},
{id:157,zh:'我們是森林之果',zhCN:'我们是森林之果',en:'We are the Fruits of the Forest',sec:'wo',dir:'',co:'',yr:2025,dur:87,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'IS',17,0,'05IS02'],[9,'GL',19,30,'09GL03']]},
{id:159,zh:'路直路攣',zhCN:'路直路弯',en:'On the Road',sec:'wo',dir:'',co:'',yr:2025,dur:93,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'GL',19,30,'08GL03'],[10,'PE',21,45,'10PE04']]},
{id:160,zh:'心湖的漩渦',zhCN:'心湖的漩涡',en:'The Currents',sec:'wo',dir:'',co:'',yr:2025,dur:104,dbs:null,dbn:0,cast:[],db:'',sc:[[5,'AC',12,30,'05AC01'],[8,'PE',19,30,'08PE03']]},
{id:161,zh:'犯禁神作',zhCN:'犯禁神作',en:'Divine Comedy',sec:'wo',dir:'',co:'葡萄牙',yr:2025,dur:98,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'PE',12,30,'04PE01'],[7,'TS',17,0,'07TS03']]},
{id:163,zh:'世外天眼',zhCN:'世外天眼',en:'Spying Stars',sec:'wo',dir:'Anocha Suwichakornpong',co:'泰國',yr:2025,dur:98,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'AC',16,30,'03AC03'],[5,'IS',12,30,'05IS01']]},
{id:164,zh:'爸爸的背影',zhCN:'爸爸的背影',en:"My Father's Shadow",sec:'wo',dir:'',co:'摩洛哥',yr:2025,dur:93,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'TS',12,30,'03TS01'],[10,'IS',15,0,'10IS02']]},
{id:165,zh:'生命的美麗終章',zhCN:'生命的美丽终章',en:'The Ground Beneath Our Feet',sec:'wo',dir:'',co:'奧地利',yr:2025,dur:82,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'TS',15,15,'08TS01'],[10,'TS',21,45,'10TS05']]},
{id:166,zh:'林中天籟',zhCN:'林中天籁',en:'Whispers in the Woods',sec:'wo',dir:'',co:'德國',yr:2025,dur:93,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'TS',17,30,'08TS02'],[12,'TS',15,15,'12TS02']]},
{id:167,zh:'紅塵百劫話童年',zhCN:'红尘百劫话童年',en:'Memory',sec:'wo',dir:'',co:'',yr:2025,dur:98,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'TS',21,45,'08TS04'],[10,'TS',12,30,'10TS01']]},
{id:168,zh:'蟲草姊妹花',zhCN:'虫草姐妹花',en:'Goodbye Sisters',sec:'wo',dir:'',co:'',yr:2025,dur:90,dbs:null,dbn:0,cast:[],db:'',sc:[[9,'TS',14,45,'09TS01'],[11,'TS',22,0,'11TS04']]},
{id:169,zh:'從前有個快活谷',zhCN:'从前有个快活谷',en:'Good Valley Stories',sec:'hk',dir:'',co:'香港',yr:2025,dur:122,dbs:null,dbn:0,cast:[],db:'',sc:[[9,'TS',17,0,'09TS02'],[12,'TS',19,15,'12TS04']]},
{id:170,zh:'大象與松鼠',zhCN:'大象与松鼠',en:'Elephants & Squirrels',sec:'wo',dir:'',co:'',yr:2025,dur:115,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'TS',15,0,'10TS02'],[12,'TS',12,30,'12TS01']]},
{id:171,zh:'伊朗女孩十八變',zhCN:'伊朗女孩十八变',en:'All My Sisters',sec:'wo',dir:'',co:'伊朗',yr:2025,dur:78,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'TS',17,45,'10TS03'],[12,'TS',22,0,'12TS05']]},
{id:172,zh:'過去未來進行式',zhCN:'过去未来进行式',en:'Past Future Continuous',sec:'wo',dir:'',co:'',yr:2025,dur:76,dbs:null,dbn:0,cast:[],db:'',sc:[[9,'TS',22,0,'09TS04'],[11,'TS',14,45,'11TS01']]},
{id:173,zh:'如果你知我苦衷',zhCN:'如果你知我苦衷',en:'I Understand Your Displeasure',sec:'fi',dir:'',co:'',yr:2025,dur:93,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'GL',21,45,'08GL04'],[10,'GL',14,30,'10GL01']]},
{id:174,zh:'藤愛',zhCN:'藤爱',en:'The Ivy',sec:'wo',dir:'',co:'比利時',yr:2025,dur:99,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'GL',21,45,'10GL04'],[12,'GL',12,45,'12GL01']]},
{id:175,zh:'玫瑰',zhCN:'玫瑰',en:'Rose',sec:'fi',dir:'',co:'',yr:2025,dur:93,dbs:null,dbn:0,cast:[],db:'',sc:[[9,'GL',21,45,'09GL04'],[11,'GL',15,0,'11GL02']]},
{id:176,zh:'再見鳳仙花',zhCN:'再见凤仙花',en:'The Last Blossom',sec:'hk',dir:'',co:'香港',yr:2025,dur:90,dbs:null,dbn:0,cast:[],db:'',sc:[[6,'TS',20,0,'06TS04']]},
{id:177,zh:'深度安靜',zhCN:'深度安静',en:'Deep Quiet Room (2nd)',sec:'fi',dir:'沈可尚',co:'台灣',yr:2025,dur:107,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'PE',19,30,'10PE03']]},
{id:178,zh:'亞洲短片基金得奬作品',zhCN:'',en:'New Voices of Asia: Short Film Fund',sec:'sc',dir:'各導演',co:'亞洲',yr:2026,dur:77,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'MC',17,0,'10MC02']]},
{id:179,zh:'生命的美麗終章（二）',zhCN:'',en:'The Ground Beneath Our Feet (2nd)',sec:'wo',dir:'',co:'',yr:2025,dur:82,dbs:null,dbn:0,cast:[],db:'',sc:[[10,'TS',21,45,'10TS05']]},
{id:180,zh:'心湖的漩渦（二）',zhCN:'',en:'The Currents (2nd)',sec:'wo',dir:'',co:'',yr:2025,dur:104,dbs:null,dbn:0,cast:[],db:'',sc:[[8,'PE',19,30,'08PE03']]},
// ── 大師班 / 講座 / 特別活動 ──
{id:901,zh:'陳凱歌大師班',zhCN:'陈凯歌大师班',en:'Chen Kaige Masterclass',sec:'ev',dir:'陳凱歌',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[2,'KG',15,50,'','']]},
{id:902,zh:'賈樟柯名家講座',zhCN:'贾樟柯名家讲座',en:'Jia Zhangke In Focus Talk',sec:'ev',dir:'賈樟柯',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'KG',16,0,'','']]},
{id:903,zh:'田壯壯大師班',zhCN:'田壮壮大师班',en:'Tian Zhuangzhuang Masterclass',sec:'ev',dir:'田壯壯',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[3,'EK',21,30,'','']]},
{id:904,zh:'陳哲藝名家講座',zhCN:'陈哲艺名家讲座',en:'Anthony Chen In Focus Talk',sec:'ev',dir:'陳哲藝',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'KG',17,10,'','']]},
{id:905,zh:'黃建新大師班',zhCN:'黄建新大师班',en:'Huang Jianxin Masterclass',sec:'ev',dir:'黃建新',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'EK',21,40,'','']]},
{id:906,zh:'華語電影座談會',zhCN:'华语电影座谈会',en:'Chinese Cinema Symposium',sec:'ev',dir:'',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[4,'CT',16,10,'','']]},
{id:907,zh:'Ildikó Enyedi大師班',zhCN:'伊迪高安怡迪大师班',en:'Ildikó Enyedi Masterclass',sec:'ev',dir:'Ildikó Enyedi',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[7,'KG',17,0,'','']]},
{id:908,zh:'茱麗葉·畢諾什大師班',zhCN:'朱丽叶·比诺什大师班',en:'Juliette Binoche Masterclass',sec:'ev',dir:'Juliette Binoche',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[11,'KG',15,40,'','']]},
{id:909,zh:'電影剪接座談會',zhCN:'电影剪接座谈会',en:'Film Editing Symposium',sec:'ev',dir:'',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[11,'MC',17,0,'','']]},
{id:910,zh:'火鳥大獎頒獎禮',zhCN:'火鸟大奖颁奖礼',en:'Firebird Award Ceremony',sec:'ev',dir:'',co:'香港',yr:2026,dur:60,dbs:null,dbn:0,cast:[],db:'',sc:[[12,'KG',17,0,'','']]},

];

// 以下函数逻辑已混淆（示例占位，实际请使用 javascript-obfuscator）

const SCOL={op:'#c0392b',ga:'#be9b37',la:'#3469a7',ma:'#3c829b',ci:'#4a9058',re:'#7858a5',hk:'#c8503c',fo:'#9b6923',mi:'#376d8c',sc:'#645096',po:'#4b6e46',wo:'#557864',an:'#8c5050',fi:'#466482',ot:'#505050',ev:'#d4a843'};
const SLBL={op:'開幕/閉幕',ga:'晚會首映',la:'Les Auteurs',ma:'大師級',ci:'華語電影',re:'修復',hk:'香港電影',fo:'焦點影人',mi:'午夜場',sc:'短片競賽',po:'詩影像',wo:'環球視野',an:'動畫',fi:'新秀競賽',ot:'其他',ev:'大師班/講座'};





// Transit (minutes) - 公共交通+步行 (transit), 步行 (walk), 開車 (drive)
// Source: Google Maps / 高德地圖 estimates

// transport mode: 0=transit, 1=walk, 2=drive
let transportMode=0;
function gt(a,b){
  if(a===b)return 0;
  var arr=TR[a+'-'+b]||TR[b+'-'+a];
  if(!arr)return [20,50,18][transportMode]||20;
  return arr[transportMode]||arr[0];
}




// ─── EVENTS (masterclasses, talks, ceremonies) ───────────────────────────────
// These share the FILMS_D array but use sec:'ev' for distinct rendering
// id: negative numbers to avoid collision with films

// Dedupe by id
var _seen=new Set();
var FILMS_D=FILMS.filter(function(f){if(_seen.has(f.id))return false;_seen.add(f.id);return true;});

// ── 大師班/講座 父子映射 ──
// key: "parentFid_dayIndex"  (dayIndex = day-1, e.g. 4/2 = di:1)
var CHILD_EVENTS={
  '79_1': {eid:901,v:'KG',sh:15,sm:50,di:1},
  '62_2': {eid:902,v:'KG',sh:16,sm:0, di:2},
  '89_2': {eid:903,v:'EK',sh:21,sm:30,di:2},
  '1_3':  {eid:904,v:'KG',sh:17,sm:10,di:3},
  '81_3': {eid:905,v:'EK',sh:21,sm:40,di:3},
  '80_3': {eid:906,v:'CT',sh:16,sm:10,di:3},
  '3_6':  {eid:907,v:'KG',sh:17,sm:0, di:6},
  '72_10':{eid:908,v:'KG',sh:15,sm:40,di:10}
};
function getChildEvent(parentFid,di){return CHILD_EVENTS[parentFid+'_'+di]||null;}
function planAddWithChild(fid,v,di,sh,sm){
  if(inPlan(fid,v,di)){toast('此場次已在排片中');return;}
  plan.push({fid:fid,v:v,di:di,sh:sh,sm:sm});
  var ev=getChildEvent(fid,di);
  if(ev&&!inPlan(ev.eid,ev.v,ev.di)){plan.push({fid:ev.eid,v:ev.v,di:ev.di,sh:ev.sh,sm:ev.sm});}
  renderPlan();renderTL(curDay);renderFG();updBadge();
  toast(ev?'✓ 已加入排片（含大師班）':'✓ 已加入排片');
}
function planRemoveWithChild(fid,di){
  plan=plan.filter(function(p){return!(p.fid===fid&&p.di===di);});
  var ev=getChildEvent(fid,di);
  if(ev){plan=plan.filter(function(p){return!(p.fid===ev.eid&&p.di===ev.di);});}
  renderPlan();renderTL(curDay);renderFG();updBadge();
  toast(ev?'已移除排片（含大師班）':'已移除排片');
}

const D={
  1:{sy:'21歲男孩與離異父親久別重逢，在陌生而熟悉的親情中重建連結。陳哲藝「成長三部曲」完結篇，探索血緣以外的家庭羈絆。楊雁雁、許家樂再度攜手，首部入圍柏林主競賽的新加坡電影。',hl:['🎬 HKIFF50 開幕電影','🐻 首部入圍柏林主競賽的新加坡電影','陳哲藝三部曲終章（前作：《爸媽不在家》《熱帶雨》）']},
  2:{sy:'跨性別女性從中國大陸南下香港尋求性別確認手術，一段跨越地理與自我的艱難旅程。翁子光以冷峻城市影像凝視當代邊緣地帶。鹿特丹影展世界首映，HKIFF50閉幕電影。',hl:['🎬 HKIFF50 閉幕電影','🌍 鹿特丹影展世界首映','主演劉語嬌、孫禾頤、廖子妤']},
  3:{sy:'退休男子在匈牙利鄉間與一頭迷途的鹿建立起難以言說的情感羈絆，在靜默中重新感受與自然的連結。梁朝偉首部歐洲語言電影，《身體與靈魂》導演Enyedi親臨HKIFF50。',hl:['🏆 威尼斯影展獲獎','⭐ 晚會首映 Gala Premiere','梁朝偉首部匈牙利語電影']},
  4:{sy:'茱麗葉·畢諾什飾演在海上漂泊的女性，在回憶洋流中追尋身世謎團。《歐洲特快車》導演霍蘭最新力作，柏林影展得獎。焦點單元「茱麗葉·畢諾什：情感編舞家」選片。',hl:['🐻 柏林影展得獎','⭐ 晚會首映 Gala Premiere','茱麗葉·畢諾什焦點單元']},
  5:{sy:'Linklater重現高達拍攝《斷了氣》現場的風雲際會，以當代眼光向法國新浪潮致敬。坎城影展首映，HKIFF50法國之夜晚會首映，一封寫給電影史的情書。',hl:['🎬 坎城影展首映','⭐ HKIFF50 法國之夜晚會首映','向法國新浪潮運動致敬']},
  6:{sy:'茱麗葉·畢諾什與當代舞蹈大師阿克蘭姆·汗的跨界舞台演出電影版，探索身體、記憶與自我認同的極限。橫跨舞蹈、戲劇與電影的獨特形式。',hl:['💃 茱麗葉·畢諾什×阿克蘭姆·汗跨界合作','⭐ 晚會首映 Gala Premiere','罕見舞台演出電影版']},
  7:{sy:'蔡明亮陪伴繆思Anong踏上返回寮國農村的旅程，以極緩慢的鏡頭語言記錄關於時間、記憶與歸屬的沉思。延續《行者》系列緩慢美學，導演親臨HKIFF50。',hl:['📽 Les Auteurs 作者電影單元','蔡明亮親臨HKIFF50','延續《行者》系列禪意美學']},
  8:{sy:'泰國名導Pen-ek最新驚悚，餐廳廚房接連發生詭異事件，大廚陷入真實與幻覺交纏的噩夢。以飲食隱喻慾望與失控，導演親臨HKIFF50。',hl:['📽 Les Auteurs 作者電影單元','Pen-ek Ratanaruang（《6ixtynin9》導演）','導演親臨HKIFF50']},
  9:{sy:'克莉絲汀·史都華執導長片處女作，改編Lidia Yuknavitch自傳體回憶錄。游泳女孩在創傷、成癮與愛之間掙扎求存，以水的意象貫串一生的傷與愈。坎城影展入圍。',hl:['🎬 坎城影展入圍','克莉絲汀·史都華導演長片處女作','根據真實回憶錄改編']},
  10:{sy:'挪威黑色喜劇，年輕女子發現男友有扮演犬隻的癖好。在荒誕外殼下解剖親密關係中的權力、接納與界線。桑丹斯影展大獎，年度最具話題獨立電影。',hl:['🏆 桑丹斯影展大獎','豆瓣 6.7（豆瓣簡體：《惡徒》）','以荒誕喜劇解析親密關係']},
  11:{sy:'義大利北部農莊，男人接手父親的土地，在傳統與現代的衝突中尋找自身立足之地。坎城一種注目單元最佳影片，以樸實鏡頭書寫土地與代際傳承。',hl:['🥇 坎城影展一種注目單元最佳影片','土地與身份認同的義大利書寫']},
  12:{sy:'波蘭導演Jan Komasa（《波蘭之惡》）英語新作，Stephen Graham、Andrea Riseborough主演。以極端情境解剖真相與謊言的邊界。豆瓣 6.8（簡體：《惡徒》）。',hl:['豆瓣 6.8（豆瓣簡體：《恶徒》）','Stephen Graham×Andrea Riseborough主演','坎城相關入圍']},
  13:{sy:'末日情境下平民與士兵橫越北非沙漠，在極端環境中道德與生存的極限試煉。《怒火青春》導演Kassovitz回歸，坎城主競賽入圍，震撼視覺體驗。',hl:['🎬 坎城影展主競賽入圍','《怒火青春》導演Kassovitz新作','末日沙漠生存道德寓言']},
  14:{sy:'橫跨百年的德國農莊，不同時代的女性命運交疊呈現。坎城主競賽入圍，年度最受矚目歐洲藝術電影，影像如詩如畫。',hl:['🎬 坎城影展主競賽入圍','跨越百年的女性命運交響詩']},
  18:{sy:'盧卡·瓜達尼諾最新劇情長片，一宗謀殺案打破小鎮平靜，記者追查中揭開層層謊言。《以你的名字呼喚我》導演以懸疑包裝探索慾望與集體共謀。',hl:['🎬 坎城影展相關入圍','《以你的名字呼喚我》導演瓜達尼諾新作']},
  19:{sy:'義大利紀錄大師吉安弗朗科·羅西（《羅馬環城高速》）最新紀錄片，以行走與凝視貫穿雲層之下的人與土地，記錄歐洲各地邊緣社群日常。',hl:['紀錄片大師吉安弗朗科·羅西新作','詩意凝視歐洲邊緣社群']},
  20:{sy:'義大利傳奇舞台劇演員Eleonora Duse傳記電影，Valeria Bruni Tedeschi傾情演繹，重現一個時代的光芒與孤獨。Pietro Marcello導演，坎城相關入圍。豆瓣 6.0。',hl:['豆瓣 6.0','坎城相關入圍','Valeria Bruni Tedeschi主演']},
  21:{sy:'傳奇導演韋納·荷索親自出鏡，深入非洲叢林追蹤神秘消失的象群，一場關於野性與人類貪婪的生態沉思。荷索一貫的極端主義精神燃燒。豆瓣 7.0。',hl:['豆瓣 7.0','傳奇導演韋納·荷索親自出鏡','影人影事單元']},
  22:{sy:'《歐洲特快車》導演霍蘭以卡夫卡為核心，拼貼傳記與寓言，探討布拉格夾縫中生存的猶太作家如何以文字抵抗荒謬的存在。豆瓣 7.0。',hl:['豆瓣 7.0','《歐洲特快車》導演霍蘭新作','拼貼手法重讀卡夫卡']},
  23:{sy:'洪常秀最新短片，宋宣美飾演久別影壇的演員，與老友重逢，在喝酒閒談與電影的夾縫中重新梳理自我。洪常秀即興對話黑白美學，靜中有動。',hl:['韓國大師洪常秀最新作品','宋宣美主演']},
  24:{sy:'索倫蒂諾繼《上帝之手》後回歸政治諷刺，托尼·塞維洛飾演陷入危機的義大利總統，以黑色幽默剖析權力的荒謬與迷途。坎城主競賽入圍。豆瓣 7.3。',hl:['🎬 坎城影展主競賽入圍','豆瓣 7.3','托尼·塞維洛主演']},
  25:{sy:'羅茲尼察以二戰蘇聯審判案件為底本，兩名立場迥異的檢察官深挖政治審判中良知、職責與恐懼的角力。豆瓣 6.5（簡體：《國家公訴人》）。',hl:['豆瓣 6.5（豆瓣簡體：《国家公诉人》）','導演Sergei Loznitsa歷史力作']},
  26:{sy:'拉夫·迪亞茲以麥哲倫環球航行為核心拍攝160分鐘史詩，以緩慢凝重鏡頭語言重建一段探索歷史的殘酷與壯闊。蓋爾·加西亞·貝納爾主演。豆瓣 6.6。',hl:['豆瓣 6.6','拉夫·迪亞茲史詩鉅作（160分鐘）','蓋爾·加西亞·貝納爾主演']},
  28:{sy:'松居大悟新作，杉咲花領銜主演，三個女性跨越時空相遇，用幻想與現實交織的方式治愈彼此。日本票房口碑雙豐收，情感細膩動人。豆瓣 7.3。',hl:['豆瓣 7.3','杉咲花主演']},
  33:{sy:'記錄酷兒電影先驅Barbara Hammer的一生創作與行動主義。珍貴影像資料加上深度訪談，是對一位被低估傳奇的致敬。',hl:['酷兒電影先驅Barbara Hammer傳記紀錄','影人影事單元']},
  34:{sy:'以小津安二郎私人日記為線索，追尋這位電影詩人的精神世界。維姆·文德斯等大師聯袂受訪，是一封寫給小津的情書，電影愛好者的朝聖之旅。',hl:['以小津私人日記為線索','維姆·文德斯等大師受訪']},
  35:{sy:'《時時刻刻》導演邁克·費吉斯記錄科波拉拍攝《大都會》的幕後全過程，大量第一手素材揭示這部爭議鉅作背後的瘋狂與偉大。亞當·德賴弗受訪。',hl:['記錄科波拉《大都會》幕後','亞當·德賴弗等主演受訪']},
  36:{sy:'法國導演克萊爾·西蒙記錄諾貝爾文學獎得主安妮·艾諾的創作，以高中生的眼睛重讀她的作品。艾諾本人親身參與，呈現文學如何跨越代際觸動每一個生命。',hl:['諾貝爾文學獎得主安妮·艾諾親身參與','跨代際的文學傳承紀錄']},
  37:{sy:'《蜂蜜之地》導演Tamara Kotevska新作，一對農夫夫婦和他們飼養的鸛鳥，記錄鄉村消逝與人類和動物的微妙共生。詩意紀錄，令人沉醉。',hl:['《蜂蜜之地》導演Kotevska新作','人與鸛鳥的詩意共生']},
  43:{sy:'葡萄牙導演Pedro Pinho三小時半史詩，橫跨葡萄牙、巴西、非洲，三段故事交叉講述殖民歷史的幽靈如何穿越時間蔓延。豆瓣 7.2（簡體：《笑刃荒途》）。',hl:['豆瓣 7.2（豆瓣簡體：《笑刃荒途》）','長達211分鐘的殖民史詩']},
  45:{sy:'冰島導演Hlynur Pálmason新作，兩兄弟在父親去世後追尋真相，在凜冽的北歐雪景中重新理解親情與失去。豆瓣 7.2（簡體：《留存的愛》）。',hl:['豆瓣 7.2（豆瓣簡體：《留存的爱》）','冰島北歐凜冽美學']},
  57:{sy:'阿梅納瓦爾（《大開眼戒》）拍攝被囚西班牙文豪塞萬提斯的戲劇化傳記，Julio Peña主演。在監獄陰暗的角落中，偉大文學作品正在悄悄誕生。',hl:['《大開眼戒》導演阿梅納瓦爾新作','Julio Peña主演','塞萬提斯傳記戲劇']},
  62:{sy:'1997年山西小城，以扒竊為生的年輕人游走在新舊交替的社會邊緣。賈樟柯首部長片，DV質感影像開創華語獨立電影新頁。鹿特丹金虎獎，1998年HKIFF首映後一鳴驚人。豆瓣 8.4。',hl:['豆瓣 8.4（逾3.5萬人評）','🥇 鹿特丹影展金虎獎','賈樟柯首部長片，HKIFF22首映奠定國際聲譽']},
  63:{sy:'1979至1989年山西小城青年的成長史，時代洪流與個人命運的交匯。片長近三小時，賈樟柯以最宏大的敘事捕捉改革開放時代的集體記憶。威尼斯最佳亞洲電影獎。豆瓣 8.4。',hl:['豆瓣 8.4（逾5.2萬人評）','🏆 威尼斯最佳亞洲電影獎']},
  64:{sy:'北京世界公園中的保安與舞蹈員，在仿造異國景觀中渴望真實的出走。賈樟柯首部在中國正式公映的電影，趙濤×成泰燊主演，關於現代中國的憂鬱寓言。豆瓣 8.0。',hl:['豆瓣 8.0（逾2.8萬人評）','賈樟柯首部中國正式公映電影']},
  66:{sy:'三峽大壩截流前，兩個陌生人各自尋找失散的伴侶。廢墟中的人情，流逝中的時代。韓三明與趙濤交替出現，賈樟柯最完整的人文關懷之作。威尼斯金獅獎。豆瓣 8.2。',hl:['豆瓣 8.2（逾4.5萬人評）','🦁 威尼斯影展金獅獎']},
  68:{sy:'1999至2025年，趙濤飾演的女人在三段時空中目送兩個男人漸行漸遠。賈樟柯最具野心的時間之作，探討中國社會劇變中個人的失落與離散。豆瓣 7.5。',hl:['豆瓣 7.5（逾12萬人評）','🎬 坎城影展一種注目入圍']},
  69:{sy:'江湖義氣在時代洪流中褪色。趙濤為男友入獄，五年後再相見，物換星移。坎城主競賽入圍，趙濤爆發力表演令人震撼，賈樟柯最具情感厚度的作品。豆瓣 7.7。',hl:['豆瓣 7.7（逾8.5萬人評）','🎬 坎城主競賽入圍']},
  72:{sy:'車禍奪走丈夫和女兒後，茱麗葉·畢諾什飾演的音樂家試圖以遺忘和孤立重建自我。基耶斯洛夫斯基三色系列首章，威尼斯金獅+影后雙料大獎。豆瓣 8.5。',hl:['豆瓣 8.5（逾16萬人評）','🦁 威尼斯影展金獅獎+最佳女演員','三色系列首章']},
  73:{sy:'二戰烽火中，記憶喪失的傷兵由護士悉心照料，在回憶的洋流中拼湊出一段跨越沙漠的愛情史詩。奧斯卡九獎大贏家，茱麗葉·畢諾什奪最佳女配角。豆瓣 8.5。',hl:['豆瓣 8.5（逾29萬人評）','🏆 奧斯卡最佳影片等9項大獎','茱麗葉·畢諾什 奧斯卡最佳女配角']},
  74:{sy:'托斯卡納，一個英國作家和一個法國女人在幾小時內扮演起夫妻或陌生人的角色，邊界愈來愈模糊。阿巴斯最後一部歐洲作品，茱麗葉·畢諾什坎城影后。豆瓣 8.0。',hl:['豆瓣 8.0（逾3.5萬人評）','🏆 坎城影展最佳女演員','阿巴斯·基阿魯斯達米的歐洲遺作']},
  75:{sy:'1949年上海，中年父親在子女婚事與個人情感之間掙扎。石揮的表演被奉為中國電影表演的最高峰。豆瓣 9.3，修復版再現大銀幕光輝。',hl:['豆瓣 9.3（逾3萬人評）','中國電影表演巔峰之作','修復版大銀幕重映']},
  76:{sy:'香港籠屋居民以尊嚴對抗生活重壓。張之亮1992年力作，4K修復。黃家駒、乔宏、廖啟智聯袂演出。第12屆金像獎多項大獎，香港社會寫實電影里程碑。豆瓣 8.8。',hl:['豆瓣 8.8（逾1.5萬人評）','🎖 第12屆金像獎最佳電影','4K修復版大銀幕放映']},
  77:{sy:'台北空屋中三個孤獨者偶然交會，以身體的靠近填補靈魂的虛空。蔡明亮最廣為人知的傑作，楊貴媚片尾長達六分鐘哭泣一幕成為影史傳奇。威尼斯金獅獎。豆瓣 8.0。',hl:['豆瓣 8.0（逾4.9萬人評）','🦁 威尼斯影展金獅獎','楊貴媚傳奇六分鐘哭泣長鏡頭']},
  78:{sy:'香港1987年黑色犯罪電影，曾志偉飾演的小人物在江湖夾縫中求生，情義兩難全。譚家明執導，李麗珍主演，香港新浪潮電影最後的餘輝之一。豆瓣 7.1。',hl:['豆瓣 7.1','譚家明×曾志偉×李麗珍黃金陣容','修復版大銀幕放映']},
  79:{sy:'陳凱歌與張藝謀聯手震驚影壇的第五代電影宣言。以黃土地為舞台，寫盡封建傳統下個人命運的壓抑與掙扎。中國電影現代化最重要的起點之一。豆瓣 8.4。',hl:['豆瓣 8.4','第五代電影人橫空出世之作','張藝謀出道攝影作品']},
  80:{sy:'山東高粱地，鞏俐飾演的女人以野性的生命力燃燒。張藝謀導演處女作，柏林金熊獎，鞏俐首部長片出道即封神，紅色視覺美學成為中國電影代名詞。豆瓣 8.2。',hl:['豆瓣 8.2（逾2.8萬人評）','🐻 柏林影展金熊獎','張藝謀導演處女作']},
  85:{sy:'1979年香港武俠驚悚片，徐克以類型片外殼包裝現代意識，開創香港電影新美學語言。徐克長片處女作，也是香港新浪潮的標誌性作品之一。豆瓣 7.2。',hl:['豆瓣 7.2','徐克長片處女作','香港新浪潮重要作品']},
  88:{sy:'台北夜晚的邊緣青年，在霓虹燈下游蕩、偷竊、尋找歸屬。蔡明亮長片處女作，李康生初登銀幕即確立標誌性的木然凝視。金馬獎最佳原著劇本。',hl:['蔡明亮長片處女作','李康生首部主演長片']},
  89:{sy:'田壯壯1986年實驗之作，以幾乎沒有對白的影像語言，記錄藏族牧民在高原上的生死輪迴與信仰力量。被官方禁映達十年，如今公認為中國電影的不朽傑作。',hl:['被官方禁映十年的中國電影傑作','田壯壯視覺實驗突破']},
  90:{sy:'侯孝賢以最純淨的影像記錄台灣礦區少年到台北謀生的成長旅程，青春的逝去與命運的無常在一封從未寄出的信中凝固。電影史上最動人的青春告別式之一。豆瓣 8.6。',hl:['豆瓣 8.6（逾1.2萬人評）','侯孝賢最動人的青春電影']},
  91:{sy:'1997年金融危機前後的新加坡，中產家庭與菲傭之間細膩的情感羈絆。陳哲藝長片處女作，坎城金攝影機獎。開幕片《我們不是陌生人》前傳，必看配套。豆瓣 8.1。',hl:['豆瓣 8.1（逾4.5萬人評）','🏆 坎城金攝影機獎','開幕片三部曲第一章']},
  92:{sy:'新加坡華文老師陷入婚姻困境，與留守學生之間曖昧情感悄然滋長。楊雁雁憑此片奪台灣金馬影后。陳哲藝三部曲第二部，與開幕片同班人馬。豆瓣 7.9。',hl:['豆瓣 7.9（逾1.8萬人評）','台灣金馬獎最佳女演員（楊雁雁）','開幕片三部曲第二章']},
  93:{sy:'邱禮濤執導，談善言、江熙本、Ansonbean三位年輕演員主演，描繪三個渾渾噩噩的香港年輕人在城市叢林中的迷失與碰撞，以一貫犀利的城市語言呈現當代港人存在困境。',hl:['邱禮濤（《拆彈專家》導演）新作','談善言×江熙本×Ansonbean主演']},
  94:{sy:'陳玉勳（《熱帶魚》）暌違多年新作，方郁婷在迷霧籠罩的城市中尋找失蹤的身份，真相隱藏在濃霧之後。豆瓣 7.7（簡體：《大蒙》）。',hl:['豆瓣 7.7（豆瓣簡體：《大蒙》）','《熱帶魚》導演陳玉勳回歸','方郁婷主演']},
  95:{sy:'盧鎮業、梁雍婷主演的香港愛情故事，以廚師發辦料理作為約會的隱喻，探索現代都市人尋覓連結的渴望。導演黃浩然擅長細膩日常的情感書寫。',hl:['盧鎮業、梁雍婷主演','香港電影單元首映禮']},
  96:{sy:'湯仲星執導，鄧麗欣、周秀娜、江熚生聯袂演出。以棋局為隱喻，一群香港女性在規則之間博弈求存。由陳慶嘉監製（《家有囍事》系列製片）。',hl:['鄧麗欣×周秀娜×江熚生主演','監製陳慶嘉黃金組合']},
  97:{sy:'《麥兜故事》導演袁建滔暌違多年新作，真人與動畫混合的奇想冒險。以港式幽默包裝對成長與勇氣的溫柔探問，老少咸宜。',hl:['《麥兜故事》導演袁建滔新作','真人×動畫混合創作']},
  100:{sy:'澳洲恐怖電影，厭食症患者在嚴酷節食社群中越陷越深，身體界線與精神控制的恐懼以極端方式呈現。導演Natalie Erika James（《尋找蘿斯》）最新心理恐怖力作。',hl:['午夜場 Midnight Madness','《尋找蘿斯》導演新作','以恐怖類型處理飲食失調議題']},
  101:{sy:'印尼×日本×新加坡合拍午夜恐怖片。郊區神秘工廠工人身體開始異變，以類型片包裝對勞動剝削的恐怖寓言。Edwin（《在場》導演）的黑暗奇想。',hl:['午夜場 Midnight Madness','多國合拍恐怖寓言']},
  102:{sy:'丹麥喜劇，麥斯·米科爾森飾演過氣搖滾樂手轉型為維京文化愛好者，在尋寶與自我發現的荒誕旅途中重燃生命熱情。米科爾森罕見的喜劇形象，豆瓣 7.1。',hl:['豆瓣 7.1（簡體：《最後的維京人》）','麥斯·米科爾森罕見喜劇形象']},
  103:{sy:'搖滾歌手蒂姆·克里飾演外星人Frank N. Furter，以妖艷裝扮與搖滾樂顛覆一對新婚夫婦的世界。1975年邪典經典，半世紀後仍是互動觀影的無上狂歡。豆瓣 8.1。',hl:['豆瓣 8.1（逾2.9萬人評）','午夜場 Midnight Madness','全場互動觀影傳統']},
  104:{sy:'南沙良主演日本午夜驚悚，一個不斷被男性誤解和利用的女性，在各種荒誕情境中以黑色幽默反擊。日本恐怖+喜劇的混搭，充滿能量。',hl:['午夜場 Midnight Madness','南沙良主演','日本恐怖喜劇黑色混搭']},
  113:{sy:'台灣名導沈可尚新作，張孝全×林依晨久別重逢。一對婚姻陷入危機的夫婦在沉默深淵中掙扎，以海洋深潛作為情感隱喻，探索親密關係的最後邊界。',hl:['張孝全×林依晨久別同框','沈可尚（《野球孩子》導演）新作']},
  115:{sy:'新加坡導演陳思攸新作，鄭凱心主演，探索身份認同在全球化時代的消融與重構。以阿米巴原蟲的無邊界形態比喻現代人的存在狀態。豆瓣 7.0。',hl:['豆瓣 7.0','新秀電影競賽華語單元']},
  121:{sy:'著名剪輯師Mary Stephen（曾與侯孝賢、克萊爾·德尼長期合作）轉身執導，以自身混血家族歷史追尋名字背後的文化身份謎題。台灣金馬獎最佳紀錄片，4/9設映後座談。',hl:['🏆 台灣金馬獎最佳紀錄片','4/9 映後Mary Stephen×李焯桃座談','M+×HKIFF50聯合呈獻']},
  122:{sy:'M+博物館亞洲前衛電影館藏精選，呈現三部重要亞洲電影史文獻：《無題77-A》（韓，1977）、《機能喪失第三號》（台，1983）、《革命輪迴如副歌》（菲，1987）。',hl:['M+×HKIFF50聯合呈獻','三部亞洲前衛電影史重要短片']},
  123:{sy:'Viktor Kossakovsky最新紀錄片，以一隻名叫Trillion的座頭鯨為主角，記錄牠的遷徙旅程。壯闊的海洋影像加上對人類與自然關係的深沉叩問。',hl:['詩影像單元','壯闊海洋紀錄詩片']},
  124:{sy:'阿根廷導演Moguillansky以一個家庭的家務勞動為核心，用音樂、即興對話與荒誕情境構建出關於親密關係的奏鳴曲。豆瓣 7.2（簡體：《段終最落》）。',hl:['豆瓣 7.2（豆瓣簡體：《段终最落》）','詩影像單元的阿根廷奇作']},
  15:{sy:'Loznitsa的極簡實驗作品，以鏡子的反射結構出一部關於集體記憶與歷史失憶的冥想電影。拉脫維亞導演一貫的冷峻風格，是本屆Les Auteurs單元最具挑戰性的觀影體驗。',hl:['📽 Les Auteurs單元','Sergei Loznitsa的視覺實驗','挑戰傳統敘事的極簡結構']},
  16:{sy:'西班牙導演Neus Ballús以一段公路旅程展開，寡婦隨已故丈夫的司機橫越摩洛哥，在移動中重新理解悲傷、文化差異與失去。紀錄劇情交融的獨特手法，坎城相關入圍。',hl:['📽 Les Auteurs單元','坎城相關入圍','公路電影書寫悲傷的獨特手法']},
  17:{sy:'法籍阿爾及利亞裔導演Thomas Bidegain（《鏽與骨》編劇）首部自編自導長片，一個移民男子在身份認同與歸屬感之間掙扎。以異鄉視角審視當代歐洲，坎城入圍。',hl:['📽 Les Auteurs單元','《鏽與骨》編劇Thomas Bidegain自導長片','移民身份認同的當代書寫']},
  18:{sy:'盧卡·瓜達尼諾最新作品，一宗謀殺案打破小鎮平靜，記者追查過程中揭開層層謊言。《以你的名字呼喚我》導演以懸疑包裝慾望與集體共謀，坎城相關入圍。',hl:['📽 Les Auteurs單元','🎬 坎城影展相關入圍','《以你的名字呼喚我》導演瓜達尼諾新作']},
  26:{sy:'拉夫·迪亞茲以麥哲倫環球航行為核心拍攝的160分鐘史詩，以緩慢凝重鏡頭語言重建一段探索歷史的殘酷與壯闊。蓋爾·加西亞·貝納爾主演，大師級單元代表作。豆瓣6.6。',hl:['豆瓣 6.6（簡體：《麥哲倫》）','蓋爾·加西亞·貝納爾主演','拉夫·迪亞茲160分鐘史詩鉅作']},
  31:{sy:'日本導演児山隆新作，南沙良飾演的女子發現學校草地上長出了神奇的植物，以奇幻元素包裝少女間純粹的友情與微妙情感。輕盈清新的日系青春氛圍，豆瓣暫無評分。',hl:['南沙良主演','奇幻青春單元（港譯：《青青校園少女草》）','清新日系奇幻風格']},
  37:{sy:'《蜂蜜之地》導演Tamara Kotevska新作，以北馬其頓農村一對夫婦和他們飼養的鸛鳥為核心，記錄鄉村消逝與人類和動物微妙共生。詩意紀錄，令人沉醉。',hl:['《蜂蜜之地》導演Kotevska新作','人與鸛鳥的詩意共生','真的假不了單元']},
  38:{sy:'西班牙導演Isabel Coixet（《秘密日記》）新作，Alba Rohrwacher主演，以意大利老人公寓為場景，三次離別串起三代人的愛情、衰老與告別。柔美而憂傷。',hl:['《秘密日記》導演Coixet新作','Alba Rohrwacher主演','老人公寓裡的三次告別']},
  39:{sy:'西班牙女導演Alauda Ruiz de Azúa新作，一個17歲女孩感受到宗教召喚，卻不得不面對家人的不理解與社會的質疑。青春期的精神探索，坎城一種注目入圍。',hl:['坎城一種注目入圍','17歲女孩的宗教召喚','奇幻青春單元']},
  40:{sy:'英國導演Mark Jenkin（《博加諾爾》）新作，George MacKay主演，以民間傳說包裝的英倫恐怖奇幻，一個男人在海邊村莊遭遇前世輪迴的神秘力量。詭異美學令人着迷。',hl:['George MacKay主演','《博加諾爾》導演Mark Jenkin新作','英倫民間傳說奇幻恐怖']},
  41:{sy:'德國導演Julian Radlmaier以七月柏林的一個大家庭度假為舞台，以輕喜劇手法解剖階級、慾望與政治正確的種種荒謬。精緻的知識分子黑色幽默。',hl:['德國知識分子黑色喜劇','七月柏林的階級荒謬劇','坎城一種注目入圍']},
  42:{sy:'羅馬尼亞導演Mihai Mincan長片處女作，一個12歲女孩的暑假因一起意外事件徹底改變。以兒童視角直視道德困境，米格的表演令人窒息，冷靜克制的寫實風格。',hl:['羅馬尼亞導演長片處女作','12歲女孩視角直視道德困境','冷靜克制的寫實美學']},
  44:{sy:'匈牙利導演Giorgos Balermpis以一隻母雞為主角，追隨牠逃離農場的旅程，以動物視角折射人類社會的矛盾與荒謬。歐洲藝術電影中罕見的動物主角喜劇。',hl:['以母雞視角折射人類社會','匈牙利/德國合製','坎城相關入圍']},
  46:{sy:'比利時女導演Laura Wandel（《操場》）新作，聚焦一位母親對兒子過度保護的執念，在愛與控制之間的灰色地帶深掘。豆瓣5.9（簡體：《為了亞當》），坎城入圍。',hl:['豆瓣 5.9（簡體：《为了亚当》）','《操場》導演Wandel新作','愛與控制的灰色地帶']},
  47:{sy:'蒙古新銳女導演Lkhagvadulam Purev-Ochir（《雪豹》導演）新作，以一位真實存在的烏蘭巴托詩人為原型，拍攝一部充滿即興氣質的城市生活詩。',hl:['《雪豹》導演新作','烏蘭巴托城市生活詩','蒙古新銳女導演']},
  50:{sy:'中國導演拍攝的雲南羅目古鎮黃昏故事，以平靜的長鏡頭記錄一個邊陲小鎮的一天，人與自然、傳統與現代在落日光線中靜靜碰撞。詩意寫實風格。',hl:['中國獨立電影新作','雲南羅目古鎮的詩意黃昏','靜觀式長鏡頭美學']},
  51:{sy:'義大利名導Nanni Moretti最新作品，以貝多芬第七交響樂的指揮為線索，一位老導演與年輕女演員合作排演歌劇，在藝術與衰老之間找尋最後的意義。坎城主競賽。',hl:['🎬 坎城影展主競賽','Nanni Moretti（《親愛的日記》導演）新作','以貝多芬音樂貫穿的晚年沉思']},
  52:{sy:'波蘭黑色喜劇，以一場戲劇性婚禮為場景，親友之間積累多年的矛盾在婚宴上逐一爆發，幽默而辛辣地解剖當代波蘭社會的裂縫與偽善。',hl:['波蘭黑色婚禮喜劇','家庭矛盾的幽默解剖','坎城相關入圍']},
  57:{sy:'阿梅納瓦爾（《大開眼戒》編劇）拍攝被囚的西班牙文豪塞萬提斯，Julio Peña主演。在阿爾及利亞監獄的黑暗角落，一部改變世界的小說正在悄然誕生。',hl:['《大開眼戒》導演阿梅納瓦爾新作','Julio Peña主演塞萬提斯傳記','監獄中誕生的文學傳奇']},
  58:{sy:'以中東為背景的懸疑驚悚片，一個男人試圖以信仰救贖來掩蓋過去的罪行，在社區的善意與自身的謊言之間越陷越深。坎城評審矚目，結構精密。',hl:['坎城評審矩目','信仰與謊言的道德懸疑','中東背景宗教驚悚']},
  59:{sy:'比利時導演拍攝的公路紀錄電影，追蹤一支業餘單車隊在比利時和法國展開的長途騎行冒險，以輕盈幽默的筆觸捕捉普通人的友誼與堅持。溫暖勵志。',hl:['比利時公路紀錄電影','業餘單車隊的長途冒險','輕鬆幽默的人文紀錄']},
  60:{sy:'巴西導演Guilherme Cezar Coelho（《巴西的聲音》）新作，以里約熱內盧郊區一個廢棄工廠為場景，一群青年在廢墟中創作音樂，以藝術對抗貧窮與絕望。',hl:['巴西新銳導演新作','廢墟音樂與青春對抗','坎城一種注目入圍']},
  65:{sy:'賈樟柯的兩部紀錄短片：《東》跟拍畫家劉小東在三峽創作的全過程；《營生》記錄山西汾陽各行各業的普通人。兩片合映，是理解賈樟柯影像世界的珍貴入口。',hl:['賈樟柯兩部紀錄短片','跟拍畫家劉小東的三峽創作','《三峽好人》的平行文本']},
  67:{sy:'賈樟柯以城市拆遷為背景，將紀錄訪談（趙濤、陳沖、呂麗萍等）與劇情虛構交織，探索成都24城工廠的集體記憶。模糊真實與虛構的邊界，是賈樟柯最具實驗性的作品。',hl:['紀錄與劇情交融的大膽實驗','趙濤、陳沖、呂麗萍主演','坎城一種注目入圍']},
  70:{sy:'賈樟柯以趙濤從1990年代至今的影像拼貼而成的最新作品，用二十年的紀錄素材與劇情片段交織，記錄中國的時代變遷。像是給二十年時光的一封情書。',hl:['趙濤主演','以二十年影像記錄時代變遷','2024坎城主競賽入圍']},
  71:{sy:'巴西導演Walter Salles（《摩托日記》）拍攝老友賈樟柯的成長與創作歷程，深入汾陽尋訪他的電影根源，是一部關於電影之愛與鄉土情感的動人記錄。',hl:['《摩托日記》導演Walter Salles執導','深入汾陽尋訪賈樟柯的根','電影人之間的真摯情誼']},
  81:{sy:'黃建新1985年的黑色政治寓言，一工程師因一封電報被誤認為間諜，荒誕的官僚程序讓他的生活陷入困境。以幽默筆觸諷刺中國官僚體制，是第五代導演中最具現代感的作品之一。',hl:['第五代電影人政治黑色幽默','官僚荒誕主義的中國電影','修復版大銀幕放映']},
  82:{sy:'萬仁1983年台灣新電影代表作，以母親種油麻菜籽的艱苦一生為主軸，記錄台灣農村婦女在傳統家庭束縛下的隱忍與堅韌。金馬獎最佳導演，台灣女性電影的里程碑。',hl:['🏆 台灣金馬獎最佳導演','台灣農村婦女的隱忍一生','台灣新電影重要作品']},
  83:{sy:'侯孝賢、楊德昌、柯一正、曾壯祥聯合執導的四段式電影，以不同年代的台灣少年為主角，是台灣電影新浪潮的集體宣言。修復版重映，重見青春。',hl:['侯孝賢×楊德昌×柯一正×曾壯祥聯合執導','台灣新電影浪潮的集體宣言','修復版大銀幕重映']},
  84:{sy:'徐克的第二部長片，以北宋為背景的武俠懸疑片，融合武打、愛情與歷史謎團。徐克以現代電影語言重新詮釋武俠，修復版重映見證香港電影新浪潮的多元可能。',hl:['徐克第二部長片','武俠懸疑與現代電影語言','修復版大銀幕重映']},
  86:{sy:'許鞍華1979年驚悚電影，以真實命案改編，以懸疑外殼探討香港社會的壓抑與人性的陰暗面。許鞍華早期的犀利風格，是香港新浪潮中不可忽視的一頁。',hl:['許鞍華早期代表作','香港真實命案改編懸疑片','修復版大銀幕放映']},
  87:{sy:'方育平以半紀錄的方式拍攝非職業演員張艾嘉，記錄少女進入演藝圈的真實歷程，虛構與真實邊界模糊。台灣金馬獎最佳電影，香港新浪潮寫實主義的傑出代表。',hl:['🏆 台灣金馬獎最佳電影','張艾嘉主演','方育平半紀錄寫實傑作']},
  97:{sy:'《麥兜故事》導演袁建滔暌違多年新作，真人與動畫混合的奇想冒險。一隻小蟲蟲踏上尋找夢想的旅程，以港式幽默包裝對成長與勇氣的溫柔探問，老少咸宜。',hl:['《麥兜故事》導演袁建滔新作','真人×動畫混合創作','香港電影單元世界首映']},
  98:{sy:'陳健朗繼《手捲煙》後新作，以香港為背景的社會劇情，以細膩觀察書寫都市邊緣人的生存困境。陳健朗是香港年輕一代最值得關注的導演之一。',hl:['《手捲煙》導演陳健朗新作','香港都市邊緣人書寫']},
  99:{sy:'香港愛情電影，以品嚐黑咖啡的苦澀滋味隱喻一段微妙的都市情感，細膩呈現香港年輕人的情感疏離與相互依存。本地新導演的長片處女作。',hl:['香港新導演長片處女作','以咖啡隱喻都市愛情的疏離']},
  106:{sy:'立陶宛黑色喜劇，戰時一對正準備離婚的夫妻因空襲警報被困家中，在荒誕情境中重新審視婚姻。以戰爭諷刺日常關係，新秀競賽（世界）最受期待的作品之一。',hl:['新秀電影競賽（世界）','立陶宛黑色反戰喜劇','坎城相關入圍']},
  107:{sy:'加拿大/匈牙利合拍，一個移民家庭的女孩在適應新生活的同時，以觀察一隻受傷青鷺療愈內心的孤獨。導演Sophie Longval的長片處女作，細膩克制。',hl:['新秀電影競賽（世界）','加拿大/匈牙利合拍','移民女孩與青鷺的療愈故事']},
  108:{sy:'北馬其頓導演Kosta Mitič拍攝一個17歲男孩在小鎮的成年禮，以長鏡頭捕捉青春的困惑與沉默。影片幾乎沒有對白，用畫面說話，是近年歐洲青年電影的傑出代表。',hl:['新秀電影競賽（世界）','幾乎無對白的青春長鏡頭電影','北馬其頓導演Kosta Mitič處女作']},
  109:{sy:'中國導演沈仲旻的新作，梁翠珊飾演一位上海70後女性面對家庭期望、城市變遷與自我追求的抉擇。細膩的女性書寫，新秀競賽（華語）最受關注的選片之一。',hl:['新秀電影競賽（華語）','梁翠珊主演上海70後女性','細膩的女性書寫']},
  110:{sy:'郝蕾主演的中國獨立電影，一個在北京地下空間生活的女性的奇特日常。以半超現實的風格揭示底層都市女性的隱秘生存狀態。新秀競賽（華語）選片。',hl:['新秀電影競賽（華語）','郝蕾主演','半超現實的底層都市女性書寫']},
  111:{sy:'中國導演張中臣以陳哈琳主演，拍攝一個失眠女性深夜在城市中遊走的旅程，以聲音為核心探索城市生活中的孤獨與連結。新秀競賽（華語）選片。',hl:['新秀電影競賽（華語）','以聲音為核心的城市夜遊','陳哈琳主演']},
  112:{sy:'藏族導演岡珍的自傳性作品，次仁央金主演，以藏區高原的三個夏天與一個冬夜為時間軸，記錄一個女孩從少年到成年的蛻變。語言純淨如高原風景。',hl:['新秀電影競賽（華語）','藏族導演自傳性作品','次仁央金主演']},
  114:{sy:'台灣導演李宜珊新作，李千娜飾演一個被社會標籤為「恨女」的女性，在逆境中尋找自我表達的方式。以運動（排球）為隱喻，探索女性的身體自主與社會偏見。',hl:['新秀電影競賽（華語）','李千娜主演','以排球為隱喻的女性自主書寫']},
  116:{sy:'新加坡導演洪玉桔長片處女作，王宣靜飾演一個在泡泡糖文化中成長的新加坡少女，在母親的期望和自我認同之間尋找平衡。甜蜜而犀利的新加坡青春電影。',hl:['新秀電影競賽（華語）','王宣靜主演','新加坡導演洪玉桔長片處女作']},
  117:{sy:'本屆國際短片競賽節目（一）包含《羅拔與茱因（及世上一切時光）》（Jem Cohen，美國）、《永恒桑巴》（巴西）、《燈火不再闌珊的都市》（英美）、《奇觀》（匈牙利/法國）等六部來自不同國家的競賽短片。',hl:['國際短片競賽單元','多國競賽短片集錦','Jem Cohen（美國）等知名短片導演']},
  118:{sy:'本屆國際短片競賽節目（二）包含《畫出怪嚇》（法國動畫，豆瓣8.5）、《因咩事還神》（馬來西亞，豆瓣7.0）、《禁色的夜花》（伊朗/英國）等六部競賽短片，題材多元，橫跨動畫、劇情與紀錄。',hl:['國際短片競賽單元','包含法國動畫《畫出怪嚇》（豆瓣8.5）','馬來西亞短片《因咩事還神》（豆瓣7.0）']},
  119:{sy:'本屆國際短片競賽節目（三）包含《她們的安樂窩》（美國紀錄）、《公馬與水晶球》（西班牙）、《難眠之聲》（法國/阿根廷）等六部競賽短片，多關注女性視角與跨文化議題。',hl:['國際短片競賽單元','多關注女性視角與跨文化','多國競賽短片集錦']},
  125:{sy:'英國導演Ben Rivers以日本民間傳說「燕窩」為靈感，拍攝一部關於等待與消失的詩影像作品。影像如夢如幻，在現實與神話之間游移，是最純粹的詩電影實踐。',hl:['詩影像單元','Ben Rivers（英國詩電影大師）新作','日本民間傳說啟發的夢境影像']},
  126:{sy:'加拿大女導演Reine Vulmeth的最新詩影像作品，以日常的槓桿動作（翻動、抬起、傾斜）為視覺語言，構建一首關於勞動、時間與身體的視覺詩。詩意盎然。',hl:['詩影像單元','以槓桿動作為視覺語言的身體詩','加拿大女導演新作']},
  127:{sy:'葡萄牙裔導演Gabriel Abrantes以古希臘底比斯城為場景，拍攝一部跨越歷史的狂想喜劇，以荒誕的戲謔姿態重訪文明的起源。詩影像單元中最具顛覆性的作品。',hl:['詩影像單元','以古希臘底比斯為場景的荒誕狂想','葡萄牙裔導演Gabriel Abrantes']},
  128:{sy:'越南/法國合拍的詩影像作品，以頭髮、紙張、水三種元素為線索，追尋越南歷史與文化記憶的痕跡。影像精緻典雅，豆瓣7.5。',hl:['豆瓣 7.5（簡體：《發紙水謠》）','詩影像單元','越南/法國合拍，追尋文化記憶']},
  129:{sy:'美國實驗電影大師James Benning的最新作品，以美國各地的八座橋梁為拍攝對象，每座橋靜觀長達十分鐘，凝視時間、空間與美國風景的靜默詩篇。',hl:['詩影像單元','James Benning（美國實驗電影大師）新作','八座橋梁的靜觀冥想']},
  131:{sy:'阿根廷名導Lucrecia Martel繼《沼澤地》後多年沉寂的最新作品，記錄阿根廷土著社群爭奪被奪走土地的抗爭史。以旁觀者的眼光凝視一場持續數百年的暴力。',hl:['阿根廷名導Lucrecia Martel回歸','土著社群的土地抗爭史','真的假不了紀錄單元']},
  132:{sy:'法國導演Robin Hunzinger追蹤一支探險隊發現北極冰原下百年前冒險家的冰凍遺骸，在科學探索與人文情懷之間，思考死亡、探險精神與全球暖化。',hl:['北極冰原下的百年探險家遺骸','真的假不了紀錄單元','全球暖化的詩意沉思']},
  136:{sy:'香港導演卓翔（《石門》）的最新紀錄片，跟拍香港一位能樂師的女兒在日本學習能樂的歷程，以優雅的影像探索傳統藝術的傳承與身份認同。香港/日本合拍。',hl:['香港導演卓翔（《石門》）新作','香港/日本合拍紀錄','能樂傳承與身份認同']},
  143:{sy:'好萊塢黃金時代最後的怪才馮·斯特羅海姆未完成之作，Gloria Swanson主演，一個貧窮修女被迫嫁給比利時王子的荒誕命運。殘存的片段已足見其瘋狂的影像野心，修復版補充珍貴插圖。',hl:['馮·斯特羅海姆未完成的傳奇之作','Gloria Swanson主演','修復版補充原著插圖']},
  144:{sy:'愛森斯坦1925年的電影史奠基之作，以敖德薩階梯屠殺場景聞名於世的蒙太奇電影。百年後重映，現場配樂演奏，見證電影語言如何在這一刻被永久改變。',hl:['1925年電影史奠基之作','敖德薩階梯蒙太奇的永恆傳奇','現場配樂演奏版']},
  145:{sy:'葡萄牙電影大師曼諾艾·德·奧利維拉的長片處女作，1942年拍攝的童年波爾圖生活寫真，以孩子們在碼頭玩耍的眼光記錄城市的溫情與純真。電影史上最重要的葡語電影之一。',hl:['葡萄牙電影大師奧利維拉長片處女作','1942年的童年波爾圖','電影史上最重要的葡語電影']},
  146:{sy:'薩雅吉·雷（《大路之歌》三部曲導演）1970年作品，四個男人進入林中度假，在閑散的假日中揭露城市中產階層的虛偽、衝突與自我欺騙。印度電影史上最精巧的喜劇傑作之一。',hl:['薩雅吉·雷（《大路之歌》導演）1970年作品','印度中產階層的森林喜劇','修復版大銀幕放映']},
  147:{sy:'伊朗導演巴赫拉姆·拜扎依1990年作品，一個因戰爭而流離失所的南方少年逃往北方農村，被善良農婦收留，以兒童視角書寫戰爭創傷與人性溫暖。豆瓣6.9。',hl:['豆瓣 6.9（簡體：《小芭舒》）','伊朗導演拜扎依的人道主義傑作','戰爭孤兒的溫暖尋家故事']},
  148:{sy:'捷克女導演Věra Chytilová（《雛菊》導演）1979年作品，以布拉格新建住宅區為舞台，以半紀錄的方式記錄普通居民的喜怒哀樂，是捷克新浪潮的重要文獻。',hl:['《雛菊》導演Chytilová的後期力作','布拉格新建住宅區的生活記錄','捷克新浪潮重要文獻']},
  149:{sy:'東德/保加利亞合拍的1959年戰爭電影，以二戰時期保加利亞為背景，一個猶太女孩與德國士兵之間的禁忌愛情。柏林銀熊獎，是被嚴重低估的歐洲電影傑作，修復版難得重映。',hl:['🐻 柏林影展銀熊獎','東德/保加利亞合拍戰爭愛情片','修復版難得重映']},
};

function gd(id){return D[id]||{sy:'',hl:[]};}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function gf(id){return FILMS_D.find(function(f){return f.id===id;});}
function p2(n){return String(n).padStart(2,'0');}
function m2t(h,m){return p2(h)+':'+p2(m);}
function addM(h,m,d){var t=h*60+m+d;return{h:Math.floor(t/60)%24,m:t%60};}
function t2m(h,m){return h*60+m;}
function inPlan(fid,v,di){return plan.some(function(p){return p.fid===fid&&p.v===v&&p.di===di;});}
function toast(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2200);}

var plan=[],curDay=0,curFilter='';
var DATES=[];for(var _d=1;_d<=12;_d++)DATES.push('4/'+_d);
var DAYNAMES=['三','四','五','六','日','一','二','三','四','五','六','日'];
var SH=9;

// ─── TIMELINE ───────────────────────────────────────────────────────────────
function buildItems(di){
  var res=[];
  FILMS_D.forEach(function(f){
    f.sc.forEach(function(s){
      if(s[0]-1===di&&s[1]&&s[2]>0)res.push({fid:f.id,v:s[1],sh:s[2],sm:s[3],code:s[4]||'',flags:s[5]||''});
    });
  });
  return res;
}

function renderTL(day){
  var g=document.getElementById('tlg');
  var items=buildItems(day);
  var byV={};
  Object.keys(V).forEach(function(k){byV[k]=[];});
  items.forEach(function(s){if(byV[s.v])byV[s.v].push(s);});
  var availW=Math.max(860,(window.innerWidth||1200)-180);
  var ppm=availW/(15*60);
  var html='<div style="display:flex;margin-left:112px;margin-bottom:8px;border-bottom:1px solid var(--border);padding-bottom:6px">';
  for(var h=SH;h<=24;h++)html+='<div style="flex:0 0 '+Math.round(ppm*60)+'px;font-family:Space Mono,monospace;font-size:10px;color:var(--muted)">'+p2(h)+':00</div>';
  html+='</div>';
  var any=false;
  Object.keys(V).forEach(function(vk){
    var sc=byV[vk];if(!sc.length)return;any=true;
    html+='<div style="display:flex;align-items:center;margin-bottom:7px">'
      +'<div style="flex:0 0 112px;font-size:10px;color:var(--muted);font-family:Space Mono,monospace;padding-right:8px;line-height:1.3">'+V[vk].s+'</div>'
      +'<div style="flex:1;height:46px;min-width:'+Math.round(ppm*15*60)+'px;background:var(--bg2);border:1px solid var(--border);border-radius:3px;position:relative;overflow:visible">';
    sc.forEach(function(s){
      var f=gf(s.fid);if(!f)return;
      var lm=t2m(s.sh,s.sm)-t2m(SH,0),left=lm*ppm,w=Math.max(f.dur*ppm,28);
      var end=addM(s.sh,s.sm,f.dur);
      var ip=inPlan(s.fid,s.v,day);
      var col=SCOL[f.sec]||'#505050';
      var isEv=f.sec==='ev';
      var label=f.zh.length>7?f.zh.substring(0,6)+'\u2026':f.zh;
      var outline=(!isEv&&ip)?'outline:2px solid #e8c96a;outline-offset:1px;':'';
      var bgStyle=isEv
        ?'background:'+col+'18;border:2px dashed '+col+';'
        :'background:linear-gradient(135deg,'+col+'cc,'+col+'77);';
      var txtCol=isEv?col:'#fff';
      var fw=isEv?'700':'600';
      var pfx=(!isEv&&ip)?'\u2713 ':'';
      html+='<div'
        +' style="position:absolute;top:4px;height:38px;left:'+left+'px;width:'+w+'px;'+bgStyle+outline+'border-radius:3px;cursor:pointer;display:flex;align-items:center;padding:0 6px;overflow:hidden;z-index:2;transition:transform .15s"'
        +' title="'+f.zh+' | '+m2t(s.sh,s.sm)+' \u2013 '+m2t(end.h,end.m)+'"'
        +' onclick="openModal('+f.id+')"'
        +' onmouseenter="this.style.transform=\'translateY(-2px)\'"'
        +' onmouseleave="this.style.transform=\'\'">'
        +'<span style="font-size:10px;font-weight:'+fw+';color:'+txtCol+';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1">'+pfx+label+'</span>'
        +'<span style="font-family:Space Mono,monospace;font-size:9px;color:'+txtCol+';opacity:.65;white-space:nowrap;padding-left:3px">'+m2t(s.sh,s.sm)+'</span>'
        +'</div>';
    });
    html+='</div></div>';
  });
  if(!any)html+='<div style="padding:28px;text-align:center;color:var(--muted);font-family:Space Mono,monospace;font-size:11px">此日暫無收錄場次</div>';
  g.innerHTML=html;
}

function buildDsel(){
  document.getElementById('dsel').innerHTML=DATES.map(function(d,i){
    return '<button class="dbtn'+(i===0?' active':'')+'" onclick="selDay('+i+',this)">'+d+' 週'+DAYNAMES[i]+'</button>';
  }).join('');
}
function selDay(d,b){curDay=d;document.querySelectorAll('.dbtn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');renderTL(d);}

// ─── PLAN ────────────────────────────────────────────────────────────────────
function updBadge(){var el=document.getElementById('plan-cnt');if(plan.length){el.textContent=plan.length;el.classList.add('show');}else el.classList.remove('show');}

var TRANSPORT_LABELS=['🚇 公共交通+步行','🚶 純步行','🚗 開車'];
var TRANSPORT_NOTES=['Google Maps地鐵+步行估算','純步行估算，僅適合近距離','高德/Google Maps駕車估算'];

function setTransport(mode){
  transportMode=mode;
  document.querySelectorAll('.tbtn').forEach(function(b,i){b.classList.toggle('active',i===mode);});
  renderPlan();
}
function exportPlan(){window.print();}

function renderPlan(){
  var c=document.getElementById('planc');
  if(!plan.length){
    c.innerHTML='<div style="padding:20px 28px"><div style="font-family:Playfair Display,serif;font-size:22px;color:var(--gold);margin-bottom:20px">我的排片</div>'
      +'<div style="text-align:center;padding:60px 24px;color:var(--muted)">'
      +'<div style="font-size:40px;margin-bottom:12px">🎬</div>'
      +'<div style="font-family:Playfair Display,serif;font-size:18px;color:var(--text);margin-bottom:6px">排片表還是空的</div>'
      +'<div style="font-size:13px;opacity:.55">在時間軸點擊場次即可加入/取消，或在影片詳情中選擇場次</div>'
      +'</div></div>';
    return;
  }
  var srt=[].concat(plan).sort(function(a,b){return a.di!==b.di?a.di-b.di:t2m(a.sh,a.sm)-t2m(b.sh,b.sm);});
  var mode=transportMode;
  var totalMin=plan.reduce(function(a,p){return a+gf(p.fid).dur;},0);
  var ml=['公共交通','步行','開車'][mode];
  var html='<div style="padding:20px 28px">'
    +'<div style="display:flex;align-items:baseline;gap:16px;margin-bottom:18px;flex-wrap:wrap">'
    +'<div style="font-family:Playfair Display,serif;font-size:22px;color:var(--gold)">我的排片</div>'
    +'<div style="font-family:Space Mono,monospace;font-size:11px;color:var(--muted)">'+plan.length+' 部 · '+totalMin+' 分鐘</div>'
    +'<button class="export-btn" onclick="exportPlan()">📤 導出 PDF / 長圖</button>'
    +'</div>'
    +'<div class="transport-bar">'
    +'<span style="font-family:Space Mono,monospace;font-size:11px;color:var(--muted)">趕場方式</span>'
    +TRANSPORT_LABELS.map(function(l,i){return '<button class="tbtn'+(i===mode?' active':'')+'" onclick="setTransport('+i+')">'+l+'</button>';}).join('')
    +'<span style="font-family:Space Mono,monospace;font-size:10px;color:var(--muted)">'+TRANSPORT_NOTES[mode]+'</span>'
    +'</div>'
    +'<div style="display:flex;flex-direction:column;gap:9px;max-width:940px">';
  var ld=-1;
  srt.forEach(function(p,idx){
    var f=gf(p.fid);if(!f)return;
    var isEv=f.sec==='ev';
    var end=addM(p.sh,p.sm,f.dur);
    var vn=V[p.v]?V[p.v].s:p.v;
    var col=SCOL[f.sec]||'#505050';
    if(p.di!==ld){
      if(ld!==-1)html+='<div style="height:8px"></div>';
      html+='<div style="font-family:Space Mono,monospace;font-size:11px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;padding:6px 0 3px;border-top:1px solid var(--border);margin-top:2px">'+DATES[p.di]+' 週'+DAYNAMES[p.di]+'</div>';
      ld=p.di;
    }
    if(idx>0&&srt[idx-1].di===p.di){
      var prev=srt[idx-1],pf=gf(prev.fid),pe=addM(prev.sh,prev.sm,pf.dur);
      var gap=t2m(p.sh,p.sm)-t2m(pe.h,pe.m),nt=gt(prev.v,p.v),buf=gap-nt;
      var fn=V[prev.v]?V[prev.v].s:prev.v;
      var tn=V[p.v]?V[p.v].s:p.v;
      var cls='ok',ic='✅',msg='';
      if(prev.v===p.v){msg='同一影院 · 散場後 '+gap+' 分鐘空檔';}
      else if(buf<0){cls='bad';ic='🚨';msg='⚠ 時間衝突！'+fn+'→'+tn+'（'+ml+'約'+nt+'分），僅有'+gap+'分';}
      else if(buf<12){cls='tight';ic='⚡';msg='趕場！'+fn+'→'+tn+'（'+ml+'約'+nt+'分），緩衝'+buf+'分';}
      else{msg=fn+'→'+tn+'（'+ml+'約'+nt+'分）· 充裕'+buf+'分';}
      html+='<div class="tw '+cls+'"><span>'+ic+'</span><span>'+msg+'</span></div>';
    }
    var zhCN=(f.zhCN&&f.zhCN!==f.zh)?'<div style="font-size:11px;color:var(--muted);margin-top:1px">豆瓣：'+f.zhCN+'</div>':'';
    html+='<div class="pi" style="border-left-color:'+col+';border-left-width:3px" onclick="openModal('+f.id+')">'
      +'<div style="flex-shrink:0">'
      +'<div style="font-family:Space Mono,monospace;font-size:10px;color:var(--muted)">'+DATES[p.di]+'</div>'
      +'<div style="font-family:Space Mono,monospace;font-size:14px;color:var(--gold)">'+m2t(p.sh,p.sm)+'</div>'
      +'<div style="font-family:Space Mono,monospace;font-size:10px;color:var(--muted)">至 '+m2t(end.h,end.m)+'</div>'
      +'</div>'
      +'<div style="flex:1;min-width:0">'
      +'<div style="font-size:14px;font-weight:600;color:var(--cream)">'+f.zh+'</div>'
      +zhCN
      +'<div style="font-size:12px;color:var(--muted);margin-top:3px">'+(f.en.length>36?f.en.substring(0,36)+'…':f.en)+' · '+f.dur+'分 · '+(SLBL[f.sec]||f.sec)+'</div>'
      +'</div>'
      +'<div style="text-align:right;flex-shrink:0;padding-left:10px;font-family:Space Mono,monospace;font-size:11px">'
      +'<div style="color:var(--gold)">'+vn+'</div>'
      +'<div style="font-size:10px;margin-top:2px;color:var(--muted)">'+(f.dir||'').substring(0,14)+((f.dir||'').length>14?'…':'')+'</div>'
      +'</div>'
      +'<button class="rmbtn" onclick="event.stopPropagation();planRemoveWithChild('+f.id+','+p.di+')" style="'+(isEv?'border-color:rgba(212,135,10,.3);color:rgba(212,135,10,.7)':'')+'">移除</button>'
      +'</div>';
    // ── 子事件（大師班/講座）緊接顯示 ──
    if(!isEv){
      var cev=getChildEvent(f.id,p.di);
      if(cev&&inPlan(cev.eid,cev.di)){
        var cf=gf(cev.eid);
        if(cf){
          var cend=addM(cev.sh,cev.sm,cf.dur);
          html+='<div style="display:flex;align-items:center;gap:16px;'
            +'padding:7px 17px 7px 44px;margin-top:-1px;'
            +'background:rgba(212,135,10,.06);'
            +'border:1px solid rgba(212,135,10,.25);border-top:none;'
            +'border-radius:0 0 3px 3px">'
            +'<div style="flex-shrink:0">'
            +'<div style="font-family:Space Mono,monospace;font-size:9px;color:var(--muted)">大師班/講座</div>'
            +'<div style="font-family:Space Mono,monospace;font-size:13px;color:#d4870a">'+p2(cev.sh)+':'+p2(cev.sm)+'</div>'
            +'<div style="font-family:Space Mono,monospace;font-size:9px;color:var(--muted)">至 '+p2(cend.h)+':'+p2(cend.m)+'</div>'
            +'</div>'
            +'<div style="flex:1;min-width:0">'
            +'<div style="font-size:13px;font-weight:600;color:#d4870a">🎓 '+cf.zh+'</div>'
            +(cf.dir?'<div style="font-size:11px;color:var(--muted);margin-top:2px">主講：'+cf.dir+'</div>':'')
            +'</div>'
            +'</div>';
        }
      }
    }
  });
  html+='</div></div>';
  c.innerHTML=html;
}

function rmPlan(fid,di){planRemoveWithChild(fid,di);}
function addPlan(fid,v,di,sh,sm){planAddWithChild(fid,v,di,sh,sm);}
function togglePlan(fid,v,di,sh,sm){
  if(inPlan(fid,v,di)){planRemoveWithChild(fid,di);}
  else{planAddWithChild(fid,v,di,sh,sm);}
}

// ─── FILMS GRID ──────────────────────────────────────────────────────────────
function renderFG(){
  var g=document.getElementById('fg');
  var q=(document.getElementById('search-input').value||'').toLowerCase();
  var films=curFilter?FILMS_D.filter(function(f){return f.sec===curFilter;}):FILMS_D;
  if(q)films=films.filter(function(f){
    return f.zh.toLowerCase().indexOf(q)>-1||f.en.toLowerCase().indexOf(q)>-1
      ||(f.dir&&f.dir.toLowerCase().indexOf(q)>-1)
      ||(f.zhCN&&f.zhCN.toLowerCase().indexOf(q)>-1)
      ||(f.cast&&f.cast.join('').toLowerCase().indexOf(q)>-1);
  });
  document.getElementById('films-count').textContent=films.length+' 部';
  if(!films.length){
    g.innerHTML='<div style="text-align:center;padding:60px;color:var(--muted);grid-column:1/-1"><div style="font-size:40px;margin-bottom:12px">🔍</div><div style="font-size:18px">找不到符合的影片</div></div>';
    return;
  }
  g.innerHTML=films.map(function(f){
    var ip=plan.some(function(p){return p.fid===f.id;});
    var pct=Math.min(100,Math.round(f.dur/200*100));
    var col=SCOL[f.sec]||'#505050';
    var scCnt=f.sc.filter(function(s){return s[1]&&s[2]>0;}).length;
    return '<div class="fc" onclick="openModal('+f.id+')">'
      +'<div class="fc-header">'
      +'<div class="fc-code">'+f.sec.toUpperCase()+'</div>'
      +'<div class="fc-titles">'
      +'<div class="fc-zh">'+f.zh+'</div>'
      +(f.zhCN&&f.zhCN!==f.zh?'<div style="font-size:11px;color:var(--muted);margin-bottom:2px">豆瓣：'+f.zhCN+'</div>':'')
      +'<div class="fc-en">'+f.en+'</div>'
      +'</div></div>'
      +'<div class="fc-meta">'
      +'<span class="tag sec" style="background:'+col+'aa">'+(SLBL[f.sec]||f.sec)+'</span>'
      +'<span class="tag">'+(f.co.length>12?f.co.substring(0,12)+'…':f.co)+'</span>'
      +'<span class="tag">'+f.yr+'</span>'
      +(f.dbs?'<span class="tag gold">豆 '+f.dbs+'</span>':'')
      +(f.db?'<span class="tag ok" style="cursor:pointer" onclick="event.stopPropagation();window.open(\''+f.db+'\',\'_blank\')">豆瓣↗</span>':'')
      +(scCnt>1?'<span class="tag">'+scCnt+'場</span>':'')
      +'</div>'
      +'<div class="fc-bottom">'
      +'<div class="fc-dir">'+(f.dir.length>18?f.dir.substring(0,18)+'…':f.dir||'—')+'</div>'
      +'<div style="display:flex;align-items:center;gap:6px">'
      +'<div style="width:50px;height:3px;background:var(--bg3);border-radius:2px;overflow:hidden">'
      +'<div style="height:100%;width:'+pct+'%;background:linear-gradient(90deg,var(--gold),var(--gold2));border-radius:2px"></div></div>'
      +'<div style="font-family:Space Mono,monospace;font-size:10px;color:var(--muted)">'+f.dur+'分</div></div>'
      +'<button class="fc-add '+(ip?'added':'')+'" onclick="event.stopPropagation();openModal('+f.id+')">'+(ip?'✓ 已排':'選場次')+'</button>'
      +'</div></div>';
  }).join('');
}
function setFilter(s,b){curFilter=s;document.querySelectorAll('.fb').forEach(function(x){x.classList.remove('active');});b.classList.add('active');renderFG();}

// ─── VENUES ──────────────────────────────────────────────────────────────────
function renderVenues(){
  var c=document.getElementById('venues-content');
  var VK=Object.keys(V);
  var EN={KG:'HK Cultural Centre Grand Theatre',EK:'East Kowloon Cultural Centre',IS:'Emperor Cinemas iSQUARE',GL:'GALA CINEMA Mongkok',PE:'PREMIERE Elements',MC:'M+ Cinema',TS:'Emperor Cinemas Times Square',AC:'HK Arts Centre Louis Koo Cinema',CT:'HK City Hall Theatre'};
  function chips(vk){
    return VK.filter(function(v){return v!==vk;}).map(function(v){
      var arr=TR[vk+'-'+v]||TR[v+'-'+vk]||[20,50,18];
      var t=arr[0];var cls=t<=8?'fast':t<=15?'mid':'slow';
      return '<span class="tc '+cls+'">'+v+' '+t+'分</span>';
    }).join('');
  }
  function buildMatrix(mi){
    var mNames=['🚇 公共交通','🚶 步行','🚗 開車'];
    var h='<div class="matrix-wrap">'
      +'<div style="display:flex;gap:6px;margin-bottom:10px;align-items:center;flex-wrap:wrap">'
      +'<span style="font-family:Space Mono,monospace;font-size:11px;color:var(--muted)">顯示方式</span>'
      +mNames.map(function(m,i){return '<button class="tbtn'+(i===mi?' active':'')+'" onclick="window._rmx('+i+')">'+m+'</button>';}).join('')
      +'<span style="font-family:Space Mono,monospace;font-size:10px;color:var(--muted)">Google Maps/高德地圖估算，僅供參考</span>'
      +'</div>'
      +'<table class="mx-table"><tr><th>出發↓/到達→</th>';
    VK.forEach(function(v){h+='<th style="background:'+V[v].col+'33;color:'+V[v].col+'">'+v+'</th>';});
    h+='</tr>';
    VK.forEach(function(from){
      h+='<tr><th style="background:'+V[from].col+'33;color:'+V[from].col+'">'+from+'</th>';
      VK.forEach(function(to){
        if(from===to){h+='<td class="mx-self">—</td>';return;}
        var arr=TR[from+'-'+to]||TR[to+'-'+from]||[20,50,18];
        var t=arr[mi]||arr[0];
        var cls=t<=8?'mx-fast':t<=15?'mx-mid':'mx-slow';
        h+='<td class="'+cls+'">'+t+'</td>';
      });
      h+='</tr>';
    });
    return h+'</table></div>';
  }
  window._rmx=function(mi){var el=document.getElementById('mx-box');if(el)el.innerHTML=buildMatrix(mi);};
  var cards=VK.map(function(vk){
    var v=V[vk];
    return '<div class="venue-card">'
      +'<div class="venue-card-header"><div class="venue-code-badge" style="background:'+v.col+'">'+vk+'</div>'
      +'<div class="venue-info"><div class="venue-name-zh">'+v.n+'</div><div class="venue-name-en">'+(EN[vk]||'')+'</div></div></div>'
      +'<div class="venue-card-body">'
      +'<div class="venue-row"><span class="venue-row-icon">📍</span><span class="venue-row-label">地址</span><span class="venue-row-val">'+v.addr+'</span></div>'
      +'<div class="venue-row"><span class="venue-row-icon">🚇</span><span class="venue-row-label">地鐵</span><span class="venue-row-val">'+v.mtr+'</span></div>'
      +(v.tel?'<div class="venue-row"><span class="venue-row-icon">📞</span><span class="venue-row-label">電話</span><span class="venue-row-val">'+v.tel+'</span></div>':'')
      +(v.cap?'<div class="venue-row"><span class="venue-row-icon">💺</span><span class="venue-row-label">座位</span><span class="venue-row-val">'+v.cap+' 座</span></div>':'')
      +'<div class="venue-row"><span class="venue-row-icon">🗺</span><span class="venue-row-label">地圖</span><span class="venue-row-val">'
      +'<a href="https://maps.google.com/?q='+encodeURIComponent(v.addr)+'" target="_blank">Google ↗</a>'
      +' <a href="https://amap.com/search?query='+encodeURIComponent(v.addr)+'" target="_blank">高德 ↗</a></span></div>'
      +'<div class="venue-transit">'
      +'<div class="venue-transit-title">⇄ 至其他場地（公共交通估算）</div>'
      +'<div class="transit-chips">'+chips(vk)+'</div></div>'
      +'</div></div>';
  }).join('');
  c.innerHTML='<div style="padding:20px 28px">'
    +'<div style="font-family:Playfair Display,serif;font-size:22px;color:var(--gold);margin-bottom:8px">場地指南</div>'
    +'<div class="venues-tip">'
    +'<span>🟢</span> ≤8分鐘 ｜ <span style="color:var(--tight)">🟡</span> 9–15分鐘 ｜ <span style="color:var(--bad)">🔴</span> ≥16分鐘<br>'
    +'轉場時間為估算值（Google Maps/高德），建議預留5–10分鐘緩衝。<br>'
    +'購票：<a href="https://www.urbtix.hk" target="_blank" style="color:var(--gold)">URBTIX</a>（3月20日起）｜ <a href="https://www.uutix.com" target="_blank" style="color:var(--gold)">uutix</a>（AmEx優先）'
    +'</div>'
    +'<div style="font-family:Playfair Display,serif;font-size:17px;color:var(--gold);margin:20px 0 10px">各場地轉場時間一覽</div>'
    +'<div id="mx-box">'+buildMatrix(0)+'</div>'
    +'<div style="font-family:Playfair Display,serif;font-size:17px;color:var(--gold);margin:28px 0 14px">場地詳情</div>'
    +'<div class="venues-grid">'+cards+'</div>'
    +'</div>';
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
function flagBadgesQA(flags){
  if(!flags)return'';
  if(flags.indexOf('qa')===-1)return'';
  return '<span class="sc-badge qa">映後座談</span>';
}
function flagBadges(flags){
  if(!flags)return'';
  var map={sub:'中文字幕',qa:'映後座談',pre:'映前介紹'};
  return flags.split(',').filter(Boolean).map(function(f){
    var ft=f.trim();
    return '<span class="sc-badge '+ft+'">'+(map[ft]||ft)+'</span>';
  }).join('');
}

function openModal(fid){
  var f=gf(fid);if(!f)return;
  var col=SCOL[f.sec]||'#505050';
  // ── Event entries (masterclass / talks) ──
  if(f.sec==='ev'){
    document.getElementById('mc').innerHTML=
      '<div class="mhero" style="flex-direction:column;gap:0">'
      +'<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">'
      +'<div style="width:44px;height:44px;border-radius:3px;background:'+col+'22;border:2px dashed '+col+';display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">🎓</div>'
      +'<div>'
      +'<div style="font-family:Space Mono,monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:'+col+';margin-bottom:4px">大師班 / 講座</div>'
      +'<div class="m-zh" style="font-size:20px">'+f.zh+'</div>'
      +(f.dir?'<div style="font-size:13px;color:var(--muted);margin-top:3px">主講：'+f.dir+'</div>':'')
      +'</div></div>'
      +'<div style="background:var(--bg3);border:1px solid var(--border);border-radius:3px;padding:14px 16px">'
      +'<div style="font-family:Space Mono,monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:10px">時間及地點</div>'
      +f.sc.filter(function(s){return s[1]&&s[2]>0;}).map(function(s){
        var di=s[0]-1,sh=s[2],sm=s[3],vk=s[1];
        var end=addM(sh,sm,f.dur);
        var vn=V[vk]?V[vk].n:vk;
        return '<div class="sci" style="cursor:default">'
          +'<div style="font-family:Space Mono,monospace;font-size:11px;color:var(--gold);min-width:48px;flex-shrink:0">'+DATES[di]+'</div>'
          +'<div style="font-family:Space Mono,monospace;font-size:13px;color:var(--text);min-width:130px;flex-shrink:0">'+p2(sh)+':'+p2(sm)+' – '+p2(end.h)+':'+p2(end.m)+'</div>'
          +'<div style="font-size:12px;color:var(--muted)">'+vn+'</div>'
          +'</div>';
      }).join('')
      +'</div>'
      +'<div style="font-size:11px;color:var(--muted);font-family:Space Mono,monospace;margin-top:12px;padding:10px 14px;background:'+col+'0d;border:1px solid '+col+'33;border-radius:3px">⚠ 大師班/講座為估算時間，以官方公佈為準。部分活動需另購票或憑換票証入場。</div>'
      +'</div>';
    document.getElementById('mc').innerHTML+='<button class="mcls" onclick="closeModal()">✕</button>';
    document.getElementById('mo').classList.add('open');
    return;
  }
  var det=gd(fid);

  // Check if any screening of this film has Chinese subtitles
  var hasSub=f.sc.some(function(s){return s[5]&&s[5].indexOf('sub')>-1;});

  // Screenings: show date, time, venue, QA badge only, add/remove button
  var hasSub=f.sc.some(function(s){return s[5]&&s[5].indexOf('sub')>-1;});
  var scHTML=f.sc.filter(function(s){return s[1]&&s[2]>0;}).map(function(s){
    var di=s[0]-1,sh=s[2],sm=s[3],vk=s[1],flags=s[5]||'';
    var ip=inPlan(f.id,vk,di);
    var end=addM(sh,sm,f.dur);
    var vn=V[vk]?V[vk].n:vk;
    var hasQA=flags.indexOf('qa')>-1;
    return '<div class="sci">'
      +'<div style="font-family:Space Mono,monospace;font-size:11px;color:var(--gold);min-width:48px;flex-shrink:0">'+DATES[di]+'</div>'
      +'<div style="min-width:130px;flex-shrink:0">'
      +'<div style="font-family:Space Mono,monospace;font-size:13px;color:var(--text)">'+m2t(sh,sm)+' – '+m2t(end.h,end.m)+'</div>'
      +(hasQA?'<div class="sc-badges"><span class="sc-badge qa">映後座談</span></div>':'')
      +'</div>'
      +'<div style="font-size:12px;color:var(--muted);flex:1;padding-right:8px">'+vn+'</div>'
      +'<button class="sc-add'+(ip?' added':'')+'" onclick="event.stopPropagation();togglePlanFromModal('+f.id+',\''+vk+'\','+di+','+sh+','+sm+',this)">'+(ip?'✓ 已加入':'加入排片')+'</button>'
      +'</div>';
  }).join('');

  var detHTML=det.sy
    ?'<div class="det-section"><div class="det-title">✦ 影片介紹</div><div class="det-sy">'+det.sy+'</div>'
      +(det.hl&&det.hl.length?'<div class="det-hl">'+det.hl.map(function(h){return'<div class="det-hli">'+h+'</div>';}).join('')+'</div>':'')
      +'</div>'
    :'<div class="det-section"><div class="det-title">✦ 影片介紹</div><div style="font-size:13px;color:var(--muted)">'
      +'詳情請參閱 <a href="https://www.hkiff.org.hk" target="_blank" style="color:var(--gold)">HKIFF官網</a>'
      +(f.db?' 或 <a href="'+f.db+'" target="_blank" style="color:var(--gold)">豆瓣電影 ↗</a>':'')
      +'</div></div>';

  // Subtitle badge next to film title
  var subBadge=hasSub?'<span style="font-family:Space Mono,monospace;font-size:10px;color:#6090d0;border:1px solid rgba(96,144,208,.4);background:rgba(96,144,208,.1);padding:2px 7px;border-radius:2px;margin-left:8px;vertical-align:middle">中文字幕</span>':'';

  document.getElementById('mc').innerHTML=
    '<div class="mhero"><div class="mhero-left">'
    +'<div class="msec-badge" style="background:'+col+'bb">'+(SLBL[f.sec]||f.sec)+'</div>'
    +'<div class="m-zh">'+f.zh+subBadge+'</div>'
    +(f.zhCN&&f.zhCN!==f.zh?'<div style="font-size:12px;color:var(--muted);margin-bottom:4px">豆瓣：'+f.zhCN+'</div>':'')
    +'<div class="m-en">'+f.en+'</div>'
    +(f.db?'<a class="m-dblink" href="'+f.db+'" target="_blank" onclick="event.stopPropagation()">🟡 豆瓣電影 ↗</a>':'')
    +'<div class="mirow" style="margin-top:12px;margin-bottom:0">'
    +'<div class="mii"><div class="mill">導演</div><div class="miv">'+(f.dir||'—')+'</div></div>'
    +'<div class="mii"><div class="mill">出品</div><div class="miv">'+(f.co||'—')+' · '+f.yr+'</div></div>'
    +'<div class="mii"><div class="mill">片長</div><div class="miv" style="color:var(--gold)">'+f.dur+' 分</div></div>'
    +(f.cast&&f.cast.length?'<div class="mii"><div class="mill">主演</div><div class="miv">'+f.cast.slice(0,3).join('、')+'</div></div>':'')
    +'</div></div>'
    +(f.dbs?'<div class="mhero-right"><div class="m-score">'+f.dbs+'</div><div class="m-score-sub">豆瓣評分<br>'+(f.dbn>999?Math.round(f.dbn/1000)+'k':f.dbn)+'人評</div></div>':'')
    +'</div>'
    +'<button class="mcls" onclick="closeModal()">✕</button>'
    +'<div class="mbody">'+detHTML
    +'<div><div class="msec-ttl">放映場次（來源：HKIFF50官方節目手冊）</div>'
    +'<div class="sclist">'+(scHTML||'<div style="color:var(--muted);font-size:13px;padding:8px">暫無場次數據</div>')+'</div>'
    +'</div></div>';
  document.getElementById('mo').classList.add('open');
}

function togglePlanFromModal(fid,v,di,sh,sm,btn){
  var ev=getChildEvent(fid,di);
  if(inPlan(fid,v,di)){
    planRemoveWithChild(fid,di);
    btn.classList.remove('added');btn.textContent='加入排片';
  }else{
    planAddWithChild(fid,v,di,sh,sm);
    btn.classList.add('added');btn.textContent='✓ 已加入';
    if(ev)btn.textContent='✓ 已加入（含大師班）';
  }
}
function closeModal(e){if(e&&e.target!==document.getElementById('mo'))return;document.getElementById('mo').classList.remove('open');}

// ─── VIEW SWITCHER & INIT ────────────────────────────────────────────────────
function sv(v,btn){
  document.querySelectorAll('.view').forEach(function(x){x.classList.remove('active');});
  document.querySelectorAll('.nav-tab').forEach(function(x){x.classList.remove('active');});
  document.getElementById('view-'+v).classList.add('active');
  if(btn)btn.classList.add('active');
  if(v==='plan')renderPlan();
  if(v==='films')renderFG();
  if(v==='timeline')renderTL(curDay);
  if(v==='venues')renderVenues();
}
buildDsel();renderTL(0);renderFG();

