// ChatGPT 全新制作
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
          content:
            "夜幕降临，城市的霓虹在雨后显得格外迷离。独立坚毅的凌瑶走进一条幽深的巷子，她的每一步都似乎在追寻那隐藏于黑暗中的秘密。",
        },
        {
          type: "inner",
          content: "作为一位久经考验的大女侦探，我不会让恐惧阻挡追真相的步伐。",
        },
        {
          type: "narration",
          content:
            "破碎的光影中，阴谋与危险悄然交织，每个角落都可能藏有致命线索。",
        },
        {
          type: "action",
          choices: [
            {
              text: "进入昏暗的酒吧寻找情报",
              var: {
                trust: +1,
              },
              next: "S2A",
            },
            {
              text: "直奔废弃仓库调查现场",
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
          type: "narration",
          content:
            "推开酒吧那扇斑驳的木门，一股烟酒混杂着岁月沧桑的气息扑面而来。",
        },
        {
          type: "dialogue",
          speaker: "神秘女子",
          content:
            "凌瑶，好久不见。你来得正是时候，我这里有你想要的情报，但先证明你的决心。",
        },
        {
          type: "inner",
          content: "信任是调查这场阴谋的关键，但同样也意味着冒险。",
        },
        {
          type: "qte",
          prompt: "请在4秒内按下正确顺序动作以表明决心：探、秘",
          actions: ["探", "秘"],
          timeLimit: 4,
          success: {
            next: "S3",
            var: {
              courage: +2,
              trust: +2,
            },
          },
          fail: {
            next: "S2B",
            var: {
              courage: +0,
              trust: -1,
            },
          },
        },
      ],
    },
    {
      id: "S2B",
      bg: "warehouse",
      next: "S2B",
      steps: [
        {
          type: "narration",
          content:
            "废弃的仓库外，月光洒在斑驳的铁门上，冷峻而神秘，仿佛在低语着过往的罪恶。",
        },
        {
          type: "inner",
          content: "每一步都充满未知，我必须小心行事。",
        },
        {
          type: "narration",
          content: "耳畔突然传来低沉的脚步声，空气中弥漫着不祥的预感。",
        },
        {
          type: "qte",
          prompt: "请在5秒内完成动作：潜、行、退",
          actions: ["潜", "行", "退"],
          timeLimit: 5,
          success: {
            next: "S4",
            var: {
              courage: +2,
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
      id: "S3",
      bg: "bar",
      next: "S3",
      steps: [
        {
          type: "narration",
          content:
            "在神秘女子的引导下，我找到了一份关键密函——它指向一桩牵涉高层权谋的惊天阴谋。",
        },
        {
          type: "dialogue",
          speaker: "凌瑶",
          content:
            "看来，这远不只是一起普通的失踪案，而是一场精心策划的权力博弈。",
        },
        {
          type: "action",
          prompt: "下一步该如何行动？",
          choices: [
            {
              text: "立刻前往仓库深入调查",
              var: {
                courage: +1,
              },
              next: "S4",
            },
            {
              text: "暂时收集更多情报，静待时机",
              var: {
                trust: +1,
              },
              next: "S5",
            },
          ],
        },
      ],
    },
    {
      id: "S4",
      bg: "warehouse",
      next: "S4",
      steps: [
        {
          type: "narration",
          content:
            "推开锈迹斑斑的仓库大门，眼前是一片混乱：破碎的玻璃、散落的文件和一抹血迹。",
        },
        {
          type: "inner",
          content: "这里曾发生过激烈的对抗，真相似乎近在眼前。",
        },
        {
          type: "dialogue",
          speaker: "未知人影",
          content: "警告——别以为闯进来就能揭开真相！",
        },
        {
          type: "qte",
          prompt: "请在4秒内执行动作：闪、躲、击",
          actions: ["闪", "躲", "击"],
          timeLimit: 4,
          success: {
            next: "S7",
            var: {
              courage: +3,
            },
          },
          fail: {
            next: "S6",
            var: {
              courage: +0,
            },
          },
        },
      ],
    },
    {
      id: "S5",
      bg: "bar",
      next: "S5",
      steps: [
        {
          type: "narration",
          content: "我选择暂避锋芒，利用酒吧内散乱的消息网深入搜集更多线索。",
        },
        {
          type: "dialogue",
          speaker: "凌瑶",
          content: "信任与谨慎同在，只有智取才能化解这场阴谋。",
        },
        {
          type: "narration",
          content: "一通神秘电话传来新的提示：权贵背后似乎隐藏着更大的秘密。",
        },
        {
          type: "action",
          choices: [
            {
              text: "重新赶往仓库展开调查",
              var: {
                courage: +1,
              },
              next: "S4",
            },
            {
              text: "冒险深入市政厅探查幕后真相",
              var: {
                trust: +1,
              },
              next: "S7",
            },
          ],
        },
      ],
    },
    {
      id: "S6",
      bg: "street",
      next: "END",
      steps: [
        {
          type: "narration",
          content: "在一阵混乱中，我身负重伤，跌倒在冰冷的地面上。",
        },
        {
          type: "dialogue",
          speaker: "凌瑶",
          content: "糟了……这一次，可能真的撑不过来了……",
        },
        {
          type: "narration",
          content: "血液渐渐染红了街道，黑暗将我彻底吞噬。",
        },
      ],
    },
    {
      id: "S7",
      bg: "street",
      next: "END",
      steps: [
        {
          type: "narration",
          content: "历经生死较量，我终于逼近了事件的核心，真相似乎就在眼前。",
        },
        {
          type: "dialogue",
          speaker: "凌瑶",
          content: "幕后黑手到底是谁？这一切的阴谋又指向何方？",
        },
        {
          type: "action",
          prompt: "你决定接下来的行动：",
          choices: [
            {
              text: "全力追查，亲自对决幕后势力",
              var: {
                trust: +2,
              },
              next: "END",
            },
            {
              text: "收集充足证据后果断报警",
              var: {
                courage: +1,
              },
              next: "END",
            },
          ],
        },
      ],
    },
  ],
  endings: [
    {
      id: "END_D",
      bg: "warehouse",
      condition: "trust >= 5 && courage >= 5",
      steps: [
        {
          type: "narration",
          content:
            "在凌瑶的智慧与胆识下，真相大白于天下——一场涉及高层权谋的阴谋被彻底瓦解。",
        },
        {
          type: "narration",
          content:
            "她不仅为城市带来了久违的正义，更以坚定不移的精神成为所有人心中永不磨灭的女中豪杰。",
        },
        {
          type: "narration",
          content: "历史将铭记她的名字：凌瑶，正义与智慧的化身。",
        },
      ],
    },
    {
      id: "END_A",
      bg: "bar",
      condition: "trust >= 3",
      steps: [
        {
          type: "narration",
          content: "凭借深厚的人脉与敏锐的洞察力，凌瑶将幕后黑手绳之以法。",
        },
        {
          type: "narration",
          content:
            "她的机智与决断赢得了整个城市的赞誉，成为人们心中不屈的传奇。",
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
          content:
            "以无畏的勇气直面危机，凌瑶孤身闯入罪恶巢穴，将整个犯罪网络一举摧毁。",
        },
        {
          type: "narration",
          content: "尽管过程险象环生，但她用血与汗铸就了一段惊心动魄的传奇。",
        },
      ],
    },
    {
      id: "END_C",
      bg: "street",
      condition: "true",
      steps: [
        {
          type: "narration",
          content:
            "在充满危机的黑夜中，凌瑶未能挽回局面，最终倒在了权谋与阴影交织的深渊中。",
        },
        {
          type: "narration",
          content: "她的故事只留作传说，成为这座城市永远的叹息。",
        },
      ],
    },
  ],
};
