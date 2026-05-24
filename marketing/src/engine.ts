import OpenAI from 'openai';
import cron from 'node-cron';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const PLATFORMS = {
  linkedin: { freq: 3, bestTime: "Tue-Thu 11:00-16:00 SAST", max: 5/week },
  instagram: { freq: 4, bestTime: "Mon-Thu 13:00-20:00", max: 5/week },
  // etc.
};

export async function generateDailyContent() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "system", content: "Create 5 unique, honest, value-first ads and landing page variants for CareerAI. No hype, no timers, no false claims. Different for free vs paid tiers. Pure pull: solve job search pain." }]
  });

  console.log("✅ Generated 5 new unique ads + landing pages");
  // In production: Post via API at best times with compliance check
  return completion.choices[0].message.content;
}

// Daily run
cron.schedule('0 9 * * *', generateDailyContent); // 9 AM SAST
