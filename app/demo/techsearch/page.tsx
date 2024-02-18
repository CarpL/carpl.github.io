import TechSearch from "@/app/demo/techsearch/(components)/TechSearch";
import { title } from "@/components/primitives";

export default function Page() {
	return (
		<>
			<h1 className={title()}>TechSearch</h1>
			<TechSearch />
		</>
	);
}
