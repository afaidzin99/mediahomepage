export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const getProfilDesa = await fetch(
    "https://sid.kemendesa.go.id/profile/data?province_id=35&city_id=3515&district_id=3515090&village_id=3515090020"
  );

  const getPopulasiDesa = await fetch(
    "https://sid.kemendesa.go.id/population-statistic/data?province_id=35&city_id=3515&district_id=3515090&village_id=3515090020&on=population"
  );

  if (!getPopulasiDesa.ok) {
    throw new Error(
      `HTTP error on SIDESA POPULASI! status: ${getPopulasiDesa.status}`
    );
  }
  if (!getProfilDesa.ok) {
    throw new Error(
      `HTTP error on PROFIL DESA! status: ${getProfilDesa.status}`
    );
  }

  const profilDesa: sidesaDataTypes = await getProfilDesa.json();
  const populasiDesa: sidesaPopulasiDataTypes = await getPopulasiDesa.json();

  const responsesToUser: responseTypes = {
    population: {
      total: profilDesa.heading.population,
      family: profilDesa.heading.family,
      married: populasiDesa.kawin,
      unmarried: populasiDesa.belum_kawin,
      divorced_live: populasiDesa.cerai_hidup,
      divorced_dead: populasiDesa.cerai_mati,
      wni: populasiDesa.wni,
      wna: populasiDesa.wna,
      not_nik: populasiDesa.total_not_nik,
      not_kk: populasiDesa.total_not_kk,
      last_update: populasiDesa.last_update,
      men: {
        total: populasiDesa.gender_men,
        age: {
          "0-4": populasiDesa.l_0_4,
          "5-9": populasiDesa.l_5_9,
          "10-14": populasiDesa.l_10_14,
          "15-19": populasiDesa.l_15_19,
          "20-24": populasiDesa.l_20_24,
          "25-29": populasiDesa.l_25_29,
          "30-34": populasiDesa.l_30_34,
          "35-39": populasiDesa.l_35_39,
          "40-44": populasiDesa.l_40_44,
          "45-49": populasiDesa.l_45_49,
          "50-54": populasiDesa.l_50_54,
          "55-59": populasiDesa.l_55_59,
          "60-64": populasiDesa.l_60_64,
          "65-69": populasiDesa.l_65_69,
          "70-74": populasiDesa.l_70_74,
          "75+": populasiDesa.l_75_plus,
        },
      },
      women: {
        total: populasiDesa.gender_women,
        age: {
          "0-4": populasiDesa.p_0_4,
          "5-9": populasiDesa.p_5_9,
          "10-14": populasiDesa.p_10_14,
          "15-19": populasiDesa.p_15_19,
          "20-24": populasiDesa.p_20_24,
          "25-29": populasiDesa.p_25_29,
          "30-34": populasiDesa.p_30_34,
          "35-39": populasiDesa.p_35_39,
          "40-44": populasiDesa.p_40_44,
          "45-49": populasiDesa.p_45_49,
          "50-54": populasiDesa.p_50_54,
          "55-59": populasiDesa.p_55_59,
          "60-64": populasiDesa.p_60_64,
          "65-69": populasiDesa.p_65_69,
          "70-74": populasiDesa.p_70_74,
          "75+": populasiDesa.p_75_plus,
        },
      },
    },
    idm: {
      score: parseFloat(profilDesa.heading.idm.data.score),
      status: profilDesa.heading.idm.data.status,
      year: parseInt(profilDesa.heading.idm.data.year),
    },
    bumdes: {
      count: profilDesa.heading.bumdes.total_bumdes,
      name: profilDesa.heading.bumdes.count_bumdes,
    },
    anggaran: {
      pagu: parseInt(profilDesa.heading.vf.pagu),
      penyaluran: parseInt(profilDesa.heading.vf.total_rkd),
    },
    tatakelola_rt: profilDesa.heading.total_data_rt,
    last_update_individu: profilDesa.heading.last_update_individu,
    last_update_keluarga: profilDesa.heading.last_update_keluarga,
    last_update_rt: profilDesa.heading.last_update_rt,
    last_update_desa: profilDesa.heading.last_update_desa,
  };

  return new Response(JSON.stringify(responsesToUser), {
    headers: {
      "content-type": "application/json",
    },
  });
}

