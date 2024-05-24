import express from "express";
import ProfileModel from "../Models/profile.model.js";
export const ProfileController = express.Router();

//This router gets all the profiles data objects in a array
ProfileController.get("/profiles", async (req, res) => {
    const data = await ProfileModel.getAllProfiles();
    res.status(200).send(data);
});

/*
 This router gets a specific profile data object 
 with a url paramenter
 with the id of the user data object
 */
ProfileController.get("/profiles/:id", async (req, res) => {
    //Using a destructuring assignment for more clearn code
    const { id } = req.params;
    const data = await ProfileModel.getProfileById(id)
    res.status(200).send(data);
});

//This router creates a profile data object from the values from a post form
ProfileController.post("/profiles", async (req, res) => {
    const data = await ProfileModel.createProfile(req.body);
    res.status(201).send(data);
});

/*
 This router updates specific a profile data object
 with the id of the data object 
 that needs to be updated and the new data
 the data object should contain 
 */
ProfileController.put("/profiles", async (req, res) => {
    const data = await ProfileModel.updateProfile(req.body);
    res.status(200).send(data);
});

/*
 This router deletes a specific profile data object
 with the id of the data object  
 that needs to be deleted 
 */
ProfileController.delete("/profiles", async (req, res) => {
    const data = await ProfileModel.deleteProfile(req.body);
    res.status(200).send(data);
})