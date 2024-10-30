'use client';

import Button from '../components/Button';
import { Logo, LatarBelakang, HeroMobile, HeroTab, HeroDesktop, AboutActivityDesktop, AboutSidangDesktop } from '../public/img';
import { TextFields, TextToSpeech } from '../public/icon';
import Image from 'next/image';
import { ArrowBack, ArrowBackDisabled, ArrowFoward, ArrowFowardDisabled, Brain, Campaign, Disabled, Facebook, Instagram, LinkedIn, MoodPuzzled, Newspaper, SensorOccupied, Youtube } from '../public/icon';
import Card from '../components/Card';
import RoundedButton from '../components/RoundedButton';
import { VisiMobile, VisiTab, VisiDesktop } from '../public/img/visi-misi';
import HighlightText from '../components/HighlightText';
import { Fisik, Intelektual, Mental, Sensorik } from '../public/img/jenis-disabilitas';
import HighlightIcon from '../components/HighlightIcon';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Eight, Eleven, Five, Four, Nine, One, Seven, Six, Ten, Three, Twelve, Two } from '../public/img/mitra';
import DropdownButton from '../components/DropdownButton';
import ToggleSwitch from '../components/ToggleSwitch';
import { DeklarasiPemiluBawaslu, DiskusiKomnasHam, HariKesehatanJiwa2022, JaksaSahabatMasyarakat, PerumusanBanten2019, PodcastKejaksaanRI, SeminarMKG76, SosialisasiBandara, TandaTanganRKPDBanten, WorkshopPioneer } from '@/public/img/event';

