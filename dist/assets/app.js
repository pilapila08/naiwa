const catalog = {
  role: [
    { id: "ceo", name: "CEO", prompt: "internet startup CEO" },
    { id: "gang_boss", name: "帮派老大", prompt: "comic gang boss" },
    { id: "programmer", name: "程序员", prompt: "tired software engineer" },
    { id: "idol", name: "偶像", prompt: "pop idol performer" },
    { id: "chef", name: "主厨", prompt: "busy restaurant chef" },
    { id: "astronaut", name: "宇航员", prompt: "moon mission astronaut" }
  ],
  outfit: [
    { id: "black_suit", name: "黑色西装", color: "#1f2025", prompt: "black tailored business suit, white shirt, black tie" },
    { id: "hoodie", name: "连帽卫衣", color: "#5d77d6", prompt: "oversized blue streetwear hoodie" },
    { id: "lab_coat", name: "白大褂", color: "#f2f4ec", prompt: "clean white lab coat" },
    { id: "chef_uniform", name: "厨师服", color: "#f8efe0", prompt: "white chef jacket and tiny scarf" },
    { id: "space_suit", name: "宇航服", color: "#d9e3ee", prompt: "rounded white space suit" },
    { id: "tracksuit", name: "运动套装", color: "#2eaf76", prompt: "green retro athletic tracksuit" },
    { id: "hanfu", name: "古风汉服", color: "#d94d4d", prompt: "red traditional hanfu robe" },
    { id: "raincoat", name: "雨衣", color: "#ffd84d", prompt: "shiny yellow raincoat" },
    { id: "security", name: "保安制服", color: "#263852", prompt: "navy security guard uniform" },
    { id: "leather", name: "皮夹克", color: "#2c211d", prompt: "black leather biker jacket" },
    { id: "pajamas", name: "睡衣", color: "#ef9fb8", prompt: "soft pink striped pajamas" },
    { id: "construction", name: "工装", color: "#f28d35", prompt: "orange construction workwear vest" }
  ],
  accessory: [
    { id: "sunglasses", name: "墨镜", prompt: "small black sunglasses" },
    { id: "gold_chain", name: "金链子", prompt: "chunky gold chain" },
    { id: "keyboard", name: "键盘", prompt: "tiny mechanical keyboard" },
    { id: "crown", name: "皇冠", prompt: "tiny golden crown" },
    { id: "helmet", name: "安全帽", prompt: "yellow safety helmet" },
    { id: "none", name: "无配饰", prompt: "no accessory" }
  ],
  scene: [
    { id: "luxury_office", name: "高级办公室", bg: "linear-gradient(145deg, #f5e7bc, #8fb6d9)", prompt: "luxury corporate office" },
    { id: "internet_cafe", name: "网吧", bg: "linear-gradient(145deg, #1e2430, #6ab3c9)", prompt: "neon internet cafe" },
    { id: "moon", name: "月球", bg: "linear-gradient(145deg, #202334, #cfd6de)", prompt: "quiet moon surface" },
    { id: "subway", name: "地铁", bg: "linear-gradient(145deg, #d8dad8, #f6c945)", prompt: "crowded city subway platform" },
    { id: "gym", name: "健身房", bg: "linear-gradient(145deg, #e86f59, #2b2a25)", prompt: "bright workout gym" },
    { id: "palace", name: "古代皇宫", bg: "linear-gradient(145deg, #c33535, #f2c36b)", prompt: "ancient imperial palace" },
    { id: "hospital", name: "医院", bg: "linear-gradient(145deg, #e7f7f2, #87a8d8)", prompt: "clean hospital corridor" },
    { id: "street", name: "街道", bg: "linear-gradient(145deg, #f0d5a1, #6e7b6e)", prompt: "busy meme city street" },
    { id: "store", name: "便利店", bg: "linear-gradient(145deg, #fff2a8, #e86f59)", prompt: "late night convenience store" },
    { id: "construction_site", name: "工地", bg: "linear-gradient(145deg, #f28d35, #72756f)", prompt: "construction site with scaffolding" }
  ],
  pose: [
    { id: "hands_on_waist", name: "叉腰", prompt: "hands on waist" },
    { id: "hands_in_pocket", name: "插兜", prompt: "hands in pocket" },
    { id: "wave", name: "挥手", prompt: "waving one short arm" },
    { id: "typing", name: "敲键盘", prompt: "typing with tiny hands" },
    { id: "dance", name: "跳舞", prompt: "mid dance pose" },
    { id: "pointing", name: "指向镜头", prompt: "pointing at the camera" },
    { id: "arms_crossed", name: "抱臂", prompt: "arms crossed confidently" },
    { id: "running", name: "奔跑", prompt: "running with short legs" },
    { id: "salute", name: "敬礼", prompt: "small salute pose" },
    { id: "squat", name: "蹲着", prompt: "funny squat pose" }
  ],
  expression: [
    { id: "smug", name: "嚣张", prompt: "smug confident expression" },
    { id: "blank", name: "呆滞", prompt: "blank deadpan expression" },
    { id: "laughing", name: "大笑", prompt: "wide laughing expression" },
    { id: "serious", name: "严肃", prompt: "overly serious expression" },
    { id: "panic", name: "慌张", prompt: "slightly panicked expression" },
    { id: "sleepy", name: "困困", prompt: "sleepy half-awake expression" },
    { id: "proud", name: "得意", prompt: "proud tiny smile" },
    { id: "confused", name: "疑惑", prompt: "confused meme expression" },
    { id: "cry_laugh", name: "笑哭", prompt: "laughing with tiny tears" },
    { id: "cool", name: "酷酷", prompt: "cool relaxed expression" }
  ]
};

