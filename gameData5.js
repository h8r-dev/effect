const gameData = {
  meta: {
    variables: {
      decision: 0, // 决策力：影响商业布局能力
      bond: 0, // 羁绊：与关键人物的情感链接
    },
    resources: {
      backgrounds: {
        gala: "bg/gala.webp",
        rooftop: "bg/bar.webp",
        archive: "bg/secret-archive.webp",
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
      bg: "gala",
      steps: [
        {
          type: "narration",
          content:
            "宴会厅的穹顶倒映着香槟的涟漪，你锁骨间的蓝宝石项链里藏着十六核微型处理器。",
        },
        {
          type: "inner",
          content:
            "顾临渊的深灰西装下传来极细微的电流声——他的义眼正在扫描全场生物特征",
        },
        {
          type: "dialogue",
          speaker: "名媛A",
          content: "（嗤笑）听说沈小姐在华尔街搞砸了新能源并购案？",
        },
        {
          type: "narration",
          content: "你晃动着香槟杯，琥珀色液体在杯壁勾勒出斐波那契螺旋线",
        },
        {
          type: "inner",
          content: "三点钟方向的侍应生第七次调整领结，那是陆沉安插的暗桩",
        },
        {
          type: "dialogue",
          speaker: "你",
          content: "（微笑）比起失败案例，我更喜欢研究顾总脑肿瘤的扩散速率呢",
        },
        {
          type: "narration",
          content:
            "水晶灯突然频闪，你捕捉到顾临渊左手小指不自然的抽搐——他在启动加密协议",
        },
        {
          type: "qte",
          prompt: "在侍者经过时制造混乱",
          actions: ["推", "闪", "扶"],
          timeLimit: 7,
          success: {
            var: { decision: +2 },
            next: "S2A",
          },
          fail: {
            var: { bond: -1 },
            next: "S2B",
          },
        },
      ],
    },
    {
      id: "S2A",
      bg: "rooftop",
      steps: [
        {
          type: "narration",
          content:
            "混乱中，你闻到夜风卷起顾临渊的雪松香，他腕表投射出的全息界面正在重组你的DNA图谱",
        },
        {
          type: "inner",
          content: "那些闪烁的碱基对序列里藏着二十年前的货轮爆炸坐标",
        },
        {
          type: "dialogue",
          speaker: "顾临渊",
          content: "（摩挲手术刀）要听听我的脑前额叶对沈小姐的危险评估吗？",
        },
        {
          type: "narration",
          content: "他的虹膜突然分裂出三重加密环，那是脑机接口过载的征兆",
        },
        {
          type: "inner",
          content: "后颈的植入芯片开始发烫——陆沉正在黑入这场对话",
        },
        {
          type: "dialogue",
          speaker: "你",
          content: "（撕开旗袍下摆）顾总不如先评估下我大腿内侧的微型反应堆？",
        },
        {
          type: "narration",
          content: "纳米纤维在皮肤表面生长出电磁屏蔽网，他的瞳孔骤然收缩成菱形",
        },
        {
          type: "action",
          choices: [
            {
              text: "用金融模型解析他的投资版图",
              var: { decision: +3 },
              next: "S3",
            },
            {
              text: "指尖划过他后颈手术疤痕",
              var: { bond: +2 },
              next: "S4",
            },
          ],
        },
      ],
    },
    {
      id: "S2B",
      bg: "archive",
      steps: [
        {
          type: "narration",
          content:
            "档案室的恒温系统突然失效，你呼出的白雾在玻璃窗上凝结成1998年的经纬度",
        },
        {
          type: "inner",
          content: "陆沉的生物信号从通风管道渗入，带着孤儿院焚烧炉的焦油味",
        },
        {
          type: "dialogue",
          speaker: "AI语音",
          content: "警告：检测到第23对染色体异常重组",
        },
        {
          type: "narration",
          content: "全息投影突然扭曲成儿童涂鸦，那是你们在福利院墙上画的火焰鸟",
        },
        {
          type: "inner",
          content: "后槽牙的传感器开始震动——顾临渊正在竞价收购这片地皮",
        },
        {
          type: "dialogue",
          speaker: "你",
          content: "（对着摄像头）要烧毁这里的话，记得用镁铝混合燃烧剂",
        },
        {
          type: "narration",
          content:
            "数据流突然具象成锁链形状，陆沉的体温正通过WiFi信号灼烧你的手机",
        },
        {
          type: "action",
          choices: [
            {
              text: "植入反向追踪程序",
              var: { decision: +1 },
              next: "S5",
            },
            {
              text: "发送火灾当日摩斯密码",
              var: { bond: +3 },
              next: "S6",
            },
          ],
        },
      ],
    },
    {
      id: "S3",
      bg: "quantum_lab",
      steps: [
        // 承接S2A第一个选择"用金融模型解析他的投资版图"
        {
          type: "narration",
          content:
            "全息投影中浮现顾氏集团的暗线资金流，突然某个子账户闪现福利院的经纬度坐标",
        },
        {
          type: "inner",
          content:
            "那些数字在视网膜上重组成陆沉烧伤时的医疗账单——付款方竟是顾氏慈善基金",
        },
        {
          type: "qte",
          prompt: "在数据流被抹除前截取",
          actions: ["滤", "萃", "解", "码"],
          timeLimit: 8,
          success: {
            var: { decision: +3 },
            next: "S4", // 成功则进入记忆法庭
          },
          fail: {
            var: { bond: +2 }, // 失败反而增强与陆沉的羁绊
            next: "S5", // 跳转拍卖会赎罪线
          },
        },
      ],
    },
    {
      id: "S4",
      bg: "neural_court",
      // 承接S3成功路径
      steps: [
        {
          type: "narration",
          content:
            "你站在由顾氏董事会组成的陪审团前，证据链突然扭曲成婴儿的脐带",
        },
        {
          type: "dialogue",
          speaker: "顾临渊",
          content:
            "（抚摸胎儿模型）沈小姐要控告的，是二十年前没被流产的自己吗？",
        },
        {
          type: "action",
          choices: [
            {
              text: "展示脑肿瘤扩散模拟图",
              var: { decision: +2 }, // 延续金融解析路线
              next: "END_QUEEN",
            },
            {
              text: "撕开腹部露出DNA编码",
              var: { bond: +3 }, // 转向与陆沉的基因羁绊
              next: "S6",
            },
          ],
        },
      ],
    },
    {
      id: "S5",
      bg: "black_market",
      // 承接S3失败路径/S2B"发送摩斯密码"选择
      steps: [
        {
          type: "narration",
          content:
            "黑市的全息屏闪烁着你儿时与陆沉约定的密码频率，但发信人ID带着顾氏水印",
        },
        {
          type: "inner",
          content: "那些电磁脉冲正在改写你的海马体，伪造出三人共同成长的记忆",
        },
        {
          type: "action",
          choices: [
            {
              text: "用假记忆反向渗透",
              var: { decision: +1 },
              next: "S4", // 迂回进入法庭线
            },
            {
              text: "激活烧伤疤痕的痛觉记忆",
              var: { bond: +4 },
              next: "END_FIRE", // 直通火焰结局
            },
          ],
        },
      ],
    },
    {
      id: "S6",
      bg: "umbilical_chamber",
      // 仅当bond>5时解锁
      steps: [
        {
          type: "narration",
          content:
            "脐带舱里漂浮着你们三人的胚胎样本，陆沉的细胞正在吞噬顾临渊的癌变组织",
        },
        {
          type: "inner",
          content: "这是当年福利院火灾里未被烧毁的原始基因契约",
        },
        {
          type: "action",
          choices: [
            {
              text: "签署基因并购协议",
              var: { decision: +3 },
              next: "END_QUEEN", // 资本化结局
            },
            {
              text: "注入自身线粒体DNA",
              var: { bond: +5 },
              next: "END_FIRE", // 毁灭性结局
            },
          ],
        },
      ],
    },
  ],
  endings: [
    {
      id: "END_QUEEN",
      condition: "decision >= 5",
      steps: [
        {
          type: "narration",
          content:
            "你坐在顾氏董事会的黑色王座上，监控器里陆沉正在焚烧最后一份真实档案",
        },
      ],
    },
    {
      id: "END_FIRE",
      condition: "bond >= 4",
      steps: [
        {
          type: "narration",
          content:
            "陆沉的手枪抵住顾临渊太阳穴，而你握着他当年藏在玩具熊里的引爆器",
        },
      ],
    },
    {
      id: "END_TRAP",
      condition: "true",
      steps: [
        {
          type: "narration",
          content:
            "精神病院的束缚衣收紧时，你听见两个男人在讨论下一任棋子的人选",
        },
      ],
    },
  ],
};
