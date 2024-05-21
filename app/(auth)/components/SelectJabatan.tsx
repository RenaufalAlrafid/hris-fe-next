import React from "react";
import { getJabatan } from "../register/action";

export type Divisi = {
  id: number;
  name: string;
};

export type Jabatan = {
  id: number;
  name: string;
  divisi: Divisi;
};

interface Props {
  datas: Jabatan[];
}

export default function SelectJabatan({ datas = [] }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold">Pilih Jabatan</label>
      <select
        name="jabatan"
        id="jabatan"
        className="rounded-lg border border-gray-300 p-2"
      >
        {datas.map((data: Jabatan) => (
          <option key={data.id} value={data.id}>
            {data.name} - {data.divisi.name}
          </option>
        ))}
      </select>
    </div>
  );
}
