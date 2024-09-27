import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/DataTableColumnHeader";
import { useEffect, useState } from "react";
import ReservationFilters from "@/components/reservations/ReservationFilters";
import { format } from "date-fns";
import { useRouter } from "next/router";

export default function Home() {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
    },
    {
      accessorKey: "businessDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Business Date" />
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
    },
    {
      accessorKey: "shift",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Shift" />
      ),
    },
    {
      accessorKey: "start",
      header: "Start Time",
      cell: ({ row }) => format(new Date(row.original.start), "PPpp"),
    },
    {
      accessorKey: "end",
      header: "End Time",
      cell: ({ row }) => format(new Date(row.original.end), "PPpp"),
    },
    {
      accessorKey: "quantity",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Quantity" />
      ),
    },
    {
      accessorKey: "customer",
      cell: ({ row }) =>
        `${row.original.customer.firstName} ${row.original.customer.lastName}`,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Customer Name" />
      ),
    },
    {
      accessorKey: "area",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Area" />
      ),
    },
    {
      accessorKey: "guestNotes",
      header: "Guest Notes",
    },
  ];
  const router = useRouter();
  const [filters, setFilters] = useState({
    date: "",
    status: "",
    shift: "",
    area: "",
    search: "",
  });

  const filteredReservations = data.filter((reservation) => {
    const fullName =
      `${reservation.customer.firstName} ${reservation.customer.lastName}`.toLowerCase();
    const matchesSearch = filters.search
      ? fullName.includes(filters.search.toLowerCase())
      : true;

    return (
      (!filters.date || reservation.businessDate === filters.date) &&
      (!filters.status || reservation.status === filters.status) &&
      (!filters.shift || reservation.shift === filters.shift) &&
      (!filters.area || reservation.area === filters.area) &&
      matchesSearch
    );
  });

  const resetFilters = () => {
    setFilters({
      date: "",
      status: "",
      shift: "",
      area: "",
      search: "",
    });
  };

  const isFilteredFilled = !(
    filters.date ||
    filters.status ||
    filters.shift ||
    filters.area ||
    filters.search
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilters({
      date: params.get("date") || "",
      status: params.get("status") || "",
      shift: params.get("shift") || "",
      area: params.get("area") || "",
      search: params.get("search") || "",
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(filters);
    if (!isFilteredFilled) {
      router.push(`?${params.toString()}`, undefined, { shallow: true });
    } else {
      router.push("/", undefined, { shallow: true });
    }
  }, [filters, isFilteredFilled]);
  return (
    <main className="max-w-full mx-auto p-8 space-y-4">
      <ReservationFilters
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        isFilteredFilled={isFilteredFilled}
      />
      <DataTable columns={columns} data={filteredReservations} />
    </main>
  );
}

