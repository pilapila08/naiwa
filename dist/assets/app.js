const catalog = {
  role: [
    { id: "ceo", name: "老板", prompt: "internet startup boss" },
    { id: "engineer", name: "工程师", prompt: "practical field engineer" },
    { id: "coach", name: "教练", prompt: "energetic sports coach" },
    { id: "teacher", name: "教师", prompt: "kind classroom teacher" },
    { id: "painter", name: "画家", prompt: "soft palette painter" },
    { id: "doctor", name: "医生", prompt: "gentle doctor" },
    { id: "photographer", name: "摄影师", prompt: "street photographer" },
    { id: "barista", name: "咖啡师", prompt: "friendly coffee barista" },
    { id: "designer", name: "设计师", prompt: "playful visual designer" },
    { id: "courier", name: "外卖员", prompt: "busy delivery courier" },
    { id: "security", name: "保安", prompt: "serious security guard" },
    { id: "gardener", name: "园丁", prompt: "gentle garden worker" },
    { id: "programmer", name: "程序员", prompt: "sleepy software engineer" },
    { id: "astronaut", name: "宇航员", prompt: "moon mission astronaut" },
    { id: "chef", name: "主厨", prompt: "busy restaurant chef" }
  ],
  outfit: [
    { id: "black_suit", name: "黑西装", color: "#252b38", prompt: "black tailored suit" },
    { id: "work_vest", name: "工装马甲", color: "#f0a245", prompt: "practical orange work vest" },
    { id: "track_jacket", name: "运动外套", color: "#4ca06f", prompt: "green athletic coach jacket" },
    { id: "shirt_cardigan", name: "衬衫开衫", color: "#8fb7dd", prompt: "soft shirt and cardigan" },
    { id: "white_coat", name: "白大褂", color: "#edf3f7", prompt: "clean white medical coat" },
    { id: "apron", name: "围裙", color: "#f7ccd2", prompt: "soft apron with pocket" },
    { id: "raincoat", name: "雨衣", color: "#ffd774", prompt: "shiny yellow raincoat" },
    { id: "space_suit", name: "宇航服", color: "#dbe8f4", prompt: "rounded white space suit" },
    { id: "hoodie", name: "卫衣", color: "#7da8ff", prompt: "oversized streetwear hoodie" },
    { id: "hanfu", name: "汉服", color: "#ef767b", prompt: "red traditional hanfu robe" },
    { id: "festival_coat", name: "节日斗篷", color: "#f78e9a", prompt: "cute festive cape" },
    { id: "streetwear", name: "潮流外套", color: "#9a8cff", prompt: "oversized trendy streetwear jacket" },
    { id: "school_uniform", name: "校服", color: "#5c83c2", prompt: "simple blue school uniform" },
    { id: "chef_uniform", name: "厨师服", color: "#f8efe6", prompt: "rounded white chef uniform" }
  ],
  accessory: [
    { id: "none", name: "无", prompt: "no accessory" },
    { id: "sunglasses", name: "墨镜", prompt: "small black sunglasses" },
    { id: "paint_brush", name: "画笔", prompt: "tiny paint brush" },
    { id: "watering_can", name: "水壶", prompt: "small watering can" },
    { id: "keyboard", name: "键盘", prompt: "tiny keyboard" },
    { id: "helmet", name: "头盔", prompt: "small safety helmet" },
    { id: "whistle", name: "口哨", prompt: "tiny whistle" },
    { id: "book", name: "书本", prompt: "small book" },
    { id: "camera", name: "相机", prompt: "small camera" },
    { id: "coffee", name: "咖啡杯", prompt: "tiny coffee cup" },
    { id: "stethoscope", name: "听诊器", prompt: "small stethoscope" },
    { id: "laptop", name: "笔记本", prompt: "small laptop" }
  ],
  pose: [
    { id: "hands_in_pocket", name: "插兜", prompt: "hands in pocket" },
    { id: "hands_on_waist", name: "叉腰", prompt: "hands on waist" },
    { id: "wave", name: "挥手", prompt: "waving one short arm" },
    { id: "typing", name: "敲键盘", prompt: "typing with tiny hands" },
    { id: "squat", name: "蹲着", prompt: "funny squat pose" },
    { id: "pointing", name: "指挥", prompt: "pointing like giving instructions" },
    { id: "holding_item", name: "拿道具", prompt: "holding a tiny prop" },
    { id: "thinking", name: "思考", prompt: "thinking with one hand near face" }
  ],
  expression: [
    { id: "smug", name: "嚣张", prompt: "smug expression" },
    { id: "blank", name: "呆滞", prompt: "blank deadpan expression" },
    { id: "laughing", name: "大笑", prompt: "laughing expression" },
    { id: "sleepy", name: "困困", prompt: "sleepy expression" },
    { id: "confused", name: "疑惑", prompt: "confused expression" },
    { id: "focused", name: "认真", prompt: "focused expression" },
    { id: "proud", name: "得意", prompt: "proud tiny smile" },
    { id: "panic", name: "慌张", prompt: "slightly panicked expression" }
  ]
};

