"use client"; // Mark this component as a client component

import Button from '@/components/Button';
import { BackgroundMobile, Logo, LatarBelakang, CtaMobile, HeroMobile } from '@/public/img';
import Image from 'next/image';
import { ArrowBackDisabled, ArrowFoward, Brain, Campaign, ChevronDown, Disabled, Facebook, Instagram, LinkedIn, MoodPuzzled, Newspaper, SensorOccupied, SettingsAccessibility, Youtube } from '@/public/icon';
import Card from '@/components/Card';
import RoundedButton from '@/components/RoundedButton';
import { Visi } from '@/public/img/visi-misi';
import HighlightText from '@/components/HighlightText';
import { Fisik, Intelektual, Mental, Sensorik } from '@/public/img/jenis-disabilitas';
import HighlightIcon from '@/components/HighlightIcon';
import { PatternMobile } from '@/public/img/pattern';

import Header from '@/components/Header';

export default function Home() {
  return (
    <div className=''>
      <Header />
      {/* Hero Section */}
      <div className="px-4">
        <div 
          className="relative overflow-hidden flex flex-col items-center gap-3 rounded-xl"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FEF9F9 10%, #DC3E42 100%)', // Adjust the colors and percentages as needed
          }}
        >
          <div className="bg-[url('@/public/img/pattern/pattern-mobile.png')] bg-cover bg-no-repeat">
            <div className="px-4 pt-20 flex flex-col items-center gap-4">
                  <h3 className="text-4xl leading-snug text-black font-semibold text-center px-4">Bersama untuk Mewujudkan <span className='text-red-950 font-extrabold'>Aksesibilitas</span> untuk Semua</h3>
                  <Button className="bg-red-950 text-white p-4 w-fit font-medium">
                    <p>Pelajari lebih lanjut</p>
                  </Button>
                </div>
                  
                  <Image src={HeroMobile} alt="hero" className="rounded-ee-xl rounded-es-xl object-cover" />
            </div>
            {/* <div className="absolute flex flex-col justify-center items-center text-white rounded-xl gap-y-4 z-[-1]">
              <Image src={BackgroundMobile} alt="background-mobile" className="rounded-xl object-cover w-full h-full" />
            </div> */}
            
        </div>
      </div>
      {/* Mitra Kerja Sama */}
      <div className="flex">
        <p className="text-center px-8 py-4">
          Telah berkolaborasi dan bekerja sama dengan <span className=" font-bold">lebih dari 10 mitra</span>
        </p>
      </div>

      {/* About Us */}
      <div className="p-4 space-y-4">
        <h3 className="text-center text-2xl font-semibold">Tentang AUDISI Foundation</h3>
        <Card hasImage={false}>
          <div className="space-y-4">
            <RoundedButton>
              <Image src={Campaign} alt="chevron-down" className="w-8 h-8" />
            </RoundedButton>
            <p className="text-left text-lg">
              Advokasi untuk Disabilitas Inklusi (AUDISI) Indonesia adalah non-profit organization yang berdiri sejak tahun 2017 yang aktif dalam <span className="font-semibold">mengkampanyekan pentingnya inklusi disabilitas</span> ke
              masyarakat di seluruh Indonesia.
            </p>
          </div>
        </Card>

        <Card hasImage={false}>
          <div className="space-y-4">
            <RoundedButton>
              <Image src={Newspaper} alt="chevron-down" className="w-8 h-8" />
            </RoundedButton>
            <p className="text-left text-lg">
              AUDISI Foundation bertujuan untuk memberikan sosialisasi dan menerapkan <span className="font-semibold">hak-hak penyandang disabilitas sesuai Undang-Undang Nomor 8 Tahun 2016.</span> Undang-undang ini menjamin perlindungan,
              penghormatan, dan pemenuhan hak-hak penyandang disabilitas dalam berbagai aspek kehidupan, termasuk kesehatan, pendidikan, pekerjaan, dan aksesibilitas.
            </p>
          </div>
        </Card>
      </div>

      {/* Latar Belakang */}
      <div className="p-4 space-y-4">
        <h3 className="text-center text-2xl font-semibold">Latar Belakang</h3>
        <Card hasImage={false}>
          <div className="flex flex-col space-y-6">
            <p className="text-lg">
              Konvensi Hak-Hak Penyandang Disabilitas telah diratifikasi oleh Indonesia pada tahun 2011. <span className="font-semibold">Pada tahun 2016</span>, Indonesia berhasil memiliki peraturan daerah sendiri yang{' '}
              <span className="font-semibold">menghormati, menjamin, dan memenuhi hak-hak penyandang disabilitas.</span>
            </p>
            <p className="text-lg">
              AUDISI Foundation berupaya mengadvokasi agar peraturan tersebut dapat dilaksanakan dengan baik untuk <span className="font-semibold">mencapai masyarakat yang inklusif.</span>
            </p>
          </div>
        </Card>
        <Image src={LatarBelakang} alt="latar-belakang" className="rounded-xl" />
      </div>

      {/* Visi dan Misi */}
      <div className="p-4 flex flex-col gap-y-4">
        <h3 className="text-center text-2xl font-semibold">Visi dan Misi</h3>

        <Card hasImage={true} className="p-0 flex flex-col">
          <Image src={Visi} alt="Visi" className="rounded-xl" />
          <div className="flex flex-col px-4 gap-y-2">
            <HighlightText text="Visi" className="-mt-8" />
            <p className="text-lg">Melakukan advokasi berdasar pada kajian untuk mewujudkan masyarakat inklusif yang menghormati, melindungi, dan memenuhi hak penyandang disabilitas dalam segala aspek kehidupan.</p>
          </div>
        </Card>

        <Card hasImage={false} className="p-4 py-8 flex flex-col gap-y-2">
          <HighlightText text="Misi 1" className="" />
          <h4 className="text-left text-2xl font-semibold">Kajian Kebijakan dan Inklusi Sosial Terbaru</h4>
          <p className="text-lg">Melakukan kajian tentang kebijakan dan (inklusi) sosial terkini sebagai landasan untuk mewujudkan Masyarakat Inklusi Disabilitas.</p>
        </Card>

        <Card hasImage={false} className="p-4 py-8 flex flex-col gap-y-2">
          <HighlightText text="Misi 2" className="" />
          <h4 className="text-left text-2xl font-semibold">Advokasi Hak Penyandang Disabilitas</h4>
          <p className="text-lg">Melakukan advokasi untuk Penghormatan, Perlindungan, dan Pemenuhan Hak penyandang disabilitas di segala bidang kehidupan.</p>
        </Card>

        <Card hasImage={false} className="p-4 py-8 flex flex-col gap-y-2">
          <HighlightText text="Misi 3" className="" />
          <h4 className="text-left text-2xl font-semibold">Pemberdayaan Penyandang Disabilitas</h4>
          <p className="text-lg">Melakukan pemberdayaan penyandang disabilitas sebagai pelaku pembangunan yang mandiri, produktif, dan berintegritas.</p>
        </Card>

        <Card hasImage={false} className="p-4 py-8 flex flex-col gap-y-2">
          <HighlightText text="Misi 4" className="" />
          <h4 className="text-left text-2xl font-semibold">Pengembangan Jaringan dan Kerja Sama</h4>
          <p className="text-lg">Mengembangkan jaringan dan kerjasama dengan berbagai pihak untuk mewujudkan masyarakat inklusif bagi penyandang disabilitas.</p>
        </Card>
      </div>

      {/* Jenis Jenis Disabilitas */}
      <div className="p-4 flex flex-col gap-y-4">
        <h3 className="text-center text-2xl font-semibold">Terkait Disabilitas</h3>

        <p className="text-lg text-center">
          Penyandang disabilitas adalah individu dengan keterbatasan fisik, intelektual, mental, atau sensorik yang bersifat jangka panjang, yang menghadapi hambatan dalam berpartisipasi penuh dan setara dalam masyarakat.
        </p>

        <Card hasImage={true} className="p-0 flex flex-col">
          <Image src={Fisik} alt="fisik" className="rounded-xl w-full" />
          <div className="flex flex-col px-4 gap-y-2">
            <HighlightIcon image={Disabled} alt="disabled" />
            <h4 className="text-left text-2xl font-semibold">Disabilitas Fisik</h4>
            <p className="text-lg">Meliputi keterbatasan pada fungsi tubuh yang menghambat gerak atau aktivitas fisik, misalnya amputasi, kelumpuhan, atau gangguan pada tubuh.</p>
          </div>
        </Card>

        <Card hasImage={true} className="p-0 flex flex-col">
          <Image src={Intelektual} alt="intelektual" className="rounded-xl w-full" />
          <div className="flex flex-col px-4 gap-y-2">
            <HighlightIcon image={Brain} alt="brain" />
            <h4 className="text-left text-2xl font-semibold">Disabilitas Intelektual</h4>
            <p className="text-lg">Melibatkan keterbatasan fungsi kognitif yang mempengaruhi kemampuan belajar dan memahami informasi.</p>
          </div>
        </Card>

        <Card hasImage={true} className="p-0 flex flex-col">
          <Image src={Mental} alt="mental" className="rounded-xl w-full" />
          <div className="flex flex-col px-4 gap-y-2">
            <HighlightIcon image={MoodPuzzled} alt="mood-puzzled" />
            <h4 className="text-left text-2xl font-semibold">Disabilitas Mental</h4>
            <p className="text-lg">Berhubungan dengan gangguan kesehatan mental seperti depresi, bipolar, atau skizofrenia, yang mempengaruhi emosi dan perilaku.</p>
          </div>
        </Card>

        <Card hasImage={true} className="p-0 flex flex-col">
          <Image src={Sensorik} alt="mental" className="rounded-xl w-full" />
          <div className="flex flex-col px-4 gap-y-2">
            <HighlightIcon image={SensorOccupied} alt="sensor-occupied" />
            <h4 className="text-left text-2xl font-semibold">Disabilitas Sensorik</h4>
            <p className="text-lg">Terkait dengan gangguan pada pancaindra, seperti penglihatan, pendengaran, atau wicara, yang membatasi interaksi sensorik.</p>
          </div>
        </Card>
      </div>

      {/* Event dan Dokumentasi */}
      <div className="p-4">
        <h3 className="text-center text-2xl font-semibold">Event dan Dokumentasi</h3>

        <div className="overflow-x-scroll flex flex-row gap-x-4">
          <Card hasImage={true} className="p-0 w-72 shrink-0">
            <Image src={Mental} alt="seminar-hari-meteorologi" className="rounded-xl h-64" />
            <div className="p-4">
              <h5 className="font-semibold">Seminar Hari Meteorologi, Klimatologi, dan Geofisika ke-76</h5>
              <p className="text-sm text-gray-400">20 Jul 2023</p>
            </div>
          </Card>
          <Card hasImage={true} className="p-0 w-72 shrink-0">
            <Image src={Mental} alt="seminar-hari-meteorologi" className="rounded-xl h-64" />
            <div className="p-4">
              <h5 className="font-semibold">Seminar Hari Meteorologi, Klimatologi, dan Geofisika ke-76</h5>
              <p className="text-sm text-gray-400">20 Jul 2023</p>
            </div>
          </Card>
          <Card hasImage={true} className="p-0 w-72 shrink-0">
            <Image src={Mental} alt="seminar-hari-meteorologi" className="rounded-xl h-64" />
            <div className="p-4">
              <h5 className="font-semibold">Seminar Hari Meteorologi, Klimatologi, dan Geofisika ke-76</h5>
              <p className="text-sm text-gray-400">20 Jul 2023</p>
            </div>
          </Card>
          <Card hasImage={true} className="p-0 w-72 shrink-0">
            <Image src={Mental} alt="seminar-hari-meteorologi" className="rounded-xl h-64" />
            <div className="p-4">
              <h5 className="font-semibold">Seminar Hari Meteorologi, Klimatologi, dan Geofisika ke-76</h5>
              <p className="text-sm text-gray-400">20 Jul 2023</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex p-4 border-t gap-x-4 items-center">
        <h6 className="text-sm">10 event terakhir yang diikuti</h6>
        <RoundedButton className="bg-white border-gray-400 border-2 w-16 h-16">
          <Image src={ArrowBackDisabled} alt="arrow-back" />
        </RoundedButton>
        <RoundedButton className="bg-white border-red-950 border-2 w-16 h-16">
          <Image src={ArrowFoward} alt="arrow-foward" />
        </RoundedButton>
      </div>

      {/* Call to Action */}
      <div className="p-4">
        <div 
          className="relative rounded-lg"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FEF9F9 0%, #EB8F89 100%)', // Adjust the colors and percentages as needed
          }}
        >
          <div className="bg-[url('@/public/img/pattern/pattern-mobile.png')] bg-cover bg-no-repeat px-6 pt-10 pb-10 ">
            <div className="flex flex-col justify-center items-center text-white rounded-xl gap-y-4">
              <h3 className="text-xl text-black font-semibold text-center px-4">Berkolaborasi untuk Masa Depan yang Lebih Inklusif</h3>
              <p className="text-md text-black text-center px-4">Mari bersama-sama membangun dunia di mana setiap orang merasa dihargai dan dilibatkan. Hubungi kami melalui email untuk berdiskusi lebih lanjut</p>
              <a href='mailto:audisifonds@gmail.com' className="bg-red-950 text-white p-4 mt-4 font-medium rounded-lg">
                <p>Hubungi via Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex flex-col items-center gap-y-4">
        <Image src={Logo} alt="logo" className="w-48" />
        <div className="flex items-center justify-center gap-x-4 mt-4">
          <Image src={Instagram} alt="instagram" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
          <Image src={Facebook} alt="facebook" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
          <Image src={LinkedIn} alt="linkedin" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
          <Image src={Youtube} alt="youtube" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
        </div>
      </div>

      <div className="p-4 flex justify-center border-t">
        <p className="text-xs text-gray-600 text-center">© Copyright 2024 AUDISI Foundation. All Rights Reserved.</p>
      </div>
    </div>
  );
}