export default function Home() {
  const eventData = [
    {
      image: DiskusiKomnasHam,
      title: 'Diskusi dengan Komnas Disabilitas',
      date: '14 Oktober 2024',
    },
    {
      image: SosialisasiBandara,
      title: 'Sosialisasi Peraturan Terkait Pelayanan Penumpang Berkebutuhan Khusus di Bandar Udara',
      date: '31 Mei 2024',
    },
    {
      image: JaksaSahabatMasyarakat,
      title: 'Jaksa Sahabat Masyarakat oleh Komisi Informasi Pusat',
      date: '23 Mei 2024',
    },
    {
      image: SeminarMKG76,
      title: 'Seminar Hari Meteorologi, Klimatologi, dan Geofisika ke-76',
      date: '20 Juli 2023',
    },
    {
      image: PodcastKejaksaanRI,
      title: 'Podcast Kejaksaan RI dengan AUDISI Foundation',
      date: '18 Juli 2023',
    },
    {
      image: DeklarasiPemiluBawaslu,
      title: 'Deklarasi Pemilu Ramah Disabilitas oleh Bawaslu',
      date: '11 Juli 2023',
    },
    {
      image: PerumusanBanten2019,
      title: 'Perumusan Peraturan Daerah Disabilitas Banten No.14 tahun 2019',
      date: '31 Mei 2023',
    },
    {
      image: TandaTanganRKPDBanten,
      title: 'Penandatanganan RKPD (Rencana Kerja Pemerintah Daerah) Provinsi Banten',
      date: '15 Desember 2022',
    },
    {
      image: HariKesehatanJiwa2022,
      title: 'Peringatan Hari Kesehatan Jiwa Internasional 2022',
      date: '6 Oktober 2022',
    },
    {
      image: WorkshopPioneer,
      title: 'Workshop Pembelajaran Hasil Pelokalan Reapon Kemanusiaan (PIONEER)',
      date: '19 September 2022',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isBackDisabled, setIsBackDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isSpeech, setIsSpeech] = useState(false);
  const [isDyslexia, setIsDyslexia] = useState(false);

  const speak = (text: string) => {
    if (!isSpeech) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    window.speechSynthesis.speak(utterance);
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsBackDisabled(scrollLeft === 0);
      setIsNextDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        const yOffSet = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffSet;
        element.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const data = [
    'Bersama untuk mewujudkan Aksesibilitas untuk Semua. Pelajari lebih lanjut',
    'Telah berkolaborasi dan bekerja sama dengan lebih dari 10 mitra. Komnas HAM, Kantor Staf Presiden, Badan Pengawas Pemilihan Umum, Dewan Perwakilan Rakyat Daerah Kota Tangerang Selatan, Dewan Perwakilan Rakyat Daerah Provinsi Banten, Badan Nasional Penanggulangan Bencana, Kementrian Sosial Republik Indonesia, Grab Indonesia, Air Asia, Kementrian Pemuda dan Olahraga, Wahana Visi Indonesia, USAID From American People dan lainnya',
    'Tentang AUDISI Foundation. Advokasi untuk Disabilitas Inklusi (AUDISI) Indonesia adalah non-profit organization yang berdiri sejak tahun 2017 yang aktif dalam mengkampanyekan pentingnya inklusi disabilitas ke masyarakat di seluruh Indonesia. AUDISI Foundation bertujuan untuk memberikan sosialisasi dan menerapkan hak-hak penyandang disabilitas sesuai Undang-Undang Nomor 8 Tahun 2016. Undang-undang ini menjamin perlindungan, penghormatan, dan pemenuhan hak-hak penyandang disabilitas dalam berbagai aspek kehidupan, termasuk kesehatan, pendidikan, pekerjaan, dan aksesibilitas.',
    'Latar Belakang. Konvensi Hak-Hak Penyandang Disabilitas telah diratifikasi oleh Indonesia pada tahun 2011. Pada tahun 2016, Indonesia berhasil memiliki peraturan daerah sendiri yang menghormati, menjamin, dan memenuhi hak-hak penyandang disabilitas. AUDISI Foundation berupaya mengadvokasi agar peraturan tersebut dapat dilaksanakan dengan baik untuk mencapai masyarakat yang inklusif.',
    'Visi dan Misi. Visi. Melakukan advokasi berdasar pada kajian untuk mewujudkan masyarakat inklusif yang menghormati, melindungi, dan memenuhi hak penyandang disabilitas dalam segala aspek kehidupan. Misi 1. Kajian Kebijakan dan Inklusi Sosial Terbaru. Melakukan kajian tentang kebijakan dan (inklusi) sosial terkini sebagai landasan untuk mewujudkan Masyarakat Inklusi Disabilitas. Misi 2. Advokasi Hak Penyandang Disabilitas. Melakukan advokasi untuk Penghormatan, Perlindungan, dan Pemenuhan Hak penyandang disabilitas di segala bidang kehidupan. Misi 3. Pemberdayaan Penyandang Disabilitas. Melakukan pemberdayaan penyandang disabilitas sebagai pelaku pembangunan yang mandiri, produktif, dan berintegritas. Misi 4.Pengembangan Jaringan dan Kerja Sama. Mengembangkan jaringan dan kerjasama dengan berbagai pihak untuk mewujudkan masyarakat inklusif bagi penyandang disabilitas.',
    'Terkait Disabilitas. Penyandang disabilitas adalah individu dengan keterbatasan fisik, intelektual, mental, atau sensorik yang bersifat jangka panjang, yang menghadapi hambatan dalam berpartisipasi penuh dan setara dalam masyarakat. Disabilitas Fisik. Meliputi keterbatasan pada fungsi tubuh yang menghambat gerak atau aktivitas fisik, misalnya amputasi, kelumpuhan, atau gangguan pada tubuh. Disabilitas Intelektual. Melibatkan keterbatasan fungsi kognitif yang mempengaruhi kemampuan belajar dan memahami informasi. Disabilitas Mental. Berhubungan dengan gangguan kesehatan mental seperti depresi, bipolar, atau skizofrenia, yang mempengaruhi emosi dan perilaku. Disabilitas Sensorik. Terkait dengan gangguan pada pancaindra, seperti penglihatan, pendengaran, atau wicara, yang membatasi interaksi sensorik.',
    'Event dan Dokumentasi',
    'Berkolaborasi untuk Masa Depan yang Lebih Inklusif. Mari bersama-sama membangun dunia di mana setiap orang merasa dihargai dan dilibatkan. Hubungi kami melalui email untuk berdiskusi lebih lanjut. Hubungi via Email di audisifonds..gmail.com',
    'Audisi. Instagram di ..audisifoundation. Facebook di Audisi.  Linkedin di Advokasi untuk Disabilitas Inklusi (AUDISI)Indonesia. Youtube di Audisi Foundation.',
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={isDyslexia ? 'open-dyslexic' : ''}>
      <div className={`px-6 md:px-10 py-3 md:py-4 fixed top-0 left-0 z-10 w-full flex justify-between items-center transition-colors duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <Image src={Logo} alt="logo" className="max-w-[10rem] md:max-w-[12rem] p-2 md:p-4" />
        <DropdownButton buttonLabel="Options">
          <div className="p-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image src={TextToSpeech} alt="Text to Speech Icon" className="w-8 text-red-950" />
                <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                  Text to Speech
                </p>
              </div>
              <ToggleSwitch
                isChecked={isSpeech}
                onToggle={() => {
                  setIsSpeech(!isSpeech);
                  console.log('isSpeech after toggle:', !isSpeech);
                }}
              />
            </div>
          </div>

          <div className="p-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image src={TextFields} alt="Dyslexia-Friendly Text Icon" className="w-8 text-red-950" />
                <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                  Dyslexia-Friendly Text
                </p>
              </div>
              <ToggleSwitch isChecked={isDyslexia} onToggle={() => setIsDyslexia(!isDyslexia)} />
            </div>
          </div>
        </DropdownButton>
      </div>
      {/* Hero Section */}
      <div className="px-4 md:px-6 lg:px-6 lg:py-4" onClick={() => speak(data[0])}>
        <div
          className="relative overflow-hidden flex flex-col items-center gap-3 rounded-xl"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FEF9F9 10%, #DC3E42 100%)', // Adjust the colors and percentages as needed
          }}
        >
          <div className="bg-[url('../public/img/pattern/pattern-mobile.png')] md:bg-[url('../public/img/pattern/pattern-tablet.png')] lg:bg-[url('../public/img/pattern/pattern-desktop.png')] bg-cover bg-no-repeat w-full">
            <div className="px-4 pt-20 md:pt-32 flex flex-col items-center gap-4 md:gap-6">
              <h1 className="lg:text-6xl lg:leading-normal text-4xl leading-snug text-black font-semibold text-center lg:px-20 px-4">
                Bersama untuk Mewujudkan <br className="md:block hidden" />
                <span className="text-red-950 font-extrabold">Aksesibilitas</span> untuk Semua
              </h1>
              <Button className="bg-red-950 text-white p-4 md:p-6 w-fit font-medium">
                <a href="#tentang-audisi-anchor" className="lg:text-2xl md:text-xl font-semibold">
                  Pelajari lebih lanjut
                </a>
              </Button>
            </div>

            <Image src={HeroMobile} alt="hero" className="rounded-ee-xl rounded-es-xl md:hidden w-full object-contain" layout="responsive" />
            <Image src={HeroTab} alt="hero" className="rounded-ee-xl rounded-es-xl hidden md:block lg:hidden w-full  object-contain" layout="responsive" />
            <Image src={HeroDesktop} alt="hero" className="rounded-ee-xl rounded-es-xl hidden lg:block w-full object-contain" layout="responsive" />
          </div>
          {/* <div className="absolute flex flex-col justify-center items-center text-white rounded-xl gap-y-4 z-[-1]">
              <Image src={BackgroundMobile} alt="background-mobile" className="rounded-xl object-cover w-full h-full" />
            </div> */}
        </div>
      </div>
      {/* Mitra Kerja Sama */}
      <div id="tentang-audisi-anchor" className="flex flex-col justify-center gap-4 py-6" onClick={() => speak(data[1])}>
        <p className="text-center px-8 md:px-12 md:py-6 md:text-xl lg:py-8">
          Telah berkolaborasi dan bekerja sama dengan <span className=" font-bold">lebih dari 10 mitra</span>
        </p>
        <div className="p-4 flex flex-wrap gap-4 md:gap-8 lg:gap-16 justify-center md:p-6 lg:p-8">
          <Image src={One} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Two} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Three} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Four} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Five} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Six} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Seven} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Eight} alt="mitra" className="object-cover h-10 md:h-16 lg:h-24 w-auto" />
          <Image src={Nine} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Ten} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
          <Image src={Eleven} alt="mitra" className="object-cover h-10 md:h-16 lg:h-24 w-auto" />
          <Image src={Twelve} alt="mitra" className="object-cover h-10 md:h-16 lg:h-32 w-auto" />
        </div>
      </div>

      {/* About Us */}
      <div id="tentang-audisi" className="p-4 md:p-6 lg:p-8 flex flex-col gap-8" onClick={() => speak(data[2])}>
        <h3 className="text-center text-2xl font-semibold lg:text-3xl">Tentang AUDISI Foundation</h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-5 lg:flex lg:gap-x-2">
            <Card hasImage={false} className="">
              <div className="flex md:gap-6 lg:flex-col lg:p-8 flex-col gap-4">
                <RoundedButton className="flex justify-center items-center md:w-16 md:h-16 rounded-full w-14 h-14 bg-red-950 hover:bg-red-500">
                  <Image src={Campaign} alt="Campaign Icon" className="text-4xl" />
                </RoundedButton>
                <p className="text-left text-lg">
                  Advokasi untuk Disabilitas Inklusi (AUDISI) Indonesia adalah non-profit organization yang berdiri sejak tahun 2017 yang aktif dalam <span className="font-semibold">mengkampanyekan pentingnya inklusi disabilitas</span> ke
                  masyarakat di seluruh Indonesia.
                </p>
              </div>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-7 rounded-lg overflow-hidden">
            <Image src={AboutActivityDesktop} alt="kegiatan-audisi" className="hidden lg:rounded-xl md:block md:w-full object-fill" layout="cover" />
          </div>
          <div className="col-span-12 lg:col-span-7 lg:flex lg:gap-x-2">
            <Card hasImage={false} className="">
              <div className="flex md:gap-6 lg:flex-col lg:p-8 flex-col gap-4">
                <RoundedButton className="flex justify-center items-center md:w-16 md:h-16 rounded-full w-14 h-14 bg-red-950 hover:bg-red-500">
                  <Image src={Newspaper} alt="Newspaper Icon" className="text-4xl" />
                </RoundedButton>
                <p className="text-left text-lg">
                  AUDISI Foundation bertujuan untuk memberikan sosialisasi dan menerapkan <span className="font-semibold">hak-hak penyandang disabilitas sesuai Undang-Undang Nomor 8 Tahun 2016.</span> Undang-undang ini menjamin
                  perlindungan, penghormatan, dan pemenuhan hak-hak penyandang disabilitas dalam berbagai aspek kehidupan, termasuk kesehatan, pendidikan, pekerjaan, dan aksesibilitas.
                </p>
              </div>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-5 rounded-lg overflow-hidden">
            <Image src={AboutSidangDesktop} alt="sidang-audisi" className="hidden lg:rounded-xl md:block md:w-full" layout="cover" />
          </div>
        </div>
      </div>

      {/* Latar Belakang */}
      <div className="p-4 md:p-6 lg:p-8 flex flex-col gap-8" onClick={() => speak(data[3])}>
        <h3 className="text-center text-2xl font-semibold lg:text-4xl">Latar Belakang</h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="flex lg:flex-row flex-col gap-4 lg:col-span-6 col-span-12">
            <Card hasImage={false}>
              <div className="flex flex-col space-y-6 md:space-y-8 lg:p-8">
                <p className="text-lg">
                  Konvensi Hak-Hak Penyandang Disabilitas telah diratifikasi oleh Indonesia pada tahun 2011. <span className="font-semibold">Pada tahun 2016</span>, Indonesia berhasil memiliki peraturan daerah sendiri yang{' '}
                  <span className="font-semibold">menghormati, menjamin, dan memenuhi hak-hak penyandang disabilitas.</span>
                </p>
                <p className="text-lg">
                  AUDISI Foundation berupaya mengadvokasi agar peraturan tersebut dapat dilaksanakan dengan baik untuk <span className="font-semibold">mencapai masyarakat yang inklusif.</span>
                </p>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <Image src={LatarBelakang} alt="latar-belakang" className="rounded-lg object-fill w-full" />
          </div>
        </div>
      </div>

      {/* Visi dan Misi */}
      <div className="p-4 flex flex-col gap-8 lg:p-8" onClick={() => speak(data[4])}>
        <h3 className="text-center text-2xl font-semibold lg:text-4xl">Visi dan Misi</h3>
        <div className="grid md:grid-cols-2 md:grid-rows-3 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 gap-4">
          <Card hasImage={true} className="p-0 flex flex-col md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 lg:w-full lg:h-full overflow-hidden">
            <Image src={VisiDesktop} alt="hero" className="rounded-ee-xl rounded-es-xl hidden lg:block w-full object-contain" layout="responsive" />
            <Image src={VisiMobile} alt="hero" className="rounded-t-xl md:hidden object-contain w-full" layout="responsive" width={500} height={300} />
            <Image src={VisiTab} alt="hero" className="hidden md:block lg:hidden md:rounded-t-xl object-contain w-full lg:h-96" layout="responsive" width={800} height={400} />
            <div className="flex flex-col px-4 gap-y-2">
              <HighlightText text="Visi" className="-mt-8" />
              <p className="text-lg">Melakukan advokasi berdasar pada kajian untuk mewujudkan masyarakat inklusif yang menghormati, melindungi, dan memenuhi hak penyandang disabilitas dalam segala aspek kehidupan.</p>
            </div>
          </Card>
          <Card hasImage={false} className="p-4 lg:py-8 gap-y-2">
            <HighlightText text="Misi 1" className="" />
            <h4 className="text-left text-2xl font-semibold md:text-xl">Kajian Kebijakan dan Inklusi Sosial Terbaru</h4>
            <p className="text-lg">Melakukan kajian tentang kebijakan dan (inklusi) sosial terkini sebagai landasan untuk mewujudkan Masyarakat Inklusi Disabilitas.</p>
          </Card>

          <Card hasImage={false} className="p-4 lg:py-8 gap-2">
            <HighlightText text="Misi 2" className="" />
            <h4 className="text-left text-2xl font-semibold md:text-xl">Advokasi Hak Penyandang Disabilitas</h4>
            <p className="text-lg">Melakukan advokasi untuk Penghormatan, Perlindungan, dan Pemenuhan Hak penyandang disabilitas di segala bidang kehidupan.</p>
          </Card>

          <Card hasImage={false} className="p-4 lg:py-8 gap-2">
            <HighlightText text="Misi 3" className="" />
            <h4 className="text-left text-2xl font-semibold md:text-xl">Pemberdayaan Penyandang Disabilitas</h4>
            <p className="text-lg">Melakukan pemberdayaan penyandang disabilitas sebagai pelaku pembangunan yang mandiri, produktif, dan berintegritas.</p>
          </Card>

          <Card hasImage={false} className="p-4 lg:py-8 gap-2 md:ml-auto">
            <HighlightText text="Misi 4" className="" />
            <h4 className="text-left text-2xl font-semibold md:text-xl">Pengembangan Jaringan dan Kerja Sama</h4>
            <p className="text-lg">Mengembangkan jaringan dan kerjasama dengan berbagai pihak untuk mewujudkan masyarakat inklusif bagi penyandang disabilitas.</p>
          </Card>
        </div>
      </div>

      {/* Jenis Jenis Disabilitas */}
      <div className="p-4 flex flex-col gap-y-4 md:p-6 md:gap-y-6" onClick={() => speak(data[5])}>
        <h3 className="text-center text-2xl font-semibold lg:text-4xl">Terkait Disabilitas</h3>

        <p className="text-lg text-center">
          Penyandang disabilitas adalah individu dengan keterbatasan fisik, intelektual, mental, atau sensorik yang bersifat jangka panjang, yang menghadapi hambatan dalam berpartisipasi penuh dan setara dalam masyarakat.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 md:mb-32">
          <Card hasImage={true} className="p-0 flex flex-col">
            <Image src={Fisik} alt="fisik" className="rounded-xl w-full" />
            <div className="flex flex-col px-4 gap-y-2">
              <HighlightIcon image={Disabled} alt="disabled" />
              <h4 className="text-left text-2xl font-semibold">Disabilitas Fisik</h4>
              <p className="text-lg">Meliputi keterbatasan pada fungsi tubuh yang menghambat gerak atau aktivitas fisik, misalnya amputasi, kelumpuhan, atau gangguan pada tubuh.</p>
            </div>
          </Card>

          <Card hasImage={true} className="p-0 flex flex-col md:mt-16 md:-mb-16">
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

          <Card hasImage={true} className="p-0 flex flex-col md:mt-16 md:-mb-16">
            <Image src={Sensorik} alt="mental" className="rounded-xl w-full" />
            <div className="flex flex-col px-4 gap-y-2">
              <HighlightIcon image={SensorOccupied} alt="sensor-occupied" />
              <h4 className="text-left text-2xl font-semibold">Disabilitas Sensorik</h4>
              <p className="text-lg">Terkait dengan gangguan pada pancaindra, seperti penglihatan, pendengaran, atau wicara, yang membatasi interaksi sensorik.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Event dan Dokumentasi */}
      <div className="flex flex-col p-4 md:p-6 gap-8" onClick={() => speak(data[6])}>
        <h3 className="text-center text-2xl font-semibold lg:text-4xl">Event dan Dokumentasi</h3>

        <div ref={scrollContainerRef} className="overflow-x-scroll flex flex-row gap-x-4">
          {eventData.map((event, index) => (
            <Card key={index} hasImage={true} className="p-0 w-72 shrink-0">
              <Image src={event.image} alt={event.title} className="rounded-xl h-64" />
              <div className="p-4">
                <h5 className="font-semibold">{event.title}</h5>
                <p className="text-sm text-gray-400">{event.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex p-4 border-t gap-x-4 items-center w-full justify-between lg:p-8" onClick={() => speak(data[7])}>
        <h6 className="text-sm md:text-base lg:font-medium">10 event terakhir yang diikuti</h6>
        <div className="flex gap-x-4 lg:gap-x-8">
          <RoundedButton id="back-arrow" className={`bg-white border-2 w-16 h-16 ${isBackDisabled ? 'border-gray-400' : 'border-red-950'}`} onClick={isBackDisabled ? undefined : scrollLeft}>
            {isBackDisabled ? <Image src={ArrowBackDisabled} alt="arrow-back-disabled" /> : <Image src={ArrowBack} alt="arrow-back" />}
          </RoundedButton>
          <RoundedButton id="next-arrow" className={`bg-white border-2 w-16 h-16 ${isNextDisabled ? 'border-gray-400' : 'border-red-950'}`} onClick={isNextDisabled ? undefined : scrollRight}>
            {isNextDisabled ? <Image src={ArrowFowardDisabled} alt="arrow-foward-disabled" /> : <Image src={ArrowFoward} alt="arrow-foward" />}
          </RoundedButton>
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-4 lg:p-8" onClick={() => speak(data[8])}>
        <div
          className="relative rounded-xl"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FEF9F9 10%, #EB8F89 100%)', // Adjust the colors and percentages as needed
          }}
        >
          <div className="bg-[url('../public/img/pattern/pattern-mobile.png')] md:bg-[url('../public/img/pattern/pattern-tablet.png')] lg:bg-[url('../public/img/pattern/pattern-desktop.png')] bg-cover bg-no-repeat px-6 pt-10 pb-10 ">
            <div className="flex flex-col justify-center items-center text-white rounded-xl gap-y-4">
              <h2 className="text-2xl text-black font-semibold text-center px-4 md:text-3xl md:px-20">Berkolaborasi untuk Masa Depan yang Lebih Inklusif</h2>
              <p className=" text-lg text-black text-center px-4">
                Mari bersama-sama membangun dunia di mana setiap orang merasa dihargai dan dilibatkan. <br className="lg:block hidden" /> Hubungi kami melalui email untuk berdiskusi lebih lanjut
              </p>
              <a href="mailto:audisifonds..gmail.com" className="bg-red-950 text-white p-4 mt-4 font-medium rounded-lg">
                <p>Hubungi via Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex flex-col items-center gap-y-4 md:p-6 md:gap-y-6 md:flex-row md:justify-between lg:p-8 lg:gap-y-8" onClick={() => speak(data[9])}>
        <Image src={Logo} alt="logo" className="w-48" />
        <div className="flex items-center justify-center gap-x-4 mt-4">
          <Link href={'https://www.instagram.com/audisifoundation/'}>
            <Image src={Instagram} alt="instagram" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
          </Link>
          <Link href={'https://www.facebook.com/disabledpeopleorganization'}>
            <Image src={Facebook} alt="facebook" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
          </Link>
          <Link href={'https://www.linkedin.com/company/advokasiinklusidisabilitasaudisi/'}>
            <Image src={LinkedIn} alt="linkedin" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
          </Link>
          <Link href={'https://www.youtube.com/..audisifoundation6646'}>
            <Image src={Youtube} alt="youtube" className="w-16 h-16 p-4 bg-red-400 rounded-full" />
          </Link>
        </div>
      </div>

      <div className="p-4 flex justify-center border-t md:p-6 lg:p-8">
        <p className="text-xs text-gray-600 text-center md:text-sm">© Copyright 2024 AUDISI Foundation. All Rights Reserved.</p>
      </div>
    </div>
  );
}
