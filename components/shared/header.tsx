import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { User, ShoppingCart, ArrowRight} from "lucide-react";
interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/*left part*/}
        <div className="flex items-center gap-4">
          <Image
            alt="logo"
            src="/assets/logo.png"
            width={35}
            height={35}
          ></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>
        {/*center part*/}
        {/*right part*/}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button variant="default" className="group relative">
              <b>520 $</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex gap-3 items-center transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16}  strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight size={20} className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