const presets = [
  {
    id: "career_life",
    label: "职业与生活角色",
    hint: "工程师、教练、教师、画家、医生等随机出图",
    variants: [
      { title: "工程师奶娃", fileSlug: "engineer", role: "engineer", outfit: "work_vest", accessory: "helmet", pose: "holding_item", expression: "focused", feature: "工装马甲、安全帽、认真", prompt: "工程师奶娃，穿工装马甲，戴安全帽，拿着小工具，表情认真但可爱，简洁背景。" },
      { title: "教练奶娃", fileSlug: "coach", role: "coach", outfit: "track_jacket", accessory: "whistle", pose: "pointing", expression: "proud", feature: "运动外套、口哨、指挥", prompt: "教练奶娃，穿绿色运动外套，挂着小口哨，正在认真指挥，表情得意，简洁背景。" },
      { title: "教师奶娃", fileSlug: "teacher", role: "teacher", outfit: "shirt_cardigan", accessory: "book", pose: "holding_item", expression: "focused", feature: "衬衫开衫、书本、温和", prompt: "教师奶娃，穿衬衫和浅色开衫，抱着一本小书，表情温和认真，简洁背景。" },
      { title: "画家奶娃", fileSlug: "painter", role: "painter", outfit: "apron", accessory: "paint_brush", pose: "holding_item", expression: "laughing", feature: "围裙、画笔、开心", prompt: "画家奶娃，穿带口袋的小围裙，拿着画笔，表情开心，身上有少量颜料点缀，简洁背景。" },
      { title: "医生奶娃", fileSlug: "doctor", role: "doctor", outfit: "white_coat", accessory: "stethoscope", pose: "wave", expression: "focused", feature: "白大褂、听诊器、认真", prompt: "医生奶娃，穿白大褂，戴小听诊器，短手轻轻挥手，表情认真可靠，简洁背景。" },
      { title: "摄影师奶娃", fileSlug: "photographer", role: "photographer", outfit: "streetwear", accessory: "camera", pose: "holding_item", expression: "smug", feature: "潮流外套、相机、得意", prompt: "摄影师奶娃，穿潮流外套，挂着小相机，表情有点得意，像正在抓拍表情包，简洁背景。" },
      { title: "程序员奶娃", fileSlug: "programmer", role: "programmer", outfit: "hoodie", accessory: "laptop", pose: "typing", expression: "sleepy", feature: "卫衣、笔记本、困困", prompt: "程序员奶娃，穿宽松卫衣，抱着小笔记本电脑，表情困困但可爱，简洁背景。" },
      { title: "咖啡师奶娃", fileSlug: "barista", role: "barista", outfit: "apron", accessory: "coffee", pose: "holding_item", expression: "laughing", feature: "围裙、咖啡杯、开心", prompt: "咖啡师奶娃，穿干净围裙，端着小咖啡杯，笑得很治愈，简洁背景。" }
    ]
  },
  {
    id: "work_meme",
    label: "打工人情绪包",
    hint: "加班、开会、摸鱼、崩溃、强装镇定",
    variants: [
      { title: "加班奶娃", fileSlug: "overtime", role: "programmer", outfit: "hoodie", accessory: "laptop", pose: "typing", expression: "sleepy", feature: "卫衣、笔记本、困困", prompt: "加班奶娃，穿宽松卫衣，抱着发光的小笔记本，眼神困困，像强撑到深夜的表情包，简洁背景。" },
      { title: "开会奶娃", fileSlug: "meeting", role: "ceo", outfit: "black_suit", accessory: "coffee", pose: "hands_on_waist", expression: "blank", feature: "黑西装、咖啡、呆滞", prompt: "开会奶娃，穿黑西装，拿着咖啡，表情呆滞但一本正经，像开会开到失去灵魂，简洁背景。" },
      { title: "摸鱼奶娃", fileSlug: "slacking", role: "designer", outfit: "streetwear", accessory: "sunglasses", pose: "hands_in_pocket", expression: "smug", feature: "潮流外套、墨镜、插兜", prompt: "摸鱼奶娃，穿潮流外套，戴小墨镜，双手插兜，表情非常淡定，简洁背景。" },
      { title: "改稿奶娃", fileSlug: "revision", role: "designer", outfit: "shirt_cardigan", accessory: "paint_brush", pose: "thinking", expression: "panic", feature: "开衫、画笔、慌张", prompt: "改稿奶娃，穿浅色开衫，拿着小画笔，表情有点慌张，像刚收到第八版修改意见，简洁背景。" }
    ]
  },
  {
    id: "campus_sport",
    label: "校园与运动",
    hint: "学生、班长、篮球、跑步、健身",
    variants: [
      { title: "学生奶娃", fileSlug: "student", role: "teacher", outfit: "school_uniform", accessory: "book", pose: "holding_item", expression: "blank", feature: "校服、书本、呆萌", prompt: "学生奶娃，穿蓝白校服，抱着课本，表情呆萌，像刚被老师点名，简洁背景。" },
      { title: "篮球奶娃", fileSlug: "basketball", role: "coach", outfit: "track_jacket", accessory: "none", pose: "pointing", expression: "proud", feature: "运动外套、指挥、得意", prompt: "篮球奶娃，穿运动外套，摆出指导战术的姿势，表情得意，简洁背景。" },
      { title: "健身奶娃", fileSlug: "fitness", role: "coach", outfit: "track_jacket", accessory: "whistle", pose: "hands_on_waist", expression: "focused", feature: "运动外套、叉腰、认真", prompt: "健身奶娃，穿运动外套，叉腰站着，表情认真，像在监督训练计划，简洁背景。" },
      { title: "班长奶娃", fileSlug: "monitor", role: "teacher", outfit: "school_uniform", accessory: "book", pose: "pointing", expression: "focused", feature: "校服、书本、认真", prompt: "班长奶娃，穿整齐校服，拿着小本子，正在认真安排任务，简洁背景。" }
    ]
  },
  {
    id: "food_shop",
    label: "美食与小店",
    hint: "主厨、奶茶、便利店、摆摊",
    variants: [
      { title: "主厨奶娃", fileSlug: "chef", role: "chef", outfit: "chef_uniform", accessory: "none", pose: "hands_on_waist", expression: "proud", feature: "厨师服、叉腰、得意", prompt: "主厨奶娃，穿圆润白色厨师服，叉腰站着，表情得意，像刚做完招牌菜，简洁背景。" },
      { title: "奶茶店奶娃", fileSlug: "milk_tea", role: "barista", outfit: "apron", accessory: "coffee", pose: "holding_item", expression: "laughing", feature: "围裙、饮品、开心", prompt: "奶茶店奶娃，穿可爱围裙，端着一杯小饮品，笑得很开心，简洁背景。" },
      { title: "便利店奶娃", fileSlug: "convenience", role: "security", outfit: "work_vest", accessory: "coffee", pose: "wave", expression: "blank", feature: "工装马甲、挥手、呆萌", prompt: "便利店奶娃，穿工装马甲，拿着小杯热饮，表情呆萌，简洁背景。" },
      { title: "摆摊奶娃", fileSlug: "stall", role: "ceo", outfit: "apron", accessory: "sunglasses", pose: "hands_in_pocket", expression: "smug", feature: "围裙、墨镜、插兜", prompt: "摆摊奶娃，穿围裙，戴小墨镜，双手插兜，像很会做生意的小老板，简洁背景。" }
    ]
  },
  {
    id: "festival_meme",
    label: "节日表情包",
    hint: "新年、生日、派对、好运、红包感",
    variants: [
      { title: "新年奶娃", fileSlug: "new_year", role: "ceo", outfit: "festival_coat", accessory: "none", pose: "wave", expression: "laughing", feature: "节日斗篷、挥手、大笑", prompt: "新年奶娃，穿红色节日小斗篷，挥着短手，表情大笑，喜庆但画面干净，简洁背景。" },
      { title: "生日奶娃", fileSlug: "birthday", role: "painter", outfit: "apron", accessory: "none", pose: "holding_item", expression: "laughing", feature: "围裙、开心、庆祝感", prompt: "生日奶娃，穿柔软围裙，抱着小礼物，笑得很开心，适合做祝福表情包，简洁背景。" },
      { title: "好运奶娃", fileSlug: "lucky", role: "ceo", outfit: "hanfu", accessory: "none", pose: "hands_on_waist", expression: "proud", feature: "汉服、叉腰、好运感", prompt: "好运奶娃，穿红色汉服，叉腰站着，表情得意，整体像幸运贴纸，简洁背景。" },
      { title: "派对奶娃", fileSlug: "party", role: "designer", outfit: "streetwear", accessory: "sunglasses", pose: "wave", expression: "laughing", feature: "潮流外套、墨镜、大笑", prompt: "派对奶娃，穿亮色潮流外套，戴小墨镜，挥手大笑，像热闹表情包，简洁背景。" }
    ]
  },
  {
    id: "chinese_fantasy",
    label: "国风古装",
    hint: "侠客、书生、掌柜、锦衣卫",
    variants: [
      { title: "侠客奶娃", fileSlug: "swordsman", role: "ceo", outfit: "hanfu", accessory: "none", pose: "hands_in_pocket", expression: "smug", feature: "汉服、插兜、嚣张", prompt: "侠客奶娃，穿红色古风汉服，姿态潇洒，表情有点嚣张，保留圆润可爱比例，简洁背景。" },
      { title: "书生奶娃", fileSlug: "scholar", role: "teacher", outfit: "hanfu", accessory: "book", pose: "holding_item", expression: "focused", feature: "汉服、书本、认真", prompt: "书生奶娃，穿浅色古风衣服，抱着小书，表情认真，像古装表情包，简洁背景。" },
      { title: "掌柜奶娃", fileSlug: "shopkeeper", role: "ceo", outfit: "apron", accessory: "coffee", pose: "hands_on_waist", expression: "proud", feature: "围裙、叉腰、得意", prompt: "掌柜奶娃，穿带古风感的小围裙，叉腰站着，表情得意，像很会算账，简洁背景。" },
      { title: "锦衣奶娃", fileSlug: "guard", role: "security", outfit: "black_suit", accessory: "none", pose: "pointing", expression: "focused", feature: "深色制服、指挥、认真", prompt: "锦衣奶娃，穿深色利落制服，摆出指挥姿势，表情认真，Q版古装感，简洁背景。" }
    ]
  },
  {
    id: "future_space",
    label: "未来科幻",
    hint: "宇航员、机器人感、实验室、赛博外套",
    variants: [
      { title: "宇航员奶娃", fileSlug: "astronaut", role: "astronaut", outfit: "space_suit", accessory: "helmet", pose: "wave", expression: "confused", feature: "宇航服、头盔、疑惑", prompt: "宇航员奶娃，穿圆润白色宇航服，戴小头盔，短手挥手，表情疑惑，简洁背景。" },
      { title: "实验室奶娃", fileSlug: "lab", role: "doctor", outfit: "white_coat", accessory: "stethoscope", pose: "thinking", expression: "focused", feature: "白大褂、思考、认真", prompt: "实验室奶娃，穿白大褂，露出认真思考的表情，像正在研究奶蛙配方，简洁背景。" },
      { title: "赛博奶娃", fileSlug: "cyber", role: "designer", outfit: "streetwear", accessory: "sunglasses", pose: "hands_in_pocket", expression: "smug", feature: "潮流外套、墨镜、酷酷", prompt: "赛博奶娃，穿未来感潮流外套，戴小墨镜，双手插兜，表情酷酷，简洁背景。" },
      { title: "太空维修奶娃", fileSlug: "space_engineer", role: "engineer", outfit: "space_suit", accessory: "helmet", pose: "holding_item", expression: "focused", feature: "宇航服、工具、认真", prompt: "太空维修奶娃，穿圆润宇航服，拿着小工具，表情认真，简洁背景。" }
    ]
  },
  {
    id: "absurd_meme",
    label: "互联网抽象梗",
    hint: "离谱、发呆、嘴硬、突然上班",
    variants: [
      { title: "嘴硬奶娃", fileSlug: "stubborn", role: "ceo", outfit: "black_suit", accessory: "sunglasses", pose: "hands_in_pocket", expression: "smug", feature: "黑西装、墨镜、嘴硬", prompt: "嘴硬奶娃，穿黑西装戴小墨镜，双手插兜，表情非常嚣张，像互联网嘴硬表情包，简洁背景。" },
      { title: "发呆奶娃", fileSlug: "staring", role: "programmer", outfit: "hoodie", accessory: "none", pose: "thinking", expression: "blank", feature: "卫衣、发呆、呆滞", prompt: "发呆奶娃，穿宽松卫衣，站着一动不动，表情呆滞，抽象但保持可爱，简洁背景。" },
      { title: "突然上班奶娃", fileSlug: "sudden_work", role: "courier", outfit: "work_vest", accessory: "coffee", pose: "wave", expression: "panic", feature: "工装马甲、咖啡、慌张", prompt: "突然上班奶娃，穿工装马甲，拿着咖啡，表情慌张，像刚想起来今天要上班，简洁背景。" },
      { title: "灵魂出走奶娃", fileSlug: "blank_soul", role: "teacher", outfit: "shirt_cardigan", accessory: "book", pose: "holding_item", expression: "blank", feature: "开衫、书本、失神", prompt: "灵魂出走奶娃，穿浅色开衫，抱着小书，眼神放空，像离线状态表情包，简洁背景。" }
    ]
  },
  { label: "自定义奶娃", custom: true }
];

