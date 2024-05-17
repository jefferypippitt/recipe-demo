"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LoadingHome from "@/app/loading-home";

interface Recipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setRecipes(res.data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingHome />;
  }

  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} passHref>
            <Card className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <Image
                alt={recipe.name}
                className="w-full h-64 object-cover"
                height={300}
                width={300}
                src={recipe.image}
                style={{
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
              <CardContent className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <CardTitle className="text-lg font-semibold mb-2 truncate">
                    {recipe.name}
                  </CardTitle>
                  <CardDescription className="text-semi-bold">
                    Rating: {recipe.rating}
                  </CardDescription>
                </div>
                <CardDescription className="mt-4 text-muted-foreground">
                  <Badge>{recipe.cuisine}</Badge>
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
