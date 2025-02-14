import { Palette, Music, Camera, Theater, Award, Users } from 'lucide-react'

const Arts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-800">
          Festival Seni KARTA CUP V
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover-scale card-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-100 rounded-full">
                <Palette className="w-12 h-12 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-800">Pameran Seni Rupa</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Lukisan Tradisional</li>
              <li>• Seni Patung</li>
              <li>• Kerajinan Tangan</li>
              <li>• Instalasi Seni</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Setiap Sabtu & Minggu
              <br />09.00 - 17.00 WIB
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover-scale card-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Music className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">Pertunjukan Musik</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Musik Tradisional</li>
              <li>• Band Lokal</li>
              <li>• Kolaborasi Seniman</li>
              <li>• Parade Musik</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Setiap pertandingan final grup
              <br />15.00 - 17.00 WIB
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover-scale card-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-pink-100 rounded-full">
                <Camera className="w-12 h-12 text-pink-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-pink-800">Festival Fotografi</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Lomba Foto Olahraga</li>
              <li>• Dokumentasi Budaya</li>
              <li>• Pameran Foto</li>
              <li>• Workshop Fotografi</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              1 Juli - 15 Agustus 2025
              <br />Pengumpulan karya online
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center gap-3">
              <Award className="w-8 h-8" />
              Hadiah Festival Seni
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span>Kategori Seni Rupa</span>
                <span className="font-bold">Rp 1.500.000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span>Kategori Musik</span>
                <span className="font-bold">Rp 1.500.000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                <span>Kategori Fotografi</span>
                <span className="font-bold">Rp 1.500.000</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center gap-3">
              <Users className="w-8 h-8" />
              Pendaftaran
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Pendaftaran terbuka untuk semua seniman dan pegiat seni di wilayah Desa Pangauban dan sekitarnya.
                Setiap peserta dapat mengikuti lebih dari satu kategori.
              </p>
              <a 
                href="/pendaftaran" 
                className="inline-block w-full text-center bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arts