const apiProviderDefaults = {
  openai: {
    baseUrl: "https://api.openai.com/v1",
    model: "gpt-image-2",
    endpoint: "edits",
    requestType: "openai",
    note: "OpenAI 官方接口。图生图会使用 /images/edits，并把角色底图作为参考图上传。"
  },
  compatible: {
    baseUrl: "",
    model: "",
    endpoint: "generations",
    requestType: "openai",
    note: "适合支持 OpenAI Images 协议的聚合或自建代理。Base URL 只填到 /v1。"
  },
  siliconflow: {
    baseUrl: "https://api.siliconflow.cn/v1",
    model: "Qwen/Qwen-Image",
    endpoint: "generations",
    requestType: "siliconflow",
    testMode: "models",
    note: "硅基流动生图接口使用 /images/generations，图片尺寸字段是 image_size；浏览器直连仍可能被服务商 CORS 拦截。"
  },
  dashscope: {
    baseUrl: "https://你的WorkspaceId.cn-beijing.maas.aliyuncs.com/compatible-mode/v1",
    model: "qwen-image-3.0",
    endpoint: "generations",
    requestType: "dashscope",
    testMode: "models",
    note: "阿里云百炼 OpenAI 兼容模式需要把 WorkspaceId 换成你的业务空间 ID；图生图也走 /images/generations。"
  },
  volcengine: {
    baseUrl: "https://ark.cn-beijing.volces.com/api/v3",
    model: "doubao-seedream-4-0-250828",
    endpoint: "generations",
    requestType: "volcengine",
    testMode: "models",
    note: "火山方舟 Seedream 使用 /images/generations，模型名需要与你的方舟账号权限一致。前端直连可能遇到 CORS。"
  },
  zhipu: {
    baseUrl: "https://open.bigmodel.cn/api/paas/v4",
    model: "cogview-4-250304",
    endpoint: "generations",
    requestType: "zhipu",
    testMode: "models",
    note: "智谱 CogView/GLM-Image 接口输出通常是图片 URL，当前会按文生图方式调用。"
  },
  minimax: {
    baseUrl: "https://api.minimax.io/v1",
    model: "image-01",
    endpoint: "generations",
    requestType: "minimax",
    testMode: "skip",
    note: "MiniMax 图像接口是原生 /image_generation，不是 OpenAI 标准路径；国内账号可把 Base URL 改为控制台给出的地址。"
  },
  tencent_tokenhub: {
    baseUrl: "https://tokenhub-intl.tencentcloudmaas.com/v1",
    model: "hy-image-v3",
    endpoint: "generations",
    requestType: "tencent_tokenhub",
    testMode: "skip",
    note: "腾讯 TokenHub 使用 Bearer Key；老版腾讯云混元生图需要腾讯云签名，不适合只填一个 API Key 的前端直连。"
  }
};

