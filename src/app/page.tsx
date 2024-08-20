import { Table } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/users">Ir para usuários</Link>
      <Table />
    </main>
  );
}
