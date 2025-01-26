"use client";

import { LogoCarousel } from "./ui/logo-carousel";
import { Card, CardContent } from "./ui/card";

export default function Partners() {
  return (
    <div className="relative py-10 lg:py-20">
      <Card>
        <CardContent>
          <LogoCarousel />
        </CardContent>
      </Card>
    </div>
  );
}