const productionSteps = [
  { key: "dna", text: "正在识别奶蛙 DNA..." },
  { key: "compile", text: "正在编译二创 Prompt..." },
  { key: "queue", text: "正在加入量产队列..." },
  { key: "generate", text: "正在注入灵魂..." },
  { key: "check", text: "奶蛙质检中..." },
  { key: "done", text: "生产完成。" }
];

const state = {
  role: "ceo",
  outfit: "black_suit",
  accessory: "sunglasses",
  scene: "luxury_office",
  pose: "hands_on_waist",
  expression: "smug",
  crazyLevel: 70,
  recipes: JSON.parse(localStorage.getItem("naiwa_recipes") || "[]"),
  downloads: Number(localStorage.getItem("naiwa_downloads") || 0),
  remixes: Number(localStorage.getItem("naiwa_remixes") || 0),
  results: [],
  busy: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function getItem(type, id = state[type]) {
  return catalog[type].find((item) => item.id === id) || catalog[type][0];
}

function currentRecipe() {
  return {
    character: "naiwa_v1",
    role: state.role,
    outfit: state.outfit,
    accessory: state.accessory,
    scene: state.scene,
    pose: state.pose,
    expression: state.expression,
    style: "funny_meme_character",
    crazy_level: state.crazyLevel
  };
}

function crazyPrompt(level) {
  if (level < 34) return "clean, normal, polished, stable composition";
  if (level < 68) return "funny, exaggerated, internet meme energy";
  return "absurd, chaotic, surreal, ridiculous but still recognizable";
}

function compilePrompt(recipe = currentRecipe()) {
  const role = getItem("role", recipe.role);
  const outfit = getItem("outfit", recipe.outfit);
  const accessory = getItem("accessory", recipe.accessory);
  const scene = getItem("scene", recipe.scene);
  const pose = getItem("pose", recipe.pose);
  const expression = getItem("expression", recipe.expression);

  return `Keep the identity and body characteristics of the reference Naiwa character unchanged.

Character DNA:
yellow chubby cartoon creature,
large round belly,
large head ratio,
short limbs,
small round eyes,
simple funny mouth,
consistent iconic silhouette.

Role:
${role.prompt}.

Wearing:
${outfit.prompt}.

Accessory:
${accessory.prompt}.

Pose:
${pose.prompt}.

Expression:
${expression.prompt}.

Scene:
${scene.prompt}.

Style control:
${crazyPrompt(recipe.crazy_level)}.

Negative prompt:
do not alter character identity,
do not change yellow skin,
do not make realistic frog anatomy,
no extra characters,
no text,
no watermark.`;
}

function labelRecipe(recipe = currentRecipe()) {
  return `${getItem("scene", recipe.scene).name}${getItem("role", recipe.role).name}奶蛙`;
}

function renderOptions(type) {
  const container = document.querySelector(`[data-options="${type}"]`);
  container.innerHTML = "";
  catalog[type].forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = item.name;
    button.setAttribute("aria-pressed", String(state[type] === item.id));
    button.addEventListener("click", () => {
      state[type] = item.id;
      render();
    });
    container.appendChild(button);
  });
}

