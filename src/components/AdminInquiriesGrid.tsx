"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
  type ColDef,
} from "ag-grid-community";
import type { AgGridReactProps } from "ag-grid-react";

export type InquiryRow = {
  id: string;
  createdAt: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  products: string;
  message: string;
};

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGridReact = dynamic<AgGridReactProps<InquiryRow>>(
  () => import("ag-grid-react").then((module) => module.AgGridReact),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-96 place-items-center bg-white text-sm text-charcoal/60">
        Loading inquiries…
      </div>
    ),
  },
);

const gridTheme = themeQuartz.withParams({
  backgroundColor: "#FFFFFF",
  borderColor: "rgba(13, 40, 29, 0.12)",
  foregroundColor: "#0D281D",
  headerBackgroundColor: "#0D281D",
  headerTextColor: "#FFFFFF",
  fontFamily: "var(--font-jakarta), Arial, sans-serif",
  fontSize: "13px",
});

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
});

export function AdminInquiriesGrid({ rows }: { rows: InquiryRow[] }) {
  const [search, setSearch] = useState("");
  const columnDefs = useMemo<ColDef<InquiryRow>[]>(
    () => [
      {
        field: "createdAt",
        headerName: "Received",
        valueFormatter: ({ value }) =>
          value ? dateFormatter.format(new Date(value)) : "",
        minWidth: 190,
      },
      { field: "name", minWidth: 150 },
      { field: "company", minWidth: 170 },
      { field: "email", minWidth: 220 },
      { field: "phone", minWidth: 150 },
      { field: "country", minWidth: 140 },
      {
        field: "products",
        minWidth: 180,
        wrapText: true,
        autoHeight: true,
      },
      {
        field: "message",
        minWidth: 280,
        flex: 2,
        wrapText: true,
        autoHeight: true,
      },
    ],
    [],
  );
  const defaultColDef = useMemo<ColDef<InquiryRow>>(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
      minWidth: 120,
    }),
    [],
  );

  return (
    <section>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="block w-full sm:max-w-sm">
          <span className="sr-only">Search inquiries</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search all inquiries..."
            className="w-full border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-forest focus:ring-2 focus:ring-gold/20"
          />
        </label>
        <p className="text-xs text-charcoal/60">
          {rows.length} {rows.length === 1 ? "inquiry" : "inquiries"}
        </p>
      </div>

      <div className="h-[680px] overflow-hidden border border-forest/10 bg-white shadow-soft">
        <AgGridReact
          rowData={rows}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          getRowId={({ data }) => data.id}
          quickFilterText={search}
          pagination
          paginationPageSize={20}
          paginationPageSizeSelector={[10, 20, 50, 100]}
          theme={gridTheme}
        />
      </div>
    </section>
  );
}
