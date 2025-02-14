import { X } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  data: any;
  isLoading: boolean;
}

const PreviewModal = ({ isOpen, onClose, onConfirm, data, isLoading }: PreviewModalProps) => {
  if (!isOpen) return null;

  const renderImagePreview = (file: File) => {
    if (!file) return null;
    const url = URL.createObjectURL(file);
    return (
      <img 
        src={url} 
        alt="Preview" 
        className="w-full h-48 object-cover rounded-lg"
        onLoad={() => URL.revokeObjectURL(url)}
      />
    );
  };

  const renderPersonDetails = (person: any, title: string) => {
    if (!person) return null;
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-green-800">{title}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Nama:</p>
            <p className="text-gray-700">{person.name}</p>
          </div>
          <div>
            <p className="font-semibold">WhatsApp:</p>
            <p className="text-gray-700">{person.whatsapp}</p>
          </div>
          {person.selfie && (
            <div>
              <p className="font-semibold mb-2">Foto Selfie:</p>
              {renderImagePreview(person.selfie[0])}
            </div>
          )}
          {person.ktp && (
            <div>
              <p className="font-semibold mb-2">Foto KTP:</p>
              {renderImagePreview(person.ktp[0])}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto py-4">
      <div className="bg-gray-50 rounded-xl w-full max-w-4xl mx-4 my-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-800">
            Preview Pendaftaran
          </h2>

          <div className="space-y-6 max-h-[70vh] overflow-y-auto px-4">
            {/* Team Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-4 text-green-800">Informasi Tim</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Nama Tim:</p>
                  <p className="text-gray-700">{data.teamName}</p>
                </div>
                <div>
                  <p className="font-semibold">Alamat Tim:</p>
                  <p className="text-gray-700">{data.teamAddress}</p>
                </div>
                <div>
                  <p className="font-semibold">Jersey Utama:</p>
                  <p className="text-gray-700">{data.primaryJersey}</p>
                </div>
                <div>
                  <p className="font-semibold">Jersey Cadangan:</p>
                  <p className="text-gray-700">{data.secondaryJersey}</p>
                </div>
              </div>
            </div>

            {/* Officials */}
            {renderPersonDetails(data.manager, "Manager Tim")}
            {renderPersonDetails(data.official1, "Official 1")}
            {renderPersonDetails(data.official2, "Official 2")}

            {/* Players */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-800">Daftar Pemain</h3>
              {data.players?.map((player: any, index: number) => (
                <div key={index} className="border-b last:border-0 py-4">
                  <h4 className="font-bold mb-3">Pemain #{index + 1}</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold">Nama:</p>
                      <p className="text-gray-700">{player.name}</p>
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp:</p>
                      <p className="text-gray-700">{player.whatsapp}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Posisi:</p>
                      <p className="text-gray-700">{player.position}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Nomor:</p>
                      <p className="text-gray-700">{player.number}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Usia:</p>
                      <p className="text-gray-700">{player.age}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Alamat:</p>
                      <p className="text-gray-700">{player.address}</p>
                    </div>
                    {player.jersey_photo && (
                      <div>
                        <p className="font-semibold mb-2">Foto Jersey:</p>
                        {renderImagePreview(player.jersey_photo[0])}
                      </div>
                    )}
                    {player.ktp && (
                      <div>
                        <p className="font-semibold mb-2">Foto KTP:</p>
                        {renderImagePreview(player.ktp[0])}
                      </div>
                    )}
                    {player.additional_doc && (
                      <div>
                        <p className="font-semibold mb-2">Dokumen Tambahan:</p>
                        {renderImagePreview(player.additional_doc[0])}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Batal
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className={`px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Mengirim...' : 'Konfirmasi & Kirim'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
