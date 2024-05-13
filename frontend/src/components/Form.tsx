import { useState } from "react";
import { useAddCountryMutation, useGetContinentsQuery } from "@/graphql/generated/schema";
import { Button } from "./Button";
import Input from "./Input";
import Select from "./Select";


export default function Form() {
    const { data, loading } = useGetContinentsQuery()
    const [addCountry] = useAddCountryMutation();

    const [formData, setFormData] = useState({
        name: '',
        emoji: '',
        code: '',
        continent: 1
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if(name === "continent"){
            if(continents !== undefined){
                let continent = continents.find(continent => continent.name === value);
                let continentId = continent ? continent.id : null;
                if(continentId){
                    setFormData(prev => ({...prev, [name]: continentId}));
                }
            }
        } else {
            setFormData(prev => ({...prev, [name]: value}));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await addCountry({
                variables: {
                    data: {
                        name: formData.name,
                        emoji: formData.emoji,
                        code: formData.code,
                        continent: {
                            id: formData.continent
                        } 
                    }
                }
            });
            console.log('Country added:', response.data);
        } catch (error) {
            console.error('Error adding country:', error);
        }
    };
  
    const continents = data?.continents || [];

    if (loading) return <p>Loading...</p>;

    return (
        <form className="flex justify-center py-12" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-end gap-4">
                <Input name="name" label="Name" value={formData.name} onChange={handleInputChange} required />
                <Input name="emoji" label="Emoji" value={formData.emoji} onChange={handleInputChange} required />
                <Input name="code" label="Code" value={formData.code} onChange={handleInputChange} required />
                { continents.length > 0 ?
                    <Select name="continent" options={continents} defaultValue={continents[0].name} onChange={handleInputChange}/> 
                    : ""
                }

                <Button type="submit" className="ml-6 px-6 h-10">Add</Button>
            </div>
        </form>
    );
  }