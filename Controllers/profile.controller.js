import express from "express";
import ProfileModel from "../Models/profile.model.js";
export const ProfileController = express.Router();

ProfileController.get("/profiles", async (req ,res) => {
    const data = await ProfileModel.getAllProfiles();
    res.send(data);
});

ProfileController.get("/profiles/:id", async (req ,res) => {
    const { id } = req.params;
    const data = await ProfileModel.getProfileById(id)
    res.send(data);
});

ProfileController.post("/profiles", async (req, res) => {
    const data = await ProfileModel.createProfile(req.body);
    res.send(data);
});

ProfileController.put("/profiles", async (req, res) => {
    const data = await ProfileModel.updateProfile(req.body);
    res.send(data);
});

ProfileController.delete("/profiles", async (req, res) => {
    const data = await ProfileModel.deleteProfile(req.body);
    res.send(data);
})