const defaultReference = "./assets/naiwa-base.png";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const state = {
  view: "produce",
  customMode: localStorage.getItem("naiwa_custom_mode") || "sentence",
  customName: localStorage.getItem("naiwa_custom_name") || "奶蛙小黄",
  customTrait: localStorage.getItem("naiwa_custom_trait") || "",
  oneShotPrompt: localStorage.getItem("naiwa_one_shot_prompt") || "",
  customReference: sessionStorage.getItem("naiwa_reference_data_url") || "",
  brief: "",
  activePresetId: "",
  generationCount: Number(localStorage.getItem("naiwa_generation_count") || 3),
  role: "ceo",
  outfit: "black_suit",
  accessory: "sunglasses",
  pose: "hands_in_pocket",
  expression: "smug",
  crazyLevel: 70,
  api: loadApiSettings(),
  gallery: safeJson(localStorage.getItem("naiwa_gallery"), []),
  tasks: [],
  busy: false
};

function safeJson(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function loadApiSettings() {
  const saved = safeJson(localStorage.getItem("naiwa_api_options"), {});
  const provider = saved.provider || "openai";
  const defaults = apiProviderDefaults[provider] || apiProviderDefaults.openai;
  return {
    key: sessionStorage.getItem("naiwa_api_key") || "",
    enabled: saved.enabled === true,
    provider,
    baseUrl: saved.baseUrl || defaults.baseUrl,
    endpoint: saved.endpoint || defaults.endpoint,
    model: saved.model || defaults.model,
    quality: saved.quality || "medium",
    size: saved.size || "1024x1024"
  };
}

function getItem(type, value = state[type]) {
  const normalized = String(value || "").trim();
  const found = catalog[type].find((item) => item.id === normalized || item.name === normalized);
  if (found) return found;
  return {
    id: "custom",
    name: normalized || catalog[type][0].name,
    prompt: normalized || catalog[type][0].prompt,
    color: type === "outfit" ? "#ffe27a" : undefined
  };
}

function displayValue(type, value = state[type]) {
  return getItem(type, value).name;
}

function selectId(type) {
  return `#${type}Select`;
}

function inputId(type) {
  return `#${type}Input`;
}

function knownOption(type, value = state[type]) {
  const normalized = String(value || "").trim();
  return catalog[type].find((item) => item.id === normalized || item.name === normalized) || null;
}

function readStructuredValue(type) {
  const selected = $(selectId(type)).value;
  if (selected !== "__custom__") return selected;
  return $(inputId(type)).value.trim();
}

function currentRecipe() {
  const matchedPreset = findPreset(state.activePresetId || state.brief);
  return {
    character: "naiwa_v1",
    custom_mode: state.customMode,
    custom_name: state.customName.trim() || "奶蛙",
    custom_trait: state.customTrait.trim(),
    one_shot_prompt: state.oneShotPrompt.trim(),
    brief: state.brief.trim(),
    style_group: matchedPreset?.id || "",
    reference: state.customReference ? "custom_upload" : "naiwa_base",
    role: state.role,
    outfit: state.outfit,
    accessory: state.accessory,
    pose: state.pose,
    expression: state.expression,
    crazy_level: state.crazyLevel
  };
}

function compilePrompt(recipe = currentRecipe()) {
  const oneShot = recipe.custom_mode === "sentence";
  const userRequest = oneShot
    ? sentenceRequest(recipe)
    : recipe.brief || "按照分项配置生成";
  if (oneShot) {
    return [
      "Use the provided Naiwa reference image as a strict identity lock. Keep the yellow soft pear-shaped body, cream oval belly patch, green round eyes, tiny calm smile, long drooping arms, dark hands and feet, and simple rounded silhouette unchanged.",
      `${userRequest} Make it a clean finished Naiwa remix image on a simple background, with no complex scene unless the request explicitly asks for one.`,
      `The meme intensity should feel about ${recipe.crazy_level}/100. Keep the character cute, readable, and clearly recognizable as Naiwa.`,
      "Avoid extra characters, visible text, watermarks, realistic frog anatomy, changed skin color, changed belly patch, or a different face structure."
    ].join("\n\n");
  }
  const structuredParts = oneShot
    ? []
    : [
        `Role: ${getItem("role", recipe.role).prompt}.`,
        `Outfit: ${getItem("outfit", recipe.outfit).prompt}.`,
        `Accessory: ${getItem("accessory", recipe.accessory).prompt}.`,
        `Pose: ${getItem("pose", recipe.pose).prompt}.`,
        `Expression: ${getItem("expression", recipe.expression).prompt}.`,
        `Extra custom detail: ${recipe.custom_trait || "none"}.`
      ];

  const parts = [
    "Keep the identity and body characteristics of the reference Naiwa character unchanged.",
    "Yellow soft 3D creature, pear-shaped body, cream oval belly patch, green round eyes, tiny calm smile, long drooping arms, dark hands and feet.",
    `Name: ${recipe.custom_name}.`,
    `Generation mode: ${oneShot ? "single sentence custom request" : "structured custom fields"}.`,
    `User request: ${userRequest}.`,
    ...structuredParts,
    `Meme intensity: ${recipe.crazy_level}/100.`,
    "Negative prompt: no extra characters, no text, no watermark, do not change Naiwa identity."
  ];
  return parts.join("\n");
}

function labelRecipe(recipe = currentRecipe()) {
  if (recipe.title) return recipe.title;
  if (recipe.custom_mode === "sentence") return sentenceTitle(recipe);
  return `${getItem("role", recipe.role).name}${recipe.custom_name || "奶蛙"}`;
}

function featureText(recipe = currentRecipe()) {
  if (recipe.feature) return recipe.feature;
  if (recipe.custom_mode === "sentence") return shortText(sentenceRequest(recipe), 30);
  return `${getItem("outfit", recipe.outfit).name}、${getItem("expression", recipe.expression).name}${getItem("pose", recipe.pose).name}`;
}

function sentenceRequest(recipe) {
  return cleanText(recipe.one_shot_prompt || recipe.brief || recipe.custom_trait, "生成一只可爱的奶娃二创角色。");
}

function cleanText(value, fallback = "") {
  return String(value || fallback).replace(/\s+/g, " ").trim();
}

function shortText(value, maxLength) {
  const text = cleanText(value, "奶娃");
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function sentenceTitle(recipe) {
  const text = sentenceRequest(recipe);
  const named = text.match(/[\u4e00-\u9fa5A-Za-z0-9]{1,12}奶[蛙娃]/);
  if (named) return named[0];
  return `${shortText(text.replace(/^(请帮我|请生成|生成|画一只|一只|一个)/, ""), 10)}奶娃`;
}

function findPreset(value) {
  const text = cleanText(value);
  if (!text) return null;
  return presets.find((preset) => !preset.custom && (preset.id === text || preset.label === text)) || null;
}

function pickVariants(preset, count) {
  const source = preset?.variants || [];
  if (!source.length) return [];
  const picked = [];
  let pool = shuffle(source);
  while (picked.length < count) {
    if (!pool.length) pool = shuffle(source);
    picked.push(pool.shift());
  }
  return picked;
}

function shuffle(items) {
  const pool = [...items];
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }
  return pool;
}

function recipeWithVariant(recipe, variant, preset) {
  return {
    ...recipe,
    custom_mode: "sentence",
    custom_name: "奶娃",
    custom_trait: preset.hint,
    one_shot_prompt: variant.prompt,
    style_group: preset.id,
    role: variant.role || recipe.role,
    outfit: variant.outfit || recipe.outfit,
    accessory: variant.accessory || recipe.accessory,
    pose: variant.pose || recipe.pose,
    expression: variant.expression || recipe.expression,
    title: variant.title,
    feature: variant.feature,
    file_slug: variant.fileSlug
  };
}

function taskRecipesFrom(recipe, count) {
  const preset = findPreset(recipe.style_group || recipe.brief);
  if (!preset) return Array.from({ length: count }, () => ({ ...recipe }));
  return pickVariants(preset, count).map((variant) => recipeWithVariant(recipe, variant, preset));
}

function fileNameForRecipe(recipe, index) {
  return `pic_${recipe.file_slug || textSlug(labelRecipe(recipe))}_${index + 1}.png`;
}

function textSlug(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[^\w]+/g, "_")
    .replace(/^_+|_+$/g, "") || "naiwa";
}

