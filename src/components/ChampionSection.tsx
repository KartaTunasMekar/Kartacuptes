import { Trophy, Medal, Star, Award } from 'lucide-react';

const ChampionSection = () => {
  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      <div className="field-pattern absolute inset-0 opacity-20" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-var(--pitch-green) mb-4">
            Juara KARTA CUP IV 2024
          </h2>
          <div className="w-24 h-1 bg-var(--goal-gold) mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Runner Up */}
          <div className="champion-card p-6 md:mt-12">
            <div className="relative mb-8">
              <img
                src="https://mocha-cdn.com/01950386-b135-7e2b-b1b3-eee8f3bb2965/f0cf41b7-500d-48f9-b1b6-1943153c43ad.png"
                alt="TOCXNET - Runner-up KARTA CUP IV"
                className="rounded-lg shadow-xl w-full h-auto hover-scale"
              />
              <div className="absolute -top-4 -right-4 bg-gray-400 text-white p-4 rounded-full shadow-lg pulse-animation">
                <Medal size={28} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                TOCXNET FC
              </h3>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <Medal size={24} />
                <p className="font-semibold">Runner Up</p>
              </div>
            </div>
          </div>

          {/* Champion */}
          <div className="champion-card p-6 transform md:-translate-y-8 z-10 bg-gradient-to-b from-white to-yellow-50">
            <div className="relative mb-8">
              <img
                src="https://mocha-cdn.com/01950386-b135-7e2b-b1b3-eee8f3bb2965/champion.png"
                alt="GANESA - Juara KARTA CUP IV"
                className="rounded-lg shadow-xl w-full h-auto hover-scale"
              />
              <div className="absolute -top-6 -right-6 bg-var(--goal-gold) text-white p-5 rounded-full shadow-lg float-animation trophy-glow">
                <Trophy size={32} />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-var(--goal-gold) text-white py-2 px-4 rounded-full inline-block mb-3">
                <Star className="inline-block mr-2" size={20} />
                JUARA 1
              </div>
              <h3 className="text-3xl font-bold text-var(--pitch-green) mb-3">
                GANESA FC
              </h3>
              <div className="flex items-center justify-center gap-2 text-var(--goal-gold)">
                <Trophy size={24} />
                <p className="font-semibold">Champions</p>
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="champion-card p-6 md:mt-12">
            <div className="relative mb-8">
              <img
                src="https://mocha-cdn.com/01950386-b135-7e2b-b1b3-eee8f3bb2965/football-background.png"
                alt="PUTRA MANDIRI - Juara 3 KARTA CUP IV"
                className="rounded-lg shadow-xl w-full h-auto hover-scale"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg pulse-animation">
                <Award size={28} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                PUTRA MANDIRI FC
              </h3>
              <div className="flex items-center justify-center gap-2 text-orange-500">
                <Medal size={24} />
                <p className="font-semibold">Third Place</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selamat kepada para juara yang telah menunjukkan semangat sportivitas 
            dan permainan berkualitas di KARTA CUP IV 2024!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChampionSection;
