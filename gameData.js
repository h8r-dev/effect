const gameData = {
  meta: {
    variables: {
      courage: 0,
      trust: 0,
    },
    resources: {
      backgrounds: {
        street: "bg/city-night.webp",
        bar: "bg/bar.webp",
        warehouse: "bg/warehouse.webp",
      },
      sounds: {
        glass_break: "sound/glass-crash.mp3",
        heartbeat: "sound/heartbeat.wav",
      },
    },
  },
  scenes: [
    {
      id: "S1",
      bg: "street",
      next: "S1",
      steps: [
        {
          type: "narration",
          content: "深夜的巷子里，你发现跟踪者的黑影越来越近...",
        },
        {
          type: "inner",
          content: "心跳声在耳膜里鼓动，后颈的汗毛已经竖了起来",
        },
        {
          type: "action",
          choices: [
            {
              text: "躲进旁边的酒吧",
              var: {
                courage: +1,
              },
              next: "S2A",
            },
            {
              text: "转身对峙",
              var: {
                courage: +2,
              },
              next: "S2B",
            },
          ],
        },
      ],
    },
    {
      id: "S2A",
      bg: "bar",
      next: "S1",
      steps: [
        {
          type: "dialogue",
          speaker: "酒保",
          content: "把门关上！你想引来那些家伙吗？",
        },
        {
          type: "narration",
          content: "生锈的门轴发出刺耳的吱呀声，你闻到了威士忌的酸腐味",
        },
        {
          type: "action",
          choices: [
            {
              text: "解释被跟踪的情况",
              var: {
                trust: +1,
              },
              next: "S3",
            },
            {
              text: "抢过柜台后的钥匙",
              var: {
                trust: -2,
              },
              next: "S5",
            },
          ],
        },
      ],
    },

    {
      id: "S2B",
      bg: "street",
      next: "S2B",
      steps: [
        {
          type: "dialogue",
          speaker: "黑衣人",
          content: "你他妈的找死啊，我弄死你!!!",
        },
        {
          type: "narration",
          content: "对方亮出匕首！你准备快速做出反应...",
        },
        {
          type: "qte",
          prompt: "请在5秒内按顺序执行动作",
          actions: ["闪", "避", "格", "挡", "击"], // 正确顺序
          timeLimit: 5,
          success: {
            next: "END",
            var: {
              courage: +3,
            },
          },
          fail: {
            next: "S4",
            var: {
              courage: +0,
            },
          },
        },
      ],
    },

    {
      id: "S5",
      steps: [
        {
          type: "narration",
          content: "你发现这个钥匙，居然是个非常趁手的微型武器",
        },
        {
          type: "narration",
          content: "身为武林高手的你，缺的就是一把武器",
        },
        {
          type: "narration",
          content: "此时，黑衣人推门进来了",
        },
      ],
      bg: "street",
      next: "S2B",
    },

    {
      id: "S3",
      bg: "bar",
      next: "S3",
      steps: [
        {
          type: "narration",
          content: "酒保听了解释，紧闭大门",
        },
        {
          type: "narration",
          content: "酒保问你，你准备怎么办",
        },
        {
          type: "action",
          prompt: " 请做出你的选择",
          choices: [
            {
              text: "联系警方",
              var: {
                trust: +3,
              },
              next: "END",
            },
            {
              text: "去厨房拿菜刀",
              var: {
                trust: -1,
                courage: +2,
              },
              next: "S2B",
            },
          ],
        },
      ],
    },
    {
      id: "S4",
      steps: [
        {
          type: "narration",
          content: "你腹部中刀，血流不止",
        },
        {
          type: "dialogue",
          speaker: "你",
          content: "我靠，怎么流了这么多血，不该逞强的，TMD，这波死了。。。",
        },
        {
          type: "narration",
          content: "你的视线开始模糊，最后听到的是渐远的脚步声...",
        },
      ],
      bg: "street",
      next: "END",
    },
  ],
  endings: [
    {
      id: "END_A",
      bg: "bar",
      condition: "trust >= 3",
      steps: [
        {
          type: "narration",
          content: "警方及时赶到逮捕了真凶",
        },
        {
          type: "narration",
          content: "你被表彰为城市英雄！",
        },
      ],
    },
    {
      id: "END_B",
      bg: "bar",
      condition: "courage >= 4",
      steps: [
        {
          type: "narration",
          content: "真牛逼啊",
        },
        {
          type: "narration",
          content: "你被授予城市勇气小子称号",
        },
      ],
    },
    {
      id: "END_C",
      bg: "bar",
      condition: "true",
      steps: [
        {
          type: "narration",
          content: "你死在了凶手刀下",
        },
        {
          type: "narration",
          content: "新闻报道发现无名遗体",
        },
      ],
    },
  ],
};
