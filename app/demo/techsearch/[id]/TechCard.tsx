import { TechItem } from "@/app/demo/techsearch/(data)/tech"
import { subtitle, title } from "@/components/primitives"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip"
import { Divider } from "@nextui-org/divider";

export default function TechCard({ techItem }: { techItem: TechItem }) {

    return (
        <Card>
            <CardHeader className="flex gap-3">
                <h1 className={title({ size: 'sm' })}>{techItem.displayName}</h1>
            </CardHeader>
            <Divider />
            <CardBody className="flex-col gap-3 ">
                <section>
                    <h3 className={subtitle()}>Description</h3>
                    <p>Description goes here...</p>
                </section>
                <section>
                    <h3 className={subtitle()}>Tags</h3>
                    <div className="flex gap-2">
                        {techItem.tags.map((tag) => (
                            <Chip key={tag}>{tag}</Chip>
                        ))}
                    </div>
                </section>


            </CardBody>
            {/* <CardFooter>

            </CardFooter> */}
        </Card >

    );
}