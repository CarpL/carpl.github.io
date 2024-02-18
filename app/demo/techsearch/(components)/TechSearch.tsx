'use client'
import Search from "./Search";
import TechGrid from "./TechGrid";
import { Suspense, useState } from "react";
import { Spinner } from "@nextui-org/spinner";

export default function TechSearch() {
    const [searchTags, setSearchTags] = useState<string[]>([])

    function addNewTag(tag: string) {
        if (tag == '') {
            return;
        }
        let set = new Set([...searchTags, tag]);
        setSearchTags(Array.from(set))
    }

    return (
        <>
            <Search searchTags={searchTags} addNewTag={addNewTag} setSearchTags={setSearchTags} />
            <Suspense fallback={<Spinner size='lg' />}>
                <TechGrid searchTags={searchTags} addNewTag={addNewTag} />
            </Suspense>
        </>
    );
}