function renderStructuredSelect(type) {
  const select = $(selectId(type));
  select.innerHTML = "";
  catalog[type].forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    select.appendChild(option);
  });
  const custom = document.createElement("option");
  custom.value = "__custom__";
  custom.textContent = "自定义";
  select.appendChild(custom);
}

function renderStructuredField(type) {
  const select = $(selectId(type));
  const input = $(inputId(type));
  const field = input.closest(".structured-field");
  const value = state[type];
  const option = knownOption(type, value);
  if (option) {
    select.value = option.id;
    input.value = "";
    input.disabled = true;
    input.placeholder = `选择“自定义”后输入${fieldLabel(type)}`;
    field?.classList.remove("is-custom");
    return;
  }
  select.value = "__custom__";
  input.disabled = false;
  input.value = value || "";
  input.placeholder = `输入${fieldLabel(type)}`;
  field?.classList.add("is-custom");
}

function fieldLabel(type) {
  return {
    role: "职业",
    outfit: "服装",
    accessory: "配饰",
    pose: "动作",
    expression: "表情"
  }[type] || "内容";
}

function updateStructuredField(type) {
  state[type] = readStructuredValue(type);
  renderStructuredField(type);
  updatePromptPreview();
}

function updatePromptPreview() {
  $("#promptOutput").textContent = compilePrompt();
}

function renderPresetMenu() {
  const menu = $("#presetMenu");
  menu.innerHTML = "";
  presets.forEach((preset, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = preset.hint ? `<strong>${preset.label}</strong><small>${preset.hint}</small>` : `<strong>${preset.label}</strong>`;
    if (index === 0) button.classList.add("is-highlight");
    button.addEventListener("click", () => selectPreset(preset));
    menu.appendChild(button);
  });
}

function selectPreset(preset) {
  closePresetMenu();
  if (preset.custom) {
    $("#customDrawer").hidden = !$("#customDrawer").hidden;
    $("#recipeInput").value = state.brief || "自定义奶娃";
    state.customMode = "sentence";
    state.activePresetId = "";
    syncModePanels();
    return;
  }
  const preview = pickVariants(preset, 1)[0];
  Object.assign(state, {
    role: preview.role,
    outfit: preview.outfit,
    accessory: preview.accessory,
    pose: preview.pose,
    expression: preview.expression,
    customMode: "sentence",
    customName: "奶娃",
    customTrait: preset.hint,
    oneShotPrompt: preview.prompt,
    activePresetId: preset.id,
    brief: preset.label
  });
  persistCustomFields();
  render();
  toast("已选择风格标签");
}

function renderTasks() {
  const board = $("#queueBoard");
  const hero = $("#emptyHero");
  const grid = $("#resultGrid");
  const hasTasks = state.tasks.length > 0;
  board.hidden = !hasTasks;
  hero.hidden = hasTasks;
  grid.innerHTML = "";
  state.tasks.forEach((task, index) => grid.appendChild(createTaskCard(task, index, "queue")));
}

function createTaskCard(task, index, mode) {
  const node = $("#taskTemplate").content.firstElementChild.cloneNode(true);
  const recipe = task.recipe || currentRecipe();
  const title = task.title || labelRecipe(recipe);
  const feature = task.feature || task.caption || featureText(recipe);
  const metaLabel = recipe.custom_mode === "sentence" ? "描述" : "特征";
  const fileName = task.fileName || fileNameForRecipe(recipe, index);
  const statusText = task.statusText || (task.status === "done" ? "状态：绘制完成" : "状态：等待队列");
  node.classList.toggle("is-generating", task.status === "generating");
  node.classList.toggle("is-done", task.status === "done");
  node.classList.toggle("is-failed", task.status === "failed");
  node.querySelector("header strong").textContent = title;
  node.querySelector("header p").textContent = `${metaLabel}：${feature}`;
  node.querySelector(".file-pill").textContent = fileName;
  node.querySelector(".task-status").textContent = statusText;
  node.querySelector(".loading-mark em").textContent = task.errorText || "客户端正在绘制，请稍候...";
  node.querySelector(".task-preview img").src = task.image_url || currentReferenceSrc();
  node.querySelector(".task-preview img").alt = title;
  node.style.setProperty("--task-tint", getItem("outfit", recipe.outfit).color);
  node.style.setProperty("--card-index", index);

  const saveButton = node.querySelector('[data-action="save"]');
  if (mode === "gallery") {
    saveButton.textContent = "删除";
    saveButton.addEventListener("click", () => removeGalleryItem(index));
  } else {
    saveButton.addEventListener("click", () => saveToGallery(task));
  }
  node.querySelector('[data-action="remix"]').addEventListener("click", () => {
    applyRecipe(task.recipe);
    switchView("produce");
    toast("已复制配方");
  });
  node.querySelector('[data-action="download"]').addEventListener("click", () => downloadResult(task, index));
  return node;
}

function renderGallery() {
  $("#galleryBadge").textContent = state.gallery.length;
  const grid = $("#galleryGrid");
  grid.innerHTML = "";
  if (!state.gallery.length) {
    grid.appendChild($("#emptyTemplate").content.firstElementChild.cloneNode(true));
    return;
  }
  state.gallery.forEach((task, index) => grid.appendChild(createTaskCard({ ...task, status: "done", statusText: "状态：已保存" }, index, "gallery")));
}

function renderApiSettings() {
  const config = getApiProviderConfig(state.api.provider);
  $("#apiStatus").textContent = state.api.enabled && state.api.key ? "连接成功" : "模拟模式";
  $("#apiProviderSelect").value = state.api.provider;
  $("#apiBaseUrlInput").value = state.api.baseUrl;
  $("#apiKeyInput").value = state.api.key;
  $("#apiModelInput").value = state.api.model;
  $("#apiEndpointSelect").value = state.api.endpoint;
  $("#apiQualitySelect").value = state.api.quality;
  $("#apiSizeSelect").value = state.api.size;
  $("#useLiveApi").checked = state.api.enabled;
  $("#apiProviderNote").textContent = config.note || "";
}

