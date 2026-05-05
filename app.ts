type Sentiment = "Positive" | "Neutral" | "Negative";
type Mode = "dialogue" | "sentiment";

interface CharacterProfile {
  name: string;
  avatar: string;
  avatarPath: string;
  color: string;
  dialogues: number;
  sentiment: Sentiment;
  sentimentScore: number;
  keywords: string[];
  personalityInsight: string;
}

interface CharacterPresentation {
  avatar: string;
  avatarPath: string;
  color: string;
  keywords: string[];
  personalityInsight: string;
}

interface AppState {
  mode: Mode;
  selectedCharacter: string | null;
  chart: any;
  dataError: string | null;
}

const characterPresentation: Record<string, CharacterPresentation> = {
  "Judy Hopps": {
    avatar: "🐰",
    avatarPath: "characters/Judy_Hopps_Z2.PNG.webp",
    color: "#3d7ad6",
    keywords: ["idealism", "courage", "justice"],
    personalityInsight: "Judy is the engine of momentum, pushing every major emotional turn forward."
  },
  "Nick Wilde": {
    avatar: "🦊",
    avatarPath: "characters/Nick_Wilde_Z2.PNG.webp",
    color: "#f28a2d",
    keywords: ["wit", "skepticism", "loyalty"],
    personalityInsight: "Nick's wit disarms tension, then quietly transforms into trust and heart."
  },
  "Chief Bogo": {
    avatar: "🐃",
    avatarPath: "characters/Chief_Bogo.webp",
    color: "#4b5565",
    keywords: ["authority", "pressure", "discipline"],
    personalityInsight: "Bogo injects pressure into the plot, turning every scene into a test of resilience."
  },
  "Stu Hopps": {
    avatar: "🐇",
    avatarPath: "characters/InfoStu.webp",
    color: "#6b9f42",
    keywords: ["family", "concern", "tradition"],
    personalityInsight: "Stu grounds the story with protective realism, sharpening Judy's leap into risk."
  },
  "Dawn Bellwether": {
    avatar: "🐑",
    avatarPath: "characters/Bellwether_Render.webp",
    color: "#a87eb8",
    keywords: ["ambition", "deception", "control"],
    personalityInsight: "Bellwether's soft tone hides strategic intent, making her reveal hit harder."
  },
  "Benjamin Clawhauser": {
    avatar: "🐆",
    avatarPath: "characters/BenjaminClawhauser.png",
    color: "#5988c4",
    keywords: ["optimism", "humor", "support"],
    personalityInsight: "Clawhauser often eases tension while quietly reinforcing trust in key moments."
  },
  "Bonnie Hopps": {
    avatar: "🐇",
    avatarPath: "characters/bonnie_Hopps.png",
    color: "#7aa067",
    keywords: ["care", "family", "encouragement"],
    personalityInsight: "Bonnie's lines add emotional grounding and family perspective to Judy's arc."
  },
  "Flash Slothmore": {
    avatar: "🦥",
    avatarPath: "characters/Flash.png",
    color: "#8a78b7",
    keywords: ["comic timing", "patience", "contrast"],
    personalityInsight: "Flash uses deliberate pacing to create contrast and memorable comic relief."
  },
  "Leodore Lionheart": {
    avatar: "🦁",
    avatarPath: "characters/LeodoreLionheart.png",
    color: "#b4843e",
    keywords: ["leadership", "image", "control"],
    personalityInsight: "Lionheart's dialogue exposes the tension between leadership image and hard choices."
  },
  "Mr. Big": {
    avatar: "🐁",
    avatarPath: "characters/MrBig.png",
    color: "#6d6f8a",
    keywords: ["influence", "rules", "loyalty"],
    personalityInsight: "Mr. Big blends authority with favor-trading language that shifts power quickly."
  },
  Yax: {
    avatar: "🐂",
    avatarPath: "characters/Yax.png",
    color: "#3f8f91",
    keywords: ["calm", "openness", "advice"],
    personalityInsight: "Yax's relaxed dialogue provides unconventional guidance when tension is high."
  },
  Gazelle: {
    avatar: "🦌",
    avatarPath: "characters/gazelle.jpg",
    color: "#d07bb0",
    keywords: ["performance", "hope", "unity"],
    personalityInsight: "Gazelle's dialogue amplifies the film's hopeful civic message."
  },
  "Fru Fru": {
    avatar: "🐭",
    avatarPath: "characters/Fru_Fru.webp",
    color: "#b98ac9",
    keywords: ["style", "status", "family"],
    personalityInsight: "Fru Fru adds social texture and status cues in a compact set of scenes."
  },
  "Duke Weaselton": {
    avatar: "🦦",
    avatarPath: "characters/DukeWeaselton.png",
    color: "#7f8ba6",
    keywords: ["scheming", "opportunism", "comic"],
    personalityInsight: "Duke's speech patterns blend petty crime energy with comic disruption."
  },
  "Jerry Jumbeaux Jr.": {
    avatar: "🐘",
    avatarPath: "characters/Jerry_Jumbeaux.webp",
    color: "#6d90ab",
    keywords: ["order", "rules", "friction"],
    personalityInsight: "Jerry's short exchanges underline social friction through formal storefront rules."
  },
  Doug: {
    avatar: "🐏",
    avatarPath: "characters/Doug.png",
    color: "#7d7f93",
    keywords: ["plot", "threat", "secrecy"],
    personalityInsight: "Doug's lines drive covert conflict and raise perceived danger quickly."
  },
  "Major Friedkin": {
    avatar: "🐺",
    avatarPath: "characters/MajorFriedkin.png",
    color: "#6e6478",
    keywords: ["authority", "deterrence", "force"],
    personalityInsight: "Major Friedkin's language projects hard authority and punitive pressure."
  },
  "Mrs. Otterton": {
    avatar: "🦦",
    avatarPath: "characters/MrsOtterton.png",
    color: "#8a9cc7",
    keywords: ["plea", "emotion", "urgency"],
    personalityInsight: "Mrs. Otterton's emotional appeal catalyzes the central investigation."
  },
  Sharla: {
    avatar: "🐺",
    avatarPath: "characters/Sharla.webp",
    color: "#8f80a8",
    keywords: ["neighborhood", "gossip", "comic"],
    personalityInsight: "Sharla contributes local texture and neighborhood tone in brief interactions."
  },
  "Young Gideon Grey": {
    avatar: "🦊",
    avatarPath: "characters/YoungGideonGrey.png",
    color: "#8a6a58",
    keywords: ["bullying", "bias", "conflict"],
    personalityInsight: "Young Gideon's lines surface early prejudice dynamics that frame Judy's arc."
  },
  Finnick: {
    avatar: "🦊",
    avatarPath: "characters/Finnick.webp",
    color: "#8f5f45",
    keywords: ["streetwise", "comic", "strategy"],
    personalityInsight: "Finnick's short lines sharpen tone with quick wit and tactical banter."
  },
  "Gideon Grey": {
    avatar: "🦊",
    avatarPath: "characters/GideonGrey.webp",
    color: "#9b6f52",
    keywords: ["growth", "regret", "repair"],
    personalityInsight: "Gideon Grey's dialogue reflects character growth and social repair."
  },
  "Dr. Madge Honey Badger": {
    avatar: "🦡",
    avatarPath: "characters/Madge_Honey_Badger.webp",
    color: "#867f70",
    keywords: ["clinical", "forensics", "precision"],
    personalityInsight: "Dr. Madge frames investigative beats with precise procedural language."
  },
  Nangi: {
    avatar: "🐘",
    avatarPath: "characters/Nangi.PNG.webp",
    color: "#8a7f91",
    keywords: ["showmanship", "drama", "stage"],
    personalityInsight: "Nangi adds theatrical intensity and dramatic framing in brief scenes."
  },
  Renato: {
    avatar: "🐆",
    avatarPath: "characters/RenatoManchas.webp",
    color: "#6f6b7f",
    keywords: ["fear", "urgency", "mystery"],
    personalityInsight: "Renato's dialogue increases urgency and mystery during key reveals."
  },
  "Renato Manchas": {
    avatar: "🐆",
    avatarPath: "characters/RenatoManchas.webp",
    color: "#6f6b7f",
    keywords: ["fear", "urgency", "mystery"],
    personalityInsight: "Renato's dialogue increases urgency and mystery during key reveals."
  },
  Woolter: {
    avatar: "🐏",
    avatarPath: "characters/Woolter.webp",
    color: "#6e6b79",
    keywords: ["threat", "scheme", "tension"],
    personalityInsight: "Woolter contributes to menace and plot pressure in conflict scenes."
  },
  "Frantic Pig": {
    avatar: "🐷",
    avatarPath: "characters/FranticPig.webp",
    color: "#b07f7f",
    keywords: ["panic", "chaos", "alarm"],
    personalityInsight: "Frantic Pig's lines inject panic and crowd-level urgency."
  },
  "Fabienne Growley": {
    avatar: "🐺",
    avatarPath: "characters/FabinenneGrowley.webp",
    color: "#8b7285",
    keywords: ["authority", "accusation", "pressure"],
    personalityInsight: "Fabienne's delivery amplifies confrontation and social pressure."
  },
  "Bucky Oryxantlerson": {
    avatar: "🦬",
    avatarPath: "characters/Bucky.webp",
    color: "#7f8796",
    keywords: ["neighbor", "friction", "banter"],
    personalityInsight: "Bucky's dialogue adds neighborhood friction and everyday conflict texture."
  },
  "Pronk Oryxantlerson": {
    avatar: "🦬",
    avatarPath: "characters/Pronk.webp",
    color: "#6f8391",
    keywords: ["neighbor", "friction", "banter"],
    personalityInsight: "Pronk reinforces neighborhood tension through clipped argumentative exchanges."
  },
  "Woodchuck Bully": {
    avatar: "🐿️",
    avatarPath: "characters/Woodchuck.PNG.webp",
    color: "#9b8067",
    keywords: ["teasing", "hostility", "bias"],
    personalityInsight: "Woodchuck Bully scenes emphasize social hostility in early encounters."
  }
};

