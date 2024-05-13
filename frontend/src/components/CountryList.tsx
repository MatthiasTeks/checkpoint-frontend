import { useCountriesQuery } from '@/graphql/generated/schema';
import Link from 'next/link';

export default function CountryList() {
    const { data, loading } = useCountriesQuery()

    if (loading) return <p>Loading...</p>;

    const countries = data?.countries || [];

    return (
        <section className="flex justify-center">
            <div className="flex flex-col md:flex-row item-center gap-4">
                {countries.map(country => (
                    <CountryIcon key={country.id} name={country.name} emoji={country.emoji} code={country.code}/>
                ))}
            </div>
        </section>
    );
}

function CountryIcon({ name, emoji, code }: { name: string, emoji: string, code: string }) {
    return (
        <Link href={`/country/${code}`}>
            <div className="cursor-pointer">
                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <span>{emoji}</span>
                </div>
            </div>
        </Link>
    );
}


  