function render() {
  $("#generationCount").value = state.generationCount;
  $("#recipeInput").value = state.brief;
  $("#oneShotPromptInput").value = state.oneShotPrompt;
  $("#customName").value = state.customName;
  $("#customTrait").value = state.customTrait;
  $("#referencePreview").src = currentReferenceSrc();
  $("#crazyLevel").value = state.crazyLevel;
  $("#crazyValue").textContent = state.crazyLevel;
  ["role", "outfit", "accessory", "pose", "expression"].forEach(renderStructuredField);
  $("#promptOutput").textContent = compilePrompt();
  syncModePanels();
  renderTasks();
  renderGallery();
  renderApiSettings();
}

function switchView(view) {
  state.view = view;
  $$(".view").forEach((section) => section.classList.toggle("is-active", section.id === `view-${view}`));
  $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.nav === view));
  window.location.hash = view;
}

function setCustomMode(mode) {
  state.customMode = mode;
  persistCustomFields();
  syncModePanels();
  $("#promptOutput").textContent = compilePrompt();
}

function syncModePanels() {
  const sentenceMode = state.customMode === "sentence";
  $("#sentenceModePanel").hidden = !sentenceMode;
  $("#structuredModePanel").hidden = sentenceMode;
  $("#promptModeHint").textContent = sentenceMode
    ? "一句话会直接进入 Prompt Compiler。"
    : "每一项都可以选预设，也可以自己输入。";
  $$("[data-custom-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.customMode === state.customMode);
  });
}

function syncInputs() {
  state.generationCount = readGenerationCount();
  state.brief = $("#recipeInput").value.trim();
  state.activePresetId = findPreset(state.brief)?.id || "";
  state.customName = $("#customName").value;
  state.customTrait = $("#customTrait").value;
  state.oneShotPrompt = $("#oneShotPromptInput").value.trim();
  state.role = readStructuredValue("role");
  state.outfit = readStructuredValue("outfit");
  state.accessory = readStructuredValue("accessory");
  state.pose = readStructuredValue("pose");
  state.expression = readStructuredValue("expression");
  state.crazyLevel = Number($("#crazyLevel").value);
  persistCustomFields();
}

function persistCustomFields() {
  localStorage.setItem("naiwa_custom_mode", state.customMode);
  localStorage.setItem("naiwa_custom_name", state.customName);
  localStorage.setItem("naiwa_custom_trait", state.customTrait);
  localStorage.setItem("naiwa_one_shot_prompt", state.oneShotPrompt);
  localStorage.setItem("naiwa_generation_count", String(state.generationCount));
}

function clampCount(value) {
  return Math.max(1, Math.min(8, Math.round(Number(value) || 1)));
}

function readGenerationCount() {
  const count = clampCount($("#generationCount").value);
  $("#generationCount").value = count;
  return count;
}

function createTasks(recipe, count) {
  const recipes = taskRecipesFrom(recipe, count);
  return recipes.map((taskRecipe, index) => ({
    id: `task_${Date.now()}_${index}`,
    title: labelRecipe(taskRecipe),
    feature: featureText(taskRecipe),
    fileName: fileNameForRecipe(taskRecipe, index),
    status: index === 0 ? "generating" : "waiting",
    statusText: index === 0 ? "状态：绘制中" : "状态：等待队列",
    image_url: "",
    recipe: { ...taskRecipe },
    created_at: new Date().toISOString()
  }));
}

async function startProduction(event) {
  event.preventDefault();
  if (state.busy) return;
  syncInputs();
  state.generationCount = readGenerationCount();
  const recipe = currentRecipe();
  const count = state.generationCount;
  state.busy = true;
  $("#startProduction").disabled = true;
  $("#startProduction").textContent = "客户端绘制中...";
  state.tasks = createTasks(recipe, count);
  renderTasks();

  for (let index = 0; index < state.tasks.length; index += 1) {
    state.tasks = state.tasks.map((task, taskIndex) => {
      if (taskIndex === index) return { ...task, status: "generating", statusText: "状态：绘制中" };
      return task;
    });
    renderTasks();

    try {
      const taskRecipe = state.tasks[index].recipe;
      const imageUrl = state.api.enabled && state.api.key
        ? await generateLiveImage(taskRecipe, index)
        : await createMockImage(taskRecipe, index);
      state.tasks[index] = {
        ...state.tasks[index],
        status: "done",
        statusText: "状态：绘制完成",
        image_url: imageUrl
      };
    } catch (error) {
      const message = explainApiError(error);
      state.tasks[index] = {
        ...state.tasks[index],
        status: "failed",
        statusText: "状态：绘制失败",
        errorText: message
      };
    }
    renderTasks();
  }

  state.busy = false;
  $("#startProduction").disabled = false;
  $("#startProduction").textContent = "开始量产奶蛙";
  toast(`已完成 ${count} 个量产任务`);
}

async function generateLiveImage(recipe, index) {
  try {
    const response = await callImageApi(`${compilePrompt(recipe)}\n\nBatch item ${index + 1}: preserve the selected idea for this card and keep Naiwa DNA stable.`);
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new ApiResponseError(response.status, readApiError(data));
    return parseImageApiResult(data);
  } catch (error) {
    throw new Error(explainApiError(error));
  }
}

class ApiResponseError extends Error {
  constructor(status, detail) {
    super(detail);
    this.name = "ApiResponseError";
    this.status = status;
    this.detail = detail;
  }
}

async function callImageApi(prompt) {
  const baseUrl = normalizeBaseUrl(state.api.baseUrl);
  const config = getApiProviderConfig();
  if (state.api.endpoint === "generations" || config.requestType !== "openai") {
    const payload = await buildImagePayload(config.requestType, prompt);
    return fetch(`${baseUrl}${getImagePath(config)}`, {
      method: "POST",
      headers: buildApiHeaders(config),
      body: JSON.stringify(payload)
    });
  }
  const form = new FormData();
  form.append("model", state.api.model);
  form.append("prompt", prompt);
  form.append("image", await fetch(currentReferenceSrc()).then((response) => response.blob()), "naiwa-reference.png");
  form.append("size", state.api.size);
  form.append("quality", state.api.quality);
  return fetch(`${baseUrl}/images/edits`, { method: "POST", headers: { Authorization: `Bearer ${state.api.key}` }, body: form });
}

function getApiProviderConfig(provider = state.api.provider) {
  return apiProviderDefaults[provider] || apiProviderDefaults.compatible;
}

function buildApiHeaders(config) {
  const headers = { Authorization: `Bearer ${state.api.key}`, "Content-Type": "application/json" };
  if (config.requestType === "siliconflow") headers["X-Enable-Watermark"] = "0";
  return headers;
}

function getImagePath(config) {
  if (config.requestType === "minimax") return "/image_generation";
  if (config.requestType === "tencent_tokenhub") return "/wand/hunyuan-image/v3-generation";
  return state.api.endpoint === "edits" && config.requestType === "openai" ? "/images/edits" : "/images/generations";
}

