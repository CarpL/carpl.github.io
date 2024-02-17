"use client"
import { title } from "@/components/primitives";
import TechSearch from "./TechSearch";
import TechDisplay from "./TechGrid";
import { useState } from "react";

export default function Page() {
	const [searchTags, setSearchTags] = useState<string[]>([])

	function addNewTag(tag: string) {
		console.log('addtag', tag)
		if (tag == '') {
			return;
		}
		let set = new Set([...searchTags, tag]);
		setSearchTags(Array.from(set))
	}

	return (
		<>
			<h1 className={title()}>TechSearch</h1>
			<TechSearch searchTags={searchTags} addNewTag={addNewTag} setSearchTags={setSearchTags} />
			<TechDisplay searchTags={searchTags} addNewTag={addNewTag} />
		</>
	);
}
