import { Trophy, Star, Users, Calendar } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      year: "2021",
      title: "KARTA CUP I",
      description: "Awal mula turnamen dengan 16 tim peserta",
      champion: "GANESA FC",
      icon: Trophy
    },
    {
      year: "2022",
      title: "KARTA CUP II",
      description: "Pertama kali mengintegrasikan festival seni",
      champion: "TOCXNET FC",
      icon: Star
    },
    {
      year: "2023",
      title: "KARTA CUP III",
      description: "Berkembang menjadi 24 tim peserta",
      champion: "ARUMBA FC",
      icon: Users
    },
    {
      year: "2024",
      title: "KARTA CUP IV",
      description: "Mencapai 39 tim peserta dengan hadiah terbesar",
      champion: "GANESA FC",
      icon: Calendar
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">
          Sejarah KARTA CUP
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow" />
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover-scale card-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <Icon className="w-8 h-8 text-green-600" />
                          <div>
                            <h3 className="text-2xl font-bold text-green-800">{milestone.title}</h3>
                            <p className="text-gray-600">{milestone.year}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{milestone.description}</p>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <p className="font-semibold">Juara: {milestone.champion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">KARTA CUP V 2025</h3>
          <p className="text-lg text-gray-700">
            Kini memasuki tahun kelima, KARTA CUP telah berkembang menjadi turnamen sepak bola amatir terbesar
            di wilayah ini dengan total hadiah 10 juta rupiah dan menghadirkan kolaborasi unik antara olahraga dan seni budaya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
