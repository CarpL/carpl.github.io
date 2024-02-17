﻿"use client"
import React, { useState } from "react";
import { Chip } from "@nextui-org/chip";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { Autocomplete, AutocompleteSection, AutocompleteItem } from "@nextui-org/autocomplete";
import { techItems } from "./tech";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TechGrid({ searchTags, addNewTag }: { searchTags: string[], addNewTag: CallableFunction }) {
    const currentPath = usePathname();

    const filteredTech = techItems.filter((item) => {
        return searchTags.every(searchTag => item.tags.includes(searchTag))
    })

    return (
        <>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {filteredTech.map((tech) => (
                    <Card key={tech.id} isPressable>
                        <CardBody><Link href={{ pathname: currentPath + '/' + tech.id }}>{tech.displayName}</Link></CardBody>
                        <CardFooter className="gap-1">
                            {tech.tags.map(tag => (
                                <Button key={tech.id + "-" + tag} onPress={(e) => { addNewTag(tag) }} size="sm" radius="full">{tag}</Button>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}