async function buildImagePayload(requestType, prompt) {
  const size = state.api.size === "auto" ? "1024x1024" : state.api.size;
  const common = { model: state.api.model, prompt };

  if (requestType === "siliconflow") {
    return {
      ...common,
      image_size: size,
      num_inference_steps: 24,
      image: await referenceDataUrl()
    };
  }

  if (requestType === "dashscope") {
    return {
      ...common,
      size: state.api.size,
      n: 1,
      image: await referenceDataUrl(),
      prompt_extend: true,
      watermark: false
    };
  }

  if (requestType === "volcengine") {
    return {
      ...common,
      size,
      image: await referenceDataUrl(),
      response_format: "url",
      watermark: false
    };
  }

  if (requestType === "zhipu") {
    return { ...common, size };
  }

  if (requestType === "minimax") {
    return {
      ...common,
      aspect_ratio: sizeToAspectRatio(size),
      n: 1,
      response_format: "url",
      prompt_optimizer: true
    };
  }

  if (requestType === "tencent_tokenhub") {
    return {
      ...common,
      images: [await referenceDataUrl()],
      size
    };
  }

  return { ...common, size: state.api.size, quality: state.api.quality, n: 1, response_format: "b64_json" };
}

async function referenceDataUrl() {
  const src = currentReferenceSrc();
  if (src.startsWith("data:")) return src;
  const blob = await fetch(src).then((response) => response.blob());
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function sizeToAspectRatio(size) {
  if (size === "auto") return "1:1";
  const match = /^(\d+)x(\d+)$/i.exec(size);
  if (!match) return "1:1";
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (width === height) return "1:1";
  return width > height ? "16:9" : "9:16";
}

function normalizeBaseUrl(value) {
  return (value || apiProviderDefaults.openai.baseUrl)
    .replace(/\/+$/, "")
    .replace(/\/images\/(?:generations|edits)$/i, "")
    .replace(/\/image_generation$/i, "")
    .replace(/\/wand\/hunyuan-image\/v3-generation$/i, "");
}

function readApiError(data) {
  return data.error?.message || data.error?.code || data.code || data.message || data.msg || JSON.stringify(data).slice(0, 180) || "没有返回错误详情";
}

function explainApiError(error) {
  if (error?.status) {
    const detail = error.detail || error.message || "没有返回错误详情";
    if (error.status === 400) return `400：请求已到接口，但这张图被拒绝。常见原因是提示词、参考图、尺寸或内容安全限制。${shortText(detail, 120)}`;
    if (error.status === 401) return `401：Key 不对，或这个 Key 不属于当前 Base URL。${shortText(detail, 120)}`;
    if (error.status === 403) return `403：Key 没有该模型权限，或服务商禁止当前来源调用。${shortText(detail, 120)}`;
    if (error.status === 404) return `404：接口路径或模型名不对。Base URL 不要填完整生图路径。${shortText(detail, 120)}`;
    if (error.status === 422) return `422：请求字段不符合这个服务商的要求，通常是尺寸、模型名或图生图参数不兼容。${shortText(detail, 120)}`;
    if (error.status === 429) return `429：额度或频率限制，稍后再试或降低一次生成数量。${shortText(detail, 120)}`;
    if (error.status >= 500) return `${error.status}：服务商生成失败或上游繁忙，可以重试这一张。${shortText(detail, 120)}`;
    return `${error.status}：接口返回失败。${shortText(detail, 120)}`;
  }
  const message = String(error?.message || error || "");
  if (/Failed to fetch|NetworkError|Load failed|CORS/i.test(message)) {
    return "浏览器拿不到接口响应：请求可能已经到服务商，但失败响应没有允许跨域；也可能是网络、Base URL 或服务商不允许前端直连。";
  }
  if (/401|unauthorized|invalid api key|incorrect api key/i.test(message)) {
    return `鉴权失败：请检查 API Key 是否属于这个 Base URL。${message}`;
  }
  if (/403|forbidden/i.test(message)) {
    return `权限不足：这个 Key 可能没有模型权限，或服务商禁止浏览器来源调用。${message}`;
  }
  if (/404|not found/i.test(message)) {
    return `接口地址不对：Base URL 只填到 /v1，不要填完整 /images/generations。${message}`;
  }
  if (/429|rate/i.test(message)) {
    return `额度或频率限制：Key 可用但当前被限流。${message}`;
  }
  return message || "API 调用失败，请检查 Base URL、模型名、调用模式和 Key 权限。";
}

function parseImageApiResult(data) {
  const item = data.data?.[0] || data.images?.[0] || data.output?.[0] || {};
  const b64 = item.b64_json || item.image_base64 || item.base64 || data.b64_json;
  const url = item.url || item.image_url || data.data?.image_urls?.[0] || data.Response?.ResultImage || data.url || data.image_url;
  if (b64) return b64.startsWith("data:") ? b64 : `data:image/png;base64,${b64}`;
  if (url) return url;
  throw new Error("API 没有返回图片");
}

function createMockImage(recipe, index) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 900;
      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.onload = () => {
        const outfit = getItem("outfit", recipe.outfit);
        const gradient = ctx.createLinearGradient(0, 0, 900, 900);
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(1, outfit.color);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 900, 900);
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(710, 115, 190, 0, Math.PI * 2);
        ctx.arc(150, 790, 240, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.drawImage(image, 230, 112, 440, 585);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fillRect(78, 730, 744, 92);
        ctx.fillStyle = "#252b38";
        ctx.font = "700 32px sans-serif";
        ctx.fillText(labelRecipe(recipe), 106, 785, 560);
        ctx.fillStyle = "#d8a51e";
        ctx.font = "700 22px sans-serif";
        ctx.fillText(`N-${index + 1}`, 724, 786, 80);
        resolve(canvas.toDataURL("image/png"));
      };
      image.onerror = () => resolve(currentReferenceSrc());
      image.src = currentReferenceSrc();
    }, 780 + index * 160);
  });
}

function currentReferenceSrc() {
  return state.customReference || defaultReference;
}

function saveToGallery(task) {
  if (task.status !== "done") return;
  if (!state.gallery.some((item) => item.id === task.id)) {
    state.gallery = [{ ...task, status: "done", statusText: "状态：已保存" }, ...state.gallery].slice(0, 60);
    persistGallery();
  }
  renderGallery();
  toast("已保存到本地图库");
}

function removeGalleryItem(index) {
  state.gallery.splice(index, 1);
  persistGallery();
  renderGallery();
  toast("已删除");
}

function clearGallery() {
  state.gallery = [];
  persistGallery();
  renderGallery();
  toast("本地图库已清空");
}

function persistGallery() {
  try {
    localStorage.setItem("naiwa_gallery", JSON.stringify(state.gallery));
  } catch {
    toast("本地空间不足，图片没有完全保存");
  }
}

function downloadResult(task, index) {
  const link = document.createElement("a");
  link.download = task.fileName || `naiwa-${index + 1}.png`;
  link.href = task.image_url || currentReferenceSrc();
  link.click();
}

function applyRecipe(recipe) {
  state.customMode = recipe.custom_mode || state.customMode || "structured";
  state.customName = recipe.custom_name || state.customName;
  state.customTrait = recipe.custom_trait || "";
  state.oneShotPrompt = recipe.one_shot_prompt || "";
  state.brief = recipe.brief || "";
  state.activePresetId = recipe.style_group || findPreset(recipe.brief)?.id || "";
  state.role = recipe.role;
  state.outfit = recipe.outfit;
  state.accessory = recipe.accessory;
  state.pose = recipe.pose;
  state.expression = recipe.expression;
  state.crazyLevel = recipe.crazy_level || 70;
  $("#customDrawer").hidden = false;
  persistCustomFields();
  render();
}

