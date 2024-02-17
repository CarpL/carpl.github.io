import TechCard from "@/app/demo/techsearch/[id]/TechCard";
import { TechItem, getById, techItems } from "@/app/demo/techsearch/tech";
import { title } from "@/components/primitives";

export default function Page(props: { params: { id: string } }) {

    const techItem = getById(props.params.id)
    if (techItem == null) {
        return (
            <>
                <p>Not Found</p>
            </>
        )
    }

    return (
        <TechCard techItem={techItem} />
    )

}

export async function generateStaticParams() {

    return techItems.map((item) => ({
        id: item.id,
    }))
}