function renderSelect(type, selector) {
  const select = $(selector);
  select.innerHTML = "";
  catalog[type].forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    option.selected = state[type] === item.id;
    select.appendChild(option);
  });
  select.onchange = () => {
    state[type] = select.value;
    render();
  };
}

function renderSteps(activeIndex = -1) {
  const list = $("#steps");
  list.innerHTML = "";
  productionSteps.forEach((step, index) => {
    const item = document.createElement("li");
    item.textContent = step.text;
    if (activeIndex > index) item.classList.add("is-done");
    if (activeIndex === index) item.classList.add("is-active");
    const mark = document.createElement("span");
    mark.textContent = activeIndex > index ? "完成" : activeIndex === index ? "进行中" : "等待";
    item.appendChild(mark);
    list.appendChild(item);
  });
}

function renderSavedRecipes() {
  const container = $("#savedRecipes");
  container.innerHTML = "";
  if (!state.recipes.length) {
    const empty = document.createElement("p");
    empty.className = "empty-copy";
    empty.textContent = "还没有保存的配方。";
    container.appendChild(empty);
    return;
  }
  state.recipes.slice(0, 4).forEach((recipe) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "saved-recipe";
    button.innerHTML = `<strong>${labelRecipe(recipe)}</strong><span>${getItem("outfit", recipe.outfit).name} · ${getItem("expression", recipe.expression).name} · 抽象 ${recipe.crazy_level}</span>`;
    button.addEventListener("click", () => {
      applyRecipe(recipe);
      toast("已恢复这份奶蛙配方");
    });
    container.appendChild(button);
  });
}