const fallbackPalette = ["#3d7ad6", "#f28a2d", "#4b5565", "#6b9f42", "#a87eb8", "#2a9d8f", "#bf4f74"];

const fallbackKeywordsBySentiment: Record<Sentiment, string[]> = {
  Positive: ["optimism", "warmth", "trust"],
  Negative: ["conflict", "stress", "friction"],
  Neutral: ["balance", "context", "tone"]
};

const SENTIMENT_DECIMALS = 4;

const chartInsights: string[] = [
  "Judy alone carries over a third of all lines among featured characters, making her the narrative engine.",
  "Nick's dialogue volume and positive sentiment show his shift from comic foil to trusted partner.",
  "Lower-volume characters often deliver high-friction dialogue, intensifying dramatic turns.",
  "Sentiment concentration around positive scores supports the film's hopeful social message."
];

let characters: CharacterProfile[] = [];

const state: AppState = {
  mode: "dialogue",
  selectedCharacter: null,
  chart: null,
  dataError: null
};

const fallbackColorByIndex = (index: number): string => fallbackPalette[index % fallbackPalette.length];

const getTotalDialogues = (): number => characters.reduce((sum, character) => sum + character.dialogues, 0);

const getSortedCharacters = (): CharacterProfile[] => [...characters].sort((a, b) => b.dialogues - a.dialogues);

