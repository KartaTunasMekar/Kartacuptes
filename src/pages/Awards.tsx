import { Trophy, Medal, Star, Award } from 'lucide-react'

const Awards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">
          Hadiah Turnamen
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Juara 2 */}
          <div className="relative mt-8 md:mt-16">
            <div className="bg-gradient-to-b from-gray-100 to-white p-8 rounded-2xl shadow-xl hover-scale card-shadow text-center">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Medal className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8">Juara 2</h3>
              <p className="text-3xl font-bold text-green-700 mb-2">Rp 3.000.000</p>
              <ul className="text-gray-600 space-y-2">
                <li>Piala Bergilir</li>
                <li>Medali Perak</li>
                <li>Sertifikat</li>
              </ul>
            </div>
          </div>

          {/* Juara 1 */}
          <div className="relative transform md:-translate-y-8">
            <div className="bg-gradient-to-b from-yellow-100 to-white p-8 rounded-2xl shadow-xl hover-scale card-shadow text-center">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Trophy className="w-20 h-20 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-12">Juara 1</h3>
              <p className="text-4xl font-bold text-green-700 mb-2">Rp 5.000.000</p>
              <ul className="text-gray-600 space-y-2">
                <li>Piala Bergilir</li>
                <li>Medali Emas</li>
                <li>Sertifikat</li>
              </ul>
            </div>
          </div>

          {/* Juara 3 */}
          <div className="relative mt-8 md:mt-16">
            <div className="bg-gradient-to-b from-orange-100 to-white p-8 rounded-2xl shadow-xl hover-scale card-shadow text-center">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Medal className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8">Juara 3</h3>
              <p className="text-3xl font-bold text-green-700 mb-2">Rp 2.000.000</p>
              <ul className="text-gray-600 space-y-2">
                <li>Piala Bergilir</li>
                <li>Medali Perunggu</li>
                <li>Sertifikat</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale card-shadow text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Top Scorer</h3>
            <p className="text-green-700 font-bold">Rp 500.000</p>
            <p className="text-gray-600">+ Trofi Khusus</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale card-shadow text-center">
            <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Best Player</h3>
            <p className="text-green-700 font-bold">Rp 500.000</p>
            <p className="text-gray-600">+ Trofi Khusus</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale card-shadow text-center">
            <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Best Goalkeeper</h3>
            <p className="text-green-700 font-bold">Rp 500.000</p>
            <p className="text-gray-600">+ Trofi Khusus</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale card-shadow text-center">
            <Trophy className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fair Play</h3>
            <p className="text-green-700 font-bold">Rp 500.000</p>
            <p className="text-gray-600">+ Trofi Khusus</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
