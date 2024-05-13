import { Card, CardContent } from "@/components/ui/card";
import { BarberShop } from "@prisma/client";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: BarberShop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <Image
          src={barbershop.imageURL}
          height={0}
          width={0}
          sizes="100vh"
          className="h-[159px] w-full"
        />
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