const getFeaturedCharacters = (): CharacterProfile[] => getSortedCharacters().slice(0, 5);

const getTopFivePlusOthers = (): CharacterProfile[] => {
  const sorted = getSortedCharacters();
  const topFive = sorted.slice(0, 5);
  const rest = sorted.slice(5);

  if (!rest.length) {
    return topFive;
  }

  const othersDialogues = rest.reduce((sum, character) => sum + character.dialogues, 0);
  const weightedSentimentTotal = rest.reduce(
    (sum, character) => sum + character.sentimentScore * character.dialogues,
    0
  );
  const othersSentimentScore = othersDialogues ? weightedSentimentTotal / othersDialogues : 0;
  const othersSentiment = normalizeSentimentCategory(othersSentimentScore, "");

  return [
    ...topFive,
    {
      name: "Others",
      avatar: "🎭",
      avatarPath: "",
      color: "#7c8798",
      dialogues: othersDialogues,
      sentiment: othersSentiment,
      sentimentScore: othersSentimentScore,
      keywords: ["combined", "supporting", "cast"],
      personalityInsight: "Combined supporting cast grouped for readability in chart view."
    }
  ];
};

const parseCsvLine = (line: string): string[] => {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (char === '"') {
      if (inQuotes && line[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
};

const parseCsv = (text: string): Array<Record<string, string>> => {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length);
  if (!lines.length) {
    return [];
  }

  const headers = parseCsvLine(lines[0]).map((header) => header.trim());
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = (values[index] ?? "").trim();
    });
    return row;
  });
};

