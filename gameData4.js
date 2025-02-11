// Deepseek 全新制造
const gameData = {
  meta: {
    variables: {
      courage: 0,
      trust: 0,
    },
    resources: {
      backgrounds: {
        shanghai: "bg/shanghai-night.webp",
        teahouse: "bg/teahouse.webp",
        secret: "bg/secret-room.webp",
      },
    },
  },
  script: [
    {
      id: "S1",
      text: "上海雨夜中，霓虹闪烁。你刚收到一封匿名信，信中提及一桩惊天秘密。正当你徘徊于曲折小巷时，身后骤然传来急促脚步声……",
      bg: "shanghai",
      choices: [
        {
          text: "转入附近的茶馆，借机冷静观察",
          var: { trust: +1 },
          next: "S2A",
        },
        {
          text: "果断转身迎战，绝不退缩",
          var: { courage: +2 },
          next: "S2B",
        },
      ],
    },
    {
      id: "S2A",
      text: "茶馆内古韵犹存，昏黄灯光映出老板忧虑的神色。他低声问道：“姑娘，这深夜风声鹤唳，可是预示着什么危机？”",
      bg: "teahouse",
      choices: [
        {
          text: "详述匿名信中的疑团，倾诉心中不安",
          var: { trust: +1 },
          next: "S3",
        },
        {
          text: "含糊其辞，隐瞒真相",
          var: { trust: -1 },
          next: "S3",
        },
      ],
    },
    {
      id: "S2B",
      text: "迎面扑来的是一位身着黑衣的刺客，手中寒光闪闪的短刀昭示着致命威胁！",
      bg: "shanghai",
      qte: {
        prompt: "请在5秒内按顺序执行动作",
        actions: ["闪", "退", "挡", "夺", "击"],
        timeLimit: 5,
      },
      success: "S3",
      fail: "S4",
    },
    {
      id: "S3",
      text: "你突破重围，潜入一座隐秘的旧宅密室。墙上泛黄的照片和散落的文件揭露出惊天阴谋的蛛丝马迹。",
      bg: "secret",
      timer: 5,
      choices: [
        {
          text: "联络革命党同仁，共同策划反击",
          var: { trust: +2 },
          next: "END_A",
        },
        {
          text: "独自深入敌穴，誓要探个究竟",
          var: { courage: +3 },
          next: "END_B",
        },
      ],
    },
    {
      id: "S4",
      text: "关键时刻失误，刺客乘机而入。你只感觉眼前一黑，耳边尽是模糊的雨声……",
      bg: "shanghai",
      next: "END_C",
    },
  ],
  endings: {
    END_A: {
      condition: "trust >= 3",
      text: "在同仁的鼎力协助下，你揭露了黑暗势力的真相，为民国点燃了一束曙光。",
    },
    END_B: {
      condition: "courage >= 4",
      text: "凭借过人的胆识与果敢，你独闯虎穴，捣毁了敌人的秘密据点，赢得了民众的钦佩。",
    },
    END_C: {
      condition: "default",
      text: "命运在黑夜中悄然翻覆，你的英勇虽未能挽回局面，却留下了永不磨灭的传奇。",
    },
  },
};
