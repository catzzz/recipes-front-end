import Layout from "@/components/Layout";
import Image from 'next/image'
const AboutPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 mt-6">
        <h1 className="col-span-2 flex justify-center py-2 text-4xl font-semibold mb-8 text-gray-700">More About Me</h1>
        <div className="col-span-1 flex items-start ">
          <div>
            <img src="/images/bee-chu.jpeg" alt="bee's photo" className="rounded-md shadow"/>
          </div>
          <div></div>
        </div>
        <div className="col-span-1">
          <h1 className="uppercase font-semibold text-gray-800 text-4xl text-center mb-4">Bee Chu</h1>
          <p>
            Hey Mamas! I’m Lauren, and I have lived in the Bay Area for about 6
            years now. While my Husband Patrick works for Facebook doing digital
            marketing, I watch after my 2 kids, Avery (4) and Max (1.5). My life
            revolves around three things: God, my family, and diet dr. Pepper-
            though no amount of these help when I’m stuck in a small apartment
            with two VERY busy kids. Since my stay-at-home-mom job can be a
            little monotonous at times, I try to find ways to spice up the daily
            routine. Those that know me well can tell you that I absolutely LOVE
            finding new things to do. It doesn’t matter if I have to drive two
            hours away for a museum, wait in a ridiculously long line with 2
            kids screaming to taste a famous pastry, or sell my kidney in order
            to pay for these obsessive searches, I remain committed to scouting
            out hidden gems throughout the city. My husband, who dreams of
            buying a house in the country far far away from the hustle and
            bustle of the city, thinks I’m crazy. I can’t help it though! This
            enthusiasm and drive to discover new things throughout SF has
            honestly made motherhood much more enjoyable for me, and it
            recharges my mom batteries. Because of this, running Bay Area Moms
            has been a huge blessing! Getting out every day can be expensive, so
            for the sake of keeping my kidneys, it has become my mission to find
            family/kid friendly activities to do that are either free or cheap.
            I post my findings on Bay Area Moms, so follow along if you are
            itching to mix up your mom routine... AND If you can tell me about
            something new that I haven’t discovered yet, . Let the discovering
            game begin.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
