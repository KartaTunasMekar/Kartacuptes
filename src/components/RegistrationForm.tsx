import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Upload, Plus, Minus, User, Shield } from 'lucide-react';
import { db, storage } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import PreviewModal from './PreviewModal';

const TEAM_NAMES = [
  'ARUMBA FC A', 'ARUMBA FC B', 'ARUMBA FC C',
  'BALLPASS FC A', 'BALLPASS FC B', 'BALLPASS FC C',
  'DL GUNS FC A', 'DL GUNS FC B', 'DL GUNS FC C',
  'GANESA FC A', 'GANESA FC B', 'GANESA FC C',
  'LEMKA FC A', 'LEMKA FC B', 'LEMKA FC C',
  'PALAPA FC A', 'PALAPA FC B', 'PALAPA FC C',
  'PELANA FC A', 'PELANA FC B', 'PELANA FC C',
  'PERKID FC A', 'PERKID FC B', 'PERKID FC C',
  'PERU FC A', 'PERU FC B', 'PERU FC C',
  'PORBA JAYA A', 'PORBA JAYA B', 'PORBA JAYA C',
  'PUTRA MANDIRI FC A', 'PUTRA MANDIRI FC B', 'PUTRA MANDIRI FC C',
  'REMAJA PUTRA FC A', 'REMAJA PUTRA FC B', 'REMAJA PUTRA FC C',
  'TOCXNET FC A', 'TOCXNET FC B', 'TOCXNET FC C'
];

const PLAYER_POSITIONS = [
  'Penjaga Gawang',
  'Bek',
  'Gelandang',
  'Penyerang'
];

