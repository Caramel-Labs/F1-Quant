import * as service from '../services/prospectsService.js';

export async function addProspect(req, res) {
  try {
    const prospect = await service.addProspect(req.body);
    res.status(201).json(prospect);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}

export async function getAllProspects(req, res, next) {
  try {
    const prospects = await service.getAllProspects();
    res.json(prospects);
  } catch (err) {
    next(err);
  }
}