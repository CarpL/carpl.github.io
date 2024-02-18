"use client"
import React, { useState } from "react";
import { Chip } from "@nextui-org/chip";
import { Card, CardBody } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { Autocomplete, AutocompleteSection, AutocompleteItem } from "@nextui-org/autocomplete";
import { Tag, TagGroup, tagGroups } from "../(data)/tags";

export default function Search({ searchTags, addNewTag, setSearchTags }: { searchTags: string[], addNewTag: CallableFunction, setSearchTags: CallableFunction }) {

    const [inputValue, setInputValue] = useState<string>('')

    const tags = tagGroups.reduce((accumulator: Tag[], current: TagGroup) => ([...accumulator, ...current.tags]), [])
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
                    tagGroups.map((tagGroup) => (
                        <AutocompleteSection key={tagGroup.id} title={tagGroup.id}>
                            {tagGroup.tags.map((tag) => (
                                <AutocompleteItem key={tag.id}>
                                    {tag.id}
                                </AutocompleteItem>
                            ))}
                        </AutocompleteSection>
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