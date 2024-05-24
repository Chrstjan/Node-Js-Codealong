import { supabase } from "../Config/supabase.config.js";

export default class ProfileModel {
    /*
     This selects all the rows from the table in the
     profiles table, and returns all of the data object
     inside that table in a array
    */
    static async getAllProfiles() {
        try {
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                if (error) {
                    throw new Error(error.message);
                }
                else {
                    return data;
                }
        }
        catch (error) {
            console.error(`Fejl af kald af profiler: ${error}`);
        }
    }

    /*
     This selects all the rows from the table in the
     profiles table, and returns the data object with the id
     that matches the id from the url paramenter 
     */
    static async getProfileById(id) {
        try {
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .single()
            if (error) {
                throw new Error(error.message)
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.error(`Fejl af kald a profil med id: ${error}`);
        }
    }

    /*
     This selects the profiles table and 
     creates a new data object with key value pairs
     that comes from user input in a form
    */
    static async createProfile(formdata) {
        try {
            const { data, error } = await supabase
                .from("profiles")
                .insert([
                    {
                        firstname: formdata.firstname,
                        middle_name: formdata.middle_name,
                        lastname: formdata.lastname,
                        address: formdata.address,
                        postal_code: formdata.postal_code,
                        city: formdata.city,
                        country: formdata.country,
                        email: formdata.email,
                        tel_number: formdata.tel_number,
                        gender: formdata.gender,
                        birthday: formdata.birthday
                    }
                ])
                if (error) {
                    throw new Error(error.message);
                }
                else {
                    return data;
                }
        }
        catch (error) {
            console.error(`Fejl i at oprette profil: ${error}`);
        }
    }

    /*
     This selects the profiles table and 
     gets the specific data object with the correct id to 
     update the data object with the new key value pairs
     that comes from user input in a form
    */
    static async updateProfile(formdata) {
        try {
            let { data, error } = await supabase
                .from("profiles")
                .update([
                    {
                        firstname: formdata.formdata,
                        middle_name: formdata.middle_name,
                        lastname: formdata.lastname,
                        address: formdata.address,
                        postal_code: formdata.postal_code,
                        city: formdata.city,
                        country: formdata.country,
                        email: formdata.email,
                        tel_number: formdata.tel_number,
                        gender: formdata.gender,
                        birthday: formdata.birthday
                    }
                ])
                .eq("id", formdata.id)
                if (error) {
                    throw new Error(error.message);
                }
                else {
                    return data;
                }
        }
        catch (error) {
            console.error(`Fejl i at opdatere profil: ${error}`);
        }
    }

    /*
     This selects the profiles table and 
     gets the specific data object with 
     the correct id to delete
    */
    static async deleteProfile(formdata) {
        try {
            let { data, error } = await supabase
                .from("profiles")
                .delete()
                .eq("id", formdata.id)
                if (error) {
                    throw new Error(error.message);
                }
                else {
                    return data;
                }
        }
        catch (error) {
            console.error(`Fejl i at slette profil: ${error}`);
        }
    }
}