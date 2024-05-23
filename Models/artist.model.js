import { log } from 'console';
import { supabase } from '../Config/supabase.config.js';

export default class artistModel {
    static async getAllArtists() {
        try {
            const { data, error } = await supabase
                .from('artist')
                .select('id, name')
                if (error) {
                    throw new Error(error)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Fejl af kald af artister ${error}`);
        }
    }

    static async getSingleArtist(id) {
        try {
            const { data, error } = await supabase
                .from('artist')
                .select('id, name')
                .eq('id', id)
                .single()
                if (error) {
                    throw new Error(error)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Fejl af kald af artist ${error}`);
        }
    }

    static async createArtist(formdata) {
        try {
            const { data, error } = await supabase
                .from('artist')
                .insert([
                    {
                        name: formdata.name,
                        description: formdata.description,
                        image: formdata.image
                    }
                ])
                if (error) {
                    throw new Error(error)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Fejl af kald af artist ${error}`);
        }
    }
}