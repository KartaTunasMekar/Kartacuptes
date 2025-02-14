import { Calendar, Clock, MapPin, Trophy } from 'lucide-react';

const Schedule = () => {
  const schedules = [
    {
      phase: "Fase Grup",
      date: "1 - 20 Juli 2025",
      time: "15.00 - 17.00 WIB",
      location: "Lapangan Desa Pangauban",
      description: "16 grup dengan format liga"
    },
    {
      phase: "Babak 32 Besar",
      date: "22 - 25 Juli 2025",
      time: "15.00 - 17.00 WIB",
      location: "Lapangan Desa Pangauban",
      description: "Sistem gugur"
    },
    {
      phase: "Babak 16 Besar",
      date: "27 - 30 Juli 2025",
      time: "15.00 - 17.00 WIB",
      location: "Lapangan Desa Pangauban",
      description: "Sistem gugur"
    },
    {
      phase: "Perempat Final",
      date: "1 - 2 Agustus 2025",
      time: "15.00 - 17.00 WIB",
      location: "Lapangan Desa Pangauban",
      description: "Sistem gugur"
    },
    {
      phase: "Semi Final",
      date: "5 Agustus 2025",
      time: "15.00 - 17.00 WIB",
      location: "Lapangan Utama Desa Pangauban",
      description: "Sistem gugur"
    },
    {
      phase: "Final",
      date: "10 Agustus 2025",
      time: "15.00 - 17.00 WIB",
      location: "Stadion Desa Pangauban",
      description: "Pertandingan final dan penutupan"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
          Jadwal Turnamen
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schedules.map((schedule, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover-scale card-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {schedule.phase === "Final" ? (
                  <Trophy className="w-8 h-8 text-yellow-500" />
                ) : (
                  <Calendar className="w-8 h-8 text-green-600" />
                )}
                <h3 className="text-xl font-bold text-green-800">{schedule.phase}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <p>{schedule.date}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <p>{schedule.time}</p>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <p>{schedule.location}</p>
                </div>

                <p className="text-gray-600 italic">{schedule.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-green-100 rounded-xl text-center">
          <p className="text-lg text-green-800">
            Semua pertandingan akan disertai dengan pertunjukan seni di sela-sela acara
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
