"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import { GithubLogo } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              className="text-gray-800 transition-all hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50"
              href="/"
            >
              home
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* GitHub link placed left to the ThemeToggle */}
          <Link
            href="https://github.com/jefferypippitt"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50"
          >
            <Button variant="outline" size="icon">
              <GithubLogo size={20} />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
