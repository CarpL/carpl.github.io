"use client"
import React, { useState } from "react";
import { Chip } from "@nextui-org/chip";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { Autocomplete, AutocompleteSection, AutocompleteItem } from "@nextui-org/autocomplete";
import { techItems } from "./tech";
import { Button } from "@nextui-org/button";




export default function TechDisplay({ searchTags, addNewTag }: { searchTags: string[], addNewTag: CallableFunction }) {
    const filteredTech = techItems.filter((item) => {
        return searchTags.every(searchTag => item.tags.includes(searchTag))
    })

    return (
        <>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {filteredTech.map((tech) => (
                    <Card isPressable className="max-w-[340px]">
                        <CardBody>{tech.id}</CardBody>
                        <CardFooter className="gap-1">
                            {tech.tags.map(tag => (
                                <Button onPress={(e) => { addNewTag(tag) }} size="sm" radius="full">{tag}</Button>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}