const data = [
  {
    id: 1,
    businessDate: "06.08.2018",
    status: "CHECKED OUT",
    shift: "BREAKFAST",
    start: "2018-08-06T08:00:00Z",
    end: "2018-08-06T09:00:00Z",
    quantity: 1,
    customer: {
      firstName: "Yuri",
      lastName: "Burchell",
    },
    area: "BAR",
    guestNotes: "Likes the blue cheese burger",
  },
  {
    id: 2,
    businessDate: "27.09.2024",
    status: "NOT CONFIRMED",
    shift: "BREAKFAST",
    start: "2018-08-05T08:00:00Z",
    end: "2018-08-05T09:00:00Z",
    quantity: 2,
    customer: {
      firstName: "Arvie",
      lastName: "Thurlbourne",
    },
    area: "BAR",
    guestNotes: "",
  },
  {
    id: 3,
    businessDate: "10.09.2018",
    status: "CONFIRMED",
    shift: "LUNCH",
    start: "2018-09-10T12:00:00Z",
    end: "2018-09-10T13:00:00Z",
    quantity: 4,
    customer: {
      firstName: "Sophia",
      lastName: "Gray",
    },
    area: "LOUNGE",
    guestNotes: "Prefers window seat",
  },
  {
    id: 4,
    businessDate: "12.09.2018",
    status: "CANCELLED",
    shift: "DINNER",
    start: "2018-09-12T19:00:00Z",
    end: "2018-09-12T20:00:00Z",
    quantity: 3,
    customer: {
      firstName: "Jacob",
      lastName: "Smith",
    },
    area: "PATIO",
    guestNotes: "",
  },
  {
    id: 5,
    businessDate: "15.08.2018",
    status: "CHECKED OUT",
    shift: "BREAKFAST",
    start: "2018-08-15T09:00:00Z",
    end: "2018-08-15T10:00:00Z",
    quantity: 1,
    customer: {
      firstName: "Liam",
      lastName: "Jones",
    },
    area: "LOUNGE",
    guestNotes: "Allergic to nuts",
  },
  {
    id: 6,
    businessDate: "16.08.2018",
    status: "NOT CONFIRMED",
    shift: "BREAKFAST",
    start: "2018-08-16T08:30:00Z",
    end: "2018-08-16T09:30:00Z",
    quantity: 2,
    customer: {
      firstName: "Olivia",
      lastName: "Brown",
    },
    area: "BAR",
    guestNotes: "",
  },
  {
    id: 7,
    businessDate: "20.08.2018",
    status: "CONFIRMED",
    shift: "LUNCH",
    start: "2018-08-20T13:00:00Z",
    end: "2018-08-20T14:00:00Z",
    quantity: 5,
    customer: {
      firstName: "James",
      lastName: "Garcia",
    },
    area: "PATIO",
    guestNotes: "Celebrating anniversary",
  },
  {
    id: 8,
    businessDate: "22.08.2018",
    status: "CHECKED OUT",
    shift: "DINNER",
    start: "2018-08-22T19:00:00Z",
    end: "2018-08-22T20:30:00Z",
    quantity: 2,
    customer: {
      firstName: "Emily",
      lastName: "Davis",
    },
    area: "BAR",
    guestNotes: "",
  },
  {
    id: 9,
    businessDate: "25.08.2018",
    status: "CANCELLED",
    shift: "LUNCH",
    start: "2018-08-25T12:30:00Z",
    end: "2018-08-25T13:30:00Z",
    quantity: 3,
    customer: {
      firstName: "Michael",
      lastName: "Martinez",
    },
    area: "LOUNGE",
    guestNotes: "",
  },
  {
    id: 10,
    businessDate: "26.08.2018",
    status: "NOT CONFIRMED",
    shift: "DINNER",
    start: "2018-08-26T18:30:00Z",
    end: "2018-08-26T20:00:00Z",
    quantity: 4,
    customer: {
      firstName: "Emma",
      lastName: "Rodriguez",
    },
    area: "BAR",
    guestNotes: "Requests a quiet area",
  },
  {
    id: 11,
    businessDate: "28.08.2018",
    status: "CONFIRMED",
    shift: "BREAKFAST",
    start: "2018-08-28T08:00:00Z",
    end: "2018-08-28T09:00:00Z",
    quantity: 2,
    customer: {
      firstName: "William",
      lastName: "Hernandez",
    },
    area: "PATIO",
    guestNotes: "Vegetarian",
  },
  {
    id: 12,
    businessDate: "01.09.2018",
    status: "CHECKED OUT",
    shift: "BREAKFAST",
    start: "2018-09-01T09:00:00Z",
    end: "2018-09-01T10:00:00Z",
    quantity: 1,
    customer: {
      firstName: "Ava",
      lastName: "Lopez",
    },
    area: "LOUNGE",
    guestNotes: "Prefers a window seat",
  },
  {
    id: 13,
    businessDate: "02.09.2018",
    status: "NOT CONFIRMED",
    shift: "LUNCH",
    start: "2018-09-02T12:00:00Z",
    end: "2018-09-02T13:00:00Z",
    quantity: 4,
    customer: {
      firstName: "Mason",
      lastName: "Gonzalez",
    },
    area: "BAR",
    guestNotes: "",
  },
  {
    id: 14,
    businessDate: "03.09.2018",
    status: "CANCELLED",
    shift: "DINNER",
    start: "2018-09-03T19:30:00Z",
    end: "2018-09-03T20:30:00Z",
    quantity: 3,
    customer: {
      firstName: "Charlotte",
      lastName: "Wilson",
    },
    area: "LOUNGE",
    guestNotes: "",
  },
  {
    id: 15,
    businessDate: "05.09.2018",
    status: "CHECKED OUT",
    shift: "BREAKFAST",
    start: "2018-09-05T08:00:00Z",
    end: "2018-09-05T09:00:00Z",
    quantity: 2,
    customer: {
      firstName: "Ethan",
      lastName: "Anderson",
    },
    area: "PATIO",
    guestNotes: "Needs vegan options",
  },
  {
    id: 16,
    businessDate: "08.09.2018",
    status: "CONFIRMED",
    shift: "LUNCH",
    start: "2018-09-08T12:00:00Z",
    end: "2018-09-08T13:00:00Z",
    quantity: 5,
    customer: {
      firstName: "Isabella",
      lastName: "Thomas",
    },
    area: "BAR",
    guestNotes: "Celebrating birthday",
  },
  {
    id: 17,
    businessDate: "10.09.2018",
    status: "NOT CONFIRMED",
    shift: "DINNER",
    start: "2018-09-10T18:00:00Z",
    end: "2018-09-10T19:00:00Z",
    quantity: 4,
    customer: {
      firstName: "Alexander",
      lastName: "Taylor",
    },
    area: "LOUNGE",
    guestNotes: "",
  },
];
