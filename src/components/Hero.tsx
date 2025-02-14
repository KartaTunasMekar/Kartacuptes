import { Trophy, Calendar, Users, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pitch-gradient text-white py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="field-pattern absolute inset-0 opacity-30" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Palette className="w-16 h-16 text-var(--art-rose) float-animation" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            KARTA CUP V
            <span className="absolute -top-4 -right-4 text-var(--goal-gold) text-2xl">2025</span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-8 max-w-3xl">
            Turnamen Sepak Bola & Festival Seni Desa Pangauban
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover-scale relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Trophy size={40} className="text-var(--goal-gold) mx-auto mb-4 trophy-glow" />
              <p className="text-xl font-semibold relative z-10">Total Hadiah</p>
              <p className="text-2xl font-bold text-var(--goal-gold) relative z-10">Rp 10.000.000</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover-scale relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Calendar size={40} className="text-var(--goal-gold) mx-auto mb-4" />
              <p className="text-xl font-semibold relative z-10">Waktu Pelaksanaan</p>
              <p className="text-lg relative z-10">Juli - Agustus 2025</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover-scale relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <Users size={40} className="text-var(--goal-gold) mx-auto mb-4" />
              <p className="text-xl font-semibold relative z-10">Peserta</p>
              <p className="text-lg relative z-10">39 Tim Terdaftar</p>
            </div>
          </div>

          <div className="mt-12 relative">
            <a 
              href="/pendaftaran" 
              className="bg-white text-var(--pitch-green) px-10 py-4 rounded-full text-xl font-bold 
                       hover:bg-var(--goal-gold) hover:text-white transition-all duration-300 
                       hover-scale inline-block relative z-10"
            >
              Daftar Sekarang
            </a>
            <div className="absolute inset-0 bg-var(--goal-gold) blur-lg opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
