const Project = require('../models/projectModel');

const createProject = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newProject = new Project({ title, description, status });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('members');
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createProject, getProjects };