const normalizeSentimentCategory = (score: number, category: string): Sentiment => {
  if (category === "Positive" || category === "Negative" || category === "Neutral") {
    return category;
  }

  if (score > 0.05) {
    return "Positive";
  }

  if (score < -0.05) {
    return "Negative";
  }

  return "Neutral";
};

const normalizeCharacterData = (
  name: string,
  dialogues: number,
  score: number,
  category: string,
  index: number
): CharacterProfile => {
  const presentation = characterPresentation[name];
  const sentiment = normalizeSentimentCategory(score, category);

  return {
    name,
    avatar: presentation?.avatar || "🎬",
    avatarPath: presentation?.avatarPath || "",
    color: presentation?.color || fallbackColorByIndex(index),
    dialogues,
    sentiment,
    sentimentScore: score,
    keywords: presentation?.keywords || fallbackKeywordsBySentiment[sentiment],
    personalityInsight:
      presentation?.personalityInsight || "This character's sentiment profile is loaded directly from transcript-derived CSV data."
  };
};

const fetchCsv = async (path: string): Promise<string> => {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Cannot load ${path}`);
  }

  return response.text();
};

const loadCharactersFromCsv = async (): Promise<void> => {
  const [sentimentCsv, transcriptCsv] = await Promise.all([
    fetchCsv("character_sentiment_analysis.csv"),
    fetchCsv("zootopia_transcript_cleaned.csv")
  ]);

  const sentimentRows = parseCsv(sentimentCsv);
  const transcriptRows = parseCsv(transcriptCsv);

  const sentimentByName = new Map<string, { score: number; category: string }>();
  sentimentRows.forEach((row) => {
    const name = (row.Character || "").trim();
    const score = Number(row.Sentiment);
    if (!name || Number.isNaN(score)) {
      return;
    }

    sentimentByName.set(name, {
      score,
      category: (row["Sentiment Category"] || "").trim()
    });
  });

  const dialogueCounts = new Map<string, number>();
  transcriptRows.forEach((row) => {
    const name = (row.Character || "").trim();
    if (!name) {
      return;
    }

    dialogueCounts.set(name, (dialogueCounts.get(name) || 0) + 1);
  });

  const merged = [...dialogueCounts.entries()]
    .map(([name, dialogues], index) => {
      const sentiment = sentimentByName.get(name);
      if (!sentiment) {
        return null;
      }

      return normalizeCharacterData(name, dialogues, sentiment.score, sentiment.category, index);
    })
    .filter((character): character is CharacterProfile => Boolean(character))
    .sort((a, b) => b.dialogues - a.dialogues);

  characters = merged;
};

const sentimentClass = (sentiment: Sentiment): string => {
  if (sentiment === "Negative") {
    return "negative";
  }
  if (sentiment === "Neutral") {
    return "neutral";
  }
  return "positive";
};

const sentimentFillStyle = (sentiment: Sentiment): string => {
  if (sentiment === "Negative") {
    return "linear-gradient(90deg, #f16a7d 0%, #c03f54 100%)";
  }
  if (sentiment === "Neutral") {
    return "linear-gradient(90deg, #d5ad5b 0%, #b98f3b 100%)";
  }
  return "linear-gradient(90deg, #46ca86 0%, #1f8d5d 100%)";
};

const metricValue = (character: CharacterProfile): number => {
  if (state.mode === "sentiment") {
    return Number((character.sentimentScore * 100).toFixed(SENTIMENT_DECIMALS));
  }
  return character.dialogues;
};

const sentimentToneHex = (score: number): string => {
  if (score < -0.001) {
    return "#df4f67";
  }
  if (score > 0.001) {
    return "#2ca36b";
  }
  return "#a28d5d";
};

const hexToRgba = (hexColor: string, alpha: number): string => {
  const normalized = hexColor.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;

  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const chartFillColor = (character: CharacterProfile): string => {
  const isSelected = state.selectedCharacter === character.name;
  const baseColor = state.mode === "sentiment" ? sentimentToneHex(character.sentimentScore) : character.color;

  if (state.selectedCharacter && !isSelected) {
    return hexToRgba(baseColor, state.mode === "sentiment" ? 0.22 : 0.28);
  }

  return hexToRgba(baseColor, state.mode === "sentiment" ? 0.85 : 0.9);
};

const selectedData = (): CharacterProfile[] => {
  const chartCharacters = getTopFivePlusOthers();
  if (!state.selectedCharacter) {
    return chartCharacters;
  }
  return chartCharacters.filter((character) => character.name === state.selectedCharacter);
};

const percentageFor = (value: number, values: number[]): string => {
  const total = values.reduce((sum, current) => sum + current, 0);
  if (!total) {
    return "0.0%";
  }
  return `${((value / total) * 100).toFixed(1)}%`;
};

const toCapitalizedWords = (text: string): string =>
  text
    .split(" ")
    .map((part) => (part ? `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}` : part))
    .join(" ");

const formatSignedSentiment = (score: number): string => `${score >= 0 ? "+" : ""}${score.toFixed(SENTIMENT_DECIMALS)}`;

const profileUrlFor = (name: string): string => `character.html?name=${encodeURIComponent(name)}`;

const buildCard = (character: CharacterProfile): string => {
  const tags = character.keywords.map((keyword) => `<span class="tag">${toCapitalizedWords(keyword)}</span>`).join("");
  const sentimentWidth = `${Math.max(18, Math.min(100, Math.abs(character.sentimentScore) * 330))}%`;
  const isActive = state.selectedCharacter === character.name;
  const totalDialogues = getTotalDialogues();
  const dialogueShare = totalDialogues ? `${((character.dialogues / totalDialogues) * 100).toFixed(1)}%` : "0.0%";
  const sentimentEmoji =
    character.sentiment === "Positive" ? "✨" : character.sentiment === "Negative" ? "⚠️" : "🟡";

  return `
    <article class="card ${isActive ? "is-active" : ""}" data-character="${character.name}" tabindex="0" role="button" aria-label="Filter by ${character.name}">
      <div class="card-top">
        <div class="avatar" aria-hidden="true">
          <img class="avatar-img" src="${character.avatarPath}" alt="${character.name} avatar" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
          <span class="avatar-fallback">${character.avatar}</span>
        </div>
        <div class="card-title-wrap">
          <h3>${character.name}</h3>
          <p class="dialogue-share">${dialogueShare} of featured dialogue</p>
        </div>
      </div>
      <p class="meta">${sentimentEmoji} Dominant sentiment: <strong class="${sentimentClass(character.sentiment)}">${character.sentiment}</strong></p>
      <div class="sentiment-track" aria-hidden="true">
        <div class="sentiment-fill" style="width: ${sentimentWidth}; background: ${sentimentFillStyle(character.sentiment)}"></div>
      </div>
      <div class="card-stats" aria-label="Character details">
        <p><span>Dialogues</span><strong>${character.dialogues}</strong></p>
        <p><span>Sentiment Score</span><strong class="${sentimentClass(character.sentiment)}">${formatSignedSentiment(character.sentimentScore)}</strong></p>
      </div>
      <div class="card-actions">
        <a class="profile-link" href="${profileUrlFor(character.name)}" aria-label="View profile of ${character.name}">View Profile</a>
      </div>
      <p class="insight-snippet">${character.personalityInsight}</p>
      <div class="tag-list">${tags}</div>
    </article>
  `;
};

const renderCharacterCards = (): void => {
  const container = document.getElementById("characterCards");
  if (!container) {
    return;
  }

  const sortedCharacters = getSortedCharacters();
  if (!sortedCharacters.length) {
    container.innerHTML = '<p class="empty-state">No character data loaded from CSV.</p>';
    return;
  }

  container.innerHTML = sortedCharacters.map(buildCard).join("");

  container.querySelectorAll(".card").forEach((card) => {
    const characterName = card.getAttribute("data-character");
    if (!characterName) {
      return;
    }

    const activate = (): void => {
      state.selectedCharacter = state.selectedCharacter === characterName ? null : characterName;
      syncUI();
    };

    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event: Event) => {
      const keyEvent = event as KeyboardEvent;
      if (keyEvent.key === "Enter" || keyEvent.key === " ") {
        keyEvent.preventDefault();
        activate();
      }
    });

    const profileLink = card.querySelector(".profile-link");
    if (profileLink) {
      profileLink.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
  });
};

const renderInsights = (): void => {
  const lead = document.getElementById("insightLead");
  const list = document.getElementById("insightList");
  if (!lead || !list) {
    return;
  }

  if (state.dataError) {
    lead.textContent = state.dataError;
    list.innerHTML = "";
    return;
  }

  if (!characters.length) {
    lead.textContent = "Loading sentiment data from CSV...";
    list.innerHTML = "";
    return;
  }

  lead.textContent = state.selectedCharacter
    ? `Focus mode: ${state.selectedCharacter} is selected. Compare this character's influence against the full cast by resetting focus.`
    : "These patterns combine dialogue dominance with emotional direction to reveal how the story is steered.";

  list.innerHTML = chartInsights.map((insight) => `<li>${insight}</li>`).join("");
};

