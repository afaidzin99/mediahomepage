import jadwalImsakiyah from "@/data/imsakiyah.json";

interface JadwalPuasa {
  no: string;
  tanggal: string;
  hijriyah: string;
  imsak: string;
  subuh: string;
  terbit: string;
  duha: string;
  zuhur: string;
  asar: string;
  magrib: string;
  isya: string;
}

export default function WidgetJadwalPuasa() {
  let todayJadwalPuasa = jadwalImsakiyah.find(
    (jadwal: JadwalPuasa) =>
      jadwal.tanggal === new Date().toISOString().split("T")[0]
  );

  if (!todayJadwalPuasa) {
    todayJadwalPuasa = jadwalImsakiyah[0];
  }

  return (
    <div className="w-full bg-[url('/bg-imsakiyah-2024.png')] bg-[#FFF] bg-center bg-no-repeat bg-cover border-solid border-[1px] border-[#DDD] relative rounded-md">
      <div className="relative w-full max-w-[1280px] mx-auto md:py-4 md:px-10 px-2.5 py-2 rounded">
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div className="flex flex-row md:gap-[46px] w-full md:justify-start justify-between">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex flex-col md:flex-row md:gap-[18px] md:mb-[10px] md:items-center">
                  <h2 className="font-bold text-[#333] text-xl text-center">
                    Imsakiyah Hari Ini
                  </h2>
                  <p className="text-[#666] text-sm text-center">
                    {/* jadwal puasa date in indonesia long versioan */}
                    {new Date(
                      todayJadwalPuasa?.tanggal.toString()
                    ).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    (Hari ke-{todayJadwalPuasa?.no.toString()})
                  </p>
                </div>
                <div className="w-full flex flex-col justify-between md:gap-14 gap-2.5 font-sans">
                  <div
                    id="imsak"
                    className="grid grid-cols-2 grid-rows-4 pt-4 pb-4 gap-4 md:flex flex-row md:gap-14 w-full md:justify-between justify-start items-start md:px-10 px-2.5 md:py-10 py-2.5 md:mb-4 mb-2.5"
                  >
                    <div className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]">
                      <p className="text-[#666] text-2xl">Imsak</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.imsak}
                      </p>
                    </div>

                    <div
                      id="subuh"
                      className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]"
                    >
                      <p className="text-[#666] text-2xl">Shubuh</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.subuh}
                      </p>
                    </div>

                    <div className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]">
                      <p className="text-[#666] text-2xl">Terbit</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.terbit}
                      </p>
                    </div>

                    <div className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]">
                      <p className="text-[#666] text-2xl">Duha</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.duha}
                      </p>
                    </div>

                    <div className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]">
                      <p className="text-[#666] text-2xl">Zuhur</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.zuhur}
                      </p>
                    </div>

                    <div className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]">
                      <p className="text-[#666] text-2xl">Asar</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.asar}
                      </p>
                    </div>

                    <div className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]">
                      <p className="text-[#666] text-2xl">Magrib</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.magrib}
                      </p>
                    </div>

                    <div className="flex flex-col items-center border-r-0 border-solid border-[#D9D9D9]">
                      <p className="text-[#666] text-2xl">Isya</p>
                      <p className="text-[#00A39D] font-bold text-4xl">
                        {todayJadwalPuasa?.isya}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
