const gameData = {
  meta: {
    variables: {
      decision: 0, // 决策力：影响商业布局能力
      bond: 0, // 羁绊：与关键人物的情感链接
    },
    resources: {
      backgrounds: {
        bed: "bg/bed.webp",
        minguo: "bg/minguo.webp",
      },
      sounds: {
        champagne: "sound/glass-clink.mp3",
        datastream: "sound/data-transmit.wav",
      },
    },
  },
  scenes: [
    {
      id: "S1",
      next: "S2",
      bg: "minguo",
      steps: [
        {
          type: "narration",
          content: "夕阳的余辉洒满山野，一片血红映衬着谢阮玉狼狈而绝望的身影。",
        },
        {
          type: "narration",
          content: "她的喉咙被大力掐住，空气稀薄，生命已濒临崩溃。",
        },
        {
          type: "narration",
          content:
            "身体半裸在荒草间，眼前漆黑如墨，只余微弱的心跳声似乎还维持着最后的生机。",
        },
        {
          type: "inner",
          content: "不甘心，我真的不甘心！囡囡，谁来保护我的囡囡？",
        },
        {
          type: "dialogue",
          speaker: "男人A",
          content: "妈的！这娘们怎么还没死！",
        },
        {
          type: "dialogue",
          speaker: "男人B",
          content: "要不再来一轮？",
        },
        {
          type: "dialogue",
          speaker: "男人A",
          content: "行了，万一做到一半死了，可够晦气的。",
        },
      ],
    },
    {
      id: "S2",
      bg: "minguo",
      next: "S3",
      steps: [
        {
          type: "narration",
          content: "谢阮玉的身体剧烈挣扎，素白手指奋力拉扯对方的手臂。",
        },
        {
          type: "narration",
          content: "忽然，她触碰到了头上的银钗，一抹微凉让她意识陡然清明。",
        },
        {
          type: "narration",
          content:
            "她咬牙切齿，奋力将银钗对准掐住她的男人脖子狠狠刺去，鲜血喷溅而出。",
        },
        {
          type: "inner",
          content: "就算死，也要拖着这些畜生一起下地狱！",
        },
        {
          type: "qte",
          prompt: "快速连续点击刺杀按钮（正确次数：7次/秒）",
          actions: ["刺", "刺", "刺", "刺", "刺", "刺", "刺"],
          timeLimit: 5,
          success: {
            next: "S2X-1",
          },
          fail: {
            next: "S2X-2",
          },
        },
      ],
    },
    {
      id: "S2X-1",
      next: "S3",
      bg: "minguo",
      steps: [
        {
          type: "narration",
          content:
            "银钗精准刺入颈动脉，男人抽搐着倒下时，你摸到他腰间冰凉的枪柄",
        },
      ],
    },
    {
      id: "S2X-2",
      next: "S3",
      bg: "minguo",
      steps: [
        {
          type: "narration",
          content: "失准的力道让银钗卡在锁骨处，你被甩出去时听见肋骨断裂的脆响",
        },
      ],
    },
    {
      id: "S3",
      next: "S4",
      bg: "minguo",
      steps: [
        {
          type: "narration",
          content:
            "钗身湿润冰冷，手臂虽被打落，但谢阮玉没有放弃，用尽全身力气将银钗一次又一次刺进敌人。",
        },
        {
          type: "narration",
          content: "血的味道弥散，她的身体僵硬，胸口插入的匕首令她痛彻心扉。",
        },
        {
          type: "dialogue",
          speaker: "黑衣人",
          content: "妈的，这疯娘们发了什么疯！",
        },
        {
          type: "narration",
          content: "另一个人狠狠地给了她一巴掌。",
        },
        {
          type: "narration",
          content:
            "夕阳下，她逐渐意识模糊，入目的是自己带着诡异微笑、带血的双手。",
        },
      ],
    },
    {
      id: "S4",
      next: "S5",
      bg: "minguo",
      steps: [
        {
          type: "dialogue",
          speaker: "男人C",
          content: "妈的！临死也不忘拖上个男的！",
        },
        {
          type: "narration",
          content:
            "她的挣扎并没有终结困境。又一次，她拼尽全力用身旁的东西砸向男人，近乎绝望的反抗最终导致脖颈被一掌击中彻底昏厥。",
        },
        {
          type: "narration",
          content: "与此同时，丁安单膝跪倒在沈培远的房间，肩上的伤口鲜血不止。",
        },
        {
          type: "dialogue",
          speaker: "丁安",
          content: "七爷。",
        },
        {
          type: "dialogue",
          speaker: "沈培远",
          content: "被发现了？",
        },
        {
          type: "dialogue",
          speaker: "丁安",
          content: "没有。",
        },
      ],
    },
    {
      id: "S5",
      next: "S6",
      bg: "bed",
      steps: [
        {
          type: "narration",
          content:
            "沈培远卧于榻上，目光淡然。手中金楠木串珠缓缓旋转，他的声音平静却透着凉薄意味。",
        },
        {
          type: "dialogue",
          speaker: "沈培远",
          content: "你让丁志再去打听一下。",
        },
        {
          type: "narration",
          content:
            "谢阮玉这一夜辗转难眠，她梦到了孟儒景，那个剑眉星目却令人心冷的男人。梦中的姑娘跌入了梦魇般的情景：女儿受辱，满目痛苦的记忆，恨意从胸腔深处翻涌。",
        },
        {
          type: "inner",
          content: "卖就卖了吧……一切都毁了吧……躲不开，就跑不掉。",
        },
      ],
    },
    {
      id: "S6",
      bg: "bed",
      next: "S7",
      steps: [
        {
          type: "narration",
          content:
            "凄厉的尖叫声划破长空，谢阮玉像是惊醒般猛然坐起，将前来唤她起床的翡翠狠狠推倒在地。",
        },
        {
          type: "narration",
          content: "翡翠惊恐的看着她，随即赶忙站起，强按住她的胳膊。",
        },
        {
          type: "dialogue",
          speaker: "翡翠",
          content: "姑娘！七爷还等着您呢。",
        },
        {
          type: "narration",
          content:
            "老黄藤桌旁，沈培远正低头拨弄着杯壁，端坐如画。他眉目温和，一身端整暗纹长衫，袖口繁复精细，却隐藏着一股难以言喻的压迫感。",
        },
        {
          type: "dialogue",
          speaker: "沈培远",
          content: "你怕我。",
        },
        {
          type: "narration",
          content: "似笑非笑间，他的目光意味深长地投向了谢阮玉。",
        },
        {
          type: "inner",
          content: "怕……怕什么？沉着冷静……可心跳快得像要炸开……",
        },
        {
          type: "narration",
          content:
            "沈培远缓缓靠近她，抬手轻抚她的脸颊。他坐下后戏谑一笑，将怀里的谢阮玉揽得更紧了些，问道：",
        },
        {
          type: "dialogue",
          speaker: "沈培远",
          content: "卿卿，谁让你来杀我的？",
        },
        {
          type: "dialogue",
          speaker: "谢阮玉",
          content: "我没有要杀您啊！",
        },
        {
          type: "narration",
          content: "他解开肩处的衣衫，露出了被纱布包裹着的殷红伤口。",
        },
        {
          type: "inner",
          content: "昨夜？伤了他？……开什么玩笑！",
        },
      ],
    },
    {
      id: "S7",
      bg: "bed",
      next: "S8",
      steps: [
        {
          type: "narration",
          content:
            "谢阮玉的父亲沉迷赌博，将家产输光，最终将她卖给赵姓军佐换了十几块大洋。",
        },
        {
          type: "narration",
          content: "父亲在巷口指着谢阮玉和军佐比手画脚时，她正在家门口纳鞋底。",
        },
        {
          type: "narration",
          content: "她还未来得及见母亲最后一面，就被军佐拉走。",
        },
        {
          type: "inner",
          content: "重生了？哈哈哈哈，真是天降的机会啊。",
        },
      ],
    },
    {
      id: "S8",
      bg: "bed",
      next: "S9",
      steps: [
        {
          type: "narration",
          content:
            "谢阮玉长相清秀，赵军佐家娘子容不得她，被逼改将她送给沈七爷。",
        },
        {
          type: "narration",
          content: "那一年，谢阮玉十六岁，正是如花似玉年华，辗转到了保宁城。",
        },
        {
          type: "narration",
          content:
            "谢阮玉低头看着自己白嫩的手，眼泪簌簌落下，她意识到自己重生了。",
        },
        {
          type: "inner",
          content: "这辈子，我一定不重蹈覆辙！",
        },
      ],
    },
    {
      id: "S9",
      bg: "bed",
      next: "S10",
      steps: [
        {
          type: "dialogue",
          speaker: "沈七爷",
          content: "卿卿，吻我一下，我的伤就不疼了。",
        },

        {
          type: "qte",
          prompt: "需在3秒内完成动作",
          actions: ["低头", "轻啄"],
          timeLimit: 3,
          success: {
            next: "S9-1",
          },
          fail: {
            next: "S9-2",
          },
        },
      ],
    },
    {
      id: "S9-1",
      bg: "bed",

      next: "S10",
      steps: [
        {
          type: "narration",
          content: "你精准把握力度轻触他的喉结，沈七爷眼中闪过一丝异彩",
        },
      ],
    },
    {
      id: "S9-2",
      bg: "bed",

      next: "S10",
      steps: [
        {
          type: "narration",
          content: "迟疑间被他按住后颈，带着血腥气的吻烙在唇上",
        },
      ],
    },
    {
      id: "S10",
      bg: "bed",

      next: "S11",
      steps: [
        {
          type: "narration",
          content: "战火纷飞年代，女子生存艰难，谢阮玉决定认命。",
        },
        {
          type: "narration",
          content: "她计划效仿江娉婷，稳妥地保有地位，为自己谋得安稳未来。",
        },
        {
          type: "narration",
          content: "沈七爷的小佛堂位于西院，他每日都在这里虔诚跪拜一个小时。",
        },
        {
          type: "inner",
          content: "竟然拜佛？还这么虔诚，真是说一套做一套！",
        },
      ],
    },
    {
      id: "S11",
      bg: "bed",

      next: "S12",
      steps: [
        {
          type: "narration",
          content:
            "女人们在后院主屋等着沈七爷吃饭，家规严格，他不来，她们不能动筷。",
        },
        {
          type: "dialogue",
          speaker: "江娉婷",
          content: "阮玉，七爷来了，快准备。",
        },
        {
          type: "dialogue",
          speaker: "鹅黄小袄女子",
          content: "七爷前两天送了我一串珍珠，最大的像眼珠子。",
        },
        {
          type: "dialogue",
          speaker: "沈七爷",
          content: "哦？正在编排爷的坏话？",
        },
        {
          type: "narration",
          content: "他轻点她的鼻尖",
        },
      ],
    },
    {
      id: "S12",
      bg: "bed",

      next: "S13",
      steps: [
        {
          type: "dialogue",
          speaker: "鹅黄小袄女子",
          content: "哪敢呀！",
        },
        {
          type: "dialogue",
          speaker: "沈七爷",
          content: "淘气。",
        },
        {
          type: "narration",
          content: "他淡淡移开手臂",
        },
        {
          type: "narration",
          content: "沈七爷落座后，屋内莺莺燕燕争相表现，谢阮玉低头用餐。",
        },
      ],
    },
    {
      id: "S13",
      bg: "bed",

      next: "S14",
      steps: [
        {
          type: "narration",
          content: "谢阮玉偶尔偷看沈七爷，他举杯暗示用餐结束。",
        },
        {
          type: "narration",
          content:
            "沈七爷直接宣布让谢阮玉留下，其他人散去，安排她随后陪着午休。",
        },
        {
          type: "narration",
          content: "听到沈七爷提及穆参军即将来访，谢阮玉神色微微僵硬。",
        },
        {
          type: "inner",
          content: "穆参军……他又要来了……",
        },
      ],
    },
    {
      id: "S14",
      bg: "bed",

      next: "S15",
      steps: [
        {
          type: "dialogue",
          speaker: "沈七爷",
          content: "阮玉，过来。",
        },
        {
          type: "narration",
          content: "朝她招手",
        },
        {
          type: "dialogue",
          speaker: "谢阮玉",
          content: "是。",
        },
        {
          type: "narration",
          content: "起身走向他",
        },
      ],
    },
    {
      id: "S15",
      next: "S16",
      bg: "bed",

      steps: [
        {
          type: "dialogue",
          speaker: "沈七爷",
          content: "过几日穆参军要来，你可要替我好好张罗。",
        },
        {
          type: "action",
          prompt: "面对穆参军的危机",
          choices: [
            {
              text: "主动向沈七爷示警",
              next: "S15A",
            },
            {
              text: "暗中准备防身武器",
              next: "S15B",
            },
          ],
        },
      ],
    },
    {
      id: "S15A",
      next: "S16",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content: "沈七爷闻言挑眉，当晚你发现守卫增加三倍",
        },
      ],
    },
    {
      id: "S15B",
      next: "S16",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content: "你在袖中藏起发簪时，翡翠正端着茶盘在门外驻足",
        },
      ],
    },
    {
      id: "S16",
      bg: "bed",
      next: "S17",

      steps: [
        {
          type: "narration",
          content: "沈七爷伸手一拉，将谢阮玉揽入怀中，笑意如常，美目含情。",
        },
        {
          type: "narration",
          content: "沈七爷低语轻咬谢阮玉耳垂，又温柔感叹她的名字像温香软玉。",
        },
        {
          type: "inner",
          content: "呵，又来了。真会装，真的以为我会动心吗？",
        },
        {
          type: "narration",
          content: "沈七爷将谢阮玉压倒在床，两人目光对视，他浅笑温柔从容。",
        },
        {
          type: "inner",
          content: "沈培远，你的套路我上辈子已经吃够了！",
        },
        {
          type: "narration",
          content:
            "谢阮玉脑海中浮现出他的算计，表面柔情，实则暗藏心机深不可测。",
        },
        {
          type: "inner",
          content: "太恐怖了，这男人太老练了，这双眼他用几分真？几分假？",
        },
        {
          type: "inner",
          content: "我必须清醒，千万不能陷进去！",
        },
        {
          type: "qte",
          prompt: "抵抗沈七爷的亲密接触（正确顺序：偏头→闭眼→僵直）",
          actions: ["偏", "闭", "僵"],
          timeLimit: 4,
          success: {
            next: "S16A",
          },
          fail: {
            next: "S16B",
          },
        },
      ],
    },
    {
      id: "S16A",
      bg: "bed",
      next: "S17",

      steps: [
        {
          type: "narration",
          content: "你完美伪装出青涩反应，沈七爷的指尖在你耳后多停留了三秒",
        },
      ],
    },
    {
      id: "S16B",
      bg: "bed",
      next: "S17",

      steps: [
        {
          type: "narration",
          content: "紊乱的呼吸暴露真实情绪，他轻笑时温热气息拂过你颤抖的睫毛",
        },
      ],
    },
    {
      id: "S17",
      next: "S18",
      bg: "bed",
      steps: [
        {
          type: "narration",
          content:
            "谢阮玉想到多年后的沈七爷，那时沈大帅刚去世，他冷漠阴狠的本性尽显无遗。",
        },
        {
          type: "narration",
          content:
            "身为大帅府的继承人，他手足相残毫不留情，血染的地面猩红一片。",
        },
        {
          type: "action",
          prompt: "隐藏真实情绪",
          choices: [
            {
              text: "用指尖轻抚他眉骨",
              next: "S17A",
            },
            {
              text: "调整呼吸保持平稳",
              next: "S17B",
            },
          ],
        },
      ],
    },
    {
      id: "S17A",
      next: "S18",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content: "沈七爷眼睫微颤，这个过于亲昵的动作让他想起死去的生母",
        },
      ],
    },
    {
      id: "S17B",
      next: "S18",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content: "你数着第七次呼吸时，他突然翻身将你压在雕花床柱上",
        },
      ],
    },
    {
      id: "S18",
      next: "S19",
      bg: "bed",

      steps: [
        {
          type: "dialogue",
          speaker: "沈培远",
          content: "卿卿这般听话，甚好。",
        },
        {
          type: "inner",
          content: "这算什么？被他当成个会叫的瓷娃娃来养？",
        },
        {
          type: "qte",
          prompt: "保持按摩节奏（正确频率点击）",
          actions: ["按", "松", "按", "松", "按"],
          timeLimit: 4,
          success: {
            next: "S18A",
          },
          fail: {
            next: "S18B",
          },
        },
      ],
    },
    {
      id: "S18A",
      next: "S19",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content: "他喉结滚动三次后陷入沉睡，这是你第七次观察到这个特征",
        },
      ],
    },
    {
      id: "S18B",
      next: "S19",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content: "他突然扣住你手腕：伺候人都不会？翡翠没教过规矩？",
        },
      ],
    },
    {
      id: "S19",
      next: "S20",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content:
            "下午，沈培远换了藏青色长衫，上襟纽绊显得挺括紧致，谢阮玉还为他挑了一副窄细金丝边眼镜。",
        },
        {
          type: "action",
          prompt: "回应屏风询问",
          choices: [
            {
              text: "低头绞手帕",
              next: "S19A",
            },
            {
              text: "露出茫然眼神",
              next: "S19B",
            },
          ],
        },
      ],
    },
    {
      id: "S19A",
      next: "S20",
      bg: "bed",

      steps: [
        {
          type: "narration",
          content: "沈七爷突然捏住你下巴：装傻也要有个限度",
        },
      ],
    },
    {
      id: "S19B",
      next: "S20",
      steps: [
        {
          type: "narration",
          content: "他摘下眼镜擦拭，这个动作代表耐心即将耗尽",
        },
      ],
    },
    {
      id: "S20",
      next: "S21",
      bg: "bed",

      steps: [
        {
          type: "inner",
          content: "原来差点露馅，我总算是蒙混过去了。",
        },
        {
          type: "narration",
          content: "沈培远离开后，谢阮玉放下手中活计，内心掠过些怒意。",
        },
      ],
    },
  ],
  endings: [
    {
      id: "END_TRAP",
      condition: "true",
      steps: [
        {
          type: "narration",
          content: "还没写完",
        },
      ],
    },
  ],
};
