const Incident = require("../models/Incident");

exports.getAllIncidents = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalIncidents = await Incident.countDocuments();

    const incidents = await Incident.find().skip(skip).limit(limit).lean();

    const totalPages = Math.ceil(totalIncidents / limit);

    return res.status(200).json({
      success: true,
      data: incidents,
      pagination: {
        totalIncidents,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

exports.getIncidentById = async (req, res, next) => {
  try {
    const incident = await Incident.findById(req.params.id).lean();
    if (!incident)
      return res
        .status(404)
        .json({ success: false, message: "Incident not found" });
    return res.status(200).json({ success: true, data: incident });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid Id",
    });
  }
};

exports.createIncident = async (req, res, next) => {
  const { title, description, severity } = req.body;
  if (!title || !description || !["Low", "Medium", "High"].includes(severity)) {
    return res.status(400).json({ success: false, message: "Invalid input" });
  }
  try {
    const newIncident = new Incident({ title, description, severity });
    await newIncident.save();
    return res.status(201).json({ success: true, data: newIncident });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot create incident",
    });
  }
};

exports.deleteIncident = async (req, res, next) => {
  try {
    const deleted = await Incident.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res
        .status(404)
        .json({ success: false, message: "Incident not found" });
    return res
      .status(200)
      .json({ success: true, message: "Incident deleted successfully" });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid Id",
    });
  }
};
