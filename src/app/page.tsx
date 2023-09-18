import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Zimpo } from "./api/zimpo";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default async function Home() {
  const zimpoTable = await Zimpo();
  const highlightNew = (text: string) => {
    if (text && text.includes("new")) {
      const parts = text.split('new');
      return (
        <>
          {parts[0]}
          <span className="text-red-500">new</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 gap-10">

      <h1 className="text-5xl font-extrabold">Zimpo Store </h1>

      <p className="text-center">
        Todos os dados desse site estão vindo da tabela oficial da{" "}
        <Link className="underline" target="_blank" href="https://docs.google.com/spreadsheets/d/1Mb0rkyBCKomXbh9SXpY0C2s9jYWPe4DsZBHcH8op-ag/edit#gid=328515099">
          Zimpo Store
        </Link>
      </p>

      <Input placeholder="Busque o produto desejado" />

      <Table>
        <TableCaption>
          Desenvolvido por{" "}
          <Link className="underline" target="_blank" href="https://birobirobiro.dev">
            birobirobiro
          </Link>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[500px]">Produto</TableHead>
            <TableHead className="text-center">Pronta Entrega</TableHead>
            <TableHead className="text-center">Encomenda 1</TableHead>
            <TableHead className="text-center lg:text-right">Encomenda 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(zimpoTable).map((product) => {
            const productData = zimpoTable[product][0];

            return (
              <TableRow key={productData.ID}>
                <TableCell className="font-medium">{highlightNew(product)}</TableCell>
                <TableCell className="text-center">
                  {highlightNew(productData && productData["Pronta Entrega"])}
                </TableCell>
                <TableCell className="text-center">
                  {highlightNew(productData && productData["Encomenda 1"])}
                </TableCell>
                <TableCell className="text-right">
                  {highlightNew(productData && productData["Encomenda 2"])}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
