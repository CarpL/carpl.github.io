import { Input } from "@nextui-org/input";
import { SearchIcon } from "../icons";
import { Listbox } from "@nextui-org/listbox";
import { mapPropsVariants } from "@nextui-org/system";

export default function SearchSelect() {
    return (
        <>
            {/* <Select
                selectionMode="multiple"
                onChange={(e) => { setSearchTags(e.target.value.split(",")) }}
                renderValue={(items) => {
                    return (
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Chip
                                    key={item.key}
                                    onClose={() => handleClose(item.textValue)}
                                    variant="flat">
                                    {item.textValue}
                                </Chip>
                            ))}
                        </div>
                    )
                }}
            >
                {
                    tags.map((tag, index) => (
                        <SelectItem key={tag}>
                            {tag}
                        </SelectItem>
                    ))
                }
            </Select > */}
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm",
                }}
                labelPlacement="outside"
                placeholder="Search..."
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
            />
        </>
    );
}