const customLabelPlugin = {
  id: "shareLabels",
  afterDatasetsDraw(chart: any): void {
    const { ctx } = chart;
    const dataset = chart.data.datasets[0];
    const values: number[] = dataset.data;

    ctx.save();
    ctx.font = "600 11px Sora";
    ctx.textAlign = "center";

    chart.getDatasetMeta(0).data.forEach((bar: any, index: number) => {
      const value = values[index];
      if (state.mode === "sentiment") {
        const sentimentLabel = `${value > 0 ? "+" : ""}${value.toFixed(SENTIMENT_DECIMALS)}`;
        const y = value >= 0 ? bar.y - 8 : bar.base + 16;
        ctx.fillStyle = value < 0 ? "#b83f56" : value > 0 ? "#247f53" : "#7b6740";
        ctx.fillText(sentimentLabel, bar.x, y);
        return;
      }

      const label = percentageFor(value, values);
      ctx.fillStyle = "#334e72";
      ctx.fillText(label, bar.x, bar.y - 8);
    });

    ctx.restore();
  }
};

const updateToggleButtons = (): void => {
  const dialogueModeBtn = document.getElementById("dialogueModeBtn");
  const sentimentModeBtn = document.getElementById("sentimentModeBtn");
  if (!dialogueModeBtn || !sentimentModeBtn) {
    return;
  }

  dialogueModeBtn.classList.toggle("is-active", state.mode === "dialogue");
  sentimentModeBtn.classList.toggle("is-active", state.mode === "sentiment");
};