function applyApiProviderPreset() {
  const provider = $("#apiProviderSelect").value;
  const defaults = getApiProviderConfig(provider);
  $("#apiBaseUrlInput").value = defaults.baseUrl;
  $("#apiModelInput").value = defaults.model;
  $("#apiEndpointSelect").value = defaults.endpoint;
  $("#apiProviderNote").textContent = defaults.note || "";
}

function saveApiSettings(event) {
  event.preventDefault();
  state.api = readApiSettingsFromForm();
  if (state.api.enabled && (!state.api.baseUrl || !state.api.model)) {
    toast("请先填写 Base URL 和模型名");
    return;
  }
  if (state.api.key) sessionStorage.setItem("naiwa_api_key", state.api.key);
  else sessionStorage.removeItem("naiwa_api_key");
  localStorage.setItem("naiwa_api_options", JSON.stringify({
    enabled: state.api.enabled,
    provider: state.api.provider,
    baseUrl: state.api.baseUrl,
    endpoint: state.api.endpoint,
    model: state.api.model,
    quality: state.api.quality,
    size: state.api.size
  }));
  renderApiSettings();
  toast("API 设置已保存");
}

function readApiSettingsFromForm() {
  return {
    key: $("#apiKeyInput").value.trim(),
    enabled: $("#useLiveApi").checked,
    provider: $("#apiProviderSelect").value,
    baseUrl: normalizeBaseUrl($("#apiBaseUrlInput").value.trim()),
    endpoint: $("#apiEndpointSelect").value,
    model: $("#apiModelInput").value.trim(),
    quality: $("#apiQualitySelect").value,
    size: $("#apiSizeSelect").value
  };
}

async function testApiConnection() {
  state.api = readApiSettingsFromForm();
  const config = getApiProviderConfig(state.api.provider);
  const result = $("#apiTestResult");
  result.textContent = "";
  if (!state.api.key) {
    result.textContent = "未填写 API Key。";
    return;
  }
  if (!state.api.baseUrl) {
    result.textContent = "未填写 Base URL。";
    return;
  }

  if (config.testMode === "skip") {
    result.textContent = "这个服务商没有通用 /models 连接测试。配置已读取，请先保存，再用 1 张图进行小额实测。";
    return;
  }

  result.textContent = "正在测试基础连接...";
  try {
    const response = await fetch(`${state.api.baseUrl}/models`, {
      method: "GET",
      headers: { Authorization: `Bearer ${state.api.key}` }
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok) {
      const count = Array.isArray(data.data) ? `，扫描到 ${data.data.length} 个模型` : "";
      result.textContent = `基础连接成功${count}。如果生图仍失败，请检查模型名和调用模式。`;
      return;
    }
    result.textContent = `接口可访问，但返回 ${response.status}：${readApiError(data)}`;
  } catch (error) {
    result.textContent = explainApiError(error);
  }
}

function clearApiSettings() {
  sessionStorage.removeItem("naiwa_api_key");
  state.api.key = "";
  state.api.enabled = false;
  $("#apiKeyInput").value = "";
  $("#useLiveApi").checked = false;
  saveApiSettings(new Event("submit"));
  toast("API Key 已清空");
}

function handleReferenceUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.customReference = String(reader.result);
    sessionStorage.setItem("naiwa_reference_data_url", state.customReference);
    render();
    toast("已换成自定义角色图");
  };
  reader.readAsDataURL(file);
}

function togglePresetMenu() {
  $("#presetMenu").hidden = !$("#presetMenu").hidden;
}

function closePresetMenu() {
  $("#presetMenu").hidden = true;
}

function toast(message) {
  $(".toast")?.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 2300);
}

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  Promise.resolve(
    context.registerTool({
      name: "read_current_recipe",
      title: "Read current Naiwa recipe",
      description: "Return the current visible Naiwa recipe and prompt.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() {
        return {
          recipe: currentRecipe(),
          prompt: compilePrompt(),
          count: state.generationCount,
          gallery_count: state.gallery.length
        };
      }
    })
  ).catch(console.warn);
}

function bindEvents() {
  $$("[data-nav]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      switchView(item.dataset.nav);
    });
  });
  $("#togglePresetList").addEventListener("click", togglePresetMenu);
  $("#recipeInput").addEventListener("focus", () => {
    $("#presetMenu").hidden = false;
  });
  document.addEventListener("click", (event) => {
    if (!$("#recipeCombobox").contains(event.target)) closePresetMenu();
  });
  $("#recipeInput").addEventListener("input", () => {
    state.brief = $("#recipeInput").value.trim();
    state.activePresetId = findPreset(state.brief)?.id || "";
    updatePromptPreview();
  });
  $("#productionForm").addEventListener("submit", startProduction);
  $$("[data-custom-mode]").forEach((button) => {
    button.addEventListener("click", () => setCustomMode(button.dataset.customMode));
  });
  $("#copyPrompt").addEventListener("click", async () => {
    syncInputs();
    await navigator.clipboard.writeText(compilePrompt());
    updatePromptPreview();
    toast("Prompt 已复制");
  });
  $("#randomRecipe").addEventListener("click", () => {
    selectPreset(presets[Math.floor(Math.random() * (presets.length - 1))]);
    state.crazyLevel = Math.floor(20 + Math.random() * 81);
    render();
    toast("已随机奶蛙");
  });
  ["generationCount", "customName", "customTrait", "oneShotPromptInput", "crazyLevel"].forEach((id) => {
    $(`#${id}`).addEventListener("input", () => {
      syncInputs();
      $("#crazyValue").textContent = state.crazyLevel;
      updatePromptPreview();
    });
  });
  ["role", "outfit", "accessory", "pose", "expression"].forEach((type) => {
    $(selectId(type)).addEventListener("change", () => {
      if ($(selectId(type)).value === "__custom__") {
        $(inputId(type)).disabled = false;
        $(inputId(type)).focus();
      }
      updateStructuredField(type);
    });
    $(inputId(type)).addEventListener("input", () => {
      if ($(selectId(type)).value !== "__custom__") return;
      state[type] = $(inputId(type)).value.trim();
      updatePromptPreview();
    });
  });
  $("#referenceUpload").addEventListener("change", handleReferenceUpload);
  $("#apiSettingsForm").addEventListener("submit", saveApiSettings);
  $("#apiProviderSelect").addEventListener("change", applyApiProviderPreset);
  $("#testApiConnection").addEventListener("click", testApiConnection);
  $("#clearApiSettings").addEventListener("click", clearApiSettings);
  $("#clearGallery").addEventListener("click", clearGallery);
}

function initialize() {
  ["role", "outfit", "accessory", "pose", "expression"].forEach(renderStructuredSelect);
  renderPresetMenu();
  bindEvents();
  render();
  const hashView = window.location.hash.replace("#", "");
  if (["produce", "gallery", "guide", "settings"].includes(hashView)) switchView(hashView);
  registerWebMcpTools();
}

initialize();
