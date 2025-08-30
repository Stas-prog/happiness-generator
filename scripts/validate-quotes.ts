import fs from "fs";
import path from "path";

type Q = { text: string; author: string };
type L = "uk" | "en" | "de";

const fp = path.join(process.cwd(), "data/quotes.json");
const raw = fs.readFileSync(fp, "utf-8");
const data = JSON.parse(raw) as Record<L, Q[]>;

const want = 200;
let ok = true as boolean;

(["uk","en","de"] as L[]).forEach((lang) => {
  const arr = data[lang] || [];
  if (!Array.isArray(arr)) {
    console.error(`❌ ${lang}: не масив`);
    ok = false;
    return;
  }
  const empties = arr.filter(q => !q.text?.trim() || !q.author?.trim());
  if (empties.length) {
    console.warn(`⚠️ ${lang}: порожні поля у ${empties.length} цитат`);
  }
  console.log(`• ${lang}: ${arr.length} цитат (ціль: ${want})`);
});

if (ok) console.log("✅ quotes.json валідний за структурою.");