const renderChart = (): void => {
  const canvas = document.getElementById("dialogueChart") as HTMLCanvasElement | null;
  const chartConstructor = (window as any).Chart;
  if (!canvas || !chartConstructor) {
    return;
  }

  const workingSet = selectedData();
  if (!workingSet.length) {
    if (state.chart) {
      state.chart.destroy();
      state.chart = null;
    }
    return;
  }

  const labels = workingSet.map((character) => character.name);
  const values = workingSet.map((character) => metricValue(character));
  const backgroundColors = workingSet.map((character) => chartFillColor(character));
  const borderColors = workingSet.map((character) =>
    state.mode === "sentiment" ? sentimentToneHex(character.sentimentScore) : character.color
  );
  const sentimentPeak =
    state.mode === "sentiment"
      ? Math.max(2, ...workingSet.map((character) => Math.abs(character.sentimentScore * 100)))
      : 0;
  const sentimentPadding = state.mode === "sentiment" ? Math.ceil(sentimentPeak * 0.25) + 1 : 0;

  if (state.chart) {
    state.chart.destroy();
  }

  state.chart = new chartConstructor(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: state.mode === "dialogue" ? "Dialogue Count" : "Sentiment Score",
          data: values,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1.5,
          borderRadius: 12,
          borderSkipped: false,
          maxBarThickness: 58
        }
      ]
    },
    plugins: [customLabelPlugin],
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items: any[]) => items[0].label,
            label: (ctx: any) => {
              if (state.mode === "sentiment") {
                const value = ctx.parsed.y;
                const direction = value > 0 ? "Positive" : value < 0 ? "Negative" : "Neutral";
                return `${direction}: ${value > 0 ? "+" : ""}${value.toFixed(SENTIMENT_DECIMALS)}`;
              }
              return `Dialogues: ${ctx.parsed.y}`;
            },
            afterLabel: (ctx: any) => {
              const character = workingSet[ctx.dataIndex];
              return `Dominant sentiment: ${character.sentiment}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: "#334e72",
            font: { family: "Source Sans 3", size: 12, weight: 600 }
          }
        },
        y: {
          beginAtZero: state.mode !== "sentiment",
          suggestedMin: state.mode === "sentiment" ? -(sentimentPeak + sentimentPadding) : undefined,
          suggestedMax: state.mode === "sentiment" ? sentimentPeak + sentimentPadding : undefined,
          grid: {
            color: (ctx: any) =>
              state.mode === "sentiment" && ctx.tick.value === 0
                ? "rgba(27, 46, 77, 0.35)"
                : "rgba(45, 74, 120, 0.12)"
          },
          ticks: {
            color: "#57708f",
            callback: (value: number) =>
              state.mode === "sentiment"
                ? `${value > 0 ? "+" : ""}${Number(value).toFixed(SENTIMENT_DECIMALS)}`
                : value
          }
        }
      },
      onClick: (_event: unknown, elements: any[]) => {
        if (!elements.length) {
          return;
        }

        const index = elements[0].index;
        const clickedName = labels[index];
        state.selectedCharacter = state.selectedCharacter === clickedName ? null : clickedName;
        syncUI();
      }
    }
  });
};

const setupControls = (): void => {
  const dialogueModeBtn = document.getElementById("dialogueModeBtn");
  const sentimentModeBtn = document.getElementById("sentimentModeBtn");

  if (dialogueModeBtn) {
    dialogueModeBtn.addEventListener("click", () => {
      state.mode = "dialogue";
      syncUI();
    });
  }

  if (sentimentModeBtn) {
    sentimentModeBtn.addEventListener("click", () => {
      state.mode = "sentiment";
      syncUI();
    });
  }
};

const syncUI = (): void => {
  updateToggleButtons();
  renderChart();
  renderCharacterCards();
  renderInsights();
};

const initializeData = async (): Promise<void> => {
  try {
    await loadCharactersFromCsv();
    state.dataError = null;
    if (state.selectedCharacter && !characters.some((character) => character.name === state.selectedCharacter)) {
      state.selectedCharacter = null;
    }
  } catch (_error) {
    state.dataError = "Unable to load CSV data. Please run this project from a local server and verify both CSV files exist.";
    characters = [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  setupControls();
  await initializeData();
  syncUI();
});
