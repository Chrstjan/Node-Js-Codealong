import { supabase } from '../Config/supabase.config.js';

export default class SongModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('id, title, content, created_at, artist(name)')
                if (error) {
                    throw new Error(error)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Fejl af kald af sange ${error}`);
        }
    }

    static async getRecordById(id) {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('id, title, content, created_at, artist(name)')
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
            console.error(`Fejl af kald af sange ${error}`);
        }
    }

    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
            .from('songs')
            .insert([
                {
                    title: formdata.title,
                    content: formdata.content,
                    lyrics: formdata.lyrics,
                    artist_id: formdata.artist_id
                }
            ])
            
            if (error) {
                throw new Error(error.message)
            }
            else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl i at oprette sang: ${error}`);
            
        }
    }

   static async updateRecord(formdata) {
    try {
        let { data, error} = await supabase
            .from("songs")
            .update([
                {
                    title: formdata.title,
                    content: formdata.content,
                    lyrics: formdata.lyrics,
                    artist_id: formdata.artist_id
                }
            ])
            .eq('id', formdata.id)
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
    }
    catch (error) {
        console.error(`Error updating song: ${error}`);
    }
   }

   static async deleteRecord(formdata) {
    try {
        let { data, error } = await supabase
            .from("songs")
            .delete()
            .eq("id", formdata.id)
            if (error) {
                throw new Error(error.message)
            }
            else {
                return data;
            }
    }
    catch (error) {
        console.error(`Error deleting song: ${error}`);
    }
   }
}