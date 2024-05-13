import { useGetCountryByCodeQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function CountryDetail() {
    const router = useRouter();
    const { countryCode: code } = router.query;

    const { data } = useGetCountryByCodeQuery({
        variables: { code: typeof code === "string" ? code : "" },
        skip: typeof code === "undefined",
    });

    const country = data?.country;

    return (
        <section className="flex justify-center">
            <div className="flex flex-col items-center py-12 gap-6">
                <span>{country?.emoji}</span>
                <p>Name: {country?.name} ({country?.code})</p>
                <p>Continent : {country?.continent?.name} </p>
            </div>
        </section>
    );
}