function renderResults() {
  const grid = $("#resultGrid");
  grid.innerHTML = "";
  if (!state.results.length) {
    const empty = document.createElement("div");
    empty.className = "empty-result";
    empty.textContent = "生产线空闲中。";
    grid.appendChild(empty);
    return;
  }
  const template = $("#resultTemplate");
  state.results.forEach((result, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.style.setProperty("--scene-bg", getItem("scene", result.recipe.scene).bg);
    node.style.setProperty("--costume", getItem("outfit", result.recipe.outfit).color);
    node.querySelector(".variant-pill").textContent = `N-${String(index + 1).padStart(2, "0")}`;
    node.querySelector("h3").textContent = result.title;
    node.querySelector("p").textContent = result.caption;
    node.querySelector('[data-action="download"]').addEventListener("click", () => downloadResult(result, index));
    node.querySelector('[data-action="favorite"]').addEventListener("click", (event) => {
      result.favorite = !result.favorite;
      event.currentTarget.textContent = result.favorite ? "已收藏" : "收藏";
      toast(result.favorite ? "已放进收藏" : "已取消收藏");
    });
    node.querySelector('[data-action="remix"]').addEventListener("click", () => {
      state.remixes += 1;
      localStorage.setItem("naiwa_remixes", String(state.remixes));
      applyRecipe(result.recipe);
      toast("已复制这只蛙，可以继续改配方");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    grid.appendChild(node);
  });
}

function render() {
  ["role", "outfit", "accessory", "scene"].forEach(renderOptions);
  renderSelect("pose", "#poseSelect");
  renderSelect("expression", "#expressionSelect");
  $("#roleValue").textContent = getItem("role").name;
  $("#outfitValue").textContent = getItem("outfit").name;
  $("#accessoryValue").textContent = getItem("accessory").name;
  $("#sceneValue").textContent = getItem("scene").name;
  $("#crazyValue").textContent = state.crazyLevel;
  $("#promptOutput").textContent = compilePrompt();
  $("#frogStage").style.setProperty("--costume", getItem("outfit").color);
  $(".preview-card").style.background = `radial-gradient(circle at 22% 18%, rgba(246, 201, 69, 0.26), transparent 28%), radial-gradient(circle at 78% 24%, rgba(135, 168, 216, 0.24), transparent 32%), ${getItem("scene").bg}`;
  $(".production-panel h2").textContent = `${labelRecipe()} · 4 张`;
  $("#recipeCount").textContent = state.recipes.length;
  $("#downloadCount").textContent = state.downloads;
  $("#remixCount").textContent = state.remixes;
  renderSavedRecipes();
  renderResults();
}

function applyRecipe(recipe) {
  state.role = recipe.role;
  state.outfit = recipe.outfit;
  state.accessory = recipe.accessory;
  state.scene = recipe.scene;
  state.pose = recipe.pose;
  state.expression = recipe.expression;
  state.crazyLevel = recipe.crazy_level;
  $("#crazyLevel").value = state.crazyLevel;
  render();
}

function saveRecipe(recipe = currentRecipe()) {
  const stamped = { ...recipe, saved_at: new Date().toISOString() };
  state.recipes = [stamped, ...state.recipes.filter((item) => JSON.stringify({ ...item, saved_at: undefined }) !== JSON.stringify({ ...stamped, saved_at: undefined }))].slice(0, 8);
  localStorage.setItem("naiwa_recipes", JSON.stringify(state.recipes));
  render();
}

function startProduction() {
  if (state.busy) return;
  state.busy = true;
  state.results = [];
  $("#startProduction").disabled = true;
  $("#jobName").textContent = labelRecipe();
  $("#resultHint").textContent = "生产线启动中，正在保持奶蛙身份一致。";
  renderResults();

  let tick = 0;
  const totalTicks = 42;
  const timer = window.setInterval(() => {
    tick += 1;
    const progress = Math.min(100, Math.round((tick / totalTicks) * 100));
    const activeIndex = Math.min(productionSteps.length - 1, Math.floor((progress / 100) * productionSteps.length));
    $("#jobPercent").textContent = `${progress}%`;
    $("#progressBar").style.width = `${progress}%`;
    renderSteps(activeIndex);
    if (progress >= 100) {
      window.clearInterval(timer);
      finishProduction();
    }
  }, 105);
}

function finishProduction() {
  const recipe = currentRecipe();
  saveRecipe(recipe);
  state.results = Array.from({ length: 4 }, (_, index) => {
    const intensity = ["稳态", "戏剧", "表情包", "抽象"][index];
    return {
      id: `gen_${Date.now()}_${index}`,
      recipe: { ...recipe },
      title: `${intensity}版 · ${labelRecipe(recipe)}`,
      caption: `${getItem("outfit", recipe.outfit).name} / ${getItem("pose", recipe.pose).name} / ${getItem("expression", recipe.expression).name} / 抽象 ${recipe.crazy_level}`,
      favorite: false
    };
  });
  state.busy = false;
  $("#startProduction").disabled = false;
  $("#jobName").textContent = `${labelRecipe(recipe)} 完成`;
  $("#jobPercent").textContent = "100%";
  $("#progressBar").style.width = "100%";
  renderSteps(productionSteps.length);
  $("#resultHint").textContent = "每张图都保留同一套结构化 Recipe，可直接下载或继续 Remix。";
  render();
  toast("奶蛙出炉，4 张结果已生成");
}

function downloadResult(result, index) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.onload = () => {
    const scene = getItem("scene", result.recipe.scene);
    const outfit = getItem("outfit", result.recipe.outfit);
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
    gradient.addColorStop(0, "#fff4bb");
    gradient.addColorStop(1, outfit.color);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1080);
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = "#1d1c17";
    for (let x = -80; x < 1080; x += 120) {
      ctx.fillRect(x, 0, 26, 1080);
    }
    ctx.globalAlpha = 1;
    ctx.drawImage(image, 118, 105, 844, 844);
    ctx.fillStyle = "rgba(29, 28, 23, 0.86)";
    ctx.fillRect(70, 910, 940, 92);
    ctx.fillStyle = "#fff7d2";
    ctx.font = "700 38px sans-serif";
    ctx.fillText(result.title, 104, 968, 820);
    ctx.font = "500 24px sans-serif";
    ctx.fillText(scene.name, 104, 1000, 680);
    canvas.toBlob((blob) => {
      if (!blob) {
        toast("下载生成失败，请再试一次");
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `naiwa-${index + 1}.png`;
      link.href = url;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      state.downloads += 1;
      localStorage.setItem("naiwa_downloads", String(state.downloads));
      render();
    }, "image/png");
  };
  image.src = "./assets/naiwa-base.png";
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
  const lifecycle = new AbortController();
  const configureSchema = {
    type: "object",
    properties: {
      role: { type: "string" },
      outfit: { type: "string" },
      accessory: { type: "string" },
      scene: { type: "string" },
      pose: { type: "string" },
      expression: { type: "string" },
      crazy_level: { type: "number", minimum: 0, maximum: 100 }
    },
    additionalProperties: false
  };
  Promise.resolve(
    context.registerTool(
      {
        name: "read_current_recipe",
        title: "Read current Naiwa recipe",
        description: "Return the current visible Naiwa remix recipe and compiled prompt.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute() {
          return { recipe: currentRecipe(), prompt: compilePrompt() };
        }
      },
      { signal: lifecycle.signal }
    )
  ).catch(console.warn);
  Promise.resolve(
    context.registerTool(
      {
        name: "configure_recipe",
        title: "Configure Naiwa recipe",
        description: "Update the visible recipe controls for role, outfit, accessory, scene, pose, expression, or crazy level.",
        inputSchema: configureSchema,
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          const next = input || {};
          ["role", "outfit", "accessory", "scene", "pose", "expression"].forEach((type) => {
            if (next[type] && catalog[type].some((item) => item.id === next[type])) state[type] = next[type];
          });
          if (typeof next.crazy_level === "number") {
            state.crazyLevel = Math.max(0, Math.min(100, Math.round(next.crazy_level)));
            $("#crazyLevel").value = state.crazyLevel;
          }
          render();
          return { recipe: currentRecipe(), label: labelRecipe() };
        }
      },
      { signal: lifecycle.signal }
    )
  ).catch(console.warn);
  Promise.resolve(
    context.registerTool(
      {
        name: "start_production_job",
        title: "Start Naiwa production",
        description: "Start the same four-image production job as the visible primary button.",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute() {
          startProduction();
          return { status: "started", recipe: currentRecipe(), count: 4 };
        }
      },
      { signal: lifecycle.signal }
    )
  ).catch(console.warn);
}

$("#crazyLevel").addEventListener("input", (event) => {
  state.crazyLevel = Number(event.target.value);
  render();
});

$("#startProduction").addEventListener("click", startProduction);
$("#saveRecipe").addEventListener("click", () => {
  saveRecipe();
  toast("配方已保存");
});
$("#copyPrompt").addEventListener("click", async () => {
  await navigator.clipboard.writeText(compilePrompt());
  toast("Prompt 已复制");
});

renderSteps(-1);
render();
registerWebMcpTools();
