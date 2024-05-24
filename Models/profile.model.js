import { supabase } from "../Config/supabase.config.js";

export default class ProfileModel {
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

    static async createProfile(formdata) {
        try {
            const { data, error } = await supabase
                .from("profiles")
                .insert([
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