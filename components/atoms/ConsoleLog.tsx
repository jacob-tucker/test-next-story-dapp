import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStory } from "@/lib/context/StoryContext";

export function ConsoleLog() {
  const { transactions } = useStory();
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="w-[150px] bottom-[0px] right-[50px] fixed"
      >
        <Button
          variant="outline"
          className="rounded-tr-none rounded-br-none gap-[10px]"
        >
          <Icon icon="tabler:arrow-up" />
          Open log
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Console log</SheetTitle>
          <SheetDescription>
            View all of your transactions and their results.
          </SheetDescription>
        </SheetHeader>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Action</TableHead>
              <TableHead>Tx Hash</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.txHash}>
                <TableCell className="font-medium">{tx.action}</TableCell>
                <TableCell className="flex items-center gap-[5px]">
                  {tx.txHash}{" "}
                  <a
                    href={`https://explorer.storyprotocol.xyz/transactions/${tx.txHash}`}
                    target="_blank"
                    style={{ color: "rgb(255, 40, 37)" }}
                  >
                    <Icon icon="tabler:link" />
                  </a>
                </TableCell>
                <TableCell>{JSON.stringify(tx.data)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}