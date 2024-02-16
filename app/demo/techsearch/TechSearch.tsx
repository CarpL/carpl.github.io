"use client"
import React, { useState } from "react";
import { Chip } from "@nextui-org/chip";
import { Card, CardBody } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { Autocomplete, AutocompleteSection, AutocompleteItem } from "@nextui-org/autocomplete";
import { tags } from "./tags";

export default function TechSearch({ searchTags, addNewTag, setSearchTags }: { searchTags: string[], addNewTag: CallableFunction, setSearchTags: CallableFunction }) {

    const [inputValue, setInputValue] = useState<string>('')

    const selectableTags = tags.filter(tag => !searchTags.includes(tag.id));

    function handleClose(tagToRemove: string) {
        setSearchTags(searchTags.filter(tag => tag !== tagToRemove));
    }

    function handleAddTag(key: React.Key) {
        if (typeof key != "string") {
            return;
        }
        addNewTag(key);
    }

    function handleSearchInput(value: string) {
        console.log('searchinput', value)
        setInputValue(value);
    }
    return (
        <>

            <Autocomplete
                inputValue={inputValue}
                defaultItems={tags}
                variant="bordered"
                label="Add Tag"
                placeholder="Start Typing a Tag Name"
                labelPlacement="inside"
                className="max-w-xs"
                onInputChange={handleSearchInput}
                onSelectionChange={handleAddTag}
            >
                {
                    selectableTags.map((tag) => (
                        <AutocompleteItem key={tag.id}>
                            {tag.id}
                        </AutocompleteItem>
                    ))
                }
            </Autocomplete>
            <div className="flex flex-wrap gap-2">
                {searchTags.map((tag) => (
                    <Chip
                        key={tag}
                        onClose={() => handleClose(tag)}
                        variant="flat">
                        {tag}
                    </Chip>
                ))}
            </div>
        </>
    )
}