type responseTypes = {
  population: {
    total: number;
    family: number;
    men: {
      total: number;
      age: {
        "0-4": number;
        "5-9": number;
        "10-14": number;
        "15-19": number;
        "20-24": number;
        "25-29": number;
        "30-34": number;
        "35-39": number;
        "40-44": number;
        "45-49": number;
        "50-54": number;
        "55-59": number;
        "60-64": number;
        "65-69": number;
        "70-74": number;
        "75+": number;
      };
    };
    women: {
      total: number;
      age: {
        "0-4": number;
        "5-9": number;
        "10-14": number;
        "15-19": number;
        "20-24": number;
        "25-29": number;
        "30-34": number;
        "35-39": number;
        "40-44": number;
        "45-49": number;
        "50-54": number;
        "55-59": number;
        "60-64": number;
        "65-69": number;
        "70-74": number;
        "75+": number;
      };
    };
    married: number;
    unmarried: number;
    divorced_live: number;
    divorced_dead: number;
    wni: number;
    wna: number;
    not_nik: number;
    not_kk: number;
    last_update: string;
  };
  idm: {
    score: number;
    status: string;
    year: number;
  };
  bumdes: {
    count: number;
    name: string;
  };
  anggaran: {
    pagu: number;
    penyaluran: number;
  };
  tatakelola_rt: number;
  last_update_individu: string;
  last_update_keluarga: string;
  last_update_rt: string;
  last_update_desa: string;
};

type sidesaDataTypes = {
  heading: {
    total_desa: number;
    population: number;
    family: number;
    location_code: null | string;
    kdprov: string;
    province: string;
    kdkota: string;
    city: string;
    kdkecamatan: string;
    district: string;
    kddesa: string;
    village: string;
    idm: {
      by: string;
      data: {
        score: string;
        status: string;
        year: string;
      };
    };
    bumdes: {
      count_bumdes: string;
      count_bumdesma: null | string;
      total_bumdes: number;
      total_bumdesma: number;
    };
    summary_bumdes: {
      bumdes: {
        bumdes_mendaftar_nama: number;
        bumdes_perbaikan_nama: number;
        bumdes_verifikasi_nama: number;
        bumdes_mendaftar_badan_hukum: number;
        bumdes_perbaikan_badan_hukum: number;
        bumdes_verifikasi_badan_hukum: number;
      };
      bumdesma: {
        bumdesma_mendaftar_nama: number;
        bumdesma_perbaikan_nama: number;
        bumdesma_verifikasi_nama: number;
        bumdesma_mendaftar_badan_hukum: number;
        bumdesma_perbaikan_badan_hukum: number;
        bumdesma_verifikasi_badan_hukum: number;
      };
    };
    vf: {
      pagu: string;
      total_rkd: string;
      percentage: string;
    };
    location: {
      data: {
        kdprov: string;
        nmprov_kemendesa: string;
        kdkota: string;
        kd_kota_kemendesa: string;
        nmkota_kemendesa: string;
        kdkecamatan: string;
        kd_kec_kemendesa: string;
        nmkecamatan_kemendesa: string;
        kddesa: string;
        kd_desa_kemendesa: string;
        nmdesa_kemendesa: string;
      };
      type: string;
    };
    total_population_idm: number;
    total_family_idm: number;
    total_individu: number;
    last_update_individu: string;
    total_keluarga: number;
    last_update_keluarga: string;
    last_update_rt: string;
    last_update_desa: string;
    total_data_individu: number;
    total_data_keluarga: number;
    total_data_rt: number;
    total_data_desa: number;
  };
};

type sidesaPopulasiDataTypes = {
  total_data: number;
  gender_men: number;
  gender_women: number;
  l_0_4: number;
  l_5_9: number;
  l_10_14: number;
  l_15_19: number;
  l_20_24: number;
  l_25_29: number;
  l_30_34: number;
  l_35_39: number;
  l_40_44: number;
  l_45_49: number;
  l_50_54: number;
  l_55_59: number;
  l_60_64: number;
  l_65_69: number;
  l_70_74: number;
  l_75_plus: number;
  p_0_4: number;
  p_5_9: number;
  p_10_14: number;
  p_15_19: number;
  p_20_24: number;
  p_25_29: number;
  p_30_34: number;
  p_35_39: number;
  p_40_44: number;
  p_45_49: number;
  p_50_54: number;
  p_55_59: number;
  p_60_64: number;
  p_65_69: number;
  p_70_74: number;
  p_75_plus: number;
  belum_kawin: number;
  kawin: number;
  cerai_hidup: number;
  cerai_mati: number;
  wni: number;
  wna: number;
  total_not_nik: number;
  total_not_kk: number;
  total_desa: number;
  last_update: string;
};
