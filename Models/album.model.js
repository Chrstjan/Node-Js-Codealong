import { supabase } from "../Config/supabase.config.js";

export default class albumModel {
    static async getAllAlbums() {
        try {
            const { data, error } = await supabase
                .from('albums')
                .select('id, title, artist(name), release_date')
            if (error) {
                throw new Error(error)
            }
            else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl af kald af album ${error}`);
        }
    }
}