import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story",
  description:
    "Bjørnulf Østvik (Bjornulf Ostvik) — BearWolf founder, Ecogensus, resource technology.",
  alternates: { canonical: "https://realbearwolf.com/story" },
};

export default function Story() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-6 text-[#faf8f5] text-[15px] md:text-base leading-relaxed">
          <p>
            When I was 10, I used to ride my bike to the streets where they were building houses, just to watch. Some let me watch all day and even help. One guy built houses almost entirely by himself, big houses. I&apos;d watch for hours, picking up every trick I could. The contractors around town would give me scrap materials. I&apos;d tie a rope around big sheets of plywood and drag them home behind my bike, excited about the next thing I was going to build. It was probably a ridiculous sight.
          </p>
          <p>
            A treehouse with a bridge to a second platform. Go-karts, even a van one that three of us kids could fit in. Made from scratch. As a teenager, I built a plant science lab in a basement. A teacher at school helped me get state research approvals to experiment with curing plant diseases.
          </p>
          <p>
            My name, Bjørnulf, is Old Norse for &quot;Bear-Wolf&quot;. A name Americans couldn&apos;t pronounce and so old (Viking-era) that even in Norway people would call me &quot;Bear Wolf&quot;. In English.
          </p>
          <p>
            I grew up split between a rural town in America with one traffic light and a tiny fishing village on a fjord in northern Norway. When I was younger, my family didn&apos;t have much. At our first place, our kitchen table was a cardboard box for a while. On hot summer days as a baby I was put in front of a box fan because we didn&apos;t have AC at our one bedroom place.
          </p>
          <p>
            Norway gave me mountains that make you feel small in the best possible way, and the midnight sun on the fjords at 2 AM in my grandfather&apos;s boat, left behind when he passed while I was five. You learn a certain respect for the world when you grow up inside it like that.
          </p>
          <p>
            My childhood was marked by things I didn&apos;t choose. I won&apos;t dwell on them, except to say they gave me an awareness of other people&apos;s pain that started very early and never left.
          </p>
          <p>
            I fell in love with literature as a teenager. Hemingway. Hesse. Fitzgerald. A teacher straight out of Dead Poets Society encouraged me to think bigger. Funny how you don&apos;t even know it when it&apos;s happening, but no matter how bad things get there are people around who can give you hope. We read everything Toni Morrison ever wrote, then spent a full day in a workshop with her discussing her work. I was the not-fancy kid at a fancy New England prep school. Clawed my way into the Cum Laude society but still didn&apos;t fit in and they let me know it.
          </p>
          <p>
            So at Cornell, I decided to throw the biggest parties on campus. Built a stage, DJ&apos;d, set up light shows. A thousand people on our best nights. I used to watch from a balcony overlooking the dance floor. Everybody moving, the lights, the noise, the smiles...and I&apos;d feel sad. A girl came up to me once and told me people were saying it was their best moments of the semester, of the year. I saw the girl on the floor whose smile couldn&apos;t hide the pain her eyes showed as she threw her arms up to signal...what...performative joy. The person whose friends had left and was standing at the edge. The kid who stepped outside and sat on the curb. What was I doing. This wasn&apos;t helping anyone. Just distractions.
          </p>
          <p>
            Added a second Cornell degree (grad school). GW Law. Three DC firms, briefly. Helped launch a strategy and risk consulting firm. Built tools for Standard &amp; Poor&apos;s. At 27, I proposed a strategic plan to Lockheed Martin; after months of meetings, they invited me in to build new advanced tech programs. I cut my salary in half to take it. At points I was living on a few dollars a day for food and anything else. I didn&apos;t mind. I was building again.
          </p>
          <p>
            I&apos;ve spent most of my career building quietly. The reasons for that will make sense soon. But I&apos;ve reached a point where staying quiet isn&apos;t an option anymore, so I figured I&apos;d start by telling you who I am.
          </p>
          <p>
            I took a walk before writing this and deciding on this course. The sun was setting and the light caught the same gold as my daughter&apos;s hair. And the picture of her below was in my mind.
          </p>
          <p>
            She&apos;s spinning in the sunset. No music. No audience. Just dancing.
            <br />
            We come into this world like that. I came into the world like that. No shame, no judgment, pure innocence and joy.
          </p>
          <p>
            She can stay that way. You can too.
          </p>
          <p>
            And if I can make that happen, it&apos;s all worth it.
          </p>
          <p>
            Protecting it is the highest purpose I will ever have.
          </p>
        </div>

        <p
          className="mt-16 md:mt-24 text-center italic text-xl md:text-2xl text-amber-100/90"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          We come into this world dancing.
        </p>
      </article>
    </main>
  );
}
