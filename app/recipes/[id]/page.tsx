"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@phosphor-icons/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LoadingDetails from "@/app/loading-details";

interface RecipeDetails {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const RecipeDetailsPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/recipes/${id}`)
        .then((res) => {
          setRecipe(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <LoadingDetails />;
  }

  if (!recipe) return <p>No recipe found</p>;

  return (
    <div className="container mx-auto py-12 md:py-16 lg:py-20">
      <Link href="/">
        <Button className="mb-4" variant="default">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Home
        </Button>
      </Link>
      <Card className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/3">
          <Image
            alt={recipe.name}
            className="w-full h-auto object-cover md:m-4 md:mr-0"
            src={recipe.image}
            height={300}
            width={300}
            style={{
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="md:w-2/3 p-4 md:pl-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-4">
              {recipe.name}
            </CardTitle>
            <CardDescription className="text-lg mb-2">
              {recipe.prepTimeMinutes} minutes to prepare
            </CardDescription>
            <CardDescription className="text-lg mb-2">
              {recipe.mealType.join(", ")}
            </CardDescription>
            <CardDescription className="text-lg mb-2">
              {recipe.difficulty} difficulty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-xl font-semibold mb-4">
              Ingredients
            </CardTitle>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <CardTitle className="text-lg font-semibold mb-2">
              Calories
            </CardTitle>
            <Badge variant="secondary">{recipe.caloriesPerServing}</Badge>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default RecipeDetailsPage;
