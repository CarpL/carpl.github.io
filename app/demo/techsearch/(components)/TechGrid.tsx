"use client"
import React, { Suspense, useEffect, useState } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TechItem, techItems } from "@/app/demo/techsearch/(data)/tech";

export default function TechGrid({ searchTags, addNewTag }: { searchTags: string[], addNewTag: CallableFunction }) {
    const currentPath = usePathname();

    const [filteredTech, setFilteredTech] = useState<TechItem[]>([]);

    useEffect(() => {
        setFilteredTech(techItems.filter((item) => {
            return searchTags.every(searchTag => item.tags.some((tag) => (tag.id == searchTag)))
        }));
    }, [searchTags])

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {filteredTech.map((tech) => (
                <Card key={tech.id} isPressable>
                    <CardBody><Link href={{ pathname: currentPath + '/' + tech.id }}>{tech.displayName}</Link></CardBody>
                    <CardFooter className="gap-1">
                        {tech.tags.map(tag => {

                            let buttonStyle = { background: tag.colour }
                            return <Button style={buttonStyle} key={tech.id + "-" + tag.id} onPress={(e) => { addNewTag(tag.id) }} size="sm" radius="full">{tag.id}</Button>
                        })}
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}