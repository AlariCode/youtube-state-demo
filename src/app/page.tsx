import { Catalog } from "@/components/Catalog/Catalog";
import { Filter } from "@/components/Filter/Filter";
import { DirectionEnum, TypeEnum } from "@/components/Filter/constants";

export default function Home({ searchParams }: { searchParams: { type: string, dir: string } }) {
	function convertToType(str: string | null): TypeEnum | null {
		if (Object.values(TypeEnum).includes(str as TypeEnum)) {
			return str as TypeEnum;
		}
		return null
	}

	function convertToDir(str: string | null): DirectionEnum | null {
		if (Object.values(DirectionEnum).includes(str as DirectionEnum)) {
			return str as DirectionEnum;
		}
		return null
	}

	return (
		<>
			<Filter
				courseType={convertToType(searchParams.type) ?? TypeEnum.COURSE}
				courseDirection={convertToDir(searchParams.dir) ?? DirectionEnum.FRONTEND}
			/>
			<Catalog
				courseType={convertToType(searchParams.type) ?? TypeEnum.COURSE}
				courseDirection={convertToDir(searchParams.dir) ?? DirectionEnum.FRONTEND}
			/>
		</>
	);
}
