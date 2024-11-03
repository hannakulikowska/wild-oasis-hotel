"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type FilterType = "all" | "small" | "medium" | "large";

interface ButtonProps {
  filter: FilterType;
  handleFilter: (filter: FilterType) => void;
  activeFilter: FilterType;
  children: React.ReactNode;
}

function Button({filter, handleFilter, activeFilter, children}: ButtonProps) {
  return (
    <button className={`px-5 py-2 border border-primary-800 hover:bg-primary-700 ${filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''}`} onClick={() => handleFilter(filter)}>{children}</button>
  )
}

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") as FilterType ?? "all" ;

  function handleFilter(filter: FilterType) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {scroll: false})
  }

  return (
    <div className="flex gap-2">
      <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>All cabins</Button>
      <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>1-3 guests</Button>
      <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>4-7 guests</Button>
      <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>8-12 guests</Button>
    </div>
  )
}