const RegistrationForm = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [submitStatus, setSubmitStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      players: [{}]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "players"
  });

  const validateFile = (files: FileList) => {
    if (!files[0]) return "File diperlukan";
    if (files[0].size > 1024 * 1024) return "Ukuran file maksimal 1 MB";
    return true;
  };

  const validateWhatsApp = (number: string) => {
    const regex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
    return regex.test(number) || "Format nomor WhatsApp tidak valid";
  };

  const uploadImage = async (file: File, path: string) => {
    if (!file) return null;
    try {
      const storageRef = ref(storage, `registrations/${path}/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handlePreview = async (data: any) => {
    setFormData(data);
    setShowPreview(true);
  };

  const handleConfirmSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Upload manager images
      const managerData = { ...formData.manager };
      if (managerData.selfie?.[0]) {
        managerData.selfieUrl = await uploadImage(managerData.selfie[0], 'manager/selfie');
      }
      if (managerData.ktp?.[0]) {
        managerData.ktpUrl = await uploadImage(managerData.ktp[0], 'manager/ktp');
      }

      // Upload officials images
      const officials: any = {};
      for (const role of ['official1', 'official2']) {
        const officialData = { ...formData[role] };
        if (officialData.selfie?.[0]) {
          officialData.selfieUrl = await uploadImage(officialData.selfie[0], `${role}/selfie`);
        }
        if (officialData.ktp?.[0]) {
          officialData.ktpUrl = await uploadImage(officialData.ktp[0], `${role}/ktp`);
        }
        officials[role] = officialData;
      }

      // Upload players images
      const players = await Promise.all(formData.players.map(async (player: any, index: number) => {
        const playerData = { ...player };
        if (playerData.jersey_photo?.[0]) {
          playerData.jerseyPhotoUrl = await uploadImage(playerData.jersey_photo[0], `players/${index}/jersey`);
        }
        if (playerData.ktp?.[0]) {
          playerData.ktpUrl = await uploadImage(playerData.ktp[0], `players/${index}/ktp`);
        }
        if (playerData.additional_doc?.[0]) {
          playerData.additionalDocUrl = await uploadImage(playerData.additional_doc[0], `players/${index}/additional`);
        }
        return playerData;
      }));

      // Prepare final data for Firestore
      const registrationData = {
        teamName: formData.teamName,
        teamAddress: formData.teamAddress,
        primaryJersey: formData.primaryJersey,
        secondaryJersey: formData.secondaryJersey,
        manager: managerData,
        official1: officials.official1,
        official2: officials.official2,
        players,
        status: 'pending',
        submittedAt: new Date(),
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, 'registrations'), registrationData);
      
      setSubmitStatus(`Pendaftaran berhasil! ID: ${docRef.id}`);
      setShowPreview(false);
    } catch (error) {
      console.error("Error submitting registration:", error);
      setSubmitStatus('Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderPersonFields = (prefix: string, label: string, icon: JSX.Element) => (
    <div className="space-y-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-emerald-500">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-emerald-800">{label}</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input
            {...register(`${prefix}.name` as any, { required: "Nama wajib diisi" })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Nomor WhatsApp</label>
          <input
            {...register(`${prefix}.whatsapp` as any, {
              required: "Nomor WhatsApp wajib diisi",
              validate: validateWhatsApp
            })}
            placeholder="Contoh: 081234567890"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Foto Selfie</label>
          <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <Upload className="text-emerald-500" size={20} />
            <input
              type="file"
              accept="image/*"
              {...register(`${prefix}.selfie` as any, { validate: validateFile })}
              className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Foto KTP</label>
          <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <Upload className="text-emerald-500" size={20} />
            <input
              type="file"
              accept="image/*"
              {...register(`${prefix}.ktp` as any, { validate: validateFile })}
              className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-emerald-800">
        Formulir Pendaftaran Tim
      </h2>

      <form onSubmit={handleSubmit(handlePreview)} className="space-y-8">
        {/* Team Information */}
        <div className="space-y-4 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Informasi Tim
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Nama Tim</label>
              <select
                {...register('teamName', { required: "Nama tim wajib dipilih" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Pilih Tim</option>
                {TEAM_NAMES.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Alamat Tim</label>
              <input
                {...register('teamAddress', { required: "Alamat tim wajib diisi" })}
                placeholder="Masukkan alamat tim"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Warna Jersey Utama</label>
              <input
                {...register('primaryJersey', { required: "Warna jersey utama wajib diisi" })}
                placeholder="Contoh: Merah-Putih"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Warna Jersey Cadangan</label>
              <input
                {...register('secondaryJersey', { required: "Warna jersey cadangan wajib diisi" })}
                placeholder="Contoh: Biru-Hitam"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Team Officials */}
        {renderPersonFields('manager', 'Manager Tim', <User />)}
        {renderPersonFields('official1', 'Official 1', <User />)}
        {renderPersonFields('official2', 'Official 2', <User />)}

        {/* Players */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-emerald-800">Daftar Pemain</h3>
            <button
              type="button"
              onClick={() => append({})}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus size={20} />
              Tambah Pemain
            </button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="relative p-6 bg-white rounded-xl shadow-lg">
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <Minus size={20} />
              </button>

              <h4 className="text-lg font-semibold mb-4">Pemain #{index + 1}</h4>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input
                    {...register(`players.${index}.name` as const, { required: "Nama pemain wajib diisi" })}
                    placeholder="Masukkan nama lengkap"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nomor WhatsApp</label>
                  <input
                    {...register(`players.${index}.whatsapp` as const, {
                      required: "Nomor WhatsApp wajib diisi",
                      validate: validateWhatsApp
                    })}
                    placeholder="Contoh: 081234567890"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Posisi</label>
                  <select
                    {...register(`players.${index}.position` as const, { required: "Posisi wajib dipilih" })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Pilih Posisi</option>
                    {PLAYER_POSITIONS.map((pos) => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nomor Punggung</label>
                  <input
                    type="number"
                    {...register(`players.${index}.number` as const, {
                      required: "Nomor punggung wajib diisi",
                      min: { value: 1, message: "Minimal nomor 1" },
                      max: { value: 99, message: "Maksimal nomor 99" }
                    })}
                    placeholder="1-99"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Usia</label>
                  <input
                    type="number"
                    {...register(`players.${index}.age` as const, {
                      required: "Usia wajib diisi",
                      min: { value: 16, message: "Minimal usia 16 tahun" },
                      max: { value: 40, message: "Maksimal usia 40 tahun" }
                    })}
                    placeholder="16-40"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Alamat</label>
                  <input
                    {...register(`players.${index}.address` as const, { required: "Alamat wajib diisi" })}
                    placeholder="Masukkan alamat lengkap"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Foto dengan Jersey</label>
                  <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <Upload className="text-emerald-500" size={20} />
                    <input
                      type="file"
                      accept="image/*"
                      {...register(`players.${index}.jersey_photo` as const, { validate: validateFile })}
                      className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Foto KTP</label>
                  <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <Upload className="text-emerald-500" size={20} />
                    <input
                      type="file"
                      accept="image/*"
                      {...register(`players.${index}.ktp` as const, { validate: validateFile })}
                      className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Dokumen Tambahan</label>
                  <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <Upload className="text-emerald-500" size={20} />
                    <input
                      type="file"
                      accept="image/*"
                      {...register(`players.${index}.additional_doc` as const)}
                      className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Preview & Kirim
          </button>
        </div>

        {submitStatus && (
          <div className={`p-4 rounded-lg text-center ${
            submitStatus.includes('berhasil') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {submitStatus}
          </div>
        )}
      </form>

      {showPreview && (
        <PreviewModal
          isOpen={showPreview}
          onClose={() => setShowPreview(false)}
          onConfirm={handleConfirmSubmit}
          data={formData}
          isLoading={isSubmitting}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
