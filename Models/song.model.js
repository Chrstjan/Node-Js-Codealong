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
                    id: formdata.id,
                    title: formdata.title,
                    content: formdata.content,
                    created_at: formdata.created_at,
                    updated_at: formdata.updated_at,
                    artist_id: formdata.artist_id,
                    lyrics: formdata.lyrics
                    
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
            console.error(`Fejl i oprettelse af sang: ${error}`);
